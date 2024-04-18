---
title: 第二周
---

# Limitations of the One-Time pad

## Theorem: if (Gen, Enc, Dec) with message space M is perfectly secret, then |K| $\geq$ |M|.

- Take the uniform distribution on M
- Take any cipher text c
- Consider the set $M(c) = \{Dec_k(k)\}_{k \in K}$
- $|M(c)| \leq |K| \leq |M|$, so there is some m that is not in M(c)

$$Pr[M = m | C = c] =0 \neq Pr[M = m]$$

# Computational secrecy

Allow a scheme leaked information with tiny probability to eavesdroppers with bounded computational resources

## Perfect indistinguishability

$\Pi = (Gen, Enc, Dec)$

Informally:

- Two messages $m_0, m_1$. One chosen at random and encrypted (using uniform k) to give $c \leftarrow Enc_k(m_b)$. Adversary A given c and tries to determine which message was encrypted

- $\Pi$ is secure if no adversary A can guess correctlly with probability any better than $\frac{1}{2}$

Formally:

- Let $\Pi = (Gen, Enc, Dec)$ be an encryption scheme, and A an adversay (eavesdropper)

- Define a randomized experiment $PrivK_{A, \Pi}$:
    1. A ouputs $m_0, m_1 \in M$
    2. $k \leftarrow Gen, b \leftarrow \{0, 1\}, c \leftarrow Enc_k(m_b)$
    3. $b' \leftarrow A(c)$. A succeeds if $b = b'$, and experiment evaluates to 1 in this case

## Computational indistinguishability(concrete version)

$\Pi$ is $(t, \epsilon)-indistinguishable$ if for all attackers A running in time at most t, it holds that

$$Pr[PrivK_{A, \Pi} = 1] \leq \frac{1}{2} + \epsilon$$

- Parameters $t, \epsilon$ are what we ultimately care about in the read world
- Does not lead to a clean theory. Sensitive to exact computational model

# Asymptotic security

- Introduce security parameter $n \in Z^+$
 - Fixed by honest parties at initialization
 - Allows users to tailor the security level
   - For now, can view as the key length
 - Know by adversary

- View running times of all parties, and success probability of the adversay, as function of n.

## Computational indistinguishability(asymptotic)

- Computational indistinguishability:
  - Security may fail with probability negligible in c
  - Restrict attention to attackers running in time polynomial in n

### Definitions

- A function $f : Z^+ \rightarrow Z^+$ is **polynomial** if there exist $\{c_i\}$ such that $f(n) < \Sigma_i c_in_i$ for all n

- A function $f : Z^+ \rightarrow R^{+, 0}$ is **negligible** if for every polynomial p there is an N such that $f(n) < \frac{1}{p(n)}$ for n > N

- "Efficient" = "(probabilistic) polynomial-time" (PPT)
- Convenient closure properties
  - Poly * Poly = Poly
  - Poly * Negligible = Negligible

### (Re)defining encryption

A private-key encryption scheme is defined by three PPT algorithms(Gen, Enc, Dec):

- Gen: takes as input $1^n$, outputs k. (Assume |k| > n)
- Enc: takes as input a key k and message $m \in \{0, 1\}^*$; outputs ciphertext c.

$$c \rightarrow Enc_k(m)$$

- Dec: takes key k and ciphertext c as input; outpus a message m or "error".

### Computational indistinguishability(asymptotic version)

- Fix $\Pi, A$
- Define a randomized exp't $PrivK_{A, \Pi}(n)$:
    1. A(1^n) ouputs $m_0, m_1 \in \{0, 1\}^*$ of equal length
    2. $k \leftarrow Gen(1^n), b \leftarrow \{0, 1\}, c \leftarrow Enc_k(m_n)$
    3. $b' \leftarrow A(c)$; A succeeds if b = b', and experiment evaluates to 1 in this case

### Compuattional indistinguishability(asymptotic version)

$\Pi$ is indistinguishable if for all PPT attackers A, there is a negligible function $\epsilon$ such that

$$Pr[PrivK_{A, \Pi}(n)] \leq \frac{1}{2} + \epsilon(n)$$


# Pseudorandomness

## concrete

Let D be a distribution on n-bit strings

- D is $(t, \epsilon)-pseudorandom$  if for all running in time $\leq t$, 

$$|Pr_{x \leftarrow D}[A(x) = 1] - Pr_{x \leftarrow U_n}[A(x) = 1]| \leq \epsilon$$

## asymptotic

$\{D_n\}$ is pseudorandom if for every probabilistic, polynomial-time A, there is a negligible function $\epsilon$ such that

$$|Pr_{x \leftarrow D_n}[A(x) = 1] - Pr_{x \leftarrow U_n}[A(x) = 1]| \leq \epsilon(n)$$

## Pseudorandom (number) generators (PRG/PRNGs)

PRG is an efficient, deterministic algorithm that expands a short, uniform seed into a longer, pseudorandom ouput

### PRGs

- Let G be a derterministic, poly-time algorithm
- G is expanding: $|G(x)| = p(|x|) > |x|$
  - D_n = the distribution on p(n)-bit strings defined by choosing $x \leftarrow U_n$ and outputting G(x)
  - $Pr_{D_n}[y] = Pr_{U_n}[G(n) = y] = \Sigma_{x:G(x) = y}Pr_{U_n}[x] = \Sigma_{x:G(x) = y}2^{-n} = \frac{|{x:G(x) = y}}{2^n}|$