import { useState } from "react";
import HomeScreen from "@/components/HomeScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";
import AllPersonasScreen from "@/components/AllPersonasScreen";
import { calculatePersona } from "@/data/quizData";
import type { AnimalPersona } from "@/data/quizData";

type Screen = 'home' | 'quiz' | 'result' | 'allPersonas';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [quizResult, setQuizResult] = useState<{
    persona: AnimalPersona;
    totalScore: number;
  } | null>(null);

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (answers: number[]) => {
    const result = calculatePersona(answers);
    setQuizResult(result);
    setCurrentScreen('result');
  };

  const handleRestart = () => {
    setQuizResult(null);
    setCurrentScreen('home');
  };

  const handleViewAllPersonas = () => {
    setCurrentScreen('allPersonas');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  const handleBackToResult = () => {
    setCurrentScreen('result');
  };

  return (
    <>
      {currentScreen === 'home' && (
        <HomeScreen onStart={handleStartQuiz} />
      )}
      
      {currentScreen === 'quiz' && (
        <QuizScreen 
          onComplete={handleQuizComplete}
          onBack={handleBackToHome}
        />
      )}
      
      {currentScreen === 'result' && quizResult && (
        <ResultScreen 
          persona={quizResult.persona}
          totalScore={quizResult.totalScore}
          onRestart={handleRestart}
          onViewAll={handleViewAllPersonas}
        />
      )}
      
      {currentScreen === 'allPersonas' && (
        <AllPersonasScreen 
          onBack={quizResult ? handleBackToResult : handleBackToHome}
        />
      )}
    </>
  );
};

export default Index;
