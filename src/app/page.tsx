'use client';

import { useMemo, useState } from "react";
import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { AdvantageMatrix } from "@/components/AdvantageMatrix";
import { ScenarioComposer } from "@/components/ScenarioComposer";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Page() {
  const [scenario, setScenario] = useState<"launch" | "rescue" | "scale">(
    "launch"
  );

  const metrics = useMemo(() => {
    switch (scenario) {
      case "launch":
        return {
          response: "2.4s signal-to-strategy",
          confidence: "98.2% forecast confidence",
          savings: "$1.5M ops reclaimed / quarter"
        };
      case "rescue":
        return {
          response: "900ms anomaly isolation",
          confidence: "99.1% issue triage accuracy",
          savings: "72 engineer-hours saved / week"
        };
      case "scale":
        return {
          response: "4.6x throughput uplift",
          confidence: "97.4% capacity precision",
          savings: "$3.2M cloud spend avoidance"
        };
      default:
        return {
          response: "2.4s signal-to-strategy",
          confidence: "98.2% forecast confidence",
          savings: "$1.5M ops reclaimed / quarter"
        };
    }
  }, [scenario]);

  return (
    <main style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero scenario={scenario} onScenarioChange={setScenario} metrics={metrics} />
        <FeatureGrid />
        <AdvantageMatrix />
        <ScenarioComposer />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
}
