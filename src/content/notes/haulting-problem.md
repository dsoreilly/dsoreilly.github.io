---
title: "Haulting problem"
status: "sprouting"
dateCreated: "05 Aug 2026"
---

The _haulting problem_ is a question in theoretical computer science: given a program and an input, will the program eventually halt when run with that particular input? It is mathematically impossible to write a general algorithm that solves this for all possible programs, as proven by Alan Turing in 1936. The proof is based on contradiction (see _[[/notes/liars-paradox/|liar's paradox]]_).

## Example

`h` takes two arguments `i` from `g` and _tries_ to determine whether or not `i(i)` haults. `g` waits for `h` to make its determination, then does the exact opposite: if `i(i)` haults, [[/notes/infinite-loop/|loop forever]]; if `i(i)` doesn't hault, return.

If `g` was passed to itself (`g(g)`), it is **impossible** for `h` to determine whether or not `g` haults.

```py
def g(i):
    if h(i, i) == True:
        while True:
            pass
    else:
        return
```
