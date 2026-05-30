import { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring, useTransform, useMotionTemplate, motion } from 'motion/react';

export function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const ringY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });
  const dotX = useSpring(x, { stiffness: 500, damping: 28, mass: 0.1 });
  const dotY = useSpring(y, { stiffness: 500, damping: 28, mass: 0.1 });

  const ringTx = useTransform(ringX, (v) => v - 16);
  const ringTy = useTransform(ringY, (v) => v - 16);
  const dotTx = useTransform(dotX, (v) => v - 2);
  const dotTy = useTransform(dotY, (v) => v - 2);
  const ringTransform = useMotionTemplate`translate3d(${ringTx}px, ${ringTy}px, 0)`;
  const dotTransform = useMotionTemplate`translate3d(${dotTx}px, ${dotTy}px, 0)`;

  const lastHoverRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const finePointer = window.matchMedia('(pointer: fine)');
    if (!mq.matches || !finePointer.matches) return;
    setIsDesktop(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const next = !!(t && t.closest('a, button, input, textarea'));
      if (next !== lastHoverRef.current) {
        lastHoverRef.current = next;
        setIsHovering(next);
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [x, y]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/80 pointer-events-none z-[10000] will-change-transform"
        style={{ transform: ringTransform }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(173,198,255,0.2)' : 'rgba(0,0,0,0)',
          borderColor: isHovering ? 'rgba(0,0,0,0)' : 'rgba(173,198,255,0.8)',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[10000] shadow-[0_0_10px_rgba(173,198,255,1)] will-change-transform"
        style={{ transform: dotTransform }}
      />
    </>
  );
}
