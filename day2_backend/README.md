1. useEffect
   Runs on: Client
➤ This hook runs in the browser after the component mounts.

Good for: Manual fetching
➤ It's commonly used to fetch data manually using fetch or axios.

Needed with SWR?: ❌ Not needed with SWR
➤ SWR replaces the need for useEffect in most client-side data fetching cases.

2. getStaticProps
   Runs on: Server (build)
➤ Runs at build time (during static site generation), not in the browser.

Good for: Static pages (SSG)
➤ Useful when your data doesn't change often and can be pre-rendered.

Needed with SWR?: ✅ Optional for initial data
➤ You can use it with SWR to provide initial static data and let SWR revalidate in the client.

3. getServerSideProps
   Runs on: Server (each req)
➤ Runs on every request on the server (SSR).

Good for: Dynamic, SEO pages
➤ Ideal for pages that need real-time or per-request data, and also care about SEO.

Needed with SWR?: ✅ Optional for SSR + SWR
➤ Can be used to preload data, and then SWR can keep it updated on the client.

4. useSWR
   Runs on: Client
➤ Works in the browser after page loads.

Good for: Live/fresh UI data
➤ Great for keeping data fresh, handling caching, revalidation, and auto updates.

Needed with SWR?: ✅ Main tool
➤ This is SWR itself — it's your main hook for fetching and updating data on the client side.
