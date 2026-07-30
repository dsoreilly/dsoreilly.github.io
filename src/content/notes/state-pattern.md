---
title: "State Pattern"
status: "sprouting"
dateCreated: "29 July 2026"
---

The _state_ pattern is a [[/notes/behavioral-pattern|behavioral design pattern]] that enables an object to alter its functionality based on its internal state.

## Example

**Real-world analogy:** hardware behavior of a phone

[design-patterns/src/behavioral/state.ts on main](https://github.com/dsoreilly/design-patterns/blob/main/src/behavioral/state.ts)

### State

A phone can be in one of two states: locked or unlocked. Each state has its own set of actions for the phone's hardware buttons. In both the locked and unlocked state, pressing the side button changes the state of the phone.

```ts
abstract class PhoneState {
  protected buttons: PhoneButtons;

  constructor(buttons: PhoneButtons) {
    this.buttons = buttons;
  }

  abstract sideButton(): void;

  volumeUpButton() {
    console.log("Volume up pressed");
  }

  volumeDownButton() {
    console.log("Volume down pressed");
  }
}

class LockedState extends PhoneState {
  private auth: boolean = true;

  sideButton() {
    if (this.auth) {
      console.log("Unlocking phone");
      this.buttons.changeState(new UnlockedState(this.buttons));
    }
  }
}

class UnlockedState extends PhoneState {
  sideButton() {
    console.log("Locking phone");
    this.buttons.changeState(new LockedState(this.buttons));
  }

  override volumeUpButton() {
    console.log("Volume raised");
  }

  override volumeDownButton() {
    console.log("Volume lowered");
  }
}
```

### Context

The behavior of the phone's buttons is dependent on which state the phone is in (locked or unlocked). The button actions rely on their state's functionality.

```ts
class PhoneButtons {
  private state: PhoneState;

  constructor() {
    this.state = new UnlockedState(this);
  }

  sideButton() {
    this.state.sideButton();
  }

  volumeUpButton() {
    this.state.volumeUpButton();
  }

  volumeDownButton() {
    this.state.volumeDownButton();
  }

  changeState(state: PhoneState) {
    this.state = state;
  }
}
```

### Client

Calling the `volumeUpButton`, `volumeDownButton`, and `sideButton` methods on the buttons object has different outcomes depending on which state the phone is in (locked or unlocked).

```ts
const buttons = new PhoneButtons();
buttons.volumeUpButton();
// Expected output:
// Volume raised

buttons.volumeDownButton();
// Expected output:
// Volume lowered

buttons.sideButton();
// Expected output:
// Locking phone

buttons.volumeUpButton();
// Expected output:
// Volume up pressed

buttons.volumeDownButton();
// Expected output:
// Volume down pressed

buttons.sideButton();
// Expected output:
// Unlocking phone
```
