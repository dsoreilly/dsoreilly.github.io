---
title: "Heap memory"
status: "sprouting"
dateCreated: "18 Aug 2026"
---

Heap memory is used for storing variable data of an unknown size. It operates relies on a global pool of memory with no fixed organisational structrue. Because heap memory requires searching for blocks of <abbr title="Random access memory">RAM</abbr> large enough to store the requested data, operations are much slower than [[/notes/stack-memory/|stack memory]] operations.

Allocation and deallocation rely on [[/notes/memory-management/|memory management]] strategies like <abbr title="Automatic reference counting">[[/notes/automatic-reference-counting/|ARC]]</abbr> and [[/notes/garbage-collection/|"garbage collection"]]. Heap memory is typically used for dynamically sized structures, large data types, and non-local variables.

## Example

A dynamically sized array is manually allocated memory on the "heap" in a _C_ program. Allocated memory is manually deallocated ("freed") and the pointer set to `NULL` before the end of the function to prevent memory leaking.

```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *arr = (int *)malloc(3 * sizeof(int));

    arr[0] = 16;
    arr[1] = 32;
    arr[2] = 64;

    printf("arr    address: %p\n", (void *)&arr);
    printf("arr[1] address: %p, value: %d\n", (void *)&arr[1], arr[1]);

    free(arr);

    arr = NULL;

    return 0;
}
```
