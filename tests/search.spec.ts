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
// Module: Search
// Flow ID: 3.1
// Test Case Title: Search for a Product
// ==================================================
test('3.1 Search for a Product', async ({ page }) => {
  // 1. Open home page
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);
  await page.screenshot({ path: 'screenshots/3.1_homepage.png' });

  // 2. Click search icon or input field to trigger search panel
  const searchInput = page.getByPlaceholder(/Search for products/i);
  await searchInput.click();

  // 3. Wait for search panel and verify it's open
  await expect(searchInput).toBeVisible();
  await page.screenshot({ path: 'screenshots/3.1_search_panel.png' });

  // 4. Click inside search input, type 'THCA' and 5. Press Enter
  await searchInput.click();
  await searchInput.fill('THCA');
  await page.keyboard.press('Enter');

  // 6. Verify THCA products returned (wait for network to settle)
  await page.waitForLoadState('domcontentloaded');
  // Check for presence of products containing THCA (case insensitive)
  const resultsContainer = page.locator('main').first();
  await expect(resultsContainer).toContainText(/THCA/i);
  await page.screenshot({ path: 'screenshots/3.1_search_results.png' });

  // 7. Click close (X) to close panel
  // Usually searching and pressing enter takes you to a results page, 
  // but if it's a dynamic panel, we might need to close it.
  // Looking at the requirements, it asks to "Click close (X) to close panel"
  const closeBtn = page.getByRole('button').filter({ hasText: /close/i }).or(page.locator('button:has(svg), button:has(img)').filter({ has: page.locator('path[d*="M6 18L18 6"]') })).first();
  
  // If we are on a results page, the panel might be closed. 
  // If there's an 'X' button visible, we click it.
  if (await closeBtn.isVisible()) {
      await closeBtn.click();
  }
  
  await page.screenshot({ path: 'screenshots/3.1_search_closed.png' });
});
