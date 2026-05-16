/**
 * Diagnostic script: inspect cart page structure and find correct selectors
 */
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // 1. Homepage - dismiss age gate
  console.log('\n=== Step 1: Homepage age gate ===');
  await page.goto('https://curevana.com/');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
  const ageBtn = page.locator("button:has-text(\"Yes, I'm 21+\")").first();
  if (await ageBtn.isVisible()) {
    await ageBtn.click({ force: true });
    console.log('Age gate clicked');
    await page.waitForTimeout(2000);
  } else {
    console.log('No age gate found');
  }

  // 2. Check /shop/ page
  console.log('\n=== Step 2: Shop page ===');
  await page.goto('https://curevana.com/shop/');
  const shopStatus = page.url();
  console.log('Shop URL:', shopStatus);
  await page.waitForTimeout(2000);

  // find all add_to_cart buttons
  const allAddBtns = await page.locator('.add_to_cart_button').all();
  console.log('Total .add_to_cart_button:', allAddBtns.length);
  for (const btn of allAddBtns.slice(0, 5)) {
    const cls = await btn.getAttribute('class');
    const href = await btn.getAttribute('href');
    const text = await btn.innerText().catch(() => '');
    console.log('  button class:', cls, '| text:', text.trim(), '| href:', href);
  }

  // 3. Go to product page directly and try adding
  console.log('\n=== Step 3: Diamond Infused Prerolls product page ===');
  await page.goto('https://curevana.com/product/curevana-thc-a-diamond-infused-prerolls-2g-2pc-6ct');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
  console.log('Product page URL:', page.url());
  
  const allButtons = await page.locator('button').all();
  console.log('Total buttons on page:', allButtons.length);
  for (const btn of allButtons.slice(0, 15)) {
    const text = await btn.innerText().catch(() => '');
    const name = await btn.getAttribute('name');
    const cls = await btn.getAttribute('class');
    console.log('  btn text:', text.trim().substring(0, 40), '| name:', name, '| class:', cls?.substring(0, 60));
  }

  // Check for age gate checkbox (might be required before Add to Cart)
  const ageCheckboxes = await page.locator('input[type="checkbox"]').all();
  console.log('Checkboxes on page:', ageCheckboxes.length);
  for (const cb of ageCheckboxes) {
    const id = await cb.getAttribute('id');
    const checked = await cb.isChecked();
    console.log('  checkbox id:', id, '| checked:', checked);
  }

  // 4. Try clicking Add to Cart
  const addBtn = page.locator('button:has-text("Add To Cart"), button:has-text("Add to cart"), button[name="add-to-cart"]').first();
  const addBtnVisible = await addBtn.isVisible().catch(() => false);
  console.log('\nAdd to Cart button visible:', addBtnVisible);
  if (addBtnVisible) {
    const disabled = await addBtn.getAttribute('disabled');
    console.log('Add to Cart button disabled attr:', disabled);
    await addBtn.click({ force: true });
    console.log('Clicked Add to Cart');
    await page.waitForTimeout(5000);
    
    // Check for any success message or view cart link
    const viewCart = page.locator('a:has-text("View cart")').first();
    const vcVisible = await viewCart.isVisible().catch(() => false);
    console.log('View cart link visible after click:', vcVisible);
  }

  // 5. Navigate to /cart
  console.log('\n=== Step 4: Cart page ===');
  await page.goto('https://curevana.com/cart');
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);
  console.log('Cart page URL:', page.url());
  console.log('Cart page title:', await page.title());
  
  const cartBody = await page.locator('body').innerText();
  console.log('Cart body snippet (first 2000 chars):\n', cartBody.substring(0, 2000));

  await browser.close();
})();
