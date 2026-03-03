/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from 'motion/react';
import { InkBackground } from './components/InkBackground';
import { LandingPage } from './components/LandingPage';
import { LoadingPage } from './components/LoadingPage';
import { QuestionCard } from './components/QuestionCard';
import { ResultPage } from './components/ResultPage';
import { questions } from './data/questions';
import { useQuiz } from './hooks/useQuiz';

export default function App() {
  const {
    currentState,
    currentQuestionIndex,
    startQuiz,
    answerQuestion,
    restartQuiz,
    progress,
    result
  } = useQuiz();

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f5f0e8] font-serif overflow-hidden">
      <InkBackground />

      <AnimatePresence mode="wait">
        {currentState === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10"
          >
            <LandingPage onStart={startQuiz} />
          </motion.div>
        )}

        {currentState === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 overflow-y-auto"
          >
            <div className="flex min-h-full items-center justify-center p-4">
              <QuestionCard
                question={questions[currentQuestionIndex]}
                onAnswer={answerQuestion}
                progress={progress}
              />
            </div>
          </motion.div>
        )}

        {currentState === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10"
          >
            <LoadingPage />
          </motion.div>
        )}

        {currentState === 'result' && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 overflow-y-auto"
          >
            <ResultPage result={result} onRestart={restartQuiz} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
