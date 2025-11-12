import styles from "./AdvantageMatrix.module.css";

const matrix = [
  {
    title: "Signal Density",
    value: "12.4M datapoints / hr",
    detail: "Pipelines structured and vectorized in realtime."
  },
  {
    title: "Human Override",
    value: "<180ms",
    detail: "Operator confirmations with prebriefed context."
  },
  {
    title: "Agent Autonomy",
    value: "Level 4",
    detail: "Autonomous task execution with policy guardrails."
  },
  {
    title: "Memory Horizon",
    value: "480K tokens",
    detail: "Long-form situational awareness with compression."
  },
  {
    title: "Compliance Trace",
    value: "Immutable",
    detail: "Every action notarized, streamed to your ledger."
  },
  {
    title: "Ecosystem Unlock",
    value: "37 connectors",
    detail: "Drop-in adapters for your data and infra stack."
  }
];

export function AdvantageMatrix() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-label">
          <span className="chip">Operating Envelope</span>
          <div>
            <h2 className={styles.title}>Grok advantage metrics.</h2>
            <p className={styles.copy}>
              Benchmark the Grok Advantage envelope and calibrate how aggressively
              to hand-off execution to autonomous co-strategists.
            </p>
          </div>
        </div>
        <div className="matrix">
          {matrix.map((item) => (
            <div key={item.title} className="matrix-cell">
              <span className="matrix-title">{item.title}</span>
              <span className="matrix-value">{item.value}</span>
              <p className={styles.detail}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
