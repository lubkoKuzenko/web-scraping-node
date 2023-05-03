# Datadome captcha

## Demo page

https://geo.captcha-delivery.com/captcha/?initialCid=AHrlqAAAAAMA1QGvUmJwyYoAwpyjNg%3D%3D&hash=789361B674144528D0B7EE76B35826&cid=6QAEcL8coBYTi9tYLmjCdyKmNNyHz1xwM2tMHHGVd_Rxr6FsWrb7H~a04csMptCPYfQ25CBDmaOZpdDa4qwAigFnsrzbCkVkoaBIXVAwHsjXJaKYXsTpkBPtqJfLMGN&t=fe&referer=https%3A%2F%2bck.websiteurl.com%2Fclient%2Fregister%2FYM4HJV%3Flang%3Den&s=40070&e=3e531bd3b30650f2e810ac72cd80adb5eaa68d2720e804314d122fa9e84ac25d

## How it works

https://datadome.co/bot-management-protection/how-to-detect-block-manage-sneaker-bots/

https://scrapfly.io/blog/how-to-bypass-datadome-anti-scraping/

https://medium.com/@campo1312/how-to-detect-block-and-manage-datadome-c6e94c74a4f4

## How to solve

If it is all good, the server will respond with 200 as status code and something like this as header

```json
set-cookie: datadome=Tdx_AVi.VpcPns7JD7n9~EedCazO2jmhdrv_5Hhxmg3ZnUB4iHxn1OE0pum84C2RrSAm_Tnbf7VfF-6.Kfy_XQGeYZBFPwQkbn2~xSmO0J; Max-Age=31536000; Domain=.captcha-delivery.com; Path=/; SameSite=Lax
```

Looks like we need just to update cookie key `datadome` and captch will be solved.

https://docs.capsolver.com/guide/antibots/datadome.html

## Repo with python example

https://github.com/campo1312/DataDome/
