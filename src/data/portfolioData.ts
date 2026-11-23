import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Muhammad Nizar Hasdian',
  tagline: 'Data Analyst & Business Analyst',
  education: 'Sistem Informasi (S1) • UNIKOM',
  status: 'Available for Engineering Roles & Projects',
  bio: 'Informatics engineering undergraduate focused on building end-to-end web platforms and mobile applications with resilient architecture, clean code, and Linux-driven workflows.',
  experienceStart: 'Active Developer',
  avatarUrl: '/avatar.svg',
  interests: [
    'Web Architecture',
    'Mobile Systems',
    'Linux Ecosystem',
    'Software Reliability',
    'Reactive Interfaces'
  ],
  contact: {
    email: 'nizar.hasdian8@gmail.com',
    github: 'https://github.com/ryhndastra',
    linkedin: 'https://www.linkedin.com/in/nizar-hasdian',
    location: 'Indonesia'
  }
};

// Pemetaan kelompok filter domain & layer:
// - layer 'client' + category 'frontend'  = Data Visualization
// - layer 'backend' + category 'mobile'   = Fullstack
// - layer 'database' + category 'backend' = Design
// - layer 'devops' + category 'tools'     = Data Preparation
export const techStackData: TechItem[] = [
  // Data Visualization (client / frontend)
  {
    name: 'Excel',
    category: 'frontend',
    layer: 'client',
    iconKey: 'excel',
    color: '#217346',
    roleTag: 'Spreadsheet Analysis',
    usageContext: 'Spreadsheet-based analysis, charts, and interactive filtering with slicers',
    projectLinks: []
  },
  {
    name: 'Power BI',
    category: 'frontend',
    layer: 'client',
    iconKey: 'powerbi',
    color: '#F2C811',
    roleTag: 'Business Intelligence',
    usageContext: 'Business intelligence reports and interactive visuals built from structured data',
    projectLinks: []
  },
  {
    name: 'Tableau',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tableau',
    color: '#E97627',
    roleTag: 'Data Exploration',
    usageContext: 'Exploring data visually through charts, maps, and interactive views',
    projectLinks: []
  },

  // Fullstack (backend / mobile)
  {
    name: 'HTML',
    category: 'mobile',
    layer: 'backend',
    iconKey: 'html5',
    color: '#E34F26',
    roleTag: 'Page Structure',
    usageContext: 'Semantic page structure and content markup for web pages',
    projectLinks: []
  },
  {
    name: 'CSS',
    category: 'mobile',
    layer: 'backend',
    iconKey: 'css',
    color: '#1572B6',
    roleTag: 'Styling',
    usageContext: 'Layout and styling for clean, responsive web interfaces',
    projectLinks: []
  },
  {
    name: 'JavaScript',
    category: 'mobile',
    layer: 'backend',
    iconKey: 'javascript',
    color: '#F7DF1E',
    roleTag: 'Interactivity',
    usageContext: 'Client-side interactivity and application logic in the browser',
    projectLinks: []
  },
  {
    name: 'Laravel',
    category: 'mobile',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#FF2D20',
    roleTag: 'PHP Framework',
    usageContext: 'Server-side web application development with routing and MVC structure',
    projectLinks: []
  },
  {
    name: 'MySQL',
    category: 'mobile',
    layer: 'backend',
    iconKey: 'mysql',
    color: '#4479A1',
    roleTag: 'Relational Database',
    usageContext: 'Relational data storage and querying for web applications',
    projectLinks: []
  },
  {
    name: 'Google Apps Script',
    category: 'mobile',
    layer: 'backend',
    iconKey: 'googleappsscript',
    color: '#4285F4',
    roleTag: 'Script & Automation',
    usageContext: 'Server-side scripting and automation on Google Workspace data',
    projectLinks: []
  },

  // Design (database / backend)
  {
    name: 'Figma',
    category: 'backend',
    layer: 'database',
    iconKey: 'figma',
    color: '#F24E1E',
    roleTag: 'UI/UX',
    usageContext: 'UI/UX design and interface layout',
    projectLinks: []
  },
  {
    name: 'Canva',
    category: 'backend',
    layer: 'database',
    iconKey: 'canva',
    color: '#00C4CC',
    roleTag: 'Visual Design',
    usageContext: 'Quick visual design for presentations and graphic content',
    projectLinks: []
  },

  // Data Preparation (devops / tools)
  {
    name: 'Power Query',
    category: 'tools',
    layer: 'devops',
    iconKey: 'powerquery',
    color: '#1E3A5F',
    roleTag: 'Data Cleaning',
    usageContext: 'Cleaning, transforming, and reshaping raw data before analysis',
    projectLinks: []
  },
  {
    name: 'SQL',
    category: 'tools',
    layer: 'devops',
    iconKey: 'sql',
    color: '#1E3A5F',
    roleTag: 'Data Querying',
    usageContext: 'Querying and filtering data from relational databases',
    projectLinks: []
  },
  {
    name: 'Python',
    category: 'tools',
    layer: 'devops',
    iconKey: 'python',
    color: '#3776AB',
    roleTag: 'Data Scripting',
    usageContext: 'Scripting for data handling and processing',
    projectLinks: []
  }
];

export const projectsData: Project[] = [
  {
    id: 'cimart',
    title: 'CiMart (CibendaMart)',
    subtitle: 'Rural E-Commerce Platform for Desa Cibenda, Pangandaran',
    category: 'fullstack',
    summary: 'Platform e-commerce desa yang dibangun atas permintaan Wakil Rektor & Prodi untuk memberdayakan transaksi komoditas sembako, hasil tani, ternak, ikan, dan UMKM warga Desa Cibenda.',
    description: 'Proyek inisiatif digitalisasi desa yang dimandatkan langsung oleh pimpinan kampus bekerjasama dengan perangkat Desa Cibenda. Platform ini menjembatani produsen desa langsung dengan pembeli regional melalui integrasi peta dan pembayaran terotomatisasi.',
    architecture: [
      'Backend monolitik Laravel dengan routing frontend React TypeScript via Inertia.js',
      'WebSockets untuk sinkronisasi pesanan dan status transaksi real-time',
      'Firebase Cloud Messaging (FCM) untuk push notification otomatis',
      'Integrasi Leaflet / OpenStreetMap untuk pemetaan titik pengantaran desa',
      'Payment gateway Midtrans otomatis dengan otentikasi Google OAuth',
      'Containerisasi Docker untuk memastikan reliabilitas deployment antar server'
    ],
    stack: [
      'Laravel',
      'Inertia.js',
      'React',
      'TypeScript',
      'MySQL',
      'Tailwind CSS',
      'Docker',
      'FCM',
      'WebSockets',
      'Leaflet / OSM',
      'Midtrans',
      'Google OAuth'
    ],
    highlights: [
      'Inisiatif resmi atas penugasan Warek & Prodi Teknik Informatika',
      'Mendukung komoditas sembako, pertanian, peternakan, perikanan, dan kerajinan',
      'Sistem pembayaran digital instan dan pemetaan akurat level desa'
    ],
    challenges: 'Dikerjakan dan diarsiteki secara mandiri dari nol hingga tahap produksi karena keterbatasan anggota tim.',
    role: 'Full-Stack Engineer',
    demoUrl: 'https://cimart.ryhndastra.site',
    isPrivateRepo: true,
    privateRepoReason: 'Repository privat karena hak cipta institusi & kerahasiaan data',
    imageUrl: '/projects/CibendaMart.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Engineering', value: 'Full-Stack Developer' },
      { label: 'Architecture', value: 'Laravel Inertia' },
      { label: 'Payment API', value: 'Midtrans Iris' }
    ]
  },
  {
    id: 'villanakey',
    title: 'villaNaKey',
    subtitle: 'Aplikasi Mobile Booking & Manajemen Reservasi Villa Keluarga',
    category: 'mobile',
    summary: 'Aplikasi mobile booking khusus untuk mendukung operasional bisnis hospitality villa pribadi keluarga dengan sinkronisasi kalender real-time tanpa risiko double-booking.',
    description: 'Dikembangkan sebagai proyek akhir kampus untuk mendigitalisasi pemesanan villa keluarga, mengeliminasi risiko double-booking, dan mempermudah pengecekan jadwal reservasi bagi pengelola dan tamu.',
    architecture: [
      'Aplikasi mobile multi-platform dibangun dengan Flutter dan Dart SDK',
      'Firebase Authentication untuk otentikasi aman pengelola dan tamu',
      'Cloud Firestore NoSQL real-time database untuk sinkronisasi instan jadwal reservasi',
      'Komponen custom calendar interaktif dengan highlight tanggal booking aktif'
    ],
    stack: [
      'Flutter',
      'Dart',
      'Firebase Auth',
      'Cloud Firestore',
      'Mobile Architecture'
    ],
    highlights: [
      'Digunakan langsung pada operasional villa pribadi keluarga',
      'Sinkronisasi status booking instan tanpa latency',
      'Kalender interaktif visual untuk kemudahan reservasi tanggal'
    ],
    challenges: 'Proyek aplikasi mobile pertama; mempelajari Flutter dan reaktif state management dari nol bersama kelompok di bawah tenggat waktu akademik yang ketat.',
    role: 'Mobile Developer & Technical Lead',
    githubUrl: 'https://github.com/ryhndastra/villanakey',
    isMobileApp: true,
    demoStatusLabel: 'Aplikasi Mobile Native (Demo/APK on request)',
    imageUrl: '/projects/villa.png',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Mobile Engine', value: 'Flutter & Dart' },
      { label: 'Database Sync', value: 'Real-Time NoSQL' },
      { label: 'State & Cloud', value: 'Firebase Suite' }
    ]
  },
  {
    id: 'kalorin-ai',
    title: 'kalorinAi',
    subtitle: 'Platform Web Nutrisi & Tracking Kalori Berbasis Computer Vision AI',
    category: 'fullstack',
    summary: 'Platform pelacak nutrisi cerdas dengan pengenalan citra piring makanan berbasis AI untuk menghitung kalori, makronutrien, serta rekomendasi harian.',
    description: 'Capstone Project Dicoding CodingCamp 2026 Powered by DBS Foundation yang dikembangkan bersama tim 6 orang (2 Data Analyst, 2 AI Engineer, 2 Fullstack). Fitur mencakup kalkulator BMI, tracking asupan harian, streak, insight AI, dan rekomendasi menu.',
    architecture: [
      'Client web modern menggunakan React, Vite, dan Tailwind CSS v4',
      'Database dan layer data menggunakan Supabase dan Prisma ORM',
      'Sistem otentikasi aman menggunakan Firebase Auth',
      'Pipeline computer vision TensorFlow/Keras di backend Python untuk mendeteksi porsi dan nilai gizi (kalori, protein, lemak, karbohidrat)',
      'Mesin rekomendasi harian adaptif berdasarkan target kalori pengguna'
    ],
    stack: [
      'React',
      'Vite',
      'Tailwind CSS v4',
      'TypeScript',
      'Supabase',
      'Prisma ORM',
      'Firebase Auth',
      'TensorFlow',
      'Python'
    ],
    highlights: [
      'Capstone Project Dicoding CodingCamp 2026 Powered by DBS Foundation',
      'Deteksi citra makanan otomatis untuk kalkulasi makronutrien instan',
      'Sistem insight harian dan rekomendasi personal berbasis AI'
    ],
    challenges: 'Menggarap seluruh arsitektur web dan integrasi API secara mandiri di tengah jadwal padat antara perkuliahan semester aktif dan bootcamp.',
    role: 'Lead Web Full-Stack Developer',
    githubUrl: 'https://github.com/ryhndastra/kalorin-ai',
    demoUrl: 'https://kalorin-ai.vercel.app',
    imageUrl: '/projects/kalorinLogo.png',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Capstone Team', value: '6 Engineers' },
      { label: 'AI Inference', value: 'TensorFlow CNN' },
      { label: 'Web Platform', value: 'React & Vite' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-widyatama',
    period: '2023 - Sekarang',
    role: 'S1 Teknik Informatika',
    organization: 'Universitas Widyatama (Angkatan 2023)',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh studi sarjana Teknik Informatika dengan pendalaman fundamental ilmu komputer, struktur data, algoritma, rekayasa perangkat lunak, dan mengambil penjurusan spesialisasi Database / Data Analyst.',
    highlights: [
      'Penjurusan Database & Data Analyst',
      'Pemodelan Data Relasional & Optimasi Query SQL',
      'Fundamental Rekayasa Perangkat Lunak & Algoritma'
    ],
    tech: ['Database Systems', 'Data Analysis', 'SQL', 'Algorithms', 'Software Engineering', 'System Design']
  },
  {
    id: 'exp-dicoding-dbs',
    period: 'Feb 2026 - Jul 2026',
    role: 'Fullstack Developer (Learning Path)',
    organization: 'Dicoding CodingCamp 2026 Powered by DBS Foundation',
    badge: 'Intensive Bootcamp',
    category: 'bootcamp',
    description:
      'Program beasiswa pelatihan intensif Fullstack Developer dari Dicoding dan DBS Foundation. Membangun arsitektur frontend web modern (React & Vite), integrasi API backend type-safe, otentikasi data, dan berkolaborasi dalam Capstone Project kalorinAI.',
    highlights: [
      'Lulusan Jalur Fullstack Developer',
      'Integrasi REST API, State Management & Cloud DB',
      'Kolaborasi Tim Capstone Project kalorinAI'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Prisma ORM', 'Tailwind CSS', 'REST API']
  },
  {
    id: 'exp-cimart-mbkm',
    period: 'Jul 2026 - Sekarang',
    role: 'Full-Stack Developer',
    organization: 'Inisiatif MBKM / KKN Tematik & Capstone Kampus Desa Cibenda',
    badge: 'MBKM / Capstone Kampus',
    category: 'project',
    description:
      'Inisiatif MBKM / KKN Tematik resmi dari kampus yang menjadi Capstone Project untuk digitalisasi komoditas ekonomi warga Desa Cibenda, Pangandaran. Dikerjakan secara mandiri dari perancangan arsitektur sistem, integrasi payment gateway Midtrans, notifikasi FCM, hingga deployment produksi.',
    highlights: [
      'Mandat Resmi Pimpinan Kampus & Perangkat Desa',
      'Development Arsitektur End-to-End',
      'Integrasi Payment Gateway Midtrans & WebSockets'
    ],
    tech: ['Laravel', 'Inertia.js', 'React', 'MySQL', 'Docker', 'WebSockets', 'Midtrans', 'Leaflet']
  },
  {
    id: 'exp-rework-cybersecurity',
    period: 'Agu 2026 - Des 2026',
    role: 'Cyber Security Trainee (Red Team Focus)',
    organization: 'Cyber Security Bootcamp by Rework Academy',
    badge: 'Cyber Security Bootcamp',
    category: 'security',
    description:
      'Pelatihan intensif keamanan siber komprehensif mulai dari fundamental cybersecurity, vulnerability assessment, web application penetration testing (OWASP Top 10), network penetration testing, bug bounty hunting, hingga penyusunan security reporting profesional. Fokus mendalam pada Red Team (Offensive Security) dengan pemahaman komplementer Blue Team (Defensive) dan Purple Team.',
    highlights: [
      'Web Application & Network Penetration Testing',
      'Metodologi Bug Bounty & Eksploitasi OWASP Top 10',
      'Vulnerability Assessment & Security Reporting',
      'Fokus Offensive Red Team dengan Pemahaman Blue/Purple Team'
    ],
    tech: ['Web App Pentesting', 'Network Security', 'OWASP Top 10', 'Bug Bounty', 'Red Teaming', 'Linux Security', 'Security Reporting']
  }
];
