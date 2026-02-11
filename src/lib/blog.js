import { supabase } from "./supabase";

export async function fetchPublishedPosts() {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, featured_image, category, published_at")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error fetching blog posts:", error.message);
    return [];
  }

  return data;
}

export async function fetchPostBySlug(slug) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    console.error("Error fetching blog post:", error.message);
    return null;
  }

  return data;
}

export async function fetchRelatedPosts(category, excludeSlug, limit = 3) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, featured_image, category, published_at")
    .eq("status", "published")
    .eq("category", category)
    .neq("slug", excludeSlug)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching related posts:", error.message);
    return [];
  }

  return data;
}

export async function fetchRecentPosts(excludeSlug, limit = 3) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, title, slug, excerpt, featured_image, category, published_at")
    .eq("status", "published")
    .neq("slug", excludeSlug)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching recent posts:", error.message);
    return [];
  }

  return data;
}

export function extractCategories(posts) {
  return [...new Set(posts.map((p) => p.category).filter(Boolean))].sort();
}

export function estimateReadingTime(htmlContent) {
  if (!htmlContent) return 0;
  const text = htmlContent.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
