// 퀴즈 질문 및 채점 시스템
import desertFoxImg from '@/assets/desert-fox.jpg';
import elephantImg from '@/assets/elephant.jpg';
import squirrelImg from '@/assets/squirrel.jpg';
import owlImg from '@/assets/owl.jpg';
import rabbitImg from '@/assets/rabbit.jpg';
import bearImg from '@/assets/bear.jpg';
import catImg from '@/assets/cat.jpg';
import turtleImg from '@/assets/turtle.jpg';
import dogImg from '@/assets/dog.jpg';
import pandaImg from '@/assets/panda.jpg';

export interface QuizOption {
  text: string;
  score: number;
  weights: Record<string, number>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export interface AnimalPersona {
  key: string;
  name: string;
  summary: string;
  image: string;
  tendency: string;
  strengths: string;
  tips: string;
  fantasticDuo: {
    animal: string;
    reason: string;
  };
  nightmareDuo: {
    animal: string;
    reason: string;
  };
}

// 퀴즈 질문 데이터
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "새로운 교육용 앱을 사용하기 전에 어떻게 하시나요?",
    options: [
      {
        text: "바로 사용해본다. 시간이 중요하니까!",
        score: 1,
        weights: { panda: 3, dog: 2, cat: 1 }
      },
      {
        text: "간단히 개인정보처리방침만 확인한다",
        score: 2,
        weights: { bear: 2, squirrel: 2, turtle: 1 }
      },
      {
        text: "개인정보처리방침과 이용약관을 꼼꼼히 읽어본다",
        score: 3,
        weights: { desertFox: 3, owl: 2, elephant: 2 }
      },
      {
        text: "동료들에게 먼저 물어보고 검토 후 사용한다",
        score: 4,
        weights: { rabbit: 3, elephant: 2, owl: 1 }
      }
    ]
  },
  {
    id: 2,
    question: "학교에서 사용하는 기기의 비밀번호는 어떻게 설정하시나요?",
    options: [
      {
        text: "123456 같은 간단한 번호로 설정",
        score: 1,
        weights: { panda: 3, dog: 2 }
      },
      {
        text: "생년월일이나 전화번호 등 기억하기 쉬운 개인정보",
        score: 2,
        weights: { cat: 2, turtle: 1, bear: 1 }
      },
      {
        text: "영문+숫자 조합으로 8자리 이상",
        score: 3,
        weights: { squirrel: 2, bear: 2, dog: 1 }
      },
      {
        text: "영문+숫자+특수문자 조합으로 복잡하게 설정",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 2, rabbit: 1 }
      }
    ]
  },
  {
    id: 3,
    question: "학생 정보가 담긴 USB를 분실했을 때 어떻게 대응하시나요?",
    options: [
      {
        text: "아마 집 어딘가에 있을 것이다. 며칠 더 찾아본다",
        score: 1,
        weights: { panda: 3, cat: 2 }
      },
      {
        text: "동료 교사들에게 물어보고 하루 정도 더 찾아본다",
        score: 2,
        weights: { dog: 2, turtle: 2, bear: 1 }
      },
      {
        text: "바로 학교 관리자에게 보고한다",
        score: 3,
        weights: { squirrel: 2, elephant: 2, rabbit: 1 }
      },
      {
        text: "즉시 학교와 교육청에 보고하고 필요시 경찰신고도 고려한다",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 1 }
      }
    ]
  },
  {
    id: 4,
    question: "공용 Wi-Fi를 사용할 때의 습관은?",
    options: [
      {
        text: "별 생각 없이 자동 연결된 Wi-Fi 사용",
        score: 1,
        weights: { panda: 3, dog: 2 }
      },
      {
        text: "카페나 도서관 등 믿을만한 곳의 Wi-Fi만 사용",
        score: 2,
        weights: { cat: 2, turtle: 2 }
      },
      {
        text: "공용 Wi-Fi 사용시 중요한 작업은 피한다",
        score: 3,
        weights: { bear: 2, squirrel: 2, rabbit: 1 }
      },
      {
        text: "개인 핫스팟을 사용하거나 VPN을 통해서만 접속",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 1 }
      }
    ]
  },
  {
    id: 5,
    question: "이메일로 '긴급: 학생 성적 확인 요청' 같은 메일이 왔을 때?",
    options: [
      {
        text: "긴급하다니까 바로 링크를 클릭해서 확인한다",
        score: 1,
        weights: { panda: 3, dog: 2 }
      },
      {
        text: "보내는 사람을 확인하고 아는 사람이면 링크를 클릭한다",
        score: 2,
        weights: { cat: 2, turtle: 1 }
      },
      {
        text: "이상하다 싶어서 동료에게 물어본다",
        score: 3,
        weights: { bear: 2, rabbit: 2, squirrel: 1 }
      },
      {
        text: "피싱메일 같아서 절대 클릭하지 않고 삭제한다",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 2 }
      }
    ]
  },
  {
    id: 6,
    question: "학급 관리 프로그램에 로그인할 때?",
    options: [
      {
        text: "편의를 위해 '로그인 상태 유지'에 항상 체크",
        score: 1,
        weights: { panda: 2, dog: 2, cat: 1 }
      },
      {
        text: "가끔 체크하고 가끔 해제한다",
        score: 2,
        weights: { turtle: 2, bear: 1 }
      },
      {
        text: "개인 기기에서만 '로그인 상태 유지' 사용",
        score: 3,
        weights: { squirrel: 2, bear: 2, rabbit: 1 }
      },
      {
        text: "보안을 위해 절대 체크하지 않는다",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 2 }
      }
    ]
  },
  {
    id: 7,
    question: "컴퓨터나 스마트폰의 보안 업데이트는?",
    options: [
      {
        text: "귀찮아서 몇 달째 미루고 있다",
        score: 1,
        weights: { panda: 3, cat: 2 }
      },
      {
        text: "한 달에 한 번 정도 확인해서 업데이트",
        score: 2,
        weights: { dog: 2, turtle: 2 }
      },
      {
        text: "업데이트 알림이 뜨면 바로 설치",
        score: 3,
        weights: { bear: 2, squirrel: 2, rabbit: 1 }
      },
      {
        text: "자동 업데이트로 설정해서 항상 최신 상태 유지",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 1 }
      }
    ]
  },
  {
    id: 8,
    question: "학생들과 소통할 때 사용하는 메신저나 SNS는?",
    options: [
      {
        text: "학생들이 쓰는 SNS에서 자유롭게 소통",
        score: 1,
        weights: { panda: 2, dog: 2, cat: 1 }
      },
      {
        text: "인기 있는 메신저를 사용하되 개인 계정으로",
        score: 2,
        weights: { turtle: 2, bear: 1 }
      },
      {
        text: "학교에서 지정한 공식 플랫폼만 사용",
        score: 3,
        weights: { rabbit: 2, squirrel: 2, elephant: 1 }
      },
      {
        text: "학교 계정으로만 소통하고 개인 정보는 철저히 분리",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 2 }
      }
    ]
  },
  {
    id: 9,
    question: "중요한 학급 자료를 백업하는 방법은?",
    options: [
      {
        text: "백업? 필요하면 그때 다시 만들면 되지",
        score: 1,
        weights: { panda: 3, cat: 2 }
      },
      {
        text: "가끔 생각날 때 USB에 복사해둔다",
        score: 2,
        weights: { dog: 2, turtle: 1 }
      },
      {
        text: "정기적으로 클라우드나 외장하드에 백업",
        score: 3,
        weights: { bear: 2, squirrel: 2, rabbit: 1 }
      },
      {
        text: "자동 백업 설정하고 여러 곳에 분산 저장",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 2 }
      }
    ]
  },
  {
    id: 10,
    question: "동료 교사가 컴퓨터를 빌려달라고 할 때?",
    options: [
      {
        text: "로그인된 상태 그대로 빌려준다",
        score: 1,
        weights: { panda: 2, dog: 3 }
      },
      {
        text: "중요한 파일만 숨기고 빌려준다",
        score: 2,
        weights: { cat: 2, turtle: 1 }
      },
      {
        text: "로그아웃 후 게스트 계정으로 사용하게 한다",
        score: 3,
        weights: { bear: 2, squirrel: 1, rabbit: 2 }
      },
      {
        text: "미안하지만 개인 기기는 빌려줄 수 없다고 한다",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 1 }
      }
    ]
  },
  {
    id: 11,
    question: "출장이나 연수 중 호텔에서 업무를 볼 때?",
    options: [
      {
        text: "호텔 Wi-Fi로 평소처럼 모든 업무를 본다",
        score: 1,
        weights: { panda: 3, dog: 2 }
      },
      {
        text: "간단한 업무만 하고 중요한 건 학교에서 한다",
        score: 2,
        weights: { cat: 2, turtle: 2 }
      },
      {
        text: "개인 핫스팟을 사용해서 업무를 본다",
        score: 3,
        weights: { bear: 2, squirrel: 2, rabbit: 1 }
      },
      {
        text: "개인정보 관련 업무는 절대 외부에서 하지 않는다",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 2 }
      }
    ]
  },
  {
    id: 12,
    question: "퇴근할 때 사무실 컴퓨터는?",
    options: [
      {
        text: "모니터만 끄고 컴퓨터는 켜둔 채로 퇴근",
        score: 1,
        weights: { panda: 3, cat: 2 }
      },
      {
        text: "절전모드로 설정하고 퇴근",
        score: 2,
        weights: { dog: 2, turtle: 2 }
      },
      {
        text: "로그아웃 후 컴퓨터 종료",
        score: 3,
        weights: { bear: 2, squirrel: 2, rabbit: 1 }
      },
      {
        text: "로그아웃, 파일 정리, 컴퓨터 종료 후 스크린 잠금까지 확인",
        score: 4,
        weights: { desertFox: 3, owl: 2, elephant: 2 }
      }
    ]
  }
];

// 동물 페르소나 상세 정보
export const animalPersonas: Record<string, AnimalPersona> = {
  desertFox: {
    key: 'desertFox',
    name: '신중한 사막여우',
    summary: '돌다리도 두들겨보는 데이터 보안의 모범생',
    image: desertFoxImg,
    tendency: '당신은 데이터 보안에 있어서 매우 신중하고 체계적인 접근을 하는 타입입니다. 새로운 서비스를 사용하기 전에는 반드시 이용약관과 개인정보처리방침을 꼼꼼히 확인하고, 보안 위험이 있는 상황에서는 철저히 대비책을 마련합니다. 학생들의 개인정보를 다루는 교사로서의 책임감이 매우 강합니다.',
    strengths: '• 철저한 사전 검토로 보안 사고 예방\n• 체계적인 백업과 업데이트 관리\n• 개인정보 보호에 대한 높은 의식\n• 동료들에게 보안 인식 확산 역할',
    tips: '• 가끔은 과도한 신중함이 업무 효율성을 떨어뜨릴 수 있어요\n• 신뢰할 만한 서비스는 적절히 활용해보세요\n• 보안과 편의성의 균형을 찾아보세요\n• 동료들에게 보안 지식을 나누어주세요',
    fantasticDuo: {
      animal: '호기심 많은 다람쥐',
      reason: '신중함과 민첩함이 만나 완벽한 보안 체계를 구축할 수 있어요'
    },
    nightmareDuo: {
      animal: '자유로운 판다',
      reason: '너무 다른 보안 의식 수준으로 스트레스를 받을 수 있어요'
    }
  },
  elephant: {
    key: 'elephant',
    name: '지혜로운 코끼리',
    summary: '경험과 지혜로 안전을 지키는 든든한 수호자',
    image: elephantImg,
    tendency: '당신은 오랜 경험을 바탕으로 데이터 보안의 중요성을 잘 알고 있는 타입입니다. 새로운 것보다는 검증된 방법을 선호하며, 문제가 생겼을 때는 차분하게 적절한 절차를 따릅니다. 동료들이 보안 관련 조언을 구할 때 신뢰할 만한 멘토 역할을 합니다.',
    strengths: '• 검증된 보안 절차에 대한 깊은 이해\n• 차분하고 신중한 문제 해결 능력\n• 동료들에게 신뢰받는 조언자 역할\n• 장기적 관점에서의 보안 계획 수립',
    tips: '• 새로운 보안 기술이나 방법도 관심을 가져보세요\n• 빠르게 변화하는 디지털 환경에 적응해보세요\n• 젊은 동료들의 새로운 아이디어도 들어보세요\n• 경험을 체계적으로 정리해서 공유해보세요',
    fantasticDuo: {
      animal: '신중한 사막여우',
      reason: '서로의 신중함이 시너지를 내어 최고의 보안 팀을 만들어요'
    },
    nightmareDuo: {
      animal: '자유로운 판다',
      reason: '너무 느긋한 보안 의식에 답답함을 느낄 수 있어요'
    }
  },
  squirrel: {
    key: 'squirrel',
    name: '호기심 많은 다람쥐',
    summary: '빠르고 민첩하게 보안을 챙기는 얼리어답터',
    image: squirrelImg,
    tendency: '당신은 새로운 기술에 관심이 많고 보안 업데이트나 새로운 보안 도구를 빠르게 받아들이는 타입입니다. 문제가 생겼을 때는 재빠르게 대응하며, 효율적인 보안 솔루션을 찾아내는 능력이 뛰어납니다. 디지털 네이티브로서 최신 보안 트렌드를 잘 파악합니다.',
    strengths: '• 최신 보안 기술과 트렌드에 민감\n• 빠른 학습능력과 적응력\n• 효율적인 보안 솔루션 발굴\n• 문제 상황에서의 신속한 대응',
    tips: '• 가끔은 충분한 검토 없이 성급하게 결정할 수 있어요\n• 새로운 것만큼 기본적인 보안 수칙도 중요해요\n• 동료들이 따라오기 어려울 수 있으니 속도 조절을 해보세요\n• 보안 지식을 체계적으로 정리해보세요',
    fantasticDuo: {
      animal: '신중한 사막여우',
      reason: '민첩함과 신중함이 균형을 이루어 완벽한 보안을 만들어요'
    },
    nightmareDuo: {
      animal: '느긋한 거북이',
      reason: '너무 다른 업무 속도로 서로 답답함을 느낄 수 있어요'
    }
  },
  owl: {
    key: 'owl',
    name: '현명한 부엉이',
    summary: '밤낮없이 깨어있는 데이터 보안의 파수꾼',
    image: owlImg,
    tendency: '당신은 데이터 보안에 대해 깊이 있게 이해하고 있으며, 항상 주변을 관찰하고 위험 요소를 미리 파악하는 타입입니다. 보안 정책이나 절차에 대한 이해도가 높고, 복잡한 보안 상황에서도 명확한 판단을 내릴 수 있습니다. 야간이나 주말에도 보안을 놓치지 않는 철저함을 보입니다.',
    strengths: '• 보안 위험에 대한 예리한 통찰력\n• 복잡한 보안 정책의 정확한 이해\n• 24시간 보안 의식 유지\n• 체계적이고 논리적인 접근 방식',
    tips: '• 너무 완벽을 추구하다가 스트레스받지 마세요\n• 가끔은 동료들과 소통하며 보안 부담을 나누어보세요\n• 보안도 중요하지만 일과 삶의 균형도 생각해보세요\n• 지식을 독점하지 말고 동료들과 공유해보세요',
    fantasticDuo: {
      animal: '신중한 사막여우',
      reason: '서로의 깊은 보안 지식을 공유하며 시너지를 낼 수 있어요'
    },
    nightmareDuo: {
      animal: '자유로운 판다',
      reason: '너무 다른 보안 철학으로 갈등이 생길 수 있어요'
    }
  },
  rabbit: {
    key: 'rabbit',
    name: '조심스러운 토끼',
    summary: '언제나 안전을 최우선으로 생각하는 신중한 수비수',
    image: rabbitImg,
    tendency: '당신은 데이터 보안에 있어서 매우 조심스럽고 안전을 우선시하는 타입입니다. 새로운 시도보다는 검증된 방법을 선호하며, 위험할 수 있는 상황에서는 한 발 물러서서 신중하게 판단합니다. 혼자 결정하기보다는 동료들과 상의해서 안전한 선택을 하는 것을 좋아합니다.',
    strengths: '• 보수적이고 안전한 접근 방식\n• 팀워크를 중시하는 협업 정신\n• 위험 상황에서의 신중한 판단\n• 검증된 보안 절차 준수',
    tips: '• 가끔은 용기를 내어 새로운 보안 기술을 시도해보세요\n• 과도한 걱정보다는 적절한 보안 수준을 유지하세요\n• 동료에게만 의존하지 말고 스스로 판단하는 연습을 해보세요\n• 안전한 환경에서 새로운 것을 배워보세요',
    fantasticDuo: {
      animal: '든든한 곰',
      reason: '서로의 신중함과 안정감이 완벽한 보안 환경을 만들어요'
    },
    nightmareDuo: {
      animal: '호기심 많은 다람쥐',
      reason: '너무 빠른 변화에 스트레스를 받을 수 있어요'
    }
  },
  bear: {
    key: 'bear',
    name: '든든한 곰',
    summary: '믿음직스럽고 안정적인 데이터 보안의 기둥',
    image: bearImg,
    tendency: '당신은 데이터 보안에 있어서 안정적이고 꾸준한 접근을 하는 타입입니다. 극단적이지 않으면서도 필요한 보안 조치들을 착실히 실행하며, 동료들이 의지할 수 있는 든든한 존재입니다. 급작스러운 변화보다는 점진적이고 체계적인 개선을 선호합니다.',
    strengths: '• 꾸준하고 일관된 보안 습관\n• 동료들에게 신뢰받는 안정감\n• 실용적이고 현실적인 접근\n• 스트레스 상황에서도 침착함 유지',
    tips: '• 가끔은 보안 기술의 발전에 더 관심을 가져보세요\n• 새로운 위협에 대한 정보도 꾸준히 업데이트하세요\n• 너무 안주하지 말고 보안 수준을 점검해보세요\n• 동료들과 보안 경험을 더 많이 공유해보세요',
    fantasticDuo: {
      animal: '조심스러운 토끼',
      reason: '서로의 안정감과 신중함이 완벽한 조화를 이루어요'
    },
    nightmareDuo: {
      animal: '호기심 많은 다람쥐',
      reason: '너무 빠른 변화 속도에 피로감을 느낄 수 있어요'
    }
  },
  cat: {
    key: 'cat',
    name: '독립적인 고양이',
    summary: '자신만의 방식으로 보안을 관리하는 자유로운 영혼',
    image: catImg,
    tendency: '당신은 데이터 보안에 있어서 자신만의 기준과 방식을 가지고 있는 타입입니다. 남들이 하는 대로 따라하기보다는 자신에게 맞는 보안 방법을 선택하며, 필요할 때는 융통성을 발휘합니다. 기본적인 보안 의식은 있지만 상황에 따라 유연하게 적용합니다.',
    strengths: '• 개인화된 보안 전략 수립\n• 상황에 따른 유연한 적용\n• 독립적인 문제 해결 능력\n• 창의적인 보안 솔루션 발굴',
    tips: '• 너무 개인적인 기준만 고집하지 마세요\n• 표준 보안 절차의 중요성도 인식해보세요\n• 동료들과 보안 정보를 더 많이 공유해보세요\n• 정기적으로 자신의 보안 습관을 점검해보세요',
    fantasticDuo: {
      animal: '든든한 곰',
      reason: '안정감과 자유로움이 균형을 이루어 효율적인 보안을 만들어요'
    },
    nightmareDuo: {
      animal: '신중한 사막여우',
      reason: '너무 다른 보안 스타일로 서로 이해하기 어려울 수 있어요'
    }
  },
  turtle: {
    key: 'turtle',
    name: '느긋한 거북이',
    summary: '천천히 하지만 확실하게 보안을 지키는 장인',
    image: turtleImg,
    tendency: '당신은 데이터 보안에 있어서 서두르지 않고 자신의 페이스대로 꾸준히 관리하는 타입입니다. 빠른 변화에는 적응이 느리지만, 한번 습관이 되면 매우 꾸준히 유지합니다. 보안의 기본기를 중시하며, 검증된 방법을 오랫동안 사용하는 것을 선호합니다.',
    strengths: '• 꾸준하고 지속적인 보안 관리\n• 기본에 충실한 안정적 접근\n• 장기적 관점에서의 보안 유지\n• 검증된 방법에 대한 신뢰',
    tips: '• 빠르게 변화하는 보안 위협에 더 관심을 가져보세요\n• 새로운 보안 기술을 배우는 시간을 늘려보세요\n• 동료들과 보안 정보를 더 빨리 공유해보세요\n• 때로는 신속한 대응이 필요한 상황도 있어요',
    fantasticDuo: {
      animal: '든든한 곰',
      reason: '서로의 꾸준함과 안정감이 완벽한 보안 파트너십을 만들어요'
    },
    nightmareDuo: {
      animal: '호기심 많은 다람쥐',
      reason: '너무 빠른 변화 속도를 따라가기 힘들 수 있어요'
    }
  },
  dog: {
    key: 'dog',
    name: '충성스러운 개',
    summary: '동료들과 함께 보안을 지키는 팀플레이어',
    image: dogImg,
    tendency: '당신은 데이터 보안에 있어서 동료들과의 협력을 중시하고 팀 전체의 보안을 생각하는 타입입니다. 혼자보다는 함께 보안 문제를 해결하는 것을 선호하며, 동료들의 도움 요청에 적극적으로 응답합니다. 조직의 보안 정책을 잘 따르고 팀워크를 통해 보안을 강화합니다.',
    strengths: '• 뛰어난 팀워크와 협력 정신\n• 동료들과의 보안 정보 공유\n• 조직 정책에 대한 높은 순응도\n• 긍정적이고 적극적인 자세',
    tips: '• 가끔은 스스로 독립적으로 판단하는 연습을 해보세요\n• 동료에게만 의존하지 말고 개인 보안 역량도 키워보세요\n• 비판적 사고로 보안 정책을 검토해보세요\n• 새로운 보안 아이디어를 제안해보세요',
    fantasticDuo: {
      animal: '현명한 부엉이',
      reason: '팀워크와 전문성이 만나 최고의 보안 팀을 만들어요'
    },
    nightmareDuo: {
      animal: '독립적인 고양이',
      reason: '너무 다른 협업 스타일로 갈등이 생길 수 있어요'
    }
  },
  panda: {
    key: 'panda',
    name: '자유로운 판다',
    summary: '느긋하고 편안한 마음으로 보안을 대하는 낙천주의자',
    image: pandaImg,
    tendency: '당신은 데이터 보안에 있어서 너무 걱정하지 않고 느긋하게 접근하는 타입입니다. 복잡한 보안 절차보다는 간단하고 편한 방법을 선호하며, 보안 문제가 생겨도 크게 스트레스받지 않습니다. 기본적인 보안 의식은 있지만 일상의 편의성을 더 중시합니다.',
    strengths: '• 스트레스 없는 편안한 접근\n• 복잡하지 않은 실용적 방법 선호\n• 긍정적이고 낙천적인 마인드\n• 과도한 보안 스트레스 없음',
    tips: '• 기본적인 보안 수칙은 꼭 지켜주세요\n• 가끔은 보안 업데이트나 점검을 해보세요\n• 동료들의 보안 조언에 더 귀 기울여보세요\n• 편의성과 보안 사이의 균형을 찾아보세요',
    fantasticDuo: {
      animal: '충성스러운 개',
      reason: '편안함과 협력 정신이 만나 즐거운 보안 환경을 만들어요'
    },
    nightmareDuo: {
      animal: '신중한 사막여우',
      reason: '너무 다른 보안 의식 수준으로 갈등이 생길 수 있어요'
    }
  }
};

// 채점 매트릭스 - 각 동물별 가중치 총합으로 결과 결정
export const SCORING_MATRIX = {
  priorities: ['desertFox', 'owl', 'elephant', 'squirrel', 'rabbit', 'bear', 'cat', 'turtle', 'dog', 'panda']
};

// 총점과 가중치를 계산해서 최종 페르소나를 결정하는 함수
export function calculatePersona(answers: number[]): { persona: AnimalPersona; totalScore: number } {
  let totalScore = 0;
  const weights: Record<string, number> = {};
  
  // 모든 동물의 가중치를 0으로 초기화
  SCORING_MATRIX.priorities.forEach(animal => {
    weights[animal] = 0;
  });
  
  // 각 답변에 대해 점수와 가중치 계산
  answers.forEach((answerIndex, questionIndex) => {
    const question = quizQuestions[questionIndex];
    const selectedOption = question.options[answerIndex];
    
    totalScore += selectedOption.score;
    
    // 가중치 추가
    Object.entries(selectedOption.weights).forEach(([animal, weight]) => {
      weights[animal] += weight;
    });
  });
  
  // 가중치가 가장 높은 동물 찾기 (동점시 우선순위에 따라 결정)
  let maxWeight = -1;
  let selectedAnimal = 'desertFox'; // 기본값
  
  SCORING_MATRIX.priorities.forEach(animal => {
    if (weights[animal] > maxWeight) {
      maxWeight = weights[animal];
      selectedAnimal = animal;
    }
  });
  
  return {
    persona: animalPersonas[selectedAnimal],
    totalScore
  };
}