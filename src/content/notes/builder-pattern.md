---
title: "Builder pattern"
status: "sprouting"
dateCreated: "30 July 2026"
dateUpdated: "03 August 2026"
---

The _builder_ pattern is a [[/notes/creational-pattern|creational design pattern]] for creating variations of objects step-by-step.

## Example

**Real-world analogy:** a housing construction project

[design-patterns/src/creational/builder.ts at main](https://github.com/dsoreilly/design-patterns/blob/main/src/creational/builder.ts)

### Products

Houses can have different configurations, which require different variations of products.

```ts
type Blueprint = string;

class Building {
  house: boolean;
  garage: boolean;
  garden: boolean;
  pool: boolean;
  statues: number;

  constructor() {
    this.house = false;
    this.garage = false;
    this.garden = false;
    this.pool = false;
    this.statues = 0;
  }
}
```

### Builder

An architect can draw blueprints from the given requirments. Likewise, an engineer can build from the given requirements. Both are experts in housing construction, but produce different things; the architect draws a house's blueprint, the engineer builds it.

```ts
interface ConstructionExpert {
  setHouse(): void;
  setWithGarage(): void;
  setWithGarden(): void;
  setWithPool(): void;
  setWithStatues(statues: number): void;
}

class Architect implements ConstructionExpert {
  private blueprint: Blueprint;

  constructor() {
    this.blueprint = "";
  }

  private reset() {
    this.blueprint = "";
  }

  setHouse() {
    this.blueprint += "🏠";
  }

  setWithGarage() {
    this.blueprint += " + 🚘";
  }

  setWithGarden() {
    this.blueprint += " + 🌻";
  }

  setWithPool() {
    this.blueprint += " + 🏊";
  }

  setWithStatues(statues: number) {
    for (let i = 0; i < statues; i++) {
      this.blueprint += " + 🗿";
    }
  }

  getResult(): Blueprint {
    const result = this.blueprint;
    this.reset();
    return result;
  }
}

class Engineer implements ConstructionExpert {
  private building: Building;

  constructor() {
    this.building = new Building();
  }

  private reset() {
    this.building = new Building();
  }

  setHouse() {
    this.building.house = true;
  }

  setWithGarage() {
    this.building.garage = true;
  }

  setWithGarden() {
    this.building.garden = true;
  }

  setWithPool() {
    this.building.pool = true;
  }

  setWithStatues(statues: number) {
    this.building.statues = statues;
  }

  getResult(): Building {
    const result = this.building;
    this.reset();
    return result;
  }
}
```

### Director

The project manager directs the experts to create their respective products. The director knows about the variations of houses, but doesn't know _how_ to create the products needed for those variations.

```ts
class ProjectManager {
  private expert: ConstructionExpert;

  constructor(Expert: ConstructionExpert) {
    this.expert = Expert;
  }

  setExpert(expert: ConstructionExpert) {
    this.expert = expert;
  }

  simpleHouse() {
    this.expert.setHouse();
  }

  houseWithGarage() {
    this.simpleHouse();
    this.expert.setWithGarage();
  }

  houseWithGarden() {
    this.simpleHouse();
    this.expert.setWithGarden();
  }

  houseWithPool() {
    this.simpleHouse();
    this.expert.setWithPool();
  }

  houseWithStatues(statues: number) {
    this.simpleHouse();
    this.expert.setWithStatues(statues);
  }
}
```

### Client

When the project manager wants a blueprint for a particular variation of house, they call upon an architect. When they want the building, they call upon an engineer. Calling the `getResult` method of the architect returns a `Blueprint` based on the step-by-step instructions given by the project manager. Calling the `getResult` method on the engineer returns a `Building` based on the step-by-step instructions given by the project manager.

```ts
const architect = new Architect();
const projectManager = new ProjectManager(architect);
projectManager.simpleHouse();
let blueprint = architect.getResult();
console.log(blueprint);
// Expected output:
// 🏠

projectManager.houseWithStatues(3);
blueprint = architect.getResult();
console.log(blueprint);
// Expected output:
// 🏠 + 🗿 + 🗿 + 🗿

const engineer = new Engineer();
projectManager.setExpert(engineer);
projectManager.simpleHouse();
let building = engineer.getResult();
console.log(building);
// Expected output:
// Building {
//   house: true,
//   garage: false,
//   garden: false,
//   pool: false,
//   statues: 0
// }

projectManager.houseWithGarden();
building = engineer.getResult();
console.log(building);
// Expected output:
//  Building {
//    house: true,
//    garage: false,
//    garden: true,
//    pool: false,
//    statues: 0
// }
```
