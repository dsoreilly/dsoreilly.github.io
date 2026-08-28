---
title: "Hypertext transfer protocol"
status: "sprouting"
dateCreated: "28 Aug 2026"
---

> The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack.

<cite>[What is HTTP?](https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/)</cite>

The _hypertext transfer protocol_ (<abbr title="Hypertext transfer protocol">HTTP</abbr>) is a request-response system in the client-server model that defines how data is transmitted across the _Internet_. <abbr title="Hypertext transfer protocol">HTTP</abbr> enables [[/notes/hypertext/|hypertext]] to reference other resources with hyperlinks (<abbr title="Uniform resource locator">URL</abbr>s that use the `http` <abbr title="Uniform resource identifier">URI</abbr> scheme).

## Request

Typically, a <abbr title="Hypertext transfer protocol">HTTP</abbr> request contains 3 structural components:

1. **Request line:** contains the method, target <abbr title="Uniform resource identifier">URI</abbr>, and the version.
2. **Headers:** metadata key-value pairs about the client and its request.
3. **Body:** optional data payload, dependant on the method used.

### Example

A <abbr title="Hypertext transfer protocol">HTTP</abbr> _GET_ request to `example.com` using the _curl_ [[/notes/command-line-tool/|command-line tool]].

```plaintext
GET / HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
```

## Response

Typically, a <abbr title="Hypertext transfer protocol">HTTP</abbr> response contains 3 structural components:

1. **Status line:** contains the version, status code, and reason.
2. **Headers:** metadata key-value pairs about the server and its response.
3. **Body:** optional data payload, dependant on the request type.

### Example

A <abbr title="Hypertext transfer protocol">HTTP</abbr> response to a _GET_ request to `example.com` using the _curl_ [[/notes/command-line-tool/|command-line tool]].

```plaintext
HTTP/1.1 200 OK
Content-Type: text/html
Connection: keep-alive
Last-Modified: Wed, 26 Aug 2026 20:16:59 GMT
Allow: GET, HEAD
Accept-Ranges: bytes
Age: 1923

<!doctype html><html lang="en"><head><title>Example Domain</title><link rel="icon" href="data:,"><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{background:#eee;width:60vw;margin:15vh auto;font-family:system-ui,sans-serif}h1{font-size:1.5em}div{opacity:0.8}a:link,a:visited{color:#348}</style></head><body><div><h1>Example Domain</h1><p>This domain is for use in documentation examples without needing permission. Avoid use in operations.</p><p><a href="https://iana.org/domains/example">Learn more</a></p></div></body></html>
```
