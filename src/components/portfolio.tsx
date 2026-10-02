"use client";

import Link from "next/link";
import Image from "next/image";
import ItLaptop from "./it-laptop";
import SupplierNetwork from "./supplier-network";
import SustainabilityArt from "./sustainability-art";
import AssistantCover from "./assistant-cover";
import AnimusArt from "./animus-art";
import { StudioSculpture, ExperienceStrip, AboutFaiza } from "./home-personality";
import { MotionConfig, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useSyncExternalStore } from "react";

const projects = [
  { slug: "order-simulation", tag: "SaaS · Predictive analytics", title: "GenAI powered order simulation", desc: "Helping automotive planning teams explore likely orders, refine assumptions, and make sense of complex product configurations.", metric: "Automotive · Adapted for IT hardware", visual: "simulation" },
  { slug: "order-simulation-it-hardware", tag: "IT hardware · Product adaptation", title: "Same foundation. A different industry.", desc: "Adapting order simulation for a broader product range, with file imports, hierarchy planning, and less manual input.", metric: "GenAI · Workflow simplification", visual: "hardware" },
  { slug: "supplier-gateway", tag: "Enterprise · Platform design", title: "Automotive supplier gateway", desc: "A better beginning for every supplier. Connecting a global supplier ecosystem through clearer access, smoother administration, and better communication.", metric: "50% faster supplier onboarding", visual: "gateway" },
  { slug: "sustainability-data-assistant", tag: "Sustainability · Enterprise UX", title: "Sustainability Data Assistant", desc: "A clearer path from local ESG readings to review, approval, and reporting. Designed from start to finish as the sole UX designer.", metric: "Data collection · Approval workflows", visual: "sustainability" },
  { slug: "supply-chain-assistant", tag: "Generative AI · Conversational UX", title: "AI assistant for supplier support", desc: "A multilingual chat assistant built into the gateway, helping suppliers find relevant answers, explore references, and get support through conversation.", metric: "20% reduction in support workload", visual: "chat" },
  { slug: "animus-ai-blocker", tag: "Product design · Development", title: "Animus AI Blocker", desc: "Your feed. Your choice. A reversible way to filter declared AI media, designed and developed with ChatGPT Codex.", metric: "Chrome + Firefox · Mobile beta", visual: "animus" },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" style={diagonal ? { transform: "rotate(-45deg)" } : undefined}><path d="M4 12h15M13 5l7 7-7 7" /></svg>;
}

function subscribeTheme(callback: () => void) {
  window.addEventListener("portfolio-theme", callback);
  return () => window.removeEventListener("portfolio-theme", callback);
}
function ThemeToggle() {
  const dark = useSyncExternalStore(subscribeTheme, () => document.documentElement.dataset.theme === "dark", () => false);
  const setDark = (value: boolean) => {
    const theme = value ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch {}
    window.dispatchEvent(new Event("portfolio-theme"));
  };
  return <button className="theme-toggle" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={dark} onClick={() => setDark(!dark)}>{dark ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2"/></svg> : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z"/></svg>}</button>;
}

function MagneticLink() {
  const x = useMotionValue(0); const y = useMotionValue(0);
  const reduced = useReducedMotion();
  const sx = useSpring(x, { stiffness: 180, damping: 18 }); const sy = useSpring(y, { stiffness: 180, damping: 18 });
  return <motion.a href="#work" className="primary-button" style={{ x: sx, y: sy }} onMouseMove={(e) => { if (reduced) return; const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * .1); y.set((e.clientY - r.top - r.height / 2) * .1); }} onMouseLeave={() => { x.set(0); y.set(0); }}>Explore my work <Arrow /></motion.a>;
}

// Stylized illustrations, not screenshots of confidential client products.
function ProjectArt({ type }: { type: string }) {
  if (type === "animus") return <div className="project-art art-animus"><AnimusArt/><span className="concept-caption">Concept illustration</span></div>;
  if (type === "chat") return <div className="project-art art-chat assistant-cover"><AssistantCover/><span className="concept-caption">Concept illustration</span></div>;
  if (type === "sustainability") return <div className="project-art art-sustainability" aria-hidden="true"><SustainabilityArt/><span className="concept-caption">Concept illustration</span></div>;
  if (type === "gateway") return <div className="project-art art-gateway supplier-cover" aria-hidden="true"><SupplierNetwork/><span className="concept-caption">Concept illustration</span></div>;
  if (type === "hardware") return <div className="project-art art-hardware"><ItLaptop/><span className="concept-caption">Concept illustration</span></div>;
  if (type === "simulation") return <div className="project-art art-simulation automotive-cover"><Image src="/order-simulation-motorcycle.png" alt="3D motorcycle surrounded by connected warehouses, shipping containers, and logistics routes in white, charcoal, and blue" fill sizes="(max-width: 600px) 100vw, (max-width: 1320px) 50vw, 590px" className="automotive-cover-image" /></div>;
  return <div className={`project-art art-${type}`} aria-hidden="true"><div className="product-window"><div className="window-bar"><span className="window-dot"/><span className="window-dot"/><span className="window-dot"/><span className="window-title">{type === "simulation" ? "Forecast workspace" : type === "chat" ? "Supply chain assistant" : type === "gateway" ? "Partner workspace" : "Foundations / Components"}</span></div>
    {type === "simulation" ? <div className="mock-dashboard"><aside><b>Overview</b><span>Simulations</span><span>Configurations</span><span>Reports</span></aside><div className="dashboard-main"><div className="mock-heading">A clearer view of what’s next.<span>Configuration forecast</span></div><div className="chart"><div className="chart-bars">{[35,48,40,64,55,74,70,89,81,97].map((height,i) => <i key={i} style={{height: `${height}%`}} />)}</div></div><div className="mock-pills"><span>Automotive</span><span>IT hardware</span></div></div></div> :
    type === "chat" ? <div className="mock-chat"><div className="assistant-mark">✧</div><h4>How can I help today?</h4><p>Your supply chain, a conversation away.</p><div className="chat-question">Can you track my latest delivery?</div><div className="chat-answer"><span className="status-dot"/> Your delivery is on its way.<div className="delivery-track"><i/><i/><i/></div><small>Confirmed <span>In transit</span> Delivered</small></div><div className="chat-input">Ask a question <span>↑</span></div></div> :
    type === "gateway" ? <div className="mock-gateway"><div className="gateway-symbol">↗</div><h4>Welcome to your<br/>partner workspace.</h4><p>Everything you need. Connected.</p><div className="gateway-row"><span>01</span> Verify your company <b>✓</b></div><div className="gateway-row"><span>02</span> Set up your profile <b>✓</b></div><div className="gateway-row"><span>03</span> Get connected <b>→</b></div></div> :
    <div className="mock-system"><div className="type-specimen">Aa<span>Designed to work together.</span></div><div className="swatches">{["#172538", "#557aaa", "#96acc9", "#d7e2ef", "#eff3f8"].map(color => <i key={color} style={{background:color}}/>)}</div><div className="system-components"><span>Primary action ↗</span><span>Secondary</span></div><div className="icon-specimen">{["⊞", "⌕", "◇", "↗", "◎", "+"].map(icon => <span key={icon}>{icon}</span>)}</div></div>}
  </div><span className="concept-caption">Concept illustration</span></div>;
}

export default function Portfolio() {
  return <MotionConfig reducedMotion="user"><main id="top"><a className="skip-link" href="#work">Skip to work</a><div className="page-shell">
    <nav className="site-nav" aria-label="Main navigation"><a href="#top" className="wordmark">Faiza Khan<span>UX / Product designer</span></a><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a><ThemeToggle /></div></nav>
    <section className="hero fk-hero"><motion.div className="fk-hero-copy" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}><p className="eyebrow">UX / Product designer · Creative at heart</p><h1>Faiza Khan<span>.</span></h1><p className="fk-hero-role">Making complex feel simple.<br/><em>And simple feel considered.</em></p><p className="hero-description">4+ years connecting people, products and possibilities. From enterprise UX to things I make just to see what’s possible.</p><div className="hero-actions"><MagneticLink/><a className="text-link" href="/resume" target="_blank" rel="noreferrer">View résumé <Arrow diagonal/></a></div><p className="fk-alias"><span/> Faiza in real life. <b>KFstarLs</b> online.</p></motion.div><StudioSculpture/><div className="hero-bottom"><span>Human-centred thinking. A hands-on approach.</span><a href="#about">Meet the designer <span>↓</span></a></div></section>
    <ExperienceStrip/>
    <section id="work" className="work-section"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Purpose in every pixel.</h2></div><p>A selection of experiences shaped around<br className="desktop-break"/> people, complexity, and possibility.</p></div><div className="projects-grid">{projects.map((p) => <motion.article key={p.slug} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.55}}><Link href={`/work/${p.slug}`} className="project-link"><ProjectArt type={p.visual}/><div className="project-info"><p className="eyebrow">{p.tag}</p><div className="project-title"><h3>{p.title}</h3><span className="circle-arrow"><Arrow diagonal /></span></div><p className="project-description">{p.desc}</p><span className="project-metric">{p.metric}</span></div></Link></motion.article>)}</div></section>
    <section className="design-statement"><span className="section-pill">The way I see it</span><h2>Good design makes the complicated feel natural.<span> Less friction. More clarity. A little more human.</span></h2></section>
    <section className="other-section"><div className="section-heading"><div><p className="eyebrow">Beyond the everyday</p><h2>A little room to explore.</h2></div><p>Small projects. Curious ideas.<br/>Space to learn by making.</p></div><div className="side-grid"><article className="design-system-exploration"><div className="exploration-content"><ProjectArt type="system"/><p className="eyebrow">Design systems · Visual identity</p><h3>Consistency, with room for character.</h3><p className="project-description">A design system created for the AutoCloud team and used across all its projects, giving different products a shared foundation and their own identity.</p><span className="project-metric">100% component reusability</span></div></article><article><div className="side-art gesture-art" aria-hidden="true"><svg viewBox="0 0 400 220" fill="none"><path d="M65 161C112 18 248 32 203 116S63 182 174 87 340 59 315 141" stroke="#7694bd" strokeWidth="5" strokeLinecap="round"/><circle cx="315" cy="141" r="10" fill="white" stroke="#7694bd" strokeWidth="2"/></svg><span>Made with a gesture.</span></div><p className="eyebrow">Python / OpenCV</p><h3>Gesture Paint</h3><p>Exploring a more intuitive way to draw digitally.</p></article><article><div className="side-art notify-art" aria-hidden="true"><div className="task-sheet"><h4>A little more focus.</h4><div><i/> Make space for ideas</div><div><i/> Turn plans into progress</div><div><i/> Take a moment</div></div></div><p className="eyebrow">React / Material UI</p><h3>Notify</h3><p>A simple space for tasks, plans, and daily progress.</p></article></div></section>
    <AboutFaiza/>
    <footer id="contact"><div className="contact-heading"><p className="eyebrow">Have something in mind?</p><h2>Let’s make something<br/><span>meaningful together.</span></h2><a className="email-link" href="mailto:faizakhan1012@gmail.com">faizakhan1012@gmail.com <Arrow diagonal /></a></div><div className="footer-bottom"><span>© 2026 Faiza Khan · A little KFstarLs energy.</span><div><a href="https://www.linkedin.com/in/faiza-khan-348a9818b/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="/resume" target="_blank" rel="noreferrer">Résumé ↗</a><a href="#top">Back to top ↑</a></div></div></footer>
  </div></main></MotionConfig>;
}
