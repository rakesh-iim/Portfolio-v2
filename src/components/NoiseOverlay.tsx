export function NoiseOverlay() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[9999] opacity-[0.03]">
      <svg className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
