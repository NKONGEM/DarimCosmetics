-- Darim Luxe Cosmetics — content database schema
-- Kept intentionally simple: four tables, no unnecessary complexity.

CREATE TABLE IF NOT EXISTS categories (
  id           TEXT PRIMARY KEY,        -- e.g. "skincare"
  name         TEXT NOT NULL,           -- e.g. "Skincare"
  description  TEXT,
  sort_order   INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS products (
  id                TEXT PRIMARY KEY,         -- URL slug, e.g. "hydrating-facial-serum"
  name              TEXT NOT NULL,
  category_id       TEXT NOT NULL REFERENCES categories(id),
  price_kes         INTEGER,                  -- NULL = "Ask for price"
  short_description TEXT,
  description       TEXT,
  image_url         TEXT,
  in_stock          INTEGER NOT NULL DEFAULT 1,   -- 1 = yes, 0 = no
  featured          INTEGER NOT NULL DEFAULT 0,   -- shown on homepage
  status            TEXT NOT NULL DEFAULT 'draft', -- 'draft' | 'published'
  seo_title         TEXT,
  seo_description   TEXT,
  created_at        TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at        TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS pages (
  id               TEXT PRIMARY KEY,     -- 'about' | 'contact'
  title            TEXT NOT NULL,
  content           TEXT,                -- simple rich text / paragraphs
  seo_title         TEXT,
  seo_description   TEXT,
  updated_at        TEXT NOT NULL DEFAULT (datetime('now'))
);

-- Single-row table for site-wide settings, edited once, used everywhere
-- (header, footer, contact page).
CREATE TABLE IF NOT EXISTS settings (
  id                 INTEGER PRIMARY KEY CHECK (id = 1),
  business_name      TEXT NOT NULL DEFAULT 'Darim Luxe Cosmetics',
  phone              TEXT,
  whatsapp_number    TEXT,          -- international format, no + or spaces
  email              TEXT,
  address             TEXT,
  hours              TEXT,
  map_url            TEXT,
  instagram_url      TEXT,
  facebook_url       TEXT,
  tiktok_url         TEXT,
  announcement_text  TEXT
);

INSERT OR IGNORE INTO settings (id) VALUES (1);

-- Contact form submissions land here (visible in the admin dashboard)
-- instead of needing a separate email-sending service.
CREATE TABLE IF NOT EXISTS messages (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  message     TEXT NOT NULL,
  is_read     INTEGER NOT NULL DEFAULT 0,
  created_at  TEXT NOT NULL DEFAULT (datetime('now'))
);
