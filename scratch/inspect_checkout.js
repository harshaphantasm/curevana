const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://curevana.com/');
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await ageBtn.isVisible({ timeout: 5000 }).catch(()=>false)) await ageBtn.click({ force: true });
  await page.goto('https://curevana.com/product/curevana-1g-premium-thca-preroll');
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: /WEDDING CAKE/i }).first().click({ force: true });
  await page.waitForTimeout(500);
  await page.locator('button.w-full').filter({ hasText: /Add To Cart/i }).first().click({ force: true });
  await page.waitForTimeout(3000);
  await page.goto('https://curevana.com/checkout');
  await page.waitForLoadState('networkidle');
  
  const labels = await page.locator('label').allInnerTexts();
  console.log("Labels:", labels.map(l => l.trim()).filter(Boolean));
  
  const inputs = await page.locator('input, select').evaluateAll(els => els.map(el => ({
      tagName: el.tagName,
      name: el.name,
      id: el.id,
      placeholder: el.placeholder,
      type: el.type,
      isVisible: el.offsetWidth > 0 || el.offsetHeight > 0
  })));
  console.log("Inputs:", inputs);
  
  await browser.close();
})();
