---
title: 第一周
---

# Lesson 1

### Introduction

- Kerckhoffs's principle
- Sufficient key space principle

但是不是密码空间越大就越安全，维吉尼亚密码

## Core Principles of modern crypto

- Formal definitions
    - prcise, mathematical model and definition of what security means
- Assumptions
  - P $\neq$ NP
- Proof of security

# Lesson 2

## Pefect Secrecy

- Threat models for encryption
  - Ciphertext-only attack
    - One ciphertext or many?
  - Known-plaintext attack
  - Chosen-plaintext attack
  - Chosen-ciphertext attack

- Secure encryption
  - Impoosible for the attacker to learn the ker?
  - Impossible for the attacker to learn the plaintext from the ciphertext
  - Impoosible for the attacker to learn any character of the plaintext from the ciphertext

**Regardless of any prior info. the attacker has about the plaintext, the ciphertext should leak no additional information about the plaintext**

## Private-key encryption scheme

A message space M and algorithms (Gen, Enc, Dec):

-  Gen(ker-generation algorithm): generates k
-  Enc(encryption algorithm): takes key k and message $m \in M$ as input; output ciphertext c.
  
$$c \leftarrow Enc_k(m)$$

- Dec(decyption algorithm): take key k and cipher text c as input; ouput m.

$$m := Dek_k(c)$$

```
K (key space) - set of all possible keys
C (ciphertext space) - set of all possible ciphertexts
```

### Perfect secrecy(formal)

Encryption scheme (Gen, Enc, Dec) with message space M and ciphertext space C is perfectly secret if for every distribution over M, every $m \in M$, and every $c \in C$ with $Pr[C=c] > 0$, it holds that

$$Pr[M = m | C = c] = Pr[M = m]$$

## One-time pad

- $M = \{0, 1\}^n$
- Gen: choose a uniform key $k \in \{0, 1\}^n$
- $Enc_k(m) = k \oplus m$ (bit-wise XOR)
- $Dec_k(c) = k \oplus c$

> Correctness:
> $Dec_k(Enc_k(m)) = k \oplus (k \oplus m) = m$

### Perfect secrecy of one-time pad

Fix arbitrary distribution over $M = \{0, 1\}^n$, and arbitray $m, c \in \{0, 1\}^n$