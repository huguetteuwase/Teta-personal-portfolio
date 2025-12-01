'use strict';

// ==========================
// ELEMENT TOGGLE FUNCTION
// ==========================
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }


// ==========================
// SIDEBAR VARIABLES & TOGGLE
// ==========================
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});


// ==========================
// THEME TOGGLE
// ==========================
const themeToggleBtn = document.querySelector("[data-theme-btn]");
const body = document.body;

themeToggleBtn.addEventListener("click", function () {
  body.classList.toggle("light-theme");
  // Save the user's preference in local storage
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light-theme");
  } else {
    localStorage.removeItem("theme");
  }
});

// Check for saved theme preference on page load
if (localStorage.getItem("theme") === "light-theme") {
  body.classList.add("light-theme");
}


// ==========================
// TESTIMONIALS MODAL
// ==========================
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = item.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// ==========================
// CUSTOM SELECT & FILTER
// ==========================
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]"); // fixed typo
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(select);
});

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    const selectedValue = item.innerText.toLowerCase();
    selectValue.innerText = item.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || item.dataset.category === selectedValue) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

let lastClickedBtn = filterBtn[0];
filterBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = btn.innerText.toLowerCase();
    selectValue.innerText = btn.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    btn.classList.add("active");
    lastClickedBtn = btn;
  });
});


// ==========================
// CONTACT FORM VALIDATION
// ==========================
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});


// ==========================
// PAGE NAVIGATION
// ==========================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = link.textContent.trim().toLowerCase();

    // toggle pages
    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === targetPage);
    });

    // toggle nav links
    navigationLinks.forEach(nav => {
      nav.classList.toggle("active", nav === link);
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Show Resume page as default
const defaultPage = document.querySelector('[data-page="resume"]');
if (defaultPage) defaultPage.classList.add("active");


// ==========================
// BACK TO TOP BUTTON
// ==========================
const backToTopBtn = document.querySelector("[data-back-to-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// ==========================
// BLOG SPECIFIC JAVASCRIPT
// ==========================

const blogPosts = [
  {
    id: 1,
    title: "Design Conferences in 2022",
    category: "Design",
    date: "2022-10-24",
    excerpt: "Discover the most anticipated design conferences of the year. Learn about key speakers, networking opportunities, and how these events can shape your creative career.",
    tags: ["Events", "Networking", "Design"],
    image: "./assets/images/blog-1.jpg",
    content: `
          <p>In the ever-evolving world of design, conferences are invaluable for professional growth, offering a unique blend of inspiration, education, and networking. This year's events have adapted to new hybrid formats, making them more accessible than ever.</p>
          
          <h2 id="top-conferences">Top Conferences to Attend</h2>
          <p>The most impactful design conferences combine keynote presentations, workshops, and networking opportunities. Here's what makes them essential for designers looking to advance their careers and stay current with industry trends.</p>
          
          <div class="code-header">
            <span class="code-lang">JavaScript</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre class="with-header"><code>// Example: Organizing conference schedule
const conferences = {
  'Adobe MAX': { 
    date: 'October', 
    location: 'Los Angeles',
    focus: 'Creative Cloud & Design Tools'
  },
  'Config': { 
    date: 'June', 
    location: 'Virtual',
    focus: 'Product Design & Figma'
  },
  'AIGA Design': { 
    date: 'September', 
    location: 'Chicago',
    focus: 'Professional Development'
  }
};

// Filter conferences by date
const upcomingConferences = Object.entries(conferences)
  .filter(([name, details]) => {
    return new Date(details.date) > new Date();
  });</code></pre>
          
          <h2 id="networking-benefits">Networking Benefits</h2>
          <p>Beyond the sessions and workshops, conferences provide unparalleled networking opportunities. You'll meet industry leaders, potential collaborators, and peers facing similar challenges. Many attendees report that the connections made during coffee breaks and evening events are just as valuable as the formal programming.</p>
          
          <h2 id="key-takeaways">Key Takeaways</h2>
          <p>Attending conferences helps you stay current with industry trends, learn new tools and techniques, and build meaningful connections with other professionals. The investment in conference attendance typically pays dividends through improved skills, fresh perspectives, and career opportunities.</p>
        `
  },
  {
    id: 2,
    title: "Best Fonts Every Designer Should Know",
    category: "Design",
    date: "2022-09-15",
    excerpt: "A deep dive into the world of typography. This post explores essential fonts that can elevate your design and communicate your message with precision and style.",
    tags: ["Typography", "Resources", "Design"],
    image: "./assets/images/blog-2.jpg",
    content: `
          <p>Typography is the backbone of visual design. The right font can elevate a project from good to great, conveying mood, tone, and meaning. Understanding font psychology and technical implementation is a crucial skill for every designer.</p>
          
          <h2 id="essential-categories">Essential Font Categories</h2>
          <p>Professional designers should be familiar with various font categories: serif, sans-serif, display, and monospace fonts. Each serves a specific purpose and conveys different emotions and messages to your audience.</p>
          
          <div class="code-header">
            <span class="code-lang">CSS</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre class="with-header"><code>/* CSS Font Stack Example */
body {
  font-family: -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

code {
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.9em;
}</code></pre>
          
          <h2 id="modern-approaches">Modern Web Typography</h2>
          <p>Modern web design relies heavily on system fonts and variable fonts for performance and flexibility. Variable fonts allow you to adjust weight, width, and other attributes along a continuous axis, giving you unprecedented control with a single font file.</p>
        `
  },
  {
    id: 3,
    title: "Design Digest #80",
    category: "News",
    date: "2022-08-28",
    excerpt: "Your weekly dose of design inspiration. This digest covers the latest trends, noteworthy projects, and must-read articles from the global design community.",
    tags: ["Weekly", "Inspiration", "Resources"],
    image: "./assets/images/blog-3.jpg",
    content: `
          <p>Welcome to this week's design digest, where we curate the most exciting developments in the design world. From groundbreaking UI patterns to innovative branding, here's what caught our eye.</p>
          
          <h2>This Week's Highlights</h2>
          <p>We've curated the best design work, articles, and resources from around the web. Discover new techniques and stay inspired.</p>
          
          <p>Featured projects showcase innovative approaches to user interface design, with emphasis on accessibility and user experience.</p>
        `
  },
  {
    id: 4,
    title: "UI Interactions of the Week",
    category: "Development",
    date: "2022-08-05",
    excerpt: "Explore a curated collection of the most creative and effective UI interactions. Get inspired by animations and micro-interactions that create a delightful user experience.",
    tags: ["UI/UX", "Animation", "Code"],
    image: "./assets/images/blog-4.jpg",
    content: `
          <p>Micro-interactions are the heart of a great user experience. They provide feedback, create delightful moments, and make digital products feel responsive and alive. This week, we're showcasing animations that masterfully guide users and enhance usability.</p>
          
          <h2 id="smooth-animations">Implementing Smooth Animations</h2>
          <p>Modern CSS and JavaScript enable sophisticated animations with minimal code. The key is understanding timing functions, transforms, and performance optimization. Here's a practical example:</p>
          
          <div class="code-header">
            <span class="code-lang">JavaScript</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre class="with-header"><code>// Simple hover animation with JavaScript
const card = document.querySelector('.card');

card.addEventListener('mouseenter', () => {
  card.style.transform = 'translateY(-8px)';
  card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  card.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.2)';
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'translateY(0)';
  card.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
});

// Using Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.1 });</code></pre>
          
          <h2 id="best-practices">Best Practices</h2>
          <p>Keep animations subtle and purposeful. They should enhance usability, not distract from content. Aim for animations between 200-500ms for most interactions. Always respect user preferences for reduced motion.</p>
          
          <h2 id="performance">Performance Considerations</h2>
          <p>Use CSS transforms and opacity for the smoothest animations, as these properties are GPU-accelerated. Avoid animating properties like width, height, or top/left which trigger layout recalculations.</p>
        `
  },
  {
    id: 5,
    title: "The Forgotten Art of Spacing",
    category: "Tutorial",
    date: "2022-07-18",
    excerpt: "Mastering whitespace is crucial for creating clean, readable, and professional designs. This tutorial explores the principles of spacing and how to apply them effectively.",
    tags: ["Layout", "Typography", "Tutorial"],
    image: "./assets/images/blog-5.jpg",
    content: `
          <p>White space, or negative space, is one of the most powerful tools in a designer's arsenal. It's not just empty space—it's an active element that guides the user's eye, creates rhythm, and improves readability. Proper spacing can elevate a design from good to exceptional.</p>
          
          <h2 id="breathing-room">The Power of Breathing Room</h2>
          <p>Proper spacing creates visual hierarchy, improves readability, and gives your design a premium feel. It's not empty space—it's an active design element that guides the user's eye and creates rhythm. Here's how to implement it systematically:</p>
          
          <div class="code-header">
            <span class="code-lang">CSS</span>
            <button class="copy-btn" onclick="copyCode(this)">Copy</button>
          </div>
          <pre class="with-header"><code>/* Spacing system using CSS custom properties */
:root {
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 2rem;      /* 32px */
  --space-xl: 4rem;      /* 64px */
  --space-2xl: 8rem;     /* 128px */
}

.content {
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
}

.section {
  margin-bottom: var(--space-2xl);
}

/* Using the 8pt grid system */
.card {
  padding: calc(var(--space-md) * 2);
  gap: var(--space-md);
}</code></pre>
          
          <h2 id="practical-guidelines">Practical Guidelines</h2>
          <p>Use a consistent spacing scale throughout your design. This creates rhythm and makes your interface feel cohesive. The 8-point grid system is popular because it aligns well with most screen densities and makes spacing decisions easier.</p>
          
          <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
          <p>Don't use arbitrary spacing values. Stick to your spacing scale. Also, avoid cramming too much content into a small space—if something feels crowded, it probably is. Remember: white space is not wasted space.</p>
        `
  },
  {
    id: 6,
    title: "Design Digest #79",
    category: "News",
    date: "2022-07-02",
    excerpt: "Catch up on the latest in digital design. This week's digest explores emerging trends in 3D illustration, sustainable design practices, and the future of creative tools.",
    tags: ["Weekly", "Trends", "Inspiration"],
    image: "./assets/images/blog-6.jpg",
    content: `
          <p>Another week of outstanding design work from talented creators around the world. This digest focuses on emerging trends in digital design, from the rise of glassmorphism to the integration of AI in creative workflows.</p>
          
          <h2>Trending Techniques</h2>
          <p>Glass morphism, 3D elements, and bold typography continue to dominate modern web design. Learn how top designers are implementing these trends.</p>
          
          <p>We also explore sustainable design practices and how designers are considering environmental impact in their work.</p>
        `
  }
];

let currentFilter = 'all';
let currentSearch = '';
let currentPostId = null;
let comments = {};

function renderBlogs() {
  const grid = document.getElementById('blogGrid');
  const noResults = document.getElementById('noResults');
  
  const filtered = blogPosts.filter(post => {
    const matchesFilter = currentFilter === 'all' || post.category === currentFilter;
    const matchesSearch = currentSearch === '' || 
      post.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(currentSearch.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(currentSearch.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = filtered.map(post => `
      <div class="blog-card" onclick="openModal(${post.id})">
        <img src="${post.image}" alt="${post.title}" class="blog-banner">
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-category">${post.category}</span>
            <span class="blog-date">${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <h3 class="blog-title">${post.title}</h3>
          <p class="blog-excerpt">${post.excerpt}</p>
          <div class="blog-tags">
            ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <a class="read-more">
            Read more 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    `).join('');
  }
}

function openModal(id) {
  const post = blogPosts.find(p => p.id === id);
  if (!post) return;

  currentPostId = id;

  document.getElementById('modalImage').src = post.image;
  document.getElementById('modalImage').alt = post.title;
  document.getElementById('modalMeta').innerHTML = `
    <span class="blog-category">${post.category}</span>
    <span class="blog-date">${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
  `;
  document.getElementById('modalTitle').textContent = post.title;
  document.getElementById('modalContent').innerHTML = post.content;

  // Generate table of contents
  const headings = document.getElementById('modalContent').querySelectorAll('h2[id]');
  const toc = document.getElementById('tableOfContents');
  const tocList = document.getElementById('tocList');
  
  if (headings.length > 0) {
    toc.style.display = 'block';
    tocList.innerHTML = Array.from(headings).map(h => 
      `<li><a href="#${h.id}" onclick="scrollToSection('${h.id}')">${h.textContent}</a></li>`
    ).join('');
  } else {
    toc.style.display = 'none';
  }

  // Load and display comments
  renderComments(id);

  const related = blogPosts
    .filter(p => p.id !== id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  document.getElementById('relatedPosts').innerHTML = related.map(p => `
    <div class="related-card" onclick="openModal(${p.id})">
      <h4 class="related-title">${p.title}</h4>
      <p class="related-excerpt">${p.excerpt}</p>
    </div>
  `).join('');

  document.getElementById('modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  document.body.style.overflow = 'auto';
  currentPostId = null;
  document.getElementById('commentName').value = '';
  document.getElementById('commentEmail').value = '';
  document.getElementById('commentText').value = '';
}

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function copyCode(button) {
  const codeBlock = button.closest('.code-header').nextElementSibling;
  const code = codeBlock.textContent;
  
  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
}

function shareOn(platform) {
  const post = blogPosts.find(p => p.id === currentPostId);
  if (!post) return;

  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(post.title);
  
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
  };

  if (shareUrls[platform]) {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  }
}

function submitComment(event) {
  event.preventDefault();
  
  const name = document.getElementById('commentName').value;
  const email = document.getElementById('commentEmail').value;
  const text = document.getElementById('commentText').value;
  
  if (!comments[currentPostId]) {
    comments[currentPostId] = [];
  }
  
  comments[currentPostId].push({
    id: Date.now(),
    name: name,
    email: email,
    text: text,
    date: new Date()
  });
  
  renderComments(currentPostId);
  
  document.getElementById('commentName').value = '';
  document.getElementById('commentEmail').value = '';
  document.getElementById('commentText').value = '';
}

function renderComments(postId) {
  const postComments = comments[postId] || [];
  const count = postComments.length;
  
  document.getElementById('commentCount').textContent = count;
  
  const commentsList = document.getElementById('commentsList');
  
  if (count === 0) {
    commentsList.innerHTML = '<p style="color: #71717a; text-align: center; padding: 2rem;">No comments yet. Be the first to share your thoughts!</p>';
  } else {
    commentsList.innerHTML = postComments.map(comment => `
      <div class="comment">
        <div class="comment-header">
          <div class="comment-avatar">${comment.name.charAt(0).toUpperCase()}</div>
          <div class="comment-info">
            <h4>${comment.name}</h4>
            <span class="comment-date">${formatDate(comment.date)}</span>
          </div>
        </div>
        <p class="comment-text">${comment.text}</p>
      </div>
    `).join('');
  }
}

function formatDate(date) {
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

document.querySelectorAll('.filter-tag').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderBlogs();
  });
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  currentSearch = e.target.value;
  renderBlogs();
});

document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') closeModal();
});

renderBlogs();

// ==========================
// TYPEWRITER EFFECT FOR NAME
// ==========================
const nameElement = document.querySelector('.sidebar-info .name');
if (nameElement) {
  const fullName = nameElement.textContent;
  nameElement.textContent = ''; // Clear initial text
  nameElement.classList.add('typewriter-cursor'); // Add cursor class for blinking effect

  let charIndex = 0;
  function typeWriter() {
    if (charIndex < fullName.length) {
      nameElement.textContent += fullName.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds per character)
    } else {
      nameElement.classList.remove('typewriter-cursor'); // Remove cursor after typing is complete
    }
  }

  // Start the typewriter effect after a short delay to ensure everything else is loaded
  setTimeout(typeWriter, 500); // Initial delay before typing starts
}

// ==========================
// SKILL BAR ANIMATION
// ==========================
const skillsSection = document.querySelector('.skill');
const skillProgressBars = document.querySelectorAll('.skill-progress-fill');

function animateSkills() {
  skillProgressBars.forEach(bar => {
    const dataElement = bar.parentElement.previousElementSibling.querySelector('data');
    const targetValue = parseInt(dataElement.value, 10);

    // Animate the bar
    bar.style.width = targetValue + '%';

    // Animate the percentage number
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue >= targetValue) {
        clearInterval(interval);
        dataElement.textContent = targetValue + '%';
      } else {
        currentValue++;
        dataElement.textContent = currentValue + '%';
      }
    }, 20); // Adjust speed of the number count-up
  });
}

const skillsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, {
  threshold: 0.2 // Trigger when 20% of the element is visible
});

if (skillsSection) {
  // Set initial width to 0 before observing
  skillProgressBars.forEach(bar => { bar.style.width = '0%'; });
  skillsObserver.observe(skillsSection);
}
