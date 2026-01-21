# Build & Deployment Guide

## Production Build

### Building the Project

```bash
# Generate optimized production build
npm run build

# Output will be in the dist/ folder
# Size is typically 100-200KB (with gzip compression)
```

### Preview Production Build Locally

```bash
# Test production build before deploying
npm run preview

# Visit http://localhost:4173 to view
```

## Deployment Platforms

### 1. Netlify (Recommended - Easiest)

#### Option A: GitHub Integration
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings will auto-detect:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. Your site goes live!

#### Option B: Drag & Drop
1. Run `npm run build`
2. Visit [netlify.com](https://netlify.com)
3. Drag the `dist/` folder into the deploy area
4. Your site goes live immediately!

#### Custom Domain on Netlify
1. Go to Site settings → Domain management
2. Click "Add domain"
3. Enter your custom domain
4. Update DNS settings at your domain provider
5. Wait for DNS propagation (can take 48 hours)

### 2. Vercel (GitHub Integration)

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your portfolio repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"
7. Your site goes live!

#### Custom Domain on Vercel
1. Go to Project settings → Domains
2. Add your custom domain
3. Update DNS records (Vercel provides instructions)

### 3. GitHub Pages

#### Setup

1. **Update vite.config.js:**
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... rest of config
   })
   ```

2. **Build project:**
   ```bash
   npm run build
   ```

3. **Push dist folder:**
   ```bash
   cd dist
   git init
   git add .
   git commit -m "Initial deployment"
   git branch -M main
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Repository settings → Pages
   - Source: `main` branch
   - Directory: `/` (root)

#### Custom Domain on GitHub Pages
1. Create `CNAME` file in dist/ with your domain
2. Add to GitHub Pages settings
3. Update DNS to point to GitHub

### 4. Traditional Hosting (Bluehost, GoDaddy, etc.)

1. Build project: `npm run build`
2. Connect via FTP
3. Upload contents of `dist/` folder to `public_html/`
4. Most hosts handle 404 redirects automatically
5. If not, create `.htaccess`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Performance Optimization

### Before Deploying

1. **Optimize images:**
   - Compress with [TinyPNG](https://tinypng.com/)
   - Use WebP format when possible
   - Size: ~200KB total recommended

2. **Check bundle size:**
   ```bash
   npm run build
   # Check dist/ folder size
   ```

3. **Lighthouse audit:**
   - Open DevTools (F12)
   - Lighthouse tab
   - Generate report
   - Target: 90+ on all metrics

4. **Test on mobile:**
   - Use Chrome DevTools device emulation
   - Test actual mobile device
   - Check touch interactions

### SEO Optimization

1. **Meta tags** (in index.html):
   ```html
   <meta name="description" content="Your portfolio description">
   <meta name="keywords" content="developer, portfolio, web">
   <meta name="theme-color" content="#1a1a2e">
   ```

2. **Structured data:**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Your Name",
     "jobTitle": "Web Developer",
     "url": "https://yourportfolio.com"
   }
   </script>
   ```

3. **Sitemap.xml** (in public/):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourportfolio.com/</loc>
       <lastmod>2024-01-21</lastmod>
     </url>
   </urlset>
   ```

## Monitoring & Analytics

### Add Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your measurement ID
3. Add to `index.html` in `<head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

### Setup Error Monitoring

1. Create account at [sentry.io](https://sentry.io)
2. Install SDK:
   ```bash
   npm install @sentry/react
   ```
3. Initialize in main.jsx:
   ```javascript
   import * as Sentry from "@sentry/react";
   Sentry.init({
     dsn: "YOUR_DSN",
     environment: "production"
   });
   ```

## Troubleshooting Deployment

### Site Not Loading
- Check dist/ folder is not empty
- Verify build command worked
- Check browser console for errors
- Clear browser cache

### Styles Not Applying
- Ensure Tailwind build completed
- Check `dist/` has style files
- Look for CSS file in Network tab

### JavaScript Errors
- Check browser console (F12 → Console)
- Verify all imports are correct
- Check API endpoints if using backend

### Performance Issues
- Run Lighthouse audit
- Check Network tab for large files
- Optimize images
- Enable gzip compression on server

### Domain Not Working
- Verify DNS records are correct
- Wait for DNS propagation
- Check domain registrar settings
- Use nslookup tool to verify

## CI/CD Setup

### GitHub Actions (Automatic Deployment)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Use Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - run: npm install
      - run: npm run build
      
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.2
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          netlify-auth-token: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          netlify-site-id: ${{ secrets.NETLIFY_SITE_ID }}
```

## Post-Deployment Checklist

- [ ] Site loads on all major browsers
- [ ] Mobile responsiveness verified
- [ ] All navigation links work
- [ ] Contact form functions properly
- [ ] Images display correctly
- [ ] Animations run smoothly
- [ ] No console errors
- [ ] Lighthouse score 90+
- [ ] Custom domain working (if applicable)
- [ ] Analytics tracking active
- [ ] SSL certificate valid (HTTPS)
- [ ] Sitemap.xml accessible
- [ ] robots.txt configured

## Maintenance

### Regular Tasks
- Monitor analytics monthly
- Update projects and experience
- Check for broken links
- Review Lighthouse scores
- Update dependencies: `npm update`

### Backup
- Keep source code in GitHub
- Export analytics data quarterly
- Document any custom changes

## Speed Up Deployment

### Disable Security Scanning
If builds are slow, disable security audits:
```bash
npm run build --no-audit
```

### Use NPM Cache
```bash
npm ci --production
```

## Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Help](https://pages.github.com/)
- [Web Performance Tools](https://developers.google.com/web/tools)

---

**Your portfolio is ready to go live! 🚀**
