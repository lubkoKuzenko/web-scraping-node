# reCAPTCHA V2

## Demo page

https://www.google.com/recaptcha/api2/demo

## How to solve

Locate the element with id `g-recaptcha-response` and use javascript to set the value of g-recaptcha-response field.

### JavaScript code

```js
document.getElementById("g-recaptcha-response").innerHTML = "TOKEN_FROM_2CAPTCHA";
```

### Python code

```python
page.fill('#g-recaptcha-response', token)
```

<img src="./images/reCAPTCHA V2.png" />

Once field has correct value we can click verify button.

```python
s = self.recaptcha.locator("//span[@id='recaptcha-anchor']")
if s.get_attribute("aria-checked") != "false":
    self.page.click("id=recaptcha-demo-submit")
    self.delay()
    break
```

`XPath` selector for submit button

```
//*[@id="recaptcha-demo-submit"]
```

In case when submit button has dynamic id we can use more generic selector.

```js
document.querySelector('input[type="submit"]');
```

## Python code example

https://github.com/Binit-Dhakal/Google-reCAPTCHA-v2-solver-using-playwright-python/blob/main/main.py
