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
