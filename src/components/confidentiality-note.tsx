import "./confidentiality-note.css";

export default function ConfidentialityNote() {
  return <aside className="project-confidentiality" aria-label="Confidentiality note">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></svg>
    <div><h2>A note on confidentiality</h2><p>To respect client confidentiality and non-disclosure agreements (NDAs), selected images are blurred and sensitive project details are withheld. If you’d like to learn more about my role, design process, or the project, I’m happy to discuss what I can share within these commitments.</p><a href="mailto:faizakhan1012@gmail.com?subject=Let%27s%20discuss%20your%20UX%20work">Get in touch to discuss the project <span aria-hidden="true">↗</span></a></div>
  </aside>;
}
