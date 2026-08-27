---
title: "Rule 110"
status: "sprouting"
dateCreated: "27 Aug 2026"
---

_Rule 110_ is an elementary cellular automaton. It is unique in being the only elementary cellular automaton to be proven to be [[/notes/turing-complete/|_Turing complete_]]. For this to be possible, _rule 110_ contains a number of self-perpetuating patterns, known as "spaceships", that can be [[/notes/infinite-loop/|infinitely repeated]].

| Ruleset          |     |     |     |     |     |     |     |     |
| ---------------- | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| Current pattern  | 111 | 110 | 101 | 100 | 011 | 010 | 001 | 000 |
| Next centre cell |  0  |  1  |  1  |  0  |  1  |  1  |  1  |  0  |

The name _rule 110_ is its _Wolfram code_ — the ruleset represented as the binary number 01101110 has the corresponding decimal value 110.

## Example

5 generations of _rule 110_ represented by `0`s and `1`s in a 7-cell row.

```plaintext
0 0 0 1 0 0 0
0 0 1 1 0 0 0
0 1 1 1 0 0 0
1 1 0 1 0 0 0
1 1 1 1 0 0 0
```

15 generations of _rule 110_ displaying the _A4_ glider with `#`s. This is the most common "spaceship" pattern in _rule 110_.

```plaintext
                      # # #
                    # #   #
                  # # # # #
                # #       #
              # # #     # #
            # #   #   # # #
          # # # # # # #   #
        # #           # # #
      # # #         # #   #
    # #   #       # # # # #
  # # # # #     # #       #
          #   # # #     # #
        # # # #   #   # # #
      # #     # # # # #   #
    # # #   # #       # # #
  # # #
```
