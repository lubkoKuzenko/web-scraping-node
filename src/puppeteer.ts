import { Browser, HTTPResponse, Page } from "puppeteer";
import { config } from "./config/config";
import { ScrapedDataType } from "./interfaces";
import { selectors } from "./selectors";
import { imageDownload, writeFileSyncRecursive, scrapApiEndpoint, makeScreenshot } from "./utils";

// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
import puppeteer from "puppeteer-extra";

// add stealth plugin and use defaults (all evasion techniques)
import StealthPlugin from "puppeteer-extra-plugin-stealth";

puppeteer.use(StealthPlugin());

async function getLinks(page: Page): Promise<string[]> {
  return await page.$$eval(selectors.book_link, (elements) => elements.map((e) => (e as HTMLAnchorElement).href));
}

async function getPageDetails(page: Page, url: string): Promise<ScrapedDataType> {
  await page.goto(url);

  const title = await page.$eval(selectors.book_title, (el) => el.textContent);
  const price = await page.$eval(selectors.book_price, (el) => el.textContent);
  const availability = await page.$eval(selectors.book_availability, (el) => (el as HTMLElement).innerText);
  const image = await page.$eval(selectors.book_thumbnail, (el) => (el as HTMLImageElement).src);

  imageDownload(image);

  return { title, price, availability };
}

async function main() {
  const browser: Browser = await puppeteer.launch({ headless: true });
  const page: Page = await browser.newPage();
  await page.goto(config.baseURL, { waitUntil: "load" });

  await makeScreenshot(page, "test");

  // scrap list of elements
  // const list = await page.$$eval("div[data-behat-search-results-lg] li", (elements: HTMLElement[]) => {
  //   return elements.map((element) => {
  //     const title = element.querySelector(".v2-listing-card__info h3")?.textContent || "";
  //     const url = element.querySelector(".v2-listing-card__info .lc-price .currency-value")?.textContent || "";

  //     return { title, url };
  //   });
  // });

  // const scrapedDataJSON: string = JSON.stringify(list);

  // await scrapApiEndpoint(page, config.apiEndpoint);

  // let links: string[] = [];
  // let pageNumber: number = 1;
  // while ((await page.$(selectors.pagination_next_button)) && pageNumber <= 2) {
  //   links = [...links, ...(await getLinks(page))];

  //   console.log(`Total links found:  ${links.length}. Current page is: ${pageNumber}`);

  //   pageNumber++;
  //   await Promise.all([page.waitForNavigation(), page.click(selectors.pagination_next_button)]);
  // }

  // let index: number = 0;
  // const scrapedData: ScrapedDataType[] = [];
  // for (const link of links) {
  //   index++;
  //   console.log(`Script in progress ${(100 * index) / links.length}%`);

  //   const data: ScrapedDataType = await getPageDetails(page, link);
  //   scrapedData.push(data);
  // }

  // // converting the scraped data object to JSON
  // const scrapedDataJSON: string = JSON.stringify(scrapedData);

  // writeFileSyncRecursive("build/data/toscrape.com.json", scrapedDataJSON, "utf8");

  await browser.close();

  console.log(`==================Done==================`);
}

main();
