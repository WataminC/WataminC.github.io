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