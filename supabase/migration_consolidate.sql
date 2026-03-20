-- ============================================================================
-- Orchestra Supabase Consolidation Migration
-- ============================================================================
-- Safe, idempotent script — can be re-run without breaking anything.
-- Run this in: Supabase Dashboard > SQL Editor
-- ============================================================================


-- --------------------------------------------------------------------------
-- 1. ENUM TYPE
-- --------------------------------------------------------------------------
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'user');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;


-- --------------------------------------------------------------------------
-- 2. TABLES — create if not exists (before functions that reference them)
-- --------------------------------------------------------------------------

-- profiles
CREATE TABLE IF NOT EXISTS public.profiles (
  id         uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name text NOT NULL DEFAULT '',
  last_name  text NOT NULL DEFAULT '',
  email      text NOT NULL DEFAULT '',
  approved   boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- user_roles
CREATE TABLE IF NOT EXISTS public.user_roles (
  id      uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role    public.app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- user_permissions
CREATE TABLE IF NOT EXISTS public.user_permissions (
  id           uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
  user_id      uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  can_generate boolean NOT NULL DEFAULT true,
  can_publish  boolean NOT NULL DEFAULT false,
  can_edit     boolean NOT NULL DEFAULT true,
  can_delete   boolean NOT NULL DEFAULT false
);

-- blog_ai_settings
CREATE TABLE IF NOT EXISTS public.blog_ai_settings (
  id         uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
  site       text NOT NULL UNIQUE CHECK (site = ANY (ARRAY['charity','private'])),
  topics     jsonb DEFAULT '[]'::jsonb,
  guidelines text DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

-- blog_posts_private
CREATE TABLE IF NOT EXISTS public.blog_posts_private (
  id                uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
  title             text NOT NULL,
  slug              text NOT NULL,
  excerpt           text,
  content           text,
  category          text DEFAULT 'Sector',
  author            text,
  featured_image    text,
  status            text DEFAULT 'draft',
  focus_keyword     text,
  meta_description  text,
  target_audience   text,
  published_at      timestamptz,
  scheduled_at      timestamptz,
  created_at        timestamptz DEFAULT now(),
  updated_at        timestamptz DEFAULT now(),
  storyline_prompt  text,
  hook              text,
  extra_inputs      jsonb DEFAULT '{}'::jsonb,
  feedback_history  jsonb DEFAULT '[]'::jsonb,
  step              text DEFAULT 'concept',
  linkedin_post     text,
  tags              text[] DEFAULT '{}'::text[]
);

-- contact_messages_private
CREATE TABLE IF NOT EXISTS public.contact_messages_private (
  id           uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
  name         text NOT NULL,
  organization text,
  email        text NOT NULL,
  phone        text,
  subject      text,
  message      text NOT NULL,
  status       text DEFAULT 'nieuw',
  notes        text,
  created_at   timestamptz DEFAULT now()
);

-- post_views
CREATE TABLE IF NOT EXISTS public.post_views (
  id        uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
  post_id   uuid NOT NULL,
  viewed_at timestamptz NOT NULL DEFAULT now(),
  source    text DEFAULT 'charity'
);

-- blog_posts (full schema including CMS/AI/dashboard fields)
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id                uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
  title             text NOT NULL,
  slug              text NOT NULL UNIQUE,
  excerpt           text,
  content           text,
  featured_image    text,
  category          text DEFAULT 'Sector',
  author            text,
  status            text DEFAULT 'draft' CHECK (status = ANY (ARRAY['draft','published','archived','scheduled'])),
  published_at      timestamptz,
  created_at        timestamptz DEFAULT now(),
  updated_at        timestamptz DEFAULT now(),
  scheduled_at      timestamptz,
  focus_keyword     text,
  meta_description  text,
  target_audience   text,
  storyline_prompt  text,
  hook              text,
  extra_inputs      jsonb DEFAULT '{}'::jsonb,
  feedback_history  jsonb DEFAULT '[]'::jsonb,
  step              text DEFAULT 'concept',
  linkedin_post     text,
  tags              text[] DEFAULT '{}'::text[]
);

-- contact_messages (full schema including dashboard fields)
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id           uuid DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
  name         text NOT NULL,
  organization text,
  email        text NOT NULL,
  phone        text,
  message      text NOT NULL,
  created_at   timestamptz DEFAULT now(),
  subject      text,
  status       text DEFAULT 'nieuw',
  notes        text
);


-- --------------------------------------------------------------------------
-- 4. HELPER FUNCTIONS (after tables exist)
-- --------------------------------------------------------------------------

-- update_updated_at — generic trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path TO 'public' AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- has_role
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

-- is_approved
CREATE OR REPLACE FUNCTION public.is_approved(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles WHERE id = _user_id AND approved = true
  )
$$;

-- user_can_edit
CREATE OR REPLACE FUNCTION public.user_can_edit(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_permissions WHERE user_id = _user_id AND can_edit = true
  ) OR public.has_role(_user_id, 'admin')
$$;

-- user_can_publish
CREATE OR REPLACE FUNCTION public.user_can_publish(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_permissions WHERE user_id = _user_id AND can_publish = true
  ) OR public.has_role(_user_id, 'admin')
$$;

-- user_can_delete
CREATE OR REPLACE FUNCTION public.user_can_delete(_user_id uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path TO 'public' AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_permissions WHERE user_id = _user_id AND can_delete = true
  ) OR public.has_role(_user_id, 'admin')
$$;

-- handle_new_user — auto-provision profile + role + permissions on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name, approved)
  VALUES (
    NEW.id,
    COALESCE(NEW.email, ''),
    COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
    COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
    CASE WHEN NEW.email IN ('i.ijmkers@orchestra-contact.com', 'a.vangulick@orchestra-contact.com')
      THEN true ELSE false END
  );

  IF NEW.email IN ('i.ijmkers@orchestra-contact.com', 'a.vangulick@orchestra-contact.com') THEN
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'admin');
    INSERT INTO public.user_permissions (user_id, can_generate, can_publish, can_edit, can_delete)
    VALUES (NEW.id, true, true, true, true);
  ELSE
    INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
    INSERT INTO public.user_permissions (user_id, can_generate, can_publish, can_edit, can_delete)
    VALUES (NEW.id, true, false, true, false);
  END IF;

  RETURN NEW;
END;
$$;


-- --------------------------------------------------------------------------
-- 5. INDEXES
-- --------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug             ON public.blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status_published ON public.blog_posts (status, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_post_views_post_id          ON public.post_views (post_id);
CREATE INDEX IF NOT EXISTS idx_post_views_viewed_at        ON public.post_views (viewed_at);


-- --------------------------------------------------------------------------
-- 6. TRIGGERS
-- --------------------------------------------------------------------------

-- blog_posts updated_at
DROP TRIGGER IF EXISTS blog_posts_updated_at ON public.blog_posts;
CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- blog_posts_private updated_at
DROP TRIGGER IF EXISTS update_blog_posts_private_updated_at ON public.blog_posts_private;
CREATE TRIGGER update_blog_posts_private_updated_at
  BEFORE UPDATE ON public.blog_posts_private
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- blog_ai_settings updated_at
DROP TRIGGER IF EXISTS update_blog_ai_settings_updated_at ON public.blog_ai_settings;
CREATE TRIGGER update_blog_ai_settings_updated_at
  BEFORE UPDATE ON public.blog_ai_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- handle_new_user trigger on auth.users (create only if not exists)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created'
  ) THEN
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
  END IF;
END $$;


-- --------------------------------------------------------------------------
-- 7. ROW LEVEL SECURITY — enable on all tables
-- --------------------------------------------------------------------------
ALTER TABLE public.blog_posts           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts_private   ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_ai_settings     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages_private ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_views           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_permissions     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles           ENABLE ROW LEVEL SECURITY;


-- --------------------------------------------------------------------------
-- 8. RLS POLICIES
-- --------------------------------------------------------------------------

-- === blog_posts ===
DROP POLICY IF EXISTS "Public can read published posts" ON public.blog_posts;
CREATE POLICY "Public can read published posts"
  ON public.blog_posts FOR SELECT USING (status = 'published');

DROP POLICY IF EXISTS "Approved users can read posts" ON public.blog_posts;
CREATE POLICY "Approved users can read posts"
  ON public.blog_posts FOR SELECT TO authenticated USING (public.is_approved(auth.uid()));

DROP POLICY IF EXISTS "Approved users can insert posts" ON public.blog_posts;
CREATE POLICY "Approved users can insert posts"
  ON public.blog_posts FOR INSERT TO authenticated WITH CHECK (public.is_approved(auth.uid()));

DROP POLICY IF EXISTS "Users with edit permission can update posts" ON public.blog_posts;
CREATE POLICY "Users with edit permission can update posts"
  ON public.blog_posts FOR UPDATE TO authenticated USING (public.user_can_edit(auth.uid()));

DROP POLICY IF EXISTS "Users with delete permission can delete posts" ON public.blog_posts;
CREATE POLICY "Users with delete permission can delete posts"
  ON public.blog_posts FOR DELETE TO authenticated USING (public.user_can_delete(auth.uid()));

-- === blog_posts_private ===
DROP POLICY IF EXISTS "Public can read published posts" ON public.blog_posts_private;
CREATE POLICY "Public can read published posts"
  ON public.blog_posts_private FOR SELECT TO anon USING (status = 'published');

DROP POLICY IF EXISTS "Approved users can read private posts" ON public.blog_posts_private;
CREATE POLICY "Approved users can read private posts"
  ON public.blog_posts_private FOR SELECT TO authenticated USING (public.is_approved(auth.uid()));

DROP POLICY IF EXISTS "Approved users can insert private posts" ON public.blog_posts_private;
CREATE POLICY "Approved users can insert private posts"
  ON public.blog_posts_private FOR INSERT TO authenticated WITH CHECK (public.is_approved(auth.uid()));

DROP POLICY IF EXISTS "Users with edit permission can update private posts" ON public.blog_posts_private;
CREATE POLICY "Users with edit permission can update private posts"
  ON public.blog_posts_private FOR UPDATE TO authenticated USING (public.user_can_edit(auth.uid()));

DROP POLICY IF EXISTS "Users with delete permission can delete private posts" ON public.blog_posts_private;
CREATE POLICY "Users with delete permission can delete private posts"
  ON public.blog_posts_private FOR DELETE TO authenticated USING (public.user_can_delete(auth.uid()));

-- === blog_ai_settings ===
DROP POLICY IF EXISTS "Authenticated users can read ai settings" ON public.blog_ai_settings;
CREATE POLICY "Authenticated users can read ai settings"
  ON public.blog_ai_settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Admins can insert ai settings" ON public.blog_ai_settings;
CREATE POLICY "Admins can insert ai settings"
  ON public.blog_ai_settings FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can update ai settings" ON public.blog_ai_settings;
CREATE POLICY "Admins can update ai settings"
  ON public.blog_ai_settings FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- === contact_messages ===
DROP POLICY IF EXISTS "Allow anonymous inserts" ON public.contact_messages;
CREATE POLICY "Allow anonymous inserts"
  ON public.contact_messages FOR INSERT TO anon WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can read contact messages" ON public.contact_messages;
CREATE POLICY "Admins can read contact messages"
  ON public.contact_messages FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can update contact messages" ON public.contact_messages;
CREATE POLICY "Admins can update contact messages"
  ON public.contact_messages FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can delete contact messages" ON public.contact_messages;
CREATE POLICY "Admins can delete contact messages"
  ON public.contact_messages FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- === contact_messages_private ===
DROP POLICY IF EXISTS "Allow anonymous inserts private" ON public.contact_messages_private;
CREATE POLICY "Allow anonymous inserts private"
  ON public.contact_messages_private FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can read private contact messages" ON public.contact_messages_private;
CREATE POLICY "Admins can read private contact messages"
  ON public.contact_messages_private FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can update private contact messages" ON public.contact_messages_private;
CREATE POLICY "Admins can update private contact messages"
  ON public.contact_messages_private FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can delete private contact messages" ON public.contact_messages_private;
CREATE POLICY "Admins can delete private contact messages"
  ON public.contact_messages_private FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- === post_views ===
DROP POLICY IF EXISTS "Anyone can insert post views" ON public.post_views;
CREATE POLICY "Anyone can insert post views"
  ON public.post_views FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Admins can read post views" ON public.post_views;
CREATE POLICY "Admins can read post views"
  ON public.post_views FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

-- === profiles ===
DROP POLICY IF EXISTS "Users can read own profile" ON public.profiles;
CREATE POLICY "Users can read own profile"
  ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid());

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

DROP POLICY IF EXISTS "Admins can read all profiles" ON public.profiles;
CREATE POLICY "Admins can read all profiles"
  ON public.profiles FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can update all profiles" ON public.profiles;
CREATE POLICY "Admins can update all profiles"
  ON public.profiles FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- === user_roles ===
DROP POLICY IF EXISTS "Users can read own role" ON public.user_roles;
CREATE POLICY "Users can read own role"
  ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Admins can read all roles" ON public.user_roles;
CREATE POLICY "Admins can read all roles"
  ON public.user_roles FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;
CREATE POLICY "Admins can insert roles"
  ON public.user_roles FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can update roles" ON public.user_roles;
CREATE POLICY "Admins can update roles"
  ON public.user_roles FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can delete roles" ON public.user_roles;
CREATE POLICY "Admins can delete roles"
  ON public.user_roles FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- === user_permissions ===
DROP POLICY IF EXISTS "Users can read own permissions" ON public.user_permissions;
CREATE POLICY "Users can read own permissions"
  ON public.user_permissions FOR SELECT USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Admins can read all permissions" ON public.user_permissions;
CREATE POLICY "Admins can read all permissions"
  ON public.user_permissions FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can insert permissions" ON public.user_permissions;
CREATE POLICY "Admins can insert permissions"
  ON public.user_permissions FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can update permissions" ON public.user_permissions;
CREATE POLICY "Admins can update permissions"
  ON public.user_permissions FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

DROP POLICY IF EXISTS "Admins can delete permissions" ON public.user_permissions;
CREATE POLICY "Admins can delete permissions"
  ON public.user_permissions FOR DELETE USING (public.has_role(auth.uid(), 'admin'));


-- ============================================================================
-- DONE! Verify in Table Editor that all tables are present.
-- ============================================================================
