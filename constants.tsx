import React from 'react';
import { StatData, QuestItem, SkillNode, PartyMember } from './types';
import { 
  Database, 
  Terminal, 
  LineChart,
  Brain,
  Smartphone
} from 'lucide-react';

export const STAT_DATA: StatData[] = [
  { subject: '0→1 Execution', A: 100, fullMark: 100 },
  { subject: 'AI-Native', A: 95, fullMark: 100 },
  { subject: 'Go-To-Market', A: 90, fullMark: 100 },
  { subject: 'Data Driven', A: 85, fullMark: 100 },
  { subject: 'Fast Learning', A: 95, fullMark: 100 },
  { subject: 'Startup Exp', A: 90, fullMark: 100 },
];

export const QUEST_LOG: QuestItem[] = [
  {
    id: 'q1',
    year: '2021.07 - 2023.05',
    title: '스퀘어랩 (Squarelab)',
    role: '콘텐츠팀 / 콘텐츠 매니저',
    type: 'main',
    description: [
      "에어프레미아 항공사 브랜디드 콘텐츠 기획: CVR 31%, 오가닉 조회수 9,800건",
      "신세계면세점 파트너십 체결 및 장기 제휴 2.5년 관리: 전체 콘텐츠의 40% 핸들링",
      "브랜드 커뮤니케이션 강화 및 콘텐 수익화 모델 검증"
    ]
  },
  {
    id: 'q2',
    year: '2023.06 - 2025.07',
    title: '타이드스퀘어 (Tourvis Select)',
    role: '신사업 TF팀 / 콘텐츠 기획자',
    type: 'main',
    description: [
      "럭셔리 호텔 예약 서비스 런칭: 일평균 활성 유저(DAU) 181% 증가, 검색량 106% 상승",
      "SNS 채널 운영 및 A/B 테스트: 도달 1.8만, CPA 효율 384% 개선",
      "데이터 기반 의사결정: Looker Studio 대시보드 구축, 제작 리소스 62% 절감(AI 도입)",
      "Python & BigQuery 활용 데이터 파이프라인 이해 및 구현"
    ]
  },
  {
    id: 'q3',
    year: '2025.07 - Current',
    title: 'Class Change: Product Builder',
    role: '1인 빌더',
    type: 'side',
    description: [
      "개발 경험 없이 1개월 만에 앱 출시: 기획/디자인/개발/배포 완료",
      "AI-Native 워크플로우 적용으로 개발 속도 약 2-3배 가속화"
    ]
  }
];

export const SKILL_TREE: SkillNode[] = [
  {
    category: 'Product & Design',
    skills: ['Figma', 'Framer', 'Headless CMS', 'UI/UX Planning'],
    icon: Smartphone
  },
  {
    category: 'AI & Engineering',
    skills: ['Cursor/Claude', 'Flutter', 'OpenAI API', 'Supabase', 'Vercel'],
    icon: Brain
  },
  {
    category: 'Data & Analytics',
    skills: ['Looker Studio', 'GA4', 'Amplitude', 'SQLD', 'ADsP'],
    icon: Database
  },
  {
    category: 'Growth & Marketing',
    skills: ['Meta (Instagram/Threads)', 'Naver SS/SA', 'SEO', 'Copywriting'],
    icon: LineChart
  }
];

// Highlight style helper
const HL = ({ children }: { children: React.ReactNode }) => (
  <span className="text-cyan-300 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
    {children}
  </span>
);

export const PARTY_REVIEWS: PartyMember[] = [
  {
    role: 'Team Lead',
    name: 'Leader',
    quote: (
      <>
        업무와 서비스에 대한 <HL>애정과 책임감</HL>이 강합니다. 높은 퀄리티를 내고자 최선을 다하므로 결과물에 대한 신뢰가 높습니다. <HL>데이터에 대한 관심</HL>이 높아 이를 업무에 적용해 빠른 의사결정을 돕고 팀 효율을 높여 줍니다. <HL>주체적으로 개선점을 찾아내</HL> 다양한 아이디어를 제안하는 적극적인 팀원입니다.
      </>
    )
  },
  {
    role: 'Content Manager',
    name: 'Peer',
    quote: (
      <>
        과제가 주어지면 <HL>끝까지 파고들고 공부하는 모습</HL>이 대단합니다. 새로운 기획 및 업무에도 호기심이 많으며 <HL>일 욕심</HL>도 많습니다. 업무 변화, 툴 변화 등 다양한 상황에 맞추어 업무를 수행합니다. 같은 팀으로서 <HL>좋은 자극을 주는 동료</HL>입니다.
      </>
    )
  },
  {
    role: 'Designer',
    name: 'Peer',
    quote: (
      <>
        <HL>작업자의 아이디어를 적극 수용</HL>하며 긍정적으로 해석합니다. 디자인에도 관심이 많은 편이며 <HL>커뮤니케이션이 빠르게</HL> 이루어집니다. 기획 배경, 목적, 요청 사항, 진행 일정 등을 담은 기획안을 전달해 <HL>커뮤니케이션 오류를 방지</HL>해 줍니다.
      </>
    )
  },
  {
    role: 'Developer',
    name: 'Peer',
    quote: (
      <>
        막히면 <HL>주도적으로 해결 방법</HL>을 찾습니다. <HL>학습 속도</HL>가 빠르고, 마음먹은 건 바로 실행에 옮기는 <HL>실행력</HL>이 강점입니다. 개발자와의 소통에서도 <HL>논리적이고 명확하게 요구사항을 구체적으로</HL> 전달합니다.
      </>
    )
  }
];

export const LINKS = {
  email: 'hanabikwon@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gyeongran-kwon/',
  blog: 'https://give-it-a-shot.site/tag/note/',
  appDownload: 'https://hanabikwon.github.io/recipesoup_app_download/',
  appRetro: 'https://give-it-a-shot.site/tag/note/'
};