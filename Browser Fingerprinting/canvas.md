# Canvas fingerprinting

## WHAT IS THIS?

A tracking site can perform a specific test on the HTML5 `<canvas>` element in your browser. This metric is the unique identification the tracker assigns to your browser after it performs this test.

Canvas fingerprinting is invisible to the user. A tracker can create a “canvas” in your browser, and generate a complicated collage of shapes, colors, and text using JavaScript. Then, with the resulting collage, the tracker extracts data about exactly how each pixel on the canvas is rendered. Many variables will affect the final result. These include your operating system, graphics card, firmware version, graphics driver version, and installed fonts.

## How it works

https://browserleaks.com/canvas#how-does-it-work

https://fingerprint.com/blog/canvas-fingerprinting/

https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL

## How https://coveryourtracks.eff.org/ detect canvas fingerprint

1. Have dependency for `Fingerprintjs2` and uses his code to have hash. This code is available on `code example` folder.
2. It has this file `https://coveryourtracks.eff.org/static/fetch_whorls.js` to present results.
3. How canvas hash
   ```js
   whorls_v2["canvas_hash_v2"] = determine_randomized(
     () => Fingerprint2_new.x64hash128(JSON.stringify(components_hash["canvas"]), 31),
     () => Fingerprint2_new.x64hash128(JSON.stringify(components_second_run_hash["canvas"]), 31),
   );
   ```
4. `components_hash["canvas"]` it's result from code that we have from `code example` and in the end we have smaller hash

Example: `8434ef957c0adc6db8d75ecff593ad2b`

## Code Example

<a href="./canvas_example/index.html">Source code</a>
