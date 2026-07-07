// Screens 5: 신고·차단·안전센터, 인증·수상 내역 관리, 기관 관리자 대시보드, 운영자 콘솔
const A5 = window.MajorAtoms;
const D5 = window.MajorLinkData;
const D5b = window.MajorLinkData2;
const Lc5 = window.lucideReact || {};
const { useState: useS5 } = React;

const BORDER5 = '#E4E4E7';
const MUTE5 = '#475569';
const FAINT5 = '#94A3B8';

function TextInput5(props) {
  return <input {...props} className="w-full rounded-lg border px-3 py-2 text-[13px] outline-none" style={{ borderColor: BORDER5, color: '#0F172A' }} />;
}
function SummaryCard5({ n, l }) {
  return (
    <div className="rounded-xl border p-3" style={{ borderColor: BORDER5, background: '#fff' }}>
      <div className="font-bold text-[19px] tabular-nums" style={{ color: '#0F172A', letterSpacing: '-0.02em' }}>{n}</div>
      <div className="text-[11px] mt-0.5" style={{ color: FAINT5 }}>{l}</div>
    </div>
  );
}
function BarRow5({ name, count, max }) {
  return (
    <div className="flex items-center gap-2.5 mb-2 text-[12px]">
      <div className="w-20 shrink-0" style={{ color: MUTE5 }}>{name}</div>
      <div className="flex-1 h-2 rounded-full" style={{ background: '#F1F5F9' }}>
        <div className="h-full rounded-full" style={{ width: `${(count / max) * 100}%`, background: '#4F46E5' }} />
      </div>
      <div className="w-6 text-right tabular-nums" style={{ color: FAINT5 }}>{count}</div>
    </div>
  );
}

// ============================== ScreenSafety ==============================
const REPORT_REASONS = ['스팸 · 광고성 내용', '사기 · 허위 정보', '무단 노쇼 (연락 없이 불참)', '부적절한 언어 · 행동', '기타'];

function ScreenSafety({ device, animKey }) {
  const isM = device === 'mobile';
  const [reports, setReports] = useS5(() => D5b.REPORTS.map(r => ({ ...r })));
  const [blocked, setBlocked] = useS5(() => [...D5b.BLOCKED_USERS]);
  const [targetId, setTargetId] = useS5(D5.APPLICANTS[7].id);
  const [reason, setReason] = useS5('');
  const [detail, setDetail] = useS5('');

  const submit = () => {
    if (!reason) return;
    const id = 'rp' + Date.now();
    setReports(rs => [{ id, applicantId: targetId, reason, detail, status: 'reviewing', createdAt: '방금' }, ...rs]);
    setReason(''); setDetail('');
    setTimeout(() => setReports(rs => rs.map(r => r.id === id ? { ...r, status: 'resolved' } : r)), 3000);
  };

  return (
    <div className={`tab-enter ${isM ? 'px-4 py-5' : 'px-10 py-8 grid grid-cols-12 gap-5'}`} key={animKey}>
      <div className={isM ? 'mb-5' : 'col-span-5'}>
        <A5.Section title="신고하기">
          <div className="mb-3">
            <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#334155' }}>신고 대상</label>
            <select value={targetId} onChange={e => setTargetId(Number(e.target.value))} className="w-full rounded-lg border px-3 py-2 text-[13px]" style={{ borderColor: BORDER5 }}>
              {D5.APPLICANTS.map(a => <option key={a.id} value={a.id}>{a.name} · {a.dept}</option>)}
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#334155' }}>신고 사유</label>
            <div className="flex flex-col gap-2">
              {REPORT_REASONS.map(r => (
                <label key={r} className="flex items-center gap-2 text-[12.5px]" style={{ color: MUTE5 }}>
                  <input type="radio" name="reason" checked={reason === r} onChange={() => setReason(r)} />{r}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#334155' }}>상황을 자세히 설명해주세요</label>
            <textarea value={detail} onChange={e => setDetail(e.target.value)} rows={3}
              className="w-full rounded-lg border px-3 py-2 text-[13px] outline-none" style={{ borderColor: BORDER5 }} placeholder="지난주 미팅 이후 연락이 닿지 않고 있어요..." />
          </div>
          <button onClick={submit} disabled={!reason} className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white"
            style={{ background: reason ? '#F43F5E' : '#E4E4E7', color: reason ? '#fff' : FAINT5 }}>신고 제출하기</button>
          <div className="text-center text-[11px] mt-2" style={{ color: FAINT5 }}>허위 신고가 확인되면 계정 제재로 이어질 수 있어요</div>
        </A5.Section>
      </div>

      <div className={isM ? '' : 'col-span-7 grid gap-5'}>
        <A5.Section title="내 신고 내역">
          <div className="grid gap-2">
            {reports.map(r => {
              const a = D5.APPLICANTS.find(x => x.id === r.applicantId);
              return (
                <div key={r.id} className="flex items-center gap-3 rounded-lg border px-3 py-2.5" style={{ borderColor: BORDER5 }}>
                  <A5.Avatar name={a.name} dept={a.dept} size={30} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[12.5px] font-bold truncate">{a.name} <span className="font-normal" style={{ color: MUTE5 }}>· {r.reason}</span></div>
                    <div className="text-[10.5px]" style={{ color: FAINT5 }}>{r.createdAt}</div>
                  </div>
                  <A5.Chip tone={r.status === 'resolved' ? 'gray' : 'amber'}>{r.status === 'resolved' ? '처리완료' : '검토중'}</A5.Chip>
                </div>
              );
            })}
          </div>
        </A5.Section>

        <A5.Section title={`차단한 사용자 · ${blocked.length}명`}>
          {blocked.length === 0 ? (
            <div className="text-[12px] text-center py-2" style={{ color: FAINT5 }}>차단한 사용자가 없어요</div>
          ) : blocked.map(id => {
            const a = D5.APPLICANTS.find(x => x.id === id);
            return (
              <div key={id} className="flex items-center gap-3">
                <A5.Avatar name={a.name} dept={a.dept} size={30} />
                <div className="flex-1 text-[12.5px] font-semibold">{a.name}</div>
                <button onClick={() => setBlocked(bs => bs.filter(x => x !== id))} className="text-[11.5px] font-semibold rounded-lg border px-2.5 py-1" style={{ borderColor: BORDER5, color: MUTE5 }}>차단 해제</button>
              </div>
            );
          })}
        </A5.Section>
      </div>
    </div>
  );
}

// ============================== ScreenVerifications ==============================
const VKIND_ICON = { edu: '🎓', award: '🏆' };
const VSTATUS_TONE = { approved: 'lime', ai_checking: 'amber', rejected: 'rose' };
const VSTATUS_LABEL = { approved: '승인됨', ai_checking: 'AI 검증중', rejected: '반려됨' };

function ScreenVerifications({ device, animKey }) {
  const isM = device === 'mobile';
  const [list, setList] = useS5(() => D5b.MY_VERIFICATIONS.map(v => ({ ...v })));
  const [adding, setAdding] = useS5(false);
  const [title, setTitle] = useS5('');

  const addVerification = () => {
    if (!title.trim()) return;
    const id = 'new' + Date.now();
    setList(l => [{ id, kind: 'award', title: title.trim(), sub: 'AI가 진위를 확인하는 중이에요', status: 'ai_checking', method: 'ai' }, ...l]);
    setTitle(''); setAdding(false);
    setTimeout(() => setList(l => l.map(v => v.id === id ? { ...v, status: 'approved', sub: '🤖 AI 자동 승인됨' } : v)), 2500);
  };

  const approved = list.filter(v => v.status === 'approved');

  return (
    <div className={`tab-enter ${isM ? 'px-4 py-5' : 'px-10 py-8 grid grid-cols-12 gap-5'}`} key={animKey}>
      <div className={isM ? 'mb-5' : 'col-span-7'}>
        <A5.Section title={`내 인증·수상 내역 · ${list.length}건`} action={
          <button onClick={() => setAdding(a => !a)} className="text-[11.5px] font-semibold rounded-lg border px-2.5 py-1" style={{ borderColor: BORDER5, color: '#4F46E5' }}>+ 새 인증 추가</button>
        }>
          {adding && (
            <div className="rounded-lg border p-3 mb-3 flex gap-2" style={{ borderColor: '#C7D2FE', background: '#EEF2FF' }}>
              <TextInput5 placeholder="예: 2026 교내 캡스톤디자인 경진대회 장려상" value={title} onChange={e => setTitle(e.target.value)} onKeyDown={e => e.key === 'Enter' && addVerification()} />
              <button onClick={addVerification} className="rounded-lg px-3.5 text-[12px] font-bold text-white shrink-0" style={{ background: '#4F46E5' }}>제출</button>
            </div>
          )}
          <div className="grid gap-2">
            {list.map(v => (
              <div key={v.id} className="flex items-center gap-3 rounded-lg border px-3 py-2.5" style={{ borderColor: BORDER5 }}>
                <div className="text-[16px] shrink-0">{VKIND_ICON[v.kind]}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12.5px] font-bold truncate">{v.title}</div>
                  <div className="text-[11px] truncate" style={{ color: v.status === 'ai_checking' ? '#B45309' : FAINT5 }}>{v.sub}</div>
                </div>
                <A5.Chip tone={VSTATUS_TONE[v.status]}>{VSTATUS_LABEL[v.status]}</A5.Chip>
              </div>
            ))}
          </div>
        </A5.Section>
      </div>

      <div className={isM ? '' : 'col-span-5'}>
        <A5.Section title="포트폴리오에 이렇게 반영돼요">
          <div className="rounded-xl border p-3.5" style={{ borderColor: BORDER5 }}>
            <div className="text-[12.5px] font-bold mb-2.5">수상 및 인증</div>
            <div className="grid gap-2">
              {approved.map(v => (
                <div key={v.id} className="flex items-center gap-2 text-[12px]" style={{ color: '#334155' }}>
                  <span className="w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ background: '#15803D' }}>✓</span>
                  {v.title}
                </div>
              ))}
            </div>
          </div>
          <div className="text-[11.5px] mt-3" style={{ color: MUTE5 }}>
            AI가 진위를 확인해 통과시킨 인증만 포트폴리오 하단에 자동으로 노출돼요. AI 검증중·반려된 항목은 노출되지 않아요.
          </div>
        </A5.Section>
      </div>
    </div>
  );
}

// ============================== ScreenOrg ==============================
function ScreenOrg({ device, animKey }) {
  const isM = device === 'mobile';
  const [sortBy, setSortBy] = useS5('dday');
  const projects = [...D5.PROJECTS].sort((a, b) => sortBy === 'dday' ? a.dday - b.dday : b.id - a.id);
  const maxDept = Math.max(...D5b.ORG_DEPT_STATS.map(d => d.count));

  return (
    <div className={`tab-enter ${isM ? 'px-4 py-5' : 'px-10 py-8'}`} key={animKey}>
      <div className="text-[11px] font-bold tracking-wider mb-1" style={{ color: FAINT5 }}>기관 관리자 대시보드</div>
      <div className="font-bold text-[17px] mb-4">{D5b.ORG_INFO.name}</div>
      <div className={`grid ${isM ? 'grid-cols-2' : 'grid-cols-4'} gap-3 mb-6`}>
        <SummaryCard5 n={D5b.ORG_INFO.studentCount} l="참여 학생" />
        <SummaryCard5 n={D5.PROJECTS.length} l="진행중 프로젝트" />
        <SummaryCard5 n={37} l="완료 프로젝트" />
        <SummaryCard5 n={`${D5b.ORG_INFO.matchAvg}점`} l="평균 매칭점수 [가설]" />
      </div>
      <div className={`grid ${isM ? '' : 'grid-cols-2 gap-6'}`}>
        <A5.Section title="학과별 참여 현황" className={isM ? 'mb-5' : ''}>
          {D5b.ORG_DEPT_STATS.map(d => <BarRow5 key={d.name} name={d.name} count={d.count} max={maxDept} />)}
        </A5.Section>
        <A5.Section title="소속 학생 참여 프로젝트" action={
          <div className="flex gap-1">
            {[['dday', '마감임박순'], ['id', '최신순']].map(([k, l]) => (
              <button key={k} onClick={() => setSortBy(k)} className="text-[10.5px] font-semibold rounded-full px-2.5 py-1"
                style={sortBy === k ? { background: '#EEF2FF', color: '#4F46E5' } : { color: FAINT5 }}>{l}</button>
            ))}
          </div>
        }>
          <div className="grid gap-2">
            {projects.map(p => (
              <div key={p.id} className="flex items-center gap-3 text-[12px] rounded-lg border px-3 py-2" style={{ borderColor: BORDER5 }}>
                <div className="flex-1 min-w-0 truncate font-semibold">{p.title}</div>
                <div className="shrink-0" style={{ color: MUTE5 }}>{p.leader}</div>
                <div className="shrink-0 tabular-nums" style={{ color: FAINT5 }}>{p.filled}/{p.total}명</div>
                <A5.Chip tone="indigo">D-{p.dday}</A5.Chip>
              </div>
            ))}
          </div>
        </A5.Section>
      </div>
    </div>
  );
}

// ============================== ScreenAdmin ==============================
function ScreenAdmin({ device, animKey }) {
  const isM = device === 'mobile';
  const [queue, setQueue] = useS5(() => D5b.ADMIN_QUEUE.map(q => ({ ...q })));
  const resolve = (id) => setQueue(q => q.filter(x => x.id !== id));

  return (
    <div className={`tab-enter ${isM ? 'px-4 py-5' : 'px-10 py-8'}`} key={animKey}>
      <div className="text-[11px] font-bold tracking-wider mb-4" style={{ color: FAINT5 }}>서비스 운영자 콘솔</div>
      <div className={`grid ${isM ? 'grid-cols-2' : 'grid-cols-4'} gap-3 mb-6`}>
        <SummaryCard5 n={D5b.ADMIN_STATS.totalUsers.toLocaleString()} l="전체 가입자" />
        <SummaryCard5 n={`${(D5b.ADMIN_STATS.mrr / 10000).toFixed(1)}만`} l="월 매출(MRR) [가설]" />
        <SummaryCard5 n={queue.length} l="신고 처리 대기" />
        <SummaryCard5 n={D5b.ADMIN_STATS.newProjectsToday} l="오늘 신규 프로젝트" />
      </div>
      <div className={`grid ${isM ? '' : 'grid-cols-2 gap-6'}`}>
        <A5.Section title="신고 처리 대기 큐" className={isM ? 'mb-5' : ''}>
          {queue.length === 0 ? (
            <div className="text-[12px] text-center py-4" style={{ color: FAINT5 }}>처리할 신고가 없어요 🎉</div>
          ) : (
            <div className="grid gap-2">
              {queue.map(q => (
                <div key={q.id} className="flex items-center gap-3 rounded-lg border px-3 py-2.5" style={{ borderColor: BORDER5 }}>
                  <div className="flex-1 min-w-0 text-[12px]"><b>{q.from}</b> → <b>{q.to}</b> <span style={{ color: MUTE5 }}>· {q.reason}</span></div>
                  <button onClick={() => resolve(q.id)} className="text-[11px] font-semibold rounded-lg border px-2.5 py-1 shrink-0" style={{ borderColor: BORDER5, color: MUTE5 }}>처리하기</button>
                </div>
              ))}
            </div>
          )}
        </A5.Section>
        <A5.Section title="최근 결제 로그">
          <div className="grid gap-2">
            {D5b.ADMIN_PAYMENTS.map((p, i) => (
              <div key={i} className="flex items-center justify-between text-[12px]">
                <span className="tabular-nums" style={{ color: FAINT5 }}>{p.date}</span>
                <span style={{ color: '#0F172A' }}>{p.user}</span>
                <span style={{ color: MUTE5 }}>{p.plan}</span>
                <span className="font-semibold tabular-nums">{p.amount.toLocaleString()}원</span>
              </div>
            ))}
          </div>
        </A5.Section>
      </div>
    </div>
  );
}

window.MajorScreens5 = { ScreenSafety, ScreenVerifications, ScreenOrg, ScreenAdmin };
