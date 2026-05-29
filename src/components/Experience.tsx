import { motion } from 'motion/react';

export function Experience() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      id="experience" 
      className="max-w-[1440px] mx-auto px-6 md:px-20 mb-[120px] pt-32 relative"
    >
      <div className="mb-16 md:mb-24 text-center md:text-left">
        <h2 className="font-display text-4xl md:text-[80px] font-bold text-white mb-4 leading-none tracking-[-0.04em]">Experience.</h2>
        <p className="text-white/80 max-w-2xl text-lg mx-auto md:mx-0">A chronological journey through my professional roles, highlighting technical contributions and leadership.</p>
      </div>

      <div className="relative mt-12 md:mt-0">
        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-[21px] top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-100 rounded-full shadow-[0_0_15px_rgba(173,198,255,0.4)]"></div>
        {/* Desktop vertical line */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-primary to-transparent opacity-100 transform -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(173,198,255,0.4)]"></div>
        
        <div className="space-y-16 md:space-y-24">
          
          <div className="relative flex flex-col md:flex-row items-center w-full group">
            {/* Dot */}
            <div className="absolute left-[13px] md:left-1/2 w-5 h-5 bg-surface rounded-full border-4 border-primary z-10 transform md:-translate-x-1/2 group-hover:scale-150 group-hover:bg-primary transition-all duration-300 shadow-[0_0_20px_rgba(173,198,255,0.8)]"></div>
            
            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 text-left md:text-right mb-6 md:mb-0">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">2021 — Present</span>
              <h3 className="font-display text-2xl md:text-[40px] font-bold text-white mt-2 leading-tight">Senior Software Engineer</h3>
              <p className="text-white/70 mt-1">TechNova Solutions</p>
            </div>
            
            <div className="w-full md:w-1/2 pl-12 md:pl-16">
              <motion.div 
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 bg-surface-bright/30 border border-white/20 hover:shadow-[0_0_30px_rgba(173,198,255,0.25)] hover:border-white/30"
              >
                <p className="text-white/90 mb-4 font-medium leading-relaxed">Architected and deployed scalable microservices using Go and gRPC, reducing latency by 40%. Led a team of 5 engineers in migrating legacy monolith to a Kubernetes-based infrastructure.</p>
                <div className="flex flex-wrap gap-2">
                  {['Go', 'Kubernetes', 'AWS'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-mono text-[10px] uppercase font-bold tracking-wider">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center w-full group">
            {/* Dot */}
            <div className="absolute left-[13px] md:left-1/2 w-5 h-5 bg-surface rounded-full border-4 border-primary z-10 transform md:-translate-x-1/2 group-hover:scale-150 group-hover:bg-primary transition-all duration-300 shadow-[0_0_20px_rgba(173,198,255,0.8)]"></div>
            
            <div className="w-full md:w-1/2 pl-12 md:pl-16 order-2 md:order-1 mt-6 md:mt-0">
              <motion.div
                whileHover={{ x: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 bg-surface-bright/30 border border-white/20 hover:shadow-[0_0_30px_rgba(173,198,255,0.25)] hover:border-white/30"
              >
                <p className="text-white/90 mb-4 font-medium leading-relaxed">Developed high-performance frontend interfaces using React and WebGL for data visualization dashboards used by Fortune 500 clients.</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'WebGL', 'TypeScript'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary font-mono text-[10px] uppercase font-bold tracking-wider">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-16 text-left order-1 md:order-2">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">2018 — 2021</span>
              <h3 className="font-display text-2xl md:text-[40px] font-bold text-white mt-2 leading-tight">Frontend Engineer</h3>
              <p className="text-white/70 mt-1">DataVizion Inc.</p>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
