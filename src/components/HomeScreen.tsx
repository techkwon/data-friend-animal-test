import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Users, Award, TrendingUp } from "lucide-react";

interface HomeScreenProps {
  onStart: () => void;
}

const HomeScreen = ({ onStart }: HomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-soft py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 shadow-glow">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            동물과 함께 하는
            <br />
            <span className="text-primary">데이터 보안 습관 테스트</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            교사를 위한 재미있는 보안 성향 진단 퀴즈
            <br />
            나만의 동물 페르소나를 발견하고 보안 습관을 점검해보세요!
          </p>
        </div>

        {/* 특징 카드들 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-quiz-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-quiz-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">12가지 질문</h3>
              <p className="text-sm text-muted-foreground">실제 교육 현장의 상황을 반영한 질문들</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">10가지 동물</h3>
              <p className="text-sm text-muted-foreground">귀여운 동물 페르소나로 결과 확인</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-quiz-info/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-quiz-info" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">실시간 통계</h3>
              <p className="text-sm text-muted-foreground">나와 같은 유형의 비율 확인</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-quiz-cute/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-quiz-cute" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">맞춤 조언</h3>
              <p className="text-sm text-muted-foreground">개인화된 보안 팁과 개선 방안</p>
            </CardContent>
          </Card>
        </div>

        {/* 시작 버튼 */}
        <div className="text-center animate-slide-up">
          <Button 
            onClick={onStart}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            🎯 테스트 시작하기
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            약 5분이 소요됩니다
          </p>
        </div>

        {/* 설명 섹션 */}
        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            이런 분들에게 추천해요! 🎯
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">👩‍🏫</div>
              <h3 className="font-semibold text-foreground mb-2">초·중·고 교사</h3>
              <p className="text-sm text-muted-foreground">학생 개인정보를 다루는 모든 교육자</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold text-foreground mb-2">보안 인식 점검</h3>
              <p className="text-sm text-muted-foreground">나의 데이터 보안 습관을 객관적으로 확인</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="font-semibold text-foreground mb-2">보안 역량 향상</h3>
              <p className="text-sm text-muted-foreground">재미있게 배우는 실용적인 보안 팁</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;