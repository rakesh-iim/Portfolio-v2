import { motion } from 'motion/react';
import { Terminal, Server, Cloud } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-20 bg-surface-container-low/60 border-y border-white/10 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1440px] mx-auto text-center mb-16">
        <h2 className="font-display text-3xl md:text-[40px] font-bold text-white inline-block relative">
          Technical Arsenal
          <div className="absolute -bottom-2 left-1/4 w-1/2 h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full shadow-[0_0_10px_rgba(221,183,255,0.5)]"></div>
        </h2>
        <p className="mt-8 text-white/80 max-w-2xl mx-auto">
          A curated stack of technologies I utilize to engineer scalable and high-performance applications.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          <div className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 bloom-hover relative overflow-hidden border border-white/20">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 border border-white/15 group-hover:border-primary/70 transition-colors shadow-lg shadow-black/40 group-hover:shadow-[0_0_20px_rgba(173,198,255,0.4)]">
                <Terminal className="text-white/80 group-hover:text-primary transition-all duration-300" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(tech => (
                  <span key={tech} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/40 font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 bloom-hover relative overflow-hidden border border-white/20">
            <div className="absolute -inset-1 bg-gradient-to-br from-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 border border-white/15 group-hover:border-secondary/70 transition-colors shadow-lg shadow-black/40 group-hover:shadow-[0_0_20px_rgba(221,183,255,0.4)]">
                <Server className="text-white/80 group-hover:text-secondary transition-all duration-300" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'GraphQL'].map(tech => (
                  <span key={tech} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-secondary/10 text-secondary border border-secondary/40 font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-500 bloom-hover relative overflow-hidden border border-white/20">
            <div className="absolute -inset-1 bg-gradient-to-br from-tertiary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 border border-white/15 group-hover:border-tertiary/70 transition-colors shadow-lg shadow-black/40 group-hover:shadow-[0_0_20px_rgba(255,183,134,0.4)]">
                <Cloud className="text-white/80 group-hover:text-tertiary transition-all duration-300" size={32} />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                 {['AWS', 'Docker', 'CI/CD', 'Kubernetes'].map(tech => (
                  <span key={tech} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/40 font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
