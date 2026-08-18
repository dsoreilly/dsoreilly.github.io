---
title: "Stack memory"
status: "sprouting"
dateCreated: "18 Aug 2026"
---

Stack memory is used for storing static data of a known, fixed size. It operates on last-in, first-out (<abbr title="Last-in, first-out">LIFO</abbr>) principles in strict sequence. Because stack memory is highly organised, and lives in <abbr title="Computer processing unit">CPU</abbr> caches, operations are much faster than [[/notes/heap-memory/|heap memory]] operations.

Allocation and deallocation is automatically managed by the <abbr title="Computer processing unit">CPU</abbr> and takes only a single instruction (moving the _stack pointer_). Stack memory is typically used for fixed-size structures, local variables, and primitive data types.

## Example

A fixed-size array is automatically allocated memory on the "stack" in a _C_ program. When the `main` function ends, the fixed-size array is automatically deallocated as it goes out of scope.

```c
#include <stdio.h>

int main()
{
    int arr[3] = {16, 32, 64};

    printf("arr[1] address: %p, value: %d\n", (void *)&arr[1], arr[1]);

    return 0;
}
```
