# WebGL fingerprinting

## WHAT IS THIS?

WebGL is a JavaScript API for rendering interactive 2D and 3D graphics. The method for generating a “hash of WebGL fingerprint” is very similar to generating a “hash of canvas fingerprint.” Its method is to use your browser to generate graphics, extracting data from how each pixel is rendered, serialize the result, and hash it.

## How it works

https://privacycheck.sec.lrz.de/active/fp_wg/fp_webgl.html

## How https://coveryourtracks.eff.org/ detect canvas fingerprint

1. Have dependency for `Fingerprintjs2` and uses his code to have hash. This code is available on `code example` folder.
2. It has this file `https://coveryourtracks.eff.org/static/fetch_whorls.js` to present results.
3. How canvas hash
   ```js
   whorls_v2["webgl_hash_v2"] = determine_randomized(
     () => Fingerprint2_new.x64hash128(JSON.stringify(components_hash["webgl"]), 31),
     () => Fingerprint2_new.x64hash128(JSON.stringify(components_second_run_hash["webgl"]), 31),
   );
   ```
4. `components_hash["webgl"]` it's result from code that we have from `code example` and in the end we have smaller hash

Example: `4b3d38a732df169958134507af5b4b6e`

## Code Example

<a href="./WebGL_example/index.html">Source code</a>
