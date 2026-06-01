/**
 * Every Day - Main JavaScript
 * Vanilla JS for interactive elements
 */

// DOM Elements
const contactBtn = document.querySelector('.contact-btn');
const scrollIndicator = document.querySelector('.scroll-indicator');
const navLinks = document.querySelectorAll('.nav-link, .brand');

/**
 * Smooth scroll to section
 */
function smoothScroll(target) {
  if (target.startsWith('#')) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Event Listeners
 */

// Smooth scroll on navigation links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Only prevent default for hash links
    if (link.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      smoothScroll(link.getAttribute('href'));
    }
  });
});

// Scroll to next section on scroll indicator click
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    const featureSection = document.querySelector('.feature-section');
    if (featureSection) {
      featureSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  scrollIndicator.style.cursor = 'pointer';
}

// Contact button action
if (contactBtn) {
  contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // You can add contact modal or form handling here
    console.log('Contact button clicked');
  });
}

/**
 * Intersection Observer for fade-in animations
 */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe feature sections
document.querySelectorAll('.feature-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

/**
 * Handle window resize for responsive behavior
 */
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    console.log('Window resized');
  }, 250);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Page loaded - Every Day');
  
  // Set focus management for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close any open modals here if needed
    }
  });
});

// Log page visibility
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden');
  } else {
    console.log('Page visible');
  }
});
