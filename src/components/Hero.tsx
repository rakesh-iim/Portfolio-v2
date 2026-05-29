import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import { downloadResume } from '../utils';
import { ParticleCanvas } from './ParticleCanvas';

const phrases = ["Software Engineer", "Problem Solver", "Tech Innovator"];

export function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [greeting, setGreeting] = useState('Welcome to my space');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(2000); // Pause at end
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before next word
      }
    }, typingSpeed);

    return () => clearInterval(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-20 pt-24 md:pt-0">
      <ParticleCanvas />
      <div className="absolute inset-0 z-0 pointer-events-none hero-glow">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/15 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex flex-col items-start justify-center">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="font-mono text-xs text-primary mb-6 tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(173,198,255,0.4)]"
        >
          {greeting}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="font-display text-5xl md:text-[80px] leading-[1.1] tracking-[-0.04em] text-white mb-6 max-w-4xl font-bold"
        >
          Hi, I'm <br/><span className="text-gradient">Rakesh Kumar Behera</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          className="font-display text-2xl md:text-[40px] leading-[1.2] font-semibold text-white/90 mb-12 h-[1.2em]"
        >
          <span>{text}</span>
          <span className="inline-block w-[3px] h-[1em] bg-primary align-middle ml-1 shadow-[0_0_10px_rgba(173,198,255,1)]" style={{ animation: 'blink 1s step-end infinite' }}></span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a href="#projects" className="glass-panel px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold text-white hover:bg-white/10 transition-all duration-300 bloom-hover flex items-center justify-center gap-2 group w-full sm:w-auto text-nowrap">
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-primary" />
          </a>
          <button onClick={downloadResume} className="glass-panel px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold text-white hover:bg-white/10 transition-all duration-300 bloom-hover flex items-center justify-center gap-2 group w-full sm:w-auto text-nowrap">
            <Download size={16} className="group-hover:-translate-y-1 transition-transform text-primary" />
            Resume
          </button>
          <a href="#contact" className="px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] font-bold text-primary border-2 border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-[0_0_15px_rgba(173,198,255,0.1)] hover:shadow-[0_0_25px_rgba(173,198,255,0.3)] flex items-center justify-center w-full sm:w-auto text-nowrap">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
