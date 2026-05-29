import { motion } from 'motion/react';
import { Home, Rocket, FileText, Mail, Download, Briefcase, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolio';
import { downloadResume } from '@/lib/resume';

function ThemeToggleButton({ className }: { className?: string }) {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
      setIsLight(true);
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newThemeLight = !isLight;
    setIsLight(newThemeLight);
    
    if (newThemeLight) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-3 bg-surface-container/80 backdrop-blur-xl border border-outline/20 rounded-full text-on-surface hover:text-primary hover:border-primary/50 hover:bg-primary/10 shadow-lg hover:shadow-[0_0_25px_rgba(173,198,255,0.2)] transition-colors duration-300 group ${className || ''}`}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLight ? (
        <Moon size={20} className="group-hover:-rotate-12 transition-transform text-outline group-hover:text-primary" />
      ) : (
        <Sun size={20} className="group-hover:rotate-45 transition-transform text-outline group-hover:text-primary" />
      )}
    </motion.button>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`hidden md:flex fixed top-0 w-full z-50 transition-all duration-500 ease-out ${scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-primary/10' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center px-10 py-6 w-full max-w-[1440px] mx-auto">
          <div className="font-display text-2xl font-bold tracking-tighter text-white">{personalInfo.brand}</div>
          <div className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] font-medium">
            <a href="#about" className="text-primary font-bold border-b-2 border-primary pb-1">Work</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors hover:bg-surface-bright/40 px-3 py-1.5 rounded-md">Skills</a>
            <a href="#experience" className="text-white/70 hover:text-white transition-colors hover:bg-surface-bright/40 px-3 py-1.5 rounded-md">Experience</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors hover:bg-surface-bright/40 px-3 py-1.5 rounded-md">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" onClick={downloadResume} className="text-white/80 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-bold px-4 py-3.5 transition-colors group">
              <Download size={16} className="text-primary group-hover:-translate-y-1 transition-transform" />
              Resume
            </a>
            <a href="#contact" className="bg-primary text-on-primary font-mono text-xs uppercase tracking-[0.2em] font-bold px-8 py-3.5 rounded-full hover:bg-primary-fixed transition-colors shadow-[0_0_20px_rgba(173,198,255,0.4)] bloom-hover">
              Hire Me
            </a>
            <ThemeToggleButton />
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 w-full z-40 bg-surface/80 backdrop-blur-xl border-b border-white/10 p-4 flex justify-between items-center">
        <div className="font-display text-xl font-bold tracking-tighter text-white">{personalInfo.brand}</div>
        <ThemeToggleButton className="p-2" />
      </div>

      {/* Mobile nav */}
      <nav className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 sm:gap-6 bg-surface-container/80 backdrop-blur-2xl rounded-full px-5 py-3 border border-white/20 shadow-[0_0_30px_rgba(173,198,255,0.25)]">
        <a href="#home" className="flex flex-col items-center justify-center text-primary scale-110 font-mono text-[10px] uppercase font-bold">
          <Home size={20} className="mb-1 drop-shadow-[0_0_8px_rgba(173,198,255,0.8)]" />
          <span>Home</span>
        </a>
        <a href="#projects" className="flex flex-col items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all font-mono text-[10px] uppercase">
          <Rocket size={20} className="mb-1" />
          <span>Projects</span>
        </a>
        <a href="#experience" className="flex flex-col items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all font-mono text-[10px] uppercase">
          <Briefcase size={20} className="mb-1" />
          <span>Work</span>
        </a>
        <button onClick={downloadResume} className="flex flex-col items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all font-mono text-[10px] uppercase">
          <Download size={20} className="mb-1" />
          <span>Resume</span>
        </button>
        <a href="#contact" className="flex flex-col items-center justify-center text-white/70 hover:text-white hover:scale-110 transition-all font-mono text-[10px] uppercase">
          <Mail size={20} className="mb-1" />
          <span>Mail</span>
        </a>
      </nav>
    </>
  );
}
