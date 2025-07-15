import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { animalPersonas } from "@/data/quizData";

interface AllPersonasScreenProps {
  onBack: () => void;
}

const AllPersonasScreen = ({ onBack }: AllPersonasScreenProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

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
              10가지 데이터 보안 유형을 모두 살펴보세요
            </p>
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
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {persona.summary}
                </p>
                
                {/* 간단한 특성 표시 */}
                <div className="mt-4 space-y-2">
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

                <div className="mt-4 pt-4 border-t border-border">
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

        {filteredPersonas.length === 0 && (
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
          <p className="text-muted-foreground">
            각 페르소나를 클릭하면 상세 정보를 확인할 수 있어요! 🎯
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllPersonasScreen;