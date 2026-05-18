import { test, expect, Page } from '@playwright/test';

// ─── Helper: Navigate to Home, dismiss age gate, and hide blocking overlays ─────────
async function handleInitialLoad(page: Page) {
  await page.goto('https://curevana.com/');
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await ageBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await ageBtn.click({ force: true });
  }
  // Hide any fixed overlays (like sticky headers or popups) that might intercept clicks
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
  await page.waitForTimeout(500); // Small wait to ensure overlays disappear
}

// ==================================================
// Module: Static Pages
// Flow ID: 14.1
// Test Case Title: Open the About Us Page
// ==================================================
test('14.1 Open the About Us Page', async ({ page }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Navigate to About page
  // We'll click the 'About' or 'About Us' link if visible, otherwise navigate directly
  const aboutLink = page.getByRole('link', { name: /About/i }).first();
  if (await aboutLink.isVisible()) {
    await aboutLink.click();
  } else {
    await page.goto('https://curevana.com/about-us');
  }

  await page.waitForLoadState('domcontentloaded');

  // Step 2: Verify URL: /about-us
  await expect(page).toHaveURL(/.*\/about-us/i);

  // Step 3: Verify title 'About Curevana | Crafting Premium Hemp…'
  await expect(page).toHaveTitle(/About Curevana/i);

  // Step 4: Verify About Us content displayed
  // We'll verify that the 'Vision' heading is visible on the page
  const heading = page.getByRole('heading', { name: /Vision/i }).first();
  await expect(heading).toBeVisible();

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/14.1_about_us.png', fullPage: false });
});

// ==================================================
// Module: Static Pages
// Flow ID: 14.2
// Test Case Title: Open the FDA Disclaimer Page
// ==================================================
test('14.2 Open the FDA Disclaimer Page', async ({ page }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Scroll to footer → Quick Links → click 'FDA Disclaimer'
  const fdaLink = page.locator('footer').getByRole('link', { name: /FDA Disclaimer/i }).first();
  await fdaLink.scrollIntoViewIfNeeded();
  await fdaLink.click();

  await page.waitForLoadState('domcontentloaded');

  // Step 2: Verify URL: /fda-disclaimer
  await expect(page).toHaveURL(/.*\/fda-disclaimer/i);

  // Step 3: Verify disclaimer text displayed
  const heading = page.getByRole('heading', { name: /FDA Disclaimer/i }).first();
  await expect(heading).toBeVisible();

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/14.2_fda_disclaimer.png', fullPage: false });
});

// ==================================================
// Module: Static Pages
// Flow ID: 14.3
// Test Case Title: Open the Privacy Policy Page
// ==================================================
test('14.3 Open the Privacy Policy Page', async ({ page }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Footer → Quick Links → click 'Privacy Policy'
  const privacyLink = page.locator('footer').getByRole('link', { name: /Privacy Policy/i }).first();
  await privacyLink.scrollIntoViewIfNeeded();
  await privacyLink.click();

  await page.waitForLoadState('domcontentloaded');

  // Step 2: Verify URL: /privacy-policy
  await expect(page).toHaveURL(/.*\/privacy-policy/i);

  // Step 3: Verify privacy policy text displayed
  const heading = page.getByRole('heading', { name: /Privacy Policy/i }).first();
  await expect(heading).toBeVisible();

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/14.3_privacy_policy.png', fullPage: false });
});

// ==================================================
// Module: Static Pages
// Flow ID: 14.4
// Test Case Title: Open the Refund Policy Page
// ==================================================
test('14.4 Open the Refund Policy Page', async ({ page }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Footer → Quick Links → click 'Refund Policy'
  const refundLink = page.locator('footer').getByRole('link', { name: /Refund Policy/i }).first();
  await refundLink.scrollIntoViewIfNeeded();
  await refundLink.click();

  await page.waitForLoadState('domcontentloaded');

  // Step 2: Verify URL: /refund-policy
  await expect(page).toHaveURL(/.*\/refund-policy/i);

  // Step 3: Verify refund policy text displayed
  const heading = page.getByRole('heading', { name: /Refund Policy/i }).first();
  await expect(heading).toBeVisible();

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/14.4_refund_policy.png', fullPage: false });
});

// ==================================================
// Module: Static Pages
// Flow ID: 14.5
// Test Case Title: Open the Shipping Policy Page
// ==================================================
test('14.5 Open the Shipping Policy Page', async ({ page }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Footer → Quick Links → click 'Shipping Policy'
  const shippingLink = page.locator('footer').getByRole('link', { name: /Shipping Policy/i }).first();
  await shippingLink.scrollIntoViewIfNeeded();
  await shippingLink.click();

  await page.waitForLoadState('domcontentloaded');

  // Step 2: Verify URL: /shipping-policy
  await expect(page).toHaveURL(/.*\/shipping-policy/i);

  // Step 3: Verify shipping policy text displayed
  const heading = page.getByRole('heading', { name: /Shipping Policy/i }).first();
  await expect(heading).toBeVisible();

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/14.5_shipping_policy.png', fullPage: false });
});

// ==================================================
// Module: Static Pages
// Flow ID: 14.6
// Test Case Title: Open the Terms of Service Page
// ==================================================
test('14.6 Open the Terms of Service Page', async ({ page }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Footer → Quick Links → click 'Terms of Service'
  const termsLink = page.locator('footer').getByRole('link', { name: /Terms of Service/i }).first();
  await termsLink.scrollIntoViewIfNeeded();
  await termsLink.click();

  await page.waitForLoadState('domcontentloaded');

  // Step 2: Verify URL: /terms-service
  await expect(page).toHaveURL(/.*\/terms-service/i);

  // Step 3: Verify Terms text displayed
  const heading = page.getByRole('heading', { name: /Terms of Service/i }).first();
  await expect(heading).toBeVisible();

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/14.6_terms_of_service.png', fullPage: false });
});

// ==================================================
// Module: Static Pages
// Flow ID: 14.7
// Test Case Title: Open the Wholesale Page (External)
// ==================================================
test('14.7 Open the Wholesale Page (External)', async ({ page }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Footer → Quick Links → click 'Wholesale'
  const wholesaleLink = page.locator('footer').getByRole('link', { name: /Wholesale/i }).first();
  await wholesaleLink.scrollIntoViewIfNeeded();

  // Step 2: Click the link (it navigates in the same tab)
  await wholesaleLink.click();
  await page.waitForLoadState('domcontentloaded');

  // Step 3: Verify URL: https://smokevana.com/register
  await expect(page).toHaveURL(/.*smokevana\.com\/register/i);

  // Wait for either the Smokevana age gate OR the registration form to appear
  const smokevanaAgeBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await smokevanaAgeBtn.waitFor({ state: 'visible', timeout: 5000 }).then(() => true).catch(() => false)) {
    await smokevanaAgeBtn.click({ force: true });
  }

  // Step 4: Verify Smokevana registration page shown
  const formVisible = page.locator('form').first();
  await expect(formVisible).toBeVisible({ timeout: 10000 });

  // Capture screenshot of the new page
  await page.screenshot({ path: 'screenshots/14.7_wholesale.png', fullPage: false });
});
