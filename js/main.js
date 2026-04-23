//ክፍል 1 — Hamburger Menu
//ይህን ጻፍ፦

 // ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-links a')
  .forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

document.addEventListener('click', function(e) {
  if (!hamburger.contains(e.target) &&
      !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  links.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    if (!fname || !email) {
      alert('Please fill all required fields!');
      return;
    }
    alert('Thank you, ' + fname + '! Message sent.');
    contactForm.reset();
  });
}

// ===== COPYRIGHT =====
const copyright = document.getElementById('copyright');
if (copyright) {
  copyright.innerHTML =
    '&copy; ' + new Date().getFullYear() +
    ' Deber Genete St, Mary Orthodox Tewahedo Church.' +
    ' All rights reserved.';
}

// ===== FADE IN =====
const observer = new IntersectionObserver(
  function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(
  '.service-card, .event-card, .stat, .give-method-card'
).forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== COPY TEXT =====
function copyText(elementId) {
  const text = document.getElementById(elementId)
                       .textContent;
  navigator.clipboard.writeText(text);
  alert('Copied: ' + text);
}

// ===== SERMON FILTER =====
function filterSermon(cat, btn) {
  document.querySelectorAll('.filter-btn')
    .forEach(function(b) {
      b.classList.remove('active');
    });
  btn.classList.add('active');
  document.querySelectorAll('.sermon-card')
    .forEach(function(card) {
      if (cat === 'all' ||
          card.getAttribute('data-cat') === cat) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
}        

// ===== LANGUAGE TOGGLE =====
const translations = {
  en: {
    'txt-tag': 'House of Faith',
    'txt-title': 'Sacred Community',
    'txt-desc': 'A gathering place of faith, worship, and fellowship. All are welcome - come as you are.',
    'txt-btn1': 'Our Services',
    'txt-btn2': 'Plan a Visit',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-services': 'Services',
    'nav-sermons': 'Sermons',
    'nav-events': 'Events',
    'nav-give': 'Give',
    'nav-contact': 'Contact'
  },
  am: {
    'txt-tag': 'የእምነት ቤት',
    'txt-title': 'ቅዱስ ማህበረሰብ',
    'txt-desc': 'የእምነት፣ አምልኮ፣ እና ኅብረት ቦታ። ሁሉም ይቀበላሉ — እንደ ሆናችሁ ኑ።',
    'txt-btn1': 'አገልግሎቶቻችን',
    'txt-btn2': 'ሊጠይቁን',
    'nav-home': 'መነሻ',
    'nav-about': 'ስለ እኛ',
    'nav-services': 'አገልግሎቶች',
    'nav-sermons': 'ስብከቶች',
    'nav-events': 'ዝግጅቶች',
    'nav-give': 'ስጦታ',
    'nav-contact': 'ያናግሩን'
  }
};

function setLang(lang) {
  const t = translations[lang];

  for (const id in t) {
    const el = document.getElementById(id);
    if (el) el.textContent = t[id];
  }

  document.getElementById('btn-en')
    .classList.toggle('active', lang === 'en');
  document.getElementById('btn-am')
    .classList.toggle('active', lang === 'am');
}










