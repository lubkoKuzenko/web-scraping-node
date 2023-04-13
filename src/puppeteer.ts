import { Browser, Page } from "puppeteer";
import { ScrapedDataType } from "./interfaces";
import { imageDownload } from "./utils/imageDownload";
import { writeFileSyncRecursive } from "./utils/writeFileSyncRecursive";

const puppeteer = require("puppeteer");

async function getLinks(page: Page): Promise<string[]> {
  return await page.$$eval(".product_pod h3 a", (elements) => elements.map((e) => e.href));
}

async function getPageDetails(page: Page, url: string): Promise<ScrapedDataType> {
  await page.goto(url);

  const title = await page.$eval(".product_main h1", (el) => el.textContent);
  const price = await page.$eval(".product_main .price_color", (el) => el.textContent);
  const availability = await page.$eval(".product_main .availability", (el) => (el as HTMLElement).innerText);
  const image = await page.$eval("#product_gallery .thumbnail img", (el) => el.src);

  imageDownload(image);

  return { title, price, availability };
}

async function main() {
  const browser: Browser = await puppeteer.launch({ headless: true });
  const page: Page = await browser.newPage();
  await page.goto("http://books.toscrape.com/");

  let links: string[] = [];
  let pageNumber: number = 1;
  while ((await page.$(".pager .next a")) && pageNumber <= 2) {
    links = [...links, ...(await getLinks(page))];

    console.log(`Total links found:  ${links.length}. Current page is: ${pageNumber}`);

    pageNumber++;
    await Promise.all([page.waitForNavigation(), page.click(".pager .next a")]);
  }

  let index: number = 0;
  const scrapedData: ScrapedDataType[] = [];
  for (const link of links) {
    console.log(`Script in progress ${(links.length * index) / 100}%`);

    const data: ScrapedDataType = await getPageDetails(page, link);
    scrapedData.push(data);

    index++;
  }

  // converting the scraped data object to JSON
  const scrapedDataJSON: string = JSON.stringify(scrapedData);

  writeFileSyncRecursive("build/data/toscrape.com.json", scrapedDataJSON, "utf8");

  await browser.close();

  console.log(`==================Done==================`);
}

main();
