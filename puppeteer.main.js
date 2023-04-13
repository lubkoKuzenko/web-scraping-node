const fs = require("fs");
const puppeteer = require("puppeteer");
const Downloader = require("nodejs-file-downloader");

async function getLinks(page) {
  const allLinks = await page.$$eval(".product_pod h3 a", (elements) => elements.map((e) => e.href));

  return allLinks;
}

async function getPageDetails(page, url) {
  await page.goto(url);

  const title = await page.$eval(".product_main h1", (el) => el.textContent);
  const price = await page.$eval(".product_main .price_color", (el) => el.textContent);
  const availability = await page.$eval(".product_main .availability", (el) => el.innerText);
  const image = await page.$eval("#product_gallery .thumbnail img", (el) => el.src);

  //   downloadImage(page, image);

  return { title, price, availability };
}

async function downloadImage(page, imageUrl) {
  const downloader = new Downloader({
    url: imageUrl, //If the file name already exists, a new file with the name 200MB1.zip is created.
    directory: "./downloads", //This folder will be created, if it doesn't exist.
  });
  try {
    const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

    console.log("All done");
  } catch (error) {
    //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
    //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
    console.log("Download failed", error);
  }
}

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://books.toscrape.com/");

  let links = [];
  let pageNumber = 1;
  while (await page.$(".pager .next a")) {
    links = [...links, ...(await getLinks(page))];

    console.log(`Total links found:  ${links.length}. Current page is: ${pageNumber}`);

    pageNumber++;
    await Promise.all([page.waitForNavigation(), page.click(".pager .next a")]);
  }

  let index = 0;
  const scrapedData = [];

  for (const link of links) {
    console.log(`Script in progress ${(links.length * index) / 100}%`);

    const data = await getPageDetails(page, link);
    scrapedData.push(data);

    index++;
  }

  // converting the scraped data object to JSON
  const scrapedDataJSON = JSON.stringify(scrapedData);

  fs.writeFileSync("data/toscrape.com.json", scrapedDataJSON);

  await browser.close();

  console.log(`==================Done==================`);
}

main();

// JavaScript/TypeScript
// Node.js
// Web scraping experience is preferable (Puppeteer, Nightmare, Cheerio, etc.)
// SQL (MySQL, PostgreSQL) or NoSQL (MongoDB)