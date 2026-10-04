import React, { useMemo } from "react";
import { loadHistory, pickCelebration, saveHistory } from "../../lib/panda.js";

// Full-screen celebration for a perfect quiz. Pure SVG + CSS (no assets, so
// it works offline). The combination is picked once per mount.

function Accessory({ type }) {
  switch (type) {
    case "crown":
      return <path d="M70 34 L78 14 L90 30 L100 10 L110 30 L122 14 L130 34 Z" fill="#facc15" stroke="#b45309" strokeWidth="2" />;
    case "party":
      return (
        <g>
          <path d="M84 36 L100 0 L116 36 Z" fill="#f472b6" stroke="#9d174d" strokeWidth="2" />
          <circle cx="100" cy="2" r="5" fill="#fde047" />
        </g>
      );
    case "sunglasses":
      return (
        <g>
          <rect x="66" y="62" width="28" height="16" rx="6" fill="#111827" />
          <rect x="106" y="62" width="28" height="16" rx="6" fill="#111827" />
          <rect x="94" y="66" width="12" height="4" fill="#111827" />
        </g>
      );
    case "bow":
      return (
        <g transform="translate(128 26)">
          <path d="M0 0 L-16 -10 L-16 10 Z M0 0 L16 -10 L16 10 Z" fill="#fb7185" stroke="#be123c" strokeWidth="2" />
          <circle r="4" fill="#be123c" />
        </g>
      );
    case "grad":
      return (
        <g>
          <path d="M66 26 L100 12 L134 26 L100 40 Z" fill="#1f2937" />
          <rect x="88" y="30" width="24" height="10" fill="#1f2937" />
          <path d="M134 26 L134 44" stroke="#facc15" strokeWidth="3" />
        </g>
      );
    default:
      return null;
  }
}

function Panda({ accessory }) {
  return (
    <svg viewBox="0 0 200 230" className="panda-svg" aria-hidden="true">
      {/* legs */}
      <ellipse cx="72" cy="208" rx="20" ry="16" fill="#111827" />
      <ellipse cx="128" cy="208" rx="20" ry="16" fill="#111827" />
      {/* body */}
      <ellipse cx="100" cy="160" rx="54" ry="52" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
      <ellipse cx="100" cy="168" rx="30" ry="28" fill="#f3f4f6" />
      {/* arms */}
      <ellipse className="panda-arm-l" cx="50" cy="140" rx="16" ry="30" fill="#111827" />
      <ellipse className="panda-arm-r" cx="150" cy="140" rx="16" ry="30" fill="#111827" />
      {/* head */}
      <circle cx="68" cy="34" r="17" fill="#111827" />
      <circle cx="132" cy="34" r="17" fill="#111827" />
      <circle cx="100" cy="72" r="46" fill="#fff" stroke="#e5e7eb" strokeWidth="2" />
      <ellipse cx="80" cy="70" rx="13" ry="16" fill="#111827" transform="rotate(-20 80 70)" />
      <ellipse cx="120" cy="70" rx="13" ry="16" fill="#111827" transform="rotate(20 120 70)" />
      <circle cx="82" cy="68" r="5" fill="#fff" />
      <circle cx="118" cy="68" r="5" fill="#fff" />
      <ellipse cx="100" cy="88" rx="7" ry="5" fill="#111827" />
      <path d="M90 98 Q100 108 110 98" stroke="#111827" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="72" cy="94" r="7" fill="#fda4af" opacity="0.7" />
      <circle cx="128" cy="94" r="7" fill="#fda4af" opacity="0.7" />
      <Accessory type={accessory} />
    </svg>
  );
}

function SceneProps({ scene, palette }) {
  if (scene === "trampoline") return <div className="panda-trampoline" />;
  if (scene === "bamboo") {
    return (
      <>
        <div className="panda-bamboo" />
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="panda-star" style={{ left: `${15 + i * 17}%`, animationDelay: `${i * 0.3}s` }}>⭐</span>
        ))}
      </>
    );
  }
  if (scene === "juggle") {
    return (
      <div className="panda-juggle">
        {["💖", "💛", "💚"].map((h, i) => (
          <span key={i} style={{ animationDelay: `${-i * 0.5}s` }}>{h}</span>
        ))}
      </div>
    );
  }
  if (scene === "fireworks") {
    return [0, 1, 2].map((i) => (
      <div
        key={i}
        className="panda-firework"
        style={{ left: `${20 + i * 30}%`, top: `${12 + (i % 2) * 12}%`, animationDelay: `${i * 0.45}s`, color: palette[i] }}
      />
    ));
  }
  return null;
}

export default function PandaCelebration({ onClose }) {
  const c = useMemo(() => {
    const history = loadHistory();
    const choice = pickCelebration(history);
    saveHistory([...history, choice.scene]);
    return choice;
  }, []);

  const confetti = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 1.5,
        duration: 2.2 + Math.random() * 1.8,
        color: c.palette[i % c.palette.length],
        rotate: Math.random() * 360,
      })),
    [c]
  );

  return (
    <div className={`panda-overlay scene-${c.scene}`} onClick={onClose} role="dialog" aria-label={c.message}>
      {confetti.map((p, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
      <SceneProps scene={c.scene} palette={c.palette} />
      <div className="panda-stage">
        <div className="panda-actor">
          <Panda accessory={c.accessory} />
        </div>
      </div>
      <div className="panda-message">{c.message}</div>
      <div className="panda-hint">Tippen zum Schließen</div>
    </div>
  );
}
