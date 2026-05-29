import React, { useState, useEffect } from 'react';
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
    const handleScroll = () => {
      // Use middle of screen for scroll detection
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const absoluteTop = top + window.scrollY;
          const absoluteBottom = bottom + window.scrollY;

          // If the scroll position is within the element's absolute boundaries
          if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
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
