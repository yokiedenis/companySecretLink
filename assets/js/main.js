/* ==========================================
   TECH SOLUTIONS UGANDA - MAIN JAVASCRIPT
   ========================================== */

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Form submission handler
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields");
      return;
    }

    // Show success message
    alert(
      `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`,
    );

    // Reset form
    contactForm.reset();

    // In production, you would send this to a backend server
    // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify({name, email, subject, message}) })
  });
}

// Scroll animation - reveal elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply animation to cards
document
  .querySelectorAll(
    ".product-card, .team-member, .financial-card, .metric-card",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Add active state to navbar links based on scroll position
window.addEventListener("scroll", function () {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Add active link styling
const style = document.createElement("style");
style.textContent = `
    .nav-menu a.active {
        color: var(--accent-color) !important;
        font-weight: 700;
        text-shadow: 0 0 10px rgba(255, 107, 53, 0.3);
    }
`;
document.head.appendChild(style);

// Counter animation for stats
function animateCounters() {
  const stats = document.querySelectorAll(".hero-stats .stat h3");

  stats.forEach((stat) => {
    const target = stat.textContent;
    const isPercentage = target.includes("%");
    const isMoney = target.includes("$");
    const isMonth = target.includes("Mo");

    let finalValue;
    if (isPercentage) {
      finalValue = parseInt(target);
    } else if (isMoney) {
      finalValue = parseInt(target.replace(/[^0-9]/g, ""));
    } else if (isMonth) {
      finalValue = parseFloat(target);
    } else {
      finalValue = parseInt(target.replace(/[^0-9]/g, ""));
    }

    let currentValue = 0;
    const increment = finalValue / 50;

    const counter = setInterval(() => {
      currentValue += increment;
      if (currentValue >= finalValue) {
        currentValue = finalValue;
        clearInterval(counter);
      }

      if (isPercentage) {
        stat.textContent = Math.floor(currentValue) + "%";
      } else if (isMoney) {
        stat.textContent =
          "$" + Math.floor(currentValue).toLocaleString() + "K";
      } else if (isMonth) {
        stat.textContent = currentValue.toFixed(1) + " Mo";
      } else {
        stat.textContent = Math.floor(currentValue).toLocaleString();
      }
    }, 30);
  });
}

// Trigger counter animation when hero section is visible
const heroObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        animateCounters();
        entry.target.dataset.animated = "true";
      }
    });
  },
  { threshold: 0.5 },
);

const heroSection = document.querySelector(".hero");
if (heroSection) {
  heroObserver.observe(heroSection);
}

// Mobile menu toggle (if you add a hamburger menu later)
function setupMobileMenu() {
  const navMenu = document.querySelector(".nav-menu");
  if (!navMenu) return;

  // Close menu when clicking on a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });
}

setupMobileMenu();

// Print-friendly styles for PDF generation
window.addEventListener("beforeprint", function () {
  document.body.style.background = "white";
  document.querySelectorAll("section").forEach((section) => {
    section.style.pageBreakInside = "avoid";
  });
});

console.log("Tech Solutions Uganda Portfolio - Loaded successfully! 🚀");
