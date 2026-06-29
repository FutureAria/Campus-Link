// Modals + My Page
const A3 = window.MajorAtoms;
const D3 = window.MajorLinkData;
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
            <div className="mt-3">
              <A3.ScoreTrustNote />
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 grid gap-4">
          <A3.TrustProfileCard trust={a.trust} />
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
  const me = { name: '김민준', dept: '컴퓨터공학', year: 3, school: '한양대', mail: 'mj.kim@hanyang.ac.kr', skills: ['React','Spring','MySQL','Git','Figma'], interests: ['교내 서비스','AI/ML','헬스케어'], trust: { completionRate: 94, dropoutCount: 0, awardSubmissions: [ { id:'awme1', title:'한양 SW 창업 경진대회 대상', projectId:1, proofImageLabel:'상장_한양.jpg', proofLink:'https://hanyang.ac.kr/award', status:'approved' }, { id:'awme2', title:'전국 대학생 해커톤 우수상', projectId:3, proofImageLabel:'hackathon.png', proofLink:'https://hackathon.kr', status:'approved' }, { id:'awme3', title:'캠퍼스 핀테크 공모전 장려상', projectId:1, proofImageLabel:'fintech.jpg', proofLink:'https://fintechcontest.kr', status:'pending' } ], leaderCount: 5, badges: ['리더십','완주왕','마감준수'] } };
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
          <div className="grid gap-2">
            <A3.TrustProfileCard trust={me.trust} title="내 신뢰 프로필" />
            <button onClick={() => window.__openAwardSubmit && window.__openAwardSubmit()} className="rounded-xl border-2 border-dashed text-[12px] font-semibold py-2.5 flex items-center justify-center gap-1.5" style={{ borderColor: '#E4E4E7', color: '#4F46E5' }}>
              <Lc3.Plus size={14} /> 수상 내역 추가
            </button>
            <A3.ScoreTrustNote />
          </div>

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

// ============ CREATE PROJECT MODAL (wizard) ============
const CP_CATEGORIES = ['교내 서비스', 'AI/ML', 'IoT/하드웨어', '마케팅', '헬스케어', '커머스', '게임/엔터', '기타'];
const CP_PERIODS = ['1개월', '2-3개월', '1학기', '기타'];
const CP_MEETINGS = ['온라인', '오프라인', '하이브리드'];
const CP_ROLES = [
  { role: '프론트엔드 개발자', skills: ['React', 'TypeScript'] },
  { role: '백엔드 개발자',     skills: ['Node.js', 'Spring'] },
  { role: '프로덕트 디자이너', skills: ['Figma', 'UX'] },
  { role: 'PM/기획자',          skills: ['Notion', '리서치'] },
  { role: '데이터 분석가',     skills: ['Python', 'SQL'] },
  { role: '콘텐츠 마케터',     skills: ['SNS', '카피'] },
];

function CreateProjectModal({ onClose }) {
  const [step, setStep] = useS3(1);
  const [done, setDone] = useS3(false);
  const [form, setForm] = useS3({
    title: '', desc: '', category: '교내 서비스',
    period: '2-3개월', total: 5, meeting: '온라인', roles: ['프론트엔드 개발자', '프로덕트 디자이너'],
  });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const toggleRole = (r) => setForm(f => ({ ...f, roles: f.roles.includes(r) ? f.roles.filter(x => x !== r) : [...f.roles, r] }));

  const canNext = step === 1 ? form.title.trim().length > 0 : step === 2 ? true : form.roles.length > 0;
  const STEPS = ['기본 정보', '진행 방식', '필요한 역할'];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: 'rgba(15,23,42,0.55)' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="rounded-3xl bg-white shadow-cardHov overflow-hidden w-full max-w-[600px] max-h-[90vh] overflow-y-auto" style={{ border: '1px solid #E4E4E7' }}>
        {done ? (
          <div className="p-10 text-center">
            <div className="mx-auto rounded-full w-16 h-16 flex items-center justify-center mb-4" style={{ background: '#ECFCCB' }}>
              <Lc3.Check size={30} style={{ color: '#3F6212' }} />
            </div>
            <div className="font-bold text-[22px]" style={{ letterSpacing: '-0.02em' }}>프로젝트가 생성됐어요!</div>
            <p className="mt-2 text-[13px]" style={{ color: '#475569' }}>"{form.title}" 모집이 시작됐어요. 지원자가 들어오면 매칭 점수와 함께 알려드릴게요.</p>
            <div className="mt-5 rounded-2xl border p-4 text-left" style={{ borderColor: '#E4E4E7' }}>
              <div className="flex items-center gap-2 mb-2">
                <A3.Chip>{form.category}</A3.Chip>
                <A3.Chip tone="lime">모집 중</A3.Chip>
              </div>
              <div className="font-bold text-[15px]">{form.title}</div>
              <div className="mt-2 flex flex-wrap gap-1.5">{form.roles.map(r => <A3.Chip key={r} tone="indigo">{r}</A3.Chip>)}</div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button onClick={onClose} className="rounded-xl border font-semibold text-[13px] py-3" style={{ borderColor: '#E4E4E7' }}>닫기</button>
              <button onClick={() => { onClose(); window.__nav && window.__nav.go('compare', { projectId: 1 }); }} className="rounded-xl text-white font-bold text-[13px] py-3" style={{ background: '#4F46E5' }}>지원자 관리로</button>
            </div>
          </div>
        ) : (
          <>
            <div className="p-5 border-b flex items-center justify-between" style={{ borderColor: '#F1F5F9' }}>
              <div>
                <div className="text-[11px] font-bold tracking-wider" style={{ color: '#4F46E5' }}>새 프로젝트 · {step}/3</div>
                <div className="font-bold text-[18px] mt-1" style={{ letterSpacing: '-0.02em' }}>{STEPS[step - 1]}</div>
              </div>
              <button onClick={onClose} className="rounded-lg w-8 h-8 flex items-center justify-center"><Lc3.X size={16} /></button>
            </div>

            <div className="px-5 pt-3">
              <div className="flex gap-1.5">
                {[1, 2, 3].map(s => (
                  <div key={s} className="flex-1 h-1.5 rounded-full" style={{ background: s <= step ? '#4F46E5' : '#F1F5F9' }} />
                ))}
              </div>
            </div>

            <div className="p-5 grid gap-4">
              {step === 1 && (
                <>
                  <div>
                    <CPLabel>프로젝트 제목</CPLabel>
                    <input value={form.title} onChange={e => set('title', e.target.value)} autoFocus
                      placeholder="예) 캠퍼스 분실물 찾아주는 앱"
                      className="w-full rounded-xl border px-3.5 py-3 text-[14px] outline-none focus:border-indigo-400" style={{ borderColor: '#E4E4E7' }} />
                  </div>
                  <div>
                    <CPLabel>한 줄 설명</CPLabel>
                    <textarea value={form.desc} onChange={e => set('desc', e.target.value)} rows={3}
                      placeholder="무엇을 만드는 프로젝트인지 간단히 적어주세요"
                      className="w-full rounded-xl border px-3.5 py-3 text-[14px] outline-none focus:border-indigo-400 resize-none" style={{ borderColor: '#E4E4E7' }} />
                  </div>
                  <div>
                    <CPLabel>카테고리</CPLabel>
                    <div className="flex flex-wrap gap-1.5">
                      {CP_CATEGORIES.map(c => (
                        <button key={c} onClick={() => set('category', c)} className="rounded-full px-3 py-1.5 text-[12px] font-semibold border transition"
                          style={form.category === c ? { background: '#4F46E5', color: 'white', borderColor: '#4F46E5' } : { background: 'white', color: '#475569', borderColor: '#E4E4E7' }}>{c}</button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <CPLabel>참여 기간</CPLabel>
                    <div className="flex flex-wrap gap-1.5">
                      {CP_PERIODS.map(c => (
                        <button key={c} onClick={() => set('period', c)} className="rounded-full px-3.5 py-2 text-[12px] font-semibold border transition"
                          style={form.period === c ? { background: '#4F46E5', color: 'white', borderColor: '#4F46E5' } : { background: 'white', color: '#475569', borderColor: '#E4E4E7' }}>{c}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <CPLabel>모집 인원 — {form.total}명</CPLabel>
                    <div className="flex items-center gap-3">
                      <input type="range" min={2} max={8} value={form.total} onChange={e => set('total', +e.target.value)} className="flex-1" style={{ accentColor: '#4F46E5' }} />
                      <div className="flex gap-1">
                        {Array.from({ length: form.total }).map((_, i) => <span key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: '#4F46E5' }} />)}
                      </div>
                    </div>
                  </div>
                  <div>
                    <CPLabel>진행 방식</CPLabel>
                    <div className="grid grid-cols-3 gap-2">
                      {CP_MEETINGS.map(c => (
                        <button key={c} onClick={() => set('meeting', c)} className="rounded-xl px-3 py-3 text-[12px] font-semibold border transition"
                          style={form.meeting === c ? { background: '#EEF2FF', color: '#4F46E5', borderColor: '#4F46E5' } : { background: 'white', color: '#475569', borderColor: '#E4E4E7' }}>{c}</button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <CPLabel>필요한 역할을 선택하세요 · {form.roles.length}개</CPLabel>
                  <div className="grid gap-2">
                    {CP_ROLES.map(r => {
                      const on = form.roles.includes(r.role);
                      return (
                        <button key={r.role} onClick={() => toggleRole(r.role)} className="rounded-xl border p-3.5 flex items-center gap-3 text-left transition"
                          style={on ? { borderColor: '#4F46E5', background: '#EEF2FF' } : { borderColor: '#E4E4E7', background: 'white' }}>
                          <span className="w-5 h-5 rounded-md border flex items-center justify-center shrink-0" style={{ background: on ? '#4F46E5' : 'white', borderColor: on ? '#4F46E5' : '#E4E4E7', color: 'white' }}>
                            {on && <Lc3.Check size={12} />}
                          </span>
                          <div className="flex-1">
                            <div className="text-[13px] font-bold">{r.role}</div>
                            <div className="mt-1 flex flex-wrap gap-1">{r.skills.map(s => <A3.Chip key={s} tone="gray">{s}</A3.Chip>)}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2 p-4 border-t" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
              <button onClick={() => step === 1 ? onClose() : setStep(step - 1)} className="rounded-xl border font-semibold text-[13px] py-3" style={{ borderColor: '#E4E4E7' }}>
                {step === 1 ? '취소' : '이전'}
              </button>
              <button disabled={!canNext} onClick={() => step === 3 ? setDone(true) : setStep(step + 1)}
                className="rounded-xl text-white font-bold text-[13px] py-3 flex items-center justify-center gap-1.5"
                style={{ background: canNext ? '#4F46E5' : '#C7D2FE', cursor: canNext ? 'pointer' : 'not-allowed' }}>
                {step === 3 ? '프로젝트 생성' : '다음'} <Lc3.ArrowRight size={14} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CPLabel({ children }) {
  return <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>{children}</div>;
}

// ============ PEER EVALUATION MODAL (CATME-based) ============
const PEER_ITEMS = [
  '맡은 역할을 책임감 있게 수행했다',
  '마감 기한과 일정을 잘 지켰다',
  '팀원들과 원활하게 소통했다',
  '프로젝트에 적극적으로 참여했다',
  '본인의 전공/기술 역량을 발휘했다',
  '다시 함께 프로젝트를 하고 싶다',
];
// short labels used when showing results split out (never combined into one score)
const PEER_SHORT = ['책임감', '일정준수', '소통', '참여도', '전문성', '재협업 의향'];

function StarRow({ value, onChange }) {
  const [hover, setHover] = useS3(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(n => {
        const on = n <= (hover || value);
        return (
          <button key={n} type="button"
            onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
            onClick={() => onChange(n)}
            className="p-0.5" style={{ lineHeight: 0 }}>
            <Lc3.Star size={22} fill={on ? '#F59E0B' : 'none'} color={on ? '#F59E0B' : '#CBD5E1'} />
          </button>
        );
      })}
    </div>
  );
}

function PeerEvaluationModal({ teammate, onClose }) {
  if (!teammate) return null;
  const [scores, setScores] = useS3([0, 0, 0, 0, 0, 0]);
  const [submitted, setSubmitted] = useS3(false);
  const setScore = (i, v) => setScores(s => s.map((x, idx) => idx === i ? v : x));
  const answered = scores.filter(s => s > 0).length;
  const allDone = answered === PEER_ITEMS.length;

  // Results: split per-item, NEVER combined into a single number
  const fmt = (i) => scores[i] ? scores[i].toFixed(1) : '–';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: 'rgba(15,23,42,0.55)' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="rounded-3xl bg-white shadow-cardHov overflow-hidden w-full max-w-[560px] max-h-[90vh] overflow-y-auto" style={{ border: '1px solid #E4E4E7' }}>
        <div className="p-5 border-b flex items-start justify-between" style={{ borderColor: '#F1F5F9' }}>
          <div>
            <div className="text-[11px] font-bold tracking-wider" style={{ color: '#4F46E5' }}>동료평가 · CATME 기반 6개 항목</div>
            <div className="mt-2 flex items-center gap-2.5">
              <A3.Avatar name={teammate.name} dept={teammate.dept} size={36} />
              <div>
                <div className="font-bold text-[16px]">{teammate.name}</div>
                <div className="mt-0.5"><A3.MajorChip dept={teammate.dept} year={teammate.year} size="xs" /></div>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="rounded-lg w-8 h-8 flex items-center justify-center"><Lc3.X size={16} /></button>
        </div>

        {!submitted ? (
          <>
            <div className="p-5 grid gap-1">
              <div className="text-[12px] mb-1" style={{ color: '#475569' }}>각 항목을 1~5점으로 평가해 주세요. 프로젝트 종료 시점 평가예요.</div>
              {PEER_ITEMS.map((q, i) => (
                <div key={i} className="flex items-center justify-between gap-3 py-2.5 border-b last:border-b-0" style={{ borderColor: '#F1F5F9' }}>
                  <div className="flex items-start gap-2 flex-1">
                    <span className="text-[12px] font-bold w-4 shrink-0" style={{ color: '#94A3B8' }}>{i + 1}</span>
                    <span className="text-[13px]" style={{ color: '#0F172A' }}>{q}</span>
                  </div>
                  <StarRow value={scores[i]} onChange={(v) => setScore(i, v)} />
                </div>
              ))}
            </div>
            <div className="px-5 pb-2">
              <div className="rounded-xl p-3 flex items-start gap-2" style={{ background: '#EEF2FF' }}>
                <Lc3.Lightbulb size={14} style={{ color: '#4F46E5', marginTop: 2 }} />
                <div className="text-[12px]" style={{ color: '#475569' }}>동료평가는 <b>보조 지표</b>예요. 항목별로 나눠서 기록되고, 하나의 점수로 합산하지 않아요.</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4 border-t" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
              <button onClick={onClose} className="rounded-xl border font-semibold text-[13px] py-3" style={{ borderColor: '#E4E4E7' }}>취소</button>
              <button disabled={!allDone} onClick={() => setSubmitted(true)}
                className="rounded-xl text-white font-bold text-[13px] py-3 flex items-center justify-center gap-1.5"
                style={{ background: allDone ? '#4F46E5' : '#C7D2FE', cursor: allDone ? 'pointer' : 'not-allowed' }}>
                {allDone ? '평가 제출' : `${answered}/6 항목 평가`}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="p-5">
              <div className="rounded-xl p-3 mb-4 flex items-center gap-2" style={{ background: '#ECFCCB' }}>
                <Lc3.Check size={15} style={{ color: '#3F6212' }} />
                <span className="text-[12px] font-semibold" style={{ color: '#3F6212' }}>평가가 제출됐어요. 항목별로 기록됩니다.</span>
              </div>
              <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>제출 결과 · 항목별</div>
              <div className="grid gap-2">
                {PEER_SHORT.map((label, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[12px]">
                    <div className="w-20 font-medium" style={{ color: '#475569' }}>{label}</div>
                    <div className="flex-1 h-1.5 rounded-full" style={{ background: '#F1F5F9' }}>
                      <div className="h-full rounded-full" style={{ width: `${(scores[i] / 5) * 100}%`, background: '#4F46E5' }} />
                    </div>
                    <div className="tabular-nums font-bold w-12 text-right" style={{ color: '#0F172A' }}>
                      {i === 5 ? `${Math.round((scores[i] / 5) * 100)}%` : `${fmt(i)}/5`}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-[11px]" style={{ color: '#94A3B8' }}>* 단일 점수로 합산하지 않고 항목별 지표로만 저장돼요.</div>
            </div>
            <div className="p-4 border-t" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
              <button onClick={onClose} className="w-full rounded-xl text-white font-bold text-[13px] py-3" style={{ background: '#4F46E5' }}>완료</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ============ AWARD SUBMISSION MODAL (마이페이지 → 수상 내역 추가) ============
function AwardSubmissionModal({ onClose }) {
  const [title, setTitle] = useS3('');
  const [projectId, setProjectId] = useS3(D3.PROJECTS[0].id);
  const [customProject, setCustomProject] = useS3('');
  const isCustom = projectId === 'custom';
  const [fileName, setFileName] = useS3('');
  const [link, setLink] = useS3('');
  const [submitted, setSubmitted] = useS3(false);
  const canSubmit = title.trim() && fileName && link.trim() && (!isCustom || customProject.trim());
  // demo "파일 선택" — no real upload, just a placeholder filename
  const pickFile = () => setFileName(title.trim() ? `상장_${title.trim().slice(0, 6)}.jpg` : '상장.jpg');

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: 'rgba(15,23,42,0.55)' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="rounded-3xl bg-white shadow-cardHov overflow-hidden w-full max-w-[520px] max-h-[90vh] overflow-y-auto" style={{ border: '1px solid #E4E4E7' }}>
        <div className="p-5 border-b flex items-start justify-between" style={{ borderColor: '#F1F5F9' }}>
          <div>
            <div className="text-[11px] font-bold tracking-wider" style={{ color: '#4F46E5' }}>수상 내역 인증</div>
            <div className="font-bold text-[18px] mt-1" style={{ letterSpacing: '-0.02em' }}>공모전 수상 추가</div>
          </div>
          <button onClick={onClose} className="rounded-lg w-8 h-8 flex items-center justify-center"><Lc3.X size={16} /></button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto rounded-full w-14 h-14 flex items-center justify-center mb-4" style={{ background: '#FEF3C7' }}>
              <Lc3.Star size={26} style={{ color: '#B45309' }} fill="#B45309" />
            </div>
            <div className="font-bold text-[18px]">인증 요청을 보냈어요</div>
            <p className="mt-2 text-[13px]" style={{ color: '#475569' }}>팀장이 증빙을 확인하면 신뢰 프로필의 공모전 수상 횟수에 정식 반영돼요.</p>
            <div className="mt-4 flex items-center justify-center">
              <A3.Chip tone="amber">⏳ 승인 대기</A3.Chip>
            </div>
            <button onClick={onClose} className="mt-5 w-full rounded-xl text-white font-bold text-[13px] py-3" style={{ background: '#4F46E5' }}>완료</button>
          </div>
        ) : (
          <>
            <div className="p-5 grid gap-4">
              <div>
                <AwLabel>공모전명</AwLabel>
                <input value={title} onChange={e => setTitle(e.target.value)} autoFocus placeholder="예) 2026 부산 준창업 경진대회 우수상"
                  className="w-full rounded-xl border px-3.5 py-3 text-[14px] outline-none focus:border-indigo-400" style={{ borderColor: '#E4E4E7' }} />
              </div>
              <div>
                <AwLabel>관련 프로젝트</AwLabel>
                <div className="relative">
                  <select value={projectId} onChange={e => setProjectId(e.target.value === 'custom' ? 'custom' : +e.target.value)}
                    className="w-full appearance-none rounded-xl border px-3.5 py-3 text-[14px] outline-none focus:border-indigo-400 bg-white" style={{ borderColor: '#E4E4E7' }}>
                    {D3.PROJECTS.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                    <option value="custom">직접 입력 (목록에 없는 프로젝트)</option>
                  </select>
                  <Lc3.ChevronDown size={15} style={{ color: '#94A3B8', position: 'absolute', right: 12, top: 14 }} />
                </div>
                {isCustom && (
                  <input value={customProject} onChange={e => setCustomProject(e.target.value)} autoFocus placeholder="프로젝트·활동명을 직접 적어주세요"
                    className="mt-2 w-full rounded-xl border px-3.5 py-3 text-[14px] outline-none focus:border-indigo-400" style={{ borderColor: '#E4E4E7' }} />
                )}
              </div>
              <div>
                <AwLabel>상장 이미지</AwLabel>
                <div className="rounded-xl border border-dashed p-4 flex items-center gap-3" style={{ borderColor: fileName ? '#4F46E5' : '#E4E4E7', background: fileName ? '#EEF2FF' : '#FAFAFA' }}>
                  <button onClick={pickFile} className="rounded-lg text-[12px] font-semibold px-3 py-2 flex items-center gap-1.5 bg-white border" style={{ borderColor: '#E4E4E7' }}>
                    <Lc3.Paperclip size={13} /> 파일 선택
                  </button>
                  <span className="text-[12px] truncate" style={{ color: fileName ? '#4F46E5' : '#94A3B8' }}>{fileName || '상장 이미지를 첨부하세요 (jpg, png)'}</span>
                </div>
              </div>
              <div>
                <AwLabel>공모전 페이지 링크</AwLabel>
                <input value={link} onChange={e => setLink(e.target.value)} placeholder="https://..."
                  className="w-full rounded-xl border px-3.5 py-3 text-[14px] outline-none focus:border-indigo-400" style={{ borderColor: '#E4E4E7' }} />
              </div>
              <div className="rounded-xl p-3 flex items-start gap-2" style={{ background: '#FEF3C7' }}>
                <Lc3.FileCheck size={14} style={{ color: '#B45309', marginTop: 1 }} />
                <div className="text-[12px]" style={{ color: '#92400E' }}>공모전 수상은 플랫폼 밖 활동이라, 팀장이 증빙을 확인한 뒤에 신뢰 프로필에 반영돼요.</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4 border-t" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
              <button onClick={onClose} className="rounded-xl border font-semibold text-[13px] py-3" style={{ borderColor: '#E4E4E7' }}>취소</button>
              <button disabled={!canSubmit} onClick={() => setSubmitted(true)}
                className="rounded-xl text-white font-bold text-[13px] py-3"
                style={{ background: canSubmit ? '#4F46E5' : '#C7D2FE', cursor: canSubmit ? 'pointer' : 'not-allowed' }}>제출하기</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function AwLabel({ children }) {
  return <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>{children}</div>;
}

// ============ AWARD APPROVAL MODAL (팀장 승인 — 알림에서 진입) ============
function AwardApprovalModal({ submission, applicantName, onClose, onDecision }) {
  if (!submission) return null;
  const project = D3.PROJECTS.find(p => p.id === submission.projectId);
  const [decided, setDecided] = useS3(submission.status === 'approved' ? 'approved' : submission.status === 'rejected' ? 'rejected' : null);
  const decide = (status) => { setDecided(status); onDecision && onDecision(submission, status); };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" style={{ background: 'rgba(15,23,42,0.55)' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className="rounded-3xl bg-white shadow-cardHov overflow-hidden w-full max-w-[520px] max-h-[90vh] overflow-y-auto" style={{ border: '1px solid #E4E4E7' }}>
        <div className="p-5 border-b flex items-start justify-between" style={{ borderColor: '#F1F5F9' }}>
          <div>
            <div className="text-[11px] font-bold tracking-wider" style={{ color: '#B45309' }}>🏆 수상 인증 검토</div>
            <div className="font-bold text-[18px] mt-1" style={{ letterSpacing: '-0.02em' }}>{submission.title}</div>
            <div className="text-[12px] mt-1" style={{ color: '#475569' }}>{applicantName ? `${applicantName}님` : '신청자'} · {project ? project.title : '프로젝트'}</div>
          </div>
          <button onClick={onClose} className="rounded-lg w-8 h-8 flex items-center justify-center"><Lc3.X size={16} /></button>
        </div>

        <div className="p-5 grid gap-4">
          <div>
            <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>제출된 상장 이미지</div>
            <div className="rounded-xl border flex flex-col items-center justify-center gap-2 py-8" style={{ borderColor: '#E4E4E7', background: '#FAFAFA' }}>
              <Lc3.FileCheck size={28} style={{ color: '#94A3B8' }} />
              <span className="text-[12px] font-semibold" style={{ color: '#475569' }}>{submission.proofImageLabel}</span>
              <span className="text-[10px]" style={{ color: '#94A3B8' }}>이미지 미리보기 (데모)</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] font-bold tracking-wider mb-2" style={{ color: '#94A3B8' }}>공모전 페이지 링크</div>
            <div className="rounded-xl border p-3 flex items-center gap-2.5" style={{ borderColor: '#E4E4E7' }}>
              <Lc3.Link size={14} style={{ color: '#4F46E5' }} />
              <span className="text-[13px] font-semibold truncate" style={{ color: '#4F46E5' }}>{submission.proofLink}</span>
            </div>
          </div>

          {decided && (
            <div className="rounded-xl p-3 flex items-center gap-2" style={{ background: decided === 'approved' ? '#ECFCCB' : '#FFE4E6' }}>
              {decided === 'approved'
                ? <><Lc3.Check size={15} style={{ color: '#3F6212' }} /><span className="text-[12px] font-semibold" style={{ color: '#3F6212' }}>승인됨 — 신뢰 프로필에 반영됐어요</span></>
                : <><Lc3.X size={15} style={{ color: '#BE123C' }} /><span className="text-[12px] font-semibold" style={{ color: '#BE123C' }}>반려됨 — 신청자 본인에게만 표시돼요</span></>}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 p-4 border-t" style={{ borderColor: '#F1F5F9', background: '#FAFAFA' }}>
          <button onClick={() => decide('rejected')} className="rounded-xl text-[13px] font-bold py-3 flex items-center justify-center gap-1.5"
            style={{ color: '#BE123C', background: '#FFE4E6' }}><Lc3.X size={14} /> 반려</button>
          <button onClick={() => decide('approved')} className="rounded-xl text-white text-[13px] font-bold py-3 flex items-center justify-center gap-1.5"
            style={{ background: '#84CC16' }}><Lc3.Check size={14} /> 승인</button>
        </div>
      </div>
    </div>
  );
}

window.MajorScreens3 = { ApplicantModal, TaskModal, ScreenMyPage, CreateProjectModal, PeerEvaluationModal, AwardSubmissionModal, AwardApprovalModal };
