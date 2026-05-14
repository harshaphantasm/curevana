import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 500, height: 717 } });
  const page = await context.newPage();
  await page.goto('https://curevana.com/');
  
  // Handle age verification
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  try {
      await ageBtn.waitFor({ state: 'visible', timeout: 5000 });
      await ageBtn.click({ force: true });
      await page.waitForTimeout(2000);
  } catch (e) {}

  await page.screenshot({ path: 'scratch/header_screenshot.png' });
  
  await browser.close();
})();
