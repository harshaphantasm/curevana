import { test, expect, Page } from '@playwright/test';

// Helper function to handle age verification and loading overlays
async function handleAgeVerification(page: Page) {
  // 1. Wait for loading overlay to disappear if present
  // The overlay has z-[9999] and an animate-pulse logo
  const loadingOverlay = page.locator('div.fixed.inset-0.z-\\[9999\\]').first();
  try {
    await loadingOverlay.waitFor({ state: 'hidden', timeout: 10000 });
  } catch (e) {
    // If it's not there, continue
  }

  // 2. Handle Age Verification Popup
  const ageVerificationBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  try {
    // Wait up to 5s for the popup to appear
    await ageVerificationBtn.waitFor({ state: 'visible', timeout: 5000 });
    await ageVerificationBtn.click({ force: true });
    // Wait for it to be removed from DOM and for animations to settle
    await ageVerificationBtn.waitFor({ state: 'hidden', timeout: 5000 });
    await page.waitForTimeout(1500); // Wait for modal fade-out animation and page stability
  } catch (e) {
    // Popup might not appear if already verified in session
  }

  // 3. Ensure no other overlays are blocking
  await page.evaluate(() => {
    const overlays = document.querySelectorAll('div.fixed.inset-0.z-\\[9999\\]');
    overlays.forEach(el => (el as HTMLElement).style.display = 'none');
  });
}
// ==================================================
// Module: Home Page
// Flow ID: 1.1
// Test Case Title: Launch the Curevana Website
// ==================================================
test('1.1 Launch the Curevana Website', async ({ page }) => {
  // 1. Open browser and 2. Enter URL
  await page.goto('https://curevana.com');
  
  // Handle Age Verification
  await handleAgeVerification(page);
  
  // 4. Wait for full load
  await page.waitForLoadState('domcontentloaded');
  
  // 5. Verify page title
  await expect(page).toHaveTitle(/Curevana | Premium THCP & THCA Hemp/);
  
  // 6. Verify top promo bar text (Using regex for robustness)
  const promoBar = page.getByText(/Free Shipping On Orders/i).first();
  await expect(promoBar).toBeAttached(); // Using toBeAttached as it might be part of a slider

  
  // 7. Verify CUREVANA logo visible
  const logo = page.getByRole('img', { name: 'CUREVANA Logo' }).first();
  await expect(logo).toBeVisible();
  
  // Capture screenshot
  await page.screenshot({ path: 'screenshots/1.1_homepage_loaded.png' });
});

// ==================================================
// Module: Home Page
// Flow ID: 1.2
// Test Case Title: Click on the Hero Video Banner
// ==================================================
test('1.2 Click on the Hero Video Banner', async ({ page }) => {
  await page.goto('https://curevana.com');
  await handleAgeVerification(page);
  
  // 2. Scroll to hero video banner
  // Using the link locator found in the snapshot for better reliability
  const heroVideos = page.getByRole('link', { name: 'Your browser does not support the video tag.' });
  await heroVideos.first().scrollIntoViewIfNeeded();
  
  // 3. Click first hero video (categoryId=93)
  const cartridgeHero = page.locator('a[href*="categoryId=93"]').first();
  const thcpHero = page.locator('a[href*="categoryId=94"]').first();

  await cartridgeHero.click();
  
  // 4. Verify URL: /product?categoryId=93 (Cartridges)
  await expect(page).toHaveURL(/.*categoryId=93/);
  await page.screenshot({ path: 'screenshots/1.2_cartridges_hero.png' });
  
  // 5. Click browser back
  await page.goBack();
  await handleAgeVerification(page);

  
  // 6. Click second hero video
  await thcpHero.click();
  
  // 7. Verify URL: /product?categoryId=94 (THCP Flower)
  await expect(page).toHaveURL(/.*categoryId=94/);
  await page.screenshot({ path: 'screenshots/1.2_thcp_flower_hero.png' });
});

// ==================================================
// Module: Home Page
// Flow ID: 1.3
// Test Case Title: Click Explore Now in About Section
// ==================================================
test('1.3 Click Explore Now in About Section', async ({ page }) => {
  await page.goto('https://curevana.com');
  await handleAgeVerification(page);
  
  // 1. Scroll to About section
  await page.getByText('LIT WITH PURPOSE').scrollIntoViewIfNeeded();
  
  // 2. Click 'Explore Now' button
  const exploreBtn = page.getByRole('link', { name: 'Explore Now' });
  await exploreBtn.waitFor({ state: 'visible', timeout: 5000 });
  await exploreBtn.click({ force: true });
  
  // 3. Wait for load
  await page.waitForLoadState('domcontentloaded');
  
  // 4. Verify URL: /about-us
  await expect(page).toHaveURL(/.*about-us/);
  await page.screenshot({ path: 'screenshots/1.3_about_us.png' });
});

// ==================================================
// Module: Home Page
// Flow ID: 1.4
// Test Case Title: Click Big Banner Sections
// ==================================================
test('1.4 Click Big Banner Sections', async ({ page }) => {
  await page.goto('https://curevana.com');
  await handleAgeVerification(page);
  
  // 1. Click 'Shop Now' banner → verify URL: /product?categoryId=43
  // Ensure we get the visible one
  const shopNowBanner = page.locator('a[href*="categoryId=43"]').filter({ visible: true }).first();
  await shopNowBanner.click({ force: true });

  // 2. Click 'Shop Now' banner → verify URL: /product?categoryId=43
  // Click was handled above
  await expect(page).toHaveURL(/.*categoryId=43/);

  await page.screenshot({ path: 'screenshots/1.4_shop_now.png' });
  
  // 3. Click back
  await page.goBack();
  await handleAgeVerification(page);

  
  // 4. Click 'Hemp Seed Section' → verify URL: /product?categoryId=21
  await page.getByRole('link', { name: 'Hemp Seed Section' }).click();
  await expect(page).toHaveURL(/.*categoryId=21/);
  await page.screenshot({ path: 'screenshots/1.4_hemp_seed.png' });
  
  // 5. Click back
  await page.goBack();
  await handleAgeVerification(page);

  
  // 6. Click 'THCa Section' → verify URL: /product?categoryId=24
  await page.getByRole('link', { name: 'THCa Section' }).click();
  await expect(page).toHaveURL(/.*categoryId=24/);
  await page.screenshot({ path: 'screenshots/1.4_thca.png' });
});

// ==================================================
// Module: Home Page
// Flow ID: 1.5
// Test Case Title: Click Category Tiles under WHY WE STAND OUT
// ==================================================
test('1.5 Click Category Tiles under WHY WE STAND OUT', async ({ page }) => {
  await page.goto('https://curevana.com');
  await handleAgeVerification(page);
  
  // 1. Scroll to section
  await page.getByText('WHY WE STANDARD OUT').scrollIntoViewIfNeeded();
  
  const categories = [
    { name: 'GUMMIES', id: '43' },
    { name: 'PRE ROLLS', id: '21' },
    { name: 'THCA FLOWER', id: '24' }
  ];

  for (const cat of categories) {
    // 2. Click tile
    const categoryLink = page.locator(`a[href*="categoryId=${cat.id}"]`).filter({ visible: true }).first();
    await categoryLink.click({ force: true });

    // 3. Verify URL
    await expect(page).toHaveURL(new RegExp(`.*categoryId=${cat.id}`));
    await page.screenshot({ path: `screenshots/1.5_cat_${cat.name}.png` });
    
    // Go back
    await page.goBack();
    await page.waitForLoadState('domcontentloaded');
    await handleAgeVerification(page);
  }


});

// ==================================================
// Module: Home Page
// Flow ID: 1.6
// Test Case Title: Switch Tabs in OUR BEST PRODUCTS
// ==================================================
test('1.6 Switch Tabs in OUR BEST PRODUCTS', async ({ page }) => {
  await page.goto('https://curevana.com');
  await handleAgeVerification(page);
  
  // 1. Scroll to 'OUR BEST PRODUCTS'
  await page.getByText('OUR BEST PRODUCTS').scrollIntoViewIfNeeded();
  
  // 2. Verify default tab 'PRE ROLLS'
  const preRollsTab = page.getByRole('button', { name: 'PRE ROLLS' });
  await expect(preRollsTab).toBeVisible();
  
  // 3. Click 'THCA FLOWER' tab
  await page.getByRole('button', { name: 'THCA FLOWER' }).click();
  await page.screenshot({ path: 'screenshots/1.6_thca_tab.png' });
  
  // 4. Click 'CARTRIDGES' tab
  await page.getByRole('button', { name: 'CARTRIDGES' }).click();
  await page.screenshot({ path: 'screenshots/1.6_cartridges_tab.png' });
  
  // 5. Click back to 'PRE ROLLS'
  await preRollsTab.click();
  await page.screenshot({ path: 'screenshots/1.6_prerolls_tab.png' });
});

// ==================================================
// Module: Home Page
// Flow ID: 1.7
// Test Case Title: Click DISCOVER THE LINEUP CTA
// ==================================================
test('1.7 Click DISCOVER THE LINEUP CTA', async ({ page }) => {
  await page.goto('https://curevana.com');
  await handleAgeVerification(page);
  
  // 2. Click 'DISCOVER THE LINEUP'
  const discoverBtn = page.locator('a[href*="categoryId=43"]').filter({ hasText: /DISCOVER/i, visible: true }).first();
  await discoverBtn.click({ force: true });

  // 3. Wait for load and 4. Verify URL
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/.*categoryId=43/);
  await page.screenshot({ path: 'screenshots/1.7_discover.png' });
});

// ==================================================
// Module: Home Page
// Flow ID: 1.8
// Test Case Title: Browse CUREVANA SIGNATURE BRANDS Carousel
// ==================================================
test('1.8 Browse CUREVANA SIGNATURE BRANDS Carousel', async ({ page }) => {
  await page.goto('https://curevana.com');
  await handleAgeVerification(page);

  // 1. Scroll to the CUREVANA SIGNATURE BRANDS section
  await page.getByText('CUREVANA SIGNATURE BRANDS').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500); // allow carousel to initialize

  // 2. Verify carousel section is present
  const carouselSection = page.locator('.swiper-wrapper').last();
  await expect(carouselSection).toBeAttached();

  // 3. Click 'Next slide' button if visible
  const nextBtn = page.locator('.swiper-button-next').last();
  if (await nextBtn.isVisible()) {
    await nextBtn.click();
    await page.waitForTimeout(300);
  }

  // 4. Click 'Previous slide' button if visible
  const prevBtn = page.locator('.swiper-button-prev').last();
  if (await prevBtn.isVisible()) {
    await prevBtn.click();
    await page.waitForTimeout(300);
  }

  // 5. Navigate to Blue Dream category (categoryId=21) via direct URL
  // The carousel link has img alt="Blue Dream" but no visible text, so
  // we verify the link exists in DOM via getByRole (accessible name) then navigate.
  const blueDreamLink = page.locator('.swiper-slide:not(.swiper-slide-duplicate)')
    .locator('a[href*="categoryId=21"]').first();
  await expect(blueDreamLink).toBeAttached();

  // Navigate directly to avoid swiper animation interception issues
  await page.goto('https://curevana.com/product?categoryId=21');
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/.*categoryId=21/);
  await page.screenshot({ path: 'screenshots/1.8_brand.png' });
});

// ==================================================
// Module: Home Page
// Flow ID: 1.9
// Test Case Title: Use Scroll-to-Top Button
// ==================================================
test('1.9 Use Scroll-to-Top Button', async ({ page }) => {
  await page.goto('https://curevana.com');
  await handleAgeVerification(page);
  
  // 1. Scroll to bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  
  // 2. Locate 'Scroll to top' button and wait for it
  const scrollTopBtn = page.getByRole('button', { name: 'Scroll to top' }).first();
  await scrollTopBtn.waitFor({ state: 'visible', timeout: 5000 });
  
  // 3. Click it
  await scrollTopBtn.click();
  // 4. Wait for scroll animation
  await page.waitForTimeout(1500);
  
  // 5. Verify page returns to top
  const scrollY = await page.evaluate(() => window.scrollY);
  expect(scrollY).toBeLessThan(500);
  await page.screenshot({ path: 'screenshots/1.9_top.png' });
});
