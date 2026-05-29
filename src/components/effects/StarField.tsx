import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
  drift: number;
  layer: number;
};

const LAYER_CONFIG = [
  { count: 0.00018, sizeMin: 0.3, sizeMax: 0.8, alphaMin: 0.25, alphaMax: 0.5, drift: 0.03 },
  { count: 0.00010, sizeMin: 0.6, sizeMax: 1.2, alphaMin: 0.35, alphaMax: 0.7, drift: 0.07 },
  { count: 0.00004, sizeMin: 1.0, sizeMax: 1.8, alphaMin: 0.55, alphaMax: 0.95, drift: 0.13 },
];

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let starColor = '255, 255, 255';
    let raf = 0;
    let scrollY = window.scrollY;

    const readStarColor = () => {
      const isLight = document.documentElement.classList.contains('light');
      starColor = isLight ? '40, 50, 80' : '255, 255, 255';
    };

    const seedStars = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const next: Star[] = [];
      LAYER_CONFIG.forEach((layer, idx) => {
        const count = Math.floor(w * h * layer.count);
        for (let i = 0; i < count; i++) {
          next.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: layer.sizeMin + Math.random() * (layer.sizeMax - layer.sizeMin),
            baseAlpha: layer.alphaMin + Math.random() * (layer.alphaMax - layer.alphaMin),
            twinklePhase: Math.random() * Math.PI * 2,
            twinkleSpeed: 0.0008 + Math.random() * 0.0018,
            drift: layer.drift,
            layer: idx,
          });
        }
      });
      stars = next;
    };

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const draw = (t: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const parallax = -scrollY * s.drift;
        let y = (s.y + parallax) % h;
        if (y < 0) y += h;
        const twinkle = (Math.sin(s.twinklePhase + t * s.twinkleSpeed) + 1) / 2;
        const alpha = s.baseAlpha * (0.5 + twinkle * 0.5);
        ctx.fillStyle = `rgba(${starColor}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (s.layer === 2) {
          ctx.fillStyle = `rgba(${starColor}, ${alpha * 0.25})`;
          ctx.beginPath();
          ctx.arc(s.x, y, s.r * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const observer = new MutationObserver(() => readStarColor());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    readStarColor();
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
