import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export function SocialBar() {
  return (
    <div className="fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 items-center pointer-events-none">
      {/* Top line to anchor the bar visually */}
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/20 mb-2"></div>
      
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto') ? '_self' : '_blank'}
            rel={social.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
            className="group flex items-center justify-center pointer-events-auto"
            aria-label={social.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.2, x: 5, transition: { type: "spring", stiffness: 400, damping: 17 } }}
            whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 400, damping: 17 } }}
          >
            <Icon 
              size={18} 
              className="text-white/50 group-hover:text-primary transition-colors duration-300 drop-shadow-[0_0_10px_rgba(173,198,255,0)] group-hover:drop-shadow-[0_0_10px_rgba(173,198,255,0.8)]" 
            />
          </motion.a>
        );
      })}

      {/* Bottom line */}
      <div className="w-[1px] h-24 bg-gradient-to-t from-transparent to-white/20 mt-2"></div>
    </div>
  );
}
