---
title: "Hoisting"
status: "sprouting"
dateCreated: "21 Aug 2026"
---

In _JavaScript_, "hoisting" refers to how function and variable declarations are moved to the top of their scope at compile-time.

Function expressions and variables declared with `var` are "hoisted" and initialised with the default value `undefined`. Function expressions and variables declared with `let`, `const`, and `class`, are "hoisted" but are **not** initialised, and move into the [[/notes/temporal-dead-zone/|temporal dead zone]] (<abbr title="Temporal dead zone">TDZ</abbr>) until they _are_ initialised.

## Example

The `getName` function is "hoisted" making it callable _before_ its declaration. The variable `name` is also "hoisted" and initialised, making it accessible. Because the variable `name` is initialised with `undefined`, this is the return value of `getName`, not the string `"Ishmael"`.

```js
getName();

var name = "Ishmael";

function getName() {
  return name;
}
```

The `getName` function expression is "hoisted" but is **not** initialised. Calling it _before_ its declararion throws a `ReferenceError`. The variable `name` is also "hoisted" but not initialised, and therefore also inaccessible.

```js
getName();

let name = "Ishmael";

const getName = () => name;
```
