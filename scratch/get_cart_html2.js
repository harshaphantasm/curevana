const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://curevana.com/');
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await ageBtn.isVisible({ timeout: 5000 }).catch(() => false)) await ageBtn.click({ force: true });
  await page.goto('https://curevana.com/product/curevana-thc-a-diamond-infused-prerolls-2g-2pc-6ct', { waitUntil: 'domcontentloaded' });
  if (await ageBtn.isVisible({ timeout: 2000 }).catch(() => false)) await ageBtn.click({ force: true });
  await page.waitForTimeout(2000);
  const addBtn = page.locator('button:has-text("Add To Cart"), button:has-text("Add to cart"), button[name="add-to-cart"]').first();
  await addBtn.click({ force: true });
  await page.waitForTimeout(5000);
  await page.goto('https://curevana.com/checkout', { waitUntil: 'domcontentloaded' });
  if (await ageBtn.isVisible({ timeout: 2000 }).catch(() => false)) await ageBtn.click({ force: true });
  await page.waitForTimeout(2000);
  
  const html = await page.locator('main').innerHTML().catch(() => page.locator('body').innerHTML());
  fs.writeFileSync('scratch/checkout_body.html', html);
  
  await browser.close();
})();
