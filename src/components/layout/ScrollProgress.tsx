import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function ScrollProgress() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    let cached: { id: string; top: number; bottom: number }[] = [];

    const measure = () => {
      cached = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          return { id: s.id, top, bottom: top + rect.height };
        })
        .filter((x): x is { id: string; top: number; bottom: number } => x !== null);
    };

    const update = () => {
      ticking = false;
      const pos = window.scrollY + window.innerHeight / 3;
      let current = cached[0]?.id ?? 'home';
      for (const s of cached) {
        if (pos >= s.top && pos <= s.bottom) {
          current = s.id;
          break;
        }
      }
      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const handleResize = () => {
      measure();
      handleScroll();
    };

    measure();
    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed right-6 xl:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 items-end pointer-events-none">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="group flex items-center justify-end gap-4 pointer-events-auto"
          aria-label={`Scroll to ${section.label}`}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-white/50 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 duration-300">
            {section.label}
          </span>
          <motion.div
            initial={false}
            animate={{
              height: activeSection === section.id ? 24 : 8,
              backgroundColor: activeSection === section.id ? 'rgb(173, 198, 255)' : 'rgba(255, 255, 255, 0.2)',
            }}
            transition={{ duration: 0.3 }}
            className={`w-2 rounded-full transition-colors duration-300 group-hover:bg-white/50 ${
              activeSection === section.id
                ? 'shadow-[0_0_10px_rgba(173,198,255,0.7)]'
                : ''
            }`}
          />
        </a>
      ))}
    </div>
  );
}
