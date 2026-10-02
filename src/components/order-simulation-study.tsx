import Link from "next/link";
import ConfidentialityNote from "./confidentiality-note";
import Image from "next/image";
import workflowImage from "../../public/order-simulation/workflow.png";
import sketchesImage from "../../public/order-simulation/sketches-updated.png";
import hifiOne from "../../public/order-simulation/hifi1.png";
import hifiTwo from "../../public/order-simulation/hifi2.png";
import hifiThree from "../../public/order-simulation/hifi3.png";
import hifiFour from "../../public/order-simulation/hifi4.png";
import { caseStudyCopy as copy } from "./order-simulation-copy";
import "./order-simulation-study.css";
import "./order-simulation-editorial.css";

function between(start: string, end?: string) {
  const first = copy.indexOf(start) + 1;
  const last = end ? copy.indexOf(end) : copy.length;
  return copy.slice(first, last);
}

function Paragraph({ text }: { text: string }) {
  const label = "Explore the related case study.";
  if (text.includes(label)) {
    const [before, after] = text.split(label);
    return <p>{before}<Link className="os-inline-link" href="/work/order-simulation-it-hardware">{label}</Link>{after}</p>;
  }
  return <p>{text}</p>;
}

function ContourWaves() {
  return <svg className="os-contour-waves" viewBox="0 0 500 350" fill="none" aria-hidden="true">
    {Array.from({ length: 12 }, (_, i) => <path key={i} d={`M -30 ${100 + i * 14} C 120 ${-90 + i * 18}, 240 ${410 - i * 6}, 530 ${80 + i * 16}`} stroke="currentColor" strokeWidth="1" />)}
  </svg>;
}

function SupplyNetwork() {
  return <svg className="os-hero-network" viewBox="0 0 1120 430" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="parcel-top" x2="1" y2="1"><stop stopColor="#f1f6ff"/><stop offset="1" stopColor="#b8cdef"/></linearGradient>
      <linearGradient id="parcel-side" x2="1" y2="1"><stop stopColor="#91b3e5"/><stop offset="1" stopColor="#527cb9"/></linearGradient>
    </defs>
    <g stroke="#a5bddf" strokeWidth="1.2" strokeDasharray="4 6" opacity=".65">
      <path d="M 55 130 V 240 L 145 290 V 385 L 290 420"/>
      <path d="M 20 330 L 145 260 L 220 305"/>
      <path d="M 1010 65 V 155 L 1090 200 V 325 L 980 385"/>
      <path d="M 940 290 L 1010 250 L 1110 305"/>
    </g>
    {[[25,65,1],[110,240,.7],[5,340,.45],[970,50,.65],[1000,230,1],[925,345,.5]].map(([x,y,scale],index) => <g key={index} transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="45" cy="104" rx="48" ry="13" fill="#426ca7" opacity=".07"/>
      <path d="M0 25 45 0 90 25 45 51Z" fill="url(#parcel-top)"/>
      <path d="M0 25 45 51V99L0 73Z" fill="#d5e2f5"/>
      <path d="M45 51 90 25V73L45 99Z" fill="url(#parcel-side)"/>
      <path d="M22 12 68 38V56" stroke="#fff" strokeWidth="5" opacity=".6"/>
    </g>)}
    <g fill="#ce2635" opacity=".65"><circle cx="55" cy="225" r="3"/><circle cx="1090" cy="200" r="3"/></g>
    <g fill="#6e96cb"><circle cx="220" cy="305" r="4"/><circle cx="940" cy="290" r="4"/></g>
  </svg>;
}

function ImagePlaceholder({ marker }: { marker: string }) {
  if (marker.includes("updated screen")) return null;
  const isHifi = marker.includes("high fidelity");
  const isSketch = marker.includes("sketches");
  const images = marker.includes("workflow")
    ? [{ src: workflowImage, alt: "Order simulation workflow and user-flow mapping, with confidential details blurred." }]
    : marker.includes("sketches")
      ? [{ src: sketchesImage, alt: "Early sketches and low-fidelity planning screens, with confidential details blurred." }]
      : marker.includes("high fidelity")
        ? [
          { src: hifiOne, alt: "High-fidelity take-rate creation interface, with confidential details blurred." },
          { src: hifiTwo, alt: "High-fidelity planning hierarchy interface, with confidential details blurred." },
          { src: hifiThree, alt: "High-fidelity order simulation overview, with confidential details blurred." },
          { src: hifiFour, alt: "High-fidelity model-year configuration interface, with confidential details blurred." },
        ]
        : [];
  if (images.length) return <div className={`os-process-gallery ${isHifi ? "os-hifi-gallery" : isSketch ? "os-sketch-gallery" : ""}`}>{images.map(({ src, alt }) => <figure className="os-process-image" key={src.src}><Image src={src} alt={alt} sizes={isHifi ? "(max-width: 600px) calc(100vw - 44px), (max-width: 1240px) 46vw, 556px" : isSketch ? "(max-width: 900px) 85vw, 820px" : "(max-width: 600px) calc(100vw - 44px), (max-width: 900px) calc(100vw - 60px), (max-width: 1240px) calc(100vw - 104px), 1136px"}/></figure>)}</div>;
  return <figure className="os-image-placeholder"><svg width="36" height="36" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true"><rect x="3" y="4" width="26" height="24" rx="4"/><circle cx="11" cy="12" r="3"/><path d="m4 25 9-9 5 5 5-7 6 9"/></svg><figcaption>{marker.replace(/\?/g, "").trim()}</figcaption><span>Image placeholder</span></figure>;
}

const problemTitles = ["Excess Inventory", "Long Delivery Times", "Limited Personalization", "Unfulfilled Orders", "Slow Planning"];
const outcomeTitles = ["Faster Planning", "Less Manual Work", "Better Inventory Planning", "More Confident Decisions", "Faster Order Fulfilment"];
const processTitles = copy.filter(line => /^0[1-5] -/.test(line));

export default function OrderSimulationStudy() {
  return <main className="os-study os-editorial" id="study-top"><div className="os-shell">
    <nav className="os-nav" aria-label="Case study navigation"><Link href="/" className="wordmark">Faiza Khan<span>UX / Product designer</span></Link><Link href="/#work">← All work</Link></nav>
    <header className="os-hero"><SupplyNetwork/><p className="os-kicker">A SaaS Solution</p><h1>GenAI powered<br/><span>order simulation</span></h1><div className="os-intro-copy"><Paragraph text={between("A SaaS Solution", "Project Overview")[0]} /></div></header>
    <nav className="os-contents" aria-label="On this page"><a href="#overview">Project Overview</a><a href="#problem">Problem statement</a><a href="#solution">Our Solution</a><a href="#goals">Key Design Goals</a><a href="#process">Design Process</a><a href="#outcomes">Outcomes & Impact</a></nav>

    <section id="overview" className="os-section os-split os-overview"><ContourWaves/><h2>Project Overview</h2><div className="os-prose">{between("Project Overview", "Problem statement").map(text => <Paragraph key={text} text={text}/>)}</div></section>

    <section id="problem" className="os-section os-problem-section"><div className="os-split"><h2>Problem statement</h2><div className="os-prose">{between("Problem statement", "Excess Inventory").map(text => <Paragraph key={text} text={text}/>)}</div></div><div className="os-problem-grid">{problemTitles.map((title) => <article key={title}><h3>{title}</h3><Paragraph text={copy[copy.indexOf(title) + 1]}/></article>)}</div></section>

    <section className="os-statement"><span className="section-pill">The design question</span><h2>How might we help supply chain teams simulate future orders,<span> forecast component demand, and plan customized production with less manual effort?</span></h2></section>

    <section id="solution" className="os-solution-panel"><h2>Our Solution</h2><div>{between("Our Solution", "Key Design Goals").map(text => <Paragraph key={text} text={text}/>)}</div></section>

    <section id="goals" className="os-section"><div className="os-section-heading"><h2>Key Design Goals</h2><Paragraph text={between("Key Design Goals", "Technical Stack & Integration")[0]}/></div><div className="os-goals-grid">{between("Key Design Goals", "Technical Stack & Integration").slice(1).map((text) => { const split = text.indexOf(":"); return <article key={text}><h3>{text.slice(0,split+1)}</h3><p>{text.slice(split+1)}</p></article>; })}</div></section>

    <section className="os-stack-section"><h2>Technical Stack & Integration</h2><ul>{between("Technical Stack & Integration", "Design Process: Understanding, Creating & Refining").map(text => <li key={text}>{text}</li>)}</ul></section>

    <section id="process" className="os-section"><div className="os-process-heading"><h2>Design Process:<br/><span>Understanding, Creating & Refining</span></h2></div><div className="os-editorial-process">{processTitles.map((title,index) => <article key={title}><div className="os-process-text"><h3>{title.replace(/^0[1-5] -\s*/, "")}</h3><div className="os-prose">{between(title,processTitles[index+1] ?? "Outcomes & Impact").filter(text => !text.startsWith("?")).map(text => <Paragraph key={text} text={text}/>)}</div></div>{between(title,processTitles[index+1] ?? "Outcomes & Impact").filter(text => text.startsWith("?")).map(marker => <ImagePlaceholder key={marker} marker={marker}/>)}</article>)}</div></section>

    <section id="outcomes" className="os-section os-outcomes-section"><div className="os-section-heading"><h2>Outcomes & Impact</h2><Paragraph text={between("Outcomes & Impact", "Faster Planning")[0]}/></div><div className="os-outcomes-grid">{outcomeTitles.map((title,index) => <article key={title}><h3>{title}</h3>{between(title,outcomeTitles[index+1]).map(text => text.startsWith("Illustrative metric:") ? <p className="os-illustrative-metric" key={text}>{text}</p> : <Paragraph text={text} key={text}/>)}</article>)}</div></section>
    <Link href="/work/order-simulation-it-hardware" className="os-next" aria-label="Explore the IT hardware case study">
      <div><p className="os-kicker">The next chapter · IT hardware</p><h2>Same foundation.<br/><span>A different industry.</span></h2><p>We adapted the order simulation experience for a leading global IT and computing company.</p><span className="os-next-label">Explore the IT case study <span aria-hidden="true">↗</span></span></div>
      <div className="os-next-art" aria-hidden="true"><div className="os-laptop"><span/><i/></div><small>Order simulation for IT hardware</small></div>
    </Link>
    <ConfidentialityNote/>
    <footer className="os-footer"><Link href="/#work">← All work</Link><a href="mailto:faizakhan1012@gmail.com">faizakhan1012@gmail.com ↗</a><a href="#study-top">Back to top ↑</a></footer>
  </div></main>;
}
