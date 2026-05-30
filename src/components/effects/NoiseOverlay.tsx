const NOISE_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#n)'/>
</svg>`;

const NOISE_URL = `url("data:image/svg+xml;utf8,${encodeURIComponent(NOISE_SVG)}")`;

export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-[9999] opacity-[0.03]"
      style={{
        backgroundImage: NOISE_URL,
        backgroundRepeat: 'repeat',
      }}
    />
  );
}
