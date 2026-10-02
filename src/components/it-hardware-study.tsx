import Link from "next/link";
import ConfidentialityNote from "./confidentiality-note";
import Image from "next/image";
import simulationDetail from "../../public/it-hardware/simulation-detail.png";
import simulationList from "../../public/it-hardware/simulation-list.png";
import salesOrder from "../../public/it-hardware/sales-order.png";
import takeRateImport from "../../public/it-hardware/take-rate-import.png";
import ItLaptop from "./it-laptop";
import "./it-hardware-study.css";

const changes = [
  { title: "Import instead of re-entering", label: "Take-rate files", text: "We added a file import feature so users could bring in take-rate data instead of filling in simulation details manually. This supported the client’s internal way of working and reduced repeated data entry." },
  { title: "Plan the structure first", label: "Hierarchy planning", text: "We introduced a way to plan the product hierarchy before starting a simulation. Teams could organize the structure upfront, giving the simulation a clearer starting point." },
  { title: "Control which parts are included", label: "Code whitelisting & blacklisting", text: "We added controls to whitelist or blacklist product-part codes, helping users define which parts should be included or excluded from a simulation." },
];

const screens = [simulationDetail, simulationList, salesOrder, takeRateImport];

export default function ItHardwareStudy() {
  return <main className="it-study" id="it-top"><div className="it-shell">
    <nav className="it-nav" aria-label="Case study navigation"><Link href="/" className="wordmark">Faiza Khan<span>UX / Product designer</span></Link><Link href="/#work">← All work</Link></nav>
    <header className="it-hero"><p className="it-eyebrow">GenAI powered order simulation · IT hardware</p><h1>Same foundation.<br/><span>A different industry.</span></h1><p className="it-lead">Adapting an automotive planning tool for a larger product portfolio - with less manual input and more control before simulation.</p><ItLaptop/><p className="it-art-note">Concept illustration · Not a client interface</p></header>
    <nav className="it-contents" aria-label="On this page"><a href="#it-overview">Overview</a><a href="#it-problem">The shift</a><a href="#it-changes">Key changes</a><a href="#it-preview">Design preview</a></nav>
    <section id="it-overview" className="it-section"><p className="it-eyebrow">Project overview</p><h2>A new context for the same core idea.</h2><p>After designing the automotive order simulation tool, we adapted it for a leading global IT and computing company. The goal remained the same: help teams explore future orders and plan ahead. But the product range, internal processes, and information structure needed a different approach.</p><p>We updated the tool’s visual theme and design system, refined the GenAI experience, and reworked key workflows to fit the client’s planning needs.</p><Link className="it-text-link" href="/work/order-simulation">Read the automotive case study ↗</Link><p className="it-confidential">Client identity is withheld. High-fidelity screens are blurred to protect confidential details.</p></section>
    <section id="it-problem" className="it-section it-shift"><p className="it-eyebrow">Problem statement</p><h2>A broader catalogue.<br/><span>A different kind of complexity.</span></h2><p>The IT client had a much larger number of products, but fewer variations and physical parts per product than the automotive client. Their internal working methods also differed. Carrying over the original workflow would have meant unnecessary manual effort, so we needed to adapt both the structure and the way users prepared simulations.</p><div className="it-comparison"><div><span>Automotive context</span><h3>More complexity within each product</h3><p>Many configurable options and physical parts to account for.</p></div><div><span>IT hardware context</span><h3>More products to plan across</h3><p>A wider catalogue with fewer variations and parts per product.</p></div></div></section>
    <section className="it-question"><p className="it-eyebrow">The design question</p><h2>How might we adapt simulation planning to a larger product range <span>while asking users to do less manual work?</span></h2></section>
    <section id="it-changes" className="it-section"><p className="it-eyebrow">Key changes</p><h2>Less repetition. Better preparation.</h2><div className="it-change-grid">{changes.map(change => <article key={change.title}><span className="it-feature-label">{change.label}</span><h3>{change.title}</h3><p>{change.text}</p></article>)}</div><div className="it-foundations"><div><h3>A design system that fits the client</h3><p>We updated the theme and shared components to match the client’s visual identity, keeping the tool consistent across its revised screens and workflows.</p></div><div><h3>Refined GenAI and information structure</h3><p>We refined the GenAI experience and updated the tool’s structures to better support the IT product catalogue and the client’s planning process.</p></div></div></section>
    <section id="it-preview" className="it-section"><p className="it-eyebrow">Design preview</p><h2>The updated experience.</h2><p>High-fidelity screens show the adapted interface and key planning workflows. Confidential details are blurred.</p><div className="it-preview-grid it-screen-gallery">{screens.map((src) => <figure key={src.src}><div className="it-screen-image"><Image src={src} alt="High-fidelity interface, blurred for confidentiality." sizes="(max-width: 600px) calc(100vw - 44px), (max-width: 1240px) 46vw, 557px"/></div></figure>)}</div></section>
    <section className="it-takeaway"><p className="it-eyebrow">What this adaptation focused on</p><h2>Keep the foundation.<br/><span>Rethink the effort.</span></h2><p>This was not about repeating the original design. We kept the core simulation concept and changed how teams prepared their data, organized products, and controlled the scope of a simulation.</p></section>
    <ConfidentialityNote/>
    <footer className="it-footer"><Link href="/work/order-simulation">← Automotive case study</Link><a href="mailto:faizakhan1012@gmail.com">Let’s talk ↗</a><a href="#it-top">Back to top ↑</a></footer>
  </div></main>;
}
