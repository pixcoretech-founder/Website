# PixCoreTech website

Static, responsive multi-page website for GitHub Pages.

## Deploy

1. Create a GitHub repository for the website (for example `pixcoretech.github.io` or any repository with GitHub Pages enabled).
2. Upload **all files and folders in this project** to the repository root. Keep `CNAME` in the root.
3. In GitHub: **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)` (or configure GitHub Actions if preferred).
4. In your DNS provider for `px1.buzz`, create a CNAME record:
   - Host/Name: `pixcoretech`
   - Target/Value: `<your-github-username>.github.io`
   Replace the target with the actual GitHub Pages hostname shown in your repository's Pages settings.
5. In GitHub Pages custom domain, set `pixcoretech.px1.buzz`, wait for DNS verification, then enable **Enforce HTTPS**.

## Before going live

- Edit `script.js` and replace `YOUR_BUSINESS_EMAIL_HERE` with your real contact email. The contact form uses the visitor's email application (mailto), not a backend.
- Check every social profile URL in `contact.html`. The links are based on the `PixCoreTech` handle and may need the exact public profile URL for each platform.
- Update the canonical URL, Open Graph image URL, sitemap and JSON-LD if the domain changes.
- Add a real privacy policy if you later add analytics, cookies, mailing lists or data collection.

## SEO included

Page-specific titles and descriptions, canonical URLs, Open Graph metadata, semantic headings, SoftwareCompany structured data, `robots.txt`, and `sitemap.xml`.

GitHub Pages is static hosting. No server-side processing or database is included.
