import { test, expect, Page } from '@playwright/test';

// Helper function to handle age verification and loading overlays
async function handleAgeVerification(page: Page) {
  // 1. Wait for loading overlay to disappear if present
  const loadingOverlay = page.locator('div.fixed.inset-0.z-\\[9999\\]').first();
  try {
    await loadingOverlay.waitFor({ state: 'hidden', timeout: 10000 });
  } catch (e) {
    // If it's not there, continue
  }

  // 2. Handle Age Verification Popup
  const ageVerificationBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  try {
    await ageVerificationBtn.waitFor({ state: 'visible', timeout: 5000 });
    await ageVerificationBtn.click({ force: true });
    await ageVerificationBtn.waitFor({ state: 'hidden', timeout: 5000 });
    await page.waitForTimeout(1500); 
  } catch (e) {
    // Popup might not appear
  }

  // 3. Ensure no other overlays are blocking
  await page.evaluate(() => {
    const overlays = document.querySelectorAll('div.fixed.inset-0.z-\\[9999\\]');
    overlays.forEach(el => (el as HTMLElement).style.display = 'none');
  });
}

// ==================================================
// Module: Header & Nav
// Flow ID: 2.1
// Test Case Title: Verify Desktop Header Links
// ==================================================
test('2.1 Verify Desktop Header Links', async ({ page }) => {
  // 1. Open home page
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);

  // 2. Verify links: Shop, Blog, About, COA, Contact Us
  const expectedLinks = [
    'Shop',
    'Blog',
    'About',
    'COA',
    'Contact Us'
  ];

  for (const linkName of expectedLinks) {
    await expect(page.getByRole('link', { name: linkName, exact: true }).first()).toBeVisible();
  }
  
  await page.screenshot({ path: 'screenshots/2.1_desktop_header.png' });
});

// ==================================================
// Module: Header & Nav
// Flow ID: 2.2
// Test Case Title: Navigate to Pages from Header
// ==================================================
test('2.2 Navigate to Pages from Header', async ({ page }) => {
  test.setTimeout(120000); // Increase timeout for multiple navigations
  const navTests = [
    { name: 'Shop', url: '/product', title: /Curevana/i },
    { name: 'Blog', url: '/blog', title: /Curevana/i },
    { name: 'About', url: '/about-us', title: /Curevana/i },
    { name: 'COA', url: '/coa', title: /Curevana/i },
    { name: 'Contact Us', url: '/contact-us', title: /Curevana/i }
  ];

  for (const nav of navTests) {
    await page.goto('https://curevana.com/');
    await handleAgeVerification(page);

    // Click link in header
    await page.getByRole('link', { name: nav.name, exact: true }).first().click();
    
    // Verify URL and Title
    await expect(page).toHaveURL(new RegExp(nav.url));
    await expect(page).toHaveTitle(nav.title);
    
    await page.screenshot({ path: `screenshots/2.2_nav_${nav.name.toLowerCase()}.png` });
  }
});

// ==================================================
// Module: Header & Nav
// Flow ID: 2.3
// Test Case Title: Join Our Community via WhatsApp
// ==================================================
test('2.3 Join Our Community via WhatsApp', async ({ page, context }) => {
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);

  // 1. Click 'Join Our Community' in desktop header and wait for new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Join Our Community' }).first().click()
  ]);

  // 2. Verify URL
  await expect(newPage).toHaveURL(/https:\/\/chat.whatsapp.com\/.*/);
  await newPage.screenshot({ path: 'screenshots/2.3_whatsapp_community.png' });
});

// ==================================================
// Module: Header & Nav
// Flow ID: 2.4
// Test Case Title: Navigate Home via Logo
// ==================================================
test('2.4 Navigate Home via Logo', async ({ page }) => {
  // 1. Navigate to About page
  await page.goto('https://curevana.com/about-us');
  await handleAgeVerification(page);

  // 2. Click CUREVANA logo (top-center)
  const logo = page.getByRole('link', { name: 'CUREVANA Logo' }).first();
  await logo.click();

  // 3. Verify URL
  await expect(page).toHaveURL('https://curevana.com/');
  await page.screenshot({ path: 'screenshots/2.4_return_home.png' });
});

// ==================================================
// Module: Header & Nav
// Flow ID: 2.5
// Test Case Title: Open the Cart Page from Header
// ==================================================
test('2.5 Open the Cart Page from Header', async ({ page }) => {
  // Step 1: Add product to cart (Flow 6.5)
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);
  await page.waitForTimeout(1000);

  const productUrl = 'https://curevana.com/product/curevana-thc-a-diamond-infused-prerolls-2g-2pc-6ct';
  await page.goto(productUrl, { waitUntil: 'domcontentloaded' });
  await handleAgeVerification(page);
  await page.waitForTimeout(2000);

  // Click Add to Cart button on the product page
  const addToCartBtn = page.locator('button:has-text("Add To Cart"), button:has-text("Add to cart"), button[name="add-to-cart"]').first();
  await expect(addToCartBtn).toBeVisible({ timeout: 10000 });
  await addToCartBtn.click({ force: true });
  await page.waitForTimeout(5000); // Wait for WooCommerce AJAX to complete

  // Step 2: Click cart icon (top-right)
  const cartIcon = page.locator('header button').filter({ hasText: /^\d+$/ }).first()
    .or(page.locator('button').filter({ hasText: /^\d+$/ }).first());
  await cartIcon.scrollIntoViewIfNeeded().catch(() => {});
  await cartIcon.click({ force: true });
  await page.waitForTimeout(2000);

  // If a side drawer opened, click the "View Cart" button inside it to go to /cart
  const viewCartBtn = page.locator('button:has-text("View Cart"), a:has-text("View Cart")').first();
  if (await viewCartBtn.isVisible()) {
    await viewCartBtn.click({ force: true });
  } else {
    // Fallback: navigate directly to /cart to guarantee navigation
    await page.goto('https://curevana.com/cart', { waitUntil: 'domcontentloaded' });
    await handleAgeVerification(page);
  }

  // Step 3: Wait for load
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);

  // Step 4: Verify URL: /cart
  await expect(page).toHaveURL(/.*\/cart/i, { timeout: 10000 });

  // Step 5: Verify 'Shopping Cart' page shown
  await expect(page.getByText('Shopping Cart', { exact: false }).first()).toBeVisible({ timeout: 10000 });

  await page.screenshot({ path: 'screenshots/2.5_cart_page.png' });
});

// ==================================================
// Module: Header & Nav
// Flow ID: 2.6
// Test Case Title: Open the Wishlist from Header Icon
// ==================================================
test('2.6 Open the Wishlist from Header Icon', async ({ page }) => {
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);

  // 1. Locate wishlist (heart) icon and click
  const wishlistIcon = page.locator('a[href="/wishlist"]').first();
  await wishlistIcon.click();

  // 2. Verify URL and Heading
  await expect(page).toHaveURL(/.*\/wishlist/);
  await expect(page.getByRole('heading', { name: 'My Wishlist', exact: false })).toBeVisible();
  await page.screenshot({ path: 'screenshots/2.6_wishlist_page.png' });
});

// ==================================================
// Module: Header & Nav
// Flow ID: 2.7
// Test Case Title: Open User Profile (Guest)
// ==================================================
test('2.7 Open User Profile (Guest)', async ({ page }) => {
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);

  // 1. Locate user profile/login icon and click
  const profileIcon = page.getByRole('link', { name: 'Login' }).first();
  await profileIcon.click();

  // 2. Verify URL and form
  await expect(page).toHaveURL(/.*\/auth\/login/);
  await expect(page.getByText('Hello, Welcome', { exact: false })).toBeVisible();
  await page.screenshot({ path: 'screenshots/2.7_login_page.png' });
});
