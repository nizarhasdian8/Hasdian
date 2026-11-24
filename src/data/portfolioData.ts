import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Muhammad Nizar Hasdian',
  tagline: 'Data Analyst & Business Analyst',
  education: 'Sistem Informasi (S1) • UNIKOM',
  status: 'Available for Engineering Roles & Projects',
  bio: 'Informatics engineering undergraduate focused on building end-to-end web platforms and mobile applications with resilient architecture, clean code, and Linux-driven workflows.',
  experienceStart: 'Active Developer',
  avatarUrl: '/avatar.svg',
  photoUrl: '/Foto%20Full.jpg',
  interests: [
    'Web Architecture',
    'Mobile Systems',
    'Linux Ecosystem',
    'Software Reliability',
    'Reactive Interfaces'
  ],
  contact: {
    email: 'nizar.hasdian8@gmail.com',
    github: 'https://github.com/nizarhasdian8',
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
    id: 'sales-excel',
    title: 'Sales Analytics Dashboard',
    subtitle: '',
    category: 'excel',
    summary:
      'Dashboard interaktif di Excel untuk memantau penjualan dan margin keuntungan periode 2014–2017, dengan analisis per segmen, 10 produk teratas, serta filter tahun, region, state, dan segmen.',
    description:
      'Dashboard penjualan interaktif di Microsoft Excel untuk periode 2014–2017. Total penjualan mencapai $2,30 juta dengan profit $286 ribu (margin 12,47%) dari 37.873 unit. Penjualan tumbuh kuat (+29,5% di 2016 dan +20,4% di 2017), tetapi margin 2017 turun ke 12,7% dari 13,4% di 2016, sehingga pertumbuhan penjualan belum diikuti pertumbuhan profit.',
    architecture: [
      'Penjualan sangat musiman: September, November, dan Desember menyumbang sekitar 43% dari total penjualan (307 rb, 352 rb, 325 rb), dan pola ini muncul di setiap tahun.',
      'Diskon besar menggerus profit: transaksi tanpa diskon bermargin 29,5%, sedangkan diskon di atas 20% membuat margin negatif. Transaksi diskon di atas 20% hanya 16% dari penjualan, tetapi menyebabkan kerugian sekitar 135 rb, hampir setengah dari total profit. Tanpa transaksi tersebut, margin bisa naik ke sekitar 21,8% (estimasi sederhana).',
      'Furniture besar di penjualan, kecil di profit: 32% dari penjualan tetapi hanya 6% dari profit (margin 2,5%). Sub-kategori Tables rugi 17,7 rb dan Bookcases rugi 3,5 rb, sedangkan Technology (17,4%) dan Office Supplies (17,0%) menghasilkan hampir seluruh profit.',
      'Produk terlaris belum tentu menguntungkan: Canon imageCLASS 2200 menjadi produk terbaik (penjualan 61,6 rb, margin 41%), tetapi dari 10 produk terlaris, 3 rugi dan 1 impas, termasuk Cisco TelePresence EX90 dan GBC DocuBind P400. Secara total ada 301 produk (16%) yang rugi.',
      'Region Central dan beberapa state menjadi titik lemah: Central bermargin 7,9% dengan diskon rata-rata 24%, jauh di bawah West (14,9%, diskon 11%). Sebanyak 10 dari 49 state merugi (total -98 rb), terbesar Texas, Ohio, Pennsylvania, dan Illinois.',
      'Segmen Consumer terbesar tetapi marginnya paling tipis: 50% dari penjualan dengan margin 11,6%, sedangkan Home Office (14,0%) dan Corporate (13,0%) lebih sehat.'
    ],
    stack: ['Pivot Table', 'Slicer', 'Data Visualization'],
    highlights: [],
    challenges:
      'Keputusan yang dapat diambil:\n1. Batasi diskon maksimal sekitar 20%, karena ini langkah berdampak terbesar pada profit.\n2. Evaluasi ulang Tables, Bookcases, dan Machines lewat harga, diskon, atau penghentian varian yang rugi.\n3. Audit Central dan state yang merugi, terutama kebijakan diskon di sana.\n4. Dorong produk margin tinggi (Copiers, Paper, Accessories) menjelang September–Desember.\n5. Perbesar Corporate dan Home Office dengan paket pengadaan, karena marginnya lebih baik daripada Consumer.',
    role: 'Data Analyst',
    isPrivateRepo: true, // dipakai hanya untuk memunculkan label Personal Project
    imageUrl: '/projects/sales-dashboard.jpg',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'FOCUS', value: 'Sales & Margin' },
      { label: 'FILTER', value: 'Interactive Slicers' },
      { label: 'RANKING', value: 'Top 10 Products' }
    ],
    toolLabel: 'Excel',
    modalTag: 'Sales Dashboard',
    frameLabel: 'Sales Dashboard · Excel',
    frameBadge: 'EXCEL DASHBOARD'
  },
  {
    id: 'supermarket-powerbi',
    title: 'Supermarket Profitability Dashboard',
    subtitle: '',
    category: 'powerbi',
    summary:
      'Dashboard Power BI untuk memahami pola penjualan supermarket, mencakup performa tiap kategori, metode pembayaran, pola profit berdasarkan waktu, rating pelanggan, dan volume penjualan.',
    description:
      'Supermarket Sales Dashboard ini dikembangkan untuk memahami pola penjualan secara menyeluruh dan menampilkan informasi penting dalam bentuk visual yang lebih mudah diinterpretasikan.',
    architecture: [
      'Performa tiap kategori: Food & Beverages menjadi penyumbang revenue terbesar, diikuti Sports & Travel dan Electronic Accessories. Margin keuntungan di semua kategori berada pada tingkat yang sama, sehingga tidak ada perbedaan profit yang signifikan antarproduk.',
      'Perilaku pembayaran: cash, e-wallet, dan kartu kredit relatif berimbang. Penggunaan e-wallet yang hampir setara dengan tunai menunjukkan pergeseran preferensi ke pembayaran digital.',
      'Pola profit berdasarkan waktu: profit berfluktuasi sepanjang periode dengan kecenderungan naik menuju akhir kuartal, yang bisa dipengaruhi musim belanja, momentum tanggal tertentu, atau meningkatnya pembelian di akhir periode.',
      'Penilaian pelanggan: Food & Beverages kembali menjadi kategori dengan rating tertinggi, sementara beberapa kategori lain bernilai sedikit lebih rendah, yang bisa menjadi petunjuk kualitas layanan atau preferensi pelanggan.',
      'Volume penjualan: total barang terjual sejalan dengan kategori berrevenue tinggi, sehingga volume menjadi penggerak utama pendapatan.'
    ],
    stack: ['KPI', 'Trend Analysis', 'Data Visualization'],
    highlights: [],
    challenges:
      'Pola penjualan, metode pembayaran, dan penilaian pelanggan saling berkaitan dan bersama-sama menggambarkan aktivitas penjualan secara keseluruhan. Visualisasi membantu mengidentifikasi tren penting dan perbedaan antar kategori produk, serta menunjukkan bagaimana data yang telah dibersihkan dan divisualisasikan dapat memberi insight yang jelas, terarah, dan mudah dipahami.',
    role: 'Data Analyst',
    isPrivateRepo: true, // dipakai hanya untuk memunculkan label Personal Project
    imageUrl: '/projects/supermarket-dashboard.jpg',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'FOCUS', value: 'Profitability' },
      { label: 'METRICS', value: 'Profit, Revenue & GPM' },
      { label: 'INSIGHT', value: 'Rating vs Sales' }
    ],
    toolLabel: 'Power BI',
    modalTag: 'Supermarket Profitability',
    frameLabel: 'Supermarket · Power BI',
    frameBadge: 'POWER BI DASHBOARD'
  },
  {
    id: 'flight-tableau',
    title: 'US Flight Delay Analysis',
    subtitle: '',
    category: 'tableau',
    summary:
      'Dashboard Tableau yang memetakan keterlambatan penerbangan di Amerika Serikat periode 2017–2022, lengkap dengan persentase keterlambatan per penyebab dan peta distribusi berdasarkan maskapai.',
    description:
      'Dashboard US Flight Delay menampilkan data visual mengenai keterlambatan penerbangan di Amerika Serikat periode 2017–2022, meliputi total keterlambatan, persentase keterlambatan berdasarkan penyebab, pola per bulan, dan peta distribusi berdasarkan maskapai.',
    architecture: [
      'Total delay: menunjukkan akumulasi waktu keterlambatan seluruh penerbangan dibandingkan jadwal kedatangan seharusnya.',
      'Ukuran data: menggambarkan jumlah penerbangan yang dianalisis, sehingga cakupan analisis terlihat jelas dan membantu melihat apakah ada hubungan antara jumlah penerbangan dan tingkat keterlambatan.',
      'Pola per bulan dan rentang 2017–2022: memungkinkan melihat pola keterlambatan berdasarkan musim serta perubahannya dari tahun ke tahun.',
      'Faktor penyebab: persentase keterlambatan ditampilkan menurut arrival delay, carrier delay, late aircraft delay, NAS delay, security delay, dan weather delay, sehingga penyebab utama dapat dikenali.',
      'Peta Amerika Serikat: menunjukkan distribusi keterlambatan berdasarkan maskapai di tiap wilayah, memberi sudut pandang geografis.'
    ],
    stack: ['Geospatial Map', 'Trend Analysis', 'Data Visualization'],
    highlights: [],
    challenges:
      'Dashboard ini menyajikan gambaran menyeluruh keterlambatan penerbangan di Amerika Serikat, mulai dari total waktu keterlambatan dan penyebab utamanya hingga persebaran geografisnya. Informasi tersebut dapat dipakai untuk menentukan faktor penyebab dan wilayah yang perlu diprioritaskan dalam penanganan keterlambatan.',
    role: 'Data Analyst',
    isPrivateRepo: true, // dipakai hanya untuk memunculkan label Personal Project
    imageUrl: '/projects/flight-delay-dashboard.jpg',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'FOCUS', value: 'Flight Delays' },
      { label: 'PERIOD', value: '2017–2022' },
      { label: 'VISUAL', value: 'Geospatial Map' }
    ],
    toolLabel: 'Tableau',
    modalTag: 'US Flight Delay',
    frameLabel: 'US Flight Delay · Tableau',
    frameBadge: 'TABLEAU DASHBOARD'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-unikom',
    category: 'education',
    badge: 'Pendidikan',
    period: '2022 - 2026',
    role: 'Sistem Informasi',
    organization: 'Universitas Komputer Indonesia (UNIKOM)',
    description:
      'Lulusan Sistem Informasi dengan peminatan Big Data, mempelajari analisis proses bisnis, basis data, rekayasa perangkat lunak, algoritma, dan pemrograman web.',
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
