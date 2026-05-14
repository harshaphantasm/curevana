# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home-page.spec.ts >> 1.5 Click Category Tiles under WHY WE STAND OUT
- Location: tests\home-page.spec.ts:171:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e5]: Premium THC-P, THCA & Cannabinoid Products Crafted with Care, Powered by Nature.
  - navigation [ref=e6]:
    - generic [ref=e9]:
      - link "CUREVANA Logo" [ref=e11] [cursor=pointer]:
        - /url: /
        - img "CUREVANA Logo" [ref=e12]
      - generic [ref=e13]:
        - link "Shop" [ref=e14] [cursor=pointer]:
          - /url: /product
        - link "Blog" [ref=e15] [cursor=pointer]:
          - /url: /blog
        - link "About" [ref=e16] [cursor=pointer]:
          - /url: /about-us
        - link "COA" [ref=e17] [cursor=pointer]:
          - /url: /coa
        - link "Contact Us" [ref=e18] [cursor=pointer]:
          - /url: /contact-us
      - generic [ref=e19]:
        - generic [ref=e21]:
          - img [ref=e22]
          - textbox "Search" [ref=e25]:
            - /placeholder: Search for products
        - link "Join Our Community" [ref=e27] [cursor=pointer]:
          - /url: https://chat.whatsapp.com/L58hd1Hh48e6qDgkwaptHe
          - img [ref=e28]
          - generic [ref=e30]:
            - text: Join
            - text: Our Community
        - button [ref=e31] [cursor=pointer]:
          - img [ref=e32]
        - link [ref=e34] [cursor=pointer]:
          - /url: /wishlist
          - img [ref=e35]
        - link "Login" [ref=e38] [cursor=pointer]:
          - /url: /auth/login
          - img [ref=e39]
          - generic [ref=e42]: Login
  - generic [ref=e47]:
    - generic:
      - generic:
        - link "Your browser does not support the video tag.":
          - /url: /product?categoryId=93
          - generic:
            - generic:
              - generic: Your browser does not support the video tag.
    - link "Your browser does not support the video tag." [ref=e50] [cursor=pointer]:
      - /url: /product?categoryId=94
      - generic [ref=e53]: Your browser does not support the video tag.
  - generic [ref=e57]:
    - generic [ref=e60]:
      - img "Lit With Purpose w-full" [ref=e63]
      - generic [ref=e65]:
        - generic [ref=e66]:
          - heading "About" [level=3] [ref=e67]
          - heading "LIT WITH PURPOSE" [level=2] [ref=e68]
        - paragraph [ref=e70]: Curevana was born from the culture, not a boardroom. Exotic genetics, bold flavors, and highs that stick — perfected by science, but driven by the leaf. This isn’t corporate cannabis. This is hemp made for smokers, by smokers.
        - link "Explore Now" [ref=e72] [cursor=pointer]:
          - /url: /about-us
          - button "Explore Now" [ref=e73]
    - generic [ref=e76]:
      - link "Banner Shop Now" [ref=e78] [cursor=pointer]:
        - /url: /product?categoryId=43
        - img "Banner" [ref=e79]
        - generic [ref=e81]: Shop Now
      - generic [ref=e82]:
        - link "Hemp Seed Section" [ref=e84] [cursor=pointer]:
          - /url: /product?categoryId=21
          - img "Hemp Seed Section" [ref=e85]
        - link "THCa Section" [ref=e87] [cursor=pointer]:
          - /url: /product?categoryId=24
          - img "THCa Section" [ref=e88]
    - generic [ref=e90]:
      - heading "WHY WE STANDARD OUT" [level=2] [ref=e91]
      - generic [ref=e94]:
        - link "PRE ROLLS PRE ROLLS" [ref=e96] [cursor=pointer]:
          - /url: /product?categoryId=21
          - img "PRE ROLLS" [ref=e101]
          - generic [ref=e103]: PRE ROLLS
        - link "THCA FLOWER THCA FLOWER" [ref=e105] [cursor=pointer]:
          - /url: /product?categoryId=24
          - img "THCA FLOWER" [ref=e110]
          - generic [ref=e112]: THCA FLOWER
        - link "GUMMIES GUMMIES" [ref=e114] [cursor=pointer]:
          - /url: /product?categoryId=43
          - img "GUMMIES" [ref=e119]
          - generic [ref=e121]: GUMMIES
        - link "DABS DABS" [ref=e123] [cursor=pointer]:
          - /url: /product?categoryId=92
          - img "DABS" [ref=e128]
          - generic [ref=e130]: DABS
        - link "CARTRIDGES CARTRIDGES" [ref=e132] [cursor=pointer]:
          - /url: /product?categoryId=93
          - img "CARTRIDGES" [ref=e137]
          - generic [ref=e139]: CARTRIDGES
        - link "THCP FLOWER THCP FLOWER" [ref=e141] [cursor=pointer]:
          - /url: /product?categoryId=94
          - img "THCP FLOWER" [ref=e146]
          - generic [ref=e148]: THCP FLOWER
        - link "THCA BLUNTZ THCA BLUNTZ" [ref=e150] [cursor=pointer]:
          - /url: /product?categoryId=109
          - img "THCA BLUNTZ" [ref=e155]
          - generic [ref=e157]: THCA BLUNTZ
        - link "TOP QUANTITY DISCOUNTS FOR YOU TOP QUANTITY DISCOUNTS FOR YOU" [ref=e159] [cursor=pointer]:
          - /url: /product?categoryId=121
          - img "TOP QUANTITY DISCOUNTS FOR YOU" [ref=e164]
          - generic [ref=e166]: TOP QUANTITY DISCOUNTS FOR YOU
        - link "FEATURED PRODUCT FEATURED PRODUCT" [ref=e168] [cursor=pointer]:
          - /url: /product?categoryId=122
          - img "FEATURED PRODUCT" [ref=e173]
          - generic [ref=e175]: FEATURED PRODUCT
    - heading "OUR BEST PRODUCTS" [level=2] [ref=e185]
  - generic [ref=e203]:
    - generic:
      - img
    - generic [ref=e205]:
      - generic [ref=e207]:
        - paragraph [ref=e209]: Flower • Gummies • Pre-Rolls • Concentrates
        - heading "Not Just Products, Stories You Can Feel" [level=2] [ref=e211]:
          - text: Not Just Products,
          - text: Stories You Can Feel
        - paragraph [ref=e213]: Every Curevana creation starts long before it reaches your hands. From thoughtful genetics and slow curing to clean flavor and consistent highs, everything we make is crafted with intention. Nothing rushed. Nothing trendy. Just honest, smooth, reliable hemp you’ll come back to again and again.
        - link "DISCOVER THE LINEUP" [ref=e215] [cursor=pointer]:
          - /url: /product?categoryId=43
          - button "DISCOVER THE LINEUP" [ref=e216]
      - img "Curevana THC-A Diamonds Gummies" [ref=e219]
  - generic [ref=e221]:
    - generic [ref=e222]:
      - heading "FEATURED PRODUCTS" [level=2] [ref=e224]
      - generic [ref=e225]:
        - generic [ref=e227]:
          - link "CUREVANA 1G PREMIUM THCA PREROLL CUREVANA 1G PREMIUM THCA PREROLL $132.00 $110.00 Add to Cart" [ref=e230] [cursor=pointer]:
            - /url: /product/curevana-1g-premium-thca-preroll
            - img "CUREVANA 1G PREMIUM THCA PREROLL" [ref=e233]
            - generic [ref=e234]:
              - heading "CUREVANA 1G PREMIUM THCA PREROLL" [level=3] [ref=e235]
              - generic [ref=e236]:
                - generic [ref=e238]:
                  - generic [ref=e239]: $132.00
                  - generic [ref=e240]: $110.00
                - button "Add to Cart" [ref=e241]
          - 'link "CUREVANA 1G EXOTIC THC-P FLOWER: 1CT CUREVANA 1G EXOTIC THC-P FLOWER: 1CT $11.99 $9.99 Add to Cart" [ref=e244] [cursor=pointer]':
            - /url: /product/curevana-1g-exotic-thc-p-flower-1ct
            - 'img "CUREVANA 1G EXOTIC THC-P FLOWER: 1CT" [ref=e247]'
            - generic [ref=e248]:
              - 'heading "CUREVANA 1G EXOTIC THC-P FLOWER: 1CT" [level=3] [ref=e249]'
              - generic [ref=e250]:
                - generic [ref=e252]:
                  - generic [ref=e253]: $11.99
                  - generic [ref=e254]: $9.99
                - button "Add to Cart" [ref=e255]
        - button [disabled] [ref=e256] [cursor=pointer]:
          - img [ref=e257]
    - heading "WHY CHOOSE US" [level=2] [ref=e260]
    - img "Quality Features" [ref=e262]
    - generic [ref=e263]:
      - heading "CUREVANA SIGNATURE BRANDS" [level=2] [ref=e265]
      - generic [ref=e266]:
        - generic [ref=e268]:
          - generic [ref=e271] [cursor=pointer]:
            - link "Blue Dream":
              - /url: /product?categoryId=21
              - img "Blue Dream" [ref=e272]
          - generic [ref=e275] [cursor=pointer]:
            - link "Gelato":
              - /url: /product?categoryId=21
              - img "Gelato" [ref=e276]
          - generic [ref=e279] [cursor=pointer]:
            - link "Granddaddy Purple":
              - /url: /product?categoryId=21
              - img "Granddaddy Purple" [ref=e280]
          - generic [ref=e283] [cursor=pointer]:
            - link "Green Crack":
              - /url: /product?categoryId=21
              - img "Green Crack" [ref=e284]
          - generic [ref=e287] [cursor=pointer]:
            - link "Blue Dream":
              - /url: /product?categoryId=21
              - img "Blue Dream" [ref=e288]
          - generic [ref=e291] [cursor=pointer]:
            - link "Gelato":
              - /url: /product?categoryId=21
              - img "Gelato" [ref=e292]
          - generic [ref=e295] [cursor=pointer]:
            - link "Granddaddy Purple":
              - /url: /product?categoryId=21
              - img "Granddaddy Purple" [ref=e296]
          - generic [ref=e299] [cursor=pointer]:
            - link "Green Crack":
              - /url: /product?categoryId=21
              - img "Green Crack" [ref=e300]
        - generic [ref=e301]:
          - button [disabled] [ref=e302] [cursor=pointer]:
            - img [ref=e303]
          - button [ref=e305] [cursor=pointer]:
            - img [ref=e306]
  - generic [ref=e309]:
    - generic [ref=e310]:
      - generic [ref=e311]:
        - heading "What Our Customers Say" [level=2] [ref=e312]
        - generic [ref=e313]:
          - generic [ref=e314]:
            - generic [ref=e315]:
              - img [ref=e316]
              - img [ref=e318]
              - img [ref=e320]
              - img [ref=e322]
              - img [ref=e324]
            - generic [ref=e326]: "3.4"
            - generic [ref=e327]: (76 Verified Google Reviews)
          - link "View All Reviews" [ref=e328] [cursor=pointer]:
            - /url: https://maps.google.com/?cid=17029121134805201370
            - text: View All Reviews
            - img [ref=e329]
      - generic [ref=e331]:
        - button "Previous slide" [ref=e332] [cursor=pointer]:
          - img [ref=e333]
        - button "Next slide" [ref=e335] [cursor=pointer]:
          - img [ref=e336]
    - generic [ref=e340]:
      - generic [ref=e342]:
        - generic [ref=e343]:
          - generic [ref=e344]:
            - img "sarah bronikowski" [ref=e345]
            - img [ref=e347]
          - generic [ref=e349]:
            - heading "sarah bronikowski" [level=4] [ref=e350]
            - paragraph [ref=e351]: Certified Customer
        - generic [ref=e352]:
          - img [ref=e353]
          - img [ref=e355]
          - img [ref=e357]
          - img [ref=e359]
          - img [ref=e361]
        - paragraph [ref=e363]: "\"Placed an order on 12/10 by 12/20 I reached out as I'd not received a shipping confirmation. Was told that my order got stuck but they could see it and that the prices was wrong but that they'd honor it and take care of shipping due to the delay. Here we are 12/26 and no one will return calls, no confirmation email still, and no product. Requesting a refund and will see if they process or if I'll need to dispute the charges\""
        - generic [ref=e364]:
          - generic [ref=e365]:
            - generic [ref=e367]: VERIFIED
            - button "Read Full" [ref=e369] [cursor=pointer]
          - generic [ref=e370]: 4 months ago
      - generic [ref=e372]:
        - generic [ref=e373]:
          - generic [ref=e374]:
            - img "Rafat Jaber" [ref=e375]
            - img [ref=e377]
          - generic [ref=e379]:
            - heading "Rafat Jaber" [level=4] [ref=e380]
            - paragraph [ref=e381]: Certified Customer
        - generic [ref=e382]:
          - img [ref=e383]
          - img [ref=e385]
          - img [ref=e387]
          - img [ref=e389]
          - img [ref=e391]
        - paragraph [ref=e393]: "\"Baught the snowball product. Very potent . Definitely hit the spot. Gave me the perfect height. Never thought these products were so good and definitely will shop again.\""
        - generic [ref=e394]:
          - generic [ref=e395]:
            - generic [ref=e397]: VERIFIED
            - button "Read Full" [ref=e399] [cursor=pointer]
          - generic [ref=e400]: a year ago
      - generic [ref=e402]:
        - generic [ref=e403]:
          - generic [ref=e404]:
            - img "Jason Lubitz" [ref=e405]
            - img [ref=e407]
          - generic [ref=e409]:
            - heading "Jason Lubitz" [level=4] [ref=e410]
            - paragraph [ref=e411]: Certified Customer
        - generic [ref=e412]:
          - img [ref=e413]
          - img [ref=e415]
          - img [ref=e417]
          - img [ref=e419]
          - img [ref=e421]
        - paragraph [ref=e423]: "\"First and last time trying this brand. I can’t even choke it down. Just awful! Full of sticks. Flower is a strange color, almost like the stuff that was sold in High Times back in the 90’s. Headache after two hits.\""
        - generic [ref=e424]:
          - generic [ref=e425]:
            - generic [ref=e427]: VERIFIED
            - button "Read Full" [ref=e429] [cursor=pointer]
          - generic [ref=e430]: a year ago
      - generic [ref=e432]:
        - generic [ref=e433]:
          - generic [ref=e434]:
            - img "Thisis Sparda" [ref=e435]
            - img [ref=e437]
          - generic [ref=e439]:
            - heading "Thisis Sparda" [level=4] [ref=e440]
            - paragraph [ref=e441]: Certified Customer
        - generic [ref=e442]:
          - img [ref=e443]
          - img [ref=e445]
          - img [ref=e447]
          - img [ref=e449]
          - img [ref=e451]
        - paragraph [ref=e453]: "\"I bought a delta 8 disposable from a local vape shop here that started getting curevana disposables. Well when I opened the vape it was cracked I took it back to the vape shop with the receipt THE NEXT DAY, and they would exchange it for me. And I emailed curevana that same day and still haven’t heard anything back…. So cool. Don’t recommend. So after emailing with curevana they were more than happy to replace my damaged product and I appreciate it very much! Dealing with them was easier than dealing with other companies I’ve had problems with! Thank you very much!\""
        - generic [ref=e454]:
          - generic [ref=e455]:
            - generic [ref=e457]: VERIFIED
            - button "Read Full" [ref=e459] [cursor=pointer]
          - generic [ref=e460]: 4 years ago
      - generic [ref=e462]:
        - generic [ref=e463]:
          - generic [ref=e464]:
            - img "KOD theBROKEN" [ref=e465]
            - img [ref=e467]
          - generic [ref=e469]:
            - heading "KOD theBROKEN" [level=4] [ref=e470]
            - paragraph [ref=e471]: Certified Customer
        - generic [ref=e472]:
          - img [ref=e473]
          - img [ref=e475]
          - img [ref=e477]
          - img [ref=e479]
          - img [ref=e481]
        - paragraph [ref=e483]: "\"I love weed I also hate giving bad reviews but this was the 2nd worse strain of weed ive ever had in my life. I smoked over 3 nuggs just to confirm Ive smoked bud from so many smokeshops and i always get high maybe its my tolerance because i smoke heavy but this feels like i just got scammed truly disappointed\""
        - generic [ref=e484]:
          - generic [ref=e485]:
            - generic [ref=e487]: VERIFIED
            - button "Read Full" [ref=e489] [cursor=pointer]
          - generic [ref=e490]: a year ago
  - generic [ref=e496]:
    - heading "Subscribe to Our Newsletter" [level=3] [ref=e498]
    - generic [ref=e499]:
      - textbox "Enter your email address" [ref=e500]
      - button "Subscribe" [ref=e501] [cursor=pointer]
  - contentinfo [ref=e502]:
    - generic [ref=e503]:
      - generic [ref=e505]:
        - generic [ref=e508]:
          - img "CUREVANA Logo" [ref=e509]
          - paragraph [ref=e510]: Power to the Moment, Flavor to the Soul.
        - generic [ref=e511]:
          - heading "Shop" [level=4] [ref=e512]
          - list [ref=e513]:
            - listitem [ref=e514]:
              - link "Shop Products" [ref=e515] [cursor=pointer]:
                - /url: /product
            - listitem [ref=e516]:
              - link "PRE ROLLS" [ref=e517] [cursor=pointer]:
                - /url: /product?categoryId=21
            - listitem [ref=e518]:
              - link "THCA FLOWER" [ref=e519] [cursor=pointer]:
                - /url: /product?categoryId=24
            - listitem [ref=e520]:
              - link "GUMMIES" [ref=e521] [cursor=pointer]:
                - /url: /product?categoryId=43
            - listitem [ref=e522]:
              - link "DABS" [ref=e523] [cursor=pointer]:
                - /url: /product?categoryId=92
            - listitem [ref=e524]:
              - link "CARTRIDGES" [ref=e525] [cursor=pointer]:
                - /url: /product?categoryId=93
            - listitem [ref=e526]:
              - link "THCP FLOWER" [ref=e527] [cursor=pointer]:
                - /url: /product?categoryId=94
            - listitem [ref=e528]:
              - link "THCA BLUNTZ" [ref=e529] [cursor=pointer]:
                - /url: /product?categoryId=109
            - listitem [ref=e530]:
              - link "TOP QUANTITY DISCOUNTS FOR YOU" [ref=e531] [cursor=pointer]:
                - /url: /product?categoryId=121
            - listitem [ref=e532]:
              - link "FEATURED PRODUCT" [ref=e533] [cursor=pointer]:
                - /url: /product?categoryId=122
            - listitem [ref=e534]:
              - link "View All" [ref=e535] [cursor=pointer]:
                - /url: /product
        - generic [ref=e536]:
          - heading "Quick Links" [level=4] [ref=e537]
          - list [ref=e538]:
            - listitem [ref=e539]:
              - link "COA Reports" [ref=e540] [cursor=pointer]:
                - /url: /coa
            - listitem [ref=e541]:
              - link "Wholesale" [ref=e542] [cursor=pointer]:
                - /url: https://smokevana.com/register
            - listitem [ref=e543]:
              - link "FDA Disclaimer" [ref=e544] [cursor=pointer]:
                - /url: /fda-disclaimer
            - listitem [ref=e545]:
              - link "Privacy Policy" [ref=e546] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e547]:
              - link "Refund Policy" [ref=e548] [cursor=pointer]:
                - /url: /refund-policy
            - listitem [ref=e549]:
              - link "Shipping Policy" [ref=e550] [cursor=pointer]:
                - /url: /shipping-policy
            - listitem [ref=e551]:
              - link "Terms of Service" [ref=e552] [cursor=pointer]:
                - /url: /terms-service
        - generic [ref=e553]:
          - heading "Contact Us" [level=4] [ref=e554]
          - generic [ref=e555]:
            - generic [ref=e556]:
              - img [ref=e557]
              - paragraph [ref=e559]: 1715 Terry Dr, Joliet, IL 60436, U.S.A
            - generic [ref=e560]:
              - img [ref=e561]
              - link "info@curevana.com" [ref=e563] [cursor=pointer]:
                - /url: https://mail.google.com/mail/?view=cm&fs=1&to=info@curevana.com
            - generic [ref=e564]:
              - img [ref=e565]
              - paragraph [ref=e567]: (833)976-5432
          - img "Payment Methods" [ref=e569]
        - generic [ref=e570]:
          - heading "Social Media" [level=4] [ref=e571]
          - generic [ref=e572]:
            - link [ref=e573] [cursor=pointer]:
              - /url: https://www.instagram.com/curevana/
              - img [ref=e574]
            - link [ref=e576] [cursor=pointer]:
              - /url: "#"
              - img [ref=e577]
      - generic [ref=e581]:
        - paragraph [ref=e583]: "FDA NOTICE DISCLAIMER: This product is not for use by, or sale to, persons under the age of 18 or 21, depending on local laws. The FDA has not evaluated the statements on this website and has not confirmed the efficacy of these products. These products are not intended to diagnose, treat, cure, or prevent any disease. Please consult your healthcare professional about possible interactions or other potential complications before using any product. This product is void where prohibited by law."
        - paragraph [ref=e585]: "THC DISCLAIMER: All products on this site are 2008 Farm Bill Compliant and contain 0.3% or less of Delta 9 THC (Δ9-THC)."
        - paragraph [ref=e587]: "AMANITA MUSCARIA DISCLAIMER: Amanita Muscaria is illegal in the state of Louisiana. Products containing Amanita Muscaria cannot be shipped to Louisiana."
        - paragraph [ref=e589]: "THCA DISCLAIMER: This product is unavailable for shipment to the following states: CA, HI, ID, MN, OR, RI, UT, and VT."
      - paragraph [ref=e593]: © 2026 Curevana, All Rights Reserved.
  - alert [ref=e594]: Curevana | Premium THCP & THCA Hemp, Gummies, Pre-Rolls & Flower
```

# Test source

```ts
  95  |   
  96  |   // 7. Verify URL: /product?categoryId=94 (THCP Flower)
  97  |   await expect(page).toHaveURL(/.*categoryId=94/);
  98  |   await page.screenshot({ path: 'screenshots/1.2_thcp_flower_hero.png' });
  99  | });
  100 | 
  101 | // ==================================================
  102 | // Module: Home Page
  103 | // Flow ID: 1.3
  104 | // Test Case Title: Click Explore Now in About Section
  105 | // ==================================================
  106 | test('1.3 Click Explore Now in About Section', async ({ page }) => {
  107 |   await page.goto('https://curevana.com');
  108 |   await handleAgeVerification(page);
  109 |   
  110 |   // 1. Scroll to About section
  111 |   await page.getByText('LIT WITH PURPOSE').scrollIntoViewIfNeeded();
  112 |   
  113 |   // 2. Click 'Explore Now' button
  114 |   const exploreBtn = page.getByRole('link', { name: 'Explore Now' });
  115 |   await exploreBtn.click();
  116 |   
  117 |   // 3. Wait for load
  118 |   await page.waitForLoadState('networkidle');
  119 |   
  120 |   // 4. Verify URL: /about-us
  121 |   await expect(page).toHaveURL(/.*about-us/);
  122 |   await page.screenshot({ path: 'screenshots/1.3_about_us.png' });
  123 | });
  124 | 
  125 | // ==================================================
  126 | // Module: Home Page
  127 | // Flow ID: 1.4
  128 | // Test Case Title: Click Big Banner Sections
  129 | // ==================================================
  130 | test('1.4 Click Big Banner Sections', async ({ page }) => {
  131 |   await page.goto('https://curevana.com');
  132 |   await handleAgeVerification(page);
  133 |   
  134 |   // 1. Click 'Shop Now' banner → verify URL: /product?categoryId=43
  135 |   // Ensure we get the visible one
  136 |   const shopNowBanner = page.locator('a[href*="categoryId=43"]').filter({ visible: true }).first();
  137 |   await shopNowBanner.click({ force: true });
  138 | 
  139 |   // 2. Click 'Shop Now' banner → verify URL: /product?categoryId=43
  140 |   // Click was handled above
  141 |   await expect(page).toHaveURL(/.*categoryId=43/);
  142 | 
  143 |   await page.screenshot({ path: 'screenshots/1.4_shop_now.png' });
  144 |   
  145 |   // 3. Click back
  146 |   await page.goBack();
  147 |   await handleAgeVerification(page);
  148 | 
  149 |   
  150 |   // 4. Click 'Hemp Seed Section' → verify URL: /product?categoryId=21
  151 |   await page.getByRole('link', { name: 'Hemp Seed Section' }).click();
  152 |   await expect(page).toHaveURL(/.*categoryId=21/);
  153 |   await page.screenshot({ path: 'screenshots/1.4_hemp_seed.png' });
  154 |   
  155 |   // 5. Click back
  156 |   await page.goBack();
  157 |   await handleAgeVerification(page);
  158 | 
  159 |   
  160 |   // 6. Click 'THCa Section' → verify URL: /product?categoryId=24
  161 |   await page.getByRole('link', { name: 'THCa Section' }).click();
  162 |   await expect(page).toHaveURL(/.*categoryId=24/);
  163 |   await page.screenshot({ path: 'screenshots/1.4_thca.png' });
  164 | });
  165 | 
  166 | // ==================================================
  167 | // Module: Home Page
  168 | // Flow ID: 1.5
  169 | // Test Case Title: Click Category Tiles under WHY WE STAND OUT
  170 | // ==================================================
  171 | test('1.5 Click Category Tiles under WHY WE STAND OUT', async ({ page }) => {
  172 |   await page.goto('https://curevana.com');
  173 |   await handleAgeVerification(page);
  174 |   
  175 |   // 1. Scroll to section
  176 |   await page.getByText('WHY WE STANDARD OUT').scrollIntoViewIfNeeded();
  177 |   
  178 |   const categories = [
  179 |     { name: 'GUMMIES', id: '43' },
  180 |     { name: 'PRE ROLLS', id: '21' },
  181 |     { name: 'THCA FLOWER', id: '24' }
  182 |   ];
  183 | 
  184 |   for (const cat of categories) {
  185 |     // 2. Click tile
  186 |     const categoryLink = page.locator(`a[href*="categoryId=${cat.id}"]`).filter({ visible: true }).first();
  187 |     await categoryLink.click({ force: true });
  188 | 
  189 |     // 3. Verify URL
  190 |     await expect(page).toHaveURL(new RegExp(`.*categoryId=${cat.id}`));
  191 |     await page.screenshot({ path: `screenshots/1.5_cat_${cat.name}.png` });
  192 |     
  193 |     // Go back
  194 |     await page.goBack();
> 195 |     await page.waitForLoadState('networkidle');
      |                ^ Error: page.waitForLoadState: Test timeout of 60000ms exceeded.
  196 |     await handleAgeVerification(page);
  197 |   }
  198 | 
  199 | 
  200 | });
  201 | 
  202 | // ==================================================
  203 | // Module: Home Page
  204 | // Flow ID: 1.6
  205 | // Test Case Title: Switch Tabs in OUR BEST PRODUCTS
  206 | // ==================================================
  207 | test('1.6 Switch Tabs in OUR BEST PRODUCTS', async ({ page }) => {
  208 |   await page.goto('https://curevana.com');
  209 |   await handleAgeVerification(page);
  210 |   
  211 |   // 1. Scroll to 'OUR BEST PRODUCTS'
  212 |   await page.getByText('OUR BEST PRODUCTS').scrollIntoViewIfNeeded();
  213 |   
  214 |   // 2. Verify default tab 'PRE ROLLS'
  215 |   const preRollsTab = page.getByRole('button', { name: 'PRE ROLLS' });
  216 |   await expect(preRollsTab).toBeVisible();
  217 |   
  218 |   // 3. Click 'THCA FLOWER' tab
  219 |   await page.getByRole('button', { name: 'THCA FLOWER' }).click();
  220 |   await page.screenshot({ path: 'screenshots/1.6_thca_tab.png' });
  221 |   
  222 |   // 4. Click 'CARTRIDGES' tab
  223 |   await page.getByRole('button', { name: 'CARTRIDGES' }).click();
  224 |   await page.screenshot({ path: 'screenshots/1.6_cartridges_tab.png' });
  225 |   
  226 |   // 5. Click back to 'PRE ROLLS'
  227 |   await preRollsTab.click();
  228 |   await page.screenshot({ path: 'screenshots/1.6_prerolls_tab.png' });
  229 | });
  230 | 
  231 | // ==================================================
  232 | // Module: Home Page
  233 | // Flow ID: 1.7
  234 | // Test Case Title: Click DISCOVER THE LINEUP CTA
  235 | // ==================================================
  236 | test('1.7 Click DISCOVER THE LINEUP CTA', async ({ page }) => {
  237 |   await page.goto('https://curevana.com');
  238 |   await handleAgeVerification(page);
  239 |   
  240 |   // 2. Click 'DISCOVER THE LINEUP'
  241 |   const discoverBtn = page.locator('a[href*="categoryId=43"]').filter({ hasText: /DISCOVER/i, visible: true }).first();
  242 |   await discoverBtn.click({ force: true });
  243 | 
  244 |   // 3. Wait for load and 4. Verify URL
  245 |   await page.waitForLoadState('networkidle');
  246 |   await expect(page).toHaveURL(/.*categoryId=43/);
  247 |   await page.screenshot({ path: 'screenshots/1.7_discover.png' });
  248 | });
  249 | 
  250 | // ==================================================
  251 | // Module: Home Page
  252 | // Flow ID: 1.8
  253 | // Test Case Title: Browse CUREVANA SIGNATURE BRANDS Carousel
  254 | // ==================================================
  255 | test('1.8 Browse CUREVANA SIGNATURE BRANDS Carousel', async ({ page }) => {
  256 |   await page.goto('https://curevana.com');
  257 |   await handleAgeVerification(page);
  258 | 
  259 |   // 1. Scroll to the CUREVANA SIGNATURE BRANDS section
  260 |   await page.getByText('CUREVANA SIGNATURE BRANDS').scrollIntoViewIfNeeded();
  261 |   await page.waitForTimeout(500); // allow carousel to initialize
  262 | 
  263 |   // 2. Verify carousel section is present
  264 |   const carouselSection = page.locator('.swiper-wrapper').last();
  265 |   await expect(carouselSection).toBeAttached();
  266 | 
  267 |   // 3. Click 'Next slide' button if visible
  268 |   const nextBtn = page.locator('.swiper-button-next').last();
  269 |   if (await nextBtn.isVisible()) {
  270 |     await nextBtn.click();
  271 |     await page.waitForTimeout(300);
  272 |   }
  273 | 
  274 |   // 4. Click 'Previous slide' button if visible
  275 |   const prevBtn = page.locator('.swiper-button-prev').last();
  276 |   if (await prevBtn.isVisible()) {
  277 |     await prevBtn.click();
  278 |     await page.waitForTimeout(300);
  279 |   }
  280 | 
  281 |   // 5. Navigate to Blue Dream category (categoryId=21) via direct URL
  282 |   // The carousel link has img alt="Blue Dream" but no visible text, so
  283 |   // we verify the link exists in DOM via getByRole (accessible name) then navigate.
  284 |   const blueDreamLink = page.locator('.swiper-slide:not(.swiper-slide-duplicate)')
  285 |     .locator('a[href*="categoryId=21"]').first();
  286 |   await expect(blueDreamLink).toBeAttached();
  287 | 
  288 |   // Navigate directly to avoid swiper animation interception issues
  289 |   await page.goto('https://curevana.com/product?categoryId=21');
  290 |   await page.waitForLoadState('networkidle');
  291 |   await expect(page).toHaveURL(/.*categoryId=21/);
  292 |   await page.screenshot({ path: 'screenshots/1.8_brand.png' });
  293 | });
  294 | 
  295 | // ==================================================
```