// Major colors (전공 컬러 코딩)
const MAJOR = {
  '컴공/SW':       { key: 'cs',     bg: '#DBEAFE', soft: '#EFF6FF', text: '#1D4ED8', ring: '#3B82F6' },
  '디자인':        { key: 'design', bg: '#FCE7F3', soft: '#FDF2F8', text: '#BE185D', ring: '#EC4899' },
  '경영/기획':     { key: 'biz',    bg: '#EDE9FE', soft: '#F5F3FF', text: '#6D28D9', ring: '#8B5CF6' },
  '미디어/홍보':   { key: 'media',  bg: '#FFEDD5', soft: '#FFF7ED', text: '#C2410C', ring: '#F97316' },
  '통계/데이터':   { key: 'data',   bg: '#CCFBF1', soft: '#F0FDFA', text: '#0F766E', ring: '#14B8A6' },
};

const majorOf = (dept) => {
  if (/디자인|산업디자인|시각/.test(dept)) return '디자인';
  if (/컴퓨터|소프트|SW/.test(dept))       return '컴공/SW';
  if (/경영|기획/.test(dept))              return '경영/기획';
  if (/미디어|커뮤니|광고|홍보/.test(dept)) return '미디어/홍보';
  if (/통계|데이터/.test(dept))            return '통계/데이터';
  return '경영/기획';
};

// 8 applicants
const APPLICANTS = [
  { id: 1, name: '최도윤', dept: '컴퓨터공학',          year: 3, school: '한양대',   skills: ['React','Spring','MySQL','Git'],         score: 91, role: '프론트엔드 개발자', intro: '풀스택 가능, 3개 사이드 프로젝트 운영', portfolio: 'github.com/dy-choi', breakdown: { role: 30, skill: 24, period: 19, interest: 13, folio: 5 }, trust: { completionRate: 98, dropoutCount: 0, awardSubmissions: [ { id:'aw1a', title:'2026 부산 준창업 경진대회 우수상', projectId:1, proofImageLabel:'상장_부산.jpg', proofLink:'https://contest.busan.kr/2026', status:'approved' }, { id:'aw1b', title:'한양 SW 해커톤 대상', projectId:1, proofImageLabel:'hanyang_hackathon.png', proofLink:'https://hackathon.hanyang.ac.kr', status:'approved' }, { id:'aw1c', title:'전국 대학생 앱 공모전 장려상', projectId:3, proofImageLabel:'app_contest.jpg', proofLink:'https://appcontest.kr', status:'pending' } ], leaderCount: 4, badges: ['완주왕','협업우수','마감준수'] } },
  { id: 2, name: '이수민', dept: '시각디자인',          year: 2, school: '홍익대',   skills: ['Figma','Adobe XD','Illustrator','Notion'], score: 87, role: '프로덕트 디자이너', intro: '브랜드·앱 인터페이스 모두 OK', portfolio: 'behance.net/sumin',    breakdown: { role: 28, skill: 22, period: 18, interest: 12, folio: 7 }, trust: { completionRate: 95, dropoutCount: 0, awardSubmissions: [ { id:'aw2a', title:'2025 대한민국 디자인 공모전 입선', projectId:5, proofImageLabel:'design_award.jpg', proofLink:'https://designaward.or.kr', status:'approved' }, { id:'aw2b', title:'홍익 시각디자인 우수작품상', projectId:5, proofImageLabel:'hongik_cert.png', proofLink:'https://hongik.ac.kr/award', status:'approved' } ], leaderCount: 1, badges: ['협업우수','창의왕','마감준수'] } },
  { id: 3, name: '박서연', dept: '경영학',              year: 3, school: '연세대',   skills: ['시장조사','PPT','Notion','Excel'],         score: 82, role: 'PM/기획자',          intro: '학생 창업동아리 부회장', portfolio: 'notion.so/parkseo',     breakdown: { role: 27, skill: 20, period: 17, interest: 13, folio: 5 }, trust: { completionRate: 92, dropoutCount: 0, awardSubmissions: [ { id:'aw3a', title:'대학생 창업 아이디어 경진대회 최우수상', projectId:2, proofImageLabel:'startup_award.jpg', proofLink:'https://startupcontest.kr', status:'approved' }, { id:'aw3b', title:'연세 비즈니스 케이스 대회 1위', projectId:5, proofImageLabel:'yonsei_case.png', proofLink:'https://yonsei.ac.kr/case', status:'approved' }, { id:'aw3c', title:'소셜벤처 공모전 우수상', projectId:4, proofImageLabel:'socialventure.jpg', proofLink:'https://socialventure.or.kr', status:'approved' } ], leaderCount: 5, badges: ['리더십','완주왕','소통왕'] } },
  { id: 4, name: '정현우', dept: '통계학',              year: 4, school: '고려대',   skills: ['R','Python','SPSS','SQL'],                 score: 79, role: '데이터 분석가',     intro: '학회 데이터 동아리 회장', portfolio: 'kaggle.com/hwjung',     breakdown: { role: 26, skill: 22, period: 16, interest: 10, folio: 5 }, trust: { completionRate: 90, dropoutCount: 1, awardSubmissions: [ { id:'aw4a', title:'전국 통계 데이터 분석 경진대회 은상', projectId:3, proofImageLabel:'stat_award.jpg', proofLink:'https://statcontest.kr', status:'approved' }, { id:'aw4b', title:'캐글 코리아 컴페티션 Top 5%', projectId:3, proofImageLabel:'kaggle_rank.png', proofLink:'https://kaggle.com/c/korea', status:'pending' } ], leaderCount: 3, badges: ['데이터장인','마감준수'] } },
  { id: 5, name: '한지우', dept: '미디어커뮤니케이션', year: 2, school: '중앙대',   skills: ['Premiere','After Effects','Photoshop'],     score: 74, role: '콘텐츠 마케터',     intro: '유튜브 영상 편집 2년차', portfolio: 'youtube.com/jiwoo',     breakdown: { role: 24, skill: 19, period: 15, interest: 11, folio: 5 }, trust: { completionRate: 88, dropoutCount: 0, awardSubmissions: [ { id:'aw5a', title:'대학생 영상 콘텐츠 공모전 입선', projectId:4, proofImageLabel:'video_award.jpg', proofLink:'https://videocontest.kr', status:'approved' } ], leaderCount: 1, badges: ['협업우수','콘텐츠왕'] } },
  { id: 6, name: '강민서', dept: '데이터사이언스',      year: 2, school: '성균관대', skills: ['Python','SQL','Tableau'],                  score: 71, role: '데이터 분석가',     intro: 'Tableau 자격증 보유',   portfolio: 'github.com/mskang',     breakdown: { role: 22, skill: 18, period: 16, interest: 11, folio: 4 }, trust: { completionRate: 85, dropoutCount: 0, awardSubmissions: [ { id:'aw6a', title:'교내 데이터 시각화 경진대회 우수상', projectId:1, proofImageLabel:'tableau_award.jpg', proofLink:'https://skku.edu/dataviz', status:'pending' } ], leaderCount: 0, badges: ['성실참여','마감준수'] } },
  { id: 7, name: '윤하늘', dept: '산업디자인',          year: 3, school: '국민대',   skills: ['UX 리서치','프로토타이핑','Figma'],         score: 68, role: 'UX 디자이너',       intro: 'IDEO 인턴 경험',       portfolio: 'haneul.design',         breakdown: { role: 23, skill: 17, period: 14, interest: 10, folio: 4 }, trust: { completionRate: 80, dropoutCount: 1, awardSubmissions: [ { id:'aw7a', title:'UX 디자인 챌린지 본선 진출', projectId:6, proofImageLabel:'ux_challenge.jpg', proofLink:'https://uxchallenge.kr', status:'approved' }, { id:'aw7b', title:'IDEO 디자인 공모전 수상', projectId:6, proofImageLabel:'ideo_cert.jpg', proofLink:'https://ideo.com/award', status:'rejected' } ], leaderCount: 1, badges: ['창의왕','협업우수'] } },
  { id: 8, name: '임채원', dept: '광고홍보',            year: 3, school: '동국대',   skills: ['콘텐츠 기획','카피','SNS 운영'],            score: 63, role: '콘텐츠 마케터',     intro: '인스타 9만 팔로워 운영', portfolio: 'instagram.com/im',      breakdown: { role: 20, skill: 16, period: 14, interest: 9,  folio: 4 }, trust: { completionRate: 67, dropoutCount: 2, awardSubmissions: [], leaderCount: 0, badges: ['신규멤버'] } },
];

// 6 projects
const PROJECTS = [
  { id: 1, title: '캠퍼스 분실물 찾아주는 앱',         school: '한양대',   filled: 3, total: 5, dday: 12, category: '교내 서비스', match: 87, leader: '김민준', period: '2개월', meeting: '온라인 + 한양대',  desc: '한양대 학생 5,000명 대상 분실물 매칭 서비스. 사진 인식 기반.' },
  { id: 2, title: '교내 카페 줄서기 IoT 솔루션',       school: '성균관대', filled: 2, total: 4, dday: 7,  category: 'IoT/하드웨어', match: 72, leader: '이은호', period: '1학기', meeting: '오프라인',         desc: '카페 줄서기 디바이스 + 앱 연동. 라즈베리파이 사용 예정.' },
  { id: 3, title: 'AI 학습 도우미 챗봇 (졸업작품)',     school: '고려대',   filled: 4, total: 5, dday: 21, category: 'AI/ML',        match: 68, leader: '서지훈', period: '1학기', meeting: '온라인',           desc: 'GPT 기반 강의 노트 정리·문제 생성. 졸업 작품으로 진행.' },
  { id: 4, title: '지역 소상공인 SNS 마케팅 캠페인',    school: '동국대',   filled: 1, total: 4, dday: 4,  category: '마케팅',       match: 0,  leader: '박지민', period: '1개월', meeting: '오프라인',         desc: '필동 일대 소상공인 5팀과 협업. 인스타 콘텐츠 운영.' },
  { id: 5, title: '학생 멘탈 헬스 케어 플랫폼',        school: '연세대',   filled: 3, total: 6, dday: 30, category: '헬스케어',     match: 0,  leader: '안서영', period: '2-3개월', meeting: '하이브리드', desc: '대학생 우울감 자가 진단 + 또래 매칭 챗봇.' },
  { id: 6, title: '전과생을 위한 과목 추천 서비스',    school: '중앙대',   filled: 2, total: 3, dday: 9,  category: '교내 서비스', match: 0,  leader: '윤하림', period: '1개월',  meeting: '온라인',           desc: '전과생 데이터 기반 과목 추천. 학사 시스템 연동 X.' },
];

const LEADER = { name: '김민준', dept: '컴퓨터공학', year: 3, school: '한양대', priorProjects: 2 };

const ROLES_NEEDED = [
  { role: '프론트엔드 개발자', count: 1, skills: ['React','TypeScript','Tailwind'], pref: '컴포넌트 설계 경험' },
  { role: '백엔드 개발자',     count: 1, skills: ['Node.js','PostgreSQL','REST'],   pref: 'API 설계 가능자' },
  { role: '프로덕트 디자이너', count: 1, skills: ['Figma','Prototype','UX'],         pref: '모바일 앱 경험 우대' },
  { role: 'PM/기획자',          count: 1, skills: ['Notion','와이어프레임','리서치'], pref: '주 1회 미팅 가능' },
  { role: '콘텐츠 마케터',     count: 1, skills: ['카피','SNS','콘텐츠 기획'],       pref: '인스타 운영 경험' },
];

const TASKS = {
  todo: [
    { id: 't1', title: '매칭 알고리즘 가중치 검증', desc: '5명 표본 테스트 후 보정값 결정', owner: '정현우', due: 'D-5', major: '통계/데이터', files: 2, comments: 4, tag: 'Python' },
    { id: 't2', title: '랜딩 페이지 와이어프레임',  desc: '히어로 섹션 3안',           owner: '윤하늘', due: 'D-3', major: '디자인',     files: 0, comments: 1, tag: 'Figma' },
    { id: 't3', title: '인터뷰 스크립트 작성',     desc: '학생 5명 대상',             owner: '박서연', due: 'D-7', major: '경영/기획', files: 1, comments: 0 },
    { id: 't4', title: '디스코드 채널 정리',       desc: '카테고리별 분리',           owner: '김민준', due: 'D-2', major: '컴공/SW',   files: 0, comments: 0 },
    { id: 't5', title: '발표 자료 톤앤매너 정의', desc: '컬러/폰트 가이드',          owner: '이수민', due: 'D-6', major: '디자인',     files: 3, comments: 2 },
  ],
  doing: [
    { id: 'd1', title: '로고 시안 v2',             desc: '3개 방향 → 1개 추리기',     owner: '이수민', due: '내일',  urgent: true, major: '디자인',    files: 5, comments: 7, tag: 'Figma' },
    { id: 'd2', title: '발표 영상 편집',           desc: '2분 30초 컷',               owner: '한지우', due: 'D-4',                 major: '미디어/홍보', files: 12, comments: 3, tag: 'Premiere' },
    { id: 'd3', title: '로그인 API 구현',         desc: 'JWT + 카카오 OAuth',       owner: '정현우', due: 'D-2', urgent: true, major: '컴공/SW',  files: 0, comments: 9, tag: 'Spring' },
  ],
  done: [
    { id: 'D1', title: '사용자 인터뷰 5명',        desc: '인사이트 정리 완료',         owner: '박서연', due: '완료', major: '경영/기획', files: 4, comments: 8 },
    { id: 'D2', title: '경쟁사 분석 리서치',       desc: '11개 서비스 정리',           owner: '강민서', due: '완료', major: '통계/데이터', files: 2, comments: 3 },
    { id: 'D3', title: '브랜드 컬러 확정',         desc: 'Indigo + Lime',              owner: '이수민', due: '완료', major: '디자인',     files: 1, comments: 5 },
    { id: 'D4', title: '기술 스택 결정',           desc: 'React/Spring 합의',         owner: '김민준', due: '완료', major: '컴공/SW',   files: 0, comments: 4 },
  ],
};

const FEATURES = [
  { id: 'F01', title: '역할 기반 매칭', desc: '5개 항목 100점 만점으로 적합도를 계산해요.' },
  { id: 'F02', title: '지원자 비교',     desc: '최대 3명을 나란히 비교해서 팀을 짭니다.' },
  { id: 'F03', title: '전공 컬러 코딩', desc: '전공별 색으로 한눈에 다양성을 봅니다.' },
  { id: 'F04', title: '협업 보드',       desc: '칸반 + 멤버 + 자료 + 일정 전부 한 곳에.' },
  { id: 'F05', title: '자동 포트폴리오', desc: '프로젝트가 끝나면 PDF 한 장이 자동 생성.' },
  { id: 'F06', title: '디스코드 연동',   desc: 'Task 알림이 디스코드 채널로 흘러갑니다.' },
];

const FLOW = [
  { n: 1, title: '가입',         desc: '학교 메일로 인증' },
  { n: 2, title: '프로필 작성', desc: '전공·기술·관심사' },
  { n: 3, title: '프로젝트 탐색', desc: '필터로 범위 좁히기' },
  { n: 4, title: '매칭 점수 확인', desc: '지원 전 미리보기' },
  { n: 5, title: '협업 진행',   desc: '칸반·일정·자료' },
  { n: 6, title: '포트폴리오', desc: '자동 PDF 생성' },
];

const NOTIFS_TODAY = [
  { type: 'success', icon: '🎯', color: '#84CC16', title: '매칭 성공', body: '김민준 팀장이 [캠퍼스 분실물 앱] 팀에 당신을 추가했어요', time: '2분 전', cta: '팀 들어가기' },
  { type: 'award_verify', icon: '🏆', color: '#F59E0B', title: '수상 인증 요청', body: '강민서(데이터 2)님이 [캠퍼스 분실물 찾아주는 앱]으로 받은 수상 인증을 요청했어요', time: '8분 전', cta: '증빙 확인하기', applicantId: 6, submissionId: 'aw6a' },
  { type: 'apply',   icon: '📥', color: '#4F46E5', title: '새 지원자', body: '이수민(시각디자인 2)이 [멘탈 헬스 챗봇]에 지원했어요. 매칭 87점', time: '14분 전', cta: '지원자 보기' },
  { type: 'due',     icon: '⏰', color: '#F59E0B', title: '마감 임박', body: '[로고 시안 v2] Task가 내일 마감이에요', time: '1시간 전', cta: 'Task 열기' },
];

const NOTIFS_WEEK = [
  { type: 'folio',   icon: '🎉', color: '#84CC16', title: '포트폴리오 생성', body: '[교내 카페 줄서기] 포트폴리오 PDF가 준비됐어요', time: '어제', cta: 'PDF 보기' },
  { type: 'join',    icon: '👋', color: '#4F46E5', title: '팀원 합류',     body: '윤하늘님이 [전과생 추천 서비스] 팀에 합류했어요', time: '2일 전', cta: '팀 보기' },
  { type: 'comment', icon: '💬', color: '#475569', title: '새 댓글',         body: '박서연님이 [인터뷰 스크립트]에 댓글을 남겼어요', time: '3일 전', cta: '댓글 보기' },
  { type: 'review',  icon: '⭐', color: '#F59E0B', title: '평가 요청',     body: '함께한 팀원 4명에게 별점을 남겨주세요', time: '4일 전', cta: '평가하기' },
  { type: 'apply',   icon: '📥', color: '#4F46E5', title: '새 지원자',     body: '강민서(데이터 2)가 [캠퍼스 분실물]에 지원했어요. 매칭 71점', time: '5일 전', cta: '지원자 보기' },
];

const PRICING = [
  {
    id: 'free', name: '무료', price: '0원', sub: '영구 무료', tone: 'gray', badge: null,
    items: ['프로젝트 탐색', '팀원 모집글 등록', '기본 지원 / 매칭'],
  },
  {
    id: 'pro', name: '개인 구독', price: '월 1,990원', sub: '개인 사용자', tone: 'indigo', badge: '추천',
    items: ['상세 프로필', '포트폴리오 강화', '광고 제거', '지원 이력 관리'],
  },
  {
    id: 'team', name: '팀 플랜', price: '팀 단위 결제', sub: '협의 예정', tone: 'gray', badge: null,
    items: ['협업 보드 (칸반)', '일정 / 자료 관리', '팀 단위 결제'],
  },
  {
    id: 'org', name: '기관 플랜 (B2B)', price: '약 40만원~', sub: '협의 후 확정', note: '학교·학과 인터뷰 후 조정 예정', tone: 'gray', badge: null,
    items: ['학교/학과/동아리/창업지원단 운영 관리', '비교과·공모전 팀 구성 관리'],
  },
];

window.MajorLinkData = {
  MAJOR, majorOf, APPLICANTS, PROJECTS, LEADER, ROLES_NEEDED, TASKS, FEATURES, FLOW,
  NOTIFS_TODAY, NOTIFS_WEEK, PRICING,
};
