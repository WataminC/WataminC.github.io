---
title: 零知识证明
icon: computer
---

<catalog />

## Inroduction

In the first part of the paper, the author introduce a new theorem-proving precedure, that is a new efficient method of communcating a proof. To efficiently verify the correctness of a statement, the "recipient" of the proof must actively ask questions and receive answers from the "prover"

In the secomd part of the paper, the author addrss the following question:

> How much knowledge should be communicated for proving a theorem T?

## Interactive Proof Systems

Loosely speaking, a theorem is in provable in NP if ites proof is easy to verify once it has been found.

And we could give the definition of NP.

> The NP proof-system consists of two communicating Turing machines A and B: respectivelly, the prover and the verifier.
> The prover is exponential-time, the verifier is polynomial-time.Bothe A and B are derterministic, read a common input and interact in a very elementary way.
> On input a string x, belonging to an NP language L, A computes a string y (whose length is bounded by a polynomial in the length of x) and writes y on a special tape that B can read. B then checks that $f_L(y) = x$ (where $f_L$ is a polynomial-time computable function relative to the language L) and, if so, halts and accepts.

What is intuitively required from a theorem proving procedure?

1. It is possible to "prove" a true theorem.
2. It is impossible to "prove" a false theorem.
3. Communicating a proof should be efficient in the followiing sense.
   - It does not matter how long must the prover compute during the proving process, but it is essential that the computation required from the verifier is easy.