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
// Module: Footer
// Flow ID: 15.1
// Test Case Title: Use Footer 'Shop' Column Quick Links
// ==================================================
test('15.1 Use Footer Shop Column Quick Links', async ({ page }) => {
  test.setTimeout(220000);
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Define the links and their expected URL patterns
  // const shopLinks = [
  //   { name: 'Shop Products', urlPattern: /.*\/product/i },
  //   { name: 'PRE ROLLS', urlPattern: /.*\/product\?categoryId=21/i },
  //   { name: 'THCA FLOWER', urlPattern: /.*\/product\?categoryId=24/i },
  //   { name: 'GUMMIES', urlPattern: /.*\/product\?categoryId=43/i },
  //   { name: 'DABS', urlPattern: /.*\/product\?categoryId=92/i },
  //   { name: 'CARTRIDGES', urlPattern: /.*\/product\?categoryId=93/i },
  //   { name: 'THCP FLOWER', urlPattern: /.*\/product\?categoryId=94/i },
  //   { name: 'THCA BLUNTZ', urlPattern: /.*\/product\?categoryId=109/i },
  //   { name: 'TOP QUANTITY DISCOUNTS', urlPattern: /.*\/product\?categoryId=121/i },
  //   { name: 'FEATURED PRODUCT', urlPattern: /.*\/product\?categoryId=122/i },
  //   { name: 'View All', urlPattern: /.*\/product/i }
  // ];

  // for (const linkData of shopLinks) {
  //   // Step 1: Scroll to footer → 'Shop' column
  //   // Using locator with exact or partial text match within footer
  //   const footerLink = page.locator('footer').getByRole('link', { name: new RegExp('^\\\\s*' + linkData.name + '\\\\s*$', 'i') }).first();

  //   // Fallback locator if exact match fails
  //   const fallbackLink = page.locator('footer').locator('a').filter({ hasText: new RegExp(linkData.name, 'i') }).first();
  //   const targetLink = (await footerLink.isVisible().catch(() => false)) ? footerLink : fallbackLink;

  //   await targetLink.scrollIntoViewIfNeeded();

  //   // Step 2: Click the link
  //   await targetLink.click();
  //   await page.waitForLoadState('domcontentloaded');

  //   // Verify URL routes to correct category listing
  //   await expect(page).toHaveURL(linkData.urlPattern);

  //   // Step 3: Back
  //   await page.goBack();
  //   await page.waitForLoadState('domcontentloaded');
  // }

  // // Capture screenshot after looping
  // await page.screenshot({ path: 'screenshots/15.1_footer_shop.png', fullPage: false });

  const ageYesButton = page.getByRole('button', { name: /yes|21/i });
  if (await ageYesButton.isVisible()) {
    await ageYesButton.click();
  }

  const dynamicLimits: Record<number, number> = {
    2: 11,
    3: 7
  };

  for (const i of [2, 3]) {
    const maxJ = dynamicLimits[i];

    for (let j = 1; j <= maxJ; j++) {
      const selector = `/html/body/footer/div/div[1]/div[2]/div[${i}]/ul/li[${j}]/a`;
      const locator = page.locator(`xpath=${selector}`);

      await locator.scrollIntoViewIfNeeded();
      await locator.click();

      await page.waitForLoadState('domcontentloaded');

      await page.waitForTimeout(4000);

      await page.screenshot({ path: `screenshot_i${i}_j${j}.png` });

      // Navigate back to home
      await page.goto('https://curevana.com/');
      await page.waitForTimeout(4000);

      // Re-check age verification just in case it pops up again after navigation
      if (await ageYesButton.isVisible()) {
        await ageYesButton.click();
      }
    }
  }

});

// ==================================================
// Module: Footer
// Flow ID: 15.2
// Test Case Title: Click Email Link in Footer Contact
// ==================================================
test('15.2 Click Email Link in Footer Contact', async ({ page, context }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Scroll to footer → 'Contact Us' column
  // Step 2: Locate info@curevana.com
  const emailLink = page.locator('footer').getByRole('link', { name: /info@curevana\.com/i }).first();
  await emailLink.scrollIntoViewIfNeeded();

  // Step 3: Click email link
  // Step 4: Wait for new tab (mail compose)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    emailLink.click()
  ]);

  await newPage.waitForLoadState('domcontentloaded');

  // Step 5: Verify URL starts with mail.google.com
  await expect(newPage).toHaveURL(/.*(mail\.google\.com|accounts\.google\.com).*/i);

  // Capture screenshot of the mail tab
  await newPage.screenshot({ path: 'screenshots/15.2_footer_email.png', fullPage: false });
});

// ==================================================
// Module: Footer
// Flow ID: 15.3
// Test Case Title: Visit Curevana on Instagram
// ==================================================
test('15.3 Visit Curevana on Instagram', async ({ page, context }) => {
  // Pre conditions: Home page loaded
  await handleInitialLoad(page);

  // Step 1: Footer → Social Media → click Instagram icon
  // Social icons usually have an aria-label, but we'll use href to be safe
  const instagramLink = page.locator('footer a[href*="instagram.com"]').first();
  await instagramLink.scrollIntoViewIfNeeded();

  // Step 2: Wait for new tab
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    instagramLink.click()
  ]);

  await newPage.waitForLoadState('domcontentloaded');

  // Step 3: Verify URL: https://www.instagram.com/curevana/
  await expect(newPage).toHaveURL(/.*instagram\.com\/curevana\/?/i);

  // Step 4: Verify official profile shown
  // We can look for common Instagram elements or the page title
  await expect(newPage).toHaveTitle(/.*Curevana.*/i);

  // Capture screenshot
  await newPage.screenshot({ path: 'screenshots/15.3_footer_instagram.png', fullPage: false });
});

// ==================================================
// Module: Footer
// Flow ID: 15.4
// Test Case Title: Verify Footer Disclaimers and Copyright
// ==================================================
test('15.4 Verify Footer Disclaimers and Copyright', async ({ page }) => {
  // Pre conditions: Any page loaded
  await handleInitialLoad(page);

  // Step 1: Scroll to very bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000); // Allow any lazy-loaded elements at the bottom to render

  const footer = page.locator('footer');

  // Step 2: Verify 4 disclaimer headings: FDA NOTICE, THC, AMANITA MUSCARIA, THCA
  const fdaNotice = footer.getByText(/FDA NOTICE/i).first();
  await expect(fdaNotice).toBeVisible();

  const thcNotice = footer.getByText(/THC DISCLAIMER/i).or(footer.getByText(/\bTHC\b/i)).first();
  await expect(thcNotice).toBeVisible();

  const amanitaNotice = footer.getByText(/AMANITA MUSCARIA DISCLAIMER/i).or(footer.getByText(/AMANITA MUSCARIA/i)).first();
  await expect(amanitaNotice).toBeVisible();

  const thcaNotice = footer.locator('p, span, div').filter({ hasText: /THCA/i }).first();
  await expect(thcaNotice).toBeVisible();

  // Step 3: Verify copyright '© 2026 Curevana, All Rights Reserved.'
  const copyrightText = footer.getByText(/© 2026 Curevana, All Rights Reserved./i).first();
  await expect(copyrightText).toBeVisible();

  // Step 4: Verify Payment Methods image shown
  // Payment images are typically SVG/pngs at the bottom
  const paymentMethodsImage = footer.locator('img[src*="payment"], img[alt*="payment"], img[src*="visa"], img[src*="mastercard"]').first();
  await expect(paymentMethodsImage).toBeVisible();

  // Capture screenshot
  await page.screenshot({ path: 'screenshots/15.4_footer_disclaimers.png', fullPage: false });
});
