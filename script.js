/* ==========================================
   PORTFOLIO DATA
   ========================================== */
const projects = [
  {
    title: '台北大安 · 現代簡約公寓',
    tag: '住宅',
    location: '台北市大安區',
    size: '56 坪',
    year: '2024',
    style: '現代簡約',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    desc: '業主是一對年輕夫妻，希望打造一個既簡潔又有溫度的家。以白色與淺木色為主調，透過材質的層次感創造視覺豐富度，開放式廚房與客廳的格局設計讓空間更加寬敞通透。',
    features: ['開放式格局', '訂製收納', '木作天花', '智慧照明', '地暖系統']
  },
  {
    title: '信義區 · 科技公司總部',
    tag: '商業',
    location: '台北市信義區',
    size: '320 坪',
    year: '2024',
    style: '現代工業',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    desc: '為一家快速成長的科技新創公司打造全新辦公環境。以品牌色彩為設計語言，融合開放協作區與靜謐專注區，並設計多個非正式會議空間，促進員工自然互動與創意激盪。',
    features: ['開放辦公', '電話亭隔音艙', '品牌牆設計', '員工休憩區', '模組化家具']
  },
  {
    title: '天母 · 北歐風格透天',
    tag: '住宅',
    location: '台北市士林區天母',
    size: '82 坪',
    year: '2023',
    style: '北歐 Hygge',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
    desc: '業主熱愛北歐旅行，希望將北歐的慵懶舒適感帶回家。以米白、鼠尾草綠與自然木材為主軸，大量使用天然材質，搭配精選北歐家具品牌，打造真正令人放鬆的 Hygge 生活氛圍。',
    features: ['天然材質', '北歐選物', '壁爐設計', '地板暖氣', '大量自然採光']
  },
  {
    title: '中山區 · 日式侘寂茶空間',
    tag: '翻新',
    location: '台北市中山區',
    size: '28 坪',
    year: '2023',
    style: '日式侘寂',
    img: 'https://images.unsplash.com/photo-1583845112239-97ef1341b271?w=800&q=80',
    desc: '這是一棟超過 30 年的老公寓翻新案。業主希望將這個充滿回憶的老家改造成一個能沉澱心靈的茶空間。保留了部分舊有的水泥牆面，引入自然石材、竹材與手作陶器，詮釋侘寂美學中的殘缺之美。',
    features: ['老屋格局調整', '手工泥作牆', '地板抬高設計', '嵌入式展示架', '竹材運用']
  },
  {
    title: '大直 · 親子友善溫馨宅',
    tag: '住宅',
    location: '台北市中山區大直',
    size: '45 坪',
    year: '2023',
    style: '溫馨現代',
    img: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
    desc: '兩個孩子的家庭，需要既安全又充滿創意的生活空間。設計了大量安全圓角家具、地板軟墊區，以及孩子們的專屬藝術牆。巧妙的收納系統讓玩具隨手可收，讓大人與小孩都能快樂共居。',
    features: ['安全圓角設計', '塗鴉牆', '親子共讀角', '智慧收納', '防潮地板']
  },
  {
    title: '松山區 · 工業風義式餐廳',
    tag: '商業',
    location: '台北市松山區',
    size: '65 坪 · 80 席',
    year: '2022',
    style: '工業混搭',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
    desc: '業主希望打造一個讓客人一走進來就有置身義大利米蘭的錯覺。以裸露磚牆、黑鐵件與木紋為主要材料，搭配溫暖的琥珀色燈光，製造粗獷中帶有溫度的工業浪漫氣息。',
    features: ['裸露磚牆', '黑鐵件家具', '訂製吧台', '酒窖展示', '可調光系統']
  }
];


/* ==========================================
   NAVBAR
   ========================================== */
const navbar = document.getElementById('navbar');

function updateNav() {
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

function openMenu() {
  mobileMenu.classList.add('open');
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  mobileMenu.classList.remove('open');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));


/* ==========================================
   HERO BG PARALLAX
   ========================================== */
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    heroBg.style.transform = `scale(1.05) translateY(${window.scrollY * 0.15}px)`;
  }
}, { passive: true });


/* ==========================================
   STATS COUNTER
   ========================================== */
function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.stat-num');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCount(e.target);
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => statsObserver.observe(c));


/* ==========================================
   PORTFOLIO FILTER
   ========================================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    portfolioItems.forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.style.opacity = '0';
      item.style.transform = 'scale(0.95)';
      setTimeout(() => {
        item.style.display = show ? '' : 'none';
        if (show) {
          requestAnimationFrame(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
            item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
          });
        }
      }, 200);
    });
  });
});


/* ==========================================
   PROJECT MODAL
   ========================================== */
const modal = document.getElementById('project-modal');
const modalBackdrop = modal.querySelector('.modal-backdrop');
const modalClose = modal.querySelector('.modal-close');

function openModal(index) {
  const p = projects[index];
  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-img').alt = p.title;
  document.getElementById('modal-tag').textContent = p.tag;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-location').textContent = p.location;
  document.getElementById('modal-size').textContent = p.size;
  document.getElementById('modal-year').textContent = p.year;
  document.getElementById('modal-style').textContent = p.style;
  document.getElementById('modal-desc').textContent = p.desc;

  const featuresEl = document.getElementById('modal-features');
  featuresEl.innerHTML = p.features.map(f => `<span>${f}</span>`).join('');

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    openModal(parseInt(btn.dataset.index, 10));
  });
});

modalBackdrop.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


/* ==========================================
   TESTIMONIALS SLIDER
   ========================================== */
const track = document.querySelector('.testimonials-track');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlide;

function isMobile() { return window.innerWidth <= 768; }

function goToSlide(index) {
  if (isMobile()) return;
  const cards = track.querySelectorAll('.testimonial-card');
  const cardWidth = cards[0].offsetWidth + 32;
  currentSlide = index;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide);
    goToSlide(i);
    startAuto();
  });
});

function startAuto() {
  autoSlide = setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    goToSlide(currentSlide);
  }, 5000);
}

startAuto();
window.addEventListener('resize', () => {
  if (isMobile()) track.style.transform = '';
  else goToSlide(currentSlide);
});


/* ==========================================
   SCROLL REVEAL
   ========================================== */
const revealEls = document.querySelectorAll(
  '.service-card, .portfolio-item, .award-item, .step, .testimonial-card, .about-container, .stat, .contact-container'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => revealObserver.observe(el));


/* ==========================================
   CONTACT FORM
   ========================================== */
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('form-success');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach(field => {
    field.classList.remove('error');
    if (!field.value.trim()) {
      field.classList.add('error');
      valid = false;
    }
    if (field.type === 'email' && field.value && !/\S+@\S+\.\S+/.test(field.value)) {
      field.classList.add('error');
      valid = false;
    }
  });

  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '傳送中…';
  btn.disabled = true;

  setTimeout(() => {
    form.reset();
    btn.textContent = '送出諮詢';
    btn.disabled = false;
    successMsg.classList.remove('hidden');
    setTimeout(() => successMsg.classList.add('hidden'), 5000);
  }, 1200);
});

// Clear error on input
form.querySelectorAll('input, select, textarea').forEach(field => {
  field.addEventListener('input', () => field.classList.remove('error'));
});


/* ==========================================
   ACTIVE NAV LINK ON SCROLL
   ========================================== */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navAnchors.forEach(a => {
        a.style.opacity = a.getAttribute('href') === `#${id}` ? '1' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
