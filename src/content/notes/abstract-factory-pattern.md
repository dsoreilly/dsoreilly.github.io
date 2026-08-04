---
title: "Abstract Factory pattern"
status: "sprouting"
dateCreated: "30 Jul 2026"
dateUpdated: "03 Aug 2026"
---

The _abstract factory_ pattern is a [[/notes/creational-pattern|creational design pattern]] for creating different varieties of the same type of object.

## Example

**Real-world analogy:** factories specialising in distinct styles of furniture

[design-patterns/src/creational/abstract_factory.ts at main](https://github.com/dsoreilly/design-patterns/blob/main/src/creational/abstract_factory.ts)

### Products

Chairs of any style always share the same function: you use them to sit on. A chair that is in an _Art Deco_ style has the same use as a chair that is in a _Victorian_ style.

```ts
type Chair = () => string;

const artDecoChair: Chair = () => "Art Deco chair";
const victorianChair: Chair = () => "Victorian chair";

type CoffeeTable = () => string;

const artDecoCoffeeTable: CoffeeTable = () => "Art Deco coffee table";
const victorianCoffeeTable: CoffeeTable = () => "Victorian coffee table";
```

### Factory

Both a factory specialising in _Art Deco_ furniture, and a factory specialising in _Victorian_ furniture can produce chairs and a coffee tables that function the same as any other chair and coffee table.

```ts
interface FurnitureFactory {
  createChair(): Chair;
  createCoffeeTable(): CoffeeTable;
}

class ArtDecoFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return artDecoChair;
  }

  createCoffeeTable(): CoffeeTable {
    return artDecoCoffeeTable;
  }
}

class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return victorianChair;
  }

  createCoffeeTable(): CoffeeTable {
    return victorianCoffeeTable;
  }
}
```

### Client

A chair can be ordered from any furniture factory and will always be a chair of that factory's specfic style. Calling the `createChair` method on any type of furniture factory will always produce a chair. Calling the `createCoffeeTable` method on any type of furniture factory will always produce a coffee table.

```ts
function orderChair(factory: FurnitureFactory): Chair {
  return factory.createChair();
}

function orderCoffeeTable(factory: FurnitureFactory): CoffeeTable {
  return factory.createCoffeeTable();
}

let factory = new ArtDecoFurnitureFactory();
let chair = orderChair(factory);
console.log(chair());
// Expected output:
// Art Deco chair

let coffeeTable = orderCoffeeTable(factory);
console.log(coffeeTable());
// Expected output:
// Art Deco coffee table

factory = new VictorianFurnitureFactory();
chair = orderChair(factory);
console.log(chair());
// Expected output:
// Victorian chair

coffeeTable = orderCoffeeTable(factory);
console.log(coffeeTable());
// Expected output:
// Victorian coffee table
```
