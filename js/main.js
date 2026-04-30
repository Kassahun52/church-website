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
  '.service-item, .event-card, .stat, .give-method-card'
).forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== COPY TEXT =====
function copyText(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text);
  alert('Copied: ' + text);
}

// ===== SERMON FILTER =====
function filterSermon(cat, btn) {
  document.querySelectorAll('.filter-btn')
    .forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.sermon-card')
    .forEach(function(card) {
      if (cat === 'all' || card.getAttribute('data-cat') === cat) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
}

// ===== LANGUAGE TRANSLATIONS =====
const translations = {
  en: {
    // HERO
    'txt-tag':        'House of Faith',
    'txt-title':      'Deber Genete St, Mary Orthodox Tewahedo church',
    'text-desc':      'A gathering place of faith, worship, and fellowship. All are welcome - come as you are.',
    'txt-btn1':       'Our Services',
    'txt-btn2':       'Plan a Visit',
    // NAVBAR
    'nav-home':       'Home',
    'nav-about':      'About',
    'nav-services':   'Services',
    'nav-sermons':    'Sermons',
    'nav-events':     'Events',
    'nav-give':       'Give',
    'nav-contact':    'Contact',
    // ABOUT
    'about-tag':      'Who We Are',
    'about-title':    'Our Story & Mission',
    // SERVICES
    'services-tag':   'What We Offer',
    'services-title': 'Our Services',
    'svc-baptism':    'Baptism / ጥምቀት',
    'svc-confession': 'Confession / ኑዛዜ',
    'svc-communion':  'Holy Communion / ቅዱስ ቁርባን',
    'svc-charity':    'Charity / ምጽዋት',
    'svc-matrimony':  'Matrimony / ጋብቻ',
    'svc-wake':       'Wake Service / ሲዐት',
    // SERMONS
    'sermons-tag':    'Listen & Learn',
    'sermons-title':  'Recent Sermons',
    'sf-all':         'All',
    'sf-faith':       'Faith',
    'sf-prayer':      'Prayer',
    'sf-family':      'Family',
    // EVENTS
    'events-tag':     'Upcoming',
    'events-title':   'Events & Gatherings',
    // GIVE
    'give-tag':       'Generosity',
    'give-title':     'Give to the Church',
    // CONTACT
    'contact-tag':    'Reach Out',
    'contact-title':  'Get in Touch',
  },

  am: {
    // HERO
    'txt-tag':        'የእምነት ቤት',
    'txt-title':      'ደብረ ገነት ቅድስት ማርያም ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን',
    'text-desc':      'የእምነት፣ አምልኮ፣ እና ኅብረት ቦታ። ሁሉም ይቀበላሉ — እንደ ሆናችሁ ኑ።',
    'txt-btn1':       'አገልግሎቶቻችን',
    'txt-btn2':       'ሊጠይቁን',
    // NAVBAR
    'nav-home':       'መነሻ',
    'nav-about':      'ስለ እኛ',
    'nav-services':   'አገልግሎቶች',
    'nav-sermons':    'ስብከቶች',
    'nav-events':     'ዝግጅቶች',
    'nav-give':       'ስጦታ',
    'nav-contact':    'ያናግሩን',
    // ABOUT
    'about-tag':      'እነማን ነን',
    'about-title':    'ታሪካችን እና ተልዕኮአችን',
    // SERVICES
    'services-tag':   'ምን እናቀርባለን',
    'services-title': 'አገልግሎቶቻችን',
    'svc-baptism':    'ጥምቀት',
    'svc-confession': 'ኑዛዜ',
    'svc-communion':  'ቅዱስ ቁርባን',
    'svc-charity':    'ምጽዋት',
    'svc-matrimony':  'ጋብቻ',
    'svc-wake':       'ሲዐት',
    // SERMONS
    'sermons-tag':    'ያዳምጡ እና ይማሩ',
    'sermons-title':  'የቅርብ ጊዜ ስብከቶች',
    'sf-all':         'ሁሉም',
    'sf-faith':       'እምነት',
    'sf-prayer':      'ጸሎት',
    'sf-family':      'ቤተሰብ',
    // EVENTS
    'events-tag':     'መጪ ዝግጅቶች',
    'events-title':   'ዝግጅቶች እና ስብሰባዎች',
    // GIVE
    'give-tag':       'ለጋስነት',
    'give-title':     'ለቤተክርስቲያን ስጡ',
    // CONTACT
    'contact-tag':    'ያናግሩን',
    'contact-title':  'እናናግርዎ',
  }
};

// ===== LANG DROPDOWN TOGGLE =====
function toggleLangMenu() {
  const menu = document.getElementById('lang-menu');
  menu.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const dropdown = document.querySelector('.lang-dropdown');
  if (dropdown && !dropdown.contains(e.target)) {
    document.getElementById('lang-menu').classList.remove('open');
  }
});

// ===== SET LANGUAGE =====
function setLang(lang) {
  const t = translations[lang];
  for (const id in t) {
    const el = document.getElementById(id);
    if (el) el.textContent = t[id];
  }
  const flag = document.getElementById('current-flag');
  const name = document.getElementById('current-lang');
  if (lang === 'en') {
    if (flag) flag.textContent = '🇺🇸';
    if (name) name.textContent = 'English';
  } else {
    if (flag) flag.textContent = '🇪🇹';
    if (name) name.textContent = 'Amharic';
  }
  document.getElementById('lang-menu').classList.remove('open');
}