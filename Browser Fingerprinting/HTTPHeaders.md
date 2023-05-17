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

<a href="./http headers/headers order.json">Headers Order per browser</a>
