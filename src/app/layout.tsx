import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grok Advantage | Super Heavy Intelligence",
  description:
    "Amplify decision-making with the Grok Advantage suite of AI-driven intelligence tools."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
