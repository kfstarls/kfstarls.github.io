import Link from "next/link";
import ConfidentialityNote from "./confidentiality-note";
import Image from "next/image";
import botIcon from "../../public/supply-chain-assistant/bot-icon.png";
import gatewayPlacement from "../../public/supply-chain-assistant/gateway-placement.png";
import SupplierNetwork from "./supplier-network";
import "./supplier-gateway-study.css";
import "./supplier-gateway-editorial.css";

const updates = [
  ["User deletion & deprovisioning", "Updated GDPR-related deletion and deprovisioning flows clarified how users leave the platform and how their access is removed."],
  ["Self-service access & approvals", "Refined self-service validity and role-request flows helped users request the access they needed and administrators review and approve those requests."],
  ["Continuity when an admin leaves", "The administrator departure journey focused on keeping ownership and access management in place during transitions, so a supplier organization would not be left without an admin."],
  ["Clearer user management", "More detailed controls and clearer interactions made it easier for administrators to manage users and their access."],
  ["Agreements across different user contexts", "Terms-and-conditions and user-agreement acceptance flows accounted for different user contexts, including administrators and people who belonged to multiple enterprises."],
  ["Role shortcuts from the gateway", "New dashboard shortcuts made it easier to find and request additional roles directly from the application gateway."],
];
const emails = [
  ["Getting started", "Onboarding messages that guide users through their next steps."],
  ["Access decisions", "Role approvals and updates to application access."],
  ["Inbox activity", "Notifications and reminders for new files, unread files, and deleted files in the integrated Inbox application."],
];


export default function SupplierGatewayStudy() {
  return <main className="sg-study" id="sg-top"><div className="sg-shell">
    <nav className="sg-nav" aria-label="Case study navigation"><Link href="/" className="wordmark">Faiza Khan<span>UX / Product designer</span></Link><Link href="/#work">← All work</Link></nav>
    <header className="sg-hero"><p className="sg-eyebrow">Enterprise UX · Automotive Supplier Gateway</p><h1>One gateway.<br/><span>Many moving parts.</span></h1><p className="sg-lead">Evolving a supplier platform through clearer access, smoother administration, and better communication.</p>
<div className="sg-preview" aria-hidden="true"><SupplierNetwork/><span className="sg-orbit-tag">People</span><span className="sg-orbit-tag">Access</span><span className="sg-orbit-tag">Communication</span></div><p className="sg-art-note">Concept illustration</p>
    </header>
    <nav className="sg-contents" aria-label="On this page"><a href="#sg-overview">The platform</a><a href="#sg-role">My role</a><a href="#sg-updates">Feature updates</a><a href="#sg-releases">Later releases</a><a href="#sg-impact">Impact</a></nav>
    <section className="sg-section" id="sg-overview"><p className="sg-eyebrow">A brief introduction</p><h2>A central entry point for a global supplier network.</h2><p>The Automotive Supplier Gateway brings supplier applications, access, and communication into one place. It supports self-service onboarding and role-based access, including people who work across multiple enterprises.</p><p>The project was developed for a major family-owned automotive supplier. It aimed to reduce administrative effort and make collaboration between the company and its suppliers easier.</p><p className="sg-note">Client identity and confidential product details are withheld.</p></section>
    <section className="sg-role" id="sg-role"><p className="sg-eyebrow">My role · Sole UX designer / consultant</p><h2>Joining an existing product.<br/><span>Taking ownership of what came next.</span></h2><p>Joining the project midway at Capgemini, I took ownership of UX for the next set of feature updates. With the platform’s foundation already in place, the focus was on improving everyday tasks for users and administrators.</p><p>As the sole UX designer for this phase, my scope covered user lifecycle flows, role requests, agreement acceptance, and user management, alongside email templates and later support applications.</p><p>The work connected key moments in the user journey - from joining an enterprise and requesting another role to accepting agreements or leaving an organization. Clear flows and timely communication helped keep these transitions understandable and supplier administration running smoothly.</p><div className="sg-role-scope"><span>Feature flows</span><span>Interaction updates</span><span>Email templates</span><span>Support applications</span></div></section>
    <section className="sg-workshop" id="sg-updates">
      <div className="sg-board-heading"><p className="sg-eyebrow">Feature updates</p><h2>Small changes.<br/><em>A more connected experience.</em></h2><p>As users joined new enterprises, requested roles, or left their organizations, the gateway needed clear paths for both users and administrators.</p></div>
      <div className="sg-feature-map">
        {updates.slice(0,3).map(([title,text],i) => <article className="sg-map-card" key={title}><span className="sg-card-tag">{["User lifecycle","Self-service","Admin continuity"][i]}</span><h3>{title}</h3><p>{text}</p></article>)}
        <div className="sg-map-spine"><span>People</span><span aria-hidden="true" className="sg-spine-line"/><strong>One connected gateway</strong><span aria-hidden="true" className="sg-spine-line"/><span>Access</span></div>
        {updates.slice(3).map(([title,text],i) => <article className="sg-map-card" key={title}><span className="sg-card-tag">{["Everyday administration","User agreements","Quick actions"][i]}</span><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
    <section className="sg-screen-section"><div><p className="sg-eyebrow">High-fidelity preview</p><h2>Selected screens.</h2><p>Product screens are intentionally blurred to protect confidential details.</p></div><div className="sg-screen-grid"><Image className="sg-screen-wide" src={gatewayPlacement} alt="Blurred gateway screen showing the assistant chat pop-up beside the applications" sizes="(max-width: 1240px) 100vw, 1120px"/>{["csi1","csi2"].map((name,i) => <Image key={name} src={`/supplier-gateway/${name}.png`} width={1938} height={1098} sizes="(max-width: 750px) 100vw, 50vw" alt={`Blurred supplier gateway interface preview ${i+1}`} />)}</div></section>
    <section className="sg-mailboard">
      <div className="sg-mail-heading"><p className="sg-eyebrow">Beyond the interface</p><h2>Good communication<br/><em>travels with the user.</em></h2><p>The design scope extended to email templates for onboarding, access changes, and activity in the integrated Inbox tool, keeping users informed beyond the portal.</p><div className="sg-envelope" aria-hidden="true"><span>↗</span></div></div>
      <div className="sg-mail-path">{emails.map(([title,text],i) => <article key={title}><span className="sg-mail-icon" aria-hidden="true">{["✉","✓","↗"][i]}</span><div><span className="sg-mail-label">{["Welcome & onboarding","Roles & permissions","Files & reminders"][i]}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </section>
    <section className="sg-expansion" id="sg-releases">
      <div className="sg-expansion-heading"><p className="sg-eyebrow">After the first release</p><h2>The gateway grew.<br/><em>So did the support around it.</em></h2><p>Later releases expanded the platform with support applications from our team, with UX design remaining under my ownership.</p></div>
      <div className="sg-application-pair">
        <article className="sg-console-card"><div className="sg-app-visual sg-broadcast" aria-hidden="true"><span className="sg-broadcast-hub">↗</span><div><span/><span/><span/></div></div><span className="sg-card-tag">Portal administration</span><h3>Supplier Admin Console</h3><p>A centralized module for portal administrators to manage global communications. The banner notification experience gave administrators a way to broadcast important updates and alerts to the entire user base.</p><div className="sg-app-foot">One message <span aria-hidden="true">→</span> The whole supplier network</div></article>
        <article className="sg-assistant-card"><div className="sg-app-visual sg-conversation" aria-hidden="true"><span>•••</span><Image className="sg-card-bot" src={botIcon} alt="" sizes="64px"/><span>•••</span></div><span className="sg-card-tag">Conversational UX</span><h3>Generative AI<br/>Supply Chain Assistant</h3><p>The conversational UX supported a multilingual assistant, helping users track invoices and deliveries through automated responses.</p><p className="sg-assistant-results">Reported assistant outcomes: 20% lower support workload and 80% improved operational efficiency.</p><Link href="/work/supply-chain-assistant" className="sg-text-link">Explore the assistant case study ↗</Link></article>
      </div>
    </section>
<section className="sg-impact" id="sg-impact"><p className="sg-eyebrow">Reported project outcomes</p><h2>Less administration.<br/><span>A faster start.</span></h2><div className="sg-metrics"><div><strong>80%</strong><p>reduction in manual effort</p></div><div><strong>50%</strong><p>faster supplier onboarding</p></div></div><p>Automated identity provisioning helped reduce manual effort and speed up supplier onboarding. These are project-level results reported, rather than isolated measurements of individual feature updates.</p></section>
    <ConfidentialityNote/>
    <footer className="sg-footer"><Link href="/#work">← All work</Link><a href="mailto:faizakhan1012@gmail.com">Let’s talk ↗</a><a href="#sg-top">Back to top ↑</a></footer>
  </div></main>;
}
