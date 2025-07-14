# Free Amazon Affiliate Website

A zero-cost website for Amazon affiliate marketing, targeting women under 40 with fashion and beauty products.

## Setup Instructions (Mobile)

1. **Create GitHub Repository**:
   - On your mobile browser, go to github.com.
   - Create a repository: `amazon-affiliate-website`.
   - Enable GitHub Pages in settings (select `main` branch, `/public` folder).

2. **Code on Replit**:
   - Sign up at replit.com (free, mobile-friendly).
   - Create a Node.js project.
   - Copy-paste the files above into Replit’s file explorer.
   - Run `npm install` in the Replit terminal.

3. **Set Up Firebase**:
   - Sign up at firebase.google.com (free tier).
   - Create a project, enable Firestore, and copy credentials to `.env`.
   - Create Firestore collections: `low-budget`, `mid-range`, `premium`.

4. **Deploy**:
   - **Front-End**: Push `public/` to GitHub Pages via GitHub’s mobile interface.
   - **Back-End**: Sign up at render.com, create a Node.js service, deploy `src/` (free tier). Link to Firebase.
   - Update `script.js` and `admin.js` with your Render URL (e.g., `https://your-app.onrender.com`).

5. **Amazon Associates**:
   - Log in to affiliate-program.amazon.com.
   - Add your GitHub Pages URL as your website.
   - Generate affiliate links manually in Associates Central.
   - Add products via `/admin.html` (use Amazon product images and links).

6. **Pinterest Promotion**:
   - Create a Pinterest account and boards (e.g., “Budget Fashion”, “Premium Beauty”).
   - Use Canva (free) to create tall images (800x1200px).
   - Share products with affiliate links and hashtags (#WomensFashion, #BeautyDeals).

## Notes
- Add unique content (e.g., “Top 10 Budget Dresses”) for SEO.
- Submit your site to Google Search Console (free).
- After 3 Amazon sales, request PA API access to automate product fetching.
- Comply with Amazon’s policies (e.g., include affiliate disclosure).
