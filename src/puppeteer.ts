import { Browser, Page } from "puppeteer";

const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
const Downloader = require("nodejs-file-downloader");

interface ScrapedDataType {
  title: string | null;
  price: string | null;
  availability: string | null;
}

async function getLinks(page: Page): Promise<string[]> {
  const allLinks = await page.$$eval(".product_pod h3 a", (elements) => elements.map((e) => e.href));

  return allLinks;
}

async function getPageDetails(page: Page, url: string): Promise<ScrapedDataType> {
  await page.goto(url);

  const title = await page.$eval(".product_main h1", (el) => el.textContent);
  const price = await page.$eval(".product_main .price_color", (el) => el.textContent);
  const availability = await page.$eval(".product_main .availability", (el) => (el as HTMLElement).innerText);
  const image = await page.$eval("#product_gallery .thumbnail img", (el) => el.src);

  //   downloadImage(image);

  return { title, price, availability };
}

async function downloadImage(imageUrl: string) {
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

function writeFileSyncRecursive(filename: string, content: any, charset: string = "utf8") {
  // -- normalize path separator to '/' instead of path.sep,
  // -- as / works in node for Windows as well, and mixed \\ and / can appear in the path
  let filepath = filename.replace(/\\/g, "/");

  // -- preparation to allow absolute paths as well
  let root = "";
  if (filepath[0] === "/") {
    root = "/";
    filepath = filepath.slice(1);
  } else if (filepath[1] === ":") {
    root = filepath.slice(0, 3); // c:\
    filepath = filepath.slice(3);
  }

  // -- create folders all the way down
  const folders = filepath.split("/").slice(0, -1); // remove last item, file
  folders.reduce(
    (acc, folder) => {
      const folderPath = acc + folder + "/";
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
      return folderPath;
    },
    root, // first 'acc', important
  );

  // -- write file
  fs.writeFileSync(root + filepath, content, charset);
}

async function main() {
  const browser: Browser = await puppeteer.launch({ headless: true });
  const page: Page = await browser.newPage();
  await page.goto("http://books.toscrape.com/");

  let links: string[] = [];
  let pageNumber: number = 1;
  while ((await page.$(".pager .next a")) && pageNumber <= 3) {
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

// JavaScript/TypeScript
// Node.js
// Web scraping experience is preferable (Puppeteer, Nightmare, Cheerio, etc.)
// SQL (MySQL, PostgreSQL) or NoSQL (MongoDB)
