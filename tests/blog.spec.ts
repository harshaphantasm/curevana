import { test, expect } from '@playwright/test';

// ==================================================
// Module: Blog
// Flow ID: 12.1
// Test Case Title: Browse the Blog Index Page
// ==================================================
test('12.1 Browse the Blog Index Page', async ({ page }) => {
  // Step 1: Navigate to /blog
  await page.goto('https://curevana.com/blog');

  // Dismiss age verification pop-up if it appears
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await ageBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await ageBtn.click({ force: true });
  }

  // Hide fixed overlays that might intercept clicks
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

  // Step 2: Verify title 'The Curevana Journal | Cannabis Science…'
  await expect(page).toHaveTitle(/The Curevana Journal/i);

  // Step 3: Verify heading 'The Curevana Journal'
  const mainHeading = page.getByRole('heading', { name: /The Curevana Journal/i }).first();
  await expect(mainHeading).toBeVisible();

  // Capture screenshot of the blog index
  await page.screenshot({ path: 'screenshots/12.1_blog_index.png', fullPage: false });

  // Step 4: Verify 3 article cards
  const expectedArticles = [
    'Inside Curevana',
    'The Functional High',
    'Building Trust'
  ];

  for (const articleText of expectedArticles) {
    // Locate the article card by checking for the text
    const articleCard = page.locator('article, div.group').filter({ hasText: new RegExp(articleText, 'i') }).first();
    await expect(articleCard).toBeVisible();

    // Step 5: Verify each card has image, title, summary, date, and 'Read More' button
    // 5a. Image
    await expect(articleCard.locator('img').first()).toBeVisible();
    
    // 5b. Title
    await expect(articleCard.getByRole('heading', { name: new RegExp(articleText, 'i') }).first()).toBeVisible();
    
    // 5c. Date (we assume it's a time element or some text inside the card)
    await expect(articleCard.locator('time, span, p').filter({ hasText: /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i }).first()).toBeVisible();
    
    // 5d. Summary (assume there's a paragraph element for summary)
    await expect(articleCard.locator('p, span, div[class*="text"]').last()).toBeVisible();
    
    // 5e. Read More button/link
    const readMoreLink = articleCard.locator('a, button').filter({ hasText: /Read More/i }).first();
    await expect(readMoreLink).toBeVisible();
  }
});

// ==================================================
// Module: Blog
// Flow ID: 12.2
// Test Case Title: Read a Blog Post
// ==================================================
test('12.2 Read a Blog Post', async ({ page }) => {
  // Step 1: Navigate to /blog
  await page.goto('https://curevana.com/blog');

  // Dismiss age verification pop-up if it appears
  const ageBtn = page.getByRole('button', { name: "Yes, I'm 21+" });
  if (await ageBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await ageBtn.click({ force: true });
  }

  // Hide fixed overlays
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

  // Step 2: Locate 'Inside Curevana: Redefining the Science of the High'
  const articleCard = page.locator('article, div.group').filter({ hasText: /Inside Curevana/i }).first();
  await expect(articleCard).toBeVisible();

  // Step 3: Click 'Read More'
  const readMoreLink = articleCard.locator('a, button').filter({ hasText: /Read More/i }).first();
  await readMoreLink.click();

  // Step 4: Wait for load
  await page.waitForLoadState('domcontentloaded');

  // Step 5: Verify URL: /blog/inside-curevana-redefining-the-science-of-the-high
  await expect(page).toHaveURL(/.*\/blog\/inside-curevana-redefining-the-science-of-the-high/i);

  // Capture screenshot of the blog post detail page
  await page.screenshot({ path: 'screenshots/12.2_blog_post.png', fullPage: false });

  // Step 6: Verify full post: title, date, image, content paragraphs
  const postTitle = page.getByRole('heading', { name: /Inside Curevana/i }).first();
  await expect(postTitle).toBeVisible();

  // Verify Date is present on the page
  const dateText = page.locator('time, span, p').filter({ hasText: /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/i }).first();
  await expect(dateText).toBeVisible();

  // Verify Image is present
  const mainImage = page.locator('main img, article img').first();
  await expect(mainImage).toBeVisible();

  // Verify Content Paragraphs are present
  const paragraphs = page.locator('main p, article p');
  // Ensure we have at least 1 paragraph of content
  expect(await paragraphs.count()).toBeGreaterThan(0);
  await expect(paragraphs.first()).toBeVisible();
});
