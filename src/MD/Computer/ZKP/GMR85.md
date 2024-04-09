---
title: GMR85
category: ZKP
---

An abstract copy of the origin paper and some of my idea.

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
   - It does **not matter how long must the prover compute during the proving process**, but it is essential that the **computation required from the verifier is easy**.

### Interactive Turiing machines and interactive pairs of Turing machines

An interactive Turing machine (ITM) is a Turing machine withe a read-only input tape, a work tape and a random tape.

- The random tape contains an infinte sequence of random bits. The random tape can be scanned only from left to right.
- When we say that an interactive machine flips a coin we mean that it reads next bit in its own random.
- The head writing on the latter tape moves only from left to right, writes only on blank cell and cannot move to the right without writing.

Two ITM's A and B form an interactive pair of Turing machines(A, B) by

1. Letting A and B share the same input tape
2. Letting B's write-only communication tape be A's read-only communication tape and vice versa.

### Interactive proof-systems


Let $L \subseteq {\{0, 1\}}^*$ be a language and (A, B) and interactive pairr of Turing machines. We say that (A, B) is an interactive proof-system for L if A (the prover) has infinite power, B (the verifier) is polynomial time and they satisfy the following properties.

1. For any $x \in L$ given as input to (A, B), B halts and accepts with probability at least $1 - \frac{1}{n^k}$ for each k and sufficiently large n.

2. For any ITM A and for any x not in L given as input to (A, B), B accepts with probability at most $\frac{1}{n^k}$ for each k and sufficiently large n.

### Interactive Complexity Classes

We define IP, Interactive Polynomial-time, to be the class of languages possessing an interactive proof-system. In this case we may also say that L is interactively provable.

- To emphasize that the prover has unlimited power, we may writes $IP_{\infty}$ for IP.
- To closer analyze the role of the prover, we define $IP_{T(n)}$ to be the class of languages having an interactive proof-system whose prover runs in time T(n).
- To focus on the role of interaction, we let $IP[f(n)]$ denote the class of languages having a proof-system that, on input a string x of lenguth, halts within f(n) turns.
- Here $f$ is a non decreasing function from natural numbers to natural numbers.

If membership in a language can be proved by an Arthur-Merlin game ($L \in AM$) then, for any random oracle $O$, $B \in NP^O$ with probability 1. 

## Knowledge Complexity

- Knowledge is a notion relative to a specific model of computattion with specified computing resources
- One studies and gains knowledge about available objects.

### Degrees of distinguishability of probability distributions 

Let I be an infinite set of strings and c a positive constant. For each $x \in I$ with length n. Let $\Pi_x$ be a probability distribution over the $n^c$ - bit strings.

> We say that $\Pi = \{\Pi_x | x \in I\}$ is a $I-c-ensemble$

A distinguisher is a probabilistic pollynomial-time algorithm D that on input a string s outputs a bit b.

- Let $\Pi_1 = \{\pi_{1, x} | x \in I\}$ and $\Pi_2 = \{\pi_{2, x} | x \in I\}$ be two $I-c-snsembles$
- Let $P_{x, 1}^D$ denote the probability that D ouputs 1 on input a $|x|^c-bit$ long string randomly selected with probability distrbution $\Pi_{1, x}$. Sysmetrically, $p_{x, 2}^D$ does the same thing with $\Pi_{2, x}$
- Let $p : N \rightarrow [0, 1]$ 

> The ensembles $\Pi_1$ and $\Pi_2$ are at most $p-distinguishable$ if for all distinguishers $D$, $|p_{x, 1}^D - p_{x, 2}^D| < p(|x|) + \frac{1}{|x|^k}$ for all k and sufficiently long x.

### The knowledge computable from a communication

- Let (A, B) be an interactive pair of Turing machines and $I$ the set of its inputs.
- Let B be polynomial=time and $f:N \rightarrow N$ be no decreasing.

> A communicates at most $f(n)$ bits of knowledge to B if there exists a $probabilistic polynomial-time M$ such that the $I-ensembles$ $M[.]$ and $(A, B)[.]$ are at most $1 - \frac{1}{2^{f(n)}}-distinguishable$ 

> > A communicates at most $f(n)$ bits of knowledge if for all $polynomial-time$ $ITM's$ $B^`$ A communicates at most $f(n)$ bits of knowledge to $B^`$