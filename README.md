# Tech Solutions Uganda - Company Portfolio

A professional, responsive company portfolio website showcasing **Tech Solutions Uganda**, a 3-product SaaS startup serving Uganda's education, e-commerce, and business automation sectors.

---

## 🎯 Overview

This portfolio presents:

- **EduTech Platform**: Cloud-based Learning Management System for schools
- **E-Commerce Platform**: Mobile-first online store builder with Mobile Money integration
- **AI Solution**: Business automation and intelligence tools

**Target Metrics:**
- Year 1 Revenue: $340,000 USD
- Target Users: 3,000
- Breakeven: October–November 2026 (Month 6-7)
- Team: 4 founders (2 technical + 2 business)

---

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main portfolio page
├── server.js                  # Node.js development server
├── README.md                  # This file
├── package.json               # Node.js dependencies (optional)
└── assets/
    ├── css/
    │   └── style.css          # All styling (responsive, modern)
    ├── js/
    │   └── main.js            # Interactive features & animations
    └── data/
        └── (data files for future API integration)
```

---

## 🚀 Quick Start

### Option 1: Using Node.js Server (Recommended)

```powershell
# Navigate to portfolio folder
cd c:\workspace\portfolio

# Start the server
node server.js

# Open in browser
# http://localhost:3000
```

The server will run on port 3000 and serve all files automatically.

### Option 2: Direct File Opening

Simply open `index.html` in your browser:
```powershell
# Windows PowerShell
Start-Process "c:\workspace\portfolio\index.html"

# Or double-click the file in File Explorer
```

### Option 3: Python HTTP Server

```powershell
# Navigate to portfolio folder
cd c:\workspace\portfolio

# Start Python server (if Python is installed)
python -m http.server 8000

# Open browser to http://localhost:8000
```

---

## 📋 Portfolio Sections

### 1. **Navigation Bar**
- Sticky navigation with smooth scrolling
- Links to all main sections
- Company branding and tagline

### 2. **Hero Section**
- Eye-catching headline
- 4 key metrics (animated counters)
- Call-to-action button

### 3. **About Section**
- Company mission and value prop
- Market opportunity metrics
- Competitive advantages
- 4 key market metrics

### 4. **Products Section**
- 3 detailed product cards:
  - EduTech (Learning Management)
  - E-Commerce Platform
  - AI Solution
- Features, pricing, and metrics for each
- Cross-product synergy explanation

### 5. **Team Section**
- 4 founder profiles
- Roles and expertise areas
- Team advantages

### 6. **Financials Section**
- Initial capital breakdown ($10k USD)
- Funding strategy
- Year 1 revenue projections
- Unit economics (CAC, LTV, margins)
- Path to profitability
- Series A readiness criteria
- Detailed revenue table by product

### 7. **Contact Section**
- Contact information
- Social media links
- Contact form
- Call-to-action

### 8. **Footer**
- Copyright and branding

---

## 🎨 Design Features

### Responsive Design
- ✅ Mobile-first approach
- ✅ Breakpoints for tablets (768px) and mobile (480px)
- ✅ Touch-friendly interface

### Modern Styling
- ✅ Gradient backgrounds
- ✅ Smooth animations and transitions
- ✅ Card-based layouts
- ✅ Professional color scheme
- ✅ Typography hierarchy

### Interactive Elements
- ✅ Smooth scroll navigation
- ✅ Hover effects on cards
- ✅ Animated counters in hero section
- ✅ Scroll-triggered animations
- ✅ Form validation
- ✅ Active nav link highlighting

### Performance
- ✅ Single CSS file (no build needed)
- ✅ Lightweight JavaScript (vanilla, no frameworks)
- ✅ Optimized for fast loading
- ✅ Print-friendly styles

---

## 🔧 Customization

### Change Company Details

**In `index.html`:**
```html
<!-- Update company name -->
<h1 class="logo">Your Company Name</h1>

<!-- Update email -->
<a href="mailto:your-email@company.com">your-email@company.com</a>

<!-- Update social links -->
<li><a href="https://twitter.com/yourhandle" target="_blank">🐦 Twitter</a></li>
```

### Update Colors

**In `assets/css/style.css`:**
```css
:root {
    --primary-color: #007bff;      /* Main color */
    --secondary-color: #28a745;    /* Secondary color */
    --accent-color: #ff6b35;       /* Highlight color */
    /* ... other variables ... */
}
```

### Update Financial Data

Find sections like:
```html
<div class="breakdown-item">
    <span>Team Stipends</span>
    <span class="amount">$6,200</span>
    <span class="percent">63%</span>
</div>
```

And update the values as needed.

### Update Team Members

In the "Team Section," modify:
```html
<div class="team-member">
    <div class="member-avatar">👨‍💻</div>
    <h3>Yokas</h3>
    <p class="member-role">CTO, Technical Founder</p>
    <p class="member-bio">Your bio here...</p>
    <p class="member-focus">Focus: ...</p>
</div>
```

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free, Easy)
```bash
# Push to GitHub repository
# In repository settings, enable GitHub Pages
# Serve from: gh-pages branch or /docs folder
```

### Option 2: Netlify (Free)
1. Drag and drop the `portfolio` folder into Netlify
2. Get instant HTTPS and global CDN

### Option 3: Vercel (Free)
1. Connect your GitHub repo
2. Deploy automatically on push

### Option 4: Traditional Hosting
1. Upload files via FTP/SSH
2. Point domain to hosting server
3. Serve with Apache, Nginx, or Node.js

### Option 5: Docker (Production-Ready)
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

Then:
```bash
docker build -t tech-solutions-portfolio .
docker run -p 3000:3000 tech-solutions-portfolio
```

---

## 📊 Analytics Integration (Optional)

To add Google Analytics, add this to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual measurement ID.

---

## 📧 Contact Form Setup (Optional)

The contact form is currently client-side only. To enable email delivery:

### Option 1: Formspree
1. Sign up at https://formspree.io
2. Update form action:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at https://www.emailjs.com
2. Add to `assets/js/main.js`:
```javascript
emailjs.init("YOUR_PUBLIC_KEY");
// Configure form submission
```

### Option 3: Backend Server
Create an API endpoint to handle form submissions.

---

## 🎬 Advanced Customization

### Add More Sections
1. Create new HTML section in `index.html`
2. Add corresponding CSS in `assets/css/style.css`
3. Update navigation menu

### Add Images
1. Create `assets/images/` folder
2. Add images there
3. Reference in HTML:
```html
<img src="assets/images/product-screenshot.png" alt="Product">
```

### Add Video
```html
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="Product Demo" 
    allowfullscreen>
</iframe>
```

---

## 🐛 Troubleshooting

### Server won't start
```bash
# Make sure port 3000 is free
netstat -ano | findstr :3000  # Windows

# Kill process using port
taskkill /PID <process_id> /F
```

### CSS not loading
- Check file path in HTML: `<link rel="stylesheet" href="assets/css/style.css">`
- Ensure `assets/css/style.css` file exists
- Hard refresh browser: `Ctrl+Shift+R`

### JavaScript not working
- Open browser console: `F12`
- Check for errors (red messages)
- Ensure `assets/js/main.js` exists
- Check file paths are correct

### Form not submitting
- Check browser console for errors
- Implement backend or third-party service
- See "Contact Form Setup" section above

---

## 📝 SEO Optimization

The portfolio includes:
- ✅ Semantic HTML
- ✅ Meta descriptions
- ✅ Header hierarchy (H1, H2, H3)
- ✅ Alt text for images

To improve further:
1. Add `robots.txt` file
2. Create `sitemap.xml`
3. Add Open Graph meta tags for social sharing
4. Submit to Google Search Console

---

## 📄 License

This portfolio is created for **Tech Solutions Uganda**. Use and modify as needed for your business purposes.

---

## 🤝 Support & Contributions

For questions or improvements:
1. Check the HTML/CSS/JS files for inline comments
2. Refer to the original business documents in `c:\workspace\`
3. Update this README with your changes

---

## 🎉 Next Steps

1. ✅ Customize company name and details
2. ✅ Update financial projections if needed
3. ✅ Add team photos (replace emojis)
4. ✅ Set up contact form submission
5. ✅ Configure analytics
6. ✅ Deploy to production
7. ✅ Share with investors/partners!

---

**Last Updated:** April 9, 2026  
**Version:** 1.0  
**Status:** Production Ready
