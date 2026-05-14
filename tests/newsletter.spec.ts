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
// Module: Newsletter
// Flow ID: 4.1
// Test Case Title: Subscribe to the Newsletter
// ==================================================
test('4.1 Subscribe to the Newsletter', async ({ page }) => {
  // 1. Open home page
  await page.goto('https://curevana.com/');
  await handleAgeVerification(page);
  await page.screenshot({ path: 'screenshots/4.1_homepage.png' });

  // 2. Scroll to 'Subscribe to Our Newsletter'
  const newsletterHeading = page.getByText('Subscribe to Our Newsletter');
  await newsletterHeading.scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'screenshots/4.1_newsletter_section.png' });

  // 3. Click 'Enter your email address' box and 4. Type email
  const emailInput = page.getByPlaceholder('Enter your email address');
  await emailInput.click();
  await emailInput.fill('testuser@example.com');
  await page.screenshot({ path: 'screenshots/4.1_email_typed.png' });

  // 5. Click 'Subscribe'
  const subscribeBtn = page.getByRole('button', { name: 'Subscribe' });
  await subscribeBtn.click();

  // 6. Wait 2s (as per requirement, using waitForTimeout for this specific step)
  await page.waitForTimeout(2000);

  // 7. Verify confirmation / thank-you message
  // Note: Since we don't want to actually spam the production DB, 
  // we check for a success message like "Thank you" or a change in state.
  // Common toast messages or text updates.
  const successMessage = page.locator('text=/thank you/i').or(page.locator('div[role="alert"]'));
  // We check if it's attached or visible.
  await expect(successMessage.first()).toBeVisible({ timeout: 10000 });
  
  await page.screenshot({ path: 'screenshots/4.1_subscription_done.png' });
});
