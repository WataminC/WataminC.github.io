---
title: 第三周(群论)
---

:::tip 目录
1. Group
2. Basic Properties of Group
3. Subgroups
4. Cyclic Groups
5. Coset and Lagrange's Theorem
:::

# Group 

## Definition

A group is a set $G$ and an operator "." on the elements, satisfies the following axioms:

- Closure: $\forall a, b \in G, a \cdot b \in G$.
- Association: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
- There is an element "$e \in G$" called identify, s.t. $e \cdot a = a \cdot e = a$
- $\forall a \in G$, there exists $a^{-1} \in G$ called inverse, such that $a \cdot a^{-1} = e = a^{-1} \cdot a$

:::tip Examples
- $(Z, +)$ is a group, while $(Z, \times)$ is not a group
- $(Q, +)$ and $(R, +)$ are groups
- $(Q^*, \times)$ and $(R^*, \times)$ are groups
:::

## Some important groups

:::important Groups
- $Z_n$

Let n be an integer, $Z_n = \{0, 1, 2, \cdots, n-1\}$ forms a group under the operation of addition. However, $(Z_n, \times)$ is not a group.

- $Z^*_p$

Let p be a prime number, $Z^*_p = \{1, 2, \cdots, p-1\}$ forms a group under the operation of multiplication.

- $Z_n^*$

Let n be an integer, $Z^*_n = \{a \in [1 \cdots n-1] \text{and} gcd(a, n) = 1\}$ forms a group under the operation of multiplication. 
:::

# Basic Properties of Group

## Proposition

- Proposition 1

The identity element in a Group $G$ is unique; that is, there exists only one element $e \in G$ s.t. $eg = ge = g$ for all $g \in G$

:::info Proof
Suppose $\exist e, e^\prime \in G$ are identities. Then:
- $ee^\prime = e^\prime$
- $ee^\prime = e$

Combining these two equations, we have $e = ee^\prime = e^\prime$
:::

- Proposition 2

If $\forall g \in G$, then the inverse of $g$, $g^{-1}$, is unique

:::info Proof
If $g^{-1}$ and $g^\prime$ both are the inverse of g, then

$$g^\prime = g^\prime e = g^\prime(gg^{-1}) = (g^\prime)g^{-1} = eg^{-1} = g^{-1}$$
###
:::

- Proposition 3

Let $G$ be a group. If $a, b \in G$, then $(ab)^{-1} = b^{-1}a^{-1}$

:::info Proof
By construction

- $ab(b^{-1}a^{-1}) = e$
- $(b^{-1}a^{-1})ab = e$
:::

- Proposition 4

Let $G$ be a group, $\forall g \in G, (g^{-1})^{-1} = g$

:::info proof
$$(g^{-1})^{-1} = (gg^{-1})(g^{-1})^{-1} = g(g^{-1}(g^{-1})^{-1}) = ge = g$$
:::

- Proposition 5

Let $G$ be a group, for any two elements $a, b \in G$. Then the equation $ax = b \text{and} xa = b$ have unique solutions in G.

- Proposition 6

(Cancellation law) Let $G$ be a group, and $a, b, c \in G$. Then $ba = ca$ implies $b = c$ and $ab = ac$ implies $b = c$.

- Notions

:::tip Notations
- $g^0 = e$
- $g^n = g \cdot g \cdots g \text{ (n times)}$
- $g^{-n} = g^{-1} \cdot g^{-1} \cdots g^{-1} \text{ (n times)}$
:::

- Order

The order of a finite group is the number of elements that it contains. If $G$ is a group containing n elements, we say $|G| = n$