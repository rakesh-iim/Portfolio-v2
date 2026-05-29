/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CustomCursor } from '@/components/effects/CustomCursor';
import { NoiseOverlay } from '@/components/effects/NoiseOverlay';
import { Footer } from '@/components/layout/Footer';
import { Navigation } from '@/components/layout/Navigation';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { SocialBar } from '@/components/layout/SocialBar';
import { Contact } from '@/features/contact/Contact';
import { About } from '@/features/home/About';
import { Experience } from '@/features/home/Experience';
import { Hero } from '@/features/home/Hero';
import { Projects } from '@/features/projects/Projects';
import { Skills } from '@/features/skills/Skills';

export default function App() {
  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary/30 selection:text-primary">
      <NoiseOverlay />
      <CustomCursor />
      <ScrollToTop />
      <ScrollProgress />
      <SocialBar />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
