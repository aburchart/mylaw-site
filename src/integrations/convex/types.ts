import type { Id } from "../../../convex/_generated/dataModel";

// Re-export types from Convex generated code
export type { Id } from "../../../convex/_generated/dataModel";

// Blog Post types
export interface BlogPost {
  _id: Id<"blog_posts">;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category?: string;
  featured_image?: string;
  published?: boolean;
  published_at?: string;
  author_id?: string;
  created_at?: string;
  updated_at?: string;
}

export type BlogPostInsert = Omit<BlogPost, "_id" | "created_at" | "updated_at">;
export type BlogPostUpdate = Partial<Omit<BlogPost, "_id" | "created_at" | "updated_at">>;

// User Role types
export interface UserRole {
  _id: Id<"user_roles">;
  user_id: string;
  role: "admin" | "user";
  created_at?: string;
  updated_at?: string;
}

// Service types
export interface Service {
  _id: Id<"services">;
  name: string;
  slug: string;
  description?: string;
  created_at?: string;
}

// Project types
export interface Project {
  _id: Id<"projects">;
  title: string;
  slug: string;
  client?: string;
  summary?: string;
  challenge?: string;
  result?: string;
  scope?: string;
  materials?: string;
  location?: string;
  year?: string;
  status?: string;
  featured?: boolean;
  service_id?: string;
  created_at?: string;
  updated_at?: string;
}

// Image types
export interface Image {
  _id: Id<"images">;
  file_url: string;
  caption?: string;
  featured?: boolean;
  sort_order?: number;
  project_id?: string;
  created_at?: string;
}

// Refurbished Crane types
export interface RefurbishedCrane {
  _id: Id<"refurbished_cranes">;
  name: string;
  slug: string;
  description?: string;
  condition?: string;
  price?: number;
  year_manufactured?: string;
  capacity?: string;
  height?: string;
  span?: string;
  runway_length?: string;
  location?: string;
  image_url_1?: string;
  image_url_2?: string;
  image_url_3?: string;
  image_url_4?: string;
  featured?: boolean;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

// Job Application types
export interface JobApplication {
  _id: Id<"job_applications">;
  full_name: string;
  email: string;
  phone: string;
  position: string;
  cover_letter?: string;
  linkedin_url?: string;
  resume_filename: string;
  resume_url: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

// Site Content types
export interface SiteContent {
  _id: Id<"site_content">;
  key: string;
  label: string;
  value: string;
  section: string;
  content_type: string;
  sort_order?: number;
  created_at?: string;
  updated_at?: string;
}
