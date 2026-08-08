-- PLACEHOLDER content so the site is demoable before real content arrives.
-- Everything here is clearly fake and should be replaced from the /admin
-- dashboard once real products, prices and photos are ready.

UPDATE settings SET
  business_name     = 'Darim Luxe Cosmetics',
  phone              = '0700 000 000',            -- PLACEHOLDER
  whatsapp_number    = '254700000000',              -- PLACEHOLDER
  email              = 'hello@darimcosmetics.co.ke', -- PLACEHOLDER
  address             = '[Your shop address], Nairobi, Kenya', -- PLACEHOLDER
  hours              = 'Mon–Sat 9:00 AM – 7:00 PM, Sun 11:00 AM – 4:00 PM', -- PLACEHOLDER
  map_url            = 'https://maps.google.com',   -- PLACEHOLDER
  instagram_url      = 'https://instagram.com/darimluxe', -- PLACEHOLDER
  announcement_text  = 'Order via WhatsApp for same-day Nairobi delivery'
WHERE id = 1;

INSERT OR IGNORE INTO categories (id, name, description, sort_order) VALUES
  ('skincare',   'Skincare',            'Cleansers, serums and moisturisers for every skin type.', 1),
  ('haircare',   'Haircare',            'Shampoo, treatments and styling for every hair texture.', 2),
  ('makeup',     'Makeup',              'Face, eyes and lips.', 3),
  ('body-fragrance', 'Body & Fragrance', 'Body oils, lotions, wash and signature scents.', 4),
  ('baby-care',  'Baby Care',           'Gentle formulas for babies and children.', 5),
  ('mens-care',  'Men''s Grooming',     'Beard, face and hair care for men.', 6);

INSERT OR IGNORE INTO products
  (id, name, category_id, price_kes, short_description, description, image_url, in_stock, featured, status)
VALUES
  ('hydrating-facial-serum', 'Hydrating Facial Serum [SAMPLE]', 'skincare', 2500,
   'Lightweight daily serum for dry or dehydrated skin.',
   'PLACEHOLDER PRODUCT — replace with your real product details from the admin dashboard. A lightweight, fast-absorbing serum formulated to boost hydration and leave skin visibly smoother.',
   NULL, 1, 1, 'published'),
  ('repair-hair-mask', 'Deep Repair Hair Mask [SAMPLE]', 'haircare', 1800,
   'Weekly deep-conditioning treatment for dry or damaged hair.',
   'PLACEHOLDER PRODUCT — replace with your real product details from the admin dashboard. A rich weekly treatment that restores moisture and strength to dry, damaged or chemically treated hair.',
   NULL, 1, 1, 'published'),
  ('matte-lipstick', 'Matte Lipstick [SAMPLE]', 'makeup', 1200,
   'Long-wearing matte lipstick in everyday shades.',
   'PLACEHOLDER PRODUCT — replace with your real product details from the admin dashboard. A comfortable, long-wearing matte finish that does not dry out the lips.',
   NULL, 1, 0, 'published'),
  ('nourishing-body-oil', 'Nourishing Body Oil [SAMPLE]', 'body-fragrance', 1500,
   'Fast-absorbing body oil for soft, glowing skin.',
   'PLACEHOLDER PRODUCT — replace with your real product details from the admin dashboard.',
   NULL, 1, 1, 'published');

INSERT OR IGNORE INTO pages (id, title, content, seo_title, seo_description) VALUES
  ('about', 'About Us',
   'PLACEHOLDER — replace this text from the admin dashboard.\n\nDarim Luxe Cosmetics was founded to make genuine, high-quality beauty products and honest expert advice accessible to every Kenyan — online and in person.',
   'About Us | Darim Luxe Cosmetics',
   'Learn about Darim Luxe Cosmetics, Kenya''s home for quality skincare, haircare, makeup and body care.'),
  ('contact', 'Contact & Visit Us',
   'PLACEHOLDER — replace this text from the admin dashboard.',
   'Contact Us | Darim Luxe Cosmetics',
   'Get in touch with Darim Luxe Cosmetics or find directions to our store.');
