import { useEffect, useRef } from 'react';

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '173, 198, 255';
}

const LINK_DIST = 100;
const LINK_DIST_SQ = LINK_DIST * LINK_DIST;
const MOUSE_DIST = 150;
const MAX_PARTICLES = 150;
const PARTICLE_AREA_DIVISOR = 9000;

type P = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
};

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: P[] = [];
    let mx = -9999;
    let my = -9999;
    let primaryRgb = '173, 198, 255';
    let raf = 0;
    let visible = true;
    let running = true;

    const updateColor = () => {
      const hex = getComputedStyle(document.body).getPropertyValue('--color-primary').trim();
      if (hex) primaryRgb = hexToRgb(hex);
    };

    const resize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w;
      canvas.height = h;
      updateColor();
      initParticles(w, h);
    };

    const initParticles = (w: number, h: number) => {
      const count = Math.min(Math.floor((w * h) / PARTICLE_AREA_DIVISOR), MAX_PARTICLES);
      particles = new Array(count);
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        particles[i] = {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.4 + 0.6,
        };
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mx = -9999;
      my = -9999;
    };

    const animate = () => {
      if (!running) {
        raf = 0;
        return;
      }
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const n = particles.length;

      // Update positions first
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        const dx = mx - p.x;
        const dy = my - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < MOUSE_DIST * MOUSE_DIST) {
          const dist = Math.sqrt(distSq) || 1;
          const force = (MOUSE_DIST - dist) / MOUSE_DIST;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        } else {
          p.x += (p.baseX - p.x) * 0.02;
          p.y += (p.baseY - p.y) * 0.02;
        }

        p.baseX += p.vx;
        p.baseY += p.vy;
        if (p.baseX < 0 || p.baseX > w) p.vx *= -1;
        if (p.baseY < 0 || p.baseY > h) p.vy *= -1;
      }

      // Draw lines (squared-distance, single stroke style)
      ctx.lineWidth = 1;
      for (let i = 0; i < n; i++) {
        const a = particles[i];
        for (let j = i + 1; j < n; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dsq = dx * dx + dy * dy;
          if (dsq < LINK_DIST_SQ) {
            const alpha = 0.2 * (1 - Math.sqrt(dsq) / LINK_DIST);
            ctx.strokeStyle = `rgba(${primaryRgb}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      ctx.fillStyle = `rgba(${primaryRgb}, 0.5)`;
      for (let i = 0; i < n; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(animate);
    };

    const start = () => {
      if (raf || !running) return;
      raf = requestAnimationFrame(animate);
    };

    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        running = visible && document.visibilityState === 'visible';
        if (running) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(parent);

    const onVisibility = () => {
      running = visible && document.visibilityState === 'visible';
      if (running) start();
      else stop();
    };

    const themeObserver = new MutationObserver(updateColor);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    parent.addEventListener('mousemove', handleMouseMove);
    parent.addEventListener('mouseleave', handleMouseLeave);

    resize();
    start();

    return () => {
      io.disconnect();
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      stop();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60 z-0" />;
}
