import { Page } from 'puppeteer';

export const scrapApiEndpoint = async (page: Page, endpoint: string) => {
  const [res] = await Promise.all([
    page.waitForResponse((res) => res.url() === endpoint, { timeout: 90000 }),
    page.goto(endpoint, { waitUntil: 'domcontentloaded' }),
  ]);

  console.log(await res.json());
};
