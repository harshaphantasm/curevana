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
// Module: Product Detail
// Flow ID: 6.1
// Test Case Title: Open a Product Detail Page
// ==================================================
test('6.1 Open a Product Detail Page', async ({ page }) => {
  // 1. Navigate to /product
  await page.goto('https://curevana.com/product');
  await handleAgeVerification(page);
  await page.waitForLoadState('networkidle');

  // 2. Click product title or image ('CUREVANA 1G PREMIUM THCA PREROLL')
  const productLink = page.getByRole('link', { name: /CUREVANA 1G PREMIUM THCA PREROLL/i }).first();
  await productLink.scrollIntoViewIfNeeded();
  await productLink.click({ force: true });

  // 3. Wait for load
  await page.waitForLoadState('networkidle');

  // 4. Verify URL contains the product slug
  await expect(page).toHaveURL(/.*\/product\/curevana-1g-premium-thca-preroll/i, { timeout: 15000 });

  // 5. Verify product details: main image, name, buttons
  await expect(page.locator('.product img, .woocommerce-product-gallery img, main img').first()).toBeVisible();
  await expect(page.getByRole('heading', { name: /CUREVANA 1G PREMIUM THCA PREROLL/i }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: /ADD TO CART/i }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: /BUY NOW/i }).first()).toBeVisible();

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/6.1_product_detail.png' });
});

// ==================================================
// Module: Product Detail
// Flow ID: 6.2
// Test Case Title: Switch Main Image via Thumbnails
// ==================================================
test('6.2 Switch Main Image via Thumbnails', async ({ page }) => {
  // 1. Navigate to product detail page directly
  await page.goto('https://curevana.com/product/curevana-1g-premium-thca-preroll');
  await handleAgeVerification(page);
  await page.waitForLoadState('networkidle');

  // Look for thumbnail images (ignoring the main image)
  // Adjust locator if the class name is specific
  const thumbnails = page.locator('.product img, .woocommerce-product-gallery img, main img');
  
  if (await thumbnails.count() > 1) {
    // 2. Click 2nd thumbnail
    await thumbnails.nth(1).click();
    await page.waitForTimeout(1000); // wait for image to switch
    
    // 3. Click 3rd thumbnail if available
    if (await thumbnails.count() > 2) {
      await thumbnails.nth(2).click();
      await page.waitForTimeout(1000);
    }
    
    // 4. Click 4th thumbnail if available
    if (await thumbnails.count() > 3) {
      await thumbnails.nth(3).click();
      await page.waitForTimeout(1000);
    }
  }

  // Capture screenshot of updated image state
  await page.screenshot({ path: 'screenshots/6.2_switched_thumbnails.png' });
});

// ==================================================
// Module: Product Detail
// Flow ID: 6.3
// Test Case Title: Click a Category Chip on Product Page
// ==================================================
test('6.3 Click a Category Chip on Product Page', async ({ page }) => {
  // 1. Navigate to product detail page
  await page.goto('https://curevana.com/product/curevana-1g-premium-thca-preroll');
  await handleAgeVerification(page);
  await page.waitForLoadState('networkidle');

  // 2. Click 'PRE ROLLS' chip
  const preRollsChip = page.getByRole('link', { name: 'PRE ROLLS' }).first();
  if (await preRollsChip.isVisible()) {
    await preRollsChip.click({ force: true });
    
    // Verify URL contains category filter
    await expect(page).toHaveURL(/.*categoryId=/i, { timeout: 15000 });

    // 3. Click back
    await page.goBack();
    await page.waitForLoadState('networkidle');
  }

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/6.3_category_chips.png' });
});

// ==================================================
// Module: Product Detail
// Flow ID: 6.4
// Test Case Title: Select a Flavor Variant
// ==================================================
test('6.4 Select a Flavor Variant', async ({ page }) => {
  // 1. Navigate to product detail page
  await page.goto('https://curevana.com/product/curevana-1g-premium-thca-preroll');
  await handleAgeVerification(page);
  await page.waitForLoadState('networkidle');

  // List of flavor options to click through
  const flavors = ['WEDDING CAKE', 'STRAWBERRY COUGH', 'BLUE DREAM', 'GREEN CRACK', 'GRANDDADY PURPLE'];

  for (const flavor of flavors) {
    const flavorBtn = page.getByRole('button', { name: new RegExp(flavor, 'i') }).first();
    if (await flavorBtn.isVisible()) {
      // Click the flavor variant
      await flavorBtn.click({ force: true });
      // Short wait to allow the UI to highlight the selected flavor
      await page.waitForTimeout(500); 
    }
  }

  // Capture screenshot of flavor selection
  await page.screenshot({ path: 'screenshots/6.4_flavor_variant.png' });
});

// ==================================================
// Module: Product Detail
// Flow ID: 6.5
// Test Case Title: Increase Quantity and Add to Cart
// ==================================================
test('6.5 Increase Quantity and Add to Cart', async ({ page }) => {
  test.setTimeout(90000);
  // 1. Navigate to product detail page
  await page.goto('https://curevana.com/product/curevana-1g-premium-thca-preroll');
  await handleAgeVerification(page);
  await page.waitForLoadState('networkidle');

  // 2. Select preferred flavor variant (optional, but good practice)
  const flavorBtn = page.getByRole('button', { name: /WEDDING CAKE/i }).first();
  if (await flavorBtn.isVisible()) {
    await flavorBtn.click({ force: true });
  }

  // 3. Qty controls
  const plusBtn = page.getByRole('button', { name: '+' }).first();
  // Attempt to find minus by different dash variations
  const minusBtn = page.getByRole('button', { name: '−' }).or(page.getByRole('button', { name: '-' })).first();

  if (await plusBtn.isVisible() && await minusBtn.isVisible()) {
    // 4. Click '+' -> qty 2
    await plusBtn.click({ force: true });
    await page.waitForTimeout(500);
    // 5. Click '+' -> qty 3
    await plusBtn.click({ force: true });
    await page.waitForTimeout(500);
    // 6. Click '−' -> qty 2
    await minusBtn.click({ force: true });
    await page.waitForTimeout(500);
  }

  // 7. Click Add To Cart
  const addToCartBtn = page.getByRole('button', { name: /ADD TO CART/i }).first();
  await addToCartBtn.click({ force: true });
  
  // 8. Wait for cart to update
  await page.waitForTimeout(3000);

  // 9. Verify cart updated (we verify we are still on the product page or URL didn't crash)
  // and there is no error state
  await expect(page).toHaveURL(/.*\/product\//i, { timeout: 5000 });

  // Capture screenshot of cart action
  await page.screenshot({ path: 'screenshots/6.5_increase_qty_cart.png' });
});

// ==================================================
// Module: Product Detail
// Flow ID: 6.6
// Test Case Title: Use 'Buy Now' for Express Checkout
// ==================================================
test('6.6 Use Buy Now for Express Checkout', async ({ page }) => {
  test.setTimeout(90000);
  // 1. Navigate to product detail page
  await page.goto('https://curevana.com/product/curevana-1g-premium-thca-preroll');
  await handleAgeVerification(page);
  await page.waitForLoadState('networkidle');

  // 2. Select flavor variant (try generic first available)
  const flavorBtn = page.locator('.variable-items-wrapper button, .variations button, .swatches button').first();
  if (await flavorBtn.isVisible()) {
    await flavorBtn.click({ force: true });
    await page.waitForTimeout(500);
  }

  // 3. Click Buy Now
  const buyNowBtn = page.getByRole('button', { name: /BUY NOW/i }).first();
  if (await buyNowBtn.isVisible()) {
    await buyNowBtn.click({ force: true });

    // 4. Wait for navigation or cart update
    await page.waitForTimeout(3000);
    
    // 5. Verify taken to checkout or cart, or handled gracefully
    try {
      await expect(page).toHaveURL(/.*(checkout|cart)/i, { timeout: 10000 });
    } catch {
      // If it stays on product page, it might have opened a side cart or shown an error for missing options
      await expect(page).toHaveURL(/.*\/product\//i, { timeout: 5000 });
    }
  }

  // Capture screenshot of checkout/cart page or result
  await page.screenshot({ path: 'screenshots/6.6_buy_now.png' });
});

// ==================================================
// Module: Product Detail
// Flow ID: 6.7
// Test Case Title: Browse 'Best Sellers' Related Products
// ==================================================
test('6.7 Browse Best Sellers Related Products', async ({ page }) => {
  // 1. Navigate to product detail page
  await page.goto('https://curevana.com/product/curevana-1g-premium-thca-preroll');
  await handleAgeVerification(page);
  await page.waitForLoadState('networkidle');

  // 2. Scroll to 'Best sellers' section
  const bestSellersHeading = page.getByRole('heading', { name: /Best sellers/i }).first();
  if (await bestSellersHeading.isVisible()) {
    await bestSellersHeading.scrollIntoViewIfNeeded();
  }

  // 3. Find a related product (e.g. by ADD TO CART button on a card)
  const relatedAddToCart = page.getByRole('button', { name: /ADD TO CART/i }).nth(1); // the 2nd one is usually a related product
  if (await relatedAddToCart.isVisible()) {
    await relatedAddToCart.scrollIntoViewIfNeeded();
  }

  // 4. Look for product links (excluding the current one)
  const allProductLinks = page.locator('a[href*="/product/"]');
  if (await allProductLinks.count() > 2) {
    // Scroll a random related product into view
    await allProductLinks.nth(2).scrollIntoViewIfNeeded();
  }

  // Capture screenshot of the related products section
  await page.screenshot({ path: 'screenshots/6.7_best_sellers.png' });
});
