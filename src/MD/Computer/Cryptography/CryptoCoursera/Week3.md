---
title: 第三周
---

# Stronger Security Notions

## CPA-security

Nowadays, this is the minimal notion of security an encryption scheme should satisfy.

- Fix $\Pi, A$
- Define a randomized exp't $PrivCPA_{A, \Pi}(n)$:

1. k $\leftarrow Gen(1^n)$
2. A($1^n$) interacts with an encryption oracle $Enc_k(.)$, and then ouputs $m_0, m_1$ of the same length
3. $b \leftarrow {0, 1}, c \leftarrow Enc_k(m_b)$, give c to A
4. A can continue to interact with $Enc_k(.)$
5. A outputs $b'$; A succeeds if b = b', and experiment evaluates to 1 in this case

$\Pi$ is **secure against chosen-plaintext attacks (CPA-secure)** if for all PPT attackers A, there is a negligible function $\epsilon$ such that

$$Pr[PrivCPA_{A, \Pi}(n) = 1] \leq \frac{1}{2} + \epsilon(n)$$

# Pseudorandom functions and Block ciphers

## Pseudorandom functions(PRFs)

- F is a pseudorandom function if $F_k$, for uniform key $k \in \{0, 1\}^n$, is indistinguishable from a uniform function $f \in Func_n$

- Formally, for all poly-time D:

$$|Pr_{k \leftarrow \{0, 1\}^n}[D^{F_k(.)} = 1] - Pr_{f \leftarrow Func_n}[D^{f(.)} = 1]| \leq \epsilon(n)$$

## Block ciphers

Block ciphers are practical constructions of pseudorandom permutations

- No asymptotics:n $F: \{0, 1\}^n \times \{0, 1\}^m \rightarrow \{0, 1\}^m$

    - n = "key length"
    - m = "block length"

## AES

Advanced encryption standard (AES)

- Block length = 128bits
- Key length = 128, 192, 256 bits

# CPA-Secure Encryption from PRFs/Block Ciphers

An example satisfy CPA-Secure

## CPA-Secure encryption
- Let F be a keyed function
- Gen($1^n$): choose a uniform key $k \in \{0, 1\}^n$
- $Enc_k(m)$, for $|m| = |k|$:
  - Choose uniform $r \in \{0, 1\}^n$
  - Output ciphertext $\langle r, F_k(r) \oplus m \rangle$
- $Dec_k(\langle c_1, c_2 \rangle)$: output $c_2 \oplus F_k(c_1)$

---

- Let $\mu(n) = Pr[PrivCPA_{Adv, \Pi}(n) = 1]$
- Let q(n) be a bound on the number of encryption queries made by attacker
- If f = $F_k$ for uniform k, then the view of Adv is exactly as in $PrivCPA_{Adv, \Pi}(n)$

$$\Rightarrow Pr_{k \leftarrow \{0, 1\}^n}[D^{F_k(.) = 1}] = Pr[PrivCPA_{Adv, \Pi}(n) = 1] = \mu(n)$$

- If F is uniform, there are two sub-cases
  - $r^*$ was queried some other time (event Repeat)
  - $r^*$ was not queried some other time

- $Pr_f[D^{f(.) = 1}] \leq Pr_f[D^{f(.)} = 1 | \lnot Repeat] + Pr[Repeat]$
  - $Pr[Repeat] \leq \frac{q(n)}{2^n}$
  - $Pr_f[D^{f(.)} = 1 | \lnot Repeat] = \frac{1}{2}$

Since F is pseudorandom

$$\Rightarrow |\mu(n) - Pr_f[D^{f(.)} = 1]| \leq \epsilon(n)$$

$$\Rightarrow \mu(n) \leq \frac{1}{2} + \frac{q(n)}{2^n} + \epsilon(n)$$

$$\Rightarrow \mu(n) \leq \frac{1}{2} + \epsilon'(n)$$

# Modes of Encryption

## CTR Mode

- Choose $ctr \leftarrow \{0, 1\}^n$, set $c_0 = ctr$
- For i = 1 to t:
  - $c_i = m_i \oplus F_k(ctr + i)$
- Output $c_0, c_1, \cdots, c_t$

Ciphertext expansion is just 1 block

Theorem: If F is a pseudorandom function, then CTR mode is CPA-secure.

## CBC mode

- $Enc_k(m_1, m_2, \cdots, m_t)$
  - Choose random $c_0 \leftarrow \{0, 1\}^n$ (also callled the IV)
  - For i = 1 to t:
    - $c_i = F_k(m_i \oplus c_{i-1})$
  - Output $c_0, c_1, \cdots, c_t$

- Decryption requires F to be invertible
- Ciphertext expansion is just 1 block

Theorem: If F is a pseudorandom function, then CBC mode is CPA-secure

## ECB mode

- $Enc_k(m_1, \cdots, m_t) = F_k(m_1), \cdots, F_k(m_t)$
- Deterministic
  - Not CPA-secure!

# Security Against Chosen-Ciphertext Attacks

## Malleability

(Informal:) A scheme is malleable if it is possible to modify a ciphertext and thereby cause a predictable change to the plaintext

All the schemes we have seen so far are malleable!

example: flip bit when one time pad

## CCA-security

- Define a randomized exp't $PrivCCA_{A, \Pi}(n):$
1. $k \leftarrow Gen(1^n)$
2. $A(1^n)$ interacts with an encryption oracle $Enc_k(.)$, and a decryption oracle $Dec_k(.)$, and then outputs $m_0, m_1$ of the same length
3. $b \leftarrow \{0, 1\}$, $c \leftarrow Enc_k(m_b)$
4. A can continue to interact with $Enc_k(.), Dec(.)$, but may not request decryption of c
5. A outputs b'; A succeeds if b = b', and experiment evaluates to 1 in this case.

- $\Pi$ is securee against chosen-ciphertext attacks(CCA-secure) if for all PPT attackers A, there is a negligible function $\epsilon$ such that

$$Pr[PrivCCA_{A, \Pi}(n) = 1] \leq \frac{1}{2} + \epsilon(n)$$

- If a scheme is malleable, then it cannot be CCA-secure
- CCA-security implies non-malleability

# Padding-Oracle Attacks

TODO