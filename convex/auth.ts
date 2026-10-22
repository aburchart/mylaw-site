import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get user's role
export const getUserRole = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const userRole = await ctx.db
      .query("user_roles")
      .withIndex("user_id")
      .filter((q) => q.eq(q.field("user_id"), args.userId))
      .first();
    
    return userRole?.role || "user";
  },
});

// Check if user is admin
export const isAdmin = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const userRole = await ctx.db
      .query("user_roles")
      .withIndex("user_id")
      .filter((q) => q.eq(q.field("user_id"), args.userId))
      .first();
    
    return userRole?.role === "admin";
  },
});

// Set user role (for admin management)
export const setUserRole = mutation({
  args: {
    userId: v.string(),
    role: v.string(), // "admin" | "user"
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("user_roles")
      .withIndex("user_id")
      .filter((q) => q.eq(q.field("user_id"), args.userId))
      .first();
    
    const now = new Date().toISOString();
    
    if (existing) {
      await ctx.db.patch(existing._id, {
        role: args.role,
        updated_at: now,
      });
      return existing._id;
    } else {
      return await ctx.db.insert("user_roles", {
        user_id: args.userId,
        role: args.role,
        created_at: now,
        updated_at: now,
      });
    }
  },
});

// Remove user role
export const removeUserRole = mutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("user_roles")
      .withIndex("user_id")
      .filter((q) => q.eq(q.field("user_id"), args.userId))
      .first();
    
    if (existing) {
      await ctx.db.delete(existing._id);
      return existing._id;
    }
    return null;
  },
});
