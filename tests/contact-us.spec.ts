import { test, expect, Page } from '@playwright/test';

// Helper function to handle initial load, bypass age verification gate, and clear overlays
async function handleInitialLoad(page: Page) {
  // Navigate to the homepage first to establish session and age verification
  await page.goto('https://curevana.com/');
  
  // Locate and click the 'Yes, I'm 21+' button if the age gate is visible
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await ageBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await ageBtn.click({ force: true });
  }

  // Inject CSS to hide any blocking, sticky, or fixed overlay elements (like dialogs/sticky headers)
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
  
  // Brief wait to ensure the style tag takes effect and overlays disappear
  await page.waitForTimeout(500);
}

// =========================================================================
// Module: Contact Us
// Flow ID: 11.1
// Test Case Title: fill the Contact Form
// =========================================================================
test('11.1 fill the Contact Form', async ({ page }) => {
  // Pre-condition: Bypass initial age gate and ensure clean navigation
  await handleInitialLoad(page);

  // 1. Navigate to /contact-us
  await page.goto('https://curevana.com/contact-us');
  await page.waitForLoadState('domcontentloaded');
  
  // Capture a screenshot of the loaded Contact Us page
  await page.screenshot({ path: 'screenshots/11.1_contact_us_loaded.png' });

  // 2. Verify title 'Contact Curevana | Customer Support…'
  // Using regular expression matching to match the start of the title robustly
  await expect(page).toHaveTitle(/^Contact Curevana \| Customer Support/i);

  // 3. Verify 'Contact Us', 'Send us a message', 'Get in touch' headings
  // Verify main "Contact Us" title heading is visible (using .first() to avoid footer matching)
  const contactUsHeading = page.getByRole('heading', { name: 'Contact Us', exact: true }).first();
  await expect(contactUsHeading).toBeVisible();

  // Verify the card heading "Send us a message" is visible
  const sendUsMessageHeading = page.getByRole('heading', { name: 'Send us a message', exact: true }).first();
  await expect(sendUsMessageHeading).toBeVisible();

  // Verify the contact details heading "Get in touch" is visible
  const getInTouchHeading = page.getByRole('heading', { name: 'Get in touch', exact: true }).first();
  await expect(getInTouchHeading).toBeVisible();

  // 4. Fill Name=Auto Tester
  const nameInput = page.getByLabel('Name', { exact: true }).or(page.getByPlaceholder('First and Last name'));
  await expect(nameInput).toBeVisible();
  await nameInput.click();
  await nameInput.fill('Auto Tester');

  // 5. Fill E-Mail=autotester@example.com
  const emailInput = page.getByLabel('E-Mail').or(page.getByPlaceholder('you@example.com'));
  await expect(emailInput).toBeVisible();
  await emailInput.click();
  await emailInput.fill('autotester@example.com');

  // 6. Fill Phone=5551234567
  const phoneInput = page.getByLabel('Phone').or(page.getByPlaceholder('2345678901'));
  await expect(phoneInput).toBeVisible();
  await phoneInput.click();
  await phoneInput.fill('5551234567');

  // 7. Fill Subject=Product Inquiry
  const subjectInput = page.getByLabel('Subject').or(page.getByPlaceholder('How can we help?'));
  await expect(subjectInput).toBeVisible();
  await subjectInput.click();
  await subjectInput.fill('Product Inquiry');

  // 8. Fill Message='Hello, I would like to know more about your THCA Pre-Rolls.'
  const messageInput = page.getByLabel('Message').or(page.getByPlaceholder('Your message here...'));
  await expect(messageInput).toBeVisible();
  await messageInput.click();
  await messageInput.fill('Hello, I would like to know more about your THCA Pre-Rolls.');

  // Capture a screenshot to show the contact form completely filled in
  await page.screenshot({ path: 'screenshots/11.1_contact_form_filled.png' });

  // 10. Verify form filled successfully
  // We assert that the inputs have the exact filled values, validating successful form compilation
  await expect(nameInput).toHaveValue('Auto Tester');
  await expect(emailInput).toHaveValue('autotester@example.com');
  await expect(phoneInput).toHaveValue('5551234567');
  await expect(subjectInput).toHaveValue('Product Inquiry');
  await expect(messageInput).toHaveValue('Hello, I would like to know more about your THCA Pre-Rolls.');
  
  // Note: To prevent spamming the live production database with automated requests in testing runs,
  // we do not click submit here. Asserting the field values verifies successful form completion.
});
