import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { projects } from '@/data/projects';
import { DecodingText } from '@/components/ui/DecodingText';

const TiltCard: React.FC<{ children: React.ReactNode, bgImage: string, techList?: string[], onClick?: () => void }> = ({ children, bgImage, techList, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="glass-panel rounded-3xl overflow-hidden group bg-surface-bright/20 border border-white/20 shadow-lg cursor-pointer transform-gpu"
    >
      <div className="h-64 md:h-80 w-full relative overflow-hidden bg-surface-bright" style={{ transform: "translateZ(30px)" }}>
        <img 
          src={bgImage} 
          alt="Project Background" 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container/60 to-transparent"></div>
        {techList && (
          <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-surface/80 backdrop-blur-md border-t border-white/10 z-10">
            <span className="block text-white/70 font-mono text-[10px] uppercase font-bold mb-3 tracking-widest">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {techList.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-primary/30 text-primary-light font-mono text-[10px] uppercase font-bold shadow-[0_0_10px_rgba(173,198,255,0.1)]">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-8 relative" style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      id="projects" 
      className="max-w-[1440px] mx-auto px-6 md:px-20 mb-[120px] relative z-10 pt-32"
    >
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20 text-[20vw] font-display font-bold text-white/[0.03] leading-none pointer-events-none select-none z-[-1] tracking-tighter w-full overflow-hidden">
        WORKS
      </div>

       <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
        <div>
          <h2 className="font-display text-4xl md:text-[80px] font-bold text-white mb-4 leading-none tracking-[-0.04em]"><DecodingText text="Selected Work." /></h2>
          <p className="text-white/80 max-w-xl text-lg">A curated selection of projects demonstrating technical depth and design sensibility.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 pb-4">
          <button className="font-mono text-[10px] uppercase tracking-wider px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold shadow-[0_0_15px_rgba(173,198,255,0.4)] hover:bg-primary-fixed transition-colors">All</button>
          <button className="font-mono text-[10px] uppercase tracking-wider px-6 py-2.5 rounded-full border border-white/30 text-white/70 hover:border-primary hover:text-primary transition-colors">Web</button>
          <button className="font-mono text-[10px] uppercase tracking-wider px-6 py-2.5 rounded-full border border-white/30 text-white/70 hover:border-primary hover:text-primary transition-colors">AI</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ perspective: 1500 }}>
        {projects.map((project) => (
          <TiltCard 
            key={project.id}
            bgImage={project.image}
            techList={project.techList}
            onClick={() => setSelectedProject(project)}
          >
              <h3 className="font-display text-2xl md:text-[32px] text-white font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-white/70 mb-6 line-clamp-2 leading-relaxed">{project.description}</p>
              <div className="flex gap-6 border-t border-white/20 pt-6">
                {project.links.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a 
                      key={idx} 
                      href={link.href} 
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center gap-2 font-mono text-[10px] uppercase font-bold ${link.primary ? 'text-white hover:text-primary group/link' : 'text-white/70 hover:text-white'} transition-colors`}
                    >
                      <Icon size={16} className={link.primary ? "group-hover/link:rotate-45 transition-transform" : ""} /> {link.label}
                    </a>
                  )
                })}
              </div>
          </TiltCard>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pointer-events-auto"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md cursor-pointer pointer-events-auto"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="relative w-full max-w-5xl bg-surface-container rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 z-10 flex flex-col md:flex-row max-h-[90vh] pointer-events-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-3 bg-black/20 hover:bg-black/50 rounded-full text-white/70 hover:text-white transition-colors z-20 backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container md:from-surface-container/50 md:bg-gradient-to-r to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
                <h3 className="font-display text-3xl md:text-5xl text-white font-bold mb-6 tracking-tight">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.techList.map(tech => (
                    <span key={tech} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-[10px] uppercase font-bold tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
                <h4 className="text-white/90 font-bold mb-3 uppercase tracking-widest text-xs font-mono">Project Overview</h4>
                <p className="text-white/70 mb-8 leading-relaxed text-lg">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-6 border-t border-white/10 pt-8 mt-auto">
                  {selectedProject.links.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest font-bold ${link.primary ? 'text-on-primary bg-primary px-6 py-3 rounded-full hover:bg-primary-fixed' : 'text-white hover:text-primary px-2 py-3'} transition-colors group/link`}>
                        <Icon size={16} className={link.primary ? "group-hover/link:rotate-45 transition-transform" : ""} /> {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  );
}
