import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz0123456789';

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
}

type Props = {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  as?: 'span' | 'div';
};

export function DecodingText({ text, duration = 900, delay = 0, className, as = 'span' }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(() => text.replace(/\S/g, ' '));

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let cancelled = false;
    const startAfter = performance.now() + delay;

    const tick = (now: number) => {
      if (cancelled) return;
      if (now < startAfter) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - startAfter) / duration, 1);
      const revealed = Math.floor(progress * text.length);
      let out = '';
      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        if (c === ' ' || c === '\n') {
          out += c;
        } else if (i < revealed) {
          out += c;
        } else {
          out += randomChar();
        }
      }
      setDisplay(out);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [inView, text, duration, delay]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={className} aria-label={text}>
      {display}
    </Tag>
  );
}
