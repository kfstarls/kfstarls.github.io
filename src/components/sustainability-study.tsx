import Link from "next/link";
import ConfidentialityNote from "./confidentiality-note";
import Image from "next/image";
import screen1 from "../../public/sustainability/s1.png";
import screen2 from "../../public/sustainability/s2.png";
import screen3 from "../../public/sustainability/s3.png";
import screen4 from "../../public/sustainability/s4.png";
import sketch1 from "../../public/sustainability/sketch-1.png";
import sketch3 from "../../public/sustainability/sketch-3.png";
import sketch4 from "../../public/sustainability/sketch-4.png";
import sketch5 from "../../public/sustainability/sketch-5.png";
import SustainabilityArt from "./sustainability-art";
import "./sustainability-study.css";

function SketchCollage() {
  return <div className="esg-sketches"><h3 className="esg-screens-heading">Low-fidelity sketches</h3><div className="esg-sketch-collage">{[sketch1, sketch5, sketch3, sketch4].map((sketch, index) => <div key={sketch.src}><Image src={sketch} alt={`Blurred early interface sketch ${index + 1}`} sizes="(max-width: 650px) 50vw, (max-width: 1200px) 45vw, 520px" /></div>)}</div></div>;
}

export default function SustainabilityStudy() {
  return <main className="esg-study" id="esg-top">
    <div className="esg-nav-shell"><nav className="esg-nav" aria-label="Case study navigation"><Link href="/">Faiza Khan<span>UX / Product designer</span></Link><Link href="/#work">← All work</Link></nav></div>
    <header className="esg-hero">
      <div className="esg-hero-layout"><div><p className="esg-label">Sustainability Data Assistant for Automotive</p><h1>Better data.<br/>A clearer<br/><span>path forward.</span></h1><p className="esg-hero-copy">Turning scattered ESG readings into a structured journey - from local data collection to review, approval, and reporting.</p><a href="#esg-story" className="esg-start">Explore the case study <span>↓</span></a></div><div className="esg-hero-art"><span className="esg-orbit-label">Collect · Review · Publish</span><SustainabilityArt/><p>Connected data. Traceable decisions.</p></div></div>
      <div className="esg-project-strip"><div><span>Role</span><strong>Sole UX designer</strong></div><div><span>Involvement</span><strong>Start to finish</strong></div><div><span>Focus</span><strong>ESG data collection</strong></div><div><span>Integration</span><strong>ESG management tool</strong></div></div>
    </header>
    <div className="esg-body" id="esg-story">
      <section className="esg-opening"><div><p className="esg-label">The starting point</p><h2>Sustainability reporting starts<br/>far from the final report.</h2></div><p>At local sites, warehouses, and business units, ESG readings were often stored in spreadsheets, shared lists, or physical documents. Bringing these records together made it difficult to keep data consistent and trace who had entered or approved each measurement.</p><div className="esg-fragments"><span>Excel spreadsheets</span><span>Shared lists</span><span>Physical records</span><b aria-hidden="true">→</b><strong>A structured collection workflow</strong></div></section>
      <section className="esg-brief"><div><p className="esg-label">The product</p><h2>One place to collect.<br/>A clear path to approve.</h2><p>The Sustainability Data Assistant for Automotive organizes manual ESG data collection, supports custom approval workflows, and keeps a history of each cycle. Approved readings can then be published to an ESG management tool.</p></div><aside><p className="esg-label">My contribution</p><h3>End-to-end UX ownership</h3><p>As the sole UX designer from the start of the project through completion, I shaped the experience around the full data journey: organizing measures, capturing readings, reviewing submissions, and preparing approved data for publishing.</p><p>The design challenge was to make a detailed, role-based process understandable without losing the context behind each record.</p></aside></section>
      <section className="esg-question"><span>Design question</span><h2>How might we make local ESG data easier to collect, approve, and trace - before it reaches the reporting tool?</h2></section>
      <section className="esg-journey" id="esg-flow"><div className="esg-section-head"><div><p className="esg-label">The people & the handoffs</p><h2>Three roles.<br/>One accountable journey.</h2></div><p>The two-level approval workflow shown here is the base format, with clear responsibilities for three roles. The approval levels and workflow can be customized to suit the company or enterprise using the application.</p></div>
        <ol className="esg-approval"><li><span className="esg-role-badge">L0 · Manager</span><h3>Capture</h3><p>Enter measurement readings for the assigned entity and submit the data for review.</p><span className="esg-step-output">Data submitted</span></li><li><span className="esg-role-badge">L1 · Area manager</span><h3>Review</h3><p>Review the submitted readings and provide the first level of approval.</p><span className="esg-step-output">First approval</span></li><li><span className="esg-role-badge">L2 · Plant manager</span><h3>Approve & publish</h3><p>Provide the final approval and authorize publishing to the ESG management tool.</p><span className="esg-step-output">Ready for publishing</span></li></ol>
        <div className="esg-trace"><span aria-hidden="true">↳</span><p><strong>Context stays with the record.</strong> The active role and legal entity remain visible, while the measurement history tracks who entered and approved the data, and when.</p></div>
      </section>
      <section className="esg-feature-section"><div className="esg-section-head"><div><p className="esg-label">Organize before collecting</p><h2>A structure that reflects<br/>how teams work.</h2></div><p>Teams can create measure groups, map the measures targeted for the year, and assign the structure to local entities. The same hierarchy carries into the collection navigation.</p></div>
        <div className="esg-ui-flow"><p className="esg-diagram-caption">UI flow · From setup to data collection</p><ol>{[
          ["Sign in", "Choose the legal entity linked to your role."],
          ["Open Measure Groups", "Create a group and add the subgroups needed by the team."],
          ["Map measures", "Drag preloaded measures into their relevant subgroups."],
          ["Assign units", "Add the units needed for each metric."],
          ["Open Collect Measurement", "Use the mapped hierarchy for the assigned entity."],
          ["Enter readings", "Capture values and submit them for approval."],
        ].map(([title,description]) => <li key={title}><h3>{title}</h3><p>{description}</p></li>)}</ol><p className="esg-flow-note">Setup carries through to collection, so users work with the same structure throughout.</p></div>
        <div className="esg-feature-notes"><article><span>Hierarchy & mapping</span><h3>Make the structure visible.</h3><p>A hierarchical view and drag-and-drop mapping connect the measure list to the groups teams use to capture data.</p></article><article><span>Role & entity context</span><h3>Know where the data belongs.</h3><p>The role and legal entity appear together, with an entity selector for users mapped to more than one location.</p></article></div>
      </section>
      <section className="esg-units"><div><p className="esg-label">Flexibility at the point of entry</p><h2>The same metric.<br/>The right unit for the site.</h2><p>A standard unit may not suit every local team. The measure-unit feature allows additional units to be assigned to a metric. For example, a metric measured by mass can be captured in tonnes or kilograms depending on the site’s needs.</p></div><div className="esg-unit-visual"><span>Metric · example units</span><div><strong>t<small>tonne · standard</small></strong><b aria-hidden="true">+</b><strong>kg<small>kilogram · additional</small></strong></div><p>One metric, flexible data entry</p></div></section>
      <section className="esg-artifacts"><div className="esg-section-head"><div><p className="esg-label">Design development</p><h2>From structure to screens.</h2></div><p>Interface designs connecting measure setup, flexible units, data collection, and publishing.</p></div><SketchCollage/><h3 className="esg-screens-heading">High-fidelity screens</h3><div className="esg-screen-grid">{[screen1, screen2, screen3, screen4].map((screen, index) => <Image key={screen.src} src={screen} alt={["Blurred measure-group setup interface", "Blurred measure-unit selection interface", "Blurred data collection interface", "Blurred measurement publishing interface"][index]} sizes="(max-width: 650px) 100vw, (max-width: 1200px) 50vw, 538px" />)}</div></section>
      <section className="esg-publishing"><p className="esg-label">Connecting to the reporting landscape</p><h2>Approval is a handoff.<br/><span>Not the end of the record.</span></h2><p>The assistant sits between local contributors and the ESG management tool. Scheduled jobs pick up records authorized for publishing and send them to the ESG management tool for further processing.</p><ol className="esg-publish-flow"><li><span>Local teams</span><strong>Collect & submit</strong></li><li><span>Approval workflow</span><strong>Review & authorize</strong></li><li><span>Scheduled publishing</span><strong>Transfer the record</strong></li><li><span>ESG management tool</span><strong>Process & report</strong></li></ol><small>The application was hosted on SAP BTP and integrated with the ESG management tool (SAP SCT).</small></section>
      <section className="esg-closing"><p className="esg-label">What the design brings together</p><h2>Structure for the data.<br/>Clarity for the people.</h2><div><article><h3>A shared collection structure</h3><p>Measure groups and flexible units support the way local teams capture readings.</p></article><article><h3>Clear responsibility</h3><p>Defined roles make the handoffs from data entry to final approval easier to follow.</p></article><article><h3>A traceable path forward</h3><p>Record history and publishing context connect local submissions with the reporting process.</p></article></div></section>
    <ConfidentialityNote/>
      <footer className="esg-footer"><Link href="/#work">← Back to all work</Link><a href="#esg-top">Back to top ↑</a></footer>
    </div>
  </main>;
}
