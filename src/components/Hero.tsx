import styles from "./Hero.module.css";

type ScenarioKey = "launch" | "rescue" | "scale";

const scenarioMap: Record<
  ScenarioKey,
  { label: string; description: string; tone: string }
> = {
  launch: {
    label: "Quantum Launch",
    description: "Synthesize market telemetry into decisive launch vectors.",
    tone: "Translate noisy launches into high-signal victory laps."
  },
  rescue: {
    label: "Realtime Rescue",
    description: "Stabilize critical systems before humans feel the turbulence.",
    tone: "Command incident rooms with sub-second anomaly triage."
  },
  scale: {
    label: "Relentless Scale",
    description: "Auto-tune operations while expanding into uncharted load.",
    tone: "Automate capacity horizons and keep margins compounding."
  }
};

type HeroProps = {
  scenario: ScenarioKey;
  onScenarioChange: (scenario: ScenarioKey) => void;
  metrics: {
    response: string;
    confidence: string;
    savings: string;
  };
};

export function Hero({ scenario, onScenarioChange, metrics }: HeroProps) {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.chipRow}>
            <span className="chip">Super Heavy Grok Advantage</span>
            <span className={styles.liveBadge}>Live Signal Feed</span>
          </div>
          <h1 className={styles.title}>
            <span className="gradient-text">Deploy Grok-grade leverage</span>{" "}
            to every decision surface.
          </h1>
          <p className="tagline">
            Architected for teams that weaponize information velocity. Super
            Heavy Grok Advantage fuses realtime telemetry, autonomous reasoning,
            and operator-grade controls into one command layer.
          </p>
          <div className={styles.actions}>
            <button className="cta-button">
              Activate Mission Console
            </button>
            <button className="secondary-button">Download Strategic Brief</button>
          </div>
          <div className={styles.metrics}>
            <div>
              <div className="metric-highlight">{metrics.response}</div>
              <div className="metric-copy">Response Velocity</div>
            </div>
            <div>
              <div className="metric-highlight">{metrics.confidence}</div>
              <div className="metric-copy">Predictive Confidence</div>
            </div>
            <div>
              <div className="metric-highlight">{metrics.savings}</div>
              <div className="metric-copy">Resource Advantage</div>
            </div>
          </div>
          <div className={styles.scenario}>
            <div className="section-label">
              <span className="chip">Live Simulation</span>
              <div>
                <h2 className={styles.subtitle}>
                  Tune the Grok field strength per mission.
                </h2>
                <p className={styles.subtitleCopy}>{scenarioMap[scenario].tone}</p>
              </div>
            </div>
            <div className={styles.scenarioTabs}>
              {(Object.keys(scenarioMap) as ScenarioKey[]).map((key) => {
                const state = key === scenario ? styles.scenarioActive : "";
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => onScenarioChange(key)}
                    className={`${styles.scenarioButton} ${state}`}
                  >
                    <span className={styles.scenarioLabel}>
                      {scenarioMap[key].label}
                    </span>
                    <span className={styles.scenarioDescription}>
                      {scenarioMap[key].description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
