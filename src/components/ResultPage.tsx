import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ResultArchetype } from '../data/results';
import { Download, RotateCcw } from 'lucide-react';
import { getSilhouette, InkFilters } from './InkSilhouettes';
import { toPng } from 'html-to-image';

interface ResultPageProps {
  result: ResultArchetype;
  onRestart: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({ result, onRestart }) => {
  const posterRef = useRef<HTMLDivElement>(null);

  const [saving, setSaving] = useState(false);

  const handleSavePoster = async () => {
    if (!posterRef.current || saving) return;
    setSaving(true);
    try {
      const dataUrl = await toPng(posterRef.current, {
        pixelRatio: 3,
        backgroundColor: '#e8e0d0',
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = dataUrl;
      link.download = `镖人乱世行_${result.title}.png`;
      document.body.appendChild(link);
      link.click();

      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } catch (err) {
      console.error('导出失败:', err);
      alert('导出失败，请截图保存。');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-paper-white py-8 px-4 md:py-12 z-10 relative overflow-y-auto">
      <InkFilters />

      {/* Main Poster Card (Shareable Area) */}
      <motion.div
        ref={posterRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[380px] bg-[#e8e0d0] text-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border-[6px] border-[#0a0a0a] flex flex-col aspect-[3/4.5] group"
        style={{
          backgroundColor: '#e8e0d0',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E"), linear-gradient(to bottom, #e8e0d0 0%, #dcd2bc 100%)`
        }}
      >
        {/* Subtle Background Writing / Watermark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none flex items-center justify-center">
          <span className="text-[25rem] font-calligraphy rotate-[-15deg]">{result.title.slice(-1)}</span>
        </div>

        {/* Top Decoration */}
        <div className="p-4 flex justify-between items-start z-10">
          <div className="flex flex-col border-l-2 border-[#0a0a0a40] pl-3">
            <span className="text-[10px] font-serif tracking-[0.4em] text-[#0a0a0a99] leading-tight" style={{ color: '#0a0a0a99' }}>大业十三年</span>
            <span className="text-[9px] font-serif tracking-[0.2em] text-[#0a0a0a66] uppercase" style={{ color: '#0a0a0a66' }}>Chaos Walk · Result</span>
          </div>

          {/* Animated Seal */}
          <div
            className="w-10 h-10 border-2 border-[#c53030] rounded-sm flex items-center justify-center text-[#c53030] font-calligraphy text-lg opacity-0"
            style={{
              borderColor: '#c53030',
              color: '#c53030',
              animation: 'sealStamp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
              animationDelay: '1.2s'
            }}
          >
            <div className="border border-[#c5303099] w-[85%] h-[85%] flex items-center justify-center" style={{ borderColor: '#c5303099' }}>镖</div>
          </div>
        </div>

        {/* Middle Area: Silhouette & Identity */}
        <div className="flex-1 relative flex flex-col items-center justify-center pt-8">
          {/* Silhouette with Brush Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="w-56 h-56 relative z-10 mix-blend-multiply"
          >
            {getSilhouette(result.id, result.colors.primary, "w-full h-full")}
          </motion.div>

          {/* Identity Title - Artistic Placement */}
          <div className="z-20 -mt-10 text-center">
            <p className="text-[10px] tracking-[0.8em] text-ink-black/50 font-serif mb-1 ml-[0.8em]">你的侠客身份</p>
            <h1
              className="text-5xl font-calligraphy tracking-[0.1em] drop-shadow-sm"
              style={{ color: result.colors.primary }}
            >
              {result.title}
            </h1>
          </div>
        </div>

        {/* Bottom Section: Vertical Poem & Analysis Snapshot */}
        <div className="p-6 pt-0 z-10 flex flex-row items-end justify-between min-h-[140px]">
          {/* Analysis Snapshot */}
          <div className="w-1/2 border-t border-[#0a0a0a1a] pt-4" style={{ borderColor: '#0a0a0a1a' }}>
            <p className="text-[11px] font-serif leading-relaxed text-[#0a0a0a] italic line-clamp-4" style={{ color: '#0a0a0acc' }}>
              {result.analysis}
            </p>
          </div>

          {/* Vertical Poem */}
          <div className="flex flex-row-reverse gap-3" style={{ writingMode: 'vertical-rl' }}>
            {result.poem.slice(0, 2).map((line, i) => (
              <p key={i} className="text-sm font-serif tracking-[0.2em] text-[#0a0a0a] font-bold leading-loose border-l border-[#0a0a0a1a] pl-1" style={{ color: '#0a0a0a', borderColor: '#0a0a0a1a' }}>
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* share footer */}
        <div className="bg-[#0a0a0a] text-[#f5f0e866] text-[8px] py-1 px-4 flex justify-between tracking-tighter" style={{ backgroundColor: '#0a0a0a', color: '#f5f0e866' }}>
          <span>#电影镖人性格测试</span>
          <span>BIAOREN x CHAOS WALK</span>
        </div>
      </motion.div>

      {/* Narrative Section - Below the Poster (Scrollable) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="w-full max-w-sm mt-12 space-y-8"
      >
        <div className="border-l-4 border-zhu-red pl-6 py-2">
          <h3 className="text-xs font-bold tracking-[0.3em] text-paper-dark mb-3">性格判词</h3>
          <p className="text-lg md:text-xl text-paper-white leading-relaxed font-serif italic">
            {(result.analysis || "").split('').map((char, i) => (
              <span
                key={i}
                className="inline-block"
                style={{ animation: 'wordReveal 0.5s forwards', animationDelay: `${1.8 + i * 0.03}s`, opacity: 0 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 border border-white/10 p-4 rounded-sm">
            <h4 className="text-[10px] text-paper-dark/50 uppercase tracking-widest mb-1">因果羁绊</h4>
            <p className="text-sm font-serif text-paper-white">{result.bond.split('。')[0]}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-sm">
            <h4 className="text-[10px] text-paper-dark/50 uppercase tracking-widest mb-1">古之道</h4>
            <p className="text-sm font-serif text-paper-white">{result.history.split('——')[0]}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <button
            onClick={handleSavePoster}
            disabled={saving}
            className="w-full flex items-center justify-center px-6 py-4 bg-zhu-red text-paper-white font-serif tracking-widest hover:bg-zhu-red-hover transition-all shadow-xl group rounded-sm disabled:opacity-50 disabled:cursor-wait"
          >
            <Download className="w-5 h-5 mr-3 group-hover:translate-y-1 transition-transform" />
            {saving ? '生成中...' : '保存海报 · 见行知人'}
          </button>

          <button
            onClick={onRestart}
            className="w-full flex items-center justify-center px-6 py-3 border border-paper-white/20 bg-white/5 text-paper-white font-serif tracking-widest hover:bg-paper-white hover:text-ink-black transition-all rounded-sm"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            重寻侠道
          </button>
        </div>

        {/* Designer Credit Footer */}
        <footer className="mt-16 pb-8 text-center border-t border-paper-white/5 pt-8 w-full">
          <a
            href="https://github.com/huaruic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.3em] font-serif text-paper-white/20 hover:text-zhu-red transition-colors duration-300 uppercase"
          >
            Designed by <span className="font-bold tracking-normal">Ernest</span>
          </a>
        </footer>
      </motion.div>
    </div>
  );
};
