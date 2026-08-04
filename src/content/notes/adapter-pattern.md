---
title: "Adapter pattern"
status: "sprouting"
dateCreated: "30 Jul 2026"
dateUpdated: "03 Aug 2026"
---

The _adapter_ pattern is a [[/notes/structural-pattern|structural design pattern]] that allows incompatible objects to interface with one another.

## Example

**Real-world analogy:** a plug travel adapter

[design-patterns/src/structural/adapter.ts at main](https://github.com/dsoreilly/design-patterns/blob/main/src/structural/adapter.ts)

### Service

An EU socket is compatible with plugs that work in the same manner as an EU plug. US plugs are not compatible with EU sockets due to differences in frequency and voltage.

```ts
class EuSocket {
  private frequency: number;
  private volts: number;

  constructor() {
    this.frequency = 50;
    this.volts = 230;
  }

  connect(euPlug: EuPlug) {
    const connector = euPlug?.getEuConnector();
    return (
      connector.frequency === this.frequency && connector.volts === this.volts
    );
  }
}

class EuPlug {
  getEuConnector() {
    return { frequency: 50, volts: 230 };
  }
}

class UsPlug {
  getUsConnector() {
    return { frequency: 60, volts: 120 };
  }
}
```

### Adapter

An EU plug adapter mimics an EU plug, but includes the relevant functionality to ensure that an US plug is compatible.

```ts
class UsToEuAdapter implements EuPlug {
  private plug: UsPlug;

  constructor(plug: UsPlug) {
    this.plug = plug;
  }

  getEuConnector() {
    const usConnector = this.plug.getUsConnector();
    return {
      frequency: usConnector.frequency - 10,
      volts: usConnector.volts * 2 - 10,
    };
  }
}
```

### Client

Calling the EU socket's `connect` method with an EU plug connects the plug to the socket as they are compatible. An US plug is not compatible so the connect method will throw a `TypeError`. Instead, an US to EU plug adapter can be used to convert an US plug to a type that _is_ compatible with an EU socket.

```ts
const euSocket = new EuSocket();
let connected = euSocket.connect(new EuPlug());
console.log("Plug connected to EU socket: ", connected);
// Expected output:
// Plug connected to EU socket: true

const usPlug = new UsPlug();
try {
  connected = euSocket.connect(usPlug);
  console.log("Plug connected to EU socket: ", connected);
} catch {
  console.log("Plug not compatible with EU socket");
}
// Expected output:
// Plug not compatible with EU socket

connected = euSocket.connect(new UsToEuAdapter(usPlug));
console.log("Plug connected to EU socket: ", connected);
// Expected output:
// Plug connected to EU socket: true
```
