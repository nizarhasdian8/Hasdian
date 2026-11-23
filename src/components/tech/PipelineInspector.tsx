import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  CheckCircle2,
  ArrowUpRight,
  ShieldAlert,
  Lock,
  Terminal,
  Activity,
  BarChart3
} from 'lucide-react';
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiGoogleappsscript,
  SiGooglesheets,
  SiFigma,
  SiNotion,
  SiTrello,
  SiGithub,
  SiVercel,
  SiPython
} from '@icons-pack/react-simple-icons';
import type { TechItem, TechLayer } from '../../types/portfolio';
import { projectsData } from '../../data/portfolioData';
import type { FlowDomainId } from './PipelineFlowPresets';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  excel: BarChart3,
  powerbi: BarChart3,
  tableau: BarChart3,
  powerquery: BarChart3,
  sql: BarChart3,
  python: SiPython,
  html5: SiHtml5,
  tailwindcss: SiTailwindcss,
  javascript: SiJavascript,
  laravel: SiLaravel,
  mysql: SiMysql,
  googleappsscript: SiGoogleappsscript,
  googlesheets: SiGooglesheets,
  figma: SiFigma,
  canva: BarChart3,
  notion: SiNotion,
  trello: SiTrello,
  github: SiGithub,
  vercel: SiVercel
};

interface PipelineInspectorProps {
  selectedTech: TechItem | null;
  selectedLayer: TechLayer;
  activeDomain: FlowDomainId;
  onClearTechSelection: () => void;
  onSelectProject: (projectId: string) => void;
}

const layerDetailsMap: Record<
  TechLayer,
  {
    title: string;
    subtitle: string;
    description: string;
    guarantees: string[];
    role: string;
  }
> = {
  client: {
    title: 'Data Visualization',
    subtitle: 'Analysis & Reporting',
    description:
      'Membersihkan dan mengolah data, lalu menyajikannya dalam grafik dan dashboard interaktif agar tren dan insight mudah dibaca.',
    guarantees: [
      'Pembersihan dan persiapan data',
      'Dashboard interaktif dengan filter',
      'Penyajian insight yang mudah dipahami'
    ],
    role: 'Data Visualization'
  },
  backend: {
    title: 'Frontend & Web',
    subtitle: 'Web Interface',
    description:
      'Membangun antarmuka web yang rapi dan responsif dengan HTML, Tailwind CSS, dan JavaScript.',
    guarantees: [
      'Struktur halaman yang semantik',
      'Styling responsif dengan Tailwind CSS',
      'Interaktivitas di sisi browser'
    ],
    role: 'Frontend & Web'
  },
  database: {
    title: 'Backend & DB',
    subtitle: 'Server & Data',
    description:
      'Mengembangkan logika server dan mengelola penyimpanan data dengan Laravel, MySQL, Google Apps Script, dan Google Sheets.',
    guarantees: [
      'Logika aplikasi di sisi server',
      'Penyimpanan dan pengelolaan data',
      'Otomasi alur data dengan script'
    ],
    role: 'Backend & Database'
  },
  devops: {
    title: 'Design & Tools',
    subtitle: 'Design & Workflow',
    description:
      'Merancang tampilan dengan Figma dan Canva, serta mendukung alur kerja lewat dokumentasi, manajemen proyek, version control, dan deployment.',
    guarantees: [
      'Perancangan antarmuka (UI/UX) dan materi visual',
      'Dokumentasi dan manajemen proyek',
      'Version control dan deployment'
    ],
    role: 'Design & Tools'
  }
};

export const PipelineInspector: React.FC<PipelineInspectorProps> = ({
  selectedTech,
  selectedLayer,
  activeDomain,
  onClearTechSelection,
  onSelectProject
}) => {
  const layerInfo = layerDetailsMap[selectedLayer];

  // special view when cyber security filter is clicked
  if (activeDomain === 'cybersecurity') {
    return (
      <motion.div
        id="pipeline-inspector"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="p-7 sm:p-9 rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] space-y-6 select-none"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0f172a]/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl border-2 border-[#0f172a] flex items-center justify-center shadow-[3px_3px_0px_#0f172a] bg-[#fee2e2] text-[#dc2626]">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                  Quality Assurance
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-[#fee2e2] text-[#dc2626] border border-[#dc2626]">
                  COMING SOON
                </span>
              </div>

              <div className="text-xs font-mono text-[#0284c7] font-bold mt-0.5">
                Riset &amp; Eksplorasi Pengujian Perangkat Lunak
              </div>
            </div>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-[#fee2e2] border border-[#dc2626] text-xs font-mono font-bold text-[#dc2626] self-start sm:self-auto flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5" />
            <span>Tahap Persiapan</span>
          </div>
        </div>

        {/* security exploration description */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748b]">
            Fokus Eksplorasi
          </div>
          <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed bg-[#fff9d4]/60 p-4 rounded-2xl border border-[#0f172a]/20">
            Bidang quality assurance yang sedang dipersiapkan mencakup dasar pengujian perangkat lunak, penyusunan test case, dan black-box testing.
          </p>
        </div>

        {/* security toolkit cards */}
        <div className="space-y-3 pt-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369a1]">
            Domain yang Dipersiapkan
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-black text-[#0f172a]">
                <Lock className="w-4 h-4 text-[#dc2626]" />
                <span>Test Case</span>
              </div>
              <p className="text-xs text-[#475569] font-medium">
                Penyusunan skenario pengujian fungsional dan validasi alur aplikasi.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-black text-[#0f172a]">
                <Terminal className="w-4 h-4 text-[#0284c7]" />
                <span>Black-box Testing</span>
              </div>
              <p className="text-xs text-[#475569] font-medium">
                Pengujian fungsionalitas sistem berdasarkan spesifikasi kebutuhan tanpa melihat kode internal.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-black text-[#0f172a]">
                <Activity className="w-4 h-4 text-[#16a34a]" />
                <span>Use Case Testing</span>
              </div>
              <p className="text-xs text-[#475569] font-medium">
                Validasi kesesuaian alur bisnis dan skenario pengguna end-to-end.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // specific technology inspection view
  if (selectedTech) {
    const Icon = iconMap[selectedTech.iconKey];
    const relatedProjects = projectsData.filter((p) =>
      selectedTech.projectLinks?.includes(p.id)
    );

    return (
      <motion.div
        id="pipeline-inspector"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="p-7 sm:p-9 rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] space-y-6 select-none"
      >
        {/* inspector header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-[#0f172a]/10">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl border-2 border-[#0f172a] flex items-center justify-center shadow-[3px_3px_0px_#0f172a] bg-[#fff9d4]"
              style={{ color: selectedTech.color }}
            >
              {Icon ? (
                <Icon size={30} color={selectedTech.color} />
              ) : (
                <Code2 className="w-7 h-7 text-[#0f172a]" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">
                  {selectedTech.name}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg bg-[#fde047] text-[#0f172a] border border-[#0f172a]">
                  {selectedTech.roleTag || selectedTech.category}
                </span>
              </div>

              <div className="text-xs font-mono text-[#0284c7] font-bold mt-0.5">
                Kategori: {layerInfo.title}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClearTechSelection}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-[#faeed1] hover:bg-[#fde047] text-xs font-mono font-bold text-[#0f172a] border border-[#0f172a] transition-colors cursor-pointer"
          >
            &larr; Lihat Detail Kategori
          </button>
        </div>

        {/* usage context */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748b]">
            Penggunaan
          </div>
          <p className="text-sm sm:text-base text-[#1e293b] font-medium leading-relaxed bg-[#fff9d4]/60 p-4 rounded-2xl border border-[#0f172a]/20">
            {selectedTech.usageContext}
          </p>
        </div>

        {/* connected portfolio projects */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369a1]">
              Digunakan di Proyek
            </span>
            <span className="text-[11px] font-mono text-[#64748b]">
              {relatedProjects.length} Proyek Terkait
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relatedProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className="p-4 rounded-2xl bg-[#fff9d4] hover:bg-[#fde047] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_#0f172a] transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold text-[#64748b] uppercase pb-1">
                    <span>{proj.category === 'fullstack' ? 'Web System' : 'Mobile App'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0f172a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <h4 className="text-sm font-black text-[#0f172a] tracking-tight group-hover:text-[#0284c7] transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-[#334155] line-clamp-2 mt-1 font-medium leading-tight">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#0f172a]/15 text-[11px] font-mono font-bold text-[#0284c7]">
                  {proj.role.split('(')[0]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // default layer view
  return (
    <motion.div
      id="pipeline-inspector"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="p-7 sm:p-9 rounded-[32px] bg-[#fffdf5] border-2 border-[#0f172a] shadow-[8px_8px_0px_#0f172a] space-y-6 select-none"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b-2 border-[#0f172a]/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-xl bg-[#0284c7] text-white text-xs font-mono font-black border border-[#0f172a]">
              DETAIL KATEGORI
            </span>
            <span className="text-xs font-mono font-bold text-[#64748b] uppercase">
              {layerInfo.role}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight mt-1.5">
            {layerInfo.title}
          </h3>
        </div>

        <div className="px-3.5 py-1.5 rounded-xl bg-[#fff9d4] border border-[#0f172a] text-xs font-mono font-bold text-[#0f172a] self-start sm:self-auto">
          {layerInfo.subtitle}
        </div>
      </div>

      <p className="text-sm sm:text-base text-[#334155] font-medium leading-relaxed">
        {layerInfo.description}
      </p>

      {/* engineering focus */}
      <div className="space-y-2.5 pt-1">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#0369a1]">
          Fokus Utama
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {layerInfo.guarantees.map((guarantee, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-[#fff9d4] border-2 border-[#0f172a] shadow-[3px_3px_0px_#0f172a] flex items-center gap-2.5 text-xs font-mono font-bold text-[#0f172a]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
              <span>{guarantee}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
