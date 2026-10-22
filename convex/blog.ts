import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// List all published blog posts
export const list = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db
      .query("blog_posts")
      .withIndex("published")
      .filter((q) => q.eq(q.field("published"), true))
      .collect();
    
    // Sort by published_at descending
    return posts.sort((a, b) => {
      const dateA = a.published_at || "";
      const dateB = b.published_at || "";
      return dateB.localeCompare(dateA);
    });
  },
});

// Get a single blog post by slug
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("blog_posts")
      .withIndex("slug")
      .filter((q) => q.eq(q.field("slug"), args.slug))
      .first();
    
    return post;
  },
});

// Get all blog posts (including unpublished) - for admin
export const listAll = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query("blog_posts").collect();
    return posts.sort((a, b) => {
      const dateA = a.created_at || "";
      const dateB = b.created_at || "";
      return dateB.localeCompare(dateA);
    });
  },
});

// Get a single blog post by ID - for admin
export const getById = query({
  args: { id: v.id("blog_posts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// Create a new blog post
export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    excerpt: v.optional(v.string()),
    category: v.optional(v.string()),
    featured_image: v.optional(v.string()),
    published: v.optional(v.boolean()),
    published_at: v.optional(v.string()),
    author_id: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = new Date().toISOString();
    const postId = await ctx.db.insert("blog_posts", {
      ...args,
      created_at: now,
      updated_at: now,
    });
    return postId;
  },
});

// Update a blog post
export const update = mutation({
  args: {
    id: v.id("blog_posts"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    content: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    category: v.optional(v.string()),
    featured_image: v.optional(v.string()),
    published: v.optional(v.boolean()),
    published_at: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, {
      ...updates,
      updated_at: new Date().toISOString(),
    });
    return id;
  },
});

// Delete a blog post
export const remove = mutation({
  args: { id: v.id("blog_posts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
    return args.id;
  },
});
