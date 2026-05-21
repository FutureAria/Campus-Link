// App shell: tabs + side-by-side desktop + mobile preview
const Atoms = window.MajorAtoms;
const S1 = window.MajorScreens;
const S2 = window.MajorScreens2;
const S3 = window.MajorScreens3;
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
              {Object.keys(window.MajorLinkData.MAJOR).map(k => {
                const m = window.MajorLinkData.MAJOR[k];
                return (
                  <span key={k} className="text-[11px] font-semibold rounded-full px-2.5 py-1 inline-flex items-center gap-1.5" style={{ background: m.bg, color: m.text }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: m.ring }} />
                    {k}
                  </span>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t text-[11px]" style={{ borderColor: '#F1F5F9', color: '#94A3B8' }}>
              MajorLink · 2026.07 정식 출시 예정 · 한국 대학생 20–25세
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
      <div className="text-[10px] font-mono" style={{ color: '#94A3B8' }}>majorlink.kr/{url}</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
