import { supabase } from "./supabase";

export async function fetchPublishedPosts() {
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
