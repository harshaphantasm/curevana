import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('Navigating to homepage...');
  await page.goto('https://curevana.com/');
  
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await ageBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    console.log('Clicking age gate...');
    await ageBtn.click({ force: true });
    await ageBtn.waitFor({ state: 'hidden', timeout: 5000 });
  }

  console.log('Navigating to product page...');
  await page.goto('https://curevana.com/product/curevana-thc-a-diamond-infused-prerolls-2g-2pc-6ct');
  await page.waitForLoadState('domcontentloaded');
  await page.screenshot({ path: 'scratch/product_before_click.png' });

  const addBtn = page.locator('button[name="add-to-cart"], button.single_add_to_cart_button, button:has-text("Add To Cart")').first();
  console.log('Clicking Add to Cart...');
  await addBtn.click({ force: true });

  console.log('Waiting 5s...');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'scratch/product_after_click.png' });

  console.log('Navigating to cart...');
  await page.goto('https://curevana.com/cart');
  await page.waitForLoadState('domcontentloaded');
  await page.screenshot({ path: 'scratch/cart_page.png' });

  const productRow = page.locator('div.bg-white.rounded-lg.shadow-sm, tr.cart_item, .cart-item').first();
  const isVisible = await productRow.isVisible();
  console.log('Product in cart visible:', isVisible);

  await browser.close();
})();
