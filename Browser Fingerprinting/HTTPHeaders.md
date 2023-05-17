# HTTP Headers fingerprinting

## WHAT IS THIS?

HTTP headers are sent by the browser during a web request and can provide valuable information for fingerprinting. Some commonly analyzed headers include:

- User-Agent: Provides information about the browser, operating system, and device.
- Accept-Language: Indicates the user's preferred language.
- Accept-Encoding: Reveals supported content encodings.
- Do-Not-Track: Indicates the user's preference for tracking.

## How it works

https://privacycheck.sec.lrz.de/passive/fp_hs/fp_header_signature.php

https://net-square.com/httprint_paper.html

https://lwthiker.com/networks/2022/06/17/http2-fingerprinting.html

## HTTP Headers Example

<a href="./http headers/My_browser_fingerprint.json">My_browser_fingerprint_Example</a>

## HTTP Headers Order per browser

In consequence of this specification, different vendors, i.e. applications, e.g., browsers, send request headers in a different order because there was no agreement on a specific order. As a result of this arbitrariness in defining a request Header order by each vendor which was then used in different applications, there are different Header Signatures. The header order cannot be changed in the browser settings, which means a signature cannot be spoofed by the user.

The header order of each browser is fixed and cannot be changed in the browser settings.
This means the browser user cannot spoof its browser signature

```json
{
  "safari": [
    "Host",
    "Referer",
    "Accept",
    "Upgrade-Insecure-Requests",
    "Sec-Fetch-Dest",
    "Sec-Fetch-Mode",
    "Sec-Fetch-Site",
    "User-Agent",
    "Accept-Encoding",
    "Accept-Language",
    "Connection",
    "Cookie"
  ],
  "chrome": [
    "Host",
    "Connection",
    "sec-ch-ua",
    "sec-ch-ua-mobile",
    "sec-ch-ua-platform",
    "Upgrade-Insecure-Requests",
    "User-Agent",
    "Accept",
    "Sec-Fetch-Site",
    "Sec-Fetch-Mode",
    "Sec-Fetch-User",
    "Sec-Fetch-Dest",
    "Referer",
    "Accept-Encoding",
    "Accept-Language",
    "Cookie",
    ":method",
    ":authority",
    ":scheme",
    ":path",
    "sec-ch-ua",
    "sec-ch-ua-mobile",
    "sec-ch-ua-platform",
    "upgrade-insecure-requests",
    "user-agent",
    "accept",
    "sec-fetch-site",
    "sec-fetch-mode",
    "sec-fetch-user",
    "sec-fetch-dest",
    "referer",
    "accept-encoding",
    "accept-language",
    "cookie"
  ],
  "firefox": [
    "Host",
    "User-Agent",
    "Accept",
    "Accept-Language",
    "Accept-Encoding",
    "Connection",
    "Referer",
    "Cookie",
    "Upgrade-Insecure-Requests",
    "Sec-Fetch-Dest",
    "Sec-Fetch-Mode",
    "Sec-Fetch-Site",
    "Sec-Fetch-User",
    ":method",
    ":path",
    ":authority",
    ":scheme",
    "user-agent",
    "accept",
    "accept-language",
    "accept-encoding",
    "referer",
    "cookie",
    "upgrade-insecure-requests",
    "sec-fetch-dest",
    "sec-fetch-mode",
    "sec-fetch-site",
    "sec-fetch-user",
    "te"
  ],
  "edge": [
    "Host",
    "Connection",
    "sec-ch-ua",
    "sec-ch-ua-mobile",
    "sec-ch-ua-platform",
    "Upgrade-Insecure-Requests",
    "User-Agent",
    "Accept",
    "Sec-Fetch-Site",
    "Sec-Fetch-Mode",
    "Sec-Fetch-User",
    "Sec-Fetch-Dest",
    "Referer",
    "Accept-Encoding",
    "Accept-Language",
    "Cookie",
    ":method",
    ":authority",
    ":scheme",
    ":path",
    "sec-ch-ua",
    "sec-ch-ua-mobile",
    "sec-ch-ua-platform",
    "upgrade-insecure-requests",
    "user-agent",
    "accept",
    "sec-fetch-site",
    "sec-fetch-mode",
    "sec-fetch-user",
    "sec-fetch-dest",
    "referer",
    "accept-encoding",
    "accept-language",
    "cookie"
  ]
}
```
