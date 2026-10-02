import type { Metadata } from "next";
import "./globals.css";
import "./palette.css";
import "./case-study-interactions.css";
import "./graphic-motion.css";
import "./theme-refinements.css";
import GraphicMotionControl from "@/components/graphic-motion-control";

export const metadata: Metadata = {
  metadataBase: new URL("https://kfstarls.github.io"),
  title: "Faiza Khan | UX & Product Designer",
  description: "Portfolio of Faiza Khan, a UX and Product Designer creating thoughtful enterprise experiences.",
  openGraph: {
    type: "website",
    siteName: "Faiza Khan",
    title: "Faiza Khan | UX & Product Designer",
    description: "4+ years of UX and product design. Explore selected case studies and independent projects.",
    images: [{
      url: "/portfolio-home-preview.png",
      width: 1200,
      height: 630,
      alt: "Faiza Khan's portfolio homepage with her introduction and pastel 3D artwork.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiza Khan | UX & Product Designer",
    description: "Explore my UX and product design portfolio.",
    images: ["/portfolio-home-preview.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: 'try{document.documentElement.dataset.theme=localStorage.getItem("portfolio-theme")==="dark"?"dark":"light"}catch{}' }}/></head>
      <body>{children}<GraphicMotionControl/></body>
    </html>
  );
}
