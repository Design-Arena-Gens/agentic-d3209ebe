import { useMemo, useState } from "react";
import styles from "./ScenarioComposer.module.css";

type Pressure = "calm" | "volatile" | "critical";
type Objective = "growth" | "stability" | "defense";

const pressureCopy: Record<Pressure, string> = {
  calm: "Minimal turbulence detected. Strategic cycles can lengthen.",
  volatile: "Oscillating signals demand agile, trust-but-verify loops.",
  critical: "Mission critical. Execute blackout protocols with razor precision."
};

const objectiveCopy: Record<Objective, string> = {
  growth: "Aggressive expansion with autonomous market scouting.",
  stability: "Balance speed and risk with continuous guardrails.",
  defense: "Prioritize containment, compliance, and communications."
};

const recommendedPlays: Array<{
  pressure: Pressure;
  objective: Objective;
  play: string;
  description: string;
}> = [
  {
    pressure: "calm",
    objective: "growth",
    play: "Pipeline Amplification",
    description:
      "Launch Grok scouts into 8 new microproblems and auto-rank ROI by signal freshness."
  },
  {
    pressure: "calm",
    objective: "stability",
    play: "Predictive Guardrails",
    description:
      "Add explainability overlays on automations and conduct weekly alignment briefings."
  },
  {
    pressure: "calm",
    objective: "defense",
    play: "Shadow Simulation",
    description:
      "Run background interdiction rehearsals to validate recovery runbooks."
  },
  {
    pressure: "volatile",
    objective: "growth",
    play: "Dynamic Pricing Commander",
    description:
      "Orchestrate Grok agents across revenue, marketing, and ops to auto-sculpt offers hourly."
  },
  {
    pressure: "volatile",
    objective: "stability",
    play: "Telemetry Arbitration",
    description:
      "Resolve conflicting signals with contextual debate loops that surface final recommendations."
  },
  {
    pressure: "volatile",
    objective: "defense",
    play: "Customer Confidence Mesh",
    description:
      "Synchronize incident intelligence with CX autopilots to keep trust metrics net-positive."
  },
  {
    pressure: "critical",
    objective: "growth",
    play: "Skunk Ops Launchpad",
    description:
      "Spin up isolated Grok enclaves for black-ops partnerships with expedited approvals."
  },
  {
    pressure: "critical",
    objective: "stability",
    play: "Zero-Latency War Room",
    description:
      "Switch to synchronous Grok guidance with multi-channel failovers and timestamped accountability."
  },
  {
    pressure: "critical",
    objective: "defense",
    play: "Containment Cascade",
    description:
      "Trigger automated clamps, regenerate scripts, and broadcast compliance with audit-ready logs."
  }
];

export function ScenarioComposer() {
  const [pressure, setPressure] = useState<Pressure>("volatile");
  const [objective, setObjective] = useState<Objective>("growth");

  const play = useMemo(
    () =>
      recommendedPlays.find(
        (item) => item.pressure === pressure && item.objective === objective
      ),
    [pressure, objective]
  );

  return (
    <section className={styles.section} id="composer">
      <div className="container">
        <div className="section-label">
          <span className="chip">Scenario Composer</span>
          <div>
            <h2 className={styles.title}>Engineer your Grok posture.</h2>
            <p className={styles.copy}>
              Tune the field intensity to match market turbulence and business ambition.
              Grok Advantage coordinates the correct mix of agents, humans, and safeguards.
            </p>
          </div>
        </div>

        <div className={styles.composer}>
          <div className={styles.controlBlock}>
            <label className={styles.label}>Signal Pressure</label>
            <div className={styles.buttonGroup}>
              {(["calm", "volatile", "critical"] as Pressure[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPressure(item)}
                  className={`${styles.toggle} ${
                    pressure === item ? styles.toggleActive : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className={styles.hint}>{pressureCopy[pressure]}</p>
          </div>

          <div className={styles.controlBlock}>
            <label className={styles.label}>Command Objective</label>
            <div className={styles.buttonGroup}>
              {(["growth", "stability", "defense"] as Objective[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setObjective(item)}
                  className={`${styles.toggle} ${
                    objective === item ? styles.toggleActive : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <p className={styles.hint}>{objectiveCopy[objective]}</p>
          </div>

          <div className={styles.summary}>
            <span className="chip">Recommended Play</span>
            <h3 className={styles.summaryTitle}>{play?.play}</h3>
            <p className={styles.summaryCopy}>{play?.description}</p>
            <div className={styles.summaryMeta}>
              <span>Pressure: {pressure}</span>
              <span>Objective: {objective}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
