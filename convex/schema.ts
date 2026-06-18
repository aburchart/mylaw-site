import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  blog_posts: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.optional(v.string()),
    category: v.optional(v.string()),
    featured_image: v.optional(v.string()),
    published: v.optional(v.boolean()),
    published_at: v.optional(v.string()),
    author_id: v.optional(v.string()),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  })
    .index("slug", ["slug"])
    .index("published", ["published"])
    .index("published_at", ["published_at"]),

  user_roles: defineTable({
    user_id: v.string(),
    role: v.string(), // "admin" | "user"
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  })
    .index("user_id", ["user_id"])
    .index("role", ["role"]),

  services: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    created_at: v.optional(v.string()),
  }).index("slug", ["slug"]),

  projects: defineTable({
    title: v.string(),
    slug: v.string(),
    client: v.optional(v.string()),
    summary: v.optional(v.string()),
    challenge: v.optional(v.string()),
    result: v.optional(v.string()),
    scope: v.optional(v.string()),
    materials: v.optional(v.string()),
    location: v.optional(v.string()),
    year: v.optional(v.string()),
    status: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    service_id: v.optional(v.string()),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  })
    .index("slug", ["slug"])
    .index("featured", ["featured"]),

  images: defineTable({
    file_url: v.string(),
    caption: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    sort_order: v.optional(v.number()),
    project_id: v.optional(v.string()),
    created_at: v.optional(v.string()),
  })
    .index("project_id", ["project_id"])
    .index("featured", ["featured"]),

  image_services: defineTable({
    image_id: v.optional(v.string()),
    service_id: v.optional(v.string()),
    created_at: v.optional(v.string()),
  })
    .index("image_id", ["image_id"])
    .index("service_id", ["service_id"]),

  refurbished_cranes: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    condition: v.optional(v.string()),
    price: v.optional(v.number()),
    year_manufactured: v.optional(v.string()),
    capacity: v.optional(v.string()),
    height: v.optional(v.string()),
    span: v.optional(v.string()),
    runway_length: v.optional(v.string()),
    location: v.optional(v.string()),
    image_url_1: v.optional(v.string()),
    image_url_2: v.optional(v.string()),
    image_url_3: v.optional(v.string()),
    image_url_4: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    status: v.optional(v.string()),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  })
    .index("slug", ["slug"])
    .index("featured", ["featured"]),

  job_applications: defineTable({
    full_name: v.string(),
    email: v.string(),
    phone: v.string(),
    position: v.string(),
    cover_letter: v.optional(v.string()),
    linkedin_url: v.optional(v.string()),
    resume_filename: v.string(),
    resume_url: v.string(),
    status: v.optional(v.string()),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  }).index("email", ["email"]),

  site_content: defineTable({
    key: v.string(),
    label: v.string(),
    value: v.string(),
    section: v.string(),
    content_type: v.string(),
    sort_order: v.optional(v.number()),
    created_at: v.optional(v.string()),
    updated_at: v.optional(v.string()),
  })
    .index("key", ["key"])
    .index("section", ["section"]),
});
