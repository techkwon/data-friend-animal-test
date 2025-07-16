교사용 데이터 보안 습관 진단 테스트

데모 링크 : https://preview--data-friend-animal-test.lovable.app/

📝 프로젝트 소개
이 프로젝트는 교사들을 위한 데이터 보안 습관 진단 테스트 웹 애플리케이션입니다.

사용자는 12가지 퀴즈를 통해 자신의 데이터 보안 성향을 진단받고, 10가지 동물 페르소나 중 하나를 결과로 받게 됩니다. 이를 통해 재미있게 자신의 보안 습관을 점검하고 개선 방향에 대한 팁을 얻을 수 있습니다.

<br/>

✨ 주요 기능
보안 습관 진단 퀴즈: 실제 교육 현장에서 마주할 수 있는 12가지 상황에 대한 질문을 통해 사용자의 보안 성향을 분석합니다.

동물 페르소나 결과: 분석 결과에 따라 10가지 동물 페르소나 중 하나를 부여받고, 해당 유형의 상세한 설명(성향, 강점, 개선 팁)을 확인할 수 있습니다.

환상의/환장의 짝꿍: 나의 페르소나와 가장 잘 맞는 유형과 잘 맞지 않는 유형을 보여주어 협업 시 참고할 수 있습니다.

실시간 통계: 다른 사용자들은 어떤 페르소나 유형이 많은지 실시간 통계를 확인할 수 있습니다.

모든 페르소나 보기: 10가지 모든 동물 페르소나의 특징과 통계를 둘러볼 수 있습니다.

<br/>

🛠️ 기술 스택
Framework: React, Vite

Language: TypeScript

UI Components: shadcn/ui, Radix UI

Styling: Tailwind CSS

Routing: React Router DOM

Data Fetching: TanStack Query (React Query)

Backend & DB: Supabase

<br/>

🚀 시작하기
1. 프로젝트 클론
git clone https://github.com/techkwon/data-friend-animal-test-b9812bb8caec8eeb307218eb87a44064ace4c503.git
cd data-friend-animal-test

2. 의존성 설치
npm install

3. Supabase 설정
Supabase에 가입하고 새로운 프로젝트를 생성합니다.

프로젝트의 SQL Editor에서 supabase/migrations/ 폴더에 있는 SQL 쿼리를 실행하여 results 테이블을 생성합니다.

src/integrations/supabase/client.ts 파일을 열고, Supabase 프로젝트의 URL과 anon key를 입력합니다.

Project Settings > API 메뉴에서 확인할 수 있습니다.

// src/integrations/supabase/client.ts

const SUPABASE_URL = "YOUR_SUPABASE_URL"; // 여기에 Supabase URL을 입력하세요.
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_ANON_KEY"; // 여기에 Supabase anon key를 입력하세요.

4. 개발 서버 실행
npm run dev

이제 http://localhost:8080 (혹은 터미널에 표시된 다른 포트)에서 개발 서버가 실행됩니다.

<br/>

📂 프로젝트 구조
/
├── public/                  # 정적 에셋 (이미지, 폰트 등)
├── src/
│   ├── assets/              # 이미지 에셋
│   ├── components/
│   │   ├── ui/              # shadcn/ui 컴포넌트
│   │   ├── AllPersonasScreen.tsx # 모든 페르소나 화면
│   │   ├── HomeScreen.tsx      # 시작 화면
│   │   ├── QuizScreen.tsx      # 퀴즈 진행 화면
│   │   └── ResultScreen.tsx    # 결과 화면
│   ├── data/
│   │   └── quizData.ts      # 퀴즈 질문 및 페르소나 데이터
│   ├── hooks/                 # 커스텀 훅 (use-toast 등)
│   ├── integrations/
│   │   └── supabase/        # Supabase 클라이언트 및 타입
│   ├── lib/
│   │   └── utils.ts         # 유틸리티 함수 (cn)
│   ├── pages/
│   │   ├── Index.tsx        # 메인 페이지 라우팅 및 상태 관리
│   │   └── NotFound.tsx     # 404 페이지
│   ├── App.tsx                # 애플리케이션 최상위 컴포넌트
│   └── main.tsx               # 애플리케이션 진입점
├── supabase/
│   └── migrations/          # Supabase 데이터베이스 마이그레이션 파일
├── tailwind.config.ts       # Tailwind CSS 설정
└── vite.config.ts           # Vite 설정

---
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c4718645-789e-40f5-9b6d-4105b38c0063

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c4718645-789e-40f5-9b6d-4105b38c0063) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c4718645-789e-40f5-9b6d-4105b38c0063) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
