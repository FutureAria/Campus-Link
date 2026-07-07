// Screens 4: 온보딩(로그인·회원가입·본인인증·학적증빙·프로필설정), 구독 결제, 쪽지함
const A4 = window.MajorAtoms;
const D4 = window.MajorLinkData;
const D4b = window.MajorLinkData2;
const Lc4 = window.lucideReact || {};
const { useState: useS4, useEffect: useE4 } = React;

const BORDER4 = '#E4E4E7';
const MUTE4 = '#475569';
const FAINT4 = '#94A3B8';

function FieldRow4({ label, children, hint }) {
  return (
    <div className="mb-3">
      <label className="block text-[12px] font-semibold mb-1.5" style={{ color: '#334155' }}>{label}</label>
      {children}
      {hint && <div className="mt-1 text-[11px]" style={{ color: FAINT4 }}>{hint}</div>}
    </div>
  );
}

function TextInput4(props) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border px-3 py-2 text-[13px] outline-none focus:ring-2"
      style={{ borderColor: BORDER4, color: '#0F172A' }}
    />
  );
}

function ChipBtn4({ on, children, onClick }) {
  return (
    <button type="button" onClick={onClick}
      className="text-[12px] font-semibold rounded-full px-3 py-1.5 border transition"
      style={on ? { background: '#EEF2FF', borderColor: '#C7D2FE', color: '#4F46E5' } : { background: '#fff', borderColor: BORDER4, color: MUTE4 }}>
      {children}
    </button>
  );
}

function StepDots4({ steps, current }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {steps.map((s, i) => (
        <React.Fragment key={s}>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold" style={{ color: i < current ? '#15803D' : i === current ? '#0F172A' : FAINT4 }}>
            <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
              style={{
                background: i < current ? '#15803D' : i === current ? '#4F46E5' : '#fff',
                color: i <= current ? '#fff' : FAINT4,
                border: i <= current ? 'none' : `1.5px solid ${BORDER4}`,
              }}>
              {i < current ? '✓' : i + 1}
            </span>
            {s}
          </div>
          {i < steps.length - 1 && <div className="flex-1 h-px" style={{ background: BORDER4 }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

// ============================== ScreenAuth ==============================
function ScreenAuth({ device, animKey }) {
  const isM = device === 'mobile';
  const [step, setStep] = useS4('login'); // login | signup | phone | school | role | skills | done
  const [form, setForm] = useS4({ email: '', pw: '', pw2: '', name: '김민준', school: '한양대학교', dept: '컴퓨터공학과' });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const [carrier, setCarrier] = useS4('SKT');
  const [phoneChecking, setPhoneChecking] = useS4(false);
  const [phoneDone, setPhoneDone] = useS4(false);

  const [status, setStatus] = useS4('재학생');
  const [fileName, setFileName] = useS4(null);
  const [aiChecking, setAiChecking] = useS4(false);
  const [aiDone, setAiDone] = useS4(false);

  const ROLE_OPTS = ['개발자', '디자이너', '기획자', '마케터', '데이터'];
  const [roles, setRoles] = useS4(['개발자']);
  const toggleRole = (r) => setRoles(rs => rs.includes(r) ? rs.filter(x => x !== r) : [...rs, r]);

  const [skills, setSkills] = useS4(['React', 'TypeScript']);
  const [skillInput, setSkillInput] = useS4('');
  const addSkill = () => {
    const v = skillInput.trim();
    if (v && !skills.includes(v)) setSkills(s => [...s, v]);
    setSkillInput('');
  };
  const removeSkill = (s) => setSkills(list => list.filter(x => x !== s));

  const startPhoneVerify = () => {
    setPhoneChecking(true);
    setTimeout(() => { setPhoneChecking(false); setPhoneDone(true); }, 1300);
  };
  const startAiVerify = () => {
    setAiChecking(true);
    setTimeout(() => { setAiChecking(false); setAiDone(true); }, 1800);
  };

  const STEP_ORDER = ['phone', 'school', 'role', 'skills'];
  const stepLabels = ['본인인증', '학적인증', '역할·기술', '완료'];

  const Shell = ({ children, wide }) => (
    <div className={`${isM ? 'px-4 py-6' : 'px-10 py-10 flex justify-center'}`}>
      <div className={isM ? '' : `w-full ${wide ? 'max-w-xl' : 'max-w-md'}`}>{children}</div>
    </div>
  );

  if (step === 'login' || step === 'signup') {
    return (
      <div className="tab-enter" key={animKey}>
        <Shell>
          <div className="flex justify-center mb-6"><A4.Wordmark size="lg" /></div>
          <div className="rounded-2xl bg-white border shadow-card p-6" style={{ borderColor: BORDER4 }}>
            <div className="flex rounded-xl p-1 mb-5" style={{ background: '#F4F4F5' }}>
              {['login', 'signup'].map(k => (
                <button key={k} onClick={() => setStep(k)}
                  className="flex-1 text-[12.5px] font-bold rounded-lg py-2 transition"
                  style={step === k ? { background: '#fff', color: '#0F172A', boxShadow: '0 1px 3px rgba(15,23,42,.08)' } : { color: FAINT4 }}>
                  {k === 'login' ? '로그인' : '회원가입'}
                </button>
              ))}
            </div>

            {step === 'login' ? (
              <>
                <FieldRow4 label="이메일"><TextInput4 placeholder="you@university.ac.kr" value={form.email} onChange={e => set('email', e.target.value)} /></FieldRow4>
                <FieldRow4 label="비밀번호"><TextInput4 type="password" placeholder="••••••••" value={form.pw} onChange={e => set('pw', e.target.value)} /></FieldRow4>
                <button onClick={() => setStep('phone')} className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white mt-1" style={{ background: '#4F46E5' }}>로그인</button>
                <div className="flex items-center gap-2 my-4 text-[11px]" style={{ color: FAINT4 }}>
                  <div className="flex-1 h-px" style={{ background: BORDER4 }} />또는<div className="flex-1 h-px" style={{ background: BORDER4 }} />
                </div>
                <button className="w-full rounded-lg py-2.5 text-[13px] font-bold mb-2" style={{ background: '#FEE500', color: '#191600' }}>카카오로 계속하기</button>
                <button className="w-full rounded-lg py-2.5 text-[13px] font-bold border" style={{ borderColor: BORDER4, color: MUTE4 }}>Google로 계속하기</button>
              </>
            ) : (
              <>
                <FieldRow4 label="이메일"><TextInput4 placeholder="you@university.ac.kr" value={form.email} onChange={e => set('email', e.target.value)} /></FieldRow4>
                <div className="grid grid-cols-2 gap-3">
                  <FieldRow4 label="비밀번호" hint="8자 이상"><TextInput4 type="password" value={form.pw} onChange={e => set('pw', e.target.value)} /></FieldRow4>
                  <FieldRow4 label="비밀번호 확인"><TextInput4 type="password" value={form.pw2} onChange={e => set('pw2', e.target.value)} /></FieldRow4>
                </div>
                <FieldRow4 label="이름"><TextInput4 value={form.name} onChange={e => set('name', e.target.value)} /></FieldRow4>
                <div className="grid grid-cols-2 gap-3">
                  <FieldRow4 label="학교"><TextInput4 value={form.school} onChange={e => set('school', e.target.value)} /></FieldRow4>
                  <FieldRow4 label="학과"><TextInput4 value={form.dept} onChange={e => set('dept', e.target.value)} /></FieldRow4>
                </div>
                <label className="flex items-center gap-2 text-[12px] mb-3" style={{ color: MUTE4 }}>
                  <input type="checkbox" defaultChecked className="rounded" />이용약관 및 개인정보 처리방침에 동의합니다
                </label>
                <button onClick={() => setStep('phone')} className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white" style={{ background: '#4F46E5' }}>회원가입</button>
              </>
            )}
          </div>
        </Shell>
      </div>
    );
  }

  return (
    <div className="tab-enter" key={animKey}>
      <Shell wide>
        <StepDots4 steps={stepLabels} current={STEP_ORDER.indexOf(step)} />
        <div className="rounded-2xl bg-white border shadow-card p-6" style={{ borderColor: BORDER4 }}>

          {step === 'phone' && (
            <>
              <div className="font-bold text-[15px] mb-1">휴대폰 본인인증</div>
              <div className="text-[12px] mb-4" style={{ color: MUTE4 }}>중복 가입 방지를 위해 통신사 본인인증이 필요해요</div>
              <div className="rounded-lg px-3 py-2 mb-4 text-[11px] font-semibold" style={{ background: '#FFFBEB', color: '#B45309' }}>
                🧪 지금은 가상 인증(데모)이에요 · 실제 통신사·PASS 연동은 별도 계약 후 붙입니다
              </div>
              <FieldRow4 label="통신사 선택">
                <div className="flex flex-wrap gap-2">
                  {['SKT', 'KT', 'LG U+', '알뜰요금제'].map(c => <ChipBtn4 key={c} on={carrier === c} onClick={() => setCarrier(c)}>{c}</ChipBtn4>)}
                </div>
              </FieldRow4>
              <div className="grid grid-cols-2 gap-3">
                <FieldRow4 label="생년월일"><TextInput4 placeholder="YYYY.MM.DD" /></FieldRow4>
                <FieldRow4 label="휴대폰 번호"><TextInput4 placeholder="010-0000-0000" /></FieldRow4>
              </div>
              {!phoneDone ? (
                <button onClick={startPhoneVerify} disabled={phoneChecking}
                  className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white flex items-center justify-center gap-2 mt-2"
                  style={{ background: '#4F46E5', opacity: phoneChecking ? 0.7 : 1 }}>
                  {phoneChecking ? '인증 중…' : 'PASS 앱으로 인증하기'}
                </button>
              ) : (
                <div className="rounded-lg px-3 py-3 mb-1 flex items-center gap-2 text-[13px] font-bold" style={{ background: '#F0FDF4', color: '#15803D' }}>
                  <Lc4.Check size={16} /> 본인인증 완료 (가상)
                </div>
              )}
              <button onClick={() => setStep('school')} disabled={!phoneDone}
                className="w-full rounded-lg py-2.5 text-[13px] font-bold mt-2 border"
                style={{ borderColor: phoneDone ? '#4F46E5' : BORDER4, color: phoneDone ? '#4F46E5' : FAINT4 }}>다음</button>
            </>
          )}

          {step === 'school' && (
            <>
              <div className="font-bold text-[15px] mb-1">학적 증빙 서류 제출</div>
              <div className="text-[12px] mb-4" style={{ color: MUTE4 }}>전공 기반 매칭을 위해 재학·졸업 상태를 확인해요</div>
              <FieldRow4 label="현재 학적 상태">
                <div className="flex flex-wrap gap-2">
                  {['재학생', '졸업예정자', '졸업생', '대학원생'].map(s => <ChipBtn4 key={s} on={status === s} onClick={() => setStatus(s)}>{s}</ChipBtn4>)}
                </div>
              </FieldRow4>
              <FieldRow4 label="재학증명서 · 졸업증명서 첨부">
                <label className="block rounded-lg border-2 border-dashed p-4 text-center cursor-pointer" style={{ borderColor: BORDER4 }}>
                  <div className="text-[12px] font-semibold mb-0.5" style={{ color: '#334155' }}>📄 {fileName || '파일을 선택하세요 (PDF, JPG)'}</div>
                  <div className="text-[11px]" style={{ color: FAINT4 }}>최대 10MB</div>
                  <input type="file" className="hidden" onChange={e => setFileName(e.target.files[0]?.name || null)} />
                </label>
              </FieldRow4>
              <FieldRow4 label="발급 학교"><TextInput4 disabled value={`${form.school} · ${form.dept}`} style={{ color: MUTE4, background: '#FAFAFA' }} /></FieldRow4>

              {!aiDone ? (
                <button onClick={startAiVerify} disabled={aiChecking}
                  className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white mt-1"
                  style={{ background: '#4F46E5', opacity: aiChecking ? 0.7 : 1 }}>
                  {aiChecking ? '🤖 AI가 서류를 확인하는 중…' : '제출하고 AI 확인 시작'}
                </button>
              ) : (
                <div className="rounded-lg p-3 mt-1" style={{ background: '#EEF2FF', border: '1px solid #C7D2FE' }}>
                  <div className="text-[12px] font-bold mb-1.5" style={{ color: '#3730A3' }}>🤖 AI 서류 검증 결과</div>
                  <div className="text-[11.5px] leading-relaxed" style={{ color: '#3730A3' }}>
                    ✓ 발급기관 직인·서식 대조 완료<br />✓ 위변조 흔적 없음<br />✓ 이름·학교 일치 확인
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10.5px]" style={{ color: '#3730A3', opacity: .75 }}>제출 후 자동 확인됨</span>
                    <A4.Chip tone="lime">AI 인증완료</A4.Chip>
                  </div>
                </div>
              )}
              <button onClick={() => setStep('role')} disabled={!aiDone}
                className="w-full rounded-lg py-2.5 text-[13px] font-bold mt-2 border"
                style={{ borderColor: aiDone ? '#4F46E5' : BORDER4, color: aiDone ? '#4F46E5' : FAINT4 }}>다음</button>
            </>
          )}

          {step === 'role' && (
            <>
              <div className="font-bold text-[15px] mb-4">어떤 역할로 참여하고 싶나요? <span style={{ color: FAINT4, fontWeight: 500 }}>(복수 선택)</span></div>
              <div className="flex flex-wrap gap-2 mb-6">
                {ROLE_OPTS.map(r => <ChipBtn4 key={r} on={roles.includes(r)} onClick={() => toggleRole(r)}>{r}</ChipBtn4>)}
              </div>
              <button onClick={() => setStep('skills')} disabled={roles.length === 0}
                className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white"
                style={{ background: roles.length ? '#4F46E5' : '#C7C7CC' }}>다음</button>
            </>
          )}

          {step === 'skills' && (
            <>
              <div className="font-bold text-[15px] mb-3">기술 스택을 태그로 추가해보세요</div>
              <div className="flex flex-wrap gap-2 mb-3">
                {skills.map(s => (
                  <span key={s} className="inline-flex items-center gap-1.5 text-[12px] font-semibold rounded-full px-3 py-1" style={{ background: '#EEF2FF', color: '#4F46E5' }}>
                    {s}
                    <button onClick={() => removeSkill(s)} style={{ opacity: .6 }}><Lc4.X size={11} /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mb-6">
                <TextInput4 placeholder="입력 후 Enter" value={skillInput} onChange={e => setSkillInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && addSkill()} />
                <button onClick={addSkill} className="rounded-lg px-4 text-[12px] font-bold border" style={{ borderColor: BORDER4, color: MUTE4 }}>추가</button>
              </div>
              <button onClick={() => setStep('done')} className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white" style={{ background: '#4F46E5' }}>완료</button>
            </>
          )}

          {step === 'done' && (
            <div className="text-center py-4">
              <div className="text-[36px] mb-2">🎉</div>
              <div className="font-bold text-[17px] mb-1">환영해요, {form.name}님!</div>
              <div className="text-[12.5px] mb-6" style={{ color: MUTE4 }}>프로필 설정이 끝났어요. 이제 팀을 탐색해볼까요?</div>
              <button onClick={() => window.__nav && window.__nav.go('explore')} className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white" style={{ background: '#4F46E5' }}>탐색 화면으로 이동</button>
            </div>
          )}
        </div>
      </Shell>
    </div>
  );
}

// ============================== ScreenBilling ==============================
function ScreenBilling({ device, animKey }) {
  const isM = device === 'mobile';
  const pro = D4.PRICING.find(p => p.id === 'pro');
  const [subscribed, setSubscribed] = useS4(false);
  const [paying, setPaying] = useS4(false);
  const [history, setHistory] = useS4([
    { date: '2026.06.07', item: '개인 구독', amount: '1,990원', status: 'done' },
  ]);

  const pay = () => {
    setPaying(true);
    setTimeout(() => {
      setPaying(false);
      setSubscribed(true);
      setHistory(h => [{ date: '2026.07.07', item: '개인 구독', amount: '1,990원', status: 'done' }, ...h]);
    }, 1400);
  };

  return (
    <div className={`tab-enter ${isM ? 'px-4 py-6' : 'px-10 py-10 flex justify-center'}`} key={animKey}>
      <div className={isM ? '' : 'w-full max-w-md'}>
        {!subscribed ? (
          <div className="rounded-2xl bg-white border shadow-card p-6" style={{ borderColor: BORDER4 }}>
            <div className="font-bold text-[15px] mb-4">구독 결제</div>
            <div className="rounded-xl p-3.5 mb-4 flex items-center justify-between" style={{ background: '#EEF2FF' }}>
              <div>
                <div className="text-[12.5px] font-bold" style={{ color: '#3730A3' }}>{pro.name}</div>
                <div className="text-[10.5px] mt-0.5" style={{ color: '#3730A3', opacity: .8 }}>{pro.items.join(' · ')}</div>
              </div>
              <div className="font-bold text-[16px] tabular-nums" style={{ color: '#3730A3' }}>{pro.price}</div>
            </div>
            <FieldRow4 label="카드 번호"><TextInput4 placeholder="•••• •••• •••• 1234" /></FieldRow4>
            <div className="grid grid-cols-2 gap-3">
              <FieldRow4 label="유효기간"><TextInput4 placeholder="MM / YY" /></FieldRow4>
              <FieldRow4 label="CVC"><TextInput4 placeholder="•••" /></FieldRow4>
            </div>
            <FieldRow4 label="카드 소유자명"><TextInput4 placeholder="KIM MINJUN" /></FieldRow4>
            <label className="flex items-center gap-2 text-[11.5px] mb-4" style={{ color: MUTE4 }}>
              <input type="checkbox" defaultChecked className="rounded" />정기결제 및 자동 갱신에 동의합니다
            </label>
            <button onClick={pay} disabled={paying} className="w-full rounded-lg py-2.5 text-[13px] font-bold text-white" style={{ background: '#4F46E5', opacity: paying ? .7 : 1 }}>
              {paying ? '결제 처리 중…' : `${pro.price.replace('월 ', '')} 결제하기`}
            </button>
            <div className="text-center text-[11px] mt-2" style={{ color: FAINT4 }}>🔒 결제 정보는 안전하게 암호화됩니다 (데모 · 실제 PG 미연동)</div>
          </div>
        ) : (
          <div className="rounded-2xl bg-white border shadow-card p-6" style={{ borderColor: BORDER4 }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <A4.Chip tone="lime">개인 구독 · 활성</A4.Chip>
                <div className="text-[11.5px] mt-2" style={{ color: MUTE4 }}>다음 결제일 2026-08-07</div>
              </div>
              <button className="text-[11.5px] font-semibold rounded-lg border px-3 py-1.5" style={{ borderColor: BORDER4, color: MUTE4 }}>결제수단 변경</button>
            </div>
            <div className="text-[12px] mb-4" style={{ color: MUTE4 }}>등록된 카드 · •••• 1234</div>
            <div className="text-[11px] font-bold tracking-wide mb-2" style={{ color: FAINT4 }}>결제 내역</div>
            <div className="rounded-xl border overflow-hidden mb-4" style={{ borderColor: BORDER4 }}>
              {history.map((h, i) => (
                <div key={i} className="flex items-center justify-between px-3.5 py-2.5 text-[12px]" style={{ borderTop: i ? `1px solid ${BORDER4}` : 'none' }}>
                  <span className="tabular-nums" style={{ color: MUTE4 }}>{h.date}</span>
                  <span style={{ color: '#0F172A' }}>{h.item}</span>
                  <span className="tabular-nums font-semibold">{h.amount}</span>
                  <A4.Chip tone="lime">결제완료</A4.Chip>
                </div>
              ))}
            </div>
            <button onClick={() => setSubscribed(false)} className="w-full text-center text-[12px] underline" style={{ color: FAINT4 }}>구독 해지하기</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================== ScreenMessages ==============================
function ScreenMessages({ device, animKey }) {
  const isM = device === 'mobile';
  const [threads, setThreads] = useS4(() => D4b.MESSAGE_THREADS.map(t => ({ ...t, messages: [...t.messages] })));
  const [activeId, setActiveId] = useS4(D4b.MESSAGE_THREADS[0].id);
  const [mobileView, setMobileView] = useS4('list'); // list | thread
  const [draft, setDraft] = useS4('');

  const active = threads.find(t => t.id === activeId);
  const applicant = D4.APPLICANTS.find(a => a.id === active.applicantId);
  const project = D4.PROJECTS.find(p => p.id === active.projectId);

  const openThread = (id) => {
    setActiveId(id);
    setThreads(ts => ts.map(t => t.id === id ? { ...t, unread: false } : t));
    if (isM) setMobileView('thread');
  };

  const send = () => {
    const v = draft.trim();
    if (!v) return;
    setThreads(ts => ts.map(t => t.id === activeId ? { ...t, messages: [...t.messages, { from: 'me', text: v, time: '방금' }] } : t));
    setDraft('');
  };

  const List = (
    <div className={isM ? '' : 'border-r'} style={{ borderColor: BORDER4, width: isM ? '100%' : 240, flexShrink: 0 }}>
      <div className="p-2.5 border-b" style={{ borderColor: BORDER4 }}>
        <div className="rounded-lg text-[12px] px-3 py-2" style={{ background: '#F4F4F5', color: FAINT4 }}>대화 검색</div>
      </div>
      {threads.map(t => {
        const a = D4.APPLICANTS.find(x => x.id === t.applicantId);
        const p = D4.PROJECTS.find(x => x.id === t.projectId);
        const last = t.messages[t.messages.length - 1];
        return (
          <div key={t.id} onClick={() => openThread(t.id)} className="flex gap-2.5 px-3 py-2.5 cursor-pointer border-b"
            style={{ borderColor: '#F1F5F9', background: t.id === activeId && !isM ? '#EEF2FF' : 'transparent' }}>
            <A4.Avatar name={a.name} dept={a.dept} size={34} />
            <div className="min-w-0 flex-1">
              <div className="text-[12.5px] font-bold truncate">{p.title} · {a.name}</div>
              <div className="text-[11px] truncate" style={{ color: MUTE4 }}>{last.from === 'me' ? '나: ' : ''}{last.text}</div>
            </div>
            <div className="flex flex-col items-end gap-1 shrink-0">
              <span className="text-[10px]" style={{ color: FAINT4 }}>{last.time}</span>
              {t.unread && <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#4F46E5' }} />}
            </div>
          </div>
        );
      })}
    </div>
  );

  const Pane = (
    <div className="flex-1 flex flex-col p-4 min-w-0">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {isM && <button onClick={() => setMobileView('list')}><Lc4.ChevronLeft size={18} /></button>}
          <div>
            <div className="text-[13px] font-bold">{applicant.name}</div>
            <div className="text-[11px]" style={{ color: MUTE4 }}>{project.title} · 지원자</div>
          </div>
        </div>
        <button className="text-[11px] font-semibold rounded-lg border px-2.5 py-1" style={{ borderColor: BORDER4, color: MUTE4 }}>프로필 보기</button>
      </div>
      <div className="rounded-lg px-3 py-2 mb-3 text-[11px]" style={{ background: '#EEF2FF', color: '#3730A3' }}>
        💬 쪽지는 실시간 채팅이 아니에요 · 보통 24시간 안에 답장이 와요
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col gap-2 mb-3">
        {active.messages.map((m, i) => (
          <div key={i} className="max-w-[78%] text-[12.5px] px-3 py-2 rounded-2xl leading-snug"
            style={m.from === 'me'
              ? { alignSelf: 'flex-end', background: '#4F46E5', color: '#fff', borderBottomRightRadius: 4 }
              : { alignSelf: 'flex-start', background: '#F1F5F9', color: '#334155', borderBottomLeftRadius: 4 }}>
            {m.text}
            <div className="text-[9.5px] mt-1 opacity-70">{m.time}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <TextInput4 placeholder="메시지를 입력하세요" value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} />
        <button onClick={send} className="rounded-lg px-4 text-[12.5px] font-bold text-white shrink-0" style={{ background: '#4F46E5' }}>전송</button>
      </div>
    </div>
  );

  return (
    <div className="tab-enter h-full" key={animKey}>
      <div className="flex h-full" style={{ minHeight: isM ? undefined : 480 }}>
        {isM ? (mobileView === 'list' ? List : Pane) : (<>{List}{Pane}</>)}
      </div>
    </div>
  );
}

window.MajorScreens4 = { ScreenAuth, ScreenBilling, ScreenMessages };
