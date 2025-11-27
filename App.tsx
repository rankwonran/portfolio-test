import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, User, Shield, Zap, Map, Trophy, Layers, Brain, Users, Mail, Rocket, Smartphone, PenTool, Link as LinkIcon, Camera, Refrigerator, CheckCircle2, Database, Heart, MessageSquareQuote, Target, Code2, ExternalLink, Settings } from 'lucide-react';
import StarField from './components/StarField';
import { Stage } from './types';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer
} from 'recharts';
import { STAT_DATA, QUEST_LOG, SKILL_TREE, PARTY_REVIEWS, LINKS } from './constants';

// --- Sub-components ---

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-slate-900/80 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:border-cyan-500/30 transition-colors duration-300 ${className}`}>
    {children}
  </div>
);

// Unified Badge style (Slate/Cyan)
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="px-3 py-1 rounded bg-slate-800 border border-slate-600 text-slate-300 text-xs font-bold tracking-wider">
      {children}
    </span>
  );
};

export default function App() {
  const [currentStage, setCurrentStage] = useState<Stage>(Stage.INTRO);
  const [direction, setDirection] = useState(0);

  const nextStage = () => {
    if (currentStage < Stage.CONTACT) {
      setDirection(1);
      setCurrentStage(prev => prev + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > Stage.INTRO) {
      setDirection(-1);
      setCurrentStage(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextStage();
      if (e.key === 'ArrowLeft') prevStage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStage]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const renderContent = () => {
    switch (currentStage) {
      case Stage.INTRO:
        return (
          <div className="flex flex-col items-center justify-center text-center h-full space-y-10">
            <div className="space-y-6 mt-10">
              <h2 className="text-cyan-400 font-mono text-xl tracking-[0.2em] uppercase animate-pulse">Product Builder</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Gyeongran Kwon
              </h1>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                "스타트업 마케터에서 1인 빌더로,<br/>
                <strong className="text-white">AI와 함께 0 → 1을 만들어낸 사람"</strong>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Badge>1인 앱 출시</Badge>
              <Badge>서비스 런칭 2회</Badge>
              <Badge>AI-Native</Badge>
              <Badge>스타트업 4년</Badge>
            </div>

            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStage}
              className="mt-16 px-10 py-4 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded border border-cyan-500/50 shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all animate-pulse font-mono text-lg tracking-wider"
            >
              START GAME
            </motion.button>
          </div>
        );

      case Stage.STATS:
        return (
          <div className="grid md:grid-cols-2 gap-8 items-center h-full max-w-6xl mx-auto w-full">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-cyan-400" size={32} />
                <h2 className="text-3xl font-bold">Character Stats</h2>
              </div>
              <p className="text-slate-300">
                마케팅 전략(<span className="text-slate-100 font-bold">Strategy</span>)과 엔지니어링 실행력(<span className="text-cyan-400 font-bold">Execution</span>)을 겸비한 하이브리드 클래스
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-slate-600 flex justify-between items-center group hover:bg-slate-800 transition-colors">
                  <div>
                    <h3 className="font-bold text-lg text-slate-200">0 → 1 Execution</h3>
                    <p className="text-sm text-slate-400">서비스 런칭 2회 & DAU 181% 성장</p>
                  </div>
                  <div className="text-right">
                     <div className="text-xs text-slate-500 font-mono">ACHIEVEMENT</div>
                     <div className="text-cyan-400 font-bold">App Store 1인 출시</div>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-slate-600 flex justify-between items-center group hover:bg-slate-800 transition-colors">
                  <div>
                    <h3 className="font-bold text-lg text-slate-200">AI-Native</h3>
                    <p className="text-sm text-slate-400">앱 출시 기간 1개월</p>
                  </div>
                  <div className="text-right">
                     <div className="text-xs text-slate-500 font-mono">SPEED RUN</div>
                     <div className="text-cyan-400 font-bold">평균 대비 75% 단축</div>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded border-l-4 border-slate-600 flex justify-between items-center group hover:bg-slate-800 transition-colors">
                  <div>
                    <h3 className="font-bold text-lg text-slate-200">Data Driven</h3>
                    <p className="text-sm text-slate-400">A/B 테스트로 광고 효율화</p>
                  </div>
                  <div className="text-right">
                     <div className="text-xs text-slate-500 font-mono">RESULT</div>
                     <div className="text-cyan-400 font-bold">CPC 81% 개선</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] md:h-[400px] w-full flex items-center justify-center bg-slate-900/50 rounded-full border border-slate-700/50 relative">
               <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                 <div className="w-[80%] h-[80%] border border-cyan-500 rounded-full animate-spin-slow"></div>
               </div>
               <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={STAT_DATA}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} />
                  <Radar
                    name="Stats"
                    dataKey="A"
                    stroke="#00D4FF"
                    strokeWidth={3}
                    fill="#00D4FF"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case Stage.ORIGIN:
        return (
          <div className="max-w-4xl mx-auto w-full h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Brain className="text-cyan-400" /> Origin Story
            </h2>
            
            <div className="space-y-8">
              <Card className="border-l-4 border-l-slate-600 hover:border-l-cyan-400 transition-all">
                <h3 className="text-xl font-bold mb-2">The Marketer's Dilemma</h3>
                <div className="mb-2">
                   <p className="text-slate-300 italic text-base">"내가 직접 만들 수 있다면 얼마나 좋을까?"</p>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  스타트업 마케터 4년차.<br/>
                  기획서를 쓰고 나면 개발 대기 3개월, 간단한 A/B 테스트도 2주 소요.<br/>
                  "리소스가 부족해요"라는 말 앞에서 아이디어가 멈추는 것이 늘 아쉬웠습니다.
                </p>
              </Card>

              <div className="flex justify-center">
                <div className="h-12 w-1 bg-gradient-to-b from-slate-600 to-slate-400"></div>
              </div>

              <Card className="border-l-4 border-l-slate-600 hover:border-l-cyan-400 transition-all">
                <h3 className="text-xl font-bold mb-2 text-slate-200">The Awakening</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  토이 프로젝트에 참여하고 싶었으나, 최소 셋업으로 개발자·기획자·디자이너만 찾는 상황.<br/>
                  한편 퇴근 후에는 Python과 SQL을 공부하며 실무에 적용해보기 시작했습니다.
                </p>
                <p className="text-slate-300 leading-relaxed mb-2">
                  그러다 <strong>Claude Code</strong>와 <strong>Cursor Ai</strong>를 만났습니다.
                </p>
                <div className="mb-2">
                   <p className="text-slate-300 italic text-base">"이거면 나도 만들 수 있지 않을까?"</p>
                </div>
              </Card>

              <div className="flex justify-center">
                <div className="h-12 w-1 bg-gradient-to-b from-slate-400 to-cyan-500"></div>
              </div>

              <Card className="border-l-4 border-l-cyan-500 hover:border-cyan-400 transition-all">
                 <h3 className="text-xl font-bold mb-2 text-cyan-300">Class Change</h3>
                 <p className="text-slate-300 mb-3">
                   2025년 7월 퇴사 후 실험 시작.<br/>
                   <span className="text-white font-semibold">"비개발자도 AI와 함께라면 1개월 만에 앱 런칭이 가능했다."</span>
                 </p>
                 <div className="inline-block bg-cyan-900/30 px-3 py-1 rounded text-cyan-300 text-sm font-bold border border-cyan-500/30 animate-pulse">
                   Quest Complete: Recipesoup 앱 출시 성공
                 </div>
              </Card>
            </div>
          </div>
        );

      case Stage.QUEST_LOG:
        return (
          <div className="max-w-5xl mx-auto w-full h-full flex flex-col pt-10">
             <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Map className="text-slate-400" /> Quest Log
                </h2>
                <div className="text-xs font-mono text-slate-500">CAREER TIMELINE</div>
             </div>

             <div className="relative border-l-2 border-slate-700 ml-4 space-y-12 pb-12">
                {QUEST_LOG.map((quest) => (
                  <div key={quest.id} className="relative pl-8 group">
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-all duration-300 ${quest.type === 'main' ? 'bg-cyan-900 border-cyan-500 shadow-[0_0_10px_rgba(0,212,255,0.5)] group-hover:scale-125' : 'bg-slate-900 border-slate-500'}`}></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                      <h3 className={`text-xl font-bold ${quest.type === 'main' ? 'text-white' : 'text-slate-300'}`}>{quest.title}</h3>
                      <span className="text-sm font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">{quest.year}</span>
                    </div>
                    
                    <div className="text-cyan-400 font-medium mb-2 text-sm">{quest.role}</div>
                    
                    <ul className="space-y-1">
                      {quest.description.map((desc, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2 group-hover:text-slate-300 transition-colors">
                          <span className="mt-1.5 w-1 h-1 bg-slate-600 rounded-full shrink-0 group-hover:bg-cyan-400"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
             </div>
          </div>
        );

      case Stage.BOSS_RAID_1:
        return (
          <div className="max-w-6xl mx-auto w-full h-full flex flex-col justify-center">
            <div className="mb-6">
               <div className="text-cyan-500 font-bold tracking-widest text-sm mb-2 font-mono">BOSS RAID #1</div>
               <h2 className="text-4xl font-bold text-white mb-2">Tourvis Select 런칭</h2>
               <p className="text-slate-400">첫 번째 0 → 1 경험: 신사업 TF 런칭 멤버</p>
            </div>

            {/* Changed to a strict 2-row grid for alignment */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"> 
               {/* Row 1 */}
               <Card className="md:col-span-2 flex flex-col justify-center h-full">
                   <h3 className="text-xl font-bold text-slate-200 mb-4">Mission Objective</h3>
                   <ul className="space-y-4 text-slate-300 text-lg">
                     <li className="flex items-start gap-3">
                       <CheckCircle2 size={24} className="mt-0.5 text-cyan-500 shrink-0" />
                       <span>브랜드 포지셔닝 전략 수립 및 런칭 마케팅</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <CheckCircle2 size={24} className="mt-0.5 text-cyan-500 shrink-0" />
                       <span>신규 유저 유입 및 초기 트래픽 확보</span>
                     </li>
                   </ul>
               </Card>

               <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/30 transition-all h-full">
                  <div className="relative z-10">
                     <h3 className="font-bold text-white mb-2 text-lg">Special Drop 1</h3>
                     <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                      건당 3시간 → 1시간<br/>AI 도입, 상세 페이지 제작 효율 극대화
                     </p>
                     <div className="bg-slate-900/80 p-3 rounded border border-slate-600 text-slate-300 text-xs font-mono">
                       [Skill Acquired]<br/>
                       <span className="text-cyan-400">AI Content Workflow</span>
                     </div>
                  </div>
                  <Rocket className="absolute -bottom-6 -right-6 text-slate-800 opacity-50 group-hover:text-cyan-900/20 transition-colors" size={100} />
               </div>

               {/* Row 2 */}
               <div className="bg-slate-800 p-6 rounded border border-slate-700 flex flex-col justify-center items-center text-center hover:border-cyan-500/50 transition-colors h-full">
                  <div className="text-4xl font-bold text-white mb-2">+181%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">DAU Growth</div>
               </div>

               <div className="bg-slate-800 p-6 rounded border border-slate-700 flex flex-col justify-center items-center text-center hover:border-cyan-500/50 transition-colors h-full">
                  <div className="text-4xl font-bold text-white mb-2">106%</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-bold">Search Volume</div>
               </div>

               <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/30 transition-all h-full">
                  <div className="relative z-10">
                     <h3 className="font-bold text-white mb-2 text-lg">Special Drop 2</h3>
                     <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                      Looker Studio 대시보드 구축<br/>
                      데이터 기반 의사결정 구조 마련
                     </p>
                     <div className="bg-slate-900/80 p-3 rounded border border-slate-600 text-slate-300 text-xs font-mono">
                       [Skill Acquired]<br/>
                       <span className="text-cyan-400">Automated Data Pipeline</span>
                     </div>
                  </div>
                  <Database className="absolute -bottom-6 -right-6 text-slate-800 opacity-50 group-hover:text-cyan-900/20 transition-colors" size={100} />
               </div>
            </div>
          </div>
        );

      case Stage.BOSS_RAID_2:
        return (
          <div className="max-w-6xl mx-auto w-full h-full flex flex-col pt-6 pb-6 overflow-hidden">
             {/* Header Section (Moved outside flex-row for alignment) */}
            <div className="mb-6 shrink-0">
               <div className="text-cyan-500 font-bold tracking-widest text-sm mb-2 font-mono">BOSS RAID #2</div>
               <div className="flex items-center gap-3">
                 <h2 className="text-4xl font-bold text-white mb-2">Recipesoup</h2>
                 <div className="px-2 py-0.5 bg-slate-800 border border-slate-600 rounded text-xs text-slate-400 font-mono">
                   Total Log: 192 Hours
                 </div>
               </div>
               <p className="text-lg text-slate-300 font-light leading-relaxed">
                 단순한 요리 기록 앱을 넘어,<br/>
                 <span className="text-white font-medium">'왜 만들었는지'</span>와 <span className="text-white font-medium">'그날의 감정'</span>까지 함께 남기는<br/>
                 AI 기반 감성 레시피 다이어리입니다.
               </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start h-full overflow-hidden">
               {/* Left Column: Description */}
               <div className="flex-1 space-y-8 h-full flex flex-col overflow-y-auto pr-2 custom-scrollbar">
                  
                  {/* 5 Input Methods */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-200 border-b border-slate-700 pb-2">5가지 레시피 입력 방식</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-3 bg-slate-800/60 p-3 rounded border border-slate-700/50 hover:border-slate-500 transition-colors">
                        <Zap className="text-slate-400 shrink-0" size={20} />
                        <div className="text-xs"><strong className="text-slate-200 block sm:inline">퀵레시피:</strong> 요리명만 입력하면 끝</div>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800/60 p-3 rounded border border-slate-700/50 hover:border-slate-500 transition-colors">
                        <Refrigerator className="text-slate-400 shrink-0" size={20} />
                        <div className="text-xs"><strong className="text-slate-200 block sm:inline">냉장고 털기:</strong> 남은 재료로 추천</div>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800/60 p-3 rounded border border-slate-700/50 hover:border-slate-500 transition-colors">
                        <LinkIcon className="text-slate-400 shrink-0" size={20} />
                        <div className="text-xs"><strong className="text-slate-200 block sm:inline">링크 가져오기:</strong> 블로그 레시피 요약</div>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800/60 p-3 rounded border border-slate-700/50 hover:border-slate-500 transition-colors">
                        <Camera className="text-slate-400 shrink-0" size={20} />
                        <div className="text-xs"><strong className="text-slate-200 block sm:inline">사진 분석:</strong> 완성 요리 역추적</div>
                      </div>
                      <div className="col-span-1 sm:col-span-2 flex items-center justify-center gap-3 bg-slate-800/60 p-3 rounded border border-slate-700/50 hover:border-slate-500 transition-colors">
                         <PenTool className="text-slate-400 shrink-0" size={20} />
                         <div className="text-xs"><strong className="text-slate-200">직접 작성:</strong> 나만의 비법 기록</div>
                      </div>
                    </div>
                  </div>

                   {/* User Reviews */}
                  <div>
                     <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                       <MessageSquareQuote size={16} className="text-cyan-400"/> Player Feedback (실제 사용자 후기)
                     </h3>
                     <div className="grid grid-cols-3 gap-4">
                        <div className="bg-slate-800 p-4 rounded text-xs text-slate-300 border border-slate-700/50 italic leading-relaxed">
                          "레시피 아카이빙으로도 가능한데 내 감정을 기록하는 일기의 용도로도 적절해서, 그 어떤 목적으로 써도 좋은 앱!"
                        </div>
                        <div className="bg-slate-800 p-4 rounded text-xs text-slate-300 border border-slate-700/50 italic leading-relaxed">
                          "지루한 삶 속에서 하루를 기록하는 참신한 어플... 퀘스트를 깨듯 토끼굴을 늘려나가는 재미도 좋습니다."
                        </div>
                        <div className="bg-slate-800 p-4 rounded text-xs text-slate-300 border border-slate-700/50 italic leading-relaxed">
                          "디자인도 귀엽고 예쁘고 레시피 어플 중에 가장 신박하고 좋은 것 같아요."
                        </div>
                     </div>
                  </div>

                  {/* Tactical Solution (Replaces Gamification) */}
                  <div className="bg-slate-800/40 rounded-lg p-6 border border-slate-700 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 font-mono">
                         <Shield className="text-cyan-400" size={20} />
                         TACTICAL SOLUTION
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="bg-slate-900/50 p-3 rounded border border-slate-700/50">
                            <h4 className="text-cyan-300 font-bold text-xs mb-2 flex items-center gap-1"><Code2 size={12}/> Engineering</h4>
                            <ul className="text-xs text-slate-300 space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="text-cyan-500/70 mt-0.5">▷</span>
                                <span><strong>Flutter</strong>로 iOS/Android 크로스 플랫폼 앱 개발</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-cyan-500/70 mt-0.5">▷</span>
                                <span><strong>OpenAI API</strong>를 연동하여 음식 사진 분석 및 OCR 기능 구현</span>
                              </li>
                            </ul>
                         </div>

                         <div className="bg-slate-900/50 p-3 rounded border border-slate-700/50">
                            <h4 className="text-cyan-300 font-bold text-xs mb-2 flex items-center gap-1"><Settings size={12}/> Strategy & Ops</h4>
                            <ul className="text-xs text-slate-300 space-y-2">
                              <li className="flex items-start gap-2">
                                <span className="text-cyan-500/70 mt-0.5">▷</span>
                                <span>리텐션 증대를 위한 <strong>"토끼굴"</strong> 게이미피케이션 시스템 설계</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="text-cyan-500/70 mt-0.5">▷</span>
                                <span>복잡한 앱 스토어 심사(Privacy Manifest) 해결 및 출시</span>
                              </li>
                            </ul>
                         </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-2 justify-end">
                      <a href={LINKS.appDownload} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-600 rounded text-xs text-slate-300 hover:text-white hover:border-cyan-500 transition-colors">
                        <ExternalLink size={14} /> 앱 다운로드
                      </a>
                      <a href={LINKS.appRetro} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-600 rounded text-xs text-slate-300 hover:text-white hover:border-cyan-500 transition-colors">
                        <Code2 size={14} /> 개발 회고
                      </a>
                    </div>
                  </div>
               </div>

               {/* Right Column: Screenshots */}
               <div className="w-full max-w-[220px] mx-auto flex flex-col gap-4 sticky top-0 h-full">
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-lg text-center">
                      <div className="w-16 h-16 bg-slate-800 rounded-2xl mx-auto mb-3 border border-slate-600 overflow-hidden">
                          <img 
                          src="recipesoup_icon.png" 
                          alt="Icon" 
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                          />
                      </div>
                      <div className="text-white font-bold">Recipesoup</div>
                      <div className="text-xs text-slate-500">iOS & Android</div>
                      <div className="mt-2 text-xs bg-slate-800 text-cyan-400 py-1 px-2 rounded border border-slate-600 inline-block">
                          Store 출시 완료
                      </div>
                  </div>

                  {/* Target Audience */}
                  <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 shadow-lg">
                    <h3 className="text-xs font-bold text-cyan-400 mb-2 flex items-center gap-2">
                      <Target size={14} /> Class Recommendation
                    </h3>
                    <ul className="text-xs text-slate-300 space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <span className="text-slate-500 mt-0.5">•</span> 요리할 때의 감정을 함께 기록하고 싶은 분
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-500 mt-0.5">•</span> AI 도움으로 쉽게 레시피를 정리하고 싶은 분
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-500 mt-0.5">•</span> 흩어진 레시피를 한곳에 모아두고 싶은 분
                      </li>
                    </ul>
                  </div>

                  <div className="flex-1 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl relative group">
                      <img 
                          src="recipesoup_screenshot.png" 
                          alt="Recipesoup Main" 
                          className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-800', 'text-slate-600', 'text-xs', 'p-4', 'text-center');
                          if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerText = "Screenshot 1 Placeholder (recipesoup_screenshot.png)";
                          }}
                      />
                  </div>
               </div>
            </div>
          </div>
        );

      case Stage.SKILL_TREE:
        return (
          <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-10 text-center">
              <Layers className="inline-block mr-2 text-slate-400" /> Skill Tree
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {SKILL_TREE.map((node, idx) => (
                <Card key={idx} className="hover:bg-slate-800/80 transition-all border-l-4 border-l-slate-600 hover:border-l-cyan-400 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-slate-900 text-cyan-400 border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
                      <node.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{node.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {node.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-slate-900 rounded text-sm text-slate-400 border border-slate-700 group-hover:border-cyan-500/30 group-hover:text-slate-300 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case Stage.SPECIAL_ABILITY:
        return (
          <div className="max-w-4xl mx-auto w-full h-full flex flex-col justify-center items-center text-center">
            <div className="mb-8 relative">
               <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-10 rounded-full"></div>
               <Brain size={80} className="text-cyan-400 relative z-10 animate-pulse" />
            </div>
            
            <h2 className="text-4xl font-bold mb-6 text-white">Special Ability: AI-Native</h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed">
              AI를 단순한 '도구'가 아닌 <span className="text-cyan-400 font-bold">'확장된 신체'</span>처럼 활용합니다.<br/>
              기획, 디자인, 개발, 배포까지 전 과정에서 AI와 협업하여<br/>
              <span className="text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-600">1인 팀의 한계를 돌파</span>합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center">
              <div className="bg-slate-900/60 p-6 rounded border border-slate-700 hover:border-cyan-500/30 transition-colors">
                 <h3 className="text-cyan-300 font-bold mb-2">Plan</h3>
                 <p className="text-sm text-slate-400">아키텍처 구조화<br/>UX 플로우 설계<br/>기술 문서 작성</p>
              </div>
              <div className="bg-slate-900/60 p-6 rounded border border-slate-700 hover:border-cyan-500/30 transition-colors">
                 <h3 className="text-cyan-300 font-bold mb-2">Build</h3>
                 <p className="text-sm text-slate-400">코드 생성<br/>UI 구현<br/>콘텐츠 자산 제작</p>
              </div>
              <div className="bg-slate-900/60 p-6 rounded border border-slate-700 hover:border-cyan-500/30 transition-colors">
                 <h3 className="text-cyan-300 font-bold mb-2">Research</h3>
                 <p className="text-sm text-slate-400">기술 조사<br/>스택 비교<br/>솔루션 탐색</p>
              </div>
            </div>
          </div>
        );

      case Stage.PARTY_REVIEW:
        return (
          <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-center">
             <div className="flex items-center justify-center gap-3 mb-12">
               <Users className="text-slate-400" size={32} />
               <h2 className="text-3xl font-bold">Party Members' Review</h2>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
               {PARTY_REVIEWS.map((member, idx) => (
                 <div key={idx} className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:bg-slate-800/60 transition-all hover:border-cyan-500/30">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 font-bold shadow-inner">
                         {member.name[0]}
                       </div>
                       <div>
                         <div className="text-white font-bold">{member.role}</div>
                         <div className="text-xs text-slate-500">{member.name}</div>
                       </div>
                    </div>
                    <div className="text-slate-300 text-sm italic leading-relaxed relative">
                      <span className="text-4xl text-slate-700 absolute -top-4 -left-2">"</span>
                      {member.quote}
                      <span className="text-4xl text-slate-700 absolute -bottom-4 -right-2">"</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        );

      case Stage.CONTACT:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12">
             <div className="space-y-4">
               <h2 className="text-5xl font-bold tracking-tighter text-white">
                 GAME CLEAR!
               </h2>
               <p className="text-xl text-slate-300">
                 Product Builder 권경란과 함께 <span className="text-cyan-400 font-bold">New Game</span>을 시작하시겠습니까?
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl px-6">
                <a href={`mailto:${LINKS.email}`} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group">
                  <Mail className="group-hover:text-cyan-400 transition-colors w-6 h-6 text-slate-400" />
                  <span className="font-mono text-slate-200 group-hover:text-white transition-colors">{LINKS.email}</span>
                </a>
                
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group">
                  <User className="group-hover:text-cyan-400 transition-colors w-6 h-6 text-slate-400" />
                  <span className="font-mono text-slate-200 group-hover:text-white transition-colors">LinkedIn Profile</span>
                </a>

                <a href={LINKS.appDownload} target="_blank" rel="noreferrer" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group">
                   <Smartphone className="group-hover:text-cyan-400 transition-colors w-6 h-6 text-slate-400" />
                   <span className="font-bold text-slate-200 group-hover:text-white transition-colors">앱 다운로드 (iOS/Android)</span>
                </a>

                <a href={LINKS.appRetro} target="_blank" rel="noreferrer" className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-4 group">
                   <PenTool className="group-hover:text-cyan-400 transition-colors w-6 h-6 text-slate-400" />
                   <span className="font-bold text-slate-200 group-hover:text-white transition-colors">회고 블로그 보기</span>
                </a>
             </div>
             
             <div className="text-slate-600 text-sm mt-12 font-mono">
               SYSTEM: Thank you for playing.<br/>
               CREDITS: Designed with Google AI Studio.<br/>
               © 2025 Gyeongran Kwon.
             </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="relative w-screen h-screen bg-[#0D1117] text-white overflow-hidden selection:bg-cyan-500/30">
      <StarField />
      
      {/* Progress Bar (Top) */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <motion.div 
          className="h-full bg-cyan-500 shadow-[0_0_10px_cyan]"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStage + 1) / 10) * 100}%` }}
        />
      </div>

      {/* Stage Indicator */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 font-mono text-cyan-400 bg-slate-900/80 px-4 py-2 rounded-full border border-cyan-500/30 backdrop-blur">
        <span className="text-xs text-slate-400">STAGE</span>
        <span className="text-xl font-bold">{currentStage + 1}</span>
        <span className="text-slate-600">/</span>
        <span className="text-sm text-slate-400">10</span>
      </div>

      {/* Main Content Area */}
      <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-7xl h-full flex flex-col justify-center"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-0 w-full flex justify-between px-8 md:px-20 z-40 pointer-events-none">
         <button 
           onClick={prevStage} 
           disabled={currentStage === Stage.INTRO}
           className={`pointer-events-auto p-3 rounded-full bg-slate-800/80 border border-slate-600 hover:border-cyan-400 transition-all ${currentStage === Stage.INTRO ? 'opacity-0' : 'opacity-100 hover:bg-slate-700'}`}
         >
           <ChevronLeft size={24} />
         </button>

         <button 
           onClick={nextStage} 
           disabled={currentStage === Stage.CONTACT}
           className={`pointer-events-auto p-3 rounded-full bg-slate-800/80 border border-slate-600 hover:border-cyan-400 transition-all ${currentStage === Stage.CONTACT ? 'opacity-0' : 'opacity-100 hover:bg-slate-700 animate-pulse'}`}
         >
           <ChevronRight size={24} />
         </button>
      </div>

      {/* Background Grid Decoration */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}
      ></div>
    </div>
  );
}