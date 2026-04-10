# Quick Start Guide - Tech Solutions Uganda Portfolio

**Get your portfolio live in 5 minutes!**

---

## 🚀 Option 1: Run Locally (Fastest)

### Prereq: Install Node.js
Download from: https://nodejs.org

### Run Server
```powershell
cd c:\workspace\portfolio
node server.js
```

**Open browser:** http://localhost:3000

**Stop server:** Press `Ctrl+C`

---

## 🌐 Option 2: Deploy to Netlify (5 Minutes)

### Step 1: Sign Up
Go to https://netlify.com → Sign up with GitHub

### Step 2: Connect Repository
1. Click "New site from Git"
2. Select GitHub → Authorize
3. Choose: `tech-solutions-uganda-portfolio`
4. Deploy!

**Your site:** https://YOUR_NETLIFY_SITE.netlify.app

### Step 3: Custom Domain (Optional)
1. In Netlify: Settings → Domain Management
2. Add custom domain
3. Update DNS at domain provider

---

## 📝 Customize Your Portfolio

### Update Company Name
**File:** `index.html` (Line ~10)
```html
<h1 class="logo">Your Company Name Here</h1>
```

### Update Colors
**File:** `assets/css/style.css` (Lines 1-15)
```css
--primary-color: #007bff;      /* Change this */
--secondary-color: #28a745;    /* And this */
--accent-color: #ff6b35;       /* And this */
```

### Update Financial Data
**File:** `index.html` (Search for "Initial Capital")
```html
<span class="amount">$6,200</span>    <!-- Update amount -->
<span class="percent">63%</span>      <!-- Update percent -->
```

### Update Team Members
**File:** `index.html` (Search for "Team Section")
```html
<h3>Your Name</h3>
<p class="member-role">Your Title</p>
<p class="member-bio">Your bio here...</p>
```

### Update Contact Info
**File:** `index.html` (Search for "Contact Information")
```html
<a href="mailto:your-email@company.com">your-email@company.com</a>
```

---

## 📊 Portfolio Contents

### Sections
1. **Navigation** - Links to all sections
2. **Hero** - Eye-catching headline + metrics
3. **About** - Mission, market, advantages
4. **Products** - 3-in-1 platform breakdown
5. **Team** - Founder profiles
6. **Financials** - Capital, revenue, profitability
7. **Contact** - Forms + social links
8. **Footer** - Copyright

### Key Features
✅ Mobile responsive  
✅ Animated counters  
✅ Interactive forms  
✅ Professional design  
✅ Fast loading  
✅ Print-friendly  
✅ SEO optimized  

---

## 📱 Test on Mobile

### In Browser DevTools
Press `F12` → Click device icon (top-left) → Choose device

### On Phone
1. Get your computer's IP: `ipconfig` (look for IPv4 Address)
2. On phone, visit: `http://YOUR_IP:3000`

---

## 🎨 Styling Tips

### Change Hero Background
**File:** `assets/css/style.css`
```css
.hero {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Add Section Spacing
Change padding in CSS:
```css
.products {
    padding: 100px 0;  /* More space */
}
```

### Adjust Card Sizes
```css
.product-card {
    padding: 40px;  /* Larger padding */
}
```

---

## 🔧 Common Changes

### Add New Product
1. Copy product card HTML in products section
2. Update product name, icon, features
3. Update pricing and metrics
4. Save & refresh browser

### Change Color Scheme
**Update in `assets/css/style.css`:**
```css
:root {
    --primary-color: #1e88e5;      /* New primary */
    --secondary-color: #43a047;    /* New secondary */
    --accent-color: #fb8c00;       /* New accent */
}
```

### Hide a Section
Add to HTML element:
```html
<section style="display: none;">
    <!-- Hidden content -->
</section>
```

---

## ✅ Before Going Live

- [ ] Update company name
- [ ] Update team members
- [ ] Update financial data
- [ ] Test all links work
- [ ] Test responsive design
- [ ] Update social media links
- [ ] Check all text for typos
- [ ] Test contact form
- [ ] Set up analytics (optional)

---

## 📤 Deploy Options

| Option | Time | Cost | Ease |
|--------|------|------|------|
| **Netlify** | 2 min | Free | ⭐⭐⭐⭐⭐ |
| **Vercel** | 3 min | Free | ⭐⭐⭐⭐⭐ |
| **GitHub Pages** | 5 min | Free | ⭐⭐⭐⭐ |
| **Traditional Hosting** | 30 min | $5-20/mo | ⭐⭐⭐ |

**Recommendation:** Use **Netlify** for best experience!

---

## 🆘 Need Help?

### Check Files
- Main page: `index.html`
- Styling: `assets/css/style.css`
- JavaScript: `assets/js/main.js`
- Docs: `README.md`, `DEPLOYMENT.md`

### Verify Server
```powershell
# Check if server is running
netstat -ano | findstr :3000

# If not running, start it
cd c:\workspace\portfolio
node server.js
```

### Browser Issues
- Clear cache: `Ctrl+Shift+Delete`
- Hard refresh: `Ctrl+Shift+R`
- Check DevTools console: `F12`

---

## 🎯 Next Steps

1. **Customize**: Update company details
2. **Test**: Open in different browsers
3. **Deploy**: Push to Netlify or GitHub
4. **Share**: Send link to investors/partners
5. **Monitor**: Track visitor analytics
6. **Update**: Keep content fresh

---

## 📞 Ready?

**Start here:**
```powershell
cd c:\workspace\portfolio
node server.js
```

**Then visit:** http://localhost:3000

---

**Happy portfolio building! 🚀**

---

**Version:** 1.0  
**Last Updated:** April 9, 2026  
**Tech Stack:** HTML5 + CSS3 + Vanilla JavaScript + Node.js
