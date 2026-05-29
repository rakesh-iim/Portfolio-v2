import { personalInfo, socialLinks } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-20 bg-surface-container-lowest/80 backdrop-blur-md border-t border-white/10 mt-auto relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 max-w-[1440px] mx-auto gap-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80 font-bold text-center md:text-left">
          © {new Date().getFullYear()} {personalInfo.name.toUpperCase()}. ENGINEERED FOR THE FUTURE.
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-80 hover:opacity-100 transition-opacity">
          {socialLinks.filter((social) => social.label !== 'Email').map((social) => (
            <a key={social.label} href={social.href} className="font-mono text-[10px] uppercase text-white/70 hover:text-white transition-colors tracking-widest font-semibold flex items-center gap-2">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
