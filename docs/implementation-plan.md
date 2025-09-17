# Red Clay Field Guide – Implementation Plan

## 1. Project Goals
- Recreate the existing Red Clay Field Guide demo site using the preferred stack (React + Vite + Tailwind + Framer Motion frontend, PHP + MySQL backend on cPanel).
- Provide an editorial workflow that supports drafting, scheduling, publishing, and archiving posts.
- Deliver an admin portal for managing posts, categories, tags, locations, sponsors/ads, comments, newsletter signups, and static pages.
- Offer a polished reader experience with fast, accessible pages, subtle motion, and dedicated routes for home, categories, and articles.

## 2. Monorepo Structure
```
/ (repo root)
├── frontend/              # Vite + React application
│   ├── src/
│   │   ├── app/          # Routing, providers, layout shell
│   │   ├── components/   # Shared UI components
│   │   ├── features/     # Feature modules (home, category, article, search, auth, admin)
│   │   ├── hooks/
│   │   ├── lib/          # API client, utilities
│   │   └── styles/
│   ├── public/           # Static assets (favicons/app icons once generated)
│   ├── index.html
│   └── vite.config.ts
├── api/                   # PHP backend (REST API + admin server-rendered views)
│   ├── public/
│   │   ├── index.php     # Front controller for API + SSR meta handling
│   │   └── uploads/      # WebP images
│   ├── src/
│   │   ├── bootstrap/    # Env loading, DB connection, auth middleware
│   │   ├── Controllers/
│   │   ├── Models/
│   │   ├── Services/     # Image processing, scheduling, mail, notifications
│   │   ├── Routes/
│   │   └── Views/        # Admin blade-like templates or simple PHP views
│   ├── config/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── tests/            # PHPUnit
│   └── composer.json
├── docs/
│   └── implementation-plan.md
├── package.json          # Repo-level tooling (lint-staged, prettier, etc.)
└── README.md
```

## 3. Environments & Tooling
- **Node 20 + PNPM** for the frontend workspace.
- **Composer + PHP 8.1** for the backend.
- **ESLint + Prettier + Stylelint** for frontend linting; **PHP-CS-Fixer** for backend formatting.
- **GitHub Actions** workflow later for CI (lint + run tests).
- `.env` files: `.env.local` for frontend API base URL; `.env` for backend DB credentials, JWT secret, mail creds, cron key, storage paths.

## 4. Database Schema (MySQL)
### Core Tables
- `users`: id, name, email (unique), password_hash, role (`admin|author`), avatar_path, bio, created_at, updated_at, last_login_at.
- `password_resets`: user_id, token, expires_at.
- `posts`: id, title, slug, subtitle, excerpt, body_html, body_raw, status (`draft|scheduled|published|archived`), publish_at, archive_at, read_time_minutes, author_id, hero_image_id, category_id, featured (bool), sponsor_zone_override, seo_title, seo_description, canonical_url, created_at, updated_at.
- `categories`: id, name, slug, description, hero_image_id, order_index, created_at, updated_at.
- `tags`: id, name, slug, created_at.
- `locations`: id, name, slug, type (`city|county`), parent_id (nullable), latitude, longitude.
- `post_tag`: post_id, tag_id.
- `post_location`: post_id, location_id.
- `images`: id, original_filename, storage_path, alt_text, width, height, created_at.
- `post_galleries`: id, post_id, image_id, caption, order_index.
- `comments`: id, post_id, parent_id (nullable for depth 1 replies), user_id, body, status (`approved|rejected|pending`), created_at, updated_at, deleted_at.
- `comment_flags`: id, comment_id, user_id (nullable), reason, created_at.
- `newsletter_subscribers`: id, email, subscribed_at, source (`site_form`), confirmed (bool), unsubscribe_token.
- `sponsor_zones`: id, key (`hero_ribbon|homepage_sidebar|article_inline` etc.), name, description.
- `sponsor_placements`: id, zone_id, name, image_id, click_url, start_date, end_date, is_active, created_at, updated_at.
- `search_index`: optional materialized view or use full-text indexes on `posts`.

### Indexing & Constraints
- Full-text index on `posts` title + body for search.
- Unique constraints on slugs and emails.
- Status/publish_at indexes for efficient queries.

## 5. Backend API Overview
### Authentication
- Registration, login, logout endpoints using JWT stored in HttpOnly cookie.
- Password reset endpoints (request + confirm).
- Middleware for role-based access (admin vs author) on admin routes.

### Content Endpoints
- `GET /api/posts` with filters (status, category, tag, location, search, sort, pagination).
- `GET /api/posts/{slug}` returns post with related posts, comments, sponsor placement.
- `POST /api/posts` (admin/author) create/update with scheduling logic.
- `POST /api/media` upload images, auto-convert to WebP (Imagick) with fallback.
- `GET /api/categories`, `GET /api/tags`, `GET /api/locations` for taxonomy data.
- `POST /api/comments` (auth required), `PUT /api/comments/{id}`, `DELETE /api/comments/{id}` for user moderation window.
- `POST /api/comments/{id}/moderate` for admin approve/reject.
- `POST /api/newsletter` to store subscribers.
- `GET/POST /api/sponsors` for placements.
- `GET /api/search` to serve search results and highlight snippets.

### Admin Portal
- Server-rendered pages or React admin microfrontend served via Vite build but behind auth.
- Features: dashboard metrics, posts editor (Markdown + rich text hybrid), taxonomy CRUD, sponsor management, comments moderation, newsletter table, static page editor.

### Scheduling & Background Tasks
- Cron endpoint `/cron/publish?key=...` triggered by cPanel to publish scheduled posts and deactivate expired sponsor placements.
- Email notifications for new comments to admins via SMTP credentials.

## 6. Frontend Application
### Routing
- `/` Home: hero, featured posts carousel/grid, per-category sections (Food, Travel, Entertainment, Services) showing 4 posts each, newsletter block, sponsor zone.
- `/search`: full search experience with filters and highlighted snippets.
- `/about`, `/contact`, `/advertise`, `/privacy`: CMS-driven static content pages.
- `/:category` pages with filters (pills for tags/subcategories), sorts (Newest default, Most Popular, A–Z), pagination or infinite scroll.
- `/:category/:slug` article detail with breadcrumb, hero image, meta (date, read time), inline sponsor block, share buttons, author bio, related posts, comments thread.
- `/admin/*`: protected admin routes (dashboard, posts, categories, tags, locations, sponsors, comments, newsletter, users, settings).

### UI/UX
- Tailwind design system with tokens for colors (red/white/charcoal), typography scale, spacing.
- Components: Navbar, Footer, Hero, PostCard, CategorySection, Pagination, FilterPills, SortDropdown, CommentThread, SponsorBanner, NewsletterForm.
- Framer Motion for subtle fade/slide-in on hero, cards, section reveals, page transitions.
- React Query (TanStack Query) for data fetching, caching, optimistic updates in admin.
- React Hook Form + Zod for forms (login, post editor, comments, newsletter).
- Accessibility: semantic landmarks, keyboard focus rings, ARIA labels on interactive components, high-contrast palette.

### State & Data Flow
- Auth context storing current user, tokens handled via HttpOnly cookies + CSRF token from backend.
- Use `react-router-dom` with data loaders for SEO meta injection via PHP `meta.php` using route manifest.
- Comments, posts, categories fetched via API; implement skeleton loaders and error boundaries.

## 7. Comments Workflow
- Users must register/login to comment.
- Comments auto-approve upon submission (status `approved`) but admins can later reject (status `rejected`, comment hidden).
- Users can edit/delete within a grace period (e.g., 15 minutes) tracked via timestamps.
- Depth limited to 1 level of replies.
- Flagging system allows users to report issues; flagged comments notify admins.

## 8. Newsletter
- Single opt-in: store email directly to `newsletter_subscribers` with timestamp.
- Admin table for export (CSV) and manual unsubscribe.
- Provide success/error feedback on frontend; rate-limit endpoint to prevent abuse.

## 9. Search Implementation
- `GET /api/search?q=&category=&tag=&page=` returning paginated posts with snippet (SQL `MATCH ... AGAINST` + highlight on backend).
- Frontend `/search` route with search input, category filter pills, result cards showing excerpt with highlighted term.

## 10. Sponsor/Ad Management
- Admin UI to create sponsor placements with zone selection (Hero Ribbon, Homepage Sidebar, Article Inline, Newsletter Inline (future)).
- Fields: name, description, upload image (WebP), click URL, start/end dates, active toggle.
- Display logic respects start/end; fallback placeholder when no active sponsor.

## 11. Deployment Strategy
- Build frontend (`pnpm build`) to generate static assets served from cPanel `public_html`.
- PHP API + `meta.php` handle routing, SEO meta tags, and proxy to SPA index.
- `.htaccess` rules for routing to `index.php` and protecting `/uploads`.
- Use `.env.production` for DB credentials on server; ensure writable directories for uploads and logs.

## 12. Testing & QA
- Frontend: Vitest + React Testing Library for key components (Hero, PostCard, CommentForm), Playwright smoke tests for navigation.
- Backend: PHPUnit for controllers/services, integration tests for auth, posts, comments.
- Manual QA checklist covering responsive breakpoints, accessibility (keyboard nav, alt text), SEO meta tags, admin flows.

## 13. Implementation Roadmap
1. **Repo Setup**: Initialize PNPM workspace, Vite app, Tailwind config, backend Composer project, shared linting.
2. **Database Migrations**: Define tables, seed categories (Food, Travel, Entertainment, Services) and default admin user.
3. **Auth Module**: Backend auth endpoints, JWT handling, frontend auth context + forms.
4. **Post Management**: CRUD endpoints, media uploads, scheduling logic, admin editor UI.
5. **Taxonomies & Locations**: CRUD screens, association in editor.
6. **Sponsor Manager**: API + UI, integrate hero/home/article placements.
7. **Public Frontend**: Home, category, article pages with data fetching, comments integration, search.
8. **Comments System**: API endpoints, moderation tools, frontend thread UI.
9. **Newsletter**: Endpoint + storage, frontend forms, admin list export.
10. **Static Pages**: CMS-managed content and frontend rendering.
11. **SEO & Meta**: Implement PHP meta generation, open graph tags, sitemap.
12. **Testing & QA**: Write automated tests, run accessibility audit, finalize responsive tweaks.
13. **Deployment Prep**: Build scripts, `.htaccess`, environment setup instructions.

## 14. Open Questions / Future Enhancements
- Integrate map-based location view (Leaflet/Mapbox) for posts referencing places.
- Add analytics provider (GA4/Plausible) when decided.
- Extend comments with email notifications to subscribers of a thread.
- Implement newsletter campaign sender when ready.
- Add city/county landing pages once content is available.

