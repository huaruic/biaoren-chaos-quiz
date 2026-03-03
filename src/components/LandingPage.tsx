import React, { useMemo } from 'react';
import { motion } from 'motion/react'; // Keep motion for simple transitions, use CSS for complex

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  const title = "镖人·乱世行";
  const slogan = "吾道不孤，与君同行";

  const rainDrops = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 1 + 0.5}s`,
      delay: `${Math.random() * 2}s`,
      height: `${Math.random() * 50 + 50}px`,
      opacity: Math.random() * 0.3 + 0.1,
    }));
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-paper-white p-6 text-center">
      {/* Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {rainDrops.map((drop, i) => (
          <div
            key={i}
            className="rain-drop"
            style={{
              left: drop.left,
              height: drop.height,
              opacity: drop.opacity,
              animation: `rainFall ${drop.duration} linear infinite`,
              animationDelay: drop.delay,
            }}
          />
        ))}
      </div>
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg md:text-xl font-serif tracking-[0.2em] text-[#e8e0d0] mb-4 opacity-80"
      >
        大业十三年
      </motion.p>

      <div className="mb-8 relative">
        <h1 className="text-6xl md:text-8xl font-calligraphy tracking-widest text-paper-white drop-shadow-[0_0_15px_rgba(245,240,232,0.3)]">
          {title.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block origin-bottom"
              style={{
                animation: `charReveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards`,
                animationDelay: `${1 + index * 0.2}s`,
                opacity: 0,
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Seal Stamp */}
        <div
          className="absolute -top-4 -right-4 md:-right-8 w-16 h-16 md:w-24 md:h-24 border-4 border-zhu-red rounded-sm flex items-center justify-center text-zhu-red font-calligraphy text-2xl md:text-4xl bg-zhu-red/5 backdrop-blur-[2px]"
          style={{
            animation: `sealStamp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
            animationDelay: '2.5s',
            opacity: 0,
            boxShadow: '0 0 20px rgba(197, 48, 48, 0.2)',
          }}
        >
          <div className="border border-zhu-red/60 w-[90%] h-[90%] flex items-center justify-center relative">
            镖
            {/* Diffusion Ripple */}
            <div
              className="absolute inset-0 border-2 border-zhu-red rounded-full pointer-events-none"
              style={{
                animation: `inkDiffuse 1s ease-out forwards`,
                animationDelay: '2.7s',
                opacity: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Slogan */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="text-xl md:text-2xl font-serif text-[#e8e0d0] mb-12 tracking-[0.15em] space-x-1"
      >
        {slogan}
      </motion.div>

      {/* Start Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
        whileHover={{ scale: 1.05, backgroundColor: "#c53030", borderColor: "#c53030" }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="px-8 py-3 md:px-12 md:py-4 border border-[#f5f0e8]/30 bg-transparent text-[#f5f0e8] font-serif text-lg md:text-xl tracking-widest hover:bg-[#c53030] hover:border-[#c53030] transition-colors duration-300 rounded-sm"
      >
        踏入乱世，寻找吾道
      </motion.button>
      {/* Designer Credit (Vertical Signature Style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute left-4 bottom-12 md:left-8 md:bottom-16 flex flex-col items-center gap-4 py-4 border-l border-paper-white/10"
        style={{ writingMode: 'vertical-rl' }}
      >
        <a
          href="https://github.com/huaruic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.4em] font-serif text-paper-white/30 hover:text-zhu-red transition-colors duration-300 flex items-center gap-2 uppercase"
        >
          Designed by <span className="font-bold tracking-normal">Ernest</span>
        </a>
      </motion.div>
    </div>
  );
};
