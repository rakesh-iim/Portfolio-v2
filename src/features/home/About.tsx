import { motion } from 'motion/react';
import { Brain } from 'lucide-react';
import { useEffect, useState } from 'react';
import { aboutStats, personalInfo } from '@/data/portfolio';
import { DecodingText } from '@/components/ui/DecodingText';

function Counter({ target, duration = 2000 }: { target: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smoother counter
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));
      
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      }
    };
    
    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <>{count}{target > 10 ? '+' : ''}</>;
}


export function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      id="about" 
      className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-transparent to-surface-container-low/40"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-display text-3xl md:text-[40px] font-bold text-white mb-8 relative inline-block">
              <DecodingText text="About Me" />
              <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-gradient-to-r from-primary to-transparent rounded-full shadow-[0_0_10px_rgba(173,198,255,0.5)]"></div>
            </h2>
            
            <div className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <p className="text-white/80 mb-6 leading-relaxed">
                {personalInfo.about[0]}
              </p>
              <p className="text-white/80 leading-relaxed">
                {personalInfo.about[1]}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center bloom-hover min-h-[160px]">
               <span className="font-display text-5xl text-primary font-bold drop-shadow-[0_0_15px_rgba(173,198,255,0.6)] mb-2">
                 <Counter target={aboutStats.yearsExperience} />
               </span>
               <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">Years Exp.</span>
            </div>

            <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center bloom-hover min-h-[160px] relative overflow-hidden">
               <span className="font-display text-5xl text-secondary font-bold drop-shadow-[0_0_15px_rgba(221,183,255,0.6)] mb-2 relative z-10">
                 <Counter target={aboutStats.projectsDone} />
               </span>
               <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 font-semibold relative z-10">Projects Done</span>
               <div className="absolute inset-0 opacity-40 mix-blend-overlay border border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            </div>

            <div className="glass-panel p-6 rounded-2xl col-span-2 flex flex-row items-center justify-between bloom-hover overflow-hidden relative border-t-2 border-t-white/10">
              <div className="absolute -right-10 -top-10 w-32 h-32 border-2 border-primary/30 rotate-45 transform skew-x-12 opacity-40 shadow-[0_0_20px_rgba(173,198,255,0.2)]"></div>
              <div className="absolute -right-5 -top-5 w-32 h-32 border-2 border-secondary/30 rotate-45 transform skew-x-12 opacity-40 shadow-[0_0_20px_rgba(221,183,255,0.2)]"></div>
              <div>
                <h3 className="font-display text-2xl md:text-[32px] font-bold text-white mb-2 drop-shadow-sm leading-tight">Constant Learner</h3>
                <p className="text-sm text-white/70">Always exploring new tech</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(173,198,255,0.3)] shrink-0">
                <Brain className="text-primary" size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
