---
title: "Factory Method pattern"
status: "sprouting"
dateCreated: "29 July 2026"
dateUpdated: "03 August 2026"
---

The _factory method_ pattern is a [[/notes/creational-pattern|creational design pattern]] for providing an interface for creating objects in a superclass, but allowing subclasses to alter the type of object that will be created.

## Example

**Real-world analogy:** a multi-transport logistics company

[design-patterns/src/creational/factory_method.ts at main](https://github.com/dsoreilly/design-patterns/blob/main/src/creational/factory_method.ts)

### Creator

Logistics hubs are all able to make deliveries, but it's left up to individual delivery hub to choose what type of transport is required.

```ts
abstract class LogisticsHub {
  abstract requestTransport(): Transport;

  deliver() {
    const transport = this.requestTransport();
    transport();
  }
}

class RoadLogisticsHub extends LogisticsHub {
  requestTransport() {
    return truck;
  }
}

class SeaLogisticsHub extends LogisticsHub {
  requestTransport() {
    return ship;
  }
}
```

### Product

Each type of transport makes deliveries in their own way.

```ts
type Transport = () => void;

const truck: Transport = () => console.log("Delivery by road");
const ship: Transport = () => console.log("Delivery by sea");
```

### Client

Calling the `deliver` method of a logistics hub creates the correct type of transport, but it doesn't need to know _how_ the transport makes its delivery.

```ts
const roadLogisticsHub = new RoadLogisticsHub();
roadLogisticsHub.deliver();
// Expected output:
// Delivery by road

const seaLogisticsHub = new SeaLogisticsHub();
seaLogisticsHub.deliver();
// Expected output:
// Delivery by sea
```
