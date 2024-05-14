---
title: 同余方程
---

# 中国剩余定理

# 二次剩余

## Some easy conclusions

Every second columns of these tables is reflectional 

$$(p-a)^2 \equiv a^2 \pmod{p}$$

:::tip Proof
$$(p-a)^2 = p^2 - 2pa + a^2 \equiv a^2 \pmod{p}$$

- This formula means the congruence $x^2 \equiv a \pmod{p}$ has **two incongruent** solutions, a and p-a
:::

## Proposition

Let $p$ be an odd prime and b an integer not divisible by p. Then, the congruence 

$$x^2 \equiv b \pmod{p}$$

has either no solutions or exactly two incongruent solutions modulo p.

# QR and QNR

## Definition

Let $m, n \in Z$ with $gcd(m, n) = 1$. Then m is called a quadratic residue modulo n (short for QR) if $m \equiv x^2 \pmod{n}$ for some $x \in Z$, and m is called a quadratic nonresidue module n (short for QNR) otherwise.

:::important Theorem
Let p be an odd prime, then there are exactly (p-1)/2 QRs modulo p and exactly (p-1)/2 QNRs modulo p.JJ
:::

:::tip Proof
We map the integers from $Z^*_p$ to QRs modulo p by squaring. Since Proposition 1 tell us that two incongruent integers map to one QR, and we have p-1 squares to consider, then there are exactly (p-1)/2 QRs modulo p. The remaining (p-1)/2 integers are QNRs modulo p.
:::

- Proposition

Let $\mathbb{QR}_p$ denotes the set of every $QR$ modulo p, $\mathbb{QR}_p$ is a group under multiplication.

:::tip Proposition
Let p be an odd prime, then

1. The product of two QRs modulo p is a QR, denoted as 

$$QR \times QR = QR$$

2. The product of a QR modulo p and a QNR modulo p is a QNR modulo p, denoted as 

$$QR \times QNR = QNR$$

3. The product of two QNRs modulo p is a QR, denoted as 

$$QNR \times QNR = QR$$

- Informal
1. QR = e
2. QNR = a
:::

## Legendre symbol

### Definition

Let p be an odd prime and let $n \in Z$. The Legendre symbol (n/p) is defined as 

$$
(\frac{n}{p}) = 
\begin{cases}
1 && \text{if n is a quadratic residue mod p} \\
-1 && \text{if n is a quadratic nonresidue mod p} \\
0 && p | n
\end{cases}
$$

### Proposition

If p is an odd prime, $a, b \in Z$ and a, b is nondivisible by p

1. If $a \equiv b \pmod{b}$, then $(\frac{a}{p}) = (\frac{b}{p})$
2. $(\frac{a}{p})(\frac{b}{p}) = (\frac{ab}{p})$
3. $(\frac{a^2}{p}) = 1$

:::important Euler's Criterion
Let p be an odd prime and let $a \in Z$ with $gcd(a, p) = 1$. Then

$$(\frac{a}{p}) \equiv a^{(p-1)/2} \pmod{p}$$
:::

:::tip Theorem
$$
(\frac{-1}{p}) =
\begin{cases}
1 && \text{ if } p \equiv 1 \pmod{4} \\
-1 && \text{ if } p \equiv -1 \pmod{-1} 
\end{cases}
$$

Easy by using Euler's criterion
:::

:::tip Theorem about (2/p)
Let p be an odd prime. Then

$$(\frac{2}{p}) = (-1)^{(p^2-1)/8}$$
:::

# Quadratic Reciprocity

Let p, q be distinct odd primes. Then

$$(\frac{p}{q})(\frac{q}{p}) = (-1)^{((p-1)/2)((q-1)/2)}$$