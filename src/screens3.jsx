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
  const me = { name: '김민준', dept: '컴퓨터공학', year: 3, school: '한양대', mail: 'demo@majorlink.example', skills: ['React','Spring','MySQL','Git','Figma'], interests: ['교내 서비스','AI/ML','헬스케어'] };
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

window.MajorScreens3 = { ApplicantModal, TaskModal, ScreenMyPage };
