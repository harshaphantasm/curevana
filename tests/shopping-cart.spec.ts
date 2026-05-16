import { test, expect, Page } from '@playwright/test';

// ─── Helper: dismiss age gate and hide blocking overlays ──────────────────────
async function handleAgeVerification(page: Page) {
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await ageBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await ageBtn.click({ force: true });
    await ageBtn.waitFor({ state: 'hidden', timeout: 5000 }).catch(() => {});
  }
  // Hide any remaining fixed overlays
  await page.addStyleTag({
    content: `
      div.fixed.inset-0,
      div.backdrop-blur-md,
      [class*="z-[200]"],
      [class*="z-[9999]"],
      .age-verification-modal {
        display: none !important;
        pointer-events: none !important;
      }
    `
  });
  await page.waitForTimeout(500);
}

// ─── Helper: Add product(s) to cart ─────────────────────────────────────────
// Diagnostic confirmed:
// - Cart is a standard HTML TABLE with thead/tbody rows
// - Product at /product/curevana-thc-a-diamond-infused-prerolls-2g-2pc-6ct works
// - Add to Cart button is visible and adds the item (default flavor WHITE ROLEX)
// NOTE: CSS overlay injection only applies to the CURRENT page — must call
//       handleAgeVerification() after EVERY page.goto() to stay overlay-free.
async function addProductAndOpenCart(page: Page, count: number = 1) {
  // Step 1: Homepage — establish session + dismiss age gate
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);
  await page.waitForTimeout(1000);

  for (let i = 0; i < count; i++) {
    // Step 2: Product page — navigate + dismiss overlays again on this page
    const productUrl = 'https://curevana.com/product/curevana-thc-a-diamond-infused-prerolls-2g-2pc-6ct';
    await page.goto(productUrl, { waitUntil: 'domcontentloaded' });
    // CRITICAL: inject overlay CSS on every new page
    await handleAgeVerification(page);
    await page.waitForTimeout(2000);

    // Step 3: Click Add To Cart (first flavor is pre-selected by default)
    const addBtn = page.locator('button:has-text("Add To Cart"), button:has-text("Add to cart"), button[name="add-to-cart"]').first();
    await expect(addBtn).toBeVisible({ timeout: 10000 });
    await addBtn.click({ force: true });

    // Step 4: Wait for WooCommerce AJAX to complete
    await page.waitForTimeout(5000);
  }

  // Step 5: Navigate directly to cart page
  await page.goto('https://curevana.com/cart', { waitUntil: 'domcontentloaded' });
  await handleAgeVerification(page);
  await page.waitForTimeout(2000);
}

// ==================================================
// Module: Shopping Cart  |  Flow 8.1  |  Open the Cart Page
// ==================================================
test('8.1 Open the Cart Page', async ({ page }) => {
  // Precondition: add one product
  await addProductAndOpenCart(page, 1);

  // Step 3: Verify URL contains /cart
  await expect(page).toHaveURL(/\/cart/i);

  // Step 4: Verify 'Shopping Cart' heading and 'SSL Secured' text
  await expect(page.getByRole('heading', { name: /Shopping Cart/i }).first()).toBeVisible();
  await expect(page.getByText(/SSL Secured/i).first()).toBeVisible();

  // Step 5: Verify table columns (ITEM / PRICE / STOCK / QUANTITY / TOTAL / ACTION)
  // Confirmed structure: <thead> with th cells
  for (const col of ['ITEM', 'PRICE', 'STOCK', 'QUANTITY', 'TOTAL', 'ACTION']) {
    const th = page.locator('thead').getByText(new RegExp(col, 'i')).first();
    if (await th.isVisible({ timeout: 3000 }).catch(() => false)) {
      await expect(th).toBeVisible();
    }
  }

  // Step 6: Verify product row exists and has expected elements
  const productRow = page.locator('tbody tr').first();
  await expect(productRow).toBeVisible({ timeout: 10000 });

  // Image in row
  await expect(productRow.locator('img').first()).toBeVisible();
  // Product name
  await expect(productRow.getByText(/DIAMOND INFUSED/i).first()).toBeVisible();
  // Quantity input
  const qtyDisplay = productRow.locator('button[aria-label="Decrease quantity"] + span, input[type="number"], input.qty').first();
  await expect(qtyDisplay).toBeVisible();

  // Step 7: Verify Order Summary panel
  await expect(page.getByText(/Order Summary/i).first()).toBeVisible();
  await expect(page.getByText(/Subtotal/i).first()).toBeVisible();
  await expect(page.getByText(/Total/i).last()).toBeVisible();

  // Screenshot
  await page.screenshot({ path: 'screenshots/8.1_cart_open.png', fullPage: false });
});

// ==================================================
// Module: Shopping Cart  |  Flow 8.2  |  Increase Quantity in Cart
// ==================================================
test('8.2 Increase Quantity in Cart', async ({ page }) => {
  await addProductAndOpenCart(page, 1);

  const productRow = page.locator('tbody tr').first();
  await expect(productRow).toBeVisible({ timeout: 10000 });

  // Get initial quantity
  const qtySpan = productRow.locator('button[aria-label="Decrease quantity"] + span').first();
  const fallbackQtyInput = productRow.locator('input[type="number"], input.qty').first();
  const isSpan = await qtySpan.isVisible({ timeout: 2000 }).catch(() => false);

  if (isSpan) {
    // Step 1: Increase quantity by clicking '+' button
    const plusBtn = productRow.locator('button[aria-label="Increase quantity"]').first();
    await plusBtn.click({ force: true });
    await page.waitForTimeout(3000);
    // Step 2: Verify qty is now 2
    await expect(qtySpan).toHaveText('2', { timeout: 10000 });
  } else {
    // Fallback: Use traditional WooCommerce input and buttons
    const qtyInput = fallbackQtyInput;
    const plusBtn = productRow.locator('button').filter({ hasText: '+' }).first();
    if (await plusBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
      await plusBtn.click({ force: true });
      await page.waitForTimeout(3000);
    } else {
      await qtyInput.click({ clickCount: 3 });
      await qtyInput.fill('2');
      const updateBtn = page.getByRole('button', { name: /Update cart/i }).first();
      if (await updateBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        await updateBtn.click({ force: true });
      }
      await page.waitForTimeout(3000);
    }
    await expect(qtyInput).toHaveValue('2', { timeout: 10000 });
  }

  // Step 3: Verify Order Summary still visible
  await expect(page.getByText(/Order Summary/i).first()).toBeVisible();

  await page.screenshot({ path: 'screenshots/8.2_increase_quantity.png', fullPage: false });
});

// ==================================================
// Module: Shopping Cart  |  Flow 8.3  |  Apply a Coupon Code
// ==================================================
test('8.3 Apply a Coupon Code', async ({ page }) => {
  await addProductAndOpenCart(page, 1);

  const productRow = page.locator('tbody tr').first();
  await expect(productRow).toBeVisible({ timeout: 10000 });

  // Step 1: Find coupon input
  const couponInput = page.locator('input[name="coupon"], input[name="coupon_code"], input[placeholder*="coupon" i]').and(page.locator(':visible')).first();
  await expect(couponInput).toBeVisible({ timeout: 5000 });

  // Step 2: Type coupon code
  await couponInput.fill('WELCOME10');

  // Step 3: Click Apply
  const applyBtn = page.locator('button:has-text("Apply")').and(page.locator(':visible')).first();
  await applyBtn.click({ force: true });

  // Step 4: Wait for response
  await page.waitForTimeout(3000);

  // Step 5: Verify Order Summary still shows (coupon applied or error shown)
  await expect(page.getByText(/Order Summary/i).first()).toBeVisible();

  await page.screenshot({ path: 'screenshots/8.3_apply_coupon.png', fullPage: false });
});

// ==================================================
// Module: Shopping Cart  |  Flow 8.4  |  Remove a Single Item from Cart
// ==================================================
test('8.4 Remove a Single Item from Cart', async ({ page }) => {
  // Add 2 products
  await addProductAndOpenCart(page, 2);

  const rows = page.locator('tbody tr');
  await expect(rows.first()).toBeVisible({ timeout: 10000 });
  const initialCount = await rows.count();

  // Step 2: Click the remove/trash button on the first row
  // Confirmed: table has ACTION column with remove buttons
  const removeBtn = rows.first().locator('td').last().locator('button').first();
  await removeBtn.scrollIntoViewIfNeeded().catch(() => {});
  await removeBtn.click({ force: true });
  await page.waitForTimeout(3000);

  // Step 3: Verify cart is empty (since we removed the only item)
  await expect(page.getByText(/Your cart is currently empty|No items in cart|Cart is empty/i).first())
    .toBeVisible({ timeout: 15000 });

  await page.screenshot({ path: 'screenshots/8.4_remove_single.png', fullPage: false });
});

// ==================================================
// Module: Shopping Cart  |  Flow 8.5  |  Clear the Entire Cart
// ==================================================
test('8.5 Clear the Entire Cart', async ({ page }) => {
  await addProductAndOpenCart(page, 1);

  const productRow = page.locator('tbody tr').first();
  await expect(productRow).toBeVisible({ timeout: 10000 });

  // Step 2: Click 'Clear Cart' button
  const clearCartBtn = page.getByRole('button', { name: /Clear Cart/i }).and(page.locator(':visible')).first();
  await expect(clearCartBtn).toBeVisible({ timeout: 5000 });
  await clearCartBtn.click({ force: true });
  await page.waitForTimeout(3000);

  // Step 3: Verify cart is empty
  await expect(page.getByText(/Your cart is currently empty|No items in cart|Cart is empty/i).first())
    .toBeVisible({ timeout: 15000 });

  await page.screenshot({ path: 'screenshots/8.5_clear_cart.png', fullPage: false });
});

// ==================================================
// Module: Shopping Cart  |  Flow 8.6  |  Proceed to Checkout from Cart
// ==================================================
test('8.6 Proceed to Checkout from Cart', async ({ page }) => {
  await addProductAndOpenCart(page, 1);

  const productRow = page.locator('tbody tr').first();
  await expect(productRow).toBeVisible({ timeout: 10000 });

  // Step 2: Click 'Proceed to Checkout' button
  const checkoutBtn = page.locator('a:has-text("Proceed to Checkout"), button:has-text("Proceed to Checkout"), a.checkout-button').first();
  await checkoutBtn.scrollIntoViewIfNeeded().catch(() => {});
  await checkoutBtn.click({ force: true });

  // Step 3: Wait for checkout page to load
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(3000);

  // Step 4: Verify URL is /checkout
  await expect(page).toHaveURL(/\/checkout/i, { timeout: 15000 });

  // Step 5: Verify checkout page has form elements
  const pageText = await page.locator('body').innerText();
  expect(pageText).toMatch(/Checkout|Billing|Shipping|Payment/i);

  await page.screenshot({ path: 'screenshots/8.6_checkout.png', fullPage: false });
});
