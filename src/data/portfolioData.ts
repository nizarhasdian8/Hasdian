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

// Pemetaan kelompok (kartu -> layer -> category):
// - 01 Data Visualization  -> layer 'client'   -> category 'frontend'
// - 02 Frontend & Web      -> layer 'backend'  -> category 'mobile'
// - 03 Backend & DB        -> layer 'database' -> category 'backend'
// - 04 Design & Tools      -> layer 'devops'   -> category 'tools'
export const techStackData: TechItem[] = [
  // 01 Data Visualization (client / frontend)
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
  {
    name: 'Power Query',
    category: 'frontend',
    layer: 'client',
    iconKey: 'powerquery',
    color: '#1E3A5F',
    roleTag: 'Data Cleaning',
    usageContext: 'Cleaning, transforming, and reshaping raw data before analysis',
    projectLinks: []
  },
  {
    name: 'SQL',
    category: 'frontend',
    layer: 'client',
    iconKey: 'sql',
    color: '#1E3A5F',
    roleTag: 'Data Querying',
    usageContext: 'Querying and filtering data from relational databases',
    projectLinks: []
  },
  {
    name: 'Python',
    category: 'frontend',
    layer: 'client',
    iconKey: 'python',
    color: '#3776AB',
    roleTag: 'Data Scripting',
    usageContext: 'Scripting for data handling and processing',
    projectLinks: []
  },

  // 02 Frontend & Web (backend / mobile)
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
    name: 'Tailwind CSS',
    category: 'mobile',
    layer: 'backend',
    iconKey: 'tailwindcss',
    color: '#06B6D4',
    roleTag: 'Utility-First Styling',
    usageContext: 'Utility-first styling for building responsive interfaces',
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

  // 03 Backend & DB (database / backend)
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'database',
    iconKey: 'laravel',
    color: '#FF2D20',
    roleTag: 'PHP Framework',
    usageContext: 'Server-side web application development with routing and MVC structure',
    projectLinks: []
  },
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#4479A1',
    roleTag: 'Relational Database',
    usageContext: 'Relational data storage and querying for web applications',
    projectLinks: []
  },
  {
    name: 'Google Apps Script',
    category: 'backend',
    layer: 'database',
    iconKey: 'googleappsscript',
    color: '#4285F4',
    roleTag: 'Script & Automation',
    usageContext: 'Server-side scripting and automation on Google Workspace data',
    projectLinks: []
  },
  {
    name: 'Google Sheets',
    category: 'backend',
    layer: 'database',
    iconKey: 'googlesheets',
    color: '#34A853',
    roleTag: 'Spreadsheet Database',
    usageContext: 'Spreadsheet-based data storage and collaboration',
    projectLinks: []
  },

  // 04 Design & Tools (devops / tools)
  {
    name: 'Figma',
    category: 'tools',
    layer: 'devops',
    iconKey: 'figma',
    color: '#F24E1E',
    roleTag: 'UI/UX',
    usageContext: 'UI/UX design and interface layout',
    projectLinks: []
  },
  {
    name: 'Canva',
    category: 'tools',
    layer: 'devops',
    iconKey: 'canva',
    color: '#00C4CC',
    roleTag: 'Visual Design',
    usageContext: 'Quick visual design for presentations and graphic content',
    projectLinks: []
  },
  {
    name: 'Notion',
    category: 'tools',
    layer: 'devops',
    iconKey: 'notion',
    color: '#000000',
    roleTag: 'Documentation',
    usageContext: 'Documentation and note organization in structured workspaces',
    projectLinks: []
  },
  {
    name: 'Trello',
    category: 'tools',
    layer: 'devops',
    iconKey: 'trello',
    color: '#0052CC',
    roleTag: 'Project Management',
    usageContext: 'Task tracking and project management with boards',
    projectLinks: []
  },
  {
    name: 'GitHub',
    category: 'tools',
    layer: 'devops',
    iconKey: 'github',
    color: '#181717',
    roleTag: 'Version Control',
    usageContext: 'Version control and code collaboration with Git repositories',
    projectLinks: []
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#000000',
    roleTag: 'Deployment',
    usageContext: 'Deploying and hosting web applications with automatic builds from Git',
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
    id: 'edu-unikom',
    category: 'education',
    badge: 'Pendidikan',
    period: '2022 - 2026',
    role: 'S1 Sistem Informasi',
    organization: 'Universitas Komputer Indonesia (UNIKOM)',
    description:
      'Menempuh studi Sistem Informasi dengan peminatan Big Data, mempelajari analisis proses bisnis, basis data, rekayasa perangkat lunak, dan pemrograman web.',
    highlights: [
      'Peminatan Big Data',
      'IPK 3.70 / 4.00',
      'Skripsi sistem informasi pencatatan pesanan dan stok berbasis web (Laravel)',
      'Analisis kebutuhan dan pengujian black-box pada 8 modul'
    ],
    tech: ['Big Data', 'Sistem Basis Data', 'Analisis Proses Bisnis', 'Rekayasa Perangkat Lunak', 'Pemrograman Web', 'Struktur Data']
  },
  {
    id: 'org-futsal-unikom',
    category: 'bootcamp',
    badge: 'Organisasi',
    period: 'Nov 2023 - Okt 2024',
    role: 'Ketua Umum',
    organization: 'UKM Futsal UNIKOM',
    description:
      'Memimpin 10 pengurus dan lebih dari 50 anggota, menyusun dan mengawasi program kerja serta kegiatan tahunan UKM.',
    highlights: [
      'Memimpin 10 pengurus dan 50+ anggota',
      'Menyusun dan mengawasi program kerja tahunan',
      'Mewakili UKM di forum internal dan eksternal',
      'Membangun kerja sama dan membina anggota'
    ],
    tech: ['Kepemimpinan', 'Manajemen Tim', 'Perencanaan Program', 'Komunikasi']
  },
  {
    id: 'exp-pengalaman',
    category: 'project',
    badge: 'Magang',
    period: 'Nov 2025 - Feb 2026',
    role: 'UI/UX Designer',
    organization: 'Syaamil Group',
    description:
      'Merancang dashboard web responsif untuk sistem pengelolaan aset menggunakan Figma, dari wireframe hingga prototype.',
    highlights: [
      'Wireframe dan prototype di Figma',
      'Dashboard web responsif',
      'Tampilan dashboard Google Analytics'
    ],
    tech: ['Figma', 'UI/UX', 'Wireframe', 'Prototype', 'Google Analytics'],
    entries: [
      {
        id: 'exp-syaamil',
        badge: 'Magang',
        period: 'Nov 2025 - Feb 2026',
        role: 'UI/UX Designer',
        organization: 'Syaamil Group',
        description:
          'Merancang dashboard web responsif untuk sistem pengelolaan aset menggunakan Figma, dari wireframe hingga prototype.',
        highlights: [
          'Wireframe dan prototype di Figma',
          'Dashboard web responsif',
          'Tampilan dashboard Google Analytics'
        ],
        tech: ['Figma', 'UI/UX', 'Wireframe', 'Prototype', 'Google Analytics']
      },
      {
        id: 'exp-bpsdmp',
        badge: 'Magang',
        period: 'Agu 2025 - Okt 2025',
        role: 'Web Developer Intern',
        organization: 'BPSDMP Komdigi',
        description:
          'Mengembangkan aplikasi web pengajuan pelatihan dengan role admin dan peserta, memakai HTML, CSS, JavaScript, dan Google Apps Script.',
        highlights: [
          'Role admin dan peserta',
          'Alur approval dan rejection',
          'Laporan KPI (total pengajuan, approved, rejected)',
          'Pengujian positif dan negatif bersama mentor'
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Google Apps Script', 'Google Sheets']
      }
    ]
  },
  {
    id: 'exp-sertifikat',
    category: 'security',
    badge: 'Sertifikasi',
    period: 'Feb 2026',
    role: 'Analis Data Madya',
    organization: 'BNSP (LSP Informatika)',
    description:
      'Sertifikasi kompetensi BNSP pada skema Analis Data Madya, mencakup 6 unit kompetensi.',
    highlights: [
      'Skema Analis Data Madya',
      '6 unit kompetensi',
      'Diterbitkan 9 Februari 2026'
    ],
    tech: ['Data Analyst', 'BNSP'],
    entries: [
      {
        id: 'cert-bnsp',
        badge: 'Sertifikasi',
        period: 'Feb 2026',
        role: 'Analis Data Madya',
        organization: 'BNSP (LSP Informatika)',
        description:
          'Sertifikasi kompetensi BNSP pada skema Analis Data Madya, mencakup 6 unit kompetensi.',
        highlights: [
          'Skema Analis Data Madya',
          '6 unit kompetensi',
          'Diterbitkan 9 Februari 2026'
        ],
        tech: ['Data Analyst', 'BNSP']
      },
      {
        id: 'cert-myskill-excel',
        badge: 'Sertifikasi',
        period: 'Nov 2026',
        role: 'Project: Creating Sales Dashboard in Excel',
        organization: 'MySkill',
        description:
          'Menyelesaikan e-learning project pembuatan sales dashboard di Microsoft Excel pada topik Portfolio in Microsoft Excel.',
        highlights: [
          'Ringkasan sales dan profit margin bulanan',
          'Analisis per segmen dan 10 produk teratas',
          'Slicer tahun, region, state, dan segmen'
        ],
        tech: ['Excel', 'Dashboard', 'Slicer', 'Data Visualization']
      },
      {
        id: 'cert-gemini',
        badge: 'Sertifikasi',
        period: 'Agu 2026',
        role: 'Gemini Certified Student (University)',
        organization: 'Google for Education',
        description: 'TODO',
        tech: ['TODO']
      },
      {
        id: 'cert-dqlab-python',
        badge: 'Pelatihan',
        period: 'Okt 2025',
        role: 'Python Fundamental for Data Science',
        organization: 'DQLab',
        description:
          'Menyelesaikan pelatihan dasar pemrograman Python untuk data science.',
        tech: ['Python', 'Data Science']
      },
      {
        id: 'cert-skilvul-uiux',
        badge: 'Pelatihan',
        period: 'Jul 2025',
        role: 'UI/UX Design Mastery',
        organization: 'Skilvul',
        description:
          'Mengikuti program UI/UX Design Mastery dengan studi kasus perancangan aplikasi mobile Kelas Online.',
        tech: ['UI/UX Design', 'Case Study']
      }
    ]
  }
];
