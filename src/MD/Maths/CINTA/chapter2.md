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