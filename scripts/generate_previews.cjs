const fs = require('fs');
const path = require('path');

const outDirs = [
  path.join(__dirname, '..', 'public', 'images', 'projects'),
  path.join(__dirname, '..', 'dist', 'images', 'projects')
];

outDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const svgs = {
  'lifenet-health.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="lh-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="60%" stop-color="#0c2340"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <linearGradient id="lh-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#lh-bg)"/>
  <rect width="800" height="40" fill="#090d16"/>
  <circle cx="20" cy="20" r="5" fill="#ef4444"/>
  <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="52" cy="20" r="5" fill="#10b981"/>
  <rect x="75" y="8" width="550" height="24" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="95" y="24" fill="#38bdf8" font-family="monospace" font-size="11">🔒 https://www.lifenethealth.org</text>
  <rect x="580" y="12" width="36" height="16" rx="4" fill="#0284c7" fill-opacity="0.3"/>
  <text x="598" y="23" fill="#38bdf8" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="600">LIVE</text>

  <rect y="40" width="800" height="52" fill="#0f172a" fill-opacity="0.9"/>
  <text x="35" y="73" fill="#38bdf8" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">LifeNet Health<tspan fill="#34d399">®</tspan></text>
  <text x="210" y="72" fill="#cbd5e1" font-family="sans-serif" font-size="12">Saving Lives. Restoring Health.</text>
  <rect x="680" y="52" width="85" height="28" rx="6" fill="#0284c7"/>
  <text x="722" y="70" fill="#ffffff" font-family="sans-serif" font-size="11" font-weight="600" text-anchor="middle">Portals ↗</text>

  <text x="40" y="145" fill="#f8fafc" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">Global Leader in Regenerative Medicine</text>
  <text x="40" y="175" fill="#38bdf8" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="600">&amp; Biologics Allograft Technologies</text>
  <text x="40" y="210" fill="#94a3b8" font-family="sans-serif" font-size="13">US non-profit healthcare organization facilitating life-saving tissue grafts, cellular therapies,</text>
  <text x="40" y="230" fill="#94a3b8" font-family="sans-serif" font-size="13">and automated patient healthcare intake questionnaire workflows.</text>

  <g transform="translate(40, 255)">
    <rect width="210" height="92" rx="12" fill="url(#lh-card)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
    <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="800">10M+</text>
    <text x="20" y="54" fill="#e2e8f0" font-family="sans-serif" font-size="12" font-weight="600">Tissue Implants Distributed</text>
    <text x="20" y="72" fill="#94a3b8" font-family="sans-serif" font-size="10">Worldwide clinical reach</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="92" rx="12" fill="url(#lh-card)" stroke="#34d399" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">Drupal 10/11</text>
      <text x="20" y="54" fill="#e2e8f0" font-family="sans-serif" font-size="12" font-weight="600">Enterprise Platform</text>
      <text x="20" y="72" fill="#94a3b8" font-family="sans-serif" font-size="10">HubSpot &amp; SugarCRM Sync</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="240" height="92" rx="12" fill="url(#lh-card)" stroke="#818cf8" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#818cf8" font-family="sans-serif" font-size="22" font-weight="800">Team of 4</text>
      <text x="20" y="54" fill="#e2e8f0" font-family="sans-serif" font-size="12" font-weight="600">Muthu Karthik (Team Lead)</text>
      <text x="20" y="72" fill="#94a3b8" font-family="sans-serif" font-size="10">HIPAA Compliant Architecture</text>
    </g>
  </g>

  <rect y="405" width="800" height="45" fill="#090d16" fill-opacity="0.95"/>
  <text x="40" y="432" fill="#64748b" font-family="sans-serif" font-size="11">Tech Stack: Drupal 10/11 • PHP 8 • MySQL • HubSpot API • SugarCRM • REST APIs • RBAC</text>
  <circle cx="750" cy="427" r="4" fill="#10b981"/>
  <text x="735" y="431" fill="#10b981" font-family="sans-serif" font-size="11" text-anchor="end" font-weight="600">Active Live Portal</text>
</svg>`,

  'caldea-spa.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="cal-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#042f2e"/>
      <stop offset="60%" stop-color="#115e59"/>
      <stop offset="100%" stop-color="#0f766e"/>
    </linearGradient>
    <linearGradient id="cal-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#134e4a" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#042f2e" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#cal-bg)"/>
  <rect width="800" height="40" fill="#021f1e"/>
  <circle cx="20" cy="20" r="5" fill="#ef4444"/>
  <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="52" cy="20" r="5" fill="#10b981"/>
  <rect x="75" y="8" width="550" height="24" rx="6" fill="#042f2e" stroke="#14b8a6" stroke-width="1" stroke-opacity="0.5"/>
  <text x="95" y="24" fill="#5eead4" font-family="monospace" font-size="11">🔒 https://www.caldea.com</text>
  <rect x="580" y="12" width="36" height="16" rx="4" fill="#0d9488" fill-opacity="0.4"/>
  <text x="598" y="23" fill="#5eead4" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="600">LIVE</text>

  <rect y="40" width="800" height="52" fill="#022c2b" fill-opacity="0.9"/>
  <text x="35" y="74" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="900" letter-spacing="2">CALDEA</text>
  <text x="160" y="72" fill="#5eead4" font-family="sans-serif" font-size="11" font-weight="600">TERMAL &amp; WELLNESS SPA ANDORRA</text>

  <rect x="620" y="52" width="145" height="26" rx="6" fill="#134e4a" stroke="#2dd4bf" stroke-opacity="0.4"/>
  <text x="632" y="69" fill="#f0fdfa" font-family="sans-serif" font-size="10" font-weight="700">CA</text>
  <text x="657" y="69" fill="#99f6e4" font-family="sans-serif" font-size="10">ES</text>
  <text x="682" y="69" fill="#99f6e4" font-family="sans-serif" font-size="10">FR</text>
  <text x="707" y="69" fill="#99f6e4" font-family="sans-serif" font-size="10">EN</text>

  <text x="40" y="145" fill="#f0fdfa" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">Multi-Language Thermal Spa &amp; Hotel</text>
  <text x="40" y="175" fill="#5eead4" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600">Real-Time Booking &amp; Reservation Engine</text>
  <text x="40" y="210" fill="#ccfbf1" font-family="sans-serif" font-size="13">High-concurrency reservation engine integrated with XML/JSON hotel feeds, Stripe/PayPal checkout,</text>
  <text x="40" y="230" fill="#ccfbf1" font-family="sans-serif" font-size="13">cron-automated room availability, and multi-currency billing.</text>

  <g transform="translate(40, 255)">
    <rect width="210" height="92" rx="12" fill="url(#cal-card)" stroke="#2dd4bf" stroke-opacity="0.3" stroke-width="1"/>
    <text x="20" y="32" fill="#2dd4bf" font-family="sans-serif" font-size="22" font-weight="800">4 Languages</text>
    <text x="20" y="54" fill="#f0fdfa" font-family="sans-serif" font-size="12" font-weight="600">Multi-Lingual Engine</text>
    <text x="20" y="72" fill="#99f6e4" font-family="sans-serif" font-size="10">Catalan, Spanish, French, English</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="92" rx="12" fill="url(#cal-card)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="800">Stripe &amp; PayPal</text>
      <text x="20" y="54" fill="#f0fdfa" font-family="sans-serif" font-size="12" font-weight="600">Payment Pipeline</text>
      <text x="20" y="72" fill="#99f6e4" font-family="sans-serif" font-size="10">Automated Webhook Reconciliation</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="240" height="92" rx="12" fill="url(#cal-card)" stroke="#fbbf24" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#fbbf24" font-family="sans-serif" font-size="22" font-weight="800">Team of 3</text>
      <text x="20" y="54" fill="#f0fdfa" font-family="sans-serif" font-size="12" font-weight="600">Muthu Karthik (Booking Lead)</text>
      <text x="20" y="72" fill="#99f6e4" font-family="sans-serif" font-size="10">Full-Stack Lead &amp; API Architect</text>
    </g>
  </g>

  <rect y="405" width="800" height="45" fill="#021f1e" fill-opacity="0.95"/>
  <text x="40" y="432" fill="#5eead4" font-family="sans-serif" font-size="11">Tech Stack: PHP • Laravel • MySQL • Stripe • PayPal SDK • XML/JSON APIs • Cron Automation • i18n</text>
  <circle cx="750" cy="427" r="4" fill="#10b981"/>
  <text x="735" y="431" fill="#10b981" font-family="sans-serif" font-size="11" text-anchor="end" font-weight="600">Live Website</text>
</svg>`,

  'pomelo-fashion.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="pom-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#18181b"/>
      <stop offset="60%" stop-color="#27272a"/>
      <stop offset="100%" stop-color="#3f3f46"/>
    </linearGradient>
    <linearGradient id="pom-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#27272a" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#18181b" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#pom-bg)"/>
  <rect width="800" height="40" fill="#09090b"/>
  <circle cx="20" cy="20" r="5" fill="#ef4444"/>
  <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="52" cy="20" r="5" fill="#10b981"/>
  <rect x="75" y="8" width="550" height="24" rx="6" fill="#18181b" stroke="#f43f5e" stroke-width="1" stroke-opacity="0.4"/>
  <text x="95" y="24" fill="#fda4af" font-family="monospace" font-size="11">🔒 https://www.pomelofashion.com</text>
  <rect x="580" y="12" width="36" height="16" rx="4" fill="#e11d48" fill-opacity="0.3"/>
  <text x="598" y="23" fill="#f43f5e" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="600">LIVE</text>

  <rect y="40" width="800" height="52" fill="#18181b" fill-opacity="0.9"/>
  <text x="35" y="74" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="900" letter-spacing="3">POMELO.</text>
  <text x="180" y="72" fill="#a1a1aa" font-family="sans-serif" font-size="11">WOMEN</text>
  <text x="250" y="72" fill="#a1a1aa" font-family="sans-serif" font-size="11">NEW IN</text>
  <text x="320" y="72" fill="#a1a1aa" font-family="sans-serif" font-size="11">BESTSELLERS</text>
  <text x="420" y="72" fill="#fb7185" font-family="sans-serif" font-size="11" font-weight="600">SALE UP TO 50%</text>

  <text x="40" y="145" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">Multi-Language High-Concurrency</text>
  <text x="40" y="175" fill="#fda4af" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600">Fashion E-Commerce &amp; Checkout Pipeline</text>
  <text x="40" y="210" fill="#d4d4d8" font-family="sans-serif" font-size="13">High-volume fashion apparel marketplace with dynamic faceted search, localized currency engines,</text>
  <text x="40" y="230" fill="#d4d4d8" font-family="sans-serif" font-size="13">payment gateway integrations, and sub-second inventory sync.</text>

  <g transform="translate(40, 255)">
    <rect width="210" height="92" rx="12" fill="url(#pom-card)" stroke="#f43f5e" stroke-opacity="0.3" stroke-width="1"/>
    <text x="20" y="32" fill="#fb7185" font-family="sans-serif" font-size="22" font-weight="800">High Traffic</text>
    <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Sub-Second Checkout</text>
    <text x="20" y="72" fill="#a1a1aa" font-family="sans-serif" font-size="10">Optimized MySQL &amp; Redis Cache</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="92" rx="12" fill="url(#pom-card)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="800">Multi-Currency</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Regional Payment Rails</text>
      <text x="20" y="72" fill="#a1a1aa" font-family="sans-serif" font-size="10">Instant Webhook Verification</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="240" height="92" rx="12" fill="url(#pom-card)" stroke="#e879f9" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#e879f9" font-family="sans-serif" font-size="22" font-weight="800">Team of 4</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Muthu Karthik (Full-Stack)</text>
      <text x="20" y="72" fill="#a1a1aa" font-family="sans-serif" font-size="10">Cart &amp; Checkout Architecture</text>
    </g>
  </g>

  <rect y="405" width="800" height="45" fill="#09090b" fill-opacity="0.95"/>
  <text x="40" y="432" fill="#a1a1aa" font-family="sans-serif" font-size="11">Tech Stack: PHP • Laravel • React • MySQL • Redis • Payment APIs • Webhooks • i18n</text>
  <circle cx="750" cy="427" r="4" fill="#10b981"/>
  <text x="735" y="431" fill="#10b981" font-family="sans-serif" font-size="11" text-anchor="end" font-weight="600">Live Global Store</text>
</svg>`,

  'allograft-academy.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="acad-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="60%" stop-color="#065f46"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
    <linearGradient id="acad-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#065f46" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#022c22" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#acad-bg)"/>
  <rect width="800" height="40" fill="#021c16"/>
  <circle cx="20" cy="20" r="5" fill="#ef4444"/>
  <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="52" cy="20" r="5" fill="#10b981"/>
  <rect x="75" y="8" width="550" height="24" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1" stroke-opacity="0.5"/>
  <text x="95" y="24" fill="#a7f3d0" font-family="monospace" font-size="11">🔒 https://allograftacademy.org</text>
  <rect x="580" y="12" width="36" height="16" rx="4" fill="#059669" fill-opacity="0.4"/>
  <text x="598" y="23" fill="#6ee7b7" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="600">LIVE</text>

  <rect y="40" width="800" height="52" fill="#022c22" fill-opacity="0.9"/>
  <text x="35" y="74" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="800">ALLOGRAFT ACADEMY</text>
  <text x="285" y="72" fill="#6ee7b7" font-family="sans-serif" font-size="11">Powered by LifeNet Health</text>

  <text x="40" y="145" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">Clinical Tissue Graft Education</text>
  <text x="40" y="175" fill="#6ee7b7" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600">&amp; Surgical Bio-Science Academy</text>
  <text x="40" y="210" fill="#a7f3d0" font-family="sans-serif" font-size="13">Specialized learning portal empowering healthcare surgeons, procurement teams, and hospital clinicians</text>
  <text x="40" y="230" fill="#a7f3d0" font-family="sans-serif" font-size="13">with surgical tissue case studies, continuing education modules, and certification.</text>

  <g transform="translate(40, 255)">
    <rect width="210" height="92" rx="12" fill="url(#acad-card)" stroke="#34d399" stroke-opacity="0.3" stroke-width="1"/>
    <text x="20" y="32" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">Clinical CE</text>
    <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Accredited Education</text>
    <text x="20" y="72" fill="#a7f3d0" font-family="sans-serif" font-size="10">Automated Certificates</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="92" rx="12" fill="url(#acad-card)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="800">Drupal 9/10</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Custom Webforms</text>
      <text x="20" y="72" fill="#a7f3d0" font-family="sans-serif" font-size="10">Clinical Catalog Handlers</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="240" height="92" rx="12" fill="url(#acad-card)" stroke="#fbbf24" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#fbbf24" font-family="sans-serif" font-size="22" font-weight="800">Team of 2</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Muthu Karthik (Lead)</text>
      <text x="20" y="72" fill="#a7f3d0" font-family="sans-serif" font-size="10">Lead Full-Stack Architect</text>
    </g>
  </g>

  <rect y="405" width="800" height="45" fill="#021c16" fill-opacity="0.95"/>
  <text x="40" y="432" fill="#6ee7b7" font-family="sans-serif" font-size="11">Tech Stack: Drupal • PHP 8 • Webforms API • PDF Certificate Engine • MySQL • JavaScript</text>
  <circle cx="750" cy="427" r="4" fill="#10b981"/>
  <text x="735" y="431" fill="#10b981" font-family="sans-serif" font-size="11" text-anchor="end" font-weight="600">Live Academy</text>
</svg>`,

  'signature-car-hire.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="sig-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="60%" stop-color="#292524"/>
      <stop offset="100%" stop-color="#44403c"/>
    </linearGradient>
    <linearGradient id="sig-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#292524" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#1c1917" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#sig-bg)"/>
  <rect width="800" height="40" fill="#0c0a09"/>
  <circle cx="20" cy="20" r="5" fill="#ef4444"/>
  <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="52" cy="20" r="5" fill="#10b981"/>
  <rect x="75" y="8" width="550" height="24" rx="6" fill="#1c1917" stroke="#eab308" stroke-width="1" stroke-opacity="0.4"/>
  <text x="95" y="24" fill="#fef08a" font-family="monospace" font-size="11">🔒 https://www.signaturecarhire.co.uk</text>
  <rect x="580" y="12" width="36" height="16" rx="4" fill="#ca8a04" fill-opacity="0.3"/>
  <text x="598" y="23" fill="#facc15" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="600">LIVE</text>

  <rect y="40" width="800" height="52" fill="#1c1917" fill-opacity="0.9"/>
  <text x="35" y="74" fill="#eab308" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="900" letter-spacing="2">SIGNATURE</text>
  <text x="175" y="73" fill="#d6d3d1" font-family="sans-serif" font-size="11">CAR HIRE &amp; CHAUFFEUR UK</text>

  <text x="40" y="145" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">Luxury Supercar &amp; Chauffeur Hire</text>
  <text x="40" y="175" fill="#fde047" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600">Interactive Finance Calculators &amp; Maps</text>
  <text x="40" y="210" fill="#d6d3d1" font-family="sans-serif" font-size="13">High-end British vehicle rental portal with real-time deposit/rate calculations, branch geolocation,</text>
  <text x="40" y="230" fill="#d6d3d1" font-family="sans-serif" font-size="13">automated fleet cron availability, and formatted PDF/Excel executive reporting.</text>

  <g transform="translate(40, 255)">
    <rect width="210" height="92" rx="12" fill="url(#sig-card)" stroke="#eab308" stroke-opacity="0.3" stroke-width="1"/>
    <text x="20" y="32" fill="#facc15" font-family="sans-serif" font-size="22" font-weight="800">Finance Calc</text>
    <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Loan &amp; Hire Rates</text>
    <text x="20" y="72" fill="#a8a29e" font-family="sans-serif" font-size="10">Deposit &amp; Insurance formulas</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="92" rx="12" fill="url(#sig-card)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="800">Google Maps</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Geolocation Locator</text>
      <text x="20" y="72" fill="#a8a29e" font-family="sans-serif" font-size="10">UK branch routing</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="240" height="92" rx="12" fill="url(#sig-card)" stroke="#34d399" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">Team of 2</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Muthu Karthik (Lead)</text>
      <text x="20" y="72" fill="#a8a29e" font-family="sans-serif" font-size="10">Senior Developer &amp; Team Lead</text>
    </g>
  </g>

  <rect y="405" width="800" height="45" fill="#0c0a09" fill-opacity="0.95"/>
  <text x="40" y="432" fill="#a8a29e" font-family="sans-serif" font-size="11">Tech Stack: PHP • Laravel • MySQL • Google Maps API • Geolocation • PDF/Excel • Cron</text>
  <circle cx="750" cy="427" r="4" fill="#10b981"/>
  <text x="735" y="431" fill="#10b981" font-family="sans-serif" font-size="11" text-anchor="end" font-weight="600">Live UK Portal</text>
</svg>`,

  'partners-portal.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="part-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e1b4b"/>
      <stop offset="60%" stop-color="#312e81"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="part-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#312e81" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#part-bg)"/>
  <rect width="800" height="40" fill="#0f0e26"/>
  <circle cx="20" cy="20" r="5" fill="#ef4444"/>
  <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="52" cy="20" r="5" fill="#10b981"/>
  <rect x="75" y="8" width="550" height="24" rx="6" fill="#1e1b4b" stroke="#818cf8" stroke-width="1" stroke-opacity="0.5"/>
  <text x="95" y="24" fill="#c7d2fe" font-family="monospace" font-size="11">🔒 https://partners.lifenethealth.org</text>
  <rect x="580" y="12" width="50" height="16" rx="4" fill="#4338ca" fill-opacity="0.5"/>
  <text x="605" y="23" fill="#a5b4fc" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="600">PORTAL</text>

  <rect y="40" width="800" height="52" fill="#17153b" fill-opacity="0.9"/>
  <text x="35" y="74" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="19" font-weight="800">PARTNERS PORTAL</text>
  <text x="245" y="72" fill="#a5b4fc" font-family="sans-serif" font-size="11">LifeNet Health Enterprise B2B Sync</text>

  <text x="40" y="145" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">Enterprise Clinical Partner Collaboration</text>
  <text x="40" y="175" fill="#a5b4fc" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600">&amp; Bi-Directional CRM Data Integration</text>
  <text x="40" y="210" fill="#c7d2fe" font-family="sans-serif" font-size="13">High-throughput integration middleware linking Drupal 10/11 with TrueNorth and HubSpot CRM,</text>
  <text x="40" y="230" fill="#c7d2fe" font-family="sans-serif" font-size="13">zero-loss retry queues, granular RBAC, and approval loops.</text>

  <g transform="translate(40, 255)">
    <rect width="210" height="92" rx="12" fill="url(#part-card)" stroke="#818cf8" stroke-opacity="0.3" stroke-width="1"/>
    <text x="20" y="32" fill="#a5b4fc" font-family="sans-serif" font-size="22" font-weight="800">TrueNorth &amp; Hub</text>
    <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Bi-Directional Sync</text>
    <text x="20" y="72" fill="#c7d2fe" font-family="sans-serif" font-size="10">Automated Webhook Handlers</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="92" rx="12" fill="url(#part-card)" stroke="#34d399" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">Zero Loss</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Fault-Tolerant Queue</text>
      <text x="20" y="72" fill="#c7d2fe" font-family="sans-serif" font-size="10">Retry workers &amp; audit logging</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="240" height="92" rx="12" fill="url(#part-card)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="800">Team of 3</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Muthu Karthik (Lead)</text>
      <text x="20" y="72" fill="#c7d2fe" font-family="sans-serif" font-size="10">Integration Lead &amp; Architect</text>
    </g>
  </g>

  <rect y="405" width="800" height="45" fill="#0f0e26" fill-opacity="0.95"/>
  <text x="40" y="432" fill="#a5b4fc" font-family="sans-serif" font-size="11">Tech Stack: Drupal 10/11 • PHP 8 • TrueNorth CRM • HubSpot API • Webhooks • OAuth 2.0</text>
  <circle cx="750" cy="427" r="4" fill="#38bdf8"/>
  <text x="735" y="431" fill="#38bdf8" font-family="sans-serif" font-size="11" text-anchor="end" font-weight="600">Enterprise Active</text>
</svg>`,

  'blc-portal.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="blc-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="60%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="blc-card" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#0f172a" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#blc-bg)"/>
  <rect width="800" height="40" fill="#090d16"/>
  <circle cx="20" cy="20" r="5" fill="#ef4444"/>
  <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="52" cy="20" r="5" fill="#10b981"/>
  <rect x="75" y="8" width="550" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1" stroke-opacity="0.4"/>
  <text x="95" y="24" fill="#94a3b8" font-family="monospace" font-size="11">🔒 https://blc.lifenethealth.org</text>
  <rect x="580" y="12" width="50" height="16" rx="4" fill="#0369a1" fill-opacity="0.4"/>
  <text x="605" y="23" fill="#38bdf8" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="600">PORTAL</text>

  <rect y="40" width="800" height="52" fill="#0f172a" fill-opacity="0.9"/>
  <text x="35" y="74" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="19" font-weight="800">BLC PORTAL</text>
  <text x="180" y="72" fill="#38bdf8" font-family="sans-serif" font-size="11">BioSciences Learning &amp; Compliance Center</text>

  <text x="40" y="145" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">BioSciences Learning Center</text>
  <text x="40" y="175" fill="#38bdf8" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600">&amp; Bio-Implant Regulatory Compliance</text>
  <text x="40" y="210" fill="#cbd5e1" font-family="sans-serif" font-size="13">Secure document distribution platform with role-based permissions, automated document watermarking,</text>
  <text x="40" y="230" fill="#cbd5e1" font-family="sans-serif" font-size="13">clinical trial access, and compliance tracking for healthcare distribution networks.</text>

  <g transform="translate(40, 255)">
    <rect width="210" height="92" rx="12" fill="url(#blc-card)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
    <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="800">SSO &amp; RBAC</text>
    <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Single Sign-On</text>
    <text x="20" y="72" fill="#94a3b8" font-family="sans-serif" font-size="10">Tiered Partner Access</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="92" rx="12" fill="url(#blc-card)" stroke="#34d399" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">Secure Docs</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Dynamic Watermarking</text>
      <text x="20" y="72" fill="#94a3b8" font-family="sans-serif" font-size="10">Audit Trail Logging</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="240" height="92" rx="12" fill="url(#blc-card)" stroke="#fbbf24" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#fbbf24" font-family="sans-serif" font-size="22" font-weight="800">Team of 2</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Muthu Karthik (Lead)</text>
      <text x="20" y="72" fill="#94a3b8" font-family="sans-serif" font-size="10">Senior Full-Stack Lead</text>
    </g>
  </g>

  <rect y="405" width="800" height="45" fill="#090d16" fill-opacity="0.95"/>
  <text x="40" y="432" fill="#64748b" font-family="sans-serif" font-size="11">Tech Stack: Drupal • PHP 8 • Node.js • SSO / OAuth • MySQL Indexing • REST API</text>
  <circle cx="750" cy="427" r="4" fill="#38bdf8"/>
  <text x="735" y="431" fill="#38bdf8" font-family="sans-serif" font-size="11" text-anchor="end" font-weight="600">Enterprise Active</text>
</svg>`,

  'cardiac-vascular.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="cv-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#450a0a"/>
      <stop offset="60%" stop-color="#7f1d1d"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="cv-box" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7f1d1d" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#450a0a" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#cv-bg)"/>
  <rect width="800" height="40" fill="#200505"/>
  <circle cx="20" cy="20" r="5" fill="#ef4444"/>
  <circle cx="36" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="52" cy="20" r="5" fill="#10b981"/>
  <rect x="75" y="8" width="550" height="24" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1" stroke-opacity="0.5"/>
  <text x="95" y="24" fill="#fecaca" font-family="monospace" font-size="11">🔒 http://cv.lifenethealth.org</text>
  <rect x="580" y="12" width="36" height="16" rx="4" fill="#b91c1c" fill-opacity="0.4"/>
  <text x="598" y="23" fill="#fca5a5" font-family="sans-serif" font-size="9" text-anchor="middle" font-weight="600">LIVE</text>

  <rect y="40" width="800" height="52" fill="#300707" fill-opacity="0.9"/>
  <text x="35" y="74" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="800">CARDIAC &amp; VASCULAR</text>
  <text x="260" y="72" fill="#fca5a5" font-family="sans-serif" font-size="11">LifeNet Health Medical Technologies</text>

  <text x="40" y="145" fill="#ffffff" font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="800">Cardiovascular Allograft Requisition</text>
  <text x="40" y="175" fill="#fca5a5" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="600">&amp; Surgical Heart Valve Solutions</text>
  <text x="40" y="210" fill="#fee2e2" font-family="sans-serif" font-size="13">Digital clinical ordering application for life-saving cardiovascular allografts, heart valves, and conduits</text>
  <text x="40" y="230" fill="#fee2e2" font-family="sans-serif" font-size="13">with real-time dimension matching, surgeon verification, and emergency tissue requisition alerts.</text>

  <g transform="translate(40, 255)">
    <rect width="210" height="92" rx="12" fill="url(#cv-box)" stroke="#f87171" stroke-opacity="0.3" stroke-width="1"/>
    <text x="20" y="32" fill="#fca5a5" font-family="sans-serif" font-size="22" font-weight="800">Cardiac Valves</text>
    <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Dimension Matching</text>
    <text x="20" y="72" fill="#fecaca" font-family="sans-serif" font-size="10">Emergency Requisition Flow</text>

    <g transform="translate(230, 0)">
      <rect width="210" height="92" rx="12" fill="url(#cv-box)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#38bdf8" font-family="sans-serif" font-size="22" font-weight="800">Instant Alert</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">SMS &amp; Email Dispatch</text>
      <text x="20" y="72" fill="#fecaca" font-family="sans-serif" font-size="10">Surgical team notification</text>
    </g>

    <g transform="translate(460, 0)">
      <rect width="240" height="92" rx="12" fill="url(#cv-box)" stroke="#34d399" stroke-opacity="0.3" stroke-width="1"/>
      <text x="20" y="32" fill="#34d399" font-family="sans-serif" font-size="22" font-weight="800">Team of 2</text>
      <text x="20" y="54" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="600">Muthu Karthik (Lead)</text>
      <text x="20" y="72" fill="#fecaca" font-family="sans-serif" font-size="10">Senior Full-Stack Architect</text>
    </g>
  </g>

  <rect y="405" width="800" height="45" fill="#200505" fill-opacity="0.95"/>
  <text x="40" y="432" fill="#f87171" font-family="sans-serif" font-size="11">Tech Stack: Drupal • PHP • MySQL • Clinical Data Security • REST APIs • Transactional Alerts</text>
  <circle cx="750" cy="427" r="4" fill="#10b981"/>
  <text x="735" y="431" fill="#10b981" font-family="sans-serif" font-size="11" text-anchor="end" font-weight="600">Live Clinical Portal</text>
</svg>`
};

for (const [filename, content] of Object.entries(svgs)) {
  outDirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, filename), content, 'utf8');
  });
  console.log(`Updated: ${filename}`);
}
console.log('All project preview SVGs updated with corrected team sizes!');
