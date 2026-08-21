---
title: "Temporal dead zone"
status: "sprouting"
dateCreated: "21 Aug 2026"
---

In _JavaScript_, the temporal dead zone (<abbr title="Temporal dead zone">TDZ</abbr>) is the time span between when a scope starts executing and when a function expression or variable declared with `let`, `const`, or `class` is initialised.

## Example

Calling the `getName` function throws a `ReferenceError` due to the function expression being in the temporal dead zone.

```js
getName();

const getName = () => "Ishmael";
```
