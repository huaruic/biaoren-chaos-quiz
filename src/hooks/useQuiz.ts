import { useState, useCallback } from 'react';
import { questions } from '../data/questions';
import { results, ResultArchetype } from '../data/results';

export type QuizState = 'landing' | 'quiz' | 'loading' | 'result';

export interface QuizHook {
  currentState: QuizState;
  currentQuestionIndex: number;
  answers: string[];
  result: ResultArchetype | null;
  startQuiz: () => void;
  answerQuestion: (optionId: string) => void;
  restartQuiz: () => void;
  progress: number;
}

export function useQuiz(): QuizHook {
  const [currentState, setCurrentState] = useState<QuizState>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<ResultArchetype | null>(null);

  const startQuiz = useCallback(() => {
    setCurrentState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  }, []);

  const calculateResult = useCallback((finalAnswers: string[]) => {
    const scores: Record<string, number> = {
      "知世郎": 0,
      "刀马": 0,
      "阿育娅": 0,
      "谛听/老莫": 0,
      "燕子娘": 0,
      "玉面鬼": 0
    };

    // Calculate scores
    finalAnswers.forEach((optionId, index) => {
      const question = questions[index];
      const option = question.options.find(o => o.id === optionId);
      if (option) {
        Object.entries(option.scores).forEach(([role, score]) => {
          scores[role] = (scores[role] || 0) + score;
        });
      }
    });

    // Find highest score
    let maxScore = -1;
    let topRoles: string[] = [];

    Object.entries(scores).forEach(([role, score]) => {
      if (score > maxScore) {
        maxScore = score;
        topRoles = [role];
      } else if (score === maxScore) {
        topRoles.push(role);
      }
    });

    // Tie-breaking logic: prioritize later questions
    let finalRole = topRoles[0];
    if (topRoles.length > 1) {
      // Iterate backwards through questions to find tie-breaker
      for (let i = finalAnswers.length - 1; i >= 0; i--) {
        const optionId = finalAnswers[i];
        const question = questions[i];
        const option = question.options.find(o => o.id === optionId);

        // Check if this option gave points to any of the tied roles
        const tiedRoleInQuestion = topRoles.find(role => option?.scores[role]);

        if (tiedRoleInQuestion) {
          finalRole = tiedRoleInQuestion;
          break;
        }
      }
    }

    return results[finalRole];
  }, []);

  const answerQuestion = useCallback((optionId: string) => {
    const newAnswers = [...answers, optionId];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      // Move to next question with a slight delay for animation if needed, 
      // but here we just update state immediately and let UI handle transitions
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 300); // Small delay for selection feedback
    } else {
      // Quiz finished
      setCurrentState('loading');
      const calculatedResult = calculateResult(newAnswers);
      setResult(calculatedResult);

      setTimeout(() => {
        setCurrentState('result');
      }, 3000);
    }
  }, [answers, currentQuestionIndex, calculateResult]);

  const restartQuiz = useCallback(() => {
    setCurrentState('landing');
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setResult(null);
  }, []);

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return {
    currentState,
    currentQuestionIndex,
    answers,
    result,
    startQuiz,
    answerQuestion,
    restartQuiz,
    progress
  };
}
