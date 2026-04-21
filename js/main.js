//ክፍል 1 — Hamburger Menu
//ይህን ጻፍ፦

// ===== HAMBURGER MENU =====
const Hamburger = document.getElementsByClassName('hamburger');
const navLinks = document.querySelector('.nav-links');

//Ctrl+S — ምንም ለውጥ አታይም ገና። ቀጥል

Hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
})

// ክፍል 2 — Active Nav Link


// ===== ACTIVE NAV ON SCROLL =====
constsection =document.querySelectorAll('section')
constlinks =document.querySelectorAll('nav-linlks a')

window.addEventListener('scroll', function() {

  let current = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
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

//Ctrl+S
//ፈትሽ — Page ስትስክሮል nav links ይለዋወጣሉ ✅

//ክፍል 3 — Contact Form

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const fname = document.getElementById('fname').value;
  const email = document.getElementById('email').value;

  if (fname === '' || email === '') {
    alert('Please fill in all required fields!');
    return;
  }

  alert('Thank you, ' + fname + '! Your message has been sent.');
  contactForm.reset();
});
const copyright = document.getElementById('copyright');
const year = new Date().getFullYear();
copyright.innerHTML = 
  '&copy; ' + year + 
  ' Church Name. All rights reserved. Made with ♥ and faith.';

Ctrl+S
//Footer ላይ year automatically 2025 ይሆናል ✅

//ክፍል 5 — Smooth Scroll Animation


// ===== FADE IN ON SCROLL =====
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

const animateElements = document.querySelectorAll(
  '.service-card, .event-card, .stat'
);

animateElements.forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

Ctrl+S
//ፈትሽ — Page ስትስክሮል cards fade-in ሆነው ይታያሉ ✅


//ሙሉ main.js እንዲህ ይመስላል፦

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {

  let current = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
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

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const fname = document.getElementById('fname').value;
  const email = document.getElementById('email').value;

  if (fname === '' || email === '') {
    alert('Please fill in all required fields!');
    return;
  }

  alert('Thank you, ' + fname + '! Your message has been sent.');
  contactForm.reset();
});

// ===== COPYRIGHT YEAR =====
const copyright = document.getElementById('copyright');
const year = new Date().getFullYear();
copyright.innerHTML = 
  '&copy; ' + year + 
  ' Church Name. All rights reserved. Made with ♥ and faith.';

// ===== FADE IN ON SCROLL =====
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

const animateElements = document.querySelectorAll(
  '.service-card, .event-card, .stat'
);

animateElements.forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

//ጽፈህ ስትጨርስ ፎቶ ላክልኝ → Deploy እናደርጋለን! 🚀





