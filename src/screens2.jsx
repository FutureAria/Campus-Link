// Screens 5-7: Dashboard, Portfolio, Notifications
const A2 = window.MajorAtoms;
const D2 = window.MajorLinkData;
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
                    <div className="text-[10px]" style={{ color: '#94A3B8' }}>#majorlink-team</div>
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

window.MajorScreens2 = {
  ScreenDashboard, ScreenPortfolio, ScreenNotifWeb, ScreenNotifMobile,
};
