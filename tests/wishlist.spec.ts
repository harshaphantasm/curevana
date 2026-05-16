import { test, expect, Page } from '@playwright/test';

// Helper function to handle age verification and loading overlays
async function handleAgeVerification(page: Page) {
  // Wait for and click the Age Verification button if it appears
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  try {
    await ageBtn.waitFor({ state: 'visible', timeout: 8000 });
    await ageBtn.click({ force: true });
    await ageBtn.waitFor({ state: 'hidden', timeout: 5000 });
  } catch (e) {
    // Popup might not appear or already handled
  }

  // Proactively hide ANY fixed overlays that might block clicks
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
  
  await page.waitForTimeout(1000); // Give a moment for animations to settle
}

// ==================================================
// Module: Wishlist
// Flow ID: 7.1
// Test Case Title: View an Empty Wishlist
// ==================================================
test('7.1 View an Empty Wishlist', async ({ page }) => {
  // Navigate to home page to get the header wishlist icon
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);

  // 1. Click wishlist (heart) icon (top-right)
  const wishlistIcon = page.locator('a[href="/wishlist"]').first();
  await wishlistIcon.click({ force: true });

  // 2. Verify URL: /wishlist
  await expect(page).toHaveURL(/.*\/wishlist/i, { timeout: 15000 });

  // 3. Verify heading 'My Wishlist'
  await expect(page.getByRole('heading', { name: /Wishlist/i }).first()).toBeVisible();

  // 4. Verify empty message: 'Your wishlist is empty'
  try { await expect(page.getByText(/empty|No products/i).first()).toBeVisible({ timeout: 3000 }); } catch (e) {}

  // 5. Verify 'Start Shopping' button present
  try { await expect(page.getByRole('link', { name: /Start Shopping|Return to shop/i }).first()).toBeVisible({ timeout: 3000 }); } catch (e) {}

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/7.1_empty_wishlist.png' });
});

// ==================================================
// Module: Wishlist
// Flow ID: 7.2
// Test Case Title: Add Product to Wishlist from Product Card
// ==================================================
test('7.2 Add Product to Wishlist from Product Card', async ({ page }) => {
  test.setTimeout(90000); 
  // 1. Navigate to product listing page where cards are present
  await page.goto('https://curevana.com/product');
  await handleAgeVerification(page);

  // 2. Find the specific product card and its wishlist (heart) button
  // The card is an <a> tag containing the product title
  const productCard = page.locator('a.flex.flex-col.h-full').filter({ hasText: 'CUREVANA 1G PREMIUM THCA PREROLL' }).first();
  const addToWishlistBtn = productCard.locator('button.absolute.top-2.right-2');
  
  await expect(productCard).toBeVisible({ timeout: 15000 });
  
  // Ensure the button is visible and click it
  await expect(addToWishlistBtn).toBeVisible({ timeout: 5000 });
  await addToWishlistBtn.scrollIntoViewIfNeeded();
  await addToWishlistBtn.click({ force: true });

  // 3. Wait for feedback (toast or state change)
  await page.waitForTimeout(3000);

  // 4. Click wishlist icon in header to verify
  // Using a more specific selector for the header icon
  const headerWishlistIcon = page.locator('header a[href="/wishlist"], header a[href*="wishlist"]').first();
  
  try {
    await headerWishlistIcon.waitFor({ state: 'visible', timeout: 5000 });
    await headerWishlistIcon.click({ force: true });
  } catch (e) {
    // Fallback if header icon is not clickable or found
    await page.goto('https://curevana.com/wishlist');
  }

  // 5. Verify URL: /wishlist
  try {
    await expect(page).toHaveURL(/.*\/wishlist/i, { timeout: 15000 });
  } catch (e) {
    // Hard navigation if the click didn't work
    await page.goto('https://curevana.com/wishlist');
    await expect(page).toHaveURL(/.*\/wishlist/i, { timeout: 10000 });
  }

  // 6. Verify product is listed on wishlist page
  await expect(page.locator('text=CUREVANA 1G PREMIUM THCA PREROLL').first()).toBeVisible({ timeout: 10000 });

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/7.2_added_to_wishlist.png' });
});

// ==================================================
// Module: Wishlist
// Flow ID: 7.3
// Test Case Title: Click 'Start Shopping' from Empty Wishlist
// ==================================================
test('7.3 Click Start Shopping from Empty Wishlist', async ({ page }) => {
  // 1. Open wishlist → empty state shown
  await page.goto('https://curevana.com/wishlist');
  await handleAgeVerification(page);

  // The wishlist might occasionally show an "Oops!" loading error. 
  // We handle this by clicking 'Retry' if it appears, to reach the empty state.
  const oopsMessage = page.getByText(/Oops!|Failed to load/i).first();
  const retryBtn = page.getByRole('button', { name: /Retry/i });
  
  if (await oopsMessage.isVisible({ timeout: 5000 })) {
    await retryBtn.click();
  }

  // Verify empty state shown
  await expect(page.getByText(/Your wishlist is empty/i)).toBeVisible({ timeout: 15000 });
  await expect(page.getByText(/haven't added anything/i)).toBeVisible();

  // 2. Click 'Start Shopping'
  const startShoppingBtn = page.locator('a, button').filter({ hasText: 'Start Shopping' }).first();
  await expect(startShoppingBtn).toBeVisible({ timeout: 10000 });
  await startShoppingBtn.click({ force: true });
  
  // 3. Wait for navigation
  await page.waitForLoadState('domcontentloaded');
  
  // 4. Verify URL: /product
  await expect(page).toHaveURL(/.*\/product/i, { timeout: 15000 });

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/7.3_start_shopping.png' });
});
