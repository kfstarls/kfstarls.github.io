import type { Metadata } from "next";
import "./globals.css";
import "./palette.css";
import "./case-study-interactions.css";
import "./graphic-motion.css";
import "./theme-refinements.css";
import GraphicMotionControl from "@/components/graphic-motion-control";

export const metadata: Metadata = {
  title: "Faiza Khan | UX & Product Designer",
  description: "Portfolio of Faiza Khan, a UX and Product Designer creating thoughtful enterprise experiences.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: 'try{document.documentElement.dataset.theme=localStorage.getItem("portfolio-theme")==="dark"?"dark":"light"}catch{}' }}/></head>
      <body>{children}<GraphicMotionControl/></body>
    </html>
  );
}
