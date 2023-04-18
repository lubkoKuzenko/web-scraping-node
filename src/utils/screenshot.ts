import fs from "fs";
import path from "path";
import { Page } from "puppeteer";

const SCREENSHOT_DIR = "screenshots";

export const makeScreenshot = async (page: Page, resultImageName: string) => {
  if (!fs.existsSync(SCREENSHOT_DIR)) {
    fs.mkdirSync(SCREENSHOT_DIR);
  }

  return await page.screenshot({ path: path.join(SCREENSHOT_DIR, `${resultImageName}.png`) });
};
