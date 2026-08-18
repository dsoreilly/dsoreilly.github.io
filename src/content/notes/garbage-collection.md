---
title: "Garbage collection"
status: "sprouting"
dateCreated: "18 Aug 2026"
---

"Garbage collection" is an automatic [[/notes/memory-management/|memory management]] strategy. Typically, a runtime component will periodically check for unreachable memory, either at specific intervals, or when memory is full.

<abbr title="Garbage collection">GC</abbr> traces a graph of reachable memory by traversing each accessible object pointer from the root ([[/notes/stack-memory/|memory stack]]). Any objects stored on the "[[/notes/heap-memory/|heap]]" that cannot be reached are marked for removal and destroyed in a batch operation, deallocating the memory.

Because <abbr title="Automatic reference counting">GC</abbr> pauses execution during tracing, real-time performance can be impacted. Unlike <abbr title="Automatic reference counting">[[/notes/automatic-reference-counting/|ARC]]</abbr>, heap memory remains allocated unitl the next mark-and-sweep cycle.
