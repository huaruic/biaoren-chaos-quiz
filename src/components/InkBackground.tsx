import React from 'react';
import { motion } from 'motion/react';

export const InkBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      {/* Paper Texture Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none mix-blend-overlay">
        <filter id="paper-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-texture)" />
      </svg>

      {/* Ink Blobs - Pure CSS */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-[#1a1a1a] to-transparent blur-[80px] animate-ink-1"
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-radial from-[#1a1a1a] to-transparent blur-[100px] animate-ink-2"
      />
      <div
        className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-gradient-radial from-[#111] to-transparent blur-[60px] animate-ink-3"
      />
    </div>
  );
};
