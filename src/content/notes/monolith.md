---
title: "Monolith"
status: "sprouting"
dateCreated: "20 Aug 2026"
---

In software architecture, monolith refers to codebases where all application capabilities are bundled and deployed in a single unit. Monoliths typically have a faster setup velocity than other architectures, such as [[/notes/microservices/|microservices]], due to requiring less infrastructure, but can be subject to organisational bottlenecks like multi-team coordination.

## Example

An e-commerce platform with three key features: product catalog, payment processing, email notifications. Each feature exists in the application and share a single database. Services communicate with one another directly.

```mermaid
flowchart LR
    id1[client request]
    subgraph MONOLITH
        id2[product catalog]
        id3[payment processing]
        id4[email notifications]
    end
    id5[shared database]
    id1 --> MONOLITH
    id2 --- id5
    id3 --- id5
    id4 --- id5
```
