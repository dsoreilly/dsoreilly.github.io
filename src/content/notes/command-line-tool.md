---
title: "Command-line tool"
status: "evergreen"
dateCreated: "28 Aug 2026"
---

Useful built-in (_macOS_) command-line tools with examples.

## curl

_Client for URLs_. Basic usage is for transfering data to and from servers using <abbr title="Uniform resource locator">URL</abbr>s.

### Example

Request the contents of `example.com`.

```sh
$ curl example.com

<!doctype html><html lang="en"><head><title>Example Domain</title><link rel="icon" href="data:,"><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{background:#eee;width:60vw;margin:15vh auto;font-family:system-ui,sans-serif}h1{font-size:1.5em}div{opacity:0.8}a:link,a:visited{color:#348}</style></head><body><div><h1>Example Domain</h1><p>This domain is for use in documentation examples without needing permission. Avoid use in operations.</p><p><a href="https://iana.org/domains/example">Learn more</a></p></div></body></html>
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
$ grep -i "^hello" greeting.txt
Hello, world!
```
