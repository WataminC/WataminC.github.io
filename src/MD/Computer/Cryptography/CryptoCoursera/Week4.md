---
title: 第四周
---

Message Integrity

# MAC

## Secrect vs. Integrity

What about **integrity**?

- Ensuring that a received message originated from the intended party, and was not modified

- Standard error-correction techniques not enough

- Secrecy and integrity are orthogonal concerns
  - Possible to have either one without the other
- Encryption does not (in general) provide any integrity
  - Related to the issue of malleability

## Message authentication code(MAC)

- Amessage authentication code is defined by three PPT algorithms (Gen, Mac, Vrfy):
  - Gen: takes as input $1^n$; outpus k. (Assume $|k| \geq n$)
  - Mac: takes as input key k and message $m \in \{0, 1\}^*$; outputs tag t
$$t := Mac_k(m)$$
  - Vrfy: takes key k, message m, and tag t as input; outputs 1("accept") or 0("reject")

::: tip tips
For all m and all k ouput by Gen, $Vrfy_k(,, Mac_k(m)) = 1$
:::

## Definition

- Threat model
  - "Adaptive chosen-message attack"
  - Assume the attacker can induce the sender to authenticate messages of the attacker's choice
- Security goal
  - "Existential unforgeability"
  - Attacker should be unable to forge a valid tag on any message not authenticated by the sender

### Formal definition

- Fix A, $\Pi$
- Define randomized experiment $Forge_{A, \Pi}(n)$:
  1. k $\leftarrow$ Gen(1^n)
  2. A interacts with an oracle Mac_k(.); let M be the set of messages submitted to this oracle
  3. A outputs (m, t)
  4. A succeeds, and the experiment evaluates to 1, if $Vrfy_k(m, t) = 1$ and $m \notin M$

:::important Security for MACs
$\Pi$ is secure if for all PPT attackers A, there is a negligible function $\epsilon$ such that

$$Pr[Forge_{A, \Pi}(n) = 1] \leq \epsilon(n)$$
:::

- Note that replay attacks are not prevented
  - No stateless mechanism can prevent them
- Replay attacks can be a significant real-world concern
- Need to protect against replay attacks at a higher level

# A Fixed-Length MAC

## Construction

- Let $F$ be a length-preserving pseudorandom function
- Construct the following MAC$\Pi$:
  - Gen - choose a uniform key k for F
  - $Mac_k(m)$ - output $F_k(m)$
  - $Vrfy_k(m, t)$ - output 1 iff $F_k(m) = t$

:::tip Theorem
$\Pi$ is a secure MAC
:::

## Analysis

- When D interacts with $F_k$ for uniform k, the view of the adversay is identical to its view in the real MAC experiment
  - $Pr[D^{F_k} outputs 1] = Pr[Forge_{Adv, \Pi}(n) = 1]$
- When D interacts with uniform f, then seeing $f(m_1), \cdots, f(m_i)$ does not help predict f(m) for any $m \not \{m_1, \cdots, m_i\}$ 
  - $Pr[D^f outputs 1] = 2^{-n}$
- Since F is a pseudorandom function
$$|Pr[D^{F_k}outputs 1] - Pr[D^f outputs 1]| < negl(n)$$

$$\Rightarrow Pr[Forge_{Adv, \Pi} = 1] = Pr[D^{F_k} outputs 1] \leq 2^{-n} + negl(n)$$

# CBC-MAC

![](/assets/images/CBC-MAC.png)

## CBC-MAC vs. CBC-mode
- CBC-MAC is deterministic (no IV)
- In CBC-MAC, only the final value is ouput 
  - Verification is done by re-computing the result
- Both of these are essential for security

## Security of (basic) CBC-MAC

- If F is a length-preserving pseudorandom function, hen for any fixed $l$, basic CBC-MAC is a secure MAC for meesages of length $ln$

- I.e., the sender and receiver must agree on the length parameter $l$ in advance
  - Basic CBC-MAC is not secure if this is not done!

## CBC-MAC extensions

- Several ways to handle variable length messages
- One of the simplest: prepend the message length before applying (basic) CBC-MAC
  - Can also be adapted to handle messages whose length is not a multiple of the block length

![](/assets/images/CBC-MAC1.png)

# Hash function

- (Cryptographic) has function: maps arbitrary length inputs to a short, fixed-length digest
- Can define keyed or unkeyed hash functions
  - Formally, keyed hash functions are needed
  - In practice, hash functions are unkeyed

## Collision-resistance

- Let $H: \{0, 1\}^* \rightarrow \{0, 1\}^n$ be a hash function
- A collision is a pair of distince inputs $x, x^\prime$ such that $H(x) = H(x^\prime)$
- H is collision-resistant if it is infeasible to find a collision in H

## Generic hash-function attacks
- What is the best "generic" collision attack on hash function $H: \{0, 1\}^* \rightarrow \{0, 1\}^n$
- If we compute $H(x_1), \cdots, H(x_{2^n+1})$, we are guaranteed to find a collision

## "Birthday" attacks
- Compute $H(x_1), \cdots, H(x_{2^{n/2}})$
- The probability of a collision is related to the so-called birthday paradox
  - How many people are needed to have 50% chance that some two people share a birthday

:::tip Theorem
When the number of balls is $O(N^{1/2})$, the probability of a collision is 50%
:::

So we need 2n-bit ouput length to get security against attackers running in $2^n$ time

:::note note
twice the length of block cipher keys
:::

## Hash Functions in practice

- MD5
  - Developed in 1991
  - 128-bit output length
  - Collisions found in 2004, should no longer be used
- SHA-1
  - Introduced in 1995
  - 160-bit output length
  - Theoretical analyses indicate some weaknesses
  - Very common; current trend to migrate to SHA-2
- SHA-2
  - 256-bit or 512-bit output lengths
  - No known significant weaknesses
- SHA-3/Keccak
  - Result of a public competition from 2008-2012
  - Very different design than SHA family
  - Supports 224, 256, 384, and 512-bit outputs

# HMAC

## Hash-and-Mac

![Hash-and-Mac](/assets/images/HashMac.png)

## Security

If the MAC is secure for fixed-length messages, and H is collision-resistant, then the previous construction is a secure MAC for arbitrary-length messages

## Drawback

- Hash function + block cipher-based MAC
  - Block length mismatch
  - Need to implement two crypto primitives

# Authenticated Encryption

## Encrypt then authenticate

![](/assets/images/enThenAuth.png)

## Security

- If the encryption scheme is CPA-secure and the MAC is secure then:
  - The combination is CPA-secure
  - The combination is "secure MAC"

- The combination achieves something stronger:
  - Given ciphertexts corresponding to (chosen) plaintexts $m_1, \cdots, m_k$, it is infeasible for an attacker to generate any new, valid ciphertext!
- Authenticated encryption scheme
  - Infeasible to generate any new, valid ciphertexts

:::important 
In combination with CPA-security, this implies CCA-security
:::

:::warning
- The encrypt-then-authenticate approach (with independent keys) is a sound way to construct an authenticated encryption scheme
- Other, more efficient constructions have been proposed and are an active area of research and standardization
:::

# Secure Communication Sessions