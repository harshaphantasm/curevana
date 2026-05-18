import { test, expect, Page } from '@playwright/test';

// ─── Helper: dismiss age gate and hide blocking overlays ──────────────────────
async function handleAgeVerification(page: Page) {
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  try {
    await ageBtn.waitFor({ state: 'visible', timeout: 8000 });
    await ageBtn.click({ force: true });
    await ageBtn.waitFor({ state: 'hidden', timeout: 5000 });
  } catch {
    // Already dismissed or not shown
  }

  // CRITICAL: hide fixed overlays that silently block clicks
  await page.addStyleTag({
    content: `
      div.fixed.inset-0,
      div.backdrop-blur-md,
      [class*="z-[200]"],
      [class*="z-[9999]"] {
        display: none !important;
        pointer-events: none !important;
      }
    `
  });

  await page.waitForTimeout(1000);
}

// ─── Helper: Navigate to Checkout with an item in cart ────────────────────────
async function prepareCheckout(page: Page) {
  // Step 0: Visit homepage to establish guest session cookie
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);
  await page.waitForLoadState('domcontentloaded');

  // Step 1: Navigate to product page
  await page.goto('https://curevana.com/product/curevana-thc-a-diamond-infused-prerolls-2g-2pc-6ct');
  await page.waitForLoadState('domcontentloaded');
  await handleAgeVerification(page);
  await page.waitForTimeout(500);

  // Step 2: Select flavor
  const flavorBtn = page.getByRole('button', { name: /WHITE ROLEX|BAMBAM ICE/i }).and(page.locator(':visible')).first();
  if (await flavorBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await flavorBtn.evaluate(b => (b as HTMLElement).click());
    await page.waitForTimeout(500);
  }

  // Step 3: Click Add To Cart
  const addBtn = page.locator('button[name="add-to-cart"], button.single_add_to_cart_button, button:has-text("Add To Cart"), button:has-text("Add to cart")').and(page.locator(':visible')).first();
  await addBtn.evaluate(b => (b as HTMLElement).click()).catch(() => addBtn.click({ force: true }));
  await page.waitForTimeout(3000);

  // Step 4: Proceed directly to checkout
  await page.goto('https://curevana.com/checkout');
  await page.waitForLoadState('domcontentloaded');
  await handleAgeVerification(page);
}

// ==================================================
// Module: Checkout
// Flow ID: 9.1
// Test Case Title: Fill Shipping Address (Same as Billing)
// ==================================================
test('9.1 Fill Shipping Address (Same as Billing)', async ({ page }) => {
  // Step 1: Add product → cart → Proceed to Checkout
  await prepareCheckout(page);

  // Step 2: Verify 'Shipping Address' expanded
  const shippingHeader = page.getByRole('button', { name: 'Shipping Address', exact: true }).first();
  await expect(shippingHeader).toBeVisible({ timeout: 30000 });
  await expect(page.getByPlaceholder('First name').first()).toBeVisible({ timeout: 10000 });

  // Step 3: Fill: First=John, Last=Doe, Email=john.doe@example.com, Phone=5551234567, Addr=123 Main St, Apt 4B, City=Joliet, State=Illinois, ZIP=60436
  await page.getByPlaceholder('First name').first().fill('John');
  await page.getByPlaceholder('Last name').first().fill('Doe');
  await page.getByPlaceholder('Email address').first().fill('john.doe@example.com');
  await page.getByPlaceholder('Phone number').first().fill('5551234567');
  
  const addressInput = page.getByPlaceholder('Enter your address').first();
  await addressInput.fill('123 Main St');
  await page.waitForTimeout(2000); // Wait for autocomplete
  await addressInput.press('ArrowDown');
  await addressInput.press('Enter');
  await page.waitForTimeout(1000);

  const aptInput = page.getByPlaceholder('Apartment, suite, etc. (optional)').first();
  if (await aptInput.isVisible()) {
    await aptInput.fill('Apt 4B');
  }

  await page.getByPlaceholder('City').first().fill('Joliet');

  const stateDropdown = page.locator('select#state').first();
  if (await stateDropdown.isVisible({ timeout: 5000 }).catch(() => false)) {
    await stateDropdown.selectOption({ label: 'Illinois' }).catch(() => stateDropdown.selectOption({ value: 'IL' }));
  } else {
    const stateInput = page.locator('input[placeholder*="State" i]').first();
    await stateInput.fill('Illinois');
  }

  await page.getByPlaceholder('Postal code').first().fill('60436');

  // Step 4: Verify Country pre-set=US
  const countryLocator = page.locator('select[name="country"], input[name="country"], [placeholder="Country"]').first();
  const countryValue = await countryLocator.inputValue().catch(() => '');
  const countryText = await countryLocator.innerText().catch(() => '');
  expect(countryValue + countryText).toMatch(/US|United States/i);

  // Step 5: Check 'Use Shipping Address as Billing'
  const checkbox = page.locator('input[type="checkbox"]').nth(0);
  await checkbox.scrollIntoViewIfNeeded();
  const isChecked = await checkbox.isChecked().catch(() => false);
  if (!isChecked) {
    await checkbox.click({ force: true });
    await page.waitForTimeout(2000);
  }

  // Step 6: Verify Billing collapses/auto-fills
  await expect(page.getByPlaceholder('First name').last()).toHaveValue('John');

  await page.screenshot({ path: 'screenshots/9.1_shipping_filled.png', fullPage: false });

  // Step 7: Click 'Continue to Payment'
  const continueBtn = page.locator('button:has-text("Continue to Payment"), button:has-text("Proceed to Payment"), button:has-text("Continue to payment")').first();
  await continueBtn.scrollIntoViewIfNeeded();
  await continueBtn.click({ force: true });

  // Step 8: Wait 3s → verify page advances
  await page.waitForTimeout(3000);
  const paymentHeading = page.locator('text=/Payment Method|Credit Card|Card Details/i').first();
  await expect(paymentHeading).toBeVisible({ timeout: 10000 });
});

// ==================================================
// Module: Checkout
// Flow ID: 9.2
// Test Case Title: Fill Shipping and Billing Separately
// ==================================================
test('9.2 Fill Shipping and Billing Separately', async ({ page }) => {
  // Pre-conditions: Cart has items; user on checkout page
  await prepareCheckout(page);

  // Step 1: Fill Shipping (John Doe – as 9.1)
  await page.getByPlaceholder('First name').first().fill('John');
  await page.getByPlaceholder('Last name').first().fill('Doe');
  await page.getByPlaceholder('Email address').first().fill('john.doe@example.com');
  await page.getByPlaceholder('Phone number').first().fill('5551234567');
  
  const addressInput = page.getByPlaceholder('Enter your address').first();
  await addressInput.fill('123 Main St');
  await page.waitForTimeout(2000);
  await addressInput.press('ArrowDown');
  await addressInput.press('Enter');
  await page.waitForTimeout(1000);

  const aptInput = page.getByPlaceholder('Apartment, suite, etc. (optional)').first();
  if (await aptInput.isVisible()) {
    await aptInput.fill('Apt 4B');
  }

  await page.getByPlaceholder('City').first().fill('Joliet');

  const stateDropdown = page.locator('select#state').first();
  if (await stateDropdown.isVisible({ timeout: 5000 }).catch(() => false)) {
    await stateDropdown.selectOption({ label: 'Illinois' }).catch(() => stateDropdown.selectOption({ value: 'IL' }));
  } else {
    const stateInput = page.locator('input[placeholder*="State" i]').first();
    await stateInput.fill('Illinois');
  }

  await page.getByPlaceholder('Postal code').first().fill('60436');

  // Step 2: Keep 'Use Shipping as Billing' unchecked
  const checkbox = page.locator('input[type="checkbox"]').nth(0);
  await checkbox.scrollIntoViewIfNeeded();
  const isChecked = await checkbox.isChecked().catch(() => false);
  if (isChecked) {
    await checkbox.click({ force: true });
    await page.waitForTimeout(2000);
  }

  // Step 3: Expand Billing section
  const billingHeader = page.getByRole('button', { name: 'Billing Address', exact: true }).first();
  await billingHeader.scrollIntoViewIfNeeded();
  await billingHeader.click({ force: true });
  await page.waitForTimeout(1000);

  // Step 4: Fill Billing: First=Jane, Last=Smith, Email=jane.smith@example.com, Phone=5559876543, Addr=456 Oak Ave, City=Chicago, State=Illinois, ZIP=60601
  await page.getByPlaceholder('First name').last().fill('Jane');
  await page.getByPlaceholder('Last name').last().fill('Smith');
  
  const emailInput = page.getByPlaceholder('Email address').last();
  if (await emailInput.isVisible()) {
    await emailInput.fill('jane.smith@example.com');
  }

  const phoneInput = page.getByPlaceholder('Phone number').last();
  if (await phoneInput.isVisible()) {
    await phoneInput.fill('5559876543');
  }

  const billingAddressInput = page.getByPlaceholder('Enter your address').last();
  await billingAddressInput.fill('456 Oak Ave');
  await page.waitForTimeout(2000);
  await billingAddressInput.press('ArrowDown');
  await billingAddressInput.press('Enter');
  await page.waitForTimeout(1000);

  await page.getByPlaceholder('City').last().fill('Chicago');

  const bStateDropdown = page.locator('select#state').last();
  if (await bStateDropdown.isVisible({ timeout: 5000 }).catch(() => false)) {
    await bStateDropdown.selectOption({ label: 'Illinois' }).catch(() => bStateDropdown.selectOption({ value: 'IL' }));
  } else {
    const bStateInput = page.locator('input[placeholder*="State" i]').last();
    await bStateInput.fill('Illinois');
  }

  await page.getByPlaceholder('Postal code').last().fill('60601');

  await page.screenshot({ path: 'screenshots/9.2_billing_filled.png', fullPage: false });

  // Step 5: Click 'Continue to Payment'
  const continueBtn = page.locator('button:has-text("Continue to Payment"), button:has-text("Proceed to Payment"), button:has-text("Continue to payment")').first();
  await continueBtn.scrollIntoViewIfNeeded();
  await continueBtn.click({ force: true });

  // Step 6: Wait 3s → verify page advances
  await page.waitForTimeout(3000);
  const paymentHeading = page.locator('text=/Payment Method|Credit Card|Card Details/i').first();
  await expect(paymentHeading).toBeVisible({ timeout: 10000 });
});
