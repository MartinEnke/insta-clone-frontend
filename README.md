## Progress

### Day 2 – App Shell & Profile
- Bootstrapped React Router + Vite + Tailwind app
- Implemented global app shell:
  - Sticky header with “Instagram” branding
  - Bottom navigation bar
- Created `/profile` layout with nested routes:
  - `/profile/posts/grid` – fetches posts from backend and renders a grid
  - `/profile/reels/grid` – fetches reels and shows them in a grid layout
- Added Zod schemas and Axios API client

### Day 3 – Tagged & Highlights
- Extended `/profile` layout with tabs:
  - Posts | Reels | Tagged | Highlights
- Implemented:
  - `/profile/tagged/grid` – uses same `<PostCard />` to render tagged posts
  - `/profile/highlights` – list of highlight “bubbles”
  - `/profile/highlights/:id` – dynamic route for a single highlight
- Created reusable components:
  - `<HighlightBubble />` for the bubble-style highlights
  - `<HighlightStory />` (or equivalent) to render highlight detail
- Connected all routes to the backend’s `GET /tagged/grid`, `GET /highlights`, and `GET /highlights/:id` endpoints
