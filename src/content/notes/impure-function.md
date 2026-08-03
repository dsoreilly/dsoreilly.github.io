---
title: "Impure function"
status: "sprouting"
dateCreated: "03 August 2026"
---

A function is said to be "impure" if it is non-deterministic or can cause side effects. In contrast, a [[/notes/pure-function/|"pure" function]] is both deterministic and causes no side effects.

## Non-deterministic

When given the same argument values, the return value cannot be determined. A function that adds a number to a randomly generated number and returns the result is _non-deterministic_.

### Example

Given the argument value `2`, the return value for the function `addRandom` cannot be determined. The `random()` method produces a pseudo-random number at runtime, and therefore the value of `r` cannot be guaranteed.

In an imperative language (_Python_).

```py
import random

def addRandom(x):
    r = random.random()
    return x + r

addRandom(2)
```

A function that adds a number to a number of a non-local variable and returns the result is _non-deterministic_.

### Example

Given the argument value `2`, the return value for the function `addN` cannot be determined. The variable `n` can freely change, and therefore its value is not guaranteed.

In an imperative language (_Python_).

```py
n = 5

def addN(x):
    return x + n

addN(2)
```

## Side effects

Mutating non-local variables and mutating reference arguments are side effects. A function that takes a number and appends it to a non-local number array causes _side effects_.

### Example

Function `appendToA` mutates non-local variable `a`.

In an imperative language (_Python_).

```py
a = [1, 2, 3]

def appendToA(n):
    a.append(n)

appendN(4)
```

A function that takes a number and a number array and appends the number to the array causes _side effects_.

### Example

Function `appendXToY` mutates reference argument `x` (mutates non-local variable `a`).

In an imperative language (_Python_).

```py
a = [1, 2, 3]

def appendXToY(x, y):
    y.append(x)

appendXToY(4, a)
```
