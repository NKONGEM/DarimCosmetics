import { getDB } from "./db";

export interface Category {
  id: string;
  name: string;
  description: string | null;
  sort_order: number;
}

export interface Product {
  id: string;
  name: string;
  category_id: string;
  price_kes: number | null;
  short_description: string | null;
  description: string | null;
  image_url: string | null;
  in_stock: number;
  featured: number;
  status: "draft" | "published";
  seo_title: string | null;
  seo_description: string | null;
}

export interface Settings {
  id: number;
  business_name: string;
  phone: string | null;
  whatsapp_number: string | null;
  email: string | null;
  address: string | null;
  hours: string | null;
  map_url: string | null;
  instagram_url: string | null;
  facebook_url: string | null;
  tiktok_url: string | null;
  announcement_text: string | null;
}

export interface PageContent {
  id: string;
  title: string;
  content: string | null;
  seo_title: string | null;
  seo_description: string | null;
}

// ── Reads (used by the public site and the admin dashboard) ───────────────

export async function getSettings(): Promise<Settings> {
  const db = getDB();
  const row = await db.prepare("SELECT * FROM settings WHERE id = 1").first<Settings>();
  if (!row) throw new Error("Site settings row is missing — run schema.sql + seed.sql.");
  return row;
}

export async function getCategories(): Promise<Category[]> {
  const db = getDB();
  const { results } = await db.prepare("SELECT * FROM categories ORDER BY sort_order").all<Category>();
  return results;
}

export async function getCategory(id: string): Promise<Category | null> {
  const db = getDB();
  return db.prepare("SELECT * FROM categories WHERE id = ?").bind(id).first<Category>();
}

export async function getProducts(
  opts: { status?: "draft" | "published" | "all"; categoryId?: string; featuredOnly?: boolean } = {}
): Promise<Product[]> {
  const { status = "published", categoryId, featuredOnly = false } = opts;
  const db = getDB();
  const clauses: string[] = [];
  const params: unknown[] = [];

  if (status !== "all") {
    clauses.push("status = ?");
    params.push(status);
  }
  if (categoryId) {
    clauses.push("category_id = ?");
    params.push(categoryId);
  }
  if (featuredOnly) {
    clauses.push("featured = 1");
  }

  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
  const { results } = await db
    .prepare(`SELECT * FROM products ${where} ORDER BY updated_at DESC`)
    .bind(...params)
    .all<Product>();
  return results;
}

export async function getProduct(id: string): Promise<Product | null> {
  const db = getDB();
  return db.prepare("SELECT * FROM products WHERE id = ?").bind(id).first<Product>();
}

export async function getPage(id: string): Promise<PageContent | null> {
  const db = getDB();
  return db.prepare("SELECT * FROM pages WHERE id = ?").bind(id).first<PageContent>();
}

export interface Message {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  is_read: number;
  created_at: string;
}

export async function getMessages(): Promise<Message[]> {
  const db = getDB();
  const { results } = await db.prepare("SELECT * FROM messages ORDER BY created_at DESC").all<Message>();
  return results;
}

export async function markMessageRead(id: number): Promise<void> {
  const db = getDB();
  await db.prepare("UPDATE messages SET is_read = 1 WHERE id = ?").bind(id).run();
}

// This one is called from the public Contact page's form, so it stays
// separate from the "admin only" writes below.
export async function createMessage(data: { name: string; email: string; phone?: string; message: string }): Promise<void> {
  const db = getDB();
  await db
    .prepare("INSERT INTO messages (name, email, phone, message) VALUES (?,?,?,?)")
    .bind(data.name, data.email, data.phone ?? null, data.message)
    .run();
}

// ── Writes (used only by the admin dashboard, which is behind Clerk login) ─

export async function upsertProduct(product: Product): Promise<void> {
  const db = getDB();
  const existing = await db.prepare("SELECT id FROM products WHERE id = ?").bind(product.id).first();
  if (existing) {
    await db
      .prepare(
        `UPDATE products SET name=?, category_id=?, price_kes=?, short_description=?, description=?,
         image_url=?, in_stock=?, featured=?, status=?, seo_title=?, seo_description=?, updated_at=datetime('now')
         WHERE id=?`
      )
      .bind(
        product.name,
        product.category_id,
        product.price_kes,
        product.short_description,
        product.description,
        product.image_url,
        product.in_stock,
        product.featured,
        product.status,
        product.seo_title,
        product.seo_description,
        product.id
      )
      .run();
  } else {
    await db
      .prepare(
        `INSERT INTO products
         (id, name, category_id, price_kes, short_description, description, image_url, in_stock, featured, status, seo_title, seo_description)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`
      )
      .bind(
        product.id,
        product.name,
        product.category_id,
        product.price_kes,
        product.short_description,
        product.description,
        product.image_url,
        product.in_stock,
        product.featured,
        product.status,
        product.seo_title,
        product.seo_description
      )
      .run();
  }
}

export async function deleteProduct(id: string): Promise<void> {
  const db = getDB();
  await db.prepare("DELETE FROM products WHERE id = ?").bind(id).run();
}

export async function updatePage(id: string, data: Partial<PageContent>): Promise<void> {
  const db = getDB();
  await db
    .prepare(
      `UPDATE pages SET title=?, content=?, seo_title=?, seo_description=?, updated_at=datetime('now') WHERE id=?`
    )
    .bind(data.title, data.content, data.seo_title, data.seo_description, id)
    .run();
}

export async function updateSettings(data: Partial<Settings>): Promise<void> {
  const db = getDB();
  await db
    .prepare(
      `UPDATE settings SET business_name=?, phone=?, whatsapp_number=?, email=?, address=?, hours=?,
       map_url=?, instagram_url=?, facebook_url=?, tiktok_url=?, announcement_text=? WHERE id=1`
    )
    .bind(
      data.business_name,
      data.phone,
      data.whatsapp_number,
      data.email,
      data.address,
      data.hours,
      data.map_url,
      data.instagram_url,
      data.facebook_url,
      data.tiktok_url,
      data.announcement_text
    )
    .run();
}
