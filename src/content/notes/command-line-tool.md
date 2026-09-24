---
title: "Command-line tool"
status: "evergreen"
dateCreated: "28 Aug 2026"
dateUpdated: "24 Sep 2026"
---

Useful built-in (_macOS_) command-line tools with examples.

## curl

_Client for URLs_. Basic usage is for transfering data to and from servers using <abbr title="Uniform resource locator">URL</abbr>s.

### Example

Request the contents of `example.com`.

```sh
$ curl example.com

<!doctype html><html lang="en"><head><title>Example Domain</title>...
```

## dig

_Domain information groper_. Basic usage is for querying <abbr title="Domain name system">DNS</abbr> records for a domain.

### Example

Query _A_ records for the domain `example.com`.

```sh
$ dig example.com A

;; ANSWER SECTION:
example.com.            133     IN      A       104.20.23.154
example.com.            133     IN      A       172.66.147.243
```

## grep

_Global regular expression print_. Basic usage is for searching for text in a file using a regular expression, and print any lines that contain a match.

### Example

Search, ignoring case (`-i`), for any line that start with "hello" in the file `greeting.txt`.

```sh
$ grep -i '^hello' greeting.txt
Hello, world!
```

## sed

_Stream editor_. Basic usage is for transforming a text stream, such as from a text file, and apply a command.

### Example

Substitute (`s`) the word "world" for the word "you" in the text stream read from file `greeting.txt`.

```sh
$ sed 's/world/you/' greeting.txt
Hello, you!
```
