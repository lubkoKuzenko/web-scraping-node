# Image captcha

Captcha is an image that contains distored but human-readable text. To solve the captcha user have to type the text from the image. look like the pictures below

## How to solve

```js
// Id Selector
document.getElementById("text-box");

// selector by attribute
document.querySelector('input[name="geetest_challenge"]');

// update value
document.querySelector('input[name="geetest_challenge"]').value = "challenge test";
```
