---
title: 第二章(同余)
---

::: tip
1. Congruence
2. Modular Exponentialtion
3. Fermat's Little Theorem
4. Euler's Theorem
5. Summary
:::

# Congruence

## Definition of congruence

We way  that a is congruent to b modulo m, and we write

$$a \equiv b \pmod{m}$$

if m divides $a-b$. The number m is called the modulus of the congrence.

:::tip
$a \equiv b \pmod{m}, iff \exist k \in Z, a = km + b$

$(a \mod m) = (b \mod m)$
:::

:::important
If $a_1 \equiv b_1 \pmod{m}$ and $a_2 \equiv b_2 \pmod{m}$, then

$$a_1 \pm a_2 \equiv b_1 \pm b_2 \pmod{m}$$

and 

$$a_1a_2 \equiv b_1b_2 \pmod{m}$$
:::

## Negative value

- Let x and n be two positive integers and $x < n$, what does $-x \mod{n}$ mean?

Consider that the negative of x is the number $x`$ such that $x + x^\prime = 0$, that is

$$x + x^\prime \equiv 0 \pmod{n}$$

Since $x < n$ hence $x` = n-x$

## Cancellation law

**Theorem**

If gcd(c, m) = 1 and 

$$ac \equiv bc \pmod{m}$$

then

$$a \equiv b \pmod{m}$$

Where gcd shorts for the greaster common divisor.

:::tip
By definition of congruence, we have $m | (ac-bc)$, equivalently, $m | (a-b)c$. Since $gcd(c, m) = 1$, it follows that $m | (a-b)$, so as claimed.
:::

**Lemma**

:::tip
It is easy to check that:
1. Reflexive. a ≡ a (mod n)
2. Symmetric. If a ≡ b (mod n) then b ≡ a (mod n)
3. Transitive. If a ≡ b (mod n) and b ≡ c (mod n) then a ≡ c (mod n)
:::

## Definition of Equivalence class

When a set $S$ has an equivalence relation on it, then the equivalence relation partitions the set $S$ into disjoint subsets, called equivalence classes, defined by the property that two elements are in the same equivalence class if they are equivalent.

## Congruence classes modulo m

The set of congruence classes modulo m is denoted by $Z/mZ$. There are exactly m congruence classes in $Z/mZ$. That is:

$$Z/mZ = \{[0]_m, [1]_m, \cdots, [m-1]_m\}$$

### Proposition

If $[a_1]_m = [a_2]_m$ and [b_1]_m = [b_2]_m, then

$$[a_1 \pm b_1]_m = [a_2 \pm b_2]_m$$

and, 

$$[a_1b_1]_m = [a_2b_2]_m$$

### Notations of Congruence classes modulo m

- Any element $b$ of a congruence class $[a]_m$ is called a
**representative** of that class.
- The set of all the **least nonnegative representative** of $Z/mZ$ is the set of integers $\{0,1,2, \cdots,m−1\}$, that is called the **least residue system modulo m**.
- Any set of m integers, no two of which are congruent modulo m, is called a **complete residue system modulo m**.

# Modular Exponentiation

In this section, we focus on modular exponentiation which is an important arithmetic primitive. Its task is that given integers x, y and m to compute

$$x^y \mod{m}$$

The process can be expressed as a recursive form, by that, we sharply improve the eﬀiciency from performing O(y) multiplications to O(log(y)).

$$
x^y =
\begin{cases}
(x^{\lfloor \frac{y}{2} \rfloor})^2 \\
x(x^{\lfloor \frac{y}{2} \rfloor})^2
\end{cases}
$$

```python
def rec_mod_exp(x, y, p):
    if y == 0:
        return 1
    z = rec_mod_exp(x, y//2, p)
    if ((y & 1) == 0):
        return z * z % p
    else:
        return x * z * z % p
```

We can change the recursive algorithm to an iterative algorithm by using position notation

$y = y_{n-1}2^{n-1} + y_{n-2}2^{n-2} + \cdots + y_1 2 + y_0$, where $y_i \in \{0, 1\}$

so 

$$x^y = \prod_{i = 1}^{n-1} x^{yi2^i}$$

快速幂

# Fermat's Little Theorem

If p is prime number, $\forall a$ which is not divided by p, $a*i \pmod{p}$, for $1 \leq i \leq p$, is a permutation of numbers from 1 to p-1, although they may be in a different order

That is, the numbers 

$$a, 2a, 3a, \cdots, (p-1)a \pmod{p}$$

are the same as the numbers:

$$1, 2, 3, \cdots, p-1$$

although they may be in a different order.

$$S = \{a * i \mod{p}, 1 \leq i < p\}$$

is also called a complete system of residues modulo p

:::important Proof.

Proof by contradiction (informal and incomplete). If we are wrong, then there exist i and j such that,

$$a * i \equiv a * j \pmod{p}$$

where $i \neq j$. However, then we can cancel "a" from the eqution!

Multiply all $1 \leq i < p$, and all $a * i \mod{p}$, we have(because a times i actually is a permutation of i):

$$\prod_{i = 1}^{p-1} i = \prod_{i=1}^{p-1} (a*i \mod{p})$$

$$\Rightarrow \prod_{i = 1}^{p-1} i \equiv \prod_{i=1}^{p-1} a*i \equiv a^{p-1}\prod i \pmod{p}$$

Cancel the big number, we have:

$$a^{p-1} \equiv 1 \pmod{p}$$
:::

:::tip Fermat's little theorem
Let p be a prime number, and let a be any number with $a \neq 0 \pmod{p}$. Then

$a^{p-1} \equiv 1 \pmod{p}$
:::

# Euler's Theorem

:::tip Euler's Theorem
If n is a **positive** integer and a, n are **coprime**, then $a^{\phi(n)} \equiv 1 \pmod{n}$ where $\phi(n)$ is the Euler's totient function.
:::

Next we would conjecture: Let n be a composite number, denotes 

$$S = \{b : 1 \leq b < n \text{ and } gcd(b, n) = 1\}$$

Then $\forall a$ with gcd(a, n) = 1, denotes

$$S^\prime = a * S \pmod{n}$$

we have:

$$S^\prime = S$$

:::tip Euler's phi function
Define:

$$\phi(n) = |\{b: 1 \leq b < n \text{, and } gcd(b, c) = 1\}|$$

The function $\phi$ is called Euler's phi function.
:::

Then:

$$S = \{b_1, b_2, \cdots, b_{\phi(n)} : 1 \leq b_i < n \text{, and } gcd(b_i, n) = 1\}$$

$$S^\prime = \{a*b_1, a*b_2, \cdots, a*b_{\phi(n)} \pmod{n} : b_i \in S \text{ and } gcd(a, n) = 1\}$$

:::important Proof
To prove 

$$S = S^\prime$$

If there exist:

$$a*b_i \equiv a*b_j \pmod{n}$$

where $b_i \neq b_j$. Then by Cancellation Law,

$$b_i \equiv b_j \pmod{n}$$

Contradiction!

Then, $|S|$ = $|S^\prime|$ and $a \in S$ so each $a*b_i \in S$, so we have $S = S^\prime$

---

Multiply all the number in $S$ and $S^\prime$, we have:

$$\prod_{i=1}^{\phi(n)} b_i = \prod_{i=1}^{\phi(n)} (a*b_i \mod{n})$$

$$\prod_{i=1}^{\phi(n)} b_i \equiv \prod_{i=1}^{\phi(n)} a*b_i \pmod{n}$$

$$\prod_{i=1}^{\phi(n)} b_i \equiv a^{\phi(n)}\prod_{i=1}^{\phi(n)}b_i \pmod{n}$$

Cancel the big number, we have:

$$a^{\phi(n)} \equiv 1 \pmod{n}$$
:::

## More about Euler's Phi Function

**Definition**

Define:

$$\phi(n) = | \{ b : 1 \leq b < n \text{ and } gcd(b, c) = 1 \} |$$

The function $\phi$ is called Euler's phi function

:::tip Observations
$$\phi(p) = p-1 \text{, where p is a prime}$$

$$\phi(p^k) = p^k - p^{k-1} \text{, where p is a prime}$$

$$\phi(p^iq^j) = \phi(p^i) \phi(q^j) \text{, where p and q are relatively prime}$$

$$\Rightarrow \phi(n) = p_1^{k_1 - 1}(p_1 -1 )\cdots p_r^{k_r - 1}(p_r - 1)$$
:::