import React from 'react';
import { motion } from 'motion/react';

interface SilhouetteProps {
  color: string;
  className?: string;
}

// 通用的水墨笔触滤镜定义
export const InkFilters = () => (
  <svg width="0" height="0" className="absolute">
    <defs>
      <filter id="ink-spread">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
        <feGaussianBlur stdDeviation="0.5" />
      </filter>
      <filter id="ink-blot">
        <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence" />
        <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="10" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

// 知世郎：面具 + 火焰/烟雾
export const ZhishilangSilhouette: React.FC<SilhouetteProps> = ({ color, className }) => (
  <svg viewBox="0 0 200 300" className={className} style={{ color }}>
    <g filter="url(#ink-spread)">
      {/* 面具轮廓 */}
      <path d="M70,80 Q100,60 130,80 Q150,120 130,160 Q100,180 70,160 Q50,120 70,80 Z" fill="currentColor" opacity="0.8" />
      {/* 眼睛空洞 */}
      <path d="M85,110 Q95,105 105,110" stroke="#e8e0d0" strokeWidth="3" fill="none" />
      <path d="M115,110 Q125,105 135,110" stroke="#e8e0d0" strokeWidth="3" fill="none" />
      {/* 缭绕的烟雾/火焰 */}
      <path d="M100,180 Q80,220 60,200 T40,240" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
      <path d="M100,180 Q120,220 140,200 T160,240" stroke="currentColor" strokeWidth="10" fill="none" opacity="0.7" />
      <path d="M100,50 Q120,20 100,0" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.4" />
    </g>
  </svg>
);

// 刀马：斗笠 + 刀
export const DaomaSilhouette: React.FC<SilhouetteProps> = ({ color, className }) => (
  <svg viewBox="0 0 200 300" className={className} style={{ color }}>
    <g filter="url(#ink-spread)">
      {/* 斗笠 */}
      <path d="M40,100 Q100,60 160,100 L100,110 Z" fill="currentColor" />
      {/* 披风/身躯 */}
      <path d="M70,110 Q60,180 40,240 L160,240 Q140,180 130,110" fill="currentColor" opacity="0.8" />
      {/* 横刀 */}
      <path d="M20,160 L180,140" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      {/* 飘带 */}
      <path d="M160,100 Q180,120 190,150" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.6" />
    </g>
  </svg>
);

// 阿育娅：弓箭 + 辫子
export const AyuyaSilhouette: React.FC<SilhouetteProps> = ({ color, className }) => (
  <svg viewBox="0 0 200 300" className={className} style={{ color }}>
    <g filter="url(#ink-spread)">
      {/* 头部与发辫 */}
      <circle cx="100" cy="90" r="30" fill="currentColor" opacity="0.9" />
      <path d="M120,80 Q160,100 150,160" stroke="currentColor" strokeWidth="8" fill="none" />
      {/* 弓 */}
      <path d="M60,60 Q20,150 60,240" stroke="currentColor" strokeWidth="5" fill="none" />
      {/* 身躯 */}
      <path d="M90,120 Q110,180 100,250" stroke="currentColor" strokeWidth="15" fill="none" opacity="0.7" />
      {/* 箭矢 */}
      <path d="M60,150 L160,130" stroke="currentColor" strokeWidth="2" />
    </g>
  </svg>
);

// 谛听/老莫：听瓮 + 眼睛
export const DitingSilhouette: React.FC<SilhouetteProps> = ({ color, className }) => (
  <svg viewBox="0 0 200 300" className={className} style={{ color }}>
    <g filter="url(#ink-spread)">
      {/* 听瓮/罐子 */}
      <path d="M60,180 Q50,220 70,260 L130,260 Q150,220 140,180 Q100,160 60,180 Z" fill="currentColor" opacity="0.8" />
      {/* 蹲伏的身影 */}
      <path d="M80,100 Q120,100 120,140 L110,180 L90,180 L80,140 Z" fill="currentColor" />
      {/* 抽象的耳朵/声波 */}
      <path d="M40,120 Q20,140 40,160" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M30,110 Q0,140 30,170" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
      <path d="M160,120 Q180,140 160,160" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
    </g>
  </svg>
);

// 燕子娘：双刀 + 凌厉线条
export const YanziniangSilhouette: React.FC<SilhouetteProps> = ({ color, className }) => (
  <svg viewBox="0 0 200 300" className={className} style={{ color }}>
    <g filter="url(#ink-spread)">
      {/* 身姿 */}
      <path d="M100,80 L80,140 L120,140 Z" fill="currentColor" />
      <path d="M80,140 Q60,200 70,260" stroke="currentColor" strokeWidth="12" fill="none" opacity="0.8" />
      <path d="M120,140 Q140,200 130,260" stroke="currentColor" strokeWidth="12" fill="none" opacity="0.8" />
      {/* 双刀交叉 */}
      <path d="M40,100 L160,220" stroke="currentColor" strokeWidth="4" />
      <path d="M160,100 L40,220" stroke="currentColor" strokeWidth="4" />
    </g>
  </svg>
);

// 玉面鬼：折扇 + 棋子
export const YumianguiSilhouette: React.FC<SilhouetteProps> = ({ color, className }) => (
  <svg viewBox="0 0 200 300" className={className} style={{ color }}>
    <g filter="url(#ink-spread)">
      {/* 坐姿/长袍 */}
      <path d="M70,120 Q100,100 130,120 L150,260 L50,260 Z" fill="currentColor" opacity="0.8" />
      {/* 折扇 */}
      <path d="M130,120 L180,80 L190,110 Z" fill="currentColor" />
      {/* 棋盘网格背景 (淡) */}
      <path d="M20,200 L180,200" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M20,230 L180,230" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M50,180 L50,250" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M150,180 L150,250" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </g>
  </svg>
);

export const getSilhouette = (id: string, color: string, className?: string) => {
  switch (id) {
    case 'zhishilang': return <ZhishilangSilhouette color={color} className={className} />;
    case 'daoma': return <DaomaSilhouette color={color} className={className} />;
    case 'ayuya': return <AyuyaSilhouette color={color} className={className} />;
    case 'diting': return <DitingSilhouette color={color} className={className} />;
    case 'yanziniang': return <YanziniangSilhouette color={color} className={className} />;
    case 'yumiangui': return <YumianguiSilhouette color={color} className={className} />;
    default: return <DaomaSilhouette color={color} className={className} />;
  }
};
