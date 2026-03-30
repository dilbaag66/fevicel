/* ─── FEVICEL WEBSITE SCRIPT ─── */

// ─── NAVBAR SCROLL ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
// Close on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ─── SMOOTH SCROLL ACTIVE NAV ───
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a:not(.nav-cta)');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const offset = sec.offsetTop - 100;
    if (window.scrollY >= offset) current = sec.getAttribute('id');
  });
  navAnchors.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) a.classList.add('active');
  });
});

// ─── AOS (Animate on Scroll) ───
const aosElements = document.querySelectorAll('[data-aos]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});
aosElements.forEach(el => observer.observe(el));

// ─── PRODUCT FILTER ───
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    productCards.forEach(card => {
      const category = card.dataset.category;
      if (filter === 'all' || category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeInCard 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ─── CONTACT FORM SUBMIT (WHATSAPP) ───
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const whatsappNumber = "918872419354";
  
  let text = `Hello JSM Group,

`;
  text += `*Name:* ${name}
`;
  if (email) text += `*Email:* ${email}
`;
  if (phone) text += `*Phone:* ${phone}
`;
  if (subject) text += `*Subject:* ${subject}
`;
  text += `*Message:* ${message}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
  
  submitBtn.textContent = 'Redirecting to WhatsApp...';
  submitBtn.style.background = '#25D366'; // WhatsApp Green
  
  setTimeout(() => {
    submitBtn.textContent = 'Send Message';
    submitBtn.style.background = '';
    form.reset();
  }, 3000);
});

// ─── SWATCH HOVER TOOLTIP ───
const swatches = document.querySelectorAll('.swatch');
swatches.forEach(swatch => {
  const tooltip = document.createElement('div');
  tooltip.className = 'swatch-tooltip';
  tooltip.textContent = swatch.getAttribute('title') || '';
  tooltip.style.cssText = `
    position:absolute; bottom:130%; left:50%; transform:translateX(-50%);
    background:#1e1e1e; color:#f5f5f5; font-size:0.65rem; font-weight:600;
    padding:4px 8px; border-radius:4px; white-space:nowrap; pointer-events:none;
    opacity:0; transition:opacity 0.2s; border:1px solid rgba(255,255,255,0.1);
    font-family:'Inter',sans-serif; letter-spacing:0.05em;
  `;
  swatch.style.position = 'relative';
  swatch.appendChild(tooltip);

  swatch.addEventListener('mouseenter', () => { tooltip.style.opacity = '1'; });
  swatch.addEventListener('mouseleave', () => { tooltip.style.opacity = '0'; });
});

// ─── COUNTER ANIMATION ───
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const duration = 1800;
  const step = Math.ceil(target / (duration / 16));
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { start = target; clearInterval(timer); }
    el.textContent = start + suffix;
  }, 16);
}

const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent;
      const num = parseInt(text);
      const suffix = text.replace(num.toString(), '');
      if (!el.dataset.animated) {
        el.dataset.animated = 'true';
        animateCounter(el, num, suffix);
      }
      statsObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNumbers.forEach(el => statsObserver.observe(el));

// ─── PARALLAX HERO ───
const heroBgImg = document.querySelector('.hero-bg-img');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (heroBgImg && scrolled < window.innerHeight) {
    heroBgImg.style.transform = `translateY(${scrolled * 0.25}px)`;
  }
});

// ─── CARD ANIMATION CSS KEYFRAME ───
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInCard {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .nav-links a.active { color: #ff5a20 !important; }
  .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .hamburger.active span:nth-child(2) { opacity: 0; }
  .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
`;
document.head.appendChild(style);

// ─── ADHESIVE VARIANT SWIPER ───
document.querySelectorAll('.adhesive-swiper').forEach(swiper => {
  const slides = Array.from(swiper.querySelectorAll('.swiper-slide-inner'));
  const dots   = Array.from(swiper.querySelectorAll('.sdot'));
  const prevBtn = swiper.querySelector('.swiper-prev');
  const nextBtn = swiper.querySelector('.swiper-next');
  const AUTO_DELAY = 3500;

  // Wrap slides in a flex track
  const track = document.createElement('div');
  track.className = 'swiper-track';
  slides.forEach(s => track.appendChild(s));
  swiper.insertBefore(track, swiper.firstChild);

  // Add progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'swiper-progress';
  swiper.appendChild(progressBar);

  let current = 0;
  let total = slides.length;
  let autoTimer = null;
  let progressAnim = null;

  function goTo(idx, resetProgress = true) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    if (resetProgress) startProgress();
  }

  function startProgress() {
    clearInterval(autoTimer);
    cancelAnimationFrame(progressAnim);
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    // Trigger reflow
    void progressBar.offsetWidth;
    progressBar.style.transition = `width ${AUTO_DELAY}ms linear`;
    progressBar.style.width = '100%';
    autoTimer = setTimeout(() => {
      goTo(current + 1);
    }, AUTO_DELAY);
  }

  // Arrow clicks
  prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));

  // Dot clicks
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Touch / drag swipe
  let startX = 0, isDragging = false;
  swiper.addEventListener('mousedown', e => { startX = e.clientX; isDragging = true; });
  swiper.addEventListener('touchstart', e => { startX = e.touches[0].clientX; isDragging = true; }, { passive: true });
  swiper.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });
  swiper.addEventListener('touchend', e => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
  });
  swiper.addEventListener('mouseleave', () => { isDragging = false; });

  // Pause on hover
  swiper.addEventListener('mouseenter', () => {
    clearTimeout(autoTimer);
    progressBar.style.transition = 'none';
  });
  swiper.addEventListener('mouseleave', () => startProgress());

  // Init
  goTo(0);
});
