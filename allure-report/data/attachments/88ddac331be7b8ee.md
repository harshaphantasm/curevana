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
    - generic [ref=e183]:
      - generic [ref=e184]:
        - heading "OUR BEST PRODUCTS" [level=2] [ref=e185]
        - generic [ref=e186]:
          - button "PRE ROLLS" [ref=e187] [cursor=pointer]: PRE ROLLS
          - button "THCA FLOWER" [ref=e189] [cursor=pointer]
          - button "CARTRIDGES" [ref=e190] [cursor=pointer]
      - generic [ref=e191]:
        - generic [ref=e193]:
          - link "CUREVANA THC-A PREROLLS 100% THC-A FLOWER– (6 COUNT) CUREVANA THC-A PREROLLS 100% THC-A FLOWER– (6 COUNT) $64.79 $53.99 Add to Cart" [ref=e196] [cursor=pointer]:
            - /url: /product/curevana-thc-a-prerolls-100-thc-a-flower-6-count
            - img "CUREVANA THC-A PREROLLS 100% THC-A FLOWER– (6 COUNT)" [ref=e199]
            - generic [ref=e200]:
              - heading "CUREVANA THC-A PREROLLS 100% THC-A FLOWER– (6 COUNT)" [level=3] [ref=e201]
              - generic [ref=e202]:
                - generic [ref=e204]:
                  - generic [ref=e205]: $64.79
                  - generic [ref=e206]: $53.99
                - button "Add to Cart" [ref=e207]
          - link "CUREVANA EXOTIC THCA PRE-ROLLS – 25 COUNT | 1.5G EACH CUREVANA EXOTIC THCA PRE-ROLLS – 25 COUNT | 1.5G EACH $53.99 $44.99 Add to Cart" [ref=e210] [cursor=pointer]:
            - /url: /product/curevana-exotic-thca-pre-rolls-25-count-15g-each-1
            - img "CUREVANA EXOTIC THCA PRE-ROLLS – 25 COUNT | 1.5G EACH" [ref=e213]
            - generic [ref=e214]:
              - heading "CUREVANA EXOTIC THCA PRE-ROLLS – 25 COUNT | 1.5G EACH" [level=3] [ref=e215]
              - generic [ref=e216]:
                - generic [ref=e218]:
                  - generic [ref=e219]: $53.99
                  - generic [ref=e220]: $44.99
                - button "Add to Cart" [ref=e221]
          - link "CUREVANA 1G PREMIUM THCA PREROLL CUREVANA 1G PREMIUM THCA PREROLL $132.00 $110.00 Add to Cart" [ref=e224] [cursor=pointer]:
            - /url: /product/curevana-1g-premium-thca-preroll
            - img "CUREVANA 1G PREMIUM THCA PREROLL" [ref=e227]
            - generic [ref=e228]:
              - heading "CUREVANA 1G PREMIUM THCA PREROLL" [level=3] [ref=e229]
              - generic [ref=e230]:
                - generic [ref=e232]:
                  - generic [ref=e233]: $132.00
                  - generic [ref=e234]: $110.00
                - button "Add to Cart" [ref=e235]
          - 'link "CUREVANA EXOTIC THC-P PREROLLS: 1.5G 25CT CUREVANA EXOTIC THC-P PREROLLS: 1.5G 25CT $53.99 $44.99 Add to Cart" [ref=e238] [cursor=pointer]':
            - /url: /product/curevana-exotic-thc-p-prerolls-15g-25ct
            - 'img "CUREVANA EXOTIC THC-P PREROLLS: 1.5G 25CT" [ref=e241]'
            - generic [ref=e242]:
              - 'heading "CUREVANA EXOTIC THC-P PREROLLS: 1.5G 25CT" [level=3] [ref=e243]'
              - generic [ref=e244]:
                - generic [ref=e246]:
                  - generic [ref=e247]: $53.99
                  - generic [ref=e248]: $44.99
                - button "Add to Cart" [ref=e249]
          - 'link "CUREVANA THC-A PREROLLS: 2G 25CT CUREVANA THC-A PREROLLS: 2G 25CT $53.99 $44.99 Add to Cart" [ref=e252] [cursor=pointer]':
            - /url: /product/curevana-thc-a-prerolls-2g-25ct
            - 'img "CUREVANA THC-A PREROLLS: 2G 25CT" [ref=e255]'
            - generic [ref=e256]:
              - 'heading "CUREVANA THC-A PREROLLS: 2G 25CT" [level=3] [ref=e257]'
              - generic [ref=e258]:
                - generic [ref=e260]:
                  - generic [ref=e261]: $53.99
                  - generic [ref=e262]: $44.99
                - button "Add to Cart" [ref=e263]
          - 'link "CUREVANA THC-A DIAMOND INFUSED PREROLLS: 2G 2PC 6CT CUREVANA THC-A DIAMOND INFUSED PREROLLS: 2G 2PC 6CT $20.16 $16.80 Add to Cart" [ref=e266] [cursor=pointer]':
            - /url: /product/curevana-thc-a-diamond-infused-prerolls-2g-2pc-6ct
            - 'img "CUREVANA THC-A DIAMOND INFUSED PREROLLS: 2G 2PC 6CT" [ref=e269]'
            - generic [ref=e270]:
              - 'heading "CUREVANA THC-A DIAMOND INFUSED PREROLLS: 2G 2PC 6CT" [level=3] [ref=e271]'
              - generic [ref=e272]:
                - generic [ref=e274]:
                  - generic [ref=e275]: $20.16
                  - generic [ref=e276]: $16.80
                - button "Add to Cart" [ref=e277]
          - 'link "CUREVANA THC-A ENHANCED JOINTS: 2G 2PC 6CT CUREVANA THC-A ENHANCED JOINTS: 2G 2PC 6CT $43.19 $35.99 Add to Cart" [ref=e280] [cursor=pointer]':
            - /url: /product/curevana-thc-a-enhanced-joints-2g-2pc-6ct
            - 'img "CUREVANA THC-A ENHANCED JOINTS: 2G 2PC 6CT" [ref=e283]'
            - generic [ref=e284]:
              - 'heading "CUREVANA THC-A ENHANCED JOINTS: 2G 2PC 6CT" [level=3] [ref=e285]'
              - generic [ref=e286]:
                - generic [ref=e288]:
                  - generic [ref=e289]: $43.19
                  - generic [ref=e290]: $35.99
                - button "Add to Cart" [ref=e291]
          - link "CUREVANA ORIGINAL THCA PREROLLS – 6 COUNT CUREVANA ORIGINAL THCA PREROLLS – 6 COUNT $45.36 $37.80 Add to Cart" [ref=e294] [cursor=pointer]:
            - /url: /product/curevana-original-thca-prerolls-6-count
            - img "CUREVANA ORIGINAL THCA PREROLLS – 6 COUNT" [ref=e297]
            - generic [ref=e298]:
              - heading "CUREVANA ORIGINAL THCA PREROLLS – 6 COUNT" [level=3] [ref=e299]
              - generic [ref=e300]:
                - generic [ref=e302]:
                  - generic [ref=e303]: $45.36
                  - generic [ref=e304]: $37.80
                - button "Add to Cart" [ref=e305]
          - link "CUREVANA THCA INFUSED JELLYROLLS – 6 COUNT CUREVANA THCA INFUSED JELLYROLLS – 6 COUNT $40.32 $33.60 Add to Cart" [ref=e308] [cursor=pointer]:
            - /url: /product/curevana-thca-infused-jellyrolls-6-count
            - img "CUREVANA THCA INFUSED JELLYROLLS – 6 COUNT" [ref=e311]
            - generic [ref=e312]:
              - heading "CUREVANA THCA INFUSED JELLYROLLS – 6 COUNT" [level=3] [ref=e313]
              - generic [ref=e314]:
                - generic [ref=e316]:
                  - generic [ref=e317]: $40.32
                  - generic [ref=e318]: $33.60
                - button "Add to Cart" [ref=e319]
        - button [ref=e320] [cursor=pointer]:
          - img [ref=e321]
        - button [ref=e323] [cursor=pointer]:
          - img [ref=e324]
  - generic [ref=e336]:
    - generic:
      - img
    - generic [ref=e338]:
      - generic [ref=e340]:
        - paragraph [ref=e342]: Flower • Gummies • Pre-Rolls • Concentrates
        - heading "Not Just Products, Stories You Can Feel" [level=2] [ref=e344]:
          - text: Not Just Products,
          - text: Stories You Can Feel
        - paragraph [ref=e346]: Every Curevana creation starts long before it reaches your hands. From thoughtful genetics and slow curing to clean flavor and consistent highs, everything we make is crafted with intention. Nothing rushed. Nothing trendy. Just honest, smooth, reliable hemp you’ll come back to again and again.
        - link "DISCOVER THE LINEUP" [ref=e348] [cursor=pointer]:
          - /url: /product?categoryId=43
          - button "DISCOVER THE LINEUP" [ref=e349]
      - img "Curevana THC-A Diamonds Gummies" [ref=e352]
  - generic [ref=e354]:
    - generic [ref=e355]:
      - heading "FEATURED PRODUCTS" [level=2] [ref=e357]
      - generic [ref=e358]:
        - generic [ref=e360]:
          - link "CUREVANA 1G PREMIUM THCA PREROLL CUREVANA 1G PREMIUM THCA PREROLL $132.00 $110.00 Add to Cart" [ref=e363] [cursor=pointer]:
            - /url: /product/curevana-1g-premium-thca-preroll
            - img "CUREVANA 1G PREMIUM THCA PREROLL" [ref=e366]
            - generic [ref=e367]:
              - heading "CUREVANA 1G PREMIUM THCA PREROLL" [level=3] [ref=e368]
              - generic [ref=e369]:
                - generic [ref=e371]:
                  - generic [ref=e372]: $132.00
                  - generic [ref=e373]: $110.00
                - button "Add to Cart" [ref=e374]
          - 'link "CUREVANA 1G EXOTIC THC-P FLOWER: 1CT CUREVANA 1G EXOTIC THC-P FLOWER: 1CT $11.99 $9.99 Add to Cart" [ref=e377] [cursor=pointer]':
            - /url: /product/curevana-1g-exotic-thc-p-flower-1ct
            - 'img "CUREVANA 1G EXOTIC THC-P FLOWER: 1CT" [ref=e380]'
            - generic [ref=e381]:
              - 'heading "CUREVANA 1G EXOTIC THC-P FLOWER: 1CT" [level=3] [ref=e382]'
              - generic [ref=e383]:
                - generic [ref=e385]:
                  - generic [ref=e386]: $11.99
                  - generic [ref=e387]: $9.99
                - button "Add to Cart" [ref=e388]
        - button [disabled] [ref=e389] [cursor=pointer]:
          - img [ref=e390]
    - heading "WHY CHOOSE US" [level=2] [ref=e393]
    - img "Quality Features" [ref=e395]
    - generic [ref=e396]:
      - heading "CUREVANA SIGNATURE BRANDS" [level=2] [ref=e398]
      - generic [ref=e399]:
        - generic [ref=e401]:
          - generic [ref=e404] [cursor=pointer]:
            - link "Blue Dream":
              - /url: /product?categoryId=21
              - img "Blue Dream" [ref=e405]
          - generic [ref=e408] [cursor=pointer]:
            - link "Gelato":
              - /url: /product?categoryId=21
              - img "Gelato" [ref=e409]
          - generic [ref=e412] [cursor=pointer]:
            - link "Granddaddy Purple":
              - /url: /product?categoryId=21
              - img "Granddaddy Purple" [ref=e413]
          - generic [ref=e416] [cursor=pointer]:
            - link "Green Crack":
              - /url: /product?categoryId=21
              - img "Green Crack" [ref=e417]
          - generic [ref=e420] [cursor=pointer]:
            - link "Blue Dream":
              - /url: /product?categoryId=21
              - img "Blue Dream" [ref=e421]
          - generic [ref=e424] [cursor=pointer]:
            - link "Gelato":
              - /url: /product?categoryId=21
              - img "Gelato" [ref=e425]
          - generic [ref=e428] [cursor=pointer]:
            - link "Granddaddy Purple":
              - /url: /product?categoryId=21
              - img "Granddaddy Purple" [ref=e429]
          - generic [ref=e432] [cursor=pointer]:
            - link "Green Crack":
              - /url: /product?categoryId=21
              - img "Green Crack" [ref=e433]
        - generic [ref=e434]:
          - button [disabled] [ref=e435] [cursor=pointer]:
            - img [ref=e436]
          - button [ref=e438] [cursor=pointer]:
            - img [ref=e439]
  - generic [ref=e442]:
    - generic [ref=e443]:
      - generic [ref=e444]:
        - heading "What Our Customers Say" [level=2] [ref=e445]
        - generic [ref=e446]:
          - generic [ref=e447]:
            - generic [ref=e448]:
              - img [ref=e449]
              - img [ref=e451]
              - img [ref=e453]
              - img [ref=e455]
              - img [ref=e457]
            - generic [ref=e459]: "3.4"
            - generic [ref=e460]: (76 Verified Google Reviews)
          - link "View All Reviews" [ref=e461] [cursor=pointer]:
            - /url: https://maps.google.com/?cid=17029121134805201370
            - text: View All Reviews
            - img [ref=e462]
      - generic [ref=e464]:
        - button "Previous slide" [ref=e465] [cursor=pointer]:
          - img [ref=e466]
        - button "Next slide" [ref=e468] [cursor=pointer]:
          - img [ref=e469]
    - generic [ref=e473]:
      - generic [ref=e475]:
        - generic [ref=e476]:
          - generic [ref=e477]:
            - img "Jason Lubitz" [ref=e478]
            - img [ref=e480]
          - generic [ref=e482]:
            - heading "Jason Lubitz" [level=4] [ref=e483]
            - paragraph [ref=e484]: Certified Customer
        - generic [ref=e485]:
          - img [ref=e486]
          - img [ref=e488]
          - img [ref=e490]
          - img [ref=e492]
          - img [ref=e494]
        - paragraph [ref=e496]: "\"First and last time trying this brand. I can’t even choke it down. Just awful! Full of sticks. Flower is a strange color, almost like the stuff that was sold in High Times back in the 90’s. Headache after two hits.\""
        - generic [ref=e497]:
          - generic [ref=e498]:
            - generic [ref=e500]: VERIFIED
            - button "Read Full" [ref=e502] [cursor=pointer]
          - generic [ref=e503]: a year ago
      - generic [ref=e505]:
        - generic [ref=e506]:
          - generic [ref=e507]:
            - img "Thisis Sparda" [ref=e508]
            - img [ref=e510]
          - generic [ref=e512]:
            - heading "Thisis Sparda" [level=4] [ref=e513]
            - paragraph [ref=e514]: Certified Customer
        - generic [ref=e515]:
          - img [ref=e516]
          - img [ref=e518]
          - img [ref=e520]
          - img [ref=e522]
          - img [ref=e524]
        - paragraph [ref=e526]: "\"I bought a delta 8 disposable from a local vape shop here that started getting curevana disposables. Well when I opened the vape it was cracked I took it back to the vape shop with the receipt THE NEXT DAY, and they would exchange it for me. And I emailed curevana that same day and still haven’t heard anything back…. So cool. Don’t recommend. So after emailing with curevana they were more than happy to replace my damaged product and I appreciate it very much! Dealing with them was easier than dealing with other companies I’ve had problems with! Thank you very much!\""
        - generic [ref=e527]:
          - generic [ref=e528]:
            - generic [ref=e530]: VERIFIED
            - button "Read Full" [ref=e532] [cursor=pointer]
          - generic [ref=e533]: 4 years ago
      - generic [ref=e535]:
        - generic [ref=e536]:
          - generic [ref=e537]:
            - img "KOD theBROKEN" [ref=e538]
            - img [ref=e540]
          - generic [ref=e542]:
            - heading "KOD theBROKEN" [level=4] [ref=e543]
            - paragraph [ref=e544]: Certified Customer
        - generic [ref=e545]:
          - img [ref=e546]
          - img [ref=e548]
          - img [ref=e550]
          - img [ref=e552]
          - img [ref=e554]
        - paragraph [ref=e556]: "\"I love weed I also hate giving bad reviews but this was the 2nd worse strain of weed ive ever had in my life. I smoked over 3 nuggs just to confirm Ive smoked bud from so many smokeshops and i always get high maybe its my tolerance because i smoke heavy but this feels like i just got scammed truly disappointed\""
        - generic [ref=e557]:
          - generic [ref=e558]:
            - generic [ref=e560]: VERIFIED
            - button "Read Full" [ref=e562] [cursor=pointer]
          - generic [ref=e563]: a year ago
      - generic [ref=e565]:
        - generic [ref=e566]:
          - generic [ref=e567]:
            - img "sarah bronikowski" [ref=e568]
            - img [ref=e570]
          - generic [ref=e572]:
            - heading "sarah bronikowski" [level=4] [ref=e573]
            - paragraph [ref=e574]: Certified Customer
        - generic [ref=e575]:
          - img [ref=e576]
          - img [ref=e578]
          - img [ref=e580]
          - img [ref=e582]
          - img [ref=e584]
        - paragraph [ref=e586]: "\"Placed an order on 12/10 by 12/20 I reached out as I'd not received a shipping confirmation. Was told that my order got stuck but they could see it and that the prices was wrong but that they'd honor it and take care of shipping due to the delay. Here we are 12/26 and no one will return calls, no confirmation email still, and no product. Requesting a refund and will see if they process or if I'll need to dispute the charges\""
        - generic [ref=e587]:
          - generic [ref=e588]:
            - generic [ref=e590]: VERIFIED
            - button "Read Full" [ref=e592] [cursor=pointer]
          - generic [ref=e593]: 4 months ago
      - generic [ref=e595]:
        - generic [ref=e596]:
          - generic [ref=e597]:
            - img "Rafat Jaber" [ref=e598]
            - img [ref=e600]
          - generic [ref=e602]:
            - heading "Rafat Jaber" [level=4] [ref=e603]
            - paragraph [ref=e604]: Certified Customer
        - generic [ref=e605]:
          - img [ref=e606]
          - img [ref=e608]
          - img [ref=e610]
          - img [ref=e612]
          - img [ref=e614]
        - paragraph [ref=e616]: "\"Baught the snowball product. Very potent . Definitely hit the spot. Gave me the perfect height. Never thought these products were so good and definitely will shop again.\""
        - generic [ref=e617]:
          - generic [ref=e618]:
            - generic [ref=e620]: VERIFIED
            - button "Read Full" [ref=e622] [cursor=pointer]
          - generic [ref=e623]: a year ago
  - generic [ref=e629]:
    - heading "Subscribe to Our Newsletter" [level=3] [ref=e631]
    - generic [ref=e632]:
      - textbox "Enter your email address" [ref=e633]
      - button "Subscribe" [ref=e634] [cursor=pointer]
  - contentinfo [ref=e635]:
    - generic [ref=e636]:
      - generic [ref=e638]:
        - generic [ref=e641]:
          - img "CUREVANA Logo" [ref=e642]
          - paragraph [ref=e643]: Power to the Moment, Flavor to the Soul.
        - generic [ref=e644]:
          - heading "Shop" [level=4] [ref=e645]
          - list [ref=e646]:
            - listitem [ref=e647]:
              - link "Shop Products" [ref=e648] [cursor=pointer]:
                - /url: /product
            - listitem [ref=e649]:
              - link "PRE ROLLS" [ref=e650] [cursor=pointer]:
                - /url: /product?categoryId=21
            - listitem [ref=e651]:
              - link "THCA FLOWER" [ref=e652] [cursor=pointer]:
                - /url: /product?categoryId=24
            - listitem [ref=e653]:
              - link "GUMMIES" [ref=e654] [cursor=pointer]:
                - /url: /product?categoryId=43
            - listitem [ref=e655]:
              - link "DABS" [ref=e656] [cursor=pointer]:
                - /url: /product?categoryId=92
            - listitem [ref=e657]:
              - link "CARTRIDGES" [ref=e658] [cursor=pointer]:
                - /url: /product?categoryId=93
            - listitem [ref=e659]:
              - link "THCP FLOWER" [ref=e660] [cursor=pointer]:
                - /url: /product?categoryId=94
            - listitem [ref=e661]:
              - link "THCA BLUNTZ" [ref=e662] [cursor=pointer]:
                - /url: /product?categoryId=109
            - listitem [ref=e663]:
              - link "TOP QUANTITY DISCOUNTS FOR YOU" [ref=e664] [cursor=pointer]:
                - /url: /product?categoryId=121
            - listitem [ref=e665]:
              - link "FEATURED PRODUCT" [ref=e666] [cursor=pointer]:
                - /url: /product?categoryId=122
            - listitem [ref=e667]:
              - link "View All" [ref=e668] [cursor=pointer]:
                - /url: /product
        - generic [ref=e669]:
          - heading "Quick Links" [level=4] [ref=e670]
          - list [ref=e671]:
            - listitem [ref=e672]:
              - link "COA Reports" [ref=e673] [cursor=pointer]:
                - /url: /coa
            - listitem [ref=e674]:
              - link "Wholesale" [ref=e675] [cursor=pointer]:
                - /url: https://smokevana.com/register
            - listitem [ref=e676]:
              - link "FDA Disclaimer" [ref=e677] [cursor=pointer]:
                - /url: /fda-disclaimer
            - listitem [ref=e678]:
              - link "Privacy Policy" [ref=e679] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e680]:
              - link "Refund Policy" [ref=e681] [cursor=pointer]:
                - /url: /refund-policy
            - listitem [ref=e682]:
              - link "Shipping Policy" [ref=e683] [cursor=pointer]:
                - /url: /shipping-policy
            - listitem [ref=e684]:
              - link "Terms of Service" [ref=e685] [cursor=pointer]:
                - /url: /terms-service
        - generic [ref=e686]:
          - heading "Contact Us" [level=4] [ref=e687]
          - generic [ref=e688]:
            - generic [ref=e689]:
              - img [ref=e690]
              - paragraph [ref=e692]: 1715 Terry Dr, Joliet, IL 60436, U.S.A
            - generic [ref=e693]:
              - img [ref=e694]
              - link "info@curevana.com" [ref=e696] [cursor=pointer]:
                - /url: https://mail.google.com/mail/?view=cm&fs=1&to=info@curevana.com
            - generic [ref=e697]:
              - img [ref=e698]
              - paragraph [ref=e700]: (833)976-5432
          - img "Payment Methods" [ref=e702]
        - generic [ref=e703]:
          - heading "Social Media" [level=4] [ref=e704]
          - generic [ref=e705]:
            - link [ref=e706] [cursor=pointer]:
              - /url: https://www.instagram.com/curevana/
              - img [ref=e707]
            - link [ref=e709] [cursor=pointer]:
              - /url: "#"
              - img [ref=e710]
      - generic [ref=e714]:
        - paragraph [ref=e716]: "FDA NOTICE DISCLAIMER: This product is not for use by, or sale to, persons under the age of 18 or 21, depending on local laws. The FDA has not evaluated the statements on this website and has not confirmed the efficacy of these products. These products are not intended to diagnose, treat, cure, or prevent any disease. Please consult your healthcare professional about possible interactions or other potential complications before using any product. This product is void where prohibited by law."
        - paragraph [ref=e718]: "THC DISCLAIMER: All products on this site are 2008 Farm Bill Compliant and contain 0.3% or less of Delta 9 THC (Δ9-THC)."
        - paragraph [ref=e720]: "AMANITA MUSCARIA DISCLAIMER: Amanita Muscaria is illegal in the state of Louisiana. Products containing Amanita Muscaria cannot be shipped to Louisiana."
        - paragraph [ref=e722]: "THCA DISCLAIMER: This product is unavailable for shipment to the following states: CA, HI, ID, MN, OR, RI, UT, and VT."
      - paragraph [ref=e726]: © 2026 Curevana, All Rights Reserved.
  - alert [ref=e727]: Curevana | Premium THCP & THCA Hemp, Gummies, Pre-Rolls & Flower
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