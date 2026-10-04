import { Copa2026Burst } from "./Copa2026Burst";

/* Spain, world champion 2026: a ribbon above the header on every page, styled
 * in copa2026.css, plus a short burst of confetti once per visit. */
const TEXT: Record<string, string> = { default: "Spain · 2026 World Cup champions" };

export function Copa2026({ lang }: { lang?: string }) {
  const text = TEXT[(lang || "").slice(0, 2)] ?? TEXT.default;
  return (
    <div className="perla26" role="note" aria-label={text}>
      <span className="perla26-flag" aria-hidden="true" />
      <span className="perla26-trophy" aria-hidden="true">🏆</span>
      <span className="perla26-text">{text}</span>
      <span className="perla26-pitch" aria-hidden="true">
        <span className="perla26-ballx">
          <span className="perla26-ball">⚽</span>
        </span>
      </span>
      <span className="perla26-chip" aria-hidden="true">2026</span>
      <Copa2026Burst />
    </div>
  );
}
