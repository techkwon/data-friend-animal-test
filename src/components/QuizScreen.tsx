import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { quizQuestions } from "@/data/quizData";

interface QuizScreenProps {
  onComplete: (answers: number[]) => void;
  onBack: () => void;
}

const QuizScreen = ({ onComplete, onBack }: QuizScreenProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
    setAnswers(newAnswers);

    if (currentQuestion === quizQuestions.length - 1) {
      // 마지막 질문 완료
      onComplete(newAnswers);
    } else {
      // 다음 질문으로
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(newAnswers[currentQuestion + 1] ?? null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] ?? null);
    } else {
      onBack();
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-soft py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* 진행 상황 */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              질문 {currentQuestion + 1} / {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% 완료
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* 질문 카드 */}
        <Card className="border-0 shadow-card mb-8 animate-slide-up">
          <CardContent className="p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-6 sm:mb-8 leading-relaxed whitespace-pre-line">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full p-4 sm:p-6 h-auto text-left justify-start transition-all duration-200 ${
                    selectedOption === index
                      ? 'border-primary bg-primary/5 shadow-soft'
                      : 'border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 mr-3 sm:mr-4 mt-1 flex-shrink-0 transition-colors ${
                      selectedOption === index 
                        ? 'border-primary bg-primary' 
                        : 'border-muted-foreground'
                    }`}>
                      {selectedOption === index && (
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full m-0.5 sm:m-1" />
                      )}
                    </div>
                    <span className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                      {option.text}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 네비게이션 버튼 */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 w-full sm:w-auto order-2 sm:order-1"
          >
            <ArrowLeft className="w-4 h-4" />
            {currentQuestion === 0 ? '처음으로' : '이전'}
          </Button>

          <Button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-primary hover:opacity-90 text-white disabled:opacity-50 w-full sm:w-auto order-1 sm:order-2"
          >
            {currentQuestion === quizQuestions.length - 1 ? '결과 보기' : '다음'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* 재미있는 격려 메시지 */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            {currentQuestion < 4 && "좋은 시작이에요! 📚"}
            {currentQuestion >= 4 && currentQuestion < 8 && "절반을 넘었어요! 🎯"}
            {currentQuestion >= 8 && "거의 다 왔어요! 🏃‍♀️"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;