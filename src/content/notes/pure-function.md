---
title: "Pure function"
status: "sprouting"
dateCreated: "03 August 2026"
---

A function is said to be "pure" if it adheres to two key principles:

1. **deterministic:** produces the same output when given the same input
2. **no side effects:** doesn't mutate non-local variables or reference arguments

In contrast, an [[/notes/impure-function/|"impure" function]] can be non-deterministic and can cause side effects.

## Deterministic

When given the same argument values, the return value is always the same. A function that adds two numbers together and returns the result is _deterministic_.

### Example

Given the argument values `2` and `3`, the return value `5` for the function `add` will always be `5`.

In an imperative language (_Python_).

```py
def add(x, y):
    return x + y

add(2, 3)
```

In a purely functional language (_Haskell_).

```hs
add x y = x + y

add 2 3
```

## No side effects

Non-local variables and reference arguments are not mutated. A function that takes a number without modifying it and adds it together with a local variable before returning the result causes _no side effects_.

### Example

Function `addOne` does not mutate non-local variable `n` or its reference argument `x`.

In an imperative language (_Python_).

```py
def addOne(x):
    y = 0
    y += 1
    return x + y

n = 2
addOne(n)
```

In a purely functional language (_Haskell_).

```hs
addOne x =
  let y0 = 0
      y  = y0 + 1
  in x + y

let n = 2
addOne n
```
