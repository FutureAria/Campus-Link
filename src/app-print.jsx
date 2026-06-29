// Print version: render ALL 7 screens stacked, each as its own page
const Atoms = window.MajorAtoms;
const S1 = window.MajorScreens;
const S2 = window.MajorScreens2;
const Li = window.lucideReact || {};

const TABS = [
  { k: 'landing',   label: '랜딩',         url: ''                            },
  { k: 'explore',   label: '탐색',         url: 'explore'                      },
  { k: 'detail',    label: '상세',         url: 'projects/lost-and-found'     },
  { k: 'compare',   label: '매칭 비교',    url: 'projects/.../applicants'      },
  { k: 'dashboard', label: '대시보드',     url: 'workspace/lost-and-found'    },
  { k: 'portfolio', label: '포트폴리오',  url: 'me/portfolio/892'            },
  { k: 'notif',     label: '모바일 알림', url: 'notifications'               },
];

function ScreenFor(k, device) {
  const animKey = 999; // single fixed key — no re-anim during print
  if (k === 'notif') {
    if (device === 'web') return <S2.ScreenNotifWeb />;
    return <><S2.ScreenNotifMobile animKey={animKey} /><Atoms.MobileTabBar active="notif" /></>;
  }
  const map = {
    landing:   <S1.ScreenLanding   device={device} animKey={animKey} />,
    explore:   <S1.ScreenExplore   device={device} animKey={animKey} />,
    detail:    <S1.ScreenDetail    device={device} animKey={animKey} />,
    compare:   <S1.ScreenCompare   device={device} animKey={animKey} />,
    dashboard: <S2.ScreenDashboard device={device} animKey={animKey} />,
    portfolio: <S2.ScreenPortfolio device={device} animKey={animKey} />,
  };
  if (device === 'mobile') {
    const tabActive = { explore: 'explore', detail: 'explore', compare: 'mine', dashboard: 'mine', portfolio: 'me', landing: 'home' }[k];
    return <>{map[k]}<Atoms.MobileTabBar active={tabActive} /></>;
  }
  return map[k];
}

function PrintApp() {
  return (
    <div className="print-root">
      {/* Cover page */}
      <section className="page cover">
        <div className="cover-inner">
          <Atoms.Wordmark size="lg" />
          <div className="mt-10">
            <div className="text-[12px] font-bold tracking-wider" style={{ color: '#94A3B8' }}>SHOWCASE · 2026.05</div>
            <h1 className="font-bold mt-2" style={{ fontSize: 64, letterSpacing: '-0.03em', color: '#0F172A', lineHeight: 1.1 }}>
              전공이 다르면,<br />팀이 강해집니다.
            </h1>
            <p className="mt-6 text-[16px]" style={{ color: '#475569', maxWidth: 540, lineHeight: 1.6 }}>
              MajorLink — 전공 기반 대학생 협업 플랫폼.<br/>
              7개 핵심 화면을 데스크톱과 모바일에서 미리보기 합니다.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3" style={{ maxWidth: 540 }}>
            {TABS.map((t, i) => (
              <div key={t.k} className="rounded-xl border bg-white p-3 flex items-center gap-2.5" style={{ borderColor: '#E4E4E7' }}>
                <div className="rounded-md w-7 h-7 flex items-center justify-center text-[11px] font-bold" style={{ background: '#EEF2FF', color: '#4F46E5' }}>0{i+1}</div>
                <div>
                  <div className="text-[13px] font-bold">{t.label}</div>
                  <div className="text-[10px]" style={{ color: '#94A3B8' }}>majorlink.kr/{t.url}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One page per screen */}
      {TABS.map((t, i) => (
        <section key={t.k} className="page">
          <div className="page-header">
            <div className="flex items-center gap-3">
              <Atoms.Wordmark size="md" />
              <span style={{ color: '#E4E4E7' }}>·</span>
              <span className="text-[11px] font-bold tracking-wider" style={{ color: '#94A3B8' }}>0{i+1} / 07</span>
              <span className="text-[14px] font-bold" style={{ color: '#0F172A' }}>{t.label}</span>
            </div>
            <div className="text-[10px] font-mono" style={{ color: '#94A3B8' }}>majorlink.kr/{t.url}</div>
          </div>

          <div className="page-body">
            <div className="device-row">
              <div className="device-col desktop">
                <div className="device-badge">
                  <Li.Monitor size={11} />
                  <span>DESKTOP · 1280</span>
                </div>
                <Atoms.BrowserFrame url={t.url} height={760}>
                  {ScreenFor(t.k, 'web')}
                </Atoms.BrowserFrame>
              </div>
              <div className="device-col mobile">
                <div className="device-badge">
                  <Li.Smartphone size={11} />
                  <span>MOBILE · 375 × 812</span>
                </div>
                <Atoms.PhoneFrame height={760}>
                  {ScreenFor(t.k, 'mobile')}
                </Atoms.PhoneFrame>
              </div>
            </div>
          </div>

          <div className="page-footer">
            <span>MajorLink · 2026.07 정식 출시</span>
            <span>{i + 2} / {TABS.length + 1}</span>
          </div>
        </section>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PrintApp />);

// Auto-print after fonts + JSX render + animations settle
(async function () {
  try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch (e) {}
  // Wait for React to render
  await new Promise(r => setTimeout(r, 1500));
  window.print();
})();
