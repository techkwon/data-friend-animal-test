import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Share2, RotateCcw, Grid3X3, Loader2 } from "lucide-react";
import { AnimalPersona, animalPersonas } from "@/data/quizData";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ResultScreenProps {
  persona: AnimalPersona;
  totalScore: number;
  onRestart: () => void;
  onViewAll: () => void;
}

const ResultScreen = ({ persona, totalScore, onRestart, onViewAll }: ResultScreenProps) => {
  const [stats, setStats] = useState<{ percentage: number; total: number } | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const saveResultAndGetStats = async () => {
      try {
        // 결과 저장
        await supabase
          .from('results')
          .insert({ persona_key: persona.key });

        // 통계 조회
        const [totalResponse, personaResponse] = await Promise.all([
          supabase.from('results').select('*', { count: 'exact', head: true }),
          supabase.from('results').select('*', { count: 'exact', head: true }).eq('persona_key', persona.key)
        ]);

        if (totalResponse.count && personaResponse.count) {
          const percentage = (personaResponse.count / totalResponse.count) * 100;
          setStats({
            percentage: Math.round(percentage * 10) / 10, // 소수점 첫째 자리까지
            total: totalResponse.count
          });
        }
      } catch (error) {
        console.error('Error saving result or fetching stats:', error);
        toast({
          title: "오류 발생",
          description: "결과 저장 중 오류가 발생했습니다.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    saveResultAndGetStats();
  }, [persona.key, toast]);

  const handleShare = async () => {
    const shareText = `🎯 데이터 보안 습관 테스트 결과!\n\n🦊 나는 "${persona.name}"!\n${persona.summary}${stats ? `\n\n📊 같은 유형: 전체의 ${stats.percentage}%` : ''}\n\n🔗 나도 테스트 해보기: ${window.location.origin}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: '데이터 보안 습관 테스트 결과',
          text: shareText
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        toast({
          title: "✅ 복사 완료!",
          description: "결과가 클립보드에 복사되었습니다."
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft py-8 px-4">
      {/* 파티클 애니메이션 배경 */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-bounce-gentle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 결과 헤더 */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="relative mb-6">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-glow border-4 border-white animate-pulse-glow">
              <img 
                src={persona.image} 
                alt={persona.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            당신은 <span className="text-primary">"{persona.name}"</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            {persona.summary}
          </p>

          {/* 통계 정보 */}
          {loading ? (
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>통계 정보를 불러오는 중...</span>
            </div>
          ) : stats ? (
            <div className="bg-gradient-warm/10 rounded-xl p-4 inline-block animate-slide-up">
              <p className="text-lg font-semibold text-foreground">
                당신과 같은 <span className="text-primary">'{persona.name}'</span> 유형은{' '}
                <span className="text-accent font-bold text-xl">{stats.percentage}%</span>입니다!
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                총 {stats.total}명 중 {Math.round((stats.percentage / 100) * stats.total)}명
              </p>
            </div>
          ) : null}
        </div>

        {/* 상세 분석 탭 */}
        <Card className="border-0 shadow-card mb-8 animate-slide-up">
          <CardContent className="p-8">
            <Tabs defaultValue="tendency" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="tendency" className="text-sm md:text-base">나의 성향</TabsTrigger>
                <TabsTrigger value="strengths" className="text-sm md:text-base">강점</TabsTrigger>
                <TabsTrigger value="tips" className="text-sm md:text-base">주의할 점 & 팁</TabsTrigger>
              </TabsList>

              <TabsContent value="tendency" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    🎯 나의 보안 성향
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                    {persona.tendency}
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="strengths" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    💪 나의 강점
                  </h3>
                  <div className="bg-quiz-success/10 rounded-lg p-6">
                    <p className="text-foreground leading-relaxed text-lg whitespace-pre-line">
                      {persona.strengths}
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="mt-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    💡 주의할 점 & 개선 팁
                  </h3>
                  <div className="bg-quiz-warning/10 rounded-lg p-6">
                    <p className="text-foreground leading-relaxed text-lg whitespace-pre-line">
                      {persona.tips}
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* 관계 분석 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-card animate-slide-up">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                💚 환상의 짝꿍
              </h3>
              <div className="bg-quiz-success/10 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={Object.values(animalPersonas).find(p => p.name === persona.fantasticDuo.animal)?.image} 
                      alt={persona.fantasticDuo.animal}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-quiz-success">
                    {persona.fantasticDuo.animal}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {persona.fantasticDuo.reason}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card animate-slide-up">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                ❤️‍🔥 환장의 짝꿍
              </h3>
              <div className="bg-destructive/10 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={Object.values(animalPersonas).find(p => p.name === persona.nightmareDuo.animal)?.image} 
                      alt={persona.nightmareDuo.animal}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-destructive">
                    {persona.nightmareDuo.animal}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {persona.nightmareDuo.reason}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button
            onClick={handleShare}
            className="bg-gradient-warm hover:opacity-90 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Share2 className="w-5 h-5 mr-2" />
            결과 공유하기
          </Button>

          <Button
            variant="outline"
            onClick={onRestart}
            className="px-8 py-3 text-lg font-semibold rounded-xl border-2 hover:bg-primary/5"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            테스트 다시하기
          </Button>

          <Button
            variant="outline"
            onClick={onViewAll}
            className="px-8 py-3 text-lg font-semibold rounded-xl border-2 hover:bg-primary/5"
          >
            <Grid3X3 className="w-5 h-5 mr-2" />
            모든 유형 살펴보기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;