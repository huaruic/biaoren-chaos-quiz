import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingPage: React.FC = () => {
  const phrases = [
    "观星辰之变，察山河之势……",
    "以墨研道，以笔问心……",
    "你的侠客之道，正在浮现……"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(prev => {
        if (prev < phrases.length - 1) return prev + 1;
        return prev;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-[#f5f0e8] p-6 text-center z-10 relative">
      <div className="w-64 h-1 bg-[#1a1a1a] rounded-full overflow-hidden mb-12 relative">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#c53030]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4.5, ease: "linear" }}
        />
        {/* Ink brush tip effect */}
        <motion.div 
            className="absolute top-[-4px] h-3 w-3 rounded-full bg-[#c53030] blur-[2px]"
            initial={{ left: "0%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 4.5, ease: "linear" }}
        />
      </div>

      <div className="h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentPhraseIndex}
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl font-serif text-[#e8e0d0] tracking-widest"
          >
            {phrases[currentPhraseIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
