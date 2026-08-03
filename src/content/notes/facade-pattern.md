---
title: "Façade pattern"
status: "sprouting"
dateCreated: "30 July 2026"
dateUpdated: "03 August 2026"
---

The _façade_ pattern is a [[/notes/structural-pattern|structural design pattern]] that hides complex logic behind a simplified interface.

## Example

**Real-world analogy:** placing an online order

[design-patterns/src/structural/facade.ts at main](https://github.com/dsoreilly/design-patterns/blob/main/src/structural/facade.ts)

### Sub-system

All of the complex processes involved when an online order is placed.

```ts
const orderProcessing = {
  processPayment() {
    console.log("Processing payment");
  },
  contactSupplier() {
    console.log("Contacting supplier");
  },
  packageProduct() {
    console.log("Packaging product");
  },
  arrangeDelivery() {
    console.log("Arranging delivery");
  },
};
```

### Façade

When placing an online order, the processing of that order is taken care of for you. It's not important to understand payment processing, supplier relationships, or packaging and delivering the product.

```ts
function placeOrder() {
  orderProcessing.processPayment();
  orderProcessing.contactSupplier();
  orderProcessing.packageProduct();
  orderProcessing.arrangeDelivery();
}
```

### Client

Calling the `placeOrder` function calls in turn all of the necessary functions from the `orderProcessing` sub-system.

```ts
placeOrder();
// Expected output:
// Processing payment
// Contacting supplier
// Packaging
// Delivering
```
