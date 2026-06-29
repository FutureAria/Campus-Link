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
        <div className="mb-7">
          <div className="text-[12px] font-bold tracking-wide" style={{ color: '#4F46E5' }}>FEATURES</div>
          <h2 className="font-bold mt-2" style={{ fontSize: isM ? 22 : 28, letterSpacing: '-0.02em' }}>5가지 문제, 6가지 해답</h2>
        </div>
        <FeaturesCarousel />
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

function FeaturesCarousel() {
  const trackRef = useR1(null);

  useE1(() => {
    if (!document.getElementById('feature-carousel-kf')) {
      const s = document.createElement('style');
      s.id = 'feature-carousel-kf';
      s.textContent = `@keyframes featureScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`;
      document.head.appendChild(s);
    }
    if (trackRef.current) {
      trackRef.current.style.animation = 'featureScroll 28s linear infinite';
    }
  }, []);

  const items = [...D.FEATURES, ...D.FEATURES];

  return (
    <div style={{ overflow: 'hidden', margin: '0 -48px' }}>
      <div
        ref={trackRef}
        style={{ display: 'flex', gap: 16, width: 'max-content', padding: '4px 48px' }}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {items.map((f, i) => (
          <div key={`${f.id}-${i}`} className="rounded-2xl border bg-white p-5" style={{ borderColor: '#E4E4E7', width: 260, flexShrink: 0 }}>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold tracking-wider rounded-md px-2 py-1" style={{ background: '#EEF2FF', color: '#4F46E5' }}>{f.id}</span>
              <span className="text-zinc-300 text-xs">0{(i % D.FEATURES.length) + 1}</span>
            </div>
            <div className="mt-5 font-bold text-[17px]" style={{ letterSpacing: '-0.02em' }}>{f.title}</div>
            <div className="mt-2 text-[13px] leading-relaxed" style={{ color: '#475569' }}>{f.desc}</div>
          </div>
        ))}
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
