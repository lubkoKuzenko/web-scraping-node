import { Page } from "puppeteer";

export const makeScreenshot = async (page: Page, resultImageName: string) => {
  return await page.screenshot({ path: `screenshots/${resultImageName}.png` });
};
