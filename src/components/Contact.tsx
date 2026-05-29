import { Mail, ArrowRight, Check, Loader2 } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

function AnimatedInput({ id, label, type = "text", required = false, isTextarea = false }: { id: string, label: string, type?: string, required?: boolean, isTextarea?: boolean }) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isActive = isFocused || value.length > 0;

  const inputClasses = "w-full bg-transparent border-0 border-b-2 border-transparent text-white focus:ring-0 focus:outline-none transition-colors py-4 px-0 relative z-10";

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    if (isTextarea) {
      handleTextareaInput();
    }
  }, [value, isTextarea]);

  return (
    <div className="relative group mt-6">
      {isTextarea ? (
        <textarea
          ref={textareaRef}
          id={id}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={1}
          className={`${inputClasses} resize-none overflow-hidden min-h-[56px]`}
        />
      ) : (
        <input
          type={type}
          id={id}
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClasses}
        />
      )}
      {/* Base border */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30 z-0"></div>
      
      {/* Animated glowing border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-0 origin-center"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: isFocused ? 1 : 0, 
          opacity: isFocused ? 1 : 0,
          boxShadow: isFocused ? "0 0 10px 0 var(--color-primary)" : "0 0 0px 0 var(--color-primary)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isActive ? -28 : 0,
          scale: isActive ? 0.75 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ originX: 0, originY: 0.5 }}
        className={`absolute left-0 top-4 pointer-events-none font-bold transition-colors duration-300 z-0 ${isFocused ? 'text-primary' : 'text-white/60'}`}
      >
        {label}
      </motion.label>
    </div>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 60, damping: 20 }}
      id="contact" 
      className="max-w-[1440px] mx-auto px-6 md:px-20 mb-[120px] pt-16"
    >
       <div className="glass-panel rounded-[32px] p-8 md:p-16 relative overflow-hidden bg-surface-container-high/40 border border-white/20">
         
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="flex flex-col lg:flex-row gap-16 relative z-10">
           <div className="w-full lg:w-1/2">
             <h2 className="font-display text-[48px] md:text-[80px] font-bold text-white mb-6 leading-[1.1] tracking-tight">Let's build<br/>the future.</h2>
             <p className="text-white/80 mb-12 max-w-md text-lg leading-relaxed">Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
             
             <div className="space-y-8">
               <a href="mailto:hello@rakeshkb.dev" className="flex items-center gap-6 group w-fit">
                 <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-surface-bright/50 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300 shadow-[0_0_10px_rgba(173,198,255,0)] group-hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] shrink-0">
                   <Mail className="text-white/70 group-hover:text-primary transition-colors" size={24} />
                 </div>
                 <div>
                   <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-1 font-bold">Email</p>
                   <p className="text-white font-medium text-lg md:text-xl group-hover:text-primary transition-colors">hello@rakeshkb.dev</p>
                 </div>
               </a>
               
               <div className="flex flex-wrap gap-6 pt-4">
                 <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-primary transition-colors underline decoration-white/30 underline-offset-8">LinkedIn</a>
                 <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-primary transition-colors underline decoration-white/30 underline-offset-8">GitHub</a>
                 <a href="#" className="font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-primary transition-colors underline decoration-white/30 underline-offset-8">Twitter</a>
               </div>
             </div>
           </div>

           <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
             <form onSubmit={handleSubmit} className="space-y-4">
               <AnimatedInput id="name" label="Your Name" required />
               <AnimatedInput id="email" label="Email Address" type="email" required />
               <AnimatedInput id="message" label="Your Message" isTextarea required />
               
              <div className="pt-4">
                <button type="submit" disabled={isSubmitting || sent} className={`relative overflow-hidden w-full md:w-auto h-14 min-w-[200px] rounded-full font-mono text-[10px] uppercase tracking-widest font-bold transition-all duration-300 group ${sent ? 'bg-secondary text-on-secondary' : isSubmitting ? 'bg-surface-bright text-white/50 cursor-not-allowed' : 'bg-primary text-on-primary hover:bg-primary-fixed shadow-[0_0_20px_rgba(173,198,255,0.4)] hover:shadow-[0_0_30px_rgba(173,198,255,0.6)] hover:-translate-y-1'}`}>
                  <span className="relative z-10 flex items-center justify-center w-full h-full">
                    {isSubmitting ? (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        Sending <Loader2 size={18} className="animate-spin" />
                      </motion.span>
                    ) : sent ? (
                      <motion.span 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-center gap-2"
                      >
                        Sent! <Check size={18} />
                      </motion.span>
                    ) : (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </motion.span>
                    )}
                  </span>
                </button>
              </div>
             </form>
           </div>
         </div>
       </div>
    </motion.section>
  );
}
