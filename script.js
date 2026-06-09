/* ==========================================
   NAVBAR — scrolled state + page detection
   ========================================== */
const navbar = document.getElementById('navbar');

function updateNav() {
  const onHero = document.getElementById('hero');
  if (!onHero) {
    navbar.classList.add('page-nav', 'scrolled');
    return;
  }
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('dark-nav');
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.add('dark-nav');
  }
}
updateNav();
window.addEventListener('scroll', updateNav, { passive: true });

// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const closeBtn = document.querySelector('.close-btn');

function openMenu() { mobileMenu.classList.add('open'); menuOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeMenu() { mobileMenu.classList.remove('open'); menuOverlay.classList.remove('active'); document.body.style.overflow = ''; }

if (navToggle) navToggle.addEventListener('click', openMenu);
if (closeBtn) closeBtn.addEventListener('click', closeMenu);
if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
document.querySelectorAll('#mobile-menu a').forEach(a => a.addEventListener('click', closeMenu));


/* ==========================================
   HERO PARALLAX
   ========================================== */
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) {
      heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.15}px)`;
    }
  }, { passive: true });
}


/* ==========================================
   STATS COUNTER
   ========================================== */
function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const start = performance.now();
  const duration = 1800;
  function step(now) {
    const eased = 1 - Math.pow(1 - Math.min((now - start) / duration, 1), 3);
    el.textContent = Math.round(eased * target);
    if (eased < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
const counters = document.querySelectorAll('.stat-num');
if (counters.length) {
  const statsObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); statsObs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  counters.forEach(c => statsObs.observe(c));
}


/* ==========================================
   PORTFOLIO FILTER
   ========================================== */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.portfolio-item').forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
      if (show) {
        item.style.display = '';
        requestAnimationFrame(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; });
      } else {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        setTimeout(() => { if (!show) item.style.display = 'none'; }, 350);
      }
    });
  });
});


/* ==========================================
   PROJECT MODAL
   ========================================== */
const modal = document.getElementById('project-modal');
if (modal) {
  const modalBackdrop = modal.querySelector('.modal-backdrop');
  const modalClose    = modal.querySelector('.modal-close');

  function openModal(index) {
    if (typeof projects === 'undefined') return;
    const p = projects[index];
    modal.querySelector('#modal-img').src = p.img;
    modal.querySelector('#modal-img').alt = p.title;
    modal.querySelector('#modal-tag').textContent = p.tag;
    modal.querySelector('#modal-title').textContent = p.title;
    modal.querySelector('#modal-location').textContent = p.location;
    modal.querySelector('#modal-size').textContent = p.size;
    modal.querySelector('#modal-year').textContent = p.year;
    modal.querySelector('#modal-style').textContent = p.style;
    modal.querySelector('#modal-desc').textContent = p.desc;
    modal.querySelector('#modal-features').innerHTML = p.features.map(f => `<span>${f}</span>`).join('');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); openModal(+btn.dataset.index); });
  });
  modalBackdrop.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}


/* ==========================================
   TESTIMONIALS SLIDER
   ========================================== */
const track = document.querySelector('.testimonials-track');
const dots  = document.querySelectorAll('.dot');
if (track && dots.length) {
  let current = 0;
  let timer;
  const isMobile = () => window.innerWidth <= 768;

  function goTo(i) {
    if (isMobile()) return;
    const cards = track.querySelectorAll('.testimonial-card');
    if (!cards.length) return;
    const w = cards[0].offsetWidth + 32;
    current = i;
    track.style.transform = `translateX(-${i * w}px)`;
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }
  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo((current + 1) % dots.length), 5000);
  }
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startAuto(); }));
  startAuto();
  window.addEventListener('resize', () => { if (isMobile()) track.style.transform = ''; else goTo(current); });
}


/* ==========================================
   SCROLL REVEAL
   ========================================== */
const revealTargets = document.querySelectorAll(
  '.service-card, .portfolio-item, .award-item, .step, .testimonial-card,' +
  '.about-container, .stat, .contact-container, .philosophy-item,' +
  '.timeline-item, .pricing-card, .addon-item, .faq-item,' +
  '.teaser-container, .featured-card'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));


/* ==========================================
   CONTACT FORM
   ========================================== */
const form = document.getElementById('contactForm');
if (form) {
  const successMsg = document.getElementById('form-success');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(f => {
      f.classList.remove('error');
      if (!f.value.trim()) { f.classList.add('error'); valid = false; }
      if (f.type === 'email' && f.value && !/\S+@\S+\.\S+/.test(f.value)) { f.classList.add('error'); valid = false; }
    });
    if (!valid) return;
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '傳送中…'; btn.disabled = true;
    setTimeout(() => {
      form.reset(); btn.textContent = '送出諮詢'; btn.disabled = false;
      successMsg.classList.remove('hidden');
      setTimeout(() => successMsg.classList.add('hidden'), 5000);
    }, 1200);
  });
  form.querySelectorAll('input, select, textarea').forEach(f => f.addEventListener('input', () => f.classList.remove('error')));
}


/* ==========================================
   FAQ ACCORDION
   ========================================== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
