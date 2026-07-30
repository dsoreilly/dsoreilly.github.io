---
title: "Decorator Pattern"
status: "sprouting"
dateCreated: "29 July 2026"
---

The _decorator_ pattern is a [[/notes/structural-pattern|structural design pattern]] for attaching additional functionality to existing objects by "wrapping" them in a new type of object.

## Example

**Real-world analogy:** layering items of clothing

[design-patterns/src/structural/decorator.ts at main](https://github.com/dsoreilly/design-patterns/blob/main/src/structural/decorator.ts)

### Component

An item of clothing (apparel) can be worn. Both base layers, like a T-shirt, and additional layers have this in common.

```ts
interface Apparel {
  wear(): void;
}

class TShirt implements Apparel {
  wear() {
    console.log("Wearing: t-shirt");
  }
}
```

### Decorator

A layer wraps an item of clothing allowing both items to be worn.

```ts
class Layer implements Apparel {
  private apparel: Apparel;

  constructor(apparel: Apparel) {
    this.apparel = apparel;
  }

  wear() {
    this.apparel.wear();
  }
}

class Jacket extends Layer {
  override wear() {
    super.wear();
    console.log("Wearing: jacket");
  }
}
```

### Client

Calling the `wear` method on a layer object calls the `wear` method on the wrapped object.

```ts
let apparel = new TShirt();
apparel.wear();
// Expected output:
// Wearing: t-shirt

apparel = new Jacket(apparel);
apparel.wear();
// Expected output:
// Wearing: t-shirt
// Wearing: jacket
```
