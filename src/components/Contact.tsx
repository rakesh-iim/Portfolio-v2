import { Mail, ArrowRight, Check } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-6 md:px-20 mb-[120px] pt-16">
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
             <form onSubmit={handleSubmit} className="space-y-8">
               <div className="relative group">
                 <input type="text" id="name" required placeholder="Name" className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white focus:ring-0 focus:border-primary focus:outline-none transition-colors py-4 px-0 peer placeholder-transparent" />
                 <label htmlFor="name" className="absolute left-0 top-4 text-white/60 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:font-bold peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/60 pointer-events-none">Your Name</label>
               </div>
               
               <div className="relative group">
                 <input type="email" id="email" required placeholder="Email" className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white focus:ring-0 focus:border-primary focus:outline-none transition-colors py-4 px-0 peer placeholder-transparent" />
                 <label htmlFor="email" className="absolute left-0 top-4 text-white/60 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:font-bold peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/60 pointer-events-none">Email Address</label>
               </div>
               
               <div className="relative group">
                 <textarea id="message" required rows={4} placeholder="Message" className="w-full bg-transparent border-0 border-b-2 border-white/30 text-white focus:ring-0 focus:border-primary focus:outline-none transition-colors py-4 px-0 peer placeholder-transparent resize-none"></textarea>
                 <label htmlFor="message" className="absolute left-0 top-4 text-white/60 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary peer-focus:font-bold peer-valid:-top-4 peer-valid:text-xs peer-valid:text-white/60 pointer-events-none">Your Message</label>
               </div>
               
               <button type="submit" disabled={sent} className={`relative overflow-hidden w-full md:w-auto px-12 py-5 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold transition-all duration-300 group ${sent ? 'bg-secondary text-on-secondary' : 'bg-primary text-on-primary hover:bg-primary-fixed shadow-[0_0_20px_rgba(173,198,255,0.4)] hover:shadow-[0_0_30px_rgba(173,198,255,0.6)] hover:-translate-y-1'}`}>
                 <span className="relative z-10 flex items-center justify-center gap-2">
                   {sent ? (
                     <>Sent! <Check size={18} /></>
                   ) : (
                     <>Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                   )}
                 </span>
               </button>
             </form>
           </div>
         </div>
       </div>
    </section>
  );
}
