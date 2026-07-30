---
title: "Observer Pattern"
status: "sprouting"
dateCreated: "29 July 2026"
---

The _observer_ pattern is a [[/notes/behavioral-pattern|behavioral design pattern]] for defining a publisher/subscriber relationship to notify multiple "subscribed" objects about "published" events.

## Example

**Real-world analogy:** a magazine with subscribed readers

[design-patterns/src/behavioral/observer.ts at main](https://github.com/dsoreilly/design-patterns/blob/main/src/behavioral/observer.ts)

### Publisher

A magazine allows readers to subscribe. Whenever a new issue is published, the magazine sends the new issue to each of the subscribed readers. If a reader unsubscribes from the magazine, they will no longer be sent published issues.

```ts
class Magazine {
  private issue: number;
  private readers: Reader[];

  constructor() {
    this.issue = 0;
    this.readers = [];
  }

  subscribe(reader: Reader) {
    if (this.readers.indexOf(reader) !== -1) return;
    this.readers.push(reader);
  }

  unsubscribe(reader: Reader) {
    const index = this.readers.indexOf(reader);
    if (index === -1) return;
    this.readers.splice(index, 1);
  }

  publishIssue() {
    this.issue += 1;
    this.notifyReaders();
  }

  private notifyReaders() {
    this.readers.forEach((reader) => reader(this.issue));
  }
}
```

### Subscriber

Once a reader is subscribed to the magazine, they are notified about each published issue.

```ts
type Reader = (issue: number) => void;

const readerA: Reader = (issue) => console.log(`A: received issue ${issue}`);
const readerB: Reader = (issue) => console.log(`B: received issue ${issue}`);
```

### Client

The client subscribes and unsubscribes readers to the magazine. Calling the magazine's `publishIssue` method sends the subscribed readers the next issue of the magazine.

```ts
const magazine = new Magazine();
magazine.subscribe(readerA);
magazine.publishIssue();
// Expected output:
// A: received issue 1

magazine.subscribe(readerB);
magazine.publishIssue();
// Expected output:
// A: received issue 2
// B: received issue 2

magazine.unsubscribe(readerA);
magazine.publishIssue();
// Expected output:
// B: received issue 3

magazine.unsubscribe(readerB);
magazine.publishIssue();
// Expected output:
```
