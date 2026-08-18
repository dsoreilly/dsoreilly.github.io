---
title: "Memory management"
status: "sprouting"
dateCreated: "18 Aug 2026"
---

Memory management is the process of coordinating system memory (typically <abbr title="Random Access Memory">RAM</abbr>) during program execution to ensure efficient allocation, usage, and deallocation. Usually, memory management refers **only** to [[/notes/heap-memory/|heap memory]], opposed to [[/notes/stack-memory/|stack memory]].

There are a number of strategies for managing memory, such as automatic runtime strategies like <abbr title="Automatic reference counting">[[/notes/automatic-reference-counting/|ARC]]</abbr> and [[/notes/garbage-collection/|"garbage collection"]], as well as compile-time strategies like _Rust's_ "borrow checker".

In some languages, such as _C_/_C++_, the program needs to explicitly allocate, use, and deallocate memory. This allows programs to be very performant with regards to how memory is utilised, but comes with a higher risk of introducing bugs, such as memory leaks.
