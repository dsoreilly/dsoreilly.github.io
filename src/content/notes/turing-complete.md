---
title: "Turing complete"
status: "sprouting"
dateCreated: "27 Aug 2026"
---

_Turing complete_ describes a system that can solve **any** computational problem, provided it has enough time and memory. The concept stems from Alan Turning's theoretical _Turing Machine_ — proof that a machine using a few basic operations could perform any calculation.

To be considered _Turing complete_, typically a system needs a few core features:

1. **Variables:** a means to store data or state.
2. **Conditions:** a means to make decisions e.g. `IF`/`ELSE`.
3. **Loops:** a means to repeat instructions e.g. `WHILE`.

## Example

A _Python_ program demonstrating _Turning completeness_.

```py
# 1. variables
counter = 10

# 3. loops
while counter > 0:
    # 2. conditions
    if counter % 2 == 0:
        counter = counter // 2
    else:
        counter = counter - 1
```

Because being _Turing complete_ means being able to execute [[/notes/infinite-loop/|infinte loops]], it also introduces the [[/notes/haulting-problem/|_haulting problem_]].

Many programming languages are _Turing complete_ such as _C_, _JavaScript_, and _Rust_. Some blockchains, like _Ethereum_, are also "quasi-_Turing complete_" (they can theoretically execute [[/notes/infinite-loop/|infinte loops]], but in reality this would cause a public blockchain to fail). The elementary cellular automaton [[/notes/rule-110/|_rule 110_]] is also _Turing complete_.
