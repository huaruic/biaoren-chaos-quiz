import React from 'react';
import { motion } from 'motion/react';
import { Question } from '../data/questions';

interface QuestionCardProps {
  question: Question;
  onAnswer: (optionId: string) => void;
  progress: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, progress }) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full max-w-2xl mx-auto p-6 md:p-8 bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#f5f0e8]/10 rounded-lg shadow-2xl"
    >
      {/* Progress Bar */}
      <div className="w-full h-1 bg-[#f5f0e8]/10 mb-8 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#c53030]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Chapter Title */}
      <div className="text-center mb-6">
        <h3 className="text-[#e8e0d0]/60 text-sm tracking-[0.2em] uppercase mb-2 font-serif">
          {question.chapter} · {question.title}
        </h3>
        <div className="w-8 h-[1px] bg-[#c53030] mx-auto opacity-50" />
      </div>

      {/* Scene Description */}
      <div className="mb-8 text-center space-y-4">
        <p className="text-[#e8e0d0]/80 italic text-sm md:text-base font-serif">
          {question.scene}
        </p>
        <p className="text-[#f5f0e8] text-lg md:text-xl leading-relaxed font-serif">
          {question.narration}
        </p>
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl text-[#c53030] font-calligraphy text-center mb-8 tracking-wide">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.id)}
            className="w-full text-left p-4 md:p-6 border border-paper-white/10 bg-paper-white/5 hover:bg-zhu-red/10 hover:border-zhu-red/30 transition-all duration-300 group relative overflow-hidden rounded-sm"
            style={{
              animation: 'wordReveal 0.8s ease-out forwards',
              animationDelay: `${0.5 + index * 0.2}s`,
              opacity: 0,
            }}
          >
            {/* Hover highlight line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-zhu-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            <span className="text-lg md:text-xl font-serif text-paper-dark group-hover:text-paper-white transition-colors duration-300">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};
