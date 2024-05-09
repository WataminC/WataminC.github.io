---
title: 第五周
---

Number theory

## Factoring
- Multiplying two numbers is easy; factoring a number is hard
  - Given x, y, easy to compute x.y
  - Given x.y, hard to find x and y

## RSA 

:::tip Recall
Let G be a finite group of order m. For any integer e, define $f_e(g) = g^e$. If gcd(e, m) = 1, then $f_e$ is a permutation
:::

- Group $Z^*_N$ of order $\phi(N)$
- Fix e with $gcd(e, \phi(N)) = 1$
- If $ed = 1 \pmod{\phi(N)}$, raising to the d-th power is the inverse of raising to the e-th power
  - I.e., $(x^e)^d = x \pmod{N}, (x^d)^e = x \pmod{N}$
  - $x^d$ is the e-th root of x modulo N

- If p, q are known
- If p, q are unknown

## The RSA assumption 

- Need to specify how N, e are generated
- GenRSA: on input $1^n$, outputs (N, e, d) with $N = pq$ a product of two n-bit primes, and with $ed = 1 \pmod{\phi(N)}$
- Experiment $RSA-inv_{A, GenRSA}(n)$
  - Compute (N, e, d)
  - Choose uniform $y \in Z^*_N$
  - Run A(N, e, y) to get x
  - Experiment evaluates to 1 if $x^e = y \pmod{N}$

- The RSA problem is hard relative to GenRSA if for all PPT algorithms A

$$Pr[RSA-inv_{A, GenRSA}(n) = 1] < negl(n)$$

## Implementing RSA

- Choice of e
  - Does not seem to affect hardness of the RSA problem 

## RSA and factoring 

Factoring is easy $\Rightarrow$ RSA problem is easy

:::warning
Hardness of the RSA problem is not known to be impiled by hardness of factoring
:::

## Discrete-logarithm problem

- Fix cyclic group G of the order m, and generator g
- Define $log_gh$ to be this x - the discrete logarithm of h with respect to g(in the group G)

- Dlog problem in G: Given g, h, compute $log_gh$

### Diff-Hellman problems

- Fix group G with generator g
- Define $DH_g(h_1, h_2) = DH(g^x, g^y) = g^{xy}$
- Computational Diffie-Hellman(CDH) problem:
  - Given g, h1, h2, compute $DH_g(h1, h2)$
- Decisional Diffie-Hellman(DDH) problem:
  - Given g, h1, h2, distinguish the correct $DH_g(h_1, h_2)$ from a uniform element of G