import styles from "./FeatureGrid.module.css";
import { IconPulseSignal, IconRadar, IconSpark, IconTether } from "@/components/icons";

const features = [
  {
    title: "Autonomous Signal Fusion",
    copy: "Fuse telemetry, chat, code, and financial indicators into one coherent Grok field. Aligns every operator to the freshest, most credible inputs.",
    icon: IconPulseSignal
  },
  {
    title: "Explainable Mega-Context",
    copy: "The Grok engine back-traces every insight, exposing the data, prompts, and safeguards that forged the recommendation.",
    icon: IconRadar
  },
  {
    title: "Realtime Orchestration Mesh",
    copy: "Drag and drop automations that coordinate agents, humans, and infrastructure. Ship when the board is ready, not when the backlog is clear.",
    icon: IconTether
  },
  {
    title: "Tactical Co-Pilots",
    copy: "Mission-specific copilots designed for revenue command, incident intelligence, and scale-up operations.",
    icon: IconSpark
  }
];

export function FeatureGrid() {
  return (
    <section className={styles.section} id="capabilities">
      <div className="container">
        <div className="section-label">
          <span className="chip">Capability Stack</span>
          <div>
            <h2 className={styles.title}>Every playbook amplified.</h2>
            <p className={styles.copy}>
              Super Heavy Grok Advantage saturates your teams with compounding signal
              and orchestrates execution without slowing down velocity.
            </p>
          </div>
        </div>
        <div className="grid col-2">
          {features.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="card">
              <span className={styles.iconWrap}>
                <Icon />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardCopy}>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
