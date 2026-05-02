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

  // ==================== ENGLISH ====================
  en: {
    // HERO
    'logo-text':     'Deber Genete St, Mary',
    'logo-subtitle':  'Orthodox Tewahedo Church',
    'txt-tag':        'House of Faith',
    'txt-welcome':    'Welcome to',
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
    'about-text':     'St Marys Ethiopian OrthodoxTewahedo Church Strives to fulfill the spirtual needs of its members by providing church and related services in a manner consistent with the Ethiopian Orthodox Tewahedo churchs faith, values and tradition.',
    'stat-members':    'Members',
    'stat-ministries': 'Ministries',
    'stat-years':      'Years',
    // SERVICES
    'services-tag':   'What We Offer',
    'services-title': 'Our Services',
    'service-desc': "Established in 1992, the St. Mary's Ethiopian Orthodox Church has been serving the Tampa Bay community and surrounding cities for over 34 years. Services include Sunday School, religious counseling, marriage, burial rites (Fitat), baptism, visiting and comforting the sick.",

    'svc-baptism':    'Baptism',

    'svc-baptism-desc': 'Sacrament of Christian initiation through water and the Holy Spirit. "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost." — Matthew 28:19',
'svc-baptism-btn':  'Book Appointment',

    'svc-confession': 'Confession',
     'svc-confession-desc': 'The sacrament of reconciliation — confess your sins and receive absolution and peace of soul. Available by appointment with our priests.',
'svc-confession-btn':  'Book Appointment',

    'svc-communion':  'Holy Communion',
     'svc-communion-desc': 'Receiving the body and blood of Christ — the central act of worship. Every Sunday at 9:00 AM and 11:00 AM services.',
'svc-communion-btn':  'Learn More',

    'svc-charity':    'Charity',
     'svc-charity-desc': 'Community support — food, medical, education, and emergency assistance for those in need in our community and beyond.',
'svc-charity-btn':  'Get Help',

'svc-matrimony-btn':  'Book Appointment',
   'svc-matrimony-desc': 'The holy sacrament of Christian marriage — blessed and witnessed by the Church. Pre-marital counseling required. Apply 3 months in advance.',
'svc-matrimony-btn':  'Book Appointment',

    'svc-wake':       'Wake Service',
    'svc-wake-desc': 'Funeral and wake arrangements — honouring the departed with prayer and ceremony. We are available 7 days a week for families in need.',
'svc-wake-btn':  'Contact Us',

    // SERMONS
    'sermons-tag':    'Listen & Learn',
    'sermons-title':  'Recent Sermons',
    'sf-all':         'All',
    'sf-faith':       'Faith',
    'sf-prayer':      'Prayer',
    'sf-family':      'Family',

    'sr1-title': 'Walking by Faith, Not by Sight',
    'sr1-desc':  'A message on trusting God in uncertain times.',
    'sr2-title': 'The Power of a Praying Community',
    'sr2-desc':  'Why prayer together changes everything.',
    'sr3-title': 'Building a Christ-Centered Home',
    'sr3-desc':  'Practical wisdom for families today.',
    'sr4-title': 'Amazing Grace: More Than a Song',
    'sr4-desc':  "Understanding the depth of God's grace.",

    // EVENTS
    'events-tag':     'Upcoming',
    'events-title':   'Events & Gatherings',
    'ev1-title': 'Easter Sunday Celebration',
    'ev1-desc':  'Special service celebrating the resurrection of Jesus Christ.',
    'ev1-time':  '🕘 8:30 PM & 2:00 AM',
    'ev2-title': 'Community Outreach Day',
    'ev2-desc':  'Serving our city - food, prayer, and practical help for those in need.',
    'ev2-time':  '🕗 8:00 AM - 1:00 PM',
    'ev3-title': 'Youth Morning',
    'ev3-desc':  'Worship, games, and fellowship for teens and young adults.',
    'ev3-time':  '🕕 8:00 AM - 12:00 PM',

    // GIVE
    'give-tag':       'Generosity',
    'give-title':     'Give to the Church',
    'give-desc':         'Your generosity supports our mission. Choose your preferred giving method below.',
'give-paypal':       'PayPal',
'give-paypal-desc':  'Give securely online using your PayPal account or card.',
'give-paypal-btn':   'Donate via PayPal',
'give-cashapp':      'Cash App',
'give-cashapp-desc': 'Send your donation directly through Cash App.',
'give-cashapp-btn':  'Copy $Cashtag',
'give-zelle':        'Zelle',
'give-zelle-desc':   'Fast and free bank transfer using Zelle.',
'give-zelle-btn':    'Copy Number',
'give-check':        'Check',
'give-check-desc':   'Mail your check payable to Deber Genete St Mary Church.',
'give-card':         'Debit / Credit Card',
'give-card-desc':    'Give using your debit or credit card securely online.',
'give-card-btn':     'Pay by Card',
'give-inperson-time':'Sunday: 9:00 AM & 11:00 AM',
'give-inperson-desc':'Give during our Sunday service or visit the church office.',

    // CONTACT
    'contact-tag':   'Reach Out',
    'contact-title': 'Get in Touch',
'lbl-fname':     'First Name',
'lbl-lname':     'Last Name',
'lbl-email':     'Email',
'lbl-subject':   'Subject',
'lbl-message':   'Message',
'lbl-send':      'Send Message',
'opt-general':   'General Inquiry',
'opt-prayer':    'Prayer Request',
'opt-visit':     'Plan a visit',
'opt-baptism':   'Baptism',
'opt-matrimony': 'Matrimony',
'opt-wake':      'Wake Service',
   'contact-address': 'Address',
   'contact-phone':   'Phone',
   'contact-email':   'Email',
   'contact-hours-title': 'Service Hours',
   'contact-hours-desc':  'Sunday: 5:00 AM & 11:00 AM — Full service with Kedase. The day of Month 12, 21, 23, 27 — Kidan Tselot with Tsebele.',
    // CONTACT FORM
    'lbl-fname':      'First Name',
    'lbl-lname':      'Last Name',
    'lbl-email':      'Email',
    'lbl-subject':    'Subject',
    'lbl-message':    'Message',
    'lbl-send':       'Send Message',
    // SELECT OPTIONS
    'opt-general':    'General Inquiry',
    'opt-prayer':     'Prayer Request',
    'opt-visit':      'Plan a visit',
    'opt-baptism':    'Baptism',
    'opt-matrimony':  'Matrimony',
    'opt-wake':       'Wake Service',

    // FOOTER
    'footer-tagline': 'Faith . Hope . Love . Community',
'copyright':      '© 2026 Deber Genete St, Mary Orthodox Tewahedo Church. All rights reserved. Made with ♥ and faith.',

        'footer-home':     'Home',
        'footer-about':    'About',
        'footer-services': 'Services',
        'footer-events':   'Events',
        'footer-give':     'Give',
        'footer-contact':  'Contact',




  },

  // ==================== AMHARIC ====================
  am: {
    // HERO
    'logo-text':     'ደብረ ገነት ቅድስት ማርያም',
    'logo-subtitle': 'ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን',
    'txt-tag':        'የእምነት ቤት',
    'txt-welcome':     'እንኳን ደህና መጡ',
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
    'about-text': 'የቅድስት ማርያም የኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን የአባላቱን መንፈሳዊ  ፍላጎት ለማሟላት፣ ከኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን እምነት፣ እሴቶችና ትውፊት ጋር በሚስማማ መልኩ የቤተ ክርስቲያን አገልግሎቶችን ለመስጠት ትጥራለች።',
    'stat-members':    'አባላት',
    'stat-ministries': 'አገልግሎቶች',
    'stat-years':      'ዓመታት',
    // SERVICES
    'service-tag':   'ምን እናቀርባለን',
    'service-title': 'አገልግሎቶቻችን',
    'service-desc': 'በ1992 የተቋቋመው ቅድስት ማርያም የኢትዮጵያ ኦርቶዶክስ ቤተ ክርስቲያን ለ34 ዓመታት በላይ የታምፓ ቤይ ማህበረሰብን እያገለገለ ነው። አገልግሎቶች፡ የሰንበት ት/ቤት፣ መንፈሳዊ ምክር፣ ጋብቻ፣ ፍትሐት፣ ጥምቀት፣ ታማሚዎችን መጠየቅ ይገኙበታል።',

    'svc-baptism':    'ጥምቀት',

    'svc-baptism-desc': 'በውሃና በመንፈስ ቅዱስ የሚፈጸም የክርስትና ጥምቀት ቅዱስ ምሥጢር። "እንግዲህ ሂዱና አሕዛብን ሁሉ በአብ በወልድና በመንፈስ ቅዱስ ስም እያጠመቃችኋቸው ደቀ መዛሙርት አድርጓቸው።" — ማቴዎስ 28:19',
'svc-baptism-btn':  'ቀጠሮ ያዙ',

    'svc-confession': 'ኑዛዜ',
     'svc-confession-desc': 'የኃጢአት ኑዛዜና ስርየት ቅዱስ ምሥጢር — ኃጢአትዎን ተናዘዙ፣ ስርየትና የነፍስ ሰላም ይቀበሉ። ከካህናቱ ጋር በቀጠሮ ይገኛል።',
'svc-confession-btn':  'ቀጠሮ ያዙ',

    'svc-communion':  'ቅዱስ ቁርባን',
     'svc-communion-desc': 'የክርስቶስን ሥጋና ደም መቀበል — የአምልኮ ዋና ተግባር። በየእሁድ ከጠዋቱ 9:00 እና 11:00 አገልግሎቶች።',
'svc-communion-btn':  'የበለጠ ይወቁ',

    'svc-charity':    'ምጽዋት',
     'svc-charity-desc': 'የማህበረሰብ ድጋፍ — ምግብ፣ ጤና፣ ትምህርትና አስቸኳይ እርዳታ ለሚፈልጉ በማህበረሰባችን ውስጥ እና ከዚያ ባሻገር።',

'svc-charity-btn':  'እርዳታ ይጠይቁ',

    'svc-matrimony':  'ጋብቻ',
      'svc-matrimony-desc': 'የክርስቲያን ጋብቻ ቅዱስ ምሥጢር — በቤተ ክርስቲያን የተባረከና የተመሰከረ። የቅድመ ጋብቻ ምክር ያስፈልጋል። ከ3 ወር አስቀድሞ ያመልክቱ።',
'svc-matrimony-btn':  'ቀጠሮ ያዙ',

    'svc-wake':       'ፍትሐት',
      'svc-wake-desc': 'የፍትሐትና የጸሎት ዝግጅት — የሟቹን መታሰቢያ በጸሎትና በፍትሐት ያከብራል። ለሚፈልጉ ቤተሰቦች በሳምንቱ 7 ቀን እንገኛለን።',
'svc-wake-btn':  'ያግኙን',

    // SERMONS
    'sermons-tag':    'ያዳምጡ እና ይማሩ',
    'sermons-title':  'የቅርብ ጊዜ ስብከቶች',
    'sf-all':         'ሁሉም',
    'sf-faith':       'እምነት',
    'sf-prayer':      'ጸሎት',
    'sf-family':      'ቤተሰብ',

    'sr1-title': 'በእምነት መሄድ እንጂ በዓይን አይደለም',
    'sr1-desc':  'በማይረጋ ጊዜ እግዚአብሔርን የመታመን መልዕክት።',
    'sr2-title': 'የሚጸልይ ማህበረሰብ ኃይል',
    'sr2-desc':  'አንድ ሆኖ መጸለይ ሁሉንም ነገር የሚቀይርበት ምክንያት።',
    'sr3-title': 'ክርስቶስ ያማከለ ቤት መገንባት',
    'sr3-desc':  'ለዛሬ ቤተሰቦች ተግባራዊ ጥበብ።',
    'sr4-title': 'አስደናቂ ጸጋ፡ ከዘፈን በላይ',
     'sr4-desc':  'የእግዚአብሔርን ጸጋ ጥልቀት መረዳት።',

    // EVENTS
    'events-tag':     'መጪ ዝግጅቶች',
    'events-title':   'ዝግጅቶች እና ስብሰባዎች',
    'ev1-title': 'የትንሣኤ እሁድ በዓል',
    'ev1-desc':  'የኢየሱስ ክርስቶስን ትንሣኤ የሚያከብር ልዩ አገልግሎት።',
    'ev1-time':  '🕘 ከሌሊቱ 8:30 & 2:00',
    'ev2-title': 'የማህበረሰብ አገልግሎት ቀን',
    'ev2-desc':  'ከተማችንን እናገለግላለን — ምግብ፣ ጸሎት፣ ለሚፈልጉ ተግባራዊ እርዳታ።',
    'ev2-time':  '🕗 ከጠዋቱ 8:00 - 1:00',
    'ev3-title': 'የወጣቶች ጠዋት',
    'ev3-desc':  'ለወጣቶችና ለአዋቂ ወጣቶች አምልኮ፣ ጨዋታና ኅብረት።',
     'ev3-time':  '🕕 ከጠዋቱ 8:00 - 12:00',

    // GIVE
    'give-tag':       'ለጋስነት',
    'give-title':     'ለቤተክርስቲያን ስጡ',
    'give-desc':     'ለጋስነትዎ ተልዕኮአችንን ይደግፋል። ከዚህ በታች የሚስማማዎትን የልገሳ መንገድ ይምረጡ።',
'give-paypal':       'PayPal',
'give-paypal-desc':  'በPayPal አካውንትዎ ወይም ካርድዎ በደህንነት online ይለግሱ።',
'give-paypal-btn':   'በPayPal ይለግሱ',
'give-cashapp':      'Cash App',
'give-cashapp-desc': 'ልገሳዎን በቀጥታ በCash App ይላኩ።',
'give-cashapp-btn':  '$Cashtag ቅዳ',
'give-zelle':        'Zelle',
'give-zelle-desc':   'በZelle ፈጣንና ነጻ የባንክ ዝውውር።',
'give-zelle-btn':    'ቁጥር ቅዳ',
'give-check':        'ቼክ',
'give-check-desc':   'ቼክዎን ለደብረ ገነት ቅድስት ማርያም ቤተ ክርስቲያን በፖስታ ይላኩ።',
'give-card':         'ዴቢት / ክሬዲት ካርድ',
'give-card-desc':    'በዴቢት ወይም ክሬዲት ካርድዎ በደህንነት online ይለግሱ።',
'give-card-btn':     'በካርድ ይክፈሉ',
'give-inperson-time':'እሁድ፡ ከጠዋቱ 9:00 እና 11:00',
'give-inperson-desc':'በእሁድ አገልግሎት ወቅት ወይም የቤተ ክርስቲያን ቢሮ በመጎብኘት ይለግሱ።',

    // CONTACT
    'contact-tag':    'ያናግሩን',
    'contact-title':  'እናናግርህ',
    'lbl-fname':     'ስም',
    'lbl-lname':     'የአባት ስም',
    'lbl-email':     'ኢሜይል',
    'lbl-subject':   'ርዕስ',
    'lbl-message':   'መልዕክት',
    'lbl-send':      'መልዕክት ላክ',
    'opt-general':   'ጠቅላላ ጥያቄ',
    'opt-prayer':    'የጸሎት ጥያቄ',
    'opt-visit':     'ለመጎብኘት',
    'opt-baptism':   'ጥምቀት',
    'opt-matrimony': 'ጋብቻ',
    'opt-wake':      'ሲዐት',
    'contact-address': 'አድራሻ',
    'contact-phone':   'ስልክ',
    'contact-email':   'ኢሜይል',
    'contact-hours-title': 'የአገልግሎት ሰዓቶች',
    'contact-hours-desc':  'እሁድ፡ ከጠዋቱ 5:00 እና 11:00 — ሙሉ አገልግሎት ከቅዳሴ ጋር። በየወሩ 12፣ 21፣ 23፣ 27 — የኪዳን ጸሎት ከጸበል ጋር ይክናወናል።',
    // CONTACT FORM
    'lbl-fname':      'ስም',
    'lbl-lname':      'የአባት ስም',
    'lbl-email':      'ኢሜይል',
    'lbl-subject':    'ርዕስ',
    'lbl-message':    'መልዕክት',
    'lbl-send':       'መለዕክት ላክ',
    // SELECT OPTIONS
    'opt-general':    'ጠቅላላ ጥያቄ',
    'opt-prayer':     'የጸሎት ጥያቄ',
    'opt-visit':      'ሊጠይቁን',
    'opt-baptism':    'ጥምቀት',
    'opt-matrimony':  'ጋብቻ',
    'opt-wake':       'ሲዐት',

    // FOOTER
    'footer-tagline': 'እምነት . ተስፋ . ፍቅር . ማህበረሰብ',
    'copyright':      '© 2026 ደብረ ገነት ቅድስት ማርያም ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን። መብቱ በሙሉ የተጠበቀ ነው።',

    'footer-home':     'መነሻ',
    'footer-about':    'ስለ እኛ',
    'footer-services': 'አገልግሎቶች',
    'footer-events':   'ዝግጅቶች',
    'footer-give':     'ስጦታ',
    'footer-contact':  'ያግኙን',

    'footer-church-name': 'ደብረ ገነት ቅድስት ማርያም ኦርቶዶክስ ተዋሕዶ ቤተ ክርስቲያን',


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