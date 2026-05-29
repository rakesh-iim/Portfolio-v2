import { motion } from 'motion/react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { skillCategories, techDetails } from '@/data/portfolio';
import { DecodingText } from '@/components/ui/DecodingText';

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

const stack: Tech[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
];

const categoryFor = (name: string): string => {
  for (const [key, items] of Object.entries(skillCategories)) {
    if ((items as readonly string[]).includes(name)) return key;
  }
  return '';
};

export function SkillsShowcase() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      id="skills-showcase"
      className="relative py-32 px-6 md:px-20"
    >
      <div className="max-w-[1440px] mx-auto text-center mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/70 font-bold">Alt Layout · Logo-First</span>
      </div>
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="font-display text-3xl md:text-[40px] font-bold text-white inline-block relative">
          <DecodingText text="The Stack" />
          <div className="absolute -bottom-2 left-1/4 w-1/2 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
        </h2>
        <p className="mt-8 text-white/80 max-w-2xl mx-auto">
          Every tool I reach for, in its native color. Hover a tile to see how deep the experience runs.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {stack.map((tech, idx) => {
            const Icon = tech.icon;
            const description = techDetails[tech.name] || 'Proficient · Production experience';
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group/tile relative"
                style={{ ['--tile-accent' as string]: tech.color }}
              >
                <div
                  className="relative aspect-square rounded-2xl border border-white/10 bg-surface-container/40 backdrop-blur-sm flex flex-col items-center justify-center gap-3 overflow-hidden transition-all duration-300 group-hover/tile:border-[color:var(--tile-accent)]/60 group-hover/tile:bg-surface-container/70"
                  style={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 36px color-mix(in srgb, ${tech.color} 35%, transparent), 0 12px 28px rgba(0,0,0,0.35)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(0,0,0,0)';
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, color-mix(in srgb, ${tech.color} 22%, transparent), transparent 70%)`,
                    }}
                  />
                  <span
                    className="inline-flex transition-transform duration-300 group-hover/tile:scale-110 drop-shadow-[0_0_12px_color-mix(in_srgb,var(--tile-accent)_45%,transparent)]"
                    style={{ color: tech.color }}
                  >
                    <Icon size={42} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] font-bold text-white/80 group-hover/tile:text-white text-center px-2">
                    {tech.name}
                  </span>

                  <span className="absolute top-2.5 left-2.5 font-mono text-[8px] uppercase tracking-widest text-white/30">
                    {categoryFor(tech.name).slice(0, 2)}
                  </span>
                  <span className="absolute top-2.5 right-2.5 font-mono text-[8px] uppercase tracking-widest text-white/30 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-max max-w-[220px] text-center px-3 py-2 bg-surface-container-highest border border-white/10 rounded-lg text-xs text-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.5)] opacity-0 translate-y-1 pointer-events-none group-hover/tile:opacity-100 group-hover/tile:translate-y-0 transition-all duration-300 z-20">
                  {description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
