// Minimal inline lucide-style icons (stroke-based)
const I = (paths, viewBox = '0 0 24 24') => ({ size = 16, color, fill = 'none', strokeWidth = 2, style, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={viewBox}
    fill={fill} stroke={color || 'currentColor'} strokeWidth={strokeWidth}
    strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
    {paths}
  </svg>
);

const Lock         = I(<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>);
const Plus         = I(<><path d="M12 5v14"/><path d="M5 12h14"/></>);
const MoreVertical = I(<><circle cx="12" cy="5"  r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></>);
const MoreHorizontal = I(<><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>);
const Signal       = I(<><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 4v16"/></>);
const Wifi         = I(<><path d="M5 12.55a11 11 0 0 1 14 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></>);
const BatteryFull  = I(<><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 11v2"/><path d="M5 10v4"/><path d="M9 10v4"/><path d="M13 10v4"/></>);
const Home         = I(<><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></>);
const Search       = I(<><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></>);
const Bell         = I(<><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>);
const Folder       = I(<><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></>);
const User         = I(<><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>);
const Compass      = I(<><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>);
const Users        = I(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>);
const ArrowRight   = I(<><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></>);
const Sparkles     = I(<><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/></>);
const Bookmark     = I(<><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></>);
const Share2       = I(<><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></>);
const ChevronLeft  = I(<><polyline points="15 18 9 12 15 6"/></>);
const ChevronRight = I(<><polyline points="9 18 15 12 9 6"/></>);
const ChevronDown  = I(<><polyline points="6 9 12 15 18 9"/></>);
const ChevronUp    = I(<><polyline points="18 15 12 9 6 15"/></>);
const Check        = I(<><polyline points="20 6 9 17 4 12"/></>);
const X            = I(<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>);
const MessageCircle= I(<><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></>);
const MessageSquare= I(<><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>);
const Lightbulb    = I(<><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v.3h6V17c0-.8.4-1.5 1-2a7 7 0 0 0-4-12.7z"/></>);
const Layers       = I(<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>);
const Link         = I(<><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>);
const Grid3x3      = I(<><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></>);
const Paperclip    = I(<><path d="M21 11l-9.2 9.2a5 5 0 0 1-7.07-7.07L13.93 4a3.5 3.5 0 0 1 4.95 4.95L9.76 18.07a2 2 0 1 1-2.83-2.83l8.49-8.49"/></>);
const Calendar     = I(<><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>);
const Star         = I(<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>);
const Code         = I(<><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>);
const Globe        = I(<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>);
const Github       = I(<><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></>);
const Figma        = I(<><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></>);
const Download     = I(<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>);
const Settings     = I(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>);
const Smartphone   = I(<><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>);
const Monitor      = I(<><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>);

window.lucideReact = {
  Lock, Plus, MoreVertical, MoreHorizontal, Signal, Wifi, BatteryFull,
  Home, Search, Bell, Folder, User, Compass, Users, ArrowRight, Sparkles,
  Bookmark, Share2, ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  Check, X, MessageCircle, MessageSquare, Lightbulb, Layers, Link,
  Grid3x3, Paperclip, Calendar, Star, Code, Globe, Github, Figma,
  Download, Settings, Smartphone, Monitor,
};

;(function(){
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
  { id: 1, name: '최도윤', dept: '컴퓨터공학',          year: 3, school: '한양대',   skills: ['React','Spring','MySQL','Git'],         score: 91, role: '프론트엔드 개발자', intro: '풀스택 가능, 3개 사이드 프로젝트 운영', portfolio: 'github.com/dy-choi', breakdown: { role: 30, skill: 24, period: 19, interest: 13, folio: 5 } },
  { id: 2, name: '이수민', dept: '시각디자인',          year: 2, school: '홍익대',   skills: ['Figma','Adobe XD','Illustrator','Notion'], score: 87, role: '프로덕트 디자이너', intro: '브랜드·앱 인터페이스 모두 OK', portfolio: 'behance.net/sumin',    breakdown: { role: 28, skill: 22, period: 18, interest: 12, folio: 7 } },
  { id: 3, name: '박서연', dept: '경영학',              year: 3, school: '연세대',   skills: ['시장조사','PPT','Notion','Excel'],         score: 82, role: 'PM/기획자',          intro: '학생 창업동아리 부회장', portfolio: 'notion.so/parkseo',     breakdown: { role: 27, skill: 20, period: 17, interest: 13, folio: 5 } },
  { id: 4, name: '정현우', dept: '통계학',              year: 4, school: '고려대',   skills: ['R','Python','SPSS','SQL'],                 score: 79, role: '데이터 분석가',     intro: '학회 데이터 동아리 회장', portfolio: 'kaggle.com/hwjung',     breakdown: { role: 26, skill: 22, period: 16, interest: 10, folio: 5 } },
  { id: 5, name: '한지우', dept: '미디어커뮤니케이션', year: 2, school: '중앙대',   skills: ['Premiere','After Effects','Photoshop'],     score: 74, role: '콘텐츠 마케터',     intro: '유튜브 영상 편집 2년차', portfolio: 'youtube.com/jiwoo',     breakdown: { role: 24, skill: 19, period: 15, interest: 11, folio: 5 } },
  { id: 6, name: '강민서', dept: '데이터사이언스',      year: 2, school: '성균관대', skills: ['Python','SQL','Tableau'],                  score: 71, role: '데이터 분석가',     intro: 'Tableau 자격증 보유',   portfolio: 'github.com/mskang',     breakdown: { role: 22, skill: 18, period: 16, interest: 11, folio: 4 } },
  { id: 7, name: '윤하늘', dept: '산업디자인',          year: 3, school: '국민대',   skills: ['UX 리서치','프로토타이핑','Figma'],         score: 68, role: 'UX 디자이너',       intro: 'IDEO 인턴 경험',       portfolio: 'haneul.design',         breakdown: { role: 23, skill: 17, period: 14, interest: 10, folio: 4 } },
  { id: 8, name: '임채원', dept: '광고홍보',            year: 3, school: '동국대',   skills: ['콘텐츠 기획','카피','SNS 운영'],            score: 63, role: '콘텐츠 마케터',     intro: '인스타 9만 팔로워 운영', portfolio: 'instagram.com/im',      breakdown: { role: 20, skill: 16, period: 14, interest: 9,  folio: 4 } },
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

window.CampusData = {
  MAJOR, majorOf, APPLICANTS, PROJECTS, LEADER, ROLES_NEEDED, TASKS, FEATURES, FLOW,
  NOTIFS_TODAY, NOTIFS_WEEK,
};

})();
// Reusable atoms — donut, bar, chip, browser/phone frames
const { useState, useEffect, useRef } = React;
const L = window.lucideReact || {};
const { MAJOR, majorOf } = window.CampusData;

// === Match score gradient color ===
function scoreColor(score) {
  if (score >= 85) return { stroke: 'url(#gradHi)', text: '#4F46E5', label: 'EXCELLENT', labelBg: '#EEF2FF', labelText: '#4F46E5' };
  if (score >= 70) return { stroke: '#22C55E', text: '#15803D', label: 'GOOD',      labelBg: '#DCFCE7', labelText: '#15803D' };
  if (score >= 50) return { stroke: '#F59E0B', text: '#B45309', label: 'FAIR',      labelBg: '#FEF3C7', labelText: '#B45309' };
  return { stroke: '#F43F5E', text: '#BE123C', label: 'LOW', labelBg: '#FFE4E6', labelText: '#BE123C' };
}

// === Animated count-up ===
function useCountUp(target, durationMs = 500, delayMs = 40, key = 0) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    setVal(0);
    let start = null;
    let raf;
    const t = setTimeout(() => {
      const tick = (ts) => {
        if (start == null) start = ts;
        const p = Math.min(1, (ts - start) / durationMs);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, Math.min(delayMs, 80));
    return () => { clearTimeout(t); if (raf) cancelAnimationFrame(raf); };
  }, [target, durationMs, delayMs, key]);
  return val;
}

// === Donut score chart ===
function DonutScore({ score, size = 120, stroke = 10, animKey = 0, showLabel = true, delay = 40 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = useCountUp(score, 500, delay, animKey);
  const col = scoreColor(score);
  const offset = c - (c * v) / 100;

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <defs>
          <linearGradient id="gradHi" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="#84CC16" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={r} stroke="#F1F5F9" strokeWidth={stroke} fill="none" />
        <circle
          cx={size/2} cy={size/2} r={r}
          stroke={col.stroke} strokeWidth={stroke} fill="none"
          strokeDasharray={c} strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease-out', transform: 'rotate(-90deg)', transformOrigin: 'center' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-bold tabular-nums" style={{ fontSize: size * 0.32, color: col.text, letterSpacing: '-0.02em' }}>{v}</div>
        {showLabel && <div className="text-[10px] font-semibold tracking-wide" style={{ color: '#94A3B8' }}>점</div>}
      </div>
    </div>
  );
}

// === Score breakdown bars ===
const BREAKDOWN_LABELS = [
  { key: 'role',     label: '역할',    max: 30, color: '#4F46E5' },
  { key: 'skill',    label: '기술',    max: 25, color: '#22C55E' },
  { key: 'period',   label: '기간',    max: 20, color: '#F59E0B' },
  { key: 'interest', label: '관심',    max: 15, color: '#EC4899' },
  { key: 'folio',    label: '포폴',    max: 10, color: '#14B8A6' },
];

function ScoreBars({ b, animKey = 0, dense = false }) {
  return (
    <div className={`grid ${dense ? 'gap-1.5' : 'gap-2'}`}>
      {BREAKDOWN_LABELS.map((row, i) => {
        const v = b[row.key] || 0;
        const pct = (v / row.max) * 100;
        return (
          <div key={row.key} className="flex items-center gap-2.5 text-[11px]" style={{ color: '#475569' }}>
            <div className={`${dense ? 'w-7' : 'w-8'} font-medium`}>{row.label}</div>
            <div className="flex-1 h-1.5 rounded-full" style={{ background: '#F1F5F9' }}>
              <div
                key={`${animKey}-${i}`}
                className="h-full rounded-full anim-bar"
                style={{
                  width: `${pct}%`,
                  background: row.color,
                  animationDelay: `${300 + i * 80}ms`,
                }}
              />
            </div>
            <div className="tabular-nums font-semibold w-9 text-right" style={{ color: '#0F172A' }}>{v}/{row.max}</div>
          </div>
        );
      })}
    </div>
  );
}

// === Major chip ===
function MajorChip({ dept, year, size = 'sm' }) {
  const m = MAJOR[majorOf(dept)];
  const cls = size === 'xs' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1';
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-semibold ${cls}`} style={{ background: m.bg, color: m.text }}>
      {dept}{year ? ` ${year}` : ''}
    </span>
  );
}

// === Generic chip ===
function Chip({ children, tone = 'gray', className = '' }) {
  const tones = {
    gray:    { bg: '#F4F4F5', text: '#475569' },
    indigo:  { bg: '#EEF2FF', text: '#4F46E5' },
    lime:    { bg: '#ECFCCB', text: '#3F6212' },
    amber:   { bg: '#FEF3C7', text: '#B45309' },
    rose:    { bg: '#FFE4E6', text: '#BE123C' },
  };
  const t = tones[tone] || tones.gray;
  return <span className={`inline-flex items-center gap-1 text-[11px] font-semibold rounded-full px-2.5 py-1 ${className}`} style={{ background: t.bg, color: t.text }}>{children}</span>;
}

// === Avatar ===
function Avatar({ name, dept, size = 32, ring = true }) {
  const initial = (name || '?').slice(0, 1);
  const m = dept ? MAJOR[majorOf(dept)] : null;
  const bg = m ? m.bg : '#E4E4E7';
  const text = m ? m.text : '#475569';
  const ringColor = m ? m.ring : '#E4E4E7';
  return (
    <div
      className="inline-flex items-center justify-center font-bold rounded-full shrink-0"
      style={{
        width: size, height: size,
        background: bg, color: text,
        fontSize: size * 0.42,
        boxShadow: ring ? `0 0 0 2px white, 0 0 0 ${size > 40 ? 3 : 2}px ${ringColor}` : undefined,
      }}
    >{initial}</div>
  );
}

// === Browser frame ===
function BrowserFrame({ url = 'campus-link.kr/', children, height }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-card border" style={{ borderColor: '#E4E4E7', background: '#FFFFFF' }}>
      <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ background: '#F4F4F5', borderColor: '#E4E4E7' }}>
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full" style={{ background: '#FB7185' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#FBBF24' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#34D399' }} />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 rounded-md text-xs flex items-center gap-2" style={{ background: '#FFFFFF', border: '1px solid #E4E4E7', color: '#94A3B8' }}>
          <L.Lock size={11} />
          <span style={{ color: '#475569' }}>campus-link.kr</span>
          <span>/{url.replace('campus-link.kr/', '')}</span>
        </div>
        <div className="flex gap-2 text-zinc-400">
          <L.Plus size={14} />
          <L.MoreVertical size={14} />
        </div>
      </div>
      <div className="overflow-hidden" style={{ height: height || 720, background: '#FAFAFA' }}>
        <div className="h-full overflow-y-auto scrollbar-hide">{children}</div>
      </div>
    </div>
  );
}

// === Phone frame ===
function PhoneFrame({ children, height = 720 }) {
  return (
    <div className="relative mx-auto" style={{ width: 360 }}>
      <div className="rounded-[44px] p-[10px] shadow-cardHov" style={{ background: '#0F172A' }}>
        <div className="rounded-[36px] overflow-hidden relative" style={{ background: '#FAFAFA', height }}>
          {/* status bar */}
          <div className="absolute top-0 left-0 right-0 h-9 flex items-center justify-between px-6 z-30 text-[12px] font-semibold" style={{ color: '#0F172A' }}>
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <L.Signal size={13} />
              <L.Wifi size={13} />
              <L.BatteryFull size={15} />
            </div>
          </div>
          {/* notch */}
          <div className="absolute left-1/2 -translate-x-1/2 top-2 z-40 rounded-full" style={{ width: 110, height: 28, background: '#0F172A' }} />
          <div className="h-full overflow-y-auto scrollbar-hide pt-9">{children}</div>
        </div>
      </div>
    </div>
  );
}

// === Mobile bottom tab bar ===
function MobileTabBar({ active = 'notif' }) {
  const items = [
    { k: 'home',    label: '홈',         icon: L.Home },
    { k: 'explore', label: '탐색',       icon: L.Search },
    { k: 'notif',   label: '알림',       icon: L.Bell },
    { k: 'mine',    label: '내 프로젝트', icon: L.Folder },
    { k: 'me',      label: '마이',       icon: L.User },
  ];
  return (
    <div className="sticky bottom-0 left-0 right-0 grid grid-cols-5 border-t bg-white" style={{ borderColor: '#E4E4E7' }}>
      {items.map(it => {
        const Ico = it.icon;
        const on = it.k === active;
        return (
          <div key={it.k} className="flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-semibold" style={{ color: on ? '#4F46E5' : '#94A3B8' }}>
            {Ico && <Ico size={20} />}
            <span>{it.label}</span>
          </div>
        );
      })}
      <div className="absolute -bottom-0 left-0 right-0 h-1 flex justify-center pt-1">
        <div className="w-32 h-1 rounded-full" style={{ background: '#0F172A' }} />
      </div>
    </div>
  );
}

// === Wordmark ===
function Wordmark({ size = 'md' }) {
  const big = size === 'lg';
  return (
    <div className="inline-flex items-center gap-1" style={{ color: '#4F46E5', fontWeight: 800, fontSize: big ? 22 : 17, letterSpacing: '-0.02em' }}>
      <span>Campus Link</span>
      <span className="rounded-full" style={{ width: big ? 8 : 6, height: big ? 8 : 6, background: '#84CC16', display: 'inline-block', marginTop: big ? 6 : 4 }} />
    </div>
  );
}

// Section card primitive
function Section({ title, action, children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white border shadow-card p-5 ${className}`} style={{ borderColor: '#E4E4E7' }}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          {title && <div className="font-semibold text-[15px]" style={{ color: '#0F172A' }}>{title}</div>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

// Image placeholder (gradient stripe)
function Placeholder({ label, height = 160, gradient = ['#EEF2FF', '#ECFCCB'], className = '' }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden flex items-end p-4 ${className}`}
      style={{
        height,
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
      }}
    >
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 8px, transparent 8px 24px)',
        opacity: 0.35,
      }} />
      {label && <div className="relative font-bold text-lg" style={{ color: '#0F172A', letterSpacing: '-0.02em' }}>{label}</div>}
    </div>
  );
}

window.CampusAtoms = {
  scoreColor, useCountUp, DonutScore, ScoreBars, MajorChip, Chip, Avatar,
  BrowserFrame, PhoneFrame, MobileTabBar, Wordmark, Section, Placeholder,
  BREAKDOWN_LABELS,
};
// Screens 1-4: Landing, Explore, Detail, Compare
const { useState: useS1, useEffect: useE1, useRef: useR1 } = React;
const A = window.CampusAtoms;
const D = window.CampusData;
const Lc = window.lucideReact || {};

// ============ SCREEN 1: LANDING ============
function ScreenLanding({ device, animKey }) {
  const isM = device === 'mobile';

  return (
    <div className="tab-enter" key={animKey}>
      {/* Top nav */}
      <div className={`flex items-center justify-between ${isM ? 'px-4 py-3' : 'px-10 py-4'} border-b bg-white sticky top-0 z-20`} style={{ borderColor: '#E4E4E7' }}>
        <A.Wordmark size={isM ? 'md' : 'md'} />
        {!isM && (
          <div className="flex items-center gap-7 text-sm" style={{ color: '#475569' }}>
            <span>둘러보기</span><span>가이드</span><span>요금제</span><span>FAQ</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          {!isM && <button className="text-sm px-3 py-2 font-medium" style={{ color: '#475569' }}>로그인</button>}
          <button className="rounded-xl text-sm font-semibold text-white" style={{ background: '#4F46E5', padding: isM ? '6px 12px' : '8px 14px' }}>시작하기</button>
        </div>
      </div>

      {/* Hero */}
      <div className={`${isM ? 'px-5 py-8' : 'px-12 py-16'}`} style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)' }}>
        <div className={isM ? 'flex flex-col gap-7' : 'grid grid-cols-12 gap-10 items-center'}>
          <div className={isM ? '' : 'col-span-7'}>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-5" style={{ background: '#EEF2FF' }}>
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#84CC16' }} />
              <span className="text-[12px] font-semibold" style={{ color: '#4F46E5' }}>2026년 7월 정식 출시</span>
            </div>
            <h1 className="font-bold leading-[1.15]" style={{ fontSize: isM ? 30 : 52, letterSpacing: '-0.025em', color: '#0F172A' }}>
              전공이 다르면,<br />팀이 강해집니다.
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: '#475569', maxWidth: 480 }}>
              역할 기반 매칭 점수로<br className={isM ? '' : 'hidden'} />
              흩어진 전공을 하나의 프로젝트로 잇다.
            </p>
            <div className={`mt-7 flex ${isM ? 'flex-col' : ''} gap-3`}>
              <button className="rounded-xl text-white font-semibold flex items-center justify-center gap-2" style={{ background: '#4F46E5', padding: '14px 22px' }}>
                <Lc.Compass size={16} /> 프로젝트 둘러보기
              </button>
              <button className="rounded-xl font-semibold border bg-white flex items-center justify-center gap-2" style={{ borderColor: '#E4E4E7', color: '#0F172A', padding: '14px 22px' }}>
                <Lc.Users size={16} /> 팀원 모집하기
              </button>
            </div>
            <div className="mt-7 flex items-center gap-5 text-[13px]" style={{ color: '#475569' }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['이수민','박서연','정현우','한지우'].map(n => <A.Avatar key={n} name={n} dept="컴퓨터공학" size={26} />)}
                </div>
                <span><b style={{ color: '#0F172A' }}>1,247명</b>의 학생이 사용 중</span>
              </div>
              <span style={{ color: '#E4E4E7' }}>·</span>
              <span><b style={{ color: '#0F172A' }}>312개</b> 프로젝트 진행</span>
            </div>
          </div>

          {/* Live demo card */}
          <div className={isM ? '' : 'col-span-5'}>
            <LiveMatchDemo animKey={animKey} compact={isM} />
          </div>
        </div>
      </div>

      {/* Section 2 — features */}
      <div className={`${isM ? 'px-5 py-10' : 'px-12 py-16'}`} style={{ background: '#FFFFFF' }}>
        <div className="flex items-end justify-between mb-7">
          <div>
            <div className="text-[12px] font-bold tracking-wide" style={{ color: '#4F46E5' }}>FEATURES</div>
            <h2 className="font-bold mt-2" style={{ fontSize: isM ? 22 : 28, letterSpacing: '-0.02em' }}>5가지 문제, 6가지 해답</h2>
          </div>
          {!isM && <div className="text-sm" style={{ color: '#94A3B8' }}>← 가로로 스크롤 →</div>}
        </div>
        <div className={`${isM ? 'grid grid-cols-1 gap-3' : 'flex gap-4 overflow-x-auto hscroll pb-2 -mx-12 px-12'}`}>
          {D.FEATURES.map((f, i) => (
            <div key={f.id} className="rounded-2xl border bg-white p-5 shrink-0" style={{ borderColor: '#E4E4E7', width: isM ? '100%' : 260 }}>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider rounded-md px-2 py-1" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{f.id}</span>
                <span className="text-zinc-300 text-xs">0{i+1}</span>
              </div>
              <div className="mt-5 font-bold text-[17px]" style={{ letterSpacing: '-0.02em' }}>{f.title}</div>
              <div className="mt-2 text-[13px] leading-relaxed" style={{ color: '#475569' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — flow */}
      <div className={`${isM ? 'px-5 py-10' : 'px-12 py-16'}`} style={{ background: '#FAFAFA' }}>
        <div className="text-[12px] font-bold tracking-wide" style={{ color: '#4F46E5' }}>HOW IT WORKS</div>
        <h2 className="font-bold mt-2" style={{ fontSize: isM ? 22 : 28, letterSpacing: '-0.02em' }}>가입에서 포트폴리오까지 6단계</h2>
        <div className={`mt-8 ${isM ? 'flex flex-col gap-3' : 'grid grid-cols-6 gap-3'}`}>
          {D.FLOW.map((s, i) => (
            <div key={s.n} className={`relative rounded-2xl p-4 bg-white border ${isM ? '' : ''}`} style={{ borderColor: '#E4E4E7' }}>
              <div className="flex items-center gap-2">
                <div className="rounded-full text-white font-bold text-[12px] w-7 h-7 flex items-center justify-center" style={{ background: i === D.FLOW.length - 1 ? '#84CC16' : '#4F46E5' }}>{s.n}</div>
                {!isM && i < D.FLOW.length - 1 && <div className="flex-1 h-0.5" style={{ background: '#E4E4E7' }} />}
              </div>
              <div className="mt-3 font-bold text-[15px]">{s.title}</div>
              <div className="mt-1 text-[12px]" style={{ color: '#475569' }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — projects preview */}
      <div className={`${isM ? 'px-5 py-10' : 'px-12 py-14'}`} style={{ background: '#FFFFFF' }}>
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="text-[12px] font-bold tracking-wide" style={{ color: '#4F46E5' }}>LIVE PROJECTS</div>
            <h2 className="font-bold mt-2" style={{ fontSize: isM ? 22 : 28, letterSpacing: '-0.02em' }}>지금 모집 중인 프로젝트</h2>
          </div>
          {!isM && <button className="text-sm font-semibold flex items-center gap-1" style={{ color: '#4F46E5' }}>전체 보기 <Lc.ArrowRight size={14} /></button>}
        </div>
        <div className={`${isM ? 'grid grid-cols-1 gap-3' : 'grid grid-cols-3 gap-4'}`}>
          {D.PROJECTS.slice(0, 3).map(p => <ProjectCard key={p.id} project={p} compact={isM} />)}
        </div>
      </div>

      {/* Footer */}
      <div className={`${isM ? 'px-5 py-8' : 'px-12 py-10'} border-t`} style={{ background: '#FAFAFA', borderColor: '#E4E4E7' }}>
        <div className={`${isM ? '' : 'flex items-end justify-between'}`}>
          <div>
            <A.Wordmark size="md" />
            <p className="mt-3 text-[13px]" style={{ color: '#475569' }}>전공 기반 대학생 협업 플랫폼 · 2026.07 정식 출시</p>
          </div>
          <div className={`${isM ? 'mt-5' : ''} flex flex-wrap gap-2`}>
            {Object.keys(D.MAJOR).map(k => {
              const m = D.MAJOR[k];
              return <span key={k} className="text-[11px] font-semibold rounded-full px-2.5 py-1" style={{ background: m.bg, color: m.text }}>{k}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveMatchDemo({ animKey, compact }) {
  // auto-cycling 0→87
  const [tick, setTick] = useS1(0);
  useE1(() => {
    const id = setInterval(() => setTick(t => t + 1), 3500);
    return () => clearInterval(id);
  }, []);
  const k = animKey + tick;
  const breakdown = { role: 30, skill: 22, period: 18, interest: 12, folio: 5 };

  return (
    <div className="rounded-3xl bg-white border p-5 shadow-cardHov" style={{ borderColor: '#E4E4E7' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-[11px] font-bold tracking-wider" style={{ color: '#84CC16' }}>● LIVE MATCH</div>
        <div className="text-[11px]" style={{ color: '#94A3B8' }}>실시간 시연</div>
      </div>
      <div className="flex items-center gap-4">
        <A.Avatar name="이수민" dept="시각디자인" size={56} />
        <div className="flex-1">
          <div className="font-bold text-[16px]">이수민</div>
          <div className="mt-1 flex items-center gap-1.5">
            <A.MajorChip dept="시각디자인" year={2} size="xs" />
          </div>
          <div className="text-[11px] mt-1.5" style={{ color: '#94A3B8' }}>지원 → 멘탈 헬스 챗봇</div>
        </div>
        <A.DonutScore score={87} size={compact ? 80 : 92} stroke={9} animKey={k} delay={200} />
      </div>
      <div className="mt-5 pt-5 border-t" style={{ borderColor: '#F1F5F9' }}>
        <A.ScoreBars b={breakdown} animKey={k} dense />
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ background: '#ECFCCB' }}>
        <Lc.Sparkles size={14} style={{ color: '#3F6212' }} />
        <span className="text-[12px] font-semibold" style={{ color: '#3F6212' }}>EXCELLENT — 상위 14% 매칭</span>
      </div>
    </div>
  );
}

// ============ Project card ============
function ProjectCard({ project, compact, withMatch }) {
  const overdue = project.dday <= 7;
  return (
    <div
      onClick={() => window.__nav && window.__nav.go('detail', { projectId: project.id })}
      className="rounded-2xl bg-white border p-4 relative shadow-card hover:shadow-cardHov transition cursor-pointer hover:-translate-y-0.5"
      style={{ borderColor: '#E4E4E7' }}>
      {withMatch && project.match >= 70 && (
        <div className="absolute -top-2 right-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow" style={{ background: 'linear-gradient(90deg, #84CC16 0%, #4F46E5 100%)' }}>
          🎯 {project.match}% 매칭
        </div>
      )}
      <div className="flex items-center justify-between">
        <A.Chip>{project.category}</A.Chip>
        <span className={`text-[11px] font-bold rounded-full px-2 py-0.5 ${overdue ? 'pulse-dot' : ''}`} style={{ background: overdue ? '#FFE4E6' : '#F4F4F5', color: overdue ? '#BE123C' : '#475569' }}>D-{project.dday}</span>
      </div>
      <div className="mt-3 font-bold text-[15px] leading-snug line-clamp-2" style={{ letterSpacing: '-0.01em' }}>{project.title}</div>
      <div className="mt-1.5 text-[12px] line-clamp-1" style={{ color: '#475569' }}>{project.desc}</div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {['프론트엔드','디자이너','PM'].slice(0, compact ? 2 : 3).map(r => <A.Chip key={r} tone="indigo">{r}</A.Chip>)}
      </div>
      <div className="mt-4 pt-3 flex items-center justify-between border-t" style={{ borderColor: '#F1F5F9' }}>
        <div className="flex items-center gap-2">
          <A.Avatar name={project.leader} dept="컴퓨터공학" size={24} />
          <div className="text-[11px]" style={{ color: '#475569' }}>{project.school}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[11px] font-semibold" style={{ color: '#475569' }}>{project.filled}/{project.total}명</div>
          <div className="w-14 h-1.5 rounded-full" style={{ background: '#F1F5F9' }}>
            <div className="h-full rounded-full" style={{ width: `${(project.filled/project.total)*100}%`, background: '#4F46E5' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ SCREEN 2: EXPLORE ============
function ScreenExplore({ device, animKey }) {
  const isM = device === 'mobile';
  return (
    <div className="tab-enter" key={animKey}>
      <div className={`flex items-center justify-between ${isM ? 'px-4 py-3' : 'px-10 py-4'} border-b bg-white sticky top-0 z-20`} style={{ borderColor: '#E4E4E7' }}>
        <A.Wordmark />
        {!isM && <div className="flex-1 mx-8 max-w-md">
          <div className="flex items-center gap-2 rounded-xl border px-3 py-2" style={{ borderColor: '#E4E4E7' }}>
            <Lc.Search size={15} style={{ color: '#94A3B8' }} />
            <input placeholder="프로젝트, 기술, 학교 검색" className="bg-transparent outline-none flex-1 text-sm" />
          </div>
        </div>}
        <div className="flex items-center gap-2">
          <button className="rounded-xl border bg-white text-sm font-medium px-3 py-2" style={{ borderColor: '#E4E4E7' }}><Lc.Bell size={14} /></button>
          <A.Avatar name="김민준" dept="컴퓨터공학" size={32} />
        </div>
      </div>

      {isM ? (
        <div>
          {/* Mobile filter chips */}
          <div className="px-4 py-3 flex items-center gap-2 overflow-x-auto hscroll border-b" style={{ borderColor: '#E4E4E7', background: '#FFFFFF' }}>
            {['역할 ▾','전공 ▾','기간 ▾','마감 ▾','인원 ▾'].map(c => (
              <button key={c} className="rounded-full border px-3 py-1.5 text-[12px] font-semibold whitespace-nowrap" style={{ borderColor: '#E4E4E7', color: '#475569' }}>{c}</button>
            ))}
          </div>
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="text-[12px]" style={{ color: '#475569' }}>총 <b style={{ color: '#0F172A' }}>34개</b> 프로젝트</div>
            <div className="flex gap-1 rounded-lg border bg-white" style={{ borderColor: '#E4E4E7' }}>
              {['최신','임박','매칭'].map((s,i)=>(
                <span key={s} className={`text-[11px] font-semibold px-2.5 py-1 ${i===2?'text-white rounded-md':'text-zinc-500'}`} style={i===2?{background:'#4F46E5'}:undefined}>{s}</span>
              ))}
            </div>
          </div>
          <div className="px-4 pb-6 grid grid-cols-1 gap-3">
            {D.PROJECTS.map((p,i) => <ProjectCard key={p.id} project={{...p, match: i===0?87:i===1?72:0}} compact withMatch />)}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-6 px-10 py-6">
          <FilterSidebar />
          <div className="col-span-9">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-bold text-[20px]" style={{ letterSpacing: '-0.02em' }}>프로젝트 탐색</h2>
                <div className="text-[12px] mt-1" style={{ color: '#475569' }}>총 <b style={{ color: '#0F172A' }}>34개</b> 프로젝트 · 매칭 추천 4개</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1 rounded-xl border bg-white p-1" style={{ borderColor: '#E4E4E7' }}>
                  {['최신순','마감 임박순','매칭 추천순'].map((s,i)=>(
                    <span key={s} className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg ${i===2?'text-white':'text-zinc-500'}`} style={i===2?{background:'#4F46E5'}:undefined}>{s}</span>
                  ))}
                </div>
                <button className="rounded-xl border bg-white p-2" style={{ borderColor: '#E4E4E7' }}><Lc.Grid3x3 size={14} /></button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {D.PROJECTS.map((p,i) => <ProjectCard key={p.id} project={{...p, match: i===0?87:i===1?72:0}} withMatch />)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterSidebar() {
  return (
    <div className="col-span-3">
      <div className="rounded-2xl bg-white border p-5 shadow-card sticky top-24" style={{ borderColor: '#E4E4E7' }}>
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-[14px]">필터</div>
          <span className="text-[11px] font-semibold" style={{ color: '#4F46E5' }}>초기화</span>
        </div>
        <FilterGroup title="모집 역할" items={[
          { l: '프론트엔드', n: 12, on: true }, { l: '백엔드', n: 9 },
          { l: '디자이너', n: 14, on: true }, { l: '기획자', n: 7 },
          { l: '마케터', n: 5 }, { l: '데이터', n: 4 },
        ]} type="check" />
        <FilterGroup title="전공 계열" type="majors" />
        <FilterGroup title="참여 기간" items={['1개월','2-3개월','1학기','기타']} type="select" defaultIdx={1} />
        <FilterGroup title="마감일" items={['오늘','이번주','이번달']} type="radio" />
        <FilterGroup title="인원" type="slider" />
      </div>
    </div>
  );
}

function FilterGroup({ title, items, type, defaultIdx }) {
  return (
    <div className="mb-5 pb-5 border-b last:border-b-0 last:mb-0 last:pb-0" style={{ borderColor: '#F1F5F9' }}>
      <div className="text-[11px] font-bold tracking-wide mb-3" style={{ color: '#94A3B8' }}>{title.toUpperCase()}</div>
      {type === 'check' && (
        <div className="grid gap-2">
          {items.map(it => (
            <label key={it.l} className="flex items-center gap-2 text-[13px]" style={{ color: '#475569' }}>
              <span className={`w-4 h-4 rounded border flex items-center justify-center ${it.on ? 'text-white' : ''}`} style={{ background: it.on ? '#4F46E5' : '#FFFFFF', borderColor: it.on ? '#4F46E5' : '#E4E4E7' }}>
                {it.on && <Lc.Check size={11} />}
              </span>
              <span className="flex-1">{it.l}</span>
              <span className="text-[11px]" style={{ color: '#94A3B8' }}>{it.n}</span>
            </label>
          ))}
        </div>
      )}
      {type === 'majors' && (
        <div className="flex flex-wrap gap-1.5">
          {Object.keys(D.MAJOR).map((k, i) => {
            const m = D.MAJOR[k];
            const on = i < 2;
            return (
              <span key={k} className="text-[11px] font-semibold rounded-full px-2.5 py-1 border" style={{
                background: on ? m.bg : '#FFFFFF',
                color: on ? m.text : '#475569',
                borderColor: on ? m.bg : '#E4E4E7',
              }}>{k}</span>
            );
          })}
        </div>
      )}
      {type === 'select' && (
        <div className="rounded-lg border px-3 py-2 text-[13px] flex items-center justify-between bg-white" style={{ borderColor: '#E4E4E7', color: '#0F172A' }}>
          <span>{items[defaultIdx ?? 0]}</span>
          <Lc.ChevronDown size={14} />
        </div>
      )}
      {type === 'radio' && (
        <div className="flex gap-1">
          {items.map((l, i) => (
            <span key={l} className={`text-[12px] font-semibold rounded-lg px-3 py-1.5 ${i===1?'text-white':''}`} style={i===1?{background:'#4F46E5'}:{background:'#F4F4F5', color:'#475569'}}>{l}</span>
          ))}
        </div>
      )}
      {type === 'slider' && (
        <div>
          <div className="flex justify-between text-[11px] mb-2" style={{ color: '#475569' }}>
            <span>2명</span><span className="font-bold" style={{ color: '#4F46E5' }}>3-5명</span><span>8명</span>
          </div>
          <div className="h-1.5 rounded-full relative" style={{ background: '#F1F5F9' }}>
            <div className="absolute h-full rounded-full" style={{ left: '15%', right: '38%', background: '#4F46E5' }} />
            <div className="absolute w-3.5 h-3.5 rounded-full bg-white border-2 -top-1" style={{ left: 'calc(15% - 6px)', borderColor: '#4F46E5' }} />
            <div className="absolute w-3.5 h-3.5 rounded-full bg-white border-2 -top-1" style={{ left: 'calc(62% - 6px)', borderColor: '#4F46E5' }} />
          </div>
        </div>
      )}
    </div>
  );
}

// ============ SCREEN 3: PROJECT DETAIL ============
function ScreenDetail({ device, animKey, projectId }) {
  const isM = device === 'mobile';
  const project = D.PROJECTS.find(p => p.id === projectId) || D.PROJECTS[0];
  const myScore = 76;
  return (
    <div className="tab-enter" key={animKey}>
      <div className={`flex items-center justify-between ${isM ? 'px-4 py-3' : 'px-10 py-4'} border-b bg-white sticky top-0 z-20`} style={{ borderColor: '#E4E4E7' }}>
        <div className="flex items-center gap-3">
          <Lc.ChevronLeft size={20} />
          {!isM && <A.Wordmark />}
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border bg-white text-[12px] font-medium px-3 py-2 flex items-center gap-1" style={{ borderColor: '#E4E4E7' }}><Lc.Bookmark size={13} /> 저장</button>
          {!isM && <button className="rounded-xl border bg-white text-[12px] font-medium px-3 py-2 flex items-center gap-1" style={{ borderColor: '#E4E4E7' }}><Lc.Share2 size={13} /> 공유</button>}
        </div>
      </div>

      <div className={isM ? 'pb-32' : 'grid grid-cols-12 gap-6 px-10 py-6'}>
        <div className={isM ? 'px-4 pt-4' : 'col-span-7'}>
          <A.Placeholder label={project.title} height={isM ? 160 : 220} gradient={['#EEF2FF', '#ECFCCB']} />
          <div className="mt-5">
            <div className="flex items-center gap-2 flex-wrap">
              <A.Chip>{project.category}</A.Chip>
              <A.Chip tone="rose">D-{project.dday} 마감</A.Chip>
            </div>
            <h1 className="font-bold mt-3" style={{ fontSize: isM ? 22 : 28, letterSpacing: '-0.02em' }}>{project.title}</h1>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[12px]">
              {[
                { l: '기간', v: project.period },
                { l: '마감', v: '2026.06.15' },
                { l: '인원', v: `${project.filled}/${project.total}명` },
                { l: '방식', v: project.meeting },
              ].map(x => (
                <div key={x.l} className="rounded-xl border bg-white p-3" style={{ borderColor: '#E4E4E7' }}>
                  <div className="text-[11px]" style={{ color: '#94A3B8' }}>{x.l}</div>
                  <div className="font-semibold mt-1" style={{ color: '#0F172A' }}>{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <A.Section title="프로젝트 목표" className="mt-5">
            <p className="text-[14px] leading-relaxed" style={{ color: '#475569' }}>
              한양대 학생 5,000명을 대상으로 분실물 매칭 서비스를 만듭니다. 사진을 올리면 AI가 유사 분실물과 자동으로 연결하고,
              학교 위치 기반으로 가까운 사람에게 알림이 가요. 1차 MVP는 8주 안에 출시 목표.
              <br /><br />
              디자인은 모바일 우선, 백엔드는 가벼운 Node.js + S3 이미지 저장. 디자인-개발-기획이 함께 사용자 인터뷰부터 같이 진행합니다.
            </p>
          </A.Section>

          <A.Section title="필요한 역할" className="mt-5">
            <div className="grid gap-3">
              {D.ROLES_NEEDED.map((r, i) => (
                <div key={r.role} className="rounded-xl border p-3.5 flex items-start gap-4" style={{ borderColor: '#E4E4E7' }}>
                  <div className="rounded-lg w-10 h-10 flex items-center justify-center font-bold" style={{ background: '#EEF2FF', color: '#4F46E5' }}>0{i+1}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-bold text-[14px]">{r.role}</div>
                      <A.Chip tone={i === 0 ? 'lime' : 'gray'}>{i === 0 ? '모집중' : `0/${r.count}`}</A.Chip>
                    </div>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {r.skills.map(s => <A.Chip key={s} tone="indigo">{s}</A.Chip>)}
                    </div>
                    <div className="mt-2 text-[12px]" style={{ color: '#475569' }}>우대 · {r.pref}</div>
                  </div>
                </div>
              ))}
            </div>
          </A.Section>

          <A.Section title="기술 스택" className="mt-5">
            <div className="flex flex-wrap gap-1.5">
              {['React','TypeScript','Tailwind','Figma','Node.js','PostgreSQL','AWS S3','GitHub'].map(t => <A.Chip key={t}>{t}</A.Chip>)}
            </div>
          </A.Section>

          <A.Section title="팀장 한마디" className="mt-5">
            <p className="text-[14px] leading-relaxed" style={{ color: '#475569' }}>
              "이전에 두 번 사이드 프로젝트를 했는데 한 번도 디자이너랑 같이 못 했어요. 이번엔 디자인부터 같이 시작해서 진짜 출시까지 가보고 싶어요. 한양 분실물 카톡방 보면서 만들고 싶다고 생각한 지 1년 됐어요."
            </p>
          </A.Section>
        </div>

        {/* Right rail (desktop) */}
        {!isM && (
          <div className="col-span-5">
            <div className="sticky top-24 grid gap-4">
              <A.Section>
                <div className="flex items-center gap-3">
                  <A.Avatar name={D.LEADER.name} dept={D.LEADER.dept} size={48} />
                  <div className="flex-1">
                    <div className="font-bold text-[14px]">{D.LEADER.name}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: '#475569' }}>{D.LEADER.school} · {D.LEADER.dept} {D.LEADER.year}학년</div>
                    <div className="text-[11px] mt-0.5" style={{ color: '#94A3B8' }}>이전 프로젝트 {D.LEADER.priorProjects}건</div>
                  </div>
                  <button className="rounded-lg border text-[12px] font-semibold px-3 py-2" style={{ borderColor: '#E4E4E7' }}>프로필</button>
                </div>
              </A.Section>

              <MyMatchPreview score={myScore} animKey={animKey} />

              <button onClick={() => window.__nav && window.__nav.go('compare', { projectId: project.id })} className="rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition" style={{ background: '#4F46E5', height: 56 }}>
                지원하기 <Lc.ArrowRight size={16} />
              </button>
              <div className="text-center text-[11px]" style={{ color: '#94A3B8' }}>지원 후 24시간 내 팀장이 응답합니다</div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile sticky bar */}
      {isM && (
        <div className="fixed left-0 right-0 bottom-0 px-4 py-3 border-t bg-white z-30" style={{ borderColor: '#E4E4E7' }}>
          <div className="rounded-xl border p-3 mb-3 flex items-center gap-3" style={{ borderColor: '#E4E4E7', background: '#FAFAFA' }}>
            <A.DonutScore score={myScore} size={48} stroke={6} animKey={animKey} showLabel={false} delay={400} />
            <div className="flex-1">
              <div className="text-[11px]" style={{ color: '#475569' }}>내 매칭 점수</div>
              <div className="text-[13px] font-bold mt-0.5">상위 32% — 지원 추천</div>
            </div>
            <Lc.ChevronUp size={18} style={{ color: '#94A3B8' }} />
          </div>
          <button onClick={() => window.__nav && window.__nav.go('compare', { projectId: project.id })} className="w-full rounded-xl text-white font-bold flex items-center justify-center gap-2" style={{ background: '#4F46E5', height: 52 }}>
            지원하기 <Lc.ArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

function MyMatchPreview({ score, animKey }) {
  const breakdown = { role: 26, skill: 16, period: 18, interest: 12, folio: 4 };
  return (
    <div className="rounded-2xl bg-white border p-5 shadow-card relative overflow-hidden" style={{ borderColor: '#E4E4E7' }}>
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-50" style={{ background: 'radial-gradient(circle, #ECFCCB 0%, transparent 70%)' }} />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="font-bold text-[14px]">내 매칭 점수 미리보기</div>
          <A.Chip tone="indigo">★ 핵심</A.Chip>
        </div>
        <div className="flex items-center gap-5">
          <A.DonutScore score={score} size={120} stroke={10} animKey={animKey} delay={200} />
          <div className="flex-1">
            <div className="text-[12px]" style={{ color: '#475569' }}>지원하면</div>
            <div className="font-bold text-[20px] mt-0.5" style={{ letterSpacing: '-0.02em' }}>상위 32%</div>
            <div className="text-[12px] mt-1" style={{ color: '#475569' }}>비슷한 점수: 12명 / 38명</div>
          </div>
        </div>
        <div className="mt-5">
          <A.ScoreBars b={breakdown} animKey={animKey} />
        </div>
        <div className="mt-4 rounded-xl p-3 flex items-start gap-2" style={{ background: '#EEF2FF' }}>
          <Lc.Lightbulb size={14} style={{ color: '#4F46E5', marginTop: 2 }} />
          <div>
            <div className="text-[12px] font-bold" style={{ color: '#4F46E5' }}>점수 올리는 방법</div>
            <div className="text-[12px] mt-0.5" style={{ color: '#475569' }}>기술 스택을 더 등록하면 <b>+9점</b>, 포트폴리오 1개 추가하면 <b>+5점</b></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ SCREEN 4: APPLICANT COMPARE ============
function ScreenCompare({ device, animKey, projectId }) {
  const isM = device === 'mobile';
  const [mode, setMode] = useS1('list'); // list | top3
  const project = D.PROJECTS.find(p => p.id === projectId) || D.PROJECTS[0];
  // shuffle applicants based on project id so each project shows different applicants
  const seed = (project.id || 1) - 1;
  const sorted = [...D.APPLICANTS]
    .map((a, i) => ({ ...a, score: Math.max(45, Math.min(98, a.score + ((i + seed) % 5) * 3 - 6)) }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className="tab-enter" key={animKey}>
      <div className={`flex items-center justify-between ${isM ? 'px-4 py-3' : 'px-10 py-4'} border-b bg-white sticky top-0 z-20`} style={{ borderColor: '#E4E4E7' }}>
        <div className="flex items-center gap-3">
          <Lc.ChevronLeft size={20} className="cursor-pointer" onClick={() => window.__nav && window.__nav.go('detail', { projectId: project.id })} />
          <div>
            <div className="font-bold text-[14px]">{project.title}</div>
            <div className="text-[11px]" style={{ color: '#475569' }}>지원자 {sorted.length}명 · 마감 D-{project.dday}</div>
          </div>
        </div>
        {!isM && (
          <div className="flex items-center gap-2">
            <div className="flex gap-1 rounded-xl border bg-white p-1" style={{ borderColor: '#E4E4E7' }}>
              {['점수순','최신순'].map((s,i)=>(
                <span key={s} className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg ${i===0?'text-white':'text-zinc-500'}`} style={i===0?{background:'#0F172A'}:undefined}>{s}</span>
              ))}
            </div>
            <button onClick={() => setMode(mode==='list'?'top3':'list')}
              className={`rounded-xl text-[12px] font-bold px-3 py-2 flex items-center gap-1.5 transition`}
              style={{ background: mode==='top3' ? '#4F46E5' : '#0F172A', color: 'white' }}>
              <Lc.Layers size={13} /> {mode==='top3' ? '리스트로 보기' : 'TOP 3 비교하기'}
            </button>
          </div>
        )}
      </div>

      {!isM && (
        <div className="px-10 py-6">
          {mode === 'list' ? (
            <div className="grid gap-3">
              {sorted.map((a, i) => <ApplicantCard key={a.id} applicant={a} animKey={animKey} index={i} />)}
            </div>
          ) : (
            <Top3Compare applicants={sorted.slice(0,3)} animKey={animKey} />
          )}
        </div>
      )}

      {isM && (
        <div className="px-4 py-4">
          <div className="flex gap-1 rounded-xl border bg-white p-1 mb-3" style={{ borderColor: '#E4E4E7' }}>
            {['점수순','최신순'].map((s,i)=>(
              <span key={s} className={`flex-1 text-center text-[12px] font-semibold px-3 py-1.5 rounded-lg ${i===0?'text-white':'text-zinc-500'}`} style={i===0?{background:'#0F172A'}:undefined}>{s}</span>
            ))}
          </div>
          <div className="text-[11px] mb-3" style={{ color: '#475569' }}>← 거절 / 승인 →로 스와이프</div>
          <ApplicantCardMobile applicant={sorted[0]} animKey={animKey} />
          <div className="mt-3 grid gap-3">
            {sorted.slice(1, 4).map((a, i) => <ApplicantCardMobile key={a.id} applicant={a} animKey={animKey} compact />)}
          </div>
        </div>
      )}
    </div>
  );
}

function ApplicantCard({ applicant: a, animKey, index }) {
  const col = A.scoreColor(a.score);
  return (
    <div
      onClick={() => window.__openApplicant && window.__openApplicant(a)}
      className="rounded-2xl bg-white border p-5 grid grid-cols-12 gap-5 shadow-card hover:shadow-cardHov transition stagger-card cursor-pointer"
      style={{ borderColor: '#E4E4E7', animationDelay: `${index * 50}ms` }}
    >
      <div className="col-span-2 flex flex-col items-center gap-2">
        <A.DonutScore score={a.score} size={108} stroke={10} animKey={animKey} delay={200 + index * 50} />
        <span className="text-[10px] font-bold tracking-wider rounded-full px-2 py-0.5" style={{ background: col.labelBg, color: col.labelText }}>{col.label}</span>
      </div>
      <div className="col-span-5 border-l pl-5" style={{ borderColor: '#F1F5F9' }}>
        <div className="flex items-center gap-2.5">
          <A.Avatar name={a.name} dept={a.dept} size={36} />
          <div>
            <div className="font-bold text-[15px]">{a.name}</div>
            <div className="mt-0.5 flex items-center gap-1.5">
              <A.MajorChip dept={a.dept} year={a.year} size="xs" />
              <span className="text-[11px]" style={{ color: '#94A3B8' }}>{a.school}</span>
            </div>
          </div>
        </div>
        <div className="mt-3 text-[13px]" style={{ color: '#475569' }}>{a.intro}</div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {a.skills.slice(0, 5).map(s => <A.Chip key={s} tone="indigo">{s}</A.Chip>)}
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: '#4F46E5' }}>
          <Lc.Link size={12} /> {a.portfolio}
        </div>
      </div>
      <div className="col-span-3 border-l pl-5" style={{ borderColor: '#F1F5F9' }}>
        <A.ScoreBars b={a.breakdown} animKey={animKey} />
      </div>
      <div className="col-span-2 flex flex-col gap-2 justify-center border-l pl-5" style={{ borderColor: '#F1F5F9' }}>
        <button className="rounded-xl text-white font-semibold text-[12px] py-2 flex items-center justify-center gap-1" style={{ background: '#84CC16' }}>
          <Lc.Check size={13} /> 승인
        </button>
        <button className="rounded-xl border text-[12px] font-semibold py-2 flex items-center justify-center gap-1" style={{ borderColor: '#E4E4E7', color: '#0F172A' }}>
          <Lc.MessageCircle size={12} /> 메시지
        </button>
        <button className="rounded-xl text-[12px] font-semibold py-2 flex items-center justify-center gap-1" style={{ color: '#BE123C', background: '#FFE4E6' }}>
          <Lc.X size={12} /> 거절
        </button>
      </div>
    </div>
  );
}

function ApplicantCardMobile({ applicant: a, animKey, compact }) {
  const col = A.scoreColor(a.score);
  if (compact) {
    return (
      <div onClick={() => window.__openApplicant && window.__openApplicant(a)} className="rounded-2xl bg-white border p-3.5 flex items-center gap-3 shadow-card cursor-pointer" style={{ borderColor: '#E4E4E7' }}>
        <A.DonutScore score={a.score} size={56} stroke={6} animKey={animKey} delay={300} showLabel={false} />
        <div className="flex-1 min-w-0">
          <div className="font-bold text-[13px]">{a.name}</div>
          <div className="mt-1"><A.MajorChip dept={a.dept} year={a.year} size="xs" /></div>
          <div className="mt-1 text-[11px] truncate" style={{ color: '#475569' }}>{a.intro}</div>
        </div>
        <span className="text-[10px] font-bold rounded-full px-2 py-0.5" style={{ background: col.labelBg, color: col.labelText }}>{col.label}</span>
      </div>
    );
  }
  return (
    <div onClick={() => window.__openApplicant && window.__openApplicant(a)} className="rounded-2xl bg-white border p-5 shadow-cardHov stagger-card cursor-pointer" style={{ borderColor: '#E4E4E7' }}>
      <div className="flex items-center justify-center mb-3">
        <A.DonutScore score={a.score} size={120} stroke={10} animKey={animKey} delay={200} />
      </div>
      <div className="flex items-center justify-center mb-3">
        <span className="text-[11px] font-bold tracking-wider rounded-full px-2.5 py-1" style={{ background: col.labelBg, color: col.labelText }}>{col.label}</span>
      </div>
      <div className="flex items-center gap-3 pb-3 border-b" style={{ borderColor: '#F1F5F9' }}>
        <A.Avatar name={a.name} dept={a.dept} size={36} />
        <div>
          <div className="font-bold text-[14px]">{a.name}</div>
          <div className="mt-0.5 flex items-center gap-1.5">
            <A.MajorChip dept={a.dept} year={a.year} size="xs" />
          </div>
        </div>
      </div>
      <div className="mt-3 text-[13px]" style={{ color: '#475569' }}>{a.intro}</div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {a.skills.slice(0, 4).map(s => <A.Chip key={s} tone="indigo">{s}</A.Chip>)}
      </div>
      <div className="mt-4 pt-4 border-t" style={{ borderColor: '#F1F5F9' }}>
        <A.ScoreBars b={a.breakdown} animKey={animKey} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <button className="rounded-xl text-[12px] font-semibold py-2.5 flex items-center justify-center gap-1" style={{ color: '#BE123C', background: '#FFE4E6' }}>거절</button>
        <button className="rounded-xl border text-[12px] font-semibold py-2.5" style={{ borderColor: '#E4E4E7', color: '#0F172A' }}>메시지</button>
        <button className="rounded-xl text-white font-semibold text-[12px] py-2.5" style={{ background: '#84CC16' }}>승인</button>
      </div>
    </div>
  );
}

function Top3Compare({ applicants, animKey }) {
  const rows = A.BREAKDOWN_LABELS;
  const maxByRow = {};
  rows.forEach(r => {
    maxByRow[r.key] = Math.max(...applicants.map(a => a.breakdown[r.key]));
  });
  return (
    <div>
      <div className="text-[12px] mb-3" style={{ color: '#475569' }}>가장 높은 항목은 <span className="rounded px-1.5 py-0.5 font-semibold" style={{ background: '#ECFCCB', color: '#3F6212' }}>Lime</span>으로 표시</div>
      <div className="rounded-2xl bg-white border overflow-hidden shadow-card" style={{ borderColor: '#E4E4E7' }}>
        <div className="grid grid-cols-4">
          <div className="p-5 text-[11px] font-bold tracking-wide" style={{ color: '#94A3B8', background: '#FAFAFA' }}>비교 항목</div>
          {applicants.map((a, i) => (
            <div key={a.id} className="p-5 border-l text-center" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
              <A.DonutScore score={a.score} size={84} stroke={8} animKey={animKey} delay={200 + i * 100} />
              <div className="mt-2 font-bold text-[14px]">{a.name}</div>
              <div className="mt-1 flex items-center justify-center"><A.MajorChip dept={a.dept} year={a.year} size="xs" /></div>
            </div>
          ))}
        </div>
        {rows.map(row => (
          <div key={row.key} className="grid grid-cols-4 border-t" style={{ borderColor: '#F1F5F9' }}>
            <div className="p-4 text-[12px] font-semibold" style={{ color: '#475569' }}>{row.label} <span style={{ color: '#94A3B8' }}>· /{row.max}</span></div>
            {applicants.map(a => {
              const v = a.breakdown[row.key];
              const isMax = v === maxByRow[row.key];
              return (
                <div key={a.id} className="p-4 border-l" style={{ borderColor: '#F1F5F9', background: isMax ? '#ECFCCB' : 'transparent' }}>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: '#F1F5F9' }}>
                      <div className="h-full rounded-full" style={{ width: `${(v/row.max)*100}%`, background: row.color }} />
                    </div>
                    <div className="text-[12px] font-bold tabular-nums" style={{ color: isMax ? '#3F6212' : '#0F172A' }}>{v}</div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
        <div className="grid grid-cols-4 border-t" style={{ borderColor: '#F1F5F9' }}>
          <div className="p-4 text-[12px] font-semibold" style={{ color: '#475569' }}>한 줄 자기소개</div>
          {applicants.map(a => (
            <div key={a.id} className="p-4 border-l text-[12px]" style={{ borderColor: '#F1F5F9', color: '#475569' }}>{a.intro}</div>
          ))}
        </div>
        <div className="grid grid-cols-4 border-t" style={{ borderColor: '#F1F5F9' }}>
          <div className="p-4 text-[12px] font-semibold" style={{ color: '#475569' }}>주요 기술</div>
          {applicants.map(a => (
            <div key={a.id} className="p-4 border-l flex flex-wrap gap-1" style={{ borderColor: '#F1F5F9' }}>
              {a.skills.slice(0,3).map(s => <A.Chip key={s} tone="indigo">{s}</A.Chip>)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between rounded-2xl p-4" style={{ background: 'linear-gradient(90deg, #ECFCCB 0%, #EEF2FF 100%)' }}>
        <div>
          <div className="font-bold text-[15px]">이 조합으로 팀 구성</div>
          <div className="text-[12px] mt-0.5" style={{ color: '#475569' }}>최도윤 · 이수민 · 박서연 — 평균 매칭 86.7점</div>
        </div>
        <button className="rounded-xl text-white font-bold px-5 py-3 flex items-center gap-2" style={{ background: '#4F46E5' }}>
          팀 구성 확정 <Lc.ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

window.CampusScreens = {
  ScreenLanding, ScreenExplore, ScreenDetail, ScreenCompare,
};
// Screens 5-7: Dashboard, Portfolio, Notifications
const A2 = window.CampusAtoms;
const D2 = window.CampusData;
const Lc2 = window.lucideReact || {};
const { useState: useS2 } = React;

// ============ SCREEN 5: DASHBOARD ============
function ScreenDashboard({ device, animKey }) {
  const isM = device === 'mobile';
  return (
    <div className="tab-enter" key={animKey}>
      <div className={`flex items-center justify-between ${isM ? 'px-4 py-3' : 'px-10 py-4'} border-b bg-white sticky top-0 z-20`} style={{ borderColor: '#E4E4E7' }}>
        <div className="flex items-center gap-3">
          {!isM && <A2.Wordmark />}
          {!isM && <span style={{ color: '#E4E4E7' }}>/</span>}
          <span className="font-semibold text-[14px]">캠퍼스 분실물 찾아주는 앱</span>
        </div>
        <div className="flex items-center gap-2">
          {!isM && <button className="rounded-xl border bg-white text-[12px] font-medium px-3 py-2 flex items-center gap-1.5" style={{ borderColor: '#E4E4E7' }}><Lc2.MessageSquare size={13} /> 디스코드 연동</button>}
          <A2.Avatar name="김민준" dept="컴퓨터공학" size={32} />
        </div>
      </div>

      {/* Project header */}
      <div className={`${isM ? 'px-4 py-4' : 'px-10 py-5'} bg-white border-b`} style={{ borderColor: '#E4E4E7' }}>
        <div className={`${isM ? '' : 'flex items-center justify-between'}`}>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <A2.Chip>교내 서비스</A2.Chip>
              <A2.Chip tone="indigo">진행 중</A2.Chip>
            </div>
            <h1 className="font-bold mt-2" style={{ fontSize: isM ? 20 : 24, letterSpacing: '-0.02em' }}>캠퍼스 분실물 찾아주는 앱</h1>
          </div>
          <div className={`${isM ? 'mt-3' : ''} flex items-center gap-4`}>
            <div className="flex -space-x-2">
              {['김민준','이수민','박서연','정현우','한지우'].map((n, i) => (
                <A2.Avatar key={n} name={n} dept={['컴퓨터공학','시각디자인','경영학','통계학','미디어커뮤니케이션'][i]} size={32} />
              ))}
            </div>
            <div className="rounded-xl px-4 py-2 text-center" style={{ background: '#0F172A', color: 'white' }}>
              <div className="text-[10px] opacity-70">마감까지</div>
              <div className="text-[15px] font-bold">D-23</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-[12px] mb-1.5">
            <span style={{ color: '#475569' }}>전체 진행률</span>
            <span className="font-bold">47%</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: '#F1F5F9' }}>
            <div className="h-full rounded-full" style={{ width: '47%', background: 'linear-gradient(90deg, #4F46E5 0%, #84CC16 100%)' }} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={`${isM ? 'px-4' : 'px-10'} border-b bg-white`} style={{ borderColor: '#E4E4E7' }}>
        <div className="flex gap-5 text-[13px] font-semibold">
          {[['칸반', true], ['멤버'], ['자료'], ['일정']].map(([l, on]) => (
            <div key={l} className={`py-3 border-b-2 ${on ? '' : 'border-transparent'}`} style={{ color: on ? '#4F46E5' : '#94A3B8', borderColor: on ? '#4F46E5' : 'transparent' }}>{l}</div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className={`${isM ? '' : 'grid grid-cols-12 gap-5 px-10 py-5'}`}>
        <div className={isM ? '' : 'col-span-9'}>
          {isM ? (
            <div className="px-4 py-4">
              <div className="flex gap-2 overflow-x-auto hscroll mb-3">
                {[['To Do', 5, true], ['In Progress', 3], ['Done', 8]].map(([l, n, on]) => (
                  <div key={l} className="rounded-xl px-3 py-2 text-[12px] font-semibold whitespace-nowrap" style={{ background: on ? '#0F172A' : '#F4F4F5', color: on ? 'white' : '#475569' }}>
                    {l} <span className="ml-1 opacity-60">{n}</span>
                  </div>
                ))}
              </div>
              <div className="text-[11px] mb-2" style={{ color: '#475569' }}>← 가로로 스와이프해서 다른 열 보기</div>
              <div className="grid gap-2.5">
                {D2.TASKS.todo.map(t => <TaskCard key={t.id} t={t} />)}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              <KanbanColumn title="To Do" count={D2.TASKS.todo.length} tone="gray" tasks={D2.TASKS.todo} />
              <KanbanColumn title="In Progress" count={D2.TASKS.doing.length} tone="indigo" tasks={D2.TASKS.doing} />
              <KanbanColumn title="Done" count={D2.TASKS.done.length} tone="lime" tasks={D2.TASKS.done} done />
            </div>
          )}
        </div>

        {!isM && (
          <div className="col-span-3 grid gap-4">
            <A2.Section title="이번 주 마감">
              <div className="grid gap-2.5">
                {[
                  { l: '로그인 API 구현', d: 'D-2', urgent: true, owner: '정현우', dept: '통계학' },
                  { l: '로고 시안 v2', d: '내일', urgent: true, owner: '이수민', dept: '시각디자인' },
                  { l: '발표 영상 편집', d: 'D-4', owner: '한지우', dept: '미디어커뮤니케이션' },
                  { l: '인터뷰 스크립트', d: 'D-7', owner: '박서연', dept: '경영학' },
                ].map(t => (
                  <div key={t.l} className="flex items-center gap-2.5 rounded-lg p-2 border" style={{ borderColor: '#F1F5F9' }}>
                    <A2.Avatar name={t.owner} dept={t.dept} size={26} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] font-semibold truncate">{t.l}</div>
                      <div className="text-[10px]" style={{ color: '#94A3B8' }}>{t.owner}</div>
                    </div>
                    <span className="text-[10px] font-bold rounded-full px-2 py-0.5" style={{ background: t.urgent ? '#FFE4E6' : '#F4F4F5', color: t.urgent ? '#BE123C' : '#475569' }}>{t.d}</span>
                  </div>
                ))}
              </div>
            </A2.Section>
            <A2.Section title="최근 활동">
              <div className="grid gap-3 text-[12px]">
                {[
                  { who: '박서연', dept: '경영학', what: '[로고 시안] Task를 완료했어요', t: '5분 전' },
                  { who: '정현우', dept: '통계학', what: '[로그인 API] 댓글을 남겼어요', t: '23분 전' },
                  { who: '한지우', dept: '미디어커뮤니케이션', what: '[발표 영상] 자료를 업로드했어요', t: '1시간 전' },
                  { who: '이수민', dept: '시각디자인', what: '브랜드 컬러를 확정했어요', t: '3시간 전' },
                ].map((a, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <A2.Avatar name={a.who} dept={a.dept} size={26} />
                    <div className="flex-1">
                      <div style={{ color: '#475569' }}><b style={{ color: '#0F172A' }}>{a.who}</b>님이 {a.what}</div>
                      <div className="mt-0.5 text-[10px]" style={{ color: '#94A3B8' }}>{a.t}</div>
                    </div>
                  </div>
                ))}
              </div>
            </A2.Section>
            <A2.Section title="알림">
              <div className="flex items-center justify-between rounded-xl p-3" style={{ background: '#F4F4F5' }}>
                <div className="flex items-center gap-2.5">
                  <Lc2.MessageSquare size={16} style={{ color: '#5865F2' }} />
                  <div>
                    <div className="text-[12px] font-semibold">디스코드 알림</div>
                    <div className="text-[10px]" style={{ color: '#94A3B8' }}>#campus-link-team</div>
                  </div>
                </div>
                <div className="w-9 h-5 rounded-full p-0.5" style={{ background: '#4F46E5' }}>
                  <div className="w-4 h-4 rounded-full bg-white ml-auto" />
                </div>
              </div>
            </A2.Section>
          </div>
        )}
      </div>
    </div>
  );
}

function KanbanColumn({ title, count, tone, tasks, done }) {
  const tones = {
    gray: { dot: '#94A3B8', bg: '#F4F4F5', text: '#475569' },
    indigo: { dot: '#4F46E5', bg: '#EEF2FF', text: '#4F46E5' },
    lime: { dot: '#84CC16', bg: '#ECFCCB', text: '#3F6212' },
  };
  const t = tones[tone];
  return (
    <div className="rounded-2xl p-3" style={{ background: '#FAFAFA', border: '1px solid #E4E4E7' }}>
      <div className="flex items-center justify-between mb-3 px-1.5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ background: t.dot }} />
          <span className="text-[12px] font-bold">{title}</span>
          <span className="text-[11px] font-bold rounded-full px-1.5" style={{ background: t.bg, color: t.text }}>{count}</span>
        </div>
        <Lc2.Plus size={14} style={{ color: '#94A3B8' }} />
      </div>
      <div className="grid gap-2.5">
        {tasks.map(task => <TaskCard key={task.id} t={task} done={done} />)}
        <div className="rounded-xl border-2 border-dashed text-[12px] font-semibold py-2.5 text-center" style={{ borderColor: '#E4E4E7', color: '#94A3B8' }}>+ Task 추가</div>
      </div>
    </div>
  );
}

function TaskCard({ t, done }) {
  const m = D2.MAJOR[t.major];
  const dept = { '컴공/SW': '컴퓨터공학', '디자인': '시각디자인', '경영/기획': '경영학', '미디어/홍보': '미디어커뮤니케이션', '통계/데이터': '통계학' }[t.major];
  return (
    <div onClick={() => window.__openTask && window.__openTask(t)} className="rounded-xl bg-white p-3 border shadow-card hover:shadow-cardHov transition cursor-pointer" style={{ borderColor: '#E4E4E7', opacity: done ? 0.7 : 1 }}>
      <div className="flex items-start justify-between gap-2">
        <div className={`text-[13px] font-bold leading-snug ${done ? 'line-through' : ''}`} style={{ color: done ? '#94A3B8' : '#0F172A' }}>{t.title}</div>
        {t.tag && <A2.Chip>{t.tag}</A2.Chip>}
      </div>
      <div className="text-[11px] mt-1" style={{ color: '#94A3B8' }}>{t.desc}</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <A2.Avatar name={t.owner} dept={dept} size={22} />
          <span className="text-[11px] font-medium" style={{ color: '#475569' }}>{t.owner}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]" style={{ color: '#94A3B8' }}>
          {t.files > 0 && <span className="flex items-center gap-0.5"><Lc2.Paperclip size={11} />{t.files}</span>}
          {t.comments > 0 && <span className="flex items-center gap-0.5"><Lc2.MessageCircle size={11} />{t.comments}</span>}
          <span className="font-bold rounded-full px-1.5 py-0.5" style={{ background: t.urgent ? '#FFE4E6' : '#F4F4F5', color: t.urgent ? '#BE123C' : '#475569' }}>{t.due}</span>
        </div>
      </div>
    </div>
  );
}

// ============ SCREEN 6: PORTFOLIO ============
function ScreenPortfolio({ device, animKey }) {
  const isM = device === 'mobile';
  return (
    <div className="tab-enter relative" key={animKey} style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)', minHeight: '100%' }}>
      {/* Confetti */}
      {window.__ML_SHOW_CONFETTI !== false && (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => {
          const colors = ['#4F46E5','#84CC16','#EC4899','#F97316','#14B8A6','#F59E0B'];
          const shape = i % 3;
          return (
            <span key={i} className="absolute confetti-piece" style={{
              left: `${(i * 4.3) % 100}%`,
              top: `${(i % 5) * 12}%`,
              width: 8, height: 8,
              background: colors[i % colors.length],
              borderRadius: shape === 0 ? '50%' : shape === 1 ? '0' : '2px',
              animationDelay: `${(i * 0.15) % 2.4}s`,
            }} />
          );
        })}
      </div>
      )}

      <div className={`relative ${isM ? 'px-4 py-5' : 'px-10 py-6'}`}>
        <div className={`flex items-center justify-between ${isM ? 'mb-5' : 'mb-6'}`}>
          {!isM && <A2.Wordmark />}
          <div className="flex gap-2 ml-auto">
            <button className="rounded-xl border bg-white text-[12px] font-medium px-3 py-2 flex items-center gap-1.5" style={{ borderColor: '#E4E4E7' }}><Lc2.Share2 size={13} /> 링크 복사</button>
          </div>
        </div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-3" style={{ background: '#ECFCCB' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#84CC16' }} />
            <span className="text-[12px] font-bold" style={{ color: '#3F6212' }}>PROJECT COMPLETE</span>
          </div>
          <h1 className="font-bold" style={{ fontSize: isM ? 24 : 36, letterSpacing: '-0.025em' }}>프로젝트 완료를 축하해요!</h1>
          <p className="mt-2 text-[14px]" style={{ color: '#475569' }}>10주의 협업이 한 장의 포트폴리오로 자동 정리됐어요</p>
        </div>

        {/* PDF-like card */}
        <div className={`mx-auto rounded-3xl bg-white shadow-cardHov border overflow-hidden`} style={{ borderColor: '#E4E4E7', maxWidth: isM ? '100%' : 800 }}>
          <div className={`${isM ? 'p-5' : 'p-8'}`}>
            <div className="flex items-start justify-between pb-5 border-b" style={{ borderColor: '#F1F5F9' }}>
              <div>
                <A2.Wordmark size="md" />
                <div className="mt-3 flex items-center gap-3">
                  <A2.Avatar name="최도윤" dept="컴퓨터공학" size={48} />
                  <div>
                    <div className="font-bold text-[18px]">최도윤</div>
                    <div className="text-[12px]" style={{ color: '#475569' }}>한양대 · 컴퓨터공학 3학년</div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold tracking-wider" style={{ color: '#94A3B8' }}>PORTFOLIO</div>
                <div className="text-[11px] mt-1" style={{ color: '#475569' }}>2026.07.14 생성</div>
                <div className="text-[10px] mt-0.5 font-mono" style={{ color: '#94A3B8' }}>#ML-2026-0714-892</div>
              </div>
            </div>

            <div className="mt-5">
              <A2.Placeholder label="캠퍼스 분실물 찾아주는 앱" height={isM ? 140 : 180} gradient={['#EEF2FF', '#ECFCCB']} />
            </div>

            <div className={`mt-5 grid ${isM ? 'grid-cols-2' : 'grid-cols-4'} gap-3`}>
              <InfoTile label="내 역할" big="프론트엔드" small="개발자" icon={<Lc2.Code size={14} />} />
              <InfoTile label="기여도" custom={
                <div className="flex items-center gap-2">
                  <A2.DonutScore score={28} size={48} stroke={6} animKey={animKey} delay={400} showLabel={false} />
                  <div className="text-[10px]" style={{ color: '#475569' }}>매칭<br/>알고리즘 UI</div>
                </div>
              } />
              <InfoTile label="기간" big="10주" small="2026.05 - 07" icon={<Lc2.Calendar size={14} />} />
              <InfoTile label="팀 평점" big="4.7" small="/ 5.0" icon={<Lc2.Star size={14} />} />
            </div>

            <div className="mt-5">
              <SectionLabel>사용 기술</SectionLabel>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['React','TypeScript','Tailwind','Figma','Git','Vercel'].map(t => <A2.Chip key={t} tone="indigo">{t}</A2.Chip>)}
              </div>
            </div>

            <div className="mt-5">
              <SectionLabel>팀 구성 — 5명</SectionLabel>
              <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
                {[
                  { n: '최도윤', d: '컴퓨터공학', r: 'FE 개발' },
                  { n: '정현우', d: '통계학',     r: 'BE 개발' },
                  { n: '이수민', d: '시각디자인', r: '디자인' },
                  { n: '박서연', d: '경영학',     r: 'PM' },
                  { n: '한지우', d: '미디어커뮤니케이션', r: '콘텐츠' },
                ].map(p => (
                  <div key={p.n} className="text-center">
                    <A2.Avatar name={p.n} dept={p.d} size={48} />
                    <div className="text-[12px] font-bold mt-2">{p.n}</div>
                    <div className="text-[10px]" style={{ color: '#94A3B8' }}>{p.r}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center text-[11px]" style={{ color: '#475569' }}>
                전공 다양성 <b style={{ color: '#0F172A' }}>5/5</b> — 5개 계열 모두 참여
              </div>
            </div>

            <div className="mt-5">
              <SectionLabel>링크</SectionLabel>
              <div className={`mt-2 grid ${isM ? 'grid-cols-1 gap-2' : 'grid-cols-3 gap-2.5'}`}>
                {[
                  { ico: <Lc2.Github size={14} />, l: 'GitHub', v: 'github.com/lostfound-app' },
                  { ico: <Lc2.Globe size={14} />,  l: '배포 URL', v: 'lostfound.hanyang.kr' },
                  { ico: <Lc2.Figma size={14} />,  l: 'Figma', v: 'figma.com/file/Tn29x' },
                ].map(L => (
                  <div key={L.l} className="rounded-xl border p-3 flex items-center gap-2.5" style={{ borderColor: '#E4E4E7' }}>
                    <div className="rounded-md w-7 h-7 flex items-center justify-center" style={{ background: '#F4F4F5' }}>{L.ico}</div>
                    <div className="min-w-0">
                      <div className="text-[11px]" style={{ color: '#94A3B8' }}>{L.l}</div>
                      <div className="text-[12px] font-semibold truncate">{L.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <SectionLabel>동료 평가 — 4.7 / 5.0</SectionLabel>
              <div className="mt-3 grid gap-2">
                {[
                  { who: '박서연', dept: '경영학', text: '커뮤니케이션이 정말 좋았어요. 막혔을 때 항상 빠르게 해결책을 가져오는 분.' },
                  { who: '이수민', dept: '시각디자인', text: '디자인 의도를 정확히 구현해줘서 작업이 정말 편했어요.' },
                ].map((c, i) => (
                  <div key={i} className="rounded-xl p-3 flex items-start gap-2.5" style={{ background: '#FAFAFA' }}>
                    <A2.Avatar name={c.who} dept={c.dept} size={28} />
                    <div className="flex-1">
                      <div className="text-[12px] font-semibold">{c.who}</div>
                      <div className="text-[12px] mt-1" style={{ color: '#475569' }}>"{c.text}"</div>
                    </div>
                    <div className="flex gap-0.5" style={{ color: '#F59E0B' }}>
                      {[1,2,3,4,5].map(s => <Lc2.Star key={s} size={11} fill="#F59E0B" />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-6 mx-auto ${isM ? '' : 'max-w-[800px]'} grid ${isM ? 'grid-cols-1 gap-2.5' : 'grid-cols-3 gap-3'}`}>
          <button className="rounded-xl text-white font-bold py-3.5 flex items-center justify-center gap-2" style={{ background: '#4F46E5' }}>
            <Lc2.Download size={15} /> PDF로 내보내기 <Lc2.Lock size={11} style={{ opacity: 0.7 }} />
          </button>
          <button className="rounded-xl border bg-white font-semibold py-3.5 flex items-center justify-center gap-2" style={{ borderColor: '#E4E4E7' }}>
            <Lc2.Link size={14} /> 공유 링크 복사
          </button>
          <button className="rounded-xl font-semibold py-3.5 flex items-center justify-center gap-2" style={{ background: '#ECFCCB', color: '#3F6212' }}>
            <Lc2.Compass size={14} /> 다음 프로젝트
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div className="text-[10px] font-bold tracking-wider" style={{ color: '#94A3B8' }}>{children}</div>;
}
function InfoTile({ label, big, small, icon, custom }) {
  return (
    <div className="rounded-xl border p-3" style={{ borderColor: '#E4E4E7' }}>
      <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-wide" style={{ color: '#94A3B8' }}>
        {icon}{label.toUpperCase()}
      </div>
      {custom ? <div className="mt-2">{custom}</div> : (
        <div className="mt-2">
          <div className="font-bold text-[16px]" style={{ letterSpacing: '-0.02em' }}>{big}</div>
          <div className="text-[11px]" style={{ color: '#475569' }}>{small}</div>
        </div>
      )}
    </div>
  );
}

// ============ SCREEN 7: NOTIFICATIONS (mobile-only feature) ============
function ScreenNotifWeb() {
  return (
    <div className="tab-enter h-full flex flex-col items-center justify-center px-12 py-12" style={{ background: '#FAFAFA' }}>
      <div className="rounded-3xl bg-white border p-10 max-w-md text-center shadow-card" style={{ borderColor: '#E4E4E7' }}>
        <div className="text-[40px] mb-3">📱</div>
        <h2 className="font-bold text-[22px]" style={{ letterSpacing: '-0.02em' }}>모바일 전용 화면입니다</h2>
        <p className="mt-3 text-[14px]" style={{ color: '#475569' }}>
          알림은 푸시 중심이라 모바일 앱에서 가장 빛나요. 오른쪽 iPhone 프레임에서 풀스크린으로 미리보기 하세요.
        </p>
        <div className="mt-6 flex items-center justify-center gap-2 text-[12px] font-semibold" style={{ color: '#4F46E5' }}>
          <span>iOS · Android · 카카오톡 알림 연동</span>
        </div>
      </div>
    </div>
  );
}

function ScreenNotifMobile({ animKey }) {
  return (
    <div className="tab-enter pb-2" key={animKey}>
      <div className="px-5 pt-4 pb-3 bg-white border-b" style={{ borderColor: '#E4E4E7' }}>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-[24px]" style={{ letterSpacing: '-0.02em' }}>알림</h1>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold rounded-full text-white px-2 py-0.5" style={{ background: '#F43F5E' }}>3 NEW</span>
            <Lc2.Settings size={18} style={{ color: '#94A3B8' }} />
          </div>
        </div>
      </div>

      <div className="px-5 pt-5">
        <div className="text-[11px] font-bold tracking-wider mb-3" style={{ color: '#94A3B8' }}>오늘</div>
        <div className="grid gap-2.5">
          {D2.NOTIFS_TODAY.map((n, i) => <NotifCard key={i} n={n} idx={i} animKey={animKey} />)}
        </div>
      </div>
      <div className="px-5 pt-5">
        <div className="text-[11px] font-bold tracking-wider mb-3" style={{ color: '#94A3B8' }}>이번 주</div>
        <div className="grid gap-2.5">
          {D2.NOTIFS_WEEK.map((n, i) => <NotifCard key={i} n={n} idx={i + 3} animKey={animKey} dim />)}
        </div>
      </div>
      <div className="h-3" />
    </div>
  );
}

function NotifCard({ n, idx, animKey, dim }) {
  return (
    <div className="rounded-2xl bg-white border shadow-card overflow-hidden flex" style={{ borderColor: '#E4E4E7' }}>
      <div className="anim-bar-y w-1" style={{ background: n.color, animationDelay: `${idx * 80}ms` }} />
      <div className="flex-1 p-3.5">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[14px]">{n.icon}</span>
          <span className="text-[12px] font-bold" style={{ color: n.color }}>{n.title}</span>
          <span className="ml-auto text-[10px]" style={{ color: '#94A3B8' }}>{n.time}</span>
        </div>
        <div className="text-[13px] leading-snug" style={{ color: dim ? '#475569' : '#0F172A' }}>{n.body}</div>
        <div className="mt-3 flex items-center justify-between">
          <button className="text-[11px] font-bold rounded-lg px-3 py-1.5" style={{ background: '#F4F4F5', color: '#0F172A' }}>{n.cta}</button>
          <Lc2.MoreHorizontal size={14} style={{ color: '#94A3B8' }} />
        </div>
      </div>
    </div>
  );
}

window.CampusScreens2 = {
  ScreenDashboard, ScreenPortfolio, ScreenNotifWeb, ScreenNotifMobile,
};
// Modals + My Page
const A3 = window.CampusAtoms;
const D3 = window.CampusData;
const Lc3 = window.lucideReact || {};
const { useState: useS3, useEffect: useE3 } = React;

// ============ APPLICANT PROFILE MODAL ============
function ApplicantModal({ applicant, onClose, animKey }) {
  if (!applicant) return null;
  const a = applicant;
  const col = A3.scoreColor(a.score);
  const [k, setK] = useS3(0);
  useE3(() => { setK(x => x + 1); }, [a.id]);
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: 'rgba(15,23,42,0.55)' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="rounded-3xl bg-white shadow-cardHov overflow-hidden w-full max-w-[640px] max-h-[88vh] overflow-y-auto" style={{ border: '1px solid #E4E4E7' }}>
        <div className="p-6 pb-4 flex items-start justify-between" style={{ background: 'linear-gradient(135deg, #EEF2FF 0%, #ECFCCB 100%)' }}>
          <div className="flex items-center gap-4">
            <A3.Avatar name={a.name} dept={a.dept} size={64} />
            <div>
              <div className="font-bold text-[22px]" style={{ letterSpacing: '-0.02em' }}>{a.name}</div>
              <div className="mt-1.5 flex items-center gap-2">
                <A3.MajorChip dept={a.dept} year={a.year} size="xs" />
                <span className="text-[12px]" style={{ color: '#475569' }}>{a.school}</span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="rounded-lg w-8 h-8 flex items-center justify-center bg-white/60"><Lc3.X size={16} /></button>
        </div>

        <div className="p-6 grid grid-cols-12 gap-5">
          <div className="col-span-5 flex flex-col items-center text-center">
            <A3.DonutScore score={a.score} size={140} stroke={12} animKey={k} delay={150} />
            <span className="mt-2 text-[10px] font-bold tracking-wider rounded-full px-2.5 py-1" style={{ background: col.labelBg, color: col.labelText }}>{col.label}</span>
            <div className="mt-3 text-[12px]" style={{ color: '#475569' }}>희망 역할</div>
            <div className="font-bold text-[14px]">{a.role}</div>
          </div>
          <div className="col-span-7">
            <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>점수 상세</div>
            <A3.ScoreBars b={a.breakdown} animKey={k} />
          </div>
        </div>

        <div className="px-6 pb-6 grid gap-4">
          <div>
            <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>한 줄 자기소개</div>
            <div className="text-[13px] rounded-xl p-3" style={{ background: '#FAFAFA', color: '#475569' }}>"{a.intro}"</div>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>주요 기술</div>
            <div className="flex flex-wrap gap-1.5">{a.skills.map(s => <A3.Chip key={s} tone="indigo">{s}</A3.Chip>)}</div>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>포트폴리오 / 링크</div>
            <div className="rounded-xl border p-3 flex items-center gap-2.5" style={{ borderColor: '#E4E4E7' }}>
              <Lc3.Link size={14} style={{ color: '#4F46E5' }} />
              <span className="text-[13px] font-semibold" style={{ color: '#4F46E5' }}>{a.portfolio}</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>이전 프로젝트</div>
            <div className="grid gap-2">
              {[
                { t: '교내 카페 줄서기 IoT 솔루션', r: '프론트엔드', s: 4.6 },
                { t: '학생 멘탈 헬스 챗봇', r: '디자인 보조', s: 4.8 },
              ].map(p => (
                <div key={p.t} className="rounded-xl border p-3 flex items-center justify-between" style={{ borderColor: '#E4E4E7' }}>
                  <div>
                    <div className="text-[13px] font-semibold">{p.t}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: '#94A3B8' }}>{p.r}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[12px] font-bold" style={{ color: '#F59E0B' }}>
                    <Lc3.Star size={12} fill="#F59E0B" /> {p.s}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 p-4 border-t" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
          <button onClick={onClose} className="rounded-xl text-[12px] font-semibold py-3" style={{ color: '#BE123C', background: '#FFE4E6' }}>거절</button>
          <button className="rounded-xl border text-[12px] font-semibold py-3" style={{ borderColor: '#E4E4E7' }}>메시지</button>
          <button className="rounded-xl text-white font-bold text-[12px] py-3" style={{ background: '#84CC16' }}>팀에 추가</button>
        </div>
      </div>
    </div>
  );
}

// ============ TASK DETAIL MODAL ============
function TaskModal({ task, onClose }) {
  if (!task) return null;
  const t = task;
  const dept = { '컴공/SW': '컴퓨터공학', '디자인': '시각디자인', '경영/기획': '경영학', '미디어/홍보': '미디어커뮤니케이션', '통계/데이터': '통계학' }[t.major] || '컴퓨터공학';
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: 'rgba(15,23,42,0.55)' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="rounded-3xl bg-white shadow-cardHov overflow-hidden w-full max-w-[560px] max-h-[88vh] overflow-y-auto" style={{ border: '1px solid #E4E4E7' }}>
        <div className="p-5 flex items-start justify-between border-b" style={{ borderColor: '#F1F5F9' }}>
          <div>
            <div className="flex items-center gap-2">
              {t.tag && <A3.Chip>{t.tag}</A3.Chip>}
              <span className="text-[11px] font-bold rounded-full px-2 py-0.5" style={{ background: t.urgent ? '#FFE4E6' : '#F4F4F5', color: t.urgent ? '#BE123C' : '#475569' }}>{t.due}</span>
            </div>
            <div className="font-bold text-[18px] mt-2" style={{ letterSpacing: '-0.02em' }}>{t.title}</div>
          </div>
          <button onClick={onClose} className="rounded-lg w-8 h-8 flex items-center justify-center"><Lc3.X size={16} /></button>
        </div>
        <div className="p-5 grid gap-4">
          <div className="text-[13px] leading-relaxed" style={{ color: '#475569' }}>{t.desc}</div>
          <div className="grid grid-cols-3 gap-2 text-[12px]">
            <div className="rounded-xl border p-3" style={{ borderColor: '#E4E4E7' }}>
              <div className="text-[10px]" style={{ color: '#94A3B8' }}>담당자</div>
              <div className="mt-1.5 flex items-center gap-2">
                <A3.Avatar name={t.owner} dept={dept} size={22} />
                <span className="font-semibold">{t.owner}</span>
              </div>
            </div>
            <div className="rounded-xl border p-3" style={{ borderColor: '#E4E4E7' }}>
              <div className="text-[10px]" style={{ color: '#94A3B8' }}>마감</div>
              <div className="mt-1.5 font-bold">{t.due}</div>
            </div>
            <div className="rounded-xl border p-3" style={{ borderColor: '#E4E4E7' }}>
              <div className="text-[10px]" style={{ color: '#94A3B8' }}>전공</div>
              <div className="mt-1.5"><A3.MajorChip dept={dept} size="xs" /></div>
            </div>
          </div>
          {t.files > 0 && (
            <div>
              <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>첨부 자료 · {t.files}</div>
              <div className="grid gap-1.5">
                {Array.from({ length: Math.min(t.files, 3) }).map((_, i) => (
                  <div key={i} className="rounded-lg border p-2.5 flex items-center gap-2 text-[12px]" style={{ borderColor: '#E4E4E7' }}>
                    <Lc3.Paperclip size={12} style={{ color: '#94A3B8' }} />
                    <span className="font-semibold flex-1">{['시안_v2.fig', '요약본.pdf', 'screenshot.png', 'notes.md'][i]}</span>
                    <span style={{ color: '#94A3B8' }}>{['1.2MB','340KB','2.1MB','8KB'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {t.comments > 0 && (
            <div>
              <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>댓글 · {t.comments}</div>
              <div className="grid gap-2">
                {[
                  { who: '박서연', d: '경영학', txt: '히어로 카피 한 줄 더 짧게 갈 수 있을까요?', t: '15분 전' },
                  { who: '정현우', d: '통계학', txt: '확인했어요, 오늘 안에 PR 올릴게요!',     t: '1시간 전' },
                ].map((c, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <A3.Avatar name={c.who} dept={c.d} size={26} />
                    <div className="flex-1 rounded-xl p-2.5" style={{ background: '#FAFAFA' }}>
                      <div className="flex items-center gap-2 text-[11px]"><b>{c.who}</b><span style={{ color: '#94A3B8' }}>{c.t}</span></div>
                      <div className="text-[12px] mt-1" style={{ color: '#475569' }}>{c.txt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 border-t" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
          <button className="rounded-xl border text-[12px] font-semibold py-3" style={{ borderColor: '#E4E4E7' }}>댓글 달기</button>
          <button className="rounded-xl text-white font-bold text-[12px] py-3" style={{ background: '#4F46E5' }}>완료 처리</button>
        </div>
      </div>
    </div>
  );
}

// ============ MY PAGE ============
function ScreenMyPage({ device, animKey }) {
  const isM = device === 'mobile';
  const me = { name: '김민준', dept: '컴퓨터공학', year: 3, school: '한양대', mail: 'demo@campus-link.example', skills: ['React','Spring','MySQL','Git','Figma'], interests: ['교내 서비스','AI/ML','헬스케어'] };
  return (
    <div className="tab-enter" key={animKey}>
      {/* Header banner */}
      <div className={`${isM ? 'px-4 pt-5 pb-16' : 'px-10 pt-8 pb-20'} relative overflow-hidden`} style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 60%, #84CC16 130%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 0, transparent 50%)' }} />
        <div className="relative flex items-center justify-between">
          {!isM && <A3.Wordmark size="md" />}
          <span className="text-[11px] font-bold tracking-wider text-white/70">MY PAGE</span>
          <div className="flex gap-2">
            <button className="rounded-lg bg-white/15 text-white p-2"><Lc3.Settings size={14} /></button>
            <button className="rounded-lg bg-white/15 text-white p-2"><Lc3.Bell size={14} /></button>
          </div>
        </div>
      </div>

      <div className={`${isM ? 'px-4' : 'px-10'} -mt-12 relative z-10`}>
        <div className="rounded-3xl bg-white border p-6 shadow-cardHov" style={{ borderColor: '#E4E4E7' }}>
          <div className={`${isM ? 'flex flex-col items-center text-center gap-3' : 'flex items-center gap-5'}`}>
            <A3.Avatar name={me.name} dept={me.dept} size={isM ? 80 : 96} />
            <div className={isM ? '' : 'flex-1'}>
              <div className="font-bold text-[22px]" style={{ letterSpacing: '-0.02em' }}>{me.name}</div>
              <div className="mt-1.5 flex items-center gap-2 flex-wrap justify-center">
                <A3.MajorChip dept={me.dept} year={me.year} size="xs" />
                <span className="text-[12px]" style={{ color: '#475569' }}>{me.school}</span>
              </div>
              <div className="mt-1 text-[12px]" style={{ color: '#94A3B8' }}>{me.mail}</div>
            </div>
            {!isM && <button className="rounded-xl border text-[12px] font-semibold px-4 py-2" style={{ borderColor: '#E4E4E7' }}>프로필 수정</button>}
          </div>

          <div className={`mt-5 grid ${isM ? 'grid-cols-3' : 'grid-cols-4'} gap-3 pt-5 border-t`} style={{ borderColor: '#F1F5F9' }}>
            {[
              { l: '진행 중', v: 2, c: '#4F46E5' },
              { l: '완료',    v: 5, c: '#84CC16' },
              { l: '평균 ★',  v: '4.7', c: '#F59E0B' },
              !isM && { l: '평균 매칭', v: '82', c: '#EC4899' },
            ].filter(Boolean).map(s => (
              <div key={s.l} className="text-center rounded-xl p-3" style={{ background: '#FAFAFA' }}>
                <div className="text-[11px]" style={{ color: '#94A3B8' }}>{s.l}</div>
                <div className="font-bold text-[22px] mt-1 tabular-nums" style={{ color: s.c, letterSpacing: '-0.02em' }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${isM ? 'px-4 py-5' : 'px-10 py-8 grid grid-cols-12 gap-5'}`}>
        <div className={isM ? '' : 'col-span-7 grid gap-5'}>
          <A3.Section title="진행 중인 프로젝트" action={<span className="text-[11px] font-semibold" style={{ color: '#4F46E5' }}>전체 보기</span>}>
            <div className="grid gap-3">
              {D3.PROJECTS.slice(0, 2).map(p => (
                <div key={p.id} className="rounded-xl border p-3.5 flex items-center gap-3 hover:shadow-card cursor-pointer" style={{ borderColor: '#E4E4E7' }}
                  onClick={() => window.__nav && window.__nav.go('dashboard', { projectId: p.id })}>
                  <A3.Placeholder height={56} gradient={['#EEF2FF', '#ECFCCB']} className="!w-16 !shrink-0 !p-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-bold truncate">{p.title}</div>
                    <div className="mt-1 flex items-center gap-2 text-[11px]" style={{ color: '#475569' }}>
                      <span>{p.school}</span><span>·</span><span>{p.filled}/{p.total}명</span>
                    </div>
                    <div className="mt-2 h-1 rounded-full" style={{ background: '#F1F5F9' }}>
                      <div className="h-full rounded-full" style={{ width: `${(p.filled/p.total)*100}%`, background: '#4F46E5' }} />
                    </div>
                  </div>
                  <span className="text-[11px] font-bold rounded-full px-2 py-0.5" style={{ background: p.dday <= 7 ? '#FFE4E6' : '#F4F4F5', color: p.dday <= 7 ? '#BE123C' : '#475569' }}>D-{p.dday}</span>
                </div>
              ))}
            </div>
          </A3.Section>

          <A3.Section title="완료한 프로젝트 · 포트폴리오" className={isM ? 'mt-5' : ''}>
            <div className="grid gap-3">
              {[
                { t: '학생 멘탈 헬스 챗봇', r: '프론트엔드', d: '2025.09–12', s: 4.8 },
                { t: '교내 카페 줄서기 IoT', r: '프론트엔드 보조', d: '2025.06–08', s: 4.6 },
                { t: '광운대 동아리 매칭', r: '풀스택', d: '2024.12–2025.02', s: 4.5 },
              ].map((p, i) => (
                <div key={i} className="rounded-xl border p-3.5 flex items-center gap-3 cursor-pointer hover:shadow-card" style={{ borderColor: '#E4E4E7' }}
                  onClick={() => window.__nav && window.__nav.go('portfolio')}>
                  <div className="rounded-lg w-10 h-10 flex items-center justify-center font-bold text-[12px]" style={{ background: '#ECFCCB', color: '#3F6212' }}>0{i+1}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-bold truncate">{p.t}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: '#94A3B8' }}>{p.r} · {p.d}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[12px] font-bold" style={{ color: '#F59E0B' }}>
                    <Lc3.Star size={12} fill="#F59E0B" /> {p.s}
                  </div>
                  <Lc3.Download size={14} style={{ color: '#94A3B8' }} />
                </div>
              ))}
            </div>
          </A3.Section>
        </div>

        <div className={isM ? 'mt-5 grid gap-5' : 'col-span-5 grid gap-5'}>
          <A3.Section title="내 기술 스택" action={<Lc3.Plus size={14} style={{ color: '#94A3B8' }} />}>
            <div className="flex flex-wrap gap-1.5">{me.skills.map(s => <A3.Chip key={s} tone="indigo">{s}</A3.Chip>)}</div>
            <div className="mt-3 rounded-xl p-3 flex items-start gap-2" style={{ background: '#EEF2FF' }}>
              <Lc3.Lightbulb size={14} style={{ color: '#4F46E5', marginTop: 2 }} />
              <div className="text-[12px]" style={{ color: '#475569' }}>
                <b style={{ color: '#4F46E5' }}>TypeScript</b> 추가하면 매칭 점수가 평균 <b>+9점</b> 올라요
              </div>
            </div>
          </A3.Section>

          <A3.Section title="관심 분야">
            <div className="flex flex-wrap gap-1.5">{me.interests.map(s => <A3.Chip key={s} tone="lime">{s}</A3.Chip>)}</div>
          </A3.Section>

          <A3.Section title="활동 통계">
            <div className="grid gap-2.5">
              {[
                { l: '함께한 사람', v: '14명', c: '#4F46E5' },
                { l: '받은 별점',   v: '38회', c: '#F59E0B' },
                { l: '작성 댓글',   v: '127개', c: '#14B8A6' },
                { l: '완료 Task',   v: '64개',  c: '#84CC16' },
              ].map(s => (
                <div key={s.l} className="flex items-center justify-between text-[13px]">
                  <span style={{ color: '#475569' }}>{s.l}</span>
                  <span className="font-bold tabular-nums" style={{ color: s.c }}>{s.v}</span>
                </div>
              ))}
            </div>
          </A3.Section>

          <A3.Section title="설정">
            <div className="grid gap-1">
              {[
                { l: '알림 설정', i: <Lc3.Bell size={14} /> },
                { l: '디스코드 연동', i: <Lc3.MessageSquare size={14} /> },
                { l: '계정 설정', i: <Lc3.User size={14} /> },
                { l: '도움말 / 문의', i: <Lc3.Lightbulb size={14} /> },
              ].map(r => (
                <div key={r.l} className="flex items-center gap-3 py-2.5 px-1 cursor-pointer">
                  <div className="rounded-lg w-7 h-7 flex items-center justify-center" style={{ background: '#F4F4F5', color: '#475569' }}>{r.i}</div>
                  <span className="flex-1 text-[13px] font-medium">{r.l}</span>
                  <Lc3.ChevronRight size={14} style={{ color: '#94A3B8' }} />
                </div>
              ))}
            </div>
          </A3.Section>
        </div>
      </div>
    </div>
  );
}

window.CampusScreens3 = { ApplicantModal, TaskModal, ScreenMyPage };

// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({ title = 'Tweaks', noDeckControls = false, children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(
    () => typeof document !== 'undefined' && !!document.querySelector('deck-stage'),
    [],
  );
  // Hide the toggle until the host has actually enabled the rail (the
  // __omelette_rail_enabled window message, posted only when the
  // omelette_deck_rail_enabled flag is on for this user). The initial read
  // covers TweaksPanel mounting after the message already arrived; the
  // listener covers the common case of mounting first.
  const [railEnabled, setRailEnabled] = React.useState(
    () => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled,
  );
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = (e) => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try { return localStorage.getItem('deck-stage.railVisible') !== '0'; } catch (e) { return true; }
  });
  const toggleRail = (on) => {
    setRailVisible(on);
    window.postMessage({ type: '__deck_rail_visible', on }, '*');
  };
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" data-noncommentable=""
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">
          {children}
          {hasDeckStage && railEnabled && !noDeckControls && (
            <TweakSection label="Deck">
              <TweakToggle label="Thumbnail rail" value={railVisible} onChange={toggleRail} />
            </TweakSection>
          )}
        </div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}

Object.assign(window, {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton,
});
// App shell: tabs + side-by-side desktop + mobile preview
const Atoms = window.CampusAtoms;
const S1 = window.CampusScreens;
const S2 = window.CampusScreens2;
const S3 = window.CampusScreens3;
const Li = window.lucideReact || {};
const { useState: useApp, useEffect: useAppE } = React;

const TABS = [
  { k: 'landing',   label: '랜딩',         url: '',                       desktop: 'web', mobile: 'web' },
  { k: 'explore',   label: '탐색',         url: 'explore',                desktop: 'web', mobile: 'web' },
  { k: 'detail',    label: '상세',         url: 'projects/lost-and-found', desktop: 'web', mobile: 'web' },
  { k: 'compare',   label: '매칭 비교',    url: 'projects/.../applicants', desktop: 'web', mobile: 'web' },
  { k: 'dashboard', label: '대시보드',     url: 'workspace/lost-and-found', desktop: 'web', mobile: 'web' },
  { k: 'portfolio', label: '포트폴리오',  url: 'me/portfolio/892',        desktop: 'web', mobile: 'web' },
  { k: 'notif',     label: '모바일 알림', url: 'notifications',          desktop: 'fallback', mobile: 'web' },
  { k: 'mypage',    label: '마이페이지',   url: 'me',                      desktop: 'web', mobile: 'web' },
];

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "wRole": 30,
  "wSkill": 25,
  "wPeriod": 20,
  "wInterest": 15,
  "wFolio": 10,
  "showConfetti": true
}/*EDITMODE-END*/;

function App() {
  const [tab, setTab] = useApp('landing');
  const [animKey, setAnimKey] = useApp(0);
  const [projectId, setProjectId] = useApp(1);
  const [activeApplicant, setActiveApplicant] = useApp(null);
  const [activeTask, setActiveTask] = useApp(null);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Expose nav globally so cards/buttons can navigate
  useAppE(() => {
    window.__nav = {
      go(target, args = {}) {
        if (args.projectId) setProjectId(args.projectId);
        setTab(target);
      },
    };
    window.__openApplicant = (a) => setActiveApplicant(a);
    window.__openTask = (t) => setActiveTask(t);
  }, []);

  // Push weights into BREAKDOWN_LABELS so ScoreBars + demo reflect them
  useAppE(() => {
    const max = { role: t.wRole, skill: t.wSkill, period: t.wPeriod, interest: t.wInterest, folio: t.wFolio };
    Atoms.BREAKDOWN_LABELS.forEach(r => { r.max = max[r.key]; });
    setAnimKey(k => k + 1);
  }, [t.wRole, t.wSkill, t.wPeriod, t.wInterest, t.wFolio]);

  useAppE(() => {
    window.__ML_SHOW_CONFETTI = t.showConfetti;
    setAnimKey(k => k + 1);
  }, [t.showConfetti]);

  useAppE(() => { setAnimKey(k => k + 1); }, [tab]);

  const total = t.wRole + t.wSkill + t.wPeriod + t.wInterest + t.wFolio;

  const renderDesktop = () => {
    if (tab === 'notif') return <S2.ScreenNotifWeb />;
    const map = {
      landing:   <S1.ScreenLanding   device="web" animKey={animKey} />,
      explore:   <S1.ScreenExplore   device="web" animKey={animKey} />,
      detail:    <S1.ScreenDetail    device="web" animKey={animKey} projectId={projectId} />,
      compare:   <S1.ScreenCompare   device="web" animKey={animKey} projectId={projectId} />,
      dashboard: <S2.ScreenDashboard device="web" animKey={animKey} />,
      portfolio: <S2.ScreenPortfolio device="web" animKey={animKey} />,
      mypage:    <S3.ScreenMyPage    device="web" animKey={animKey} />,
    };
    return map[tab];
  };
  const renderMobile = () => {
    if (tab === 'notif') return <><S2.ScreenNotifMobile animKey={animKey} /><Atoms.MobileTabBar active="notif" /></>;
    const map = {
      landing:   <S1.ScreenLanding   device="mobile" animKey={animKey} />,
      explore:   <S1.ScreenExplore   device="mobile" animKey={animKey} />,
      detail:    <S1.ScreenDetail    device="mobile" animKey={animKey} projectId={projectId} />,
      compare:   <S1.ScreenCompare   device="mobile" animKey={animKey} projectId={projectId} />,
      dashboard: <S2.ScreenDashboard device="mobile" animKey={animKey} />,
      portfolio: <S2.ScreenPortfolio device="mobile" animKey={animKey} />,
      mypage:    <S3.ScreenMyPage    device="mobile" animKey={animKey} />,
    };
    const tabActive = { explore: 'explore', detail: 'explore', compare: 'mine', dashboard: 'mine', portfolio: 'me', mypage: 'me', landing: 'home' }[tab];
    return <>{map[tab]}<Atoms.MobileTabBar active={tabActive} /></>;
  };

  const cur = TABS.find(t => t.k === tab);
  const desktopURL = cur.url;

  return (
    <div className="min-h-screen grid-bg pb-12">
      {/* Top showcase header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/85 border-b" style={{ borderColor: '#E4E4E7' }}>
        <div className="max-w-[1700px] mx-auto px-8 py-4 flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Atoms.Wordmark size="lg" />
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-[11px] font-bold tracking-wider" style={{ color: '#94A3B8' }}>SHOWCASE</span>
              <span className="text-[12px] font-semibold" style={{ color: '#475569' }}>디자인 미리보기 · 7개 화면</span>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-1.5 overflow-x-auto hscroll">
            {TABS.map((t, i) => {
              const on = t.k === tab;
              return (
                <button key={t.k} onClick={() => setTab(t.k)}
                  className="whitespace-nowrap rounded-xl text-[12px] font-semibold flex items-center gap-1.5 px-3 py-2 transition border"
                  style={{
                    background: on ? '#0F172A' : '#FFFFFF',
                    color: on ? '#FFFFFF' : '#475569',
                    borderColor: on ? '#0F172A' : '#E4E4E7',
                  }}>
                  <span className="opacity-50 tabular-nums text-[10px]">0{i+1}</span>
                  {t.label}
                </button>
              );
            })}
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-semibold rounded-full px-3 py-1.5" style={{ background: '#ECFCCB', color: '#3F6212' }}>
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: '#84CC16' }} />
            매칭 점수 애니메이션 자동 재생
          </div>
        </div>
      </header>

      {/* Side-by-side preview */}
      <main className="max-w-[1700px] mx-auto px-8 py-8">
        <div className="grid gap-6" style={{ gridTemplateColumns: 'minmax(0, 1.55fr) minmax(380px, 1fr)' }}>
          {/* Desktop */}
          <div>
            <DeviceBadge label="DESKTOP · 1280" url={desktopURL} />
            <Atoms.BrowserFrame url={desktopURL} height={820}>
              {renderDesktop()}
            </Atoms.BrowserFrame>
          </div>
          {/* Mobile */}
          <div>
            <DeviceBadge label="MOBILE · 375 × 812" url={desktopURL} mobile />
            <Atoms.PhoneFrame height={820}>
              {renderMobile()}
            </Atoms.PhoneFrame>
          </div>
        </div>

        {/* Footer caption */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border bg-white p-5" style={{ borderColor: '#E4E4E7' }}>
            <div className="text-[11px] font-bold tracking-wider" style={{ color: '#4F46E5' }}>DESIGN PRINCIPLES</div>
            <ul className="mt-3 space-y-2 text-[13px]" style={{ color: '#475569' }}>
              <li>① 매칭 점수가 모든 화면의 주인공</li>
              <li>② 다양성이 곧 가치 — 전공 컬러 코딩</li>
              <li>③ 차분한 베이스 + 한 곳의 강렬한 포인트</li>
              <li>④ 학생 톤 — 반말 살짝, 신뢰감 있게</li>
              <li>⑤ 결과물(포트폴리오)에 자부심을</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-5" style={{ borderColor: '#E4E4E7' }}>
            <div className="text-[11px] font-bold tracking-wider" style={{ color: '#84CC16' }}>SCORE WEIGHTS</div>
            <div className="mt-3 grid gap-2">
              {[
                { l: '역할 매칭',  v: 30, c: '#4F46E5' },
                { l: '기술 스택',  v: 25, c: '#22C55E' },
                { l: '참여 기간',  v: 20, c: '#F59E0B' },
                { l: '관심 분야',  v: 15, c: '#EC4899' },
                { l: '포트폴리오', v: 10, c: '#14B8A6' },
              ].map(r => (
                <div key={r.l} className="flex items-center gap-2 text-[12px]">
                  <span className="w-16" style={{ color: '#475569' }}>{r.l}</span>
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: '#F1F5F9' }}>
                    <div className="h-full rounded-full" style={{ width: `${r.v}%`, background: r.c }} />
                  </div>
                  <span className="text-[11px] font-bold w-7 text-right tabular-nums">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-5" style={{ borderColor: '#E4E4E7' }}>
            <div className="text-[11px] font-bold tracking-wider" style={{ color: '#EC4899' }}>MAJORS · 5</div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {Object.keys(window.CampusData.MAJOR).map(k => {
                const m = window.CampusData.MAJOR[k];
                return (
                  <span key={k} className="text-[11px] font-semibold rounded-full px-2.5 py-1 inline-flex items-center gap-1.5" style={{ background: m.bg, color: m.text }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: m.ring }} />
                    {k}
                  </span>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t text-[11px]" style={{ borderColor: '#F1F5F9', color: '#94A3B8' }}>
              Campus Link · 2026.07 정식 출시 예정 · 한국 대학생 20–25세
            </div>
          </div>
        </div>
      </main>

      <TweaksPanel>
        <TweakSection label="매칭 점수 가중치" />
        <TweakSection label="매칭 점수 가중치" />
        <div style={{ fontSize: 10, color: total === 100 ? '#3F6212' : '#BE123C', textAlign: 'right', marginTop: -4 }}>
          합계 {total} / 100 {total === 100 ? '✓' : '⚠'}
        </div>
        <TweakSlider label="역할 매칭" value={t.wRole}     min={0} max={50} step={1} unit="점" onChange={v => setTweak('wRole', v)} />
        <TweakSlider label="기술 스택" value={t.wSkill}    min={0} max={50} step={1} unit="점" onChange={v => setTweak('wSkill', v)} />
        <TweakSlider label="참여 기간" value={t.wPeriod}   min={0} max={50} step={1} unit="점" onChange={v => setTweak('wPeriod', v)} />
        <TweakSlider label="관심 분야" value={t.wInterest} min={0} max={50} step={1} unit="점" onChange={v => setTweak('wInterest', v)} />
        <TweakSlider label="포트폴리오" value={t.wFolio}   min={0} max={50} step={1} unit="점" onChange={v => setTweak('wFolio', v)} />
        <TweakSection label="포트폴리오 화면" />
        <TweakToggle label="컨페티 효과" value={t.showConfetti} onChange={v => setTweak('showConfetti', v)} />
      </TweaksPanel>

      {activeApplicant && <S3.ApplicantModal applicant={activeApplicant} onClose={() => setActiveApplicant(null)} />}
      {activeTask && <S3.TaskModal task={activeTask} onClose={() => setActiveTask(null)} />}
    </div>
  );
}

function DeviceBadge({ label, url, mobile }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider" style={{ color: '#94A3B8' }}>
        {mobile ? <Li.Smartphone size={12} /> : <Li.Monitor size={12} />}
        {label}
      </div>
      <div className="text-[10px] font-mono" style={{ color: '#94A3B8' }}>campus-link.kr/{url}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
