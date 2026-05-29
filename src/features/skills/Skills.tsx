import { motion } from 'motion/react';
import React from 'react';
import { Terminal, Server, Cloud } from 'lucide-react';

const techDetails: Record<string, string> = {
  'React': 'Expert · 4+ years building complex SPAs',
  'Next.js': 'Advanced · Production SSR & full-stack apps',
  'TypeScript': 'Expert · Strict type safety & advanced patterns',
  'Tailwind CSS': 'Expert · Utility-first responsive design',
  'Node.js': 'Advanced · REST APIs & scalable microservices',
  'Python': 'Intermediate · Data processing & scripting',
  'PostgreSQL': 'Advanced · Schema design & optimization',
  'GraphQL': 'Intermediate · Type-safe APIs & graph queries',
  'AWS': 'Intermediate · EC2, S3, ECS, Lambda',
  'Docker': 'Advanced · Containerization & deployment pipelines',
  'CI/CD': 'Advanced · GitHub Actions & automated testing',
  'Kubernetes': 'Competent · Container orchestration & scaling',
};

const TechBadge: React.FC<{ name: string; colorClass: string }> = ({ name, colorClass }) => {
  const description = techDetails[name] || 'Proficient • Production experience';
  
  return (
    <motion.div 
      className="relative group/badge"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className={`block font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border font-bold cursor-default select-none transition-colors duration-300 ${colorClass}`}>
        {name}
      </span>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] text-center px-3 py-2 bg-surface-container-highest border border-white/10 rounded-lg text-xs text-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.5)] opacity-0 translate-y-2 pointer-events-none group-hover/badge:opacity-100 group-hover/badge:translate-y-0 transition-all duration-300 z-50">
        {description}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-white/10"></div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-surface-container-highest"></div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      id="skills" 
      className="relative py-32 px-6 md:px-20 bg-surface-container-low/60 border-y border-white/10 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="font-display text-3xl md:text-[40px] font-bold text-white inline-block relative">
          Technical Arsenal
          <div className="skill-heading-accent absolute -bottom-2 left-1/4 w-1/2 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
        </h2>
        <p className="mt-8 text-white/80 max-w-2xl mx-auto">
          A curated stack of technologies I utilize to engineer scalable and high-performance applications.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="glass-panel skill-card skill-card-primary p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-white/20">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>
            <div className="relative z-10">
              <div className="skill-icon w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 border border-white/15 group-hover:border-primary/70 transition-colors">
                <Terminal className="text-white/80 group-hover:text-primary transition-all duration-300" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(tech => (
                  <TechBadge 
                    key={tech} 
                    name={tech} 
                    colorClass="bg-primary/10 text-primary border-primary/40 hover:bg-primary/20 hover:border-primary/60" 
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel skill-card skill-card-secondary p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-white/20">
            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>
            <div className="relative z-10">
              <div className="skill-icon w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 border border-white/15 group-hover:border-secondary/70 transition-colors">
                <Server className="text-white/80 group-hover:text-secondary transition-all duration-300" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'GraphQL'].map(tech => (
                  <TechBadge 
                    key={tech} 
                    name={tech} 
                    colorClass="bg-secondary/10 text-secondary border-secondary/40 hover:bg-secondary/20 hover:border-secondary/60" 
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel skill-card skill-card-tertiary p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-white/20">
            <div className="absolute -inset-1 bg-gradient-to-br from-tertiary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>
            <div className="relative z-10">
              <div className="skill-icon w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 border border-white/15 group-hover:border-tertiary/70 transition-colors">
                <Cloud className="text-white/80 group-hover:text-tertiary transition-all duration-300" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                 {['AWS', 'Docker', 'CI/CD', 'Kubernetes'].map(tech => (
                  <TechBadge 
                    key={tech} 
                    name={tech} 
                    colorClass="bg-tertiary/10 text-tertiary border-tertiary/40 hover:bg-tertiary/20 hover:border-tertiary/60" 
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
