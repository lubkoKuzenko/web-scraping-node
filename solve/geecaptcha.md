# GeeTest Captcha

## Demo page

https://2captcha.com/demo/geetest-v4
https://2captcha.com/demo/geetest

## How to solve GeeTest V3

https://2captcha.com/2captcha-api#solving_geetest
https://docs.capsolver.com/guide/captcha/Geetest.html

If captcha is already solved server will return the response in JSON. The response contains three values: `challenge`, `validate` and `seccode`:

```json
{
  "challenge": "1a2b3456cd67890e12345fab678901c2de",
  "validate": "09fe8d7c6ba54f32e1dcb0a9fedc8765",
  "seccode": "12fe3d4c56789ba01f2e345d6789c012|jordan"
}
```

For GeeTest v3 use the values received from our API to update `geetest_form`.

<img src='./images/GeeTest v3.png' />

```js
// selector to select challenge input
document.querySelector('input[name="geetest_challenge"]');

// update
document.querySelector('input[name="geetest_challenge"]').value = "challenge test";

// selector to select validate input
document.querySelector('input[name="geetest_validate"]');

// update
document.querySelector('input[name="geetest_validate"]').value = "validate test";

// selector to select seccode input
document.querySelector('input[name="geetest_seccode"]');

// update
document.querySelector('input[name="geetest_seccode"]').value = "seccode test";
```

Done. After that, you can proceed to perform actions on the page.

## Puppeteer code example

https://github.com/dzmitry-duboyski/GeeTest-demo/blob/main/index.js

https://github.com/dzmitry-duboyski/GeeTest-demo

## How to solve GeeTest V4

If captcha is already solved server will return the response in JSON.

```json
{
  "captcha_id": "e392e1d7fd421dc63325744d5a2b9c73",
  "lot_number": "532c4ca58e3f4adb8ef96bfa222e623e",
  "pass_token": "9e6a5a354d50f3ab674c416de35b539c37627128382abd78342dd79442351f8f",
  "gen_time": "1679073037",
  "captcha_output": "c3rHzKlQXuv9xJe_l2wqb7ypWdFpbyZ_pk1ODXGTOdHKE5cJFer1r1jNTt2n5muwLzs5HOQ39D2lFjzqcygPO7ftaMFLXVMTCZuD8PkD4j10_vnvF0keeTTjbJaC0jq7btCE12-eN6fF6WPtHEoXLLXqkb8HaISjG5znAuZDMZ055HsCE6S7iyiaJYv_l0Sm1atkF0VEAYaKrEhQRYHus35X6FqIoRvVo1ISyCZGnjw="
}
```

Use the values returned on your target website the same way they’re used once you solve the captcha manually. There can be a form with a set of hidden inputs or a JavaScript callback. Or you can simply build a HTTP requests with the required data.

This is example how to build HTTP requests. In case you need to populate values to form - check documentation about V3 solving process and vice versa.

```json
{
  "captcha_id": "e392e1d7fd421dc63325744d5a2b9c73",
  "lot_number": "532c4ca58e3f4adb8ef96bfa222e623e",
  "pass_token": "9e6a5a354d50f3ab674c416de35b539c37627128382abd78342dd79442351f8f",
  "gen_time": "1679073037",
  "captcha_output": "c3rHzKlQXuv9xJe_l2wqb7ypWdFpbyZ_pk1ODXGTOdHKE5cJFer1r1jNTt2n5muwLzs5HOQ39D2lFjzqcygPO7ftaMFLXVMTCZuD8PkD4j10_vnvF0keeTTjbJaC0jq7btCE12-eN6fF6WPtHEoXLLXqkb8HaISjG5znAuZDMZ055HsCE6S7iyiaJYv_l0Sm1atkF0VEAYaKrEhQRYHus35X6FqIoRvVo1ISyCZGnjw="
}
```

### Example

<img src="./images/GeeTest v4.png" />
