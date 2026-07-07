// Additional mock data for the 7 new prototype screens (auth / billing / messages / safety / verifications / org / admin)
// Reuses existing personas (김민준=me, APPLICANTS, PROJECTS) from data.jsx so the new screens feel like the same product.

const MESSAGE_THREADS = [
  {
    id: 'th1', applicantId: 2, projectId: 5, unread: true,
    messages: [
      { from: 'them', text: '안녕하세요! 포트폴리오 잘 봤습니다. 이번 학기 동안 참여 가능하신가요?', time: '오전 10:02' },
      { from: 'me',   text: '안녕하세요! 네, 8월 한 달은 풀타임으로 가능하고 이후엔 주 2회 정도 가능해요.', time: '오전 10:15' },
      { from: 'them', text: '좋습니다. 포트폴리오 링크 다시 보내드릴게요.', time: '오전 10:20' },
    ],
  },
  {
    id: 'th2', applicantId: 4, projectId: 3, unread: false,
    messages: [
      { from: 'them', text: '데이터 분석가 역할 관련 질문 있습니다. 주로 어떤 툴 쓰시나요?', time: '어제' },
      { from: 'me',   text: 'Python + Pandas 위주로 쓰고 있어요. 필요하면 R도 가능합니다.', time: '어제' },
    ],
  },
  {
    id: 'th3', applicantId: 3, projectId: 2, unread: false,
    messages: [
      { from: 'them', text: '네 좋습니다! 화요일 오후 2시에 온라인 미팅 어떠세요?', time: '3일 전' },
      { from: 'me',   text: '좋아요, 캘린더 초대 보내드릴게요.', time: '3일 전' },
    ],
  },
];

const REPORTS = [
  { id: 'rp1', applicantId: 8, reason: '무단 노쇼 (연락 없이 불참)', detail: '지난주 미팅 이후 연락이 닿지 않고 있어요.', status: 'reviewing', createdAt: '2026-07-05' },
  { id: 'rp2', applicantId: 7, reason: '부적절한 언어 · 행동', detail: '팀 채널에서 다른 팀원에게 무례한 언행을 했어요.', status: 'resolved', createdAt: '2026-06-29' },
];

const BLOCKED_USERS = [8];

// 김민준(me)의 인증·수상 내역함 — screens3.jsx ScreenMyPage의 trust.awardSubmissions(awme1~3)와 동일 인물 기준으로 확장
const MY_VERIFICATIONS = [
  { id: 'edu1',  kind: 'edu',   title: '학적 인증 · 재학생', sub: '한양대학교 · 컴퓨터공학과', status: 'approved', method: 'ai' },
  { id: 'awme1', kind: 'award', title: '한양 SW 창업 경진대회 · 대상', sub: '관련 프로젝트: 캠퍼스 분실물 찾아주는 앱', status: 'approved', method: 'ai' },
  { id: 'awme2', kind: 'award', title: '전국 대학생 해커톤 · 우수상', sub: '관련 프로젝트: AI 학습 도우미 챗봇', status: 'approved', method: 'ai' },
  { id: 'awme3', kind: 'award', title: '캠퍼스 핀테크 공모전 · 장려상', sub: '관련 프로젝트: 캠퍼스 분실물 찾아주는 앱', status: 'ai_checking', method: 'ai' },
  { id: 'awme4', kind: 'award', title: 'OO 대학생 해커톤 · 참가 인증', sub: 'AI 판독 실패 · 증빙 이미지 식별 불가', status: 'rejected', method: 'ai' },
];

const ORG_INFO = { name: '한양대학교 창업지원단', studentCount: 128, matchAvg: 78 };
const ORG_DEPT_STATS = [
  { name: '컴공/SW',     count: 44 },
  { name: '디자인',       count: 26 },
  { name: '경영/기획',   count: 21 },
  { name: '미디어/홍보', count: 15 },
  { name: '통계/데이터', count: 12 },
];

const ADMIN_STATS = { totalUsers: 1247, mrr: 812000, newProjectsToday: 5 };
const ADMIN_QUEUE = [
  { id: 'aq1', from: '박서연', to: '임채원', reason: '무단 노쇼', status: 'pending' },
  { id: 'aq2', from: '이수민', to: '윤하늘', reason: '부적절한 언어', status: 'pending' },
  { id: 'aq3', from: '정현우', to: '(스팸 게시글)', reason: '스팸 · 광고성 내용', status: 'pending' },
];
const ADMIN_PAYMENTS = [
  { date: '2026.07.07', user: '김민준', plan: '개인 구독', amount: 1990 },
  { date: '2026.07.06', user: '이수민', plan: '개인 구독', amount: 1990 },
  { date: '2026.07.05', user: '한양대 창업지원단', plan: '기관 플랜', amount: 400000 },
];

window.MajorLinkData2 = {
  MESSAGE_THREADS, REPORTS, BLOCKED_USERS, MY_VERIFICATIONS,
  ORG_INFO, ORG_DEPT_STATS, ADMIN_STATS, ADMIN_QUEUE, ADMIN_PAYMENTS,
};
