import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { animalPersonas } from "@/data/quizData";
import { supabase } from "@/integrations/supabase/client";

interface AllPersonasScreenProps {
  onBack: () => void;
}

const AllPersonasScreen = ({ onBack }: AllPersonasScreenProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [statistics, setStatistics] = useState<Record<string, { count: number; percentage: number }>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        // 전체 결과 수 조회
        const { count: totalCount } = await supabase
          .from('results')
          .select('*', { count: 'exact', head: true });

        if (!totalCount) {
          setLoading(false);
          return;
        }

        // 각 동물별 통계 조회
        const stats: Record<string, { count: number; percentage: number }> = {};
        
        for (const personaKey of Object.keys(animalPersonas)) {
          const { count } = await supabase
            .from('results')
            .select('*', { count: 'exact', head: true })
            .eq('persona_key', personaKey);

          const personaCount = count || 0;
          const percentage = totalCount > 0 ? (personaCount / totalCount) * 100 : 0;
          
          stats[personaKey] = {
            count: personaCount,
            percentage: Math.round(percentage * 10) / 10 // 소수점 첫째 자리까지
          };
        }

        setStatistics(stats);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  const filteredPersonas = Object.values(animalPersonas).filter(persona =>
    persona.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    persona.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-soft py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <Button
            variant="outline"
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            돌아가기
          </Button>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              모든 동물 페르소나 🐾
            </h1>
            <p className="text-muted-foreground mt-2">
              10가지 데이터 보안 유형과 실시간 통계를 살펴보세요
            </p>
            {loading && (
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>통계 데이터를 불러오는 중...</span>
              </div>
            )}
          </div>
        </div>

        {/* 검색 */}
        <div className="relative mb-8 animate-slide-up">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="동물 이름이나 특징으로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-lg"
          />
        </div>

        {/* 선택된 페르소나 상세 정보 */}
        {selectedPersona && (
          <Card className="border-0 shadow-card mb-8 animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-soft border-4 border-white flex-shrink-0">
                  <img 
                    src={animalPersonas[selectedPersona].image} 
                    alt={animalPersonas[selectedPersona].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {animalPersonas[selectedPersona].name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    {animalPersonas[selectedPersona].summary}
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">특징</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {animalPersonas[selectedPersona].tendency}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedPersona(null)}
                  className="text-sm"
                >
                  닫기
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 페르소나 그리드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPersonas.map((persona, index) => (
            <Card 
              key={persona.key}
              className={`border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-up ${
                selectedPersona === persona.key ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPersona(selectedPersona === persona.key ? null : persona.key)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden shadow-soft border-4 border-white mb-4">
                  <img 
                    src={persona.image} 
                    alt={persona.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  {persona.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {persona.summary}
                </p>

                {/* 통계 정보 표시 */}
                <div className="bg-gradient-warm/10 rounded-lg p-3 mb-4">
                  {loading ? (
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>통계 로딩중...</span>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {statistics[persona.key]?.percentage || 0}%
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {statistics[persona.key]?.count || 0}명이 선택
                      </div>
                    </div>
                  )}
                </div>
                
                {/* 간단한 특성 표시 */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">환상의 짝꿍:</span>
                    <span className="text-quiz-success font-medium">
                      {persona.fantasticDuo.animal}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">환장의 짝꿍:</span>
                    <span className="text-destructive font-medium">
                      {persona.nightmareDuo.animal}
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-primary hover:bg-primary/10"
                  >
                    {selectedPersona === persona.key ? '상세 정보 닫기' : '상세 정보 보기'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPersonas.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              검색 결과가 없습니다
            </h3>
            <p className="text-muted-foreground">
              다른 키워드로 검색해보세요
            </p>
          </div>
        )}

        {/* 하단 안내 */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-2">
            각 페르소나를 클릭하면 상세 정보를 확인할 수 있어요! 🎯
          </p>
          {!loading && (
            <p className="text-xs text-muted-foreground">
              실시간 통계는 모든 사용자의 테스트 결과를 기반으로 계산됩니다
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllPersonasScreen;