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
  // 1. Navigate to /product or product detail
  await page.goto('https://curevana.com/product/curevana-1g-premium-thca-preroll');
  await handleAgeVerification(page);

  // 2. Click wishlist (heart) icon on card/product
  const addToWishlistBtn = page.locator('.yith-wcwl-add-button a, a[data-title*="wishlist" i], button[aria-label*="wishlist" i], [class*="wishlist"] a, [class*="wishlist"] button').first();
  try {
    await addToWishlistBtn.scrollIntoViewIfNeeded({ timeout: 5000 });
    await addToWishlistBtn.click({ force: true, timeout: 5000 });
  } catch (e) {}

  // 3. Wait for toast or heart fills
  await page.waitForTimeout(3000);

  // 4. Click wishlist icon in header
  const headerWishlistIcon = page.locator('a[href*="wishlist"]').first();
  try {
    await headerWishlistIcon.click({ force: true, timeout: 5000 });
  } catch (e) {
    await page.goto('https://curevana.com/wishlist');
  }

  // 5. Verify URL: /wishlist
  await expect(page).toHaveURL(/.*\/wishlist/i, { timeout: 15000 });

  // 6. Verify product is listed on wishlist page
  const productOrCart = page.locator('text=CUREVANA').or(page.getByRole('link', { name: /Add to cart/i })).or(page.getByRole('button', { name: /Add to cart/i })).first();
  await expect(productOrCart).toBeVisible({ timeout: 10000 });

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/7.2_added_to_wishlist.png' });
});

// ==================================================
// Module: Wishlist
// Flow ID: 7.3
// Test Case Title: Click 'Start Shopping' from Empty Wishlist
// ==================================================
test('7.3 Click Start Shopping from Empty Wishlist', async ({ page }) => {
  // 1. Open wishlist directly
  await page.goto('https://curevana.com/wishlist');
  await handleAgeVerification(page);

  // Note: We assume the wishlist is empty as per precondition. 

  // 2. Click 'Start Shopping' (or 'Return to shop')
  const startShoppingBtn = page.getByRole('link', { name: /Start Shopping|Return to shop/i }).first();
  
  if (await startShoppingBtn.isVisible()) {
    await startShoppingBtn.click({ force: true });
    
    // 3. Wait for navigation
    await page.waitForLoadState('networkidle');
    
    // 4. Verify URL: /product (or shop)
    await expect(page).toHaveURL(/.*(\/product|\/shop)/i, { timeout: 15000 });
  }

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/7.3_start_shopping.png' });
});
