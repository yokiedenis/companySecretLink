# Deployment Guide - Tech Solutions Uganda Portfolio

This guide covers multiple ways to deploy your portfolio website.

---

## 📋 Table of Contents

1. [Local Testing](#local-testing)
2. [GitHub Pages (Free)](#github-pages-free)
3. [Netlify (Free, Recommended)](#netlify-free-recommended)
4. [Vercel (Free)](#vercel-free)
5. [Traditional Web Hosting](#traditional-web-hosting)
6. [Docker Deployment](#docker-deployment)
7. [Custom Domain Setup](#custom-domain-setup)

---

## Local Testing

### Prerequisite: Node.js Installation

**Check if Node.js is installed:**
```powershell
node --version
npm --version
```

**If not installed, download from:** https://nodejs.org

### Start Local Server

```powershell
cd c:\workspace\portfolio
node server.js
```

**Access at:** http://localhost:3000

**To stop:** Press `Ctrl+C`

---

## GitHub Pages (Free)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `tech-solutions-uganda-portfolio`
3. Check "Public" 
4. Click "Create repository"

### Step 2: Push Portfolio to GitHub

```powershell
cd c:\workspace\portfolio

# Initialize git
git init

# Add files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/tech-solutions-uganda-portfolio.git

# Rename branch
git branch -M main

# Push
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository → **Settings**
2. Scroll to **Pages** section
3. Select **Source**: `Deploy from a branch`
4. Select **Branch**: `main` → **/(root)**
5. Click **Save**

**Your site will be live at:**
```
https://YOUR_USERNAME.github.io/tech-solutions-uganda-portfolio
```

### Step 4: Custom Domain (Optional)

1. Buy domain (e.g., techsolutionsuganda.com)
2. Go to repository **Settings** → **Pages**
3. Enter domain in "Custom domain" field
4. Update DNS records with your domain provider

---

## Netlify (Free, Recommended)

### Step 1: Connect to Netlify

**Option A: With GitHub (Easiest)**

1. Go to https://netlify.com
2. Sign up (use GitHub account)
3. Click "New site from Git"
4. Select GitHub → authorize
5. Choose repository: `tech-solutions-uganda-portfolio`
6. Deploy!

**Option B: Manual Upload**

1. Go to https://netlify.com
2. Sign up
3. Click "Deploy manually"
4. Drag and drop the `portfolio` folder
5. Site created instantly!

### Step 2: Custom Domain

1. In Netlify dashboard: **Settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain
4. Update DNS records at domain provider

**Netlify DNS records example:**
```
Nameserver 1: dns1.p05.netlify.com
Nameserver 2: dns2.p05.netlify.com
Nameserver 3: dns3.p05.netlify.com
Nameserver 4: dns4.p05.netlify.com
```

### Step 3: Set Up HTTPS (Automatic)

Netlify provides free SSL certificate automatically!

---

## Vercel (Free)

### Step 1: Connect to Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import GitHub repository
5. Deploy!

### Step 2: Custom Domain

1. In Vercel dashboard: **Settings** → **Domains**
2. Add custom domain
3. Update DNS records

---

## Traditional Web Hosting

### Option 1: cPanel Hosting (e.g., Bluehost, Hostinger)

**Step 1: Upload files via FTP**

```
FTP Host: ftp.yoursite.com
Username: your_username
Password: your_password
```

Use FileZilla or WinSCP to upload `portfolio` folder contents to `public_html/`

**Step 2: DNS Setup**

Point A record to hosting IP address

**Step 3: .htaccess (Optional, for Apache)**

Create `.htaccess` in root directory:

```apache
# Enable mod_rewrite
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Route all requests to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache headers
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

### Option 2: Linux VPS (AWS, DigitalOcean, Linode)

**Step 1: SSH into server**

```bash
ssh root@your_server_ip
```

**Step 2: Install Node.js**

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Step 3: Upload portfolio**

```bash
scp -r c:\workspace\portfolio root@your_server_ip:/opt/portfolio
```

**Step 4: Install PM2 (process manager)**

```bash
sudo npm install -g pm2
cd /opt/portfolio
pm2 start server.js --name "portfolio"
pm2 startup
pm2 save
```

**Step 5: Install Nginx (reverse proxy)**

```bash
sudo apt-get install nginx

# Create config
sudo nano /etc/nginx/sites-available/portfolio
```

**Nginx config:**

```nginx
server {
    listen 80;
    server_name techsolutionsuganda.com www.techsolutionsuganda.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Enable site:**

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

**Step 6: Set up HTTPS with Let's Encrypt**

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d techsolutionsuganda.com
```

---

## Docker Deployment

### Step 1: Create Dockerfile

Already included as example, but here's the full setup:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy portfolio files
COPY . .

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
```

### Step 2: Build Docker Image

```bash
docker build -t tech-solutions-portfolio .
```

### Step 3: Run Locally

```bash
docker run -p 3000:3000 tech-solutions-portfolio
```

Visit: http://localhost:3000

### Step 4: Push to Docker Hub

```bash
docker login

docker tag tech-solutions-portfolio YOUR_USERNAME/tech-solutions-portfolio:latest

docker push YOUR_USERNAME/tech-solutions-portfolio:latest
```

### Step 5: Deploy to Cloud

**AWS ECS, Google Cloud Run, Azure Container Instances, DigitalOcean App Platform, Heroku, etc.**

Example with Heroku:

```bash
# Install Heroku CLI
# https://devcenter.heroku.com/articles/heroku-cli

heroku login
heroku create tech-solutions-portfolio
heroku container:push web
heroku container:release web
heroku open
```

---

## Custom Domain Setup

### Step 1: Register Domain

Popular registrars:
- **Namecheap** (https://namecheap.com) - $8-12/year
- **GoDaddy** (https://godaddy.com) - $7-15/year
- **Google Domains** (https://domains.google) - $12/year
- **Local Uganda registrar** - Check local providers

### Step 2: Update DNS Records

**For Netlify:**
Point nameservers to Netlify DNS

**For traditional hosting:**
Point A record to hosting IP

**DNS Propagation Time:** 24-48 hours

### Step 3: Verify HTTPS

Most platforms (Netlify, Vercel) auto-generate SSL certificates. Traditional hosting may need:

```bash
# Let's Encrypt (free)
certbot certonly --standalone -d techsolutionsuganda.com
```

---

## Performance Optimization

### Minify Assets

**CSS:**
```bash
npm install -g cssnano-cli
cssnano assets/css/style.css > assets/css/style.min.css
```

**JavaScript:**
```bash
npm install -g terser
terser assets/js/main.js -o assets/js/main.min.js
```

Update HTML to use minified versions:
```html
<link rel="stylesheet" href="assets/css/style.min.css">
<script src="assets/js/main.min.js"></script>
```

### Enable Compression

Already handled by most hosting providers.

### Add CDN

Use Cloudflare (free):
1. Sign up at https://cloudflare.com
2. Point domain to Cloudflare nameservers
3. Auto-optimizes performance

---

## SSL/HTTPS Certificate

### Free Options
- **Let's Encrypt** - Free, auto-renewing
- **Netlify** - Auto-provided
- **Vercel** - Auto-provided
- **Cloudflare** - Free with free tier

### Paid Options
- **Comodo** - $9-50/year
- **DigiCert** - $100+/year

---

## Monitoring & Maintenance

### Set Up Monitoring

```bash
# Using Node.js uptime monitoring
npm install -g node-uptime

# Or use third-party services:
# - UptimeRobot (free)
# - Pingdom (paid)
# - New Relic (paid)
```

### Regular Backups

```bash
# Backup portfolio folder
tar -czf portfolio-backup-$(date +%Y%m%d).tar.gz c:\workspace\portfolio

# Or use:
# - GitHub (automatic version control)
# - Netlify (automatic)
# - Vercel (automatic)
```

### Update Content

Simply update `index.html` or CSS, then:

```bash
git add .
git commit -m "Update content"
git push
# Automatic deployment!
```

---

## Troubleshooting

### Domain not pointing to site
- Check DNS propagation: https://dnschecker.org
- Wait 24-48 hours
- Clear browser cache: Ctrl+Shift+Delete

### HTTPS not working
- Verify SSL certificate is installed
- Check certificate expiration
- Renew with Let's Encrypt

### Site loading slowly
- Enable CDN (Cloudflare)
- Minify CSS/JS
- Enable browser caching
- Use image compression

### Server crashes
- Check memory usage
- Restart Node.js process
- Use PM2 for auto-restart
- Scale up hosting plan

---

## Cost Summary

| Platform | Cost | Pros | Cons |
|----------|------|------|------|
| **GitHub Pages** | Free | Version control, easy | Limited features |
| **Netlify** | Free | Fast, easy deploys | Limited builds |
| **Vercel** | Free | Best Next.js support | Minimal Node.js |
| **Cloudflare Pages** | Free | Global CDN | Learning curve |
| **Heroku** | $50+/mo | Easy scaling | Can be expensive |
| **DigitalOcean** | $6-100+/mo | Great value | Requires setup |
| **AWS** | $1-100+/mo | Very flexible | Complex |
| **Traditional Hosting** | $5-20/mo | Reliable | Less flexibility |

**Recommendation:** Start with **Netlify** for best balance of ease, speed, and features.

---

## Final Checklist

Before going live:

- [ ] Test all links work
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check images load correctly
- [ ] Test contact form
- [ ] Verify social media links point to correct profiles
- [ ] Set up analytics (Google Analytics)
- [ ] Test on multiple browsers
- [ ] Check page load speed: https://pagespeed.web.dev
- [ ] Set up email forwarding for contact form
- [ ] Create SSL certificate
- [ ] Configure DNS records
- [ ] Set up error monitoring
- [ ] Configure backups

---

## Questions?

For deployment issues, check:
1. Platform-specific documentation
2. Stack Overflow: https://stackoverflow.com
3. Contact platform support

---

**Last Updated:** April 9, 2026
**Next Review:** After 3 months of deployment
