import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Grok Advantage shortened our detection-to-solution window from hours to seconds. Board meetings shifted from postmortems to expansion strategy.",
    author: "Amelia Park",
    role: "Chief Operations Officer, Velocity Fusion"
  },
  {
    quote:
      "It makes every team feel like they have a mission control. The explainability loop means compliance signs off faster than our engineers can draft the memo.",
    author: "Luis Ortega",
    role: "Head of Platform, Nimbus Banking"
  },
  {
    quote:
      "The orchestration mesh let us launch new revenue pilots without risking uptime. Grok spins up copilots, we track the lift, everyone wins.",
    author: "Imani Dorsey",
    role: "VP Growth, StrataCloud"
  }
];

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-label">
          <span className="chip">Field Notes</span>
          <div>
            <h2 className={styles.title}>Operators running hot.</h2>
            <p className={styles.copy}>
              Real teams, high stakes, relentless execution. Grok Advantage keeps the
              signal clean and the missions decisive.
            </p>
          </div>
        </div>
        <div className="grid col-3">
          {testimonials.map((item) => (
            <blockquote key={item.author} className={`card ${styles.card}`}>
              <p className="testimonial-quote">“{item.quote}”</p>
              <footer className="testimonial-author">
                <span>{item.author}</span>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
