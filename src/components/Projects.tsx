import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

function TiltCard({ children, bgImage }: { children: React.ReactNode, bgImage: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

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
      className="glass-panel rounded-3xl overflow-hidden group bg-surface-bright/20 border border-white/20 shadow-lg cursor-pointer transform-gpu"
    >
      <div className="h-64 md:h-80 w-full relative overflow-hidden bg-surface-bright" style={{ transform: "translateZ(30px)" }}>
        <img 
          src={bgImage} 
          alt="Project Background" 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container/60 to-transparent"></div>
      </div>
      <div className="p-8 relative" style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="max-w-[1440px] mx-auto px-6 md:px-20 mb-[120px] relative z-10 pt-32">
       <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
        <div>
          <h2 className="font-display text-4xl md:text-[80px] font-bold text-white mb-4 leading-none tracking-[-0.04em]">Selected Work.</h2>
          <p className="text-white/80 max-w-xl text-lg">A curated selection of projects demonstrating technical depth and design sensibility.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 pb-4">
          <button className="font-mono text-[10px] uppercase tracking-wider px-6 py-2.5 rounded-full bg-primary text-on-primary font-bold shadow-[0_0_15px_rgba(173,198,255,0.4)] hover:bg-primary-fixed transition-colors">All</button>
          <button className="font-mono text-[10px] uppercase tracking-wider px-6 py-2.5 rounded-full border border-white/30 text-white/70 hover:border-primary hover:text-primary transition-colors">Web</button>
          <button className="font-mono text-[10px] uppercase tracking-wider px-6 py-2.5 rounded-full border border-white/30 text-white/70 hover:border-primary hover:text-primary transition-colors">AI</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12" style={{ perspective: 1500 }}>
        <TiltCard bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3">
            <h3 className="font-display text-2xl md:text-[32px] text-white font-bold mb-2 group-hover:text-primary transition-colors">Aether Analytics</h3>
            <p className="text-white/70 mb-6 line-clamp-2 leading-relaxed">Real-time threat detection dashboard leveraging machine learning models to identify network anomalies with minimal latency.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Python', 'TensorFlow', 'Vue.js'].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-[10px] uppercase font-bold">{tech}</span>
              ))}
            </div>
            <div className="flex gap-6 border-t border-white/20 pt-6">
              <a href="#" className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold text-white hover:text-primary transition-colors group/link">
                <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform" /> Live Demo
              </a>
              <a href="#" className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold text-white/70 hover:text-white transition-colors">
                <Code size={16} /> GitHub
              </a>
            </div>
        </TiltCard>

        <TiltCard bgImage="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3">
            <h3 className="font-display text-2xl md:text-[32px] text-white font-bold mb-2 group-hover:text-primary transition-colors">Project Nexus</h3>
            <p className="text-white/70 mb-6 line-clamp-2 leading-relaxed">A decentralized application platform built on Ethereum, focusing on reducing gas fees through optimistic rollups.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['Solidity', 'Next.js', 'Ethers.js'].map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-mono text-[10px] uppercase font-bold">{tech}</span>
              ))}
            </div>
            <div className="flex gap-6 border-t border-white/20 pt-6">
              <a href="#" className="flex items-center gap-2 font-mono text-[10px] uppercase font-bold text-white hover:text-primary transition-colors group/link">
                <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform" /> View Project
              </a>
            </div>
        </TiltCard>
      </div>

    </section>
  );
}
