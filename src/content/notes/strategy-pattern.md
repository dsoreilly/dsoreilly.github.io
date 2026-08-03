---
title: "Strategy pattern"
status: "sprouting"
dateCreated: "30 July 2026"
dateUpdated: "03 August 2026"
---

The _strategy_ pattern is a [[/notes/behavioural-pattern|behavioural design pattern]] for allowing contextual pieces of logic to be used interchangeably.

## Example

**Real-world analogy:** requesting an airport transfer

[design-patterns/src/behavioural/strategy.ts on main](https://github.com/dsoreilly/design-patterns/blob/main/src/behavioural/strategy.ts)

### Strategy

Based on budget and time constraints, different airport transfer methods can be requested. A metro transfer is slow but cheap, a taxi transfer is fast but expensive.

```ts
type TransferRequester = () => { cost: string; duration: number };

const busRequester: TransferRequester = () => ({ cost: "$$", duration: 20 });
const metroRequester: TransferRequester = () => ({ cost: "$", duration: 30 });
const taxiRequester: TransferRequester = () => ({ cost: "$$$", duration: 10 });
```

### Context

The transfer requester is interchangeable. When the airport transfer is requested, the transfer request is delegated to the specific requester.

```ts
class AirportTransfer {
  private requester: TransferRequester;

  constructor(requester: TransferRequester) {
    this.requester = requester;
  }

  requestTransfer() {
    const { cost, duration } = this.requester();
    console.log(`Transfer cost: ${cost}, duration: ${duration}m`);
  }

  setRequester(requester: TransferRequester) {
    this.requester = requester;
  }
}
```

### Client

The airport transfer can be requested using any type of transfer requester. Calling the airport transfer's `requestTransfer` method uses whatever transfer requester has been assigned to it.

```ts
const transfer = new AirportTransfer(busRequester);
transfer.requestTransfer();
// Expected output:
// Transfer cost: $$, duration: 20m

transfer.setRequester(metroRequester);
transfer.requestTransfer();
// Expected output:
// Transfer cost: $, duration: 30m

transfer.setRequester(taxiRequester);
transfer.requestTransfer();
// Expected output:
// Transfer cost: $$$, duration: 10m
```
