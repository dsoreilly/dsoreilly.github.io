---
title: "Automatic reference counting"
status: "sprouting"
dateCreated: "18 Aug 2026"
---

Automatic reference counting (<abbr title="Automatic reference counting">ARC</abbr>) is an automatic [[/notes/memory-management/|memory management]] strategy. Typically, the compiler will insert reference tracking code into the program to check every time an object in memory receives or loses a pointer.

Every time a new pointer is created, the reference count is incremented (+1). Every time a pointer moves, the reference count is decremented (-1). When there are no more references (0), the object is immediately destroyed and its memory is deallocated.

Because <abbr title="Automatic reference counting">ARC</abbr> is reliant on reference counts reaching 0, circular references can cause _retain cycles_ leading to silent memory leaks. To mitigate this, languages often require the program to explicity declare one side of the relationship as a "weak" reference.
