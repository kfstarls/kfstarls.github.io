export default function SupplierNetwork() {
  return <svg className="sg-network-art" viewBox="0 0 820 330" fill="none" aria-hidden="true">
    <defs><linearGradient id="sg-roof" x2="1" y2="1"><stop stopColor="#fffdfb"/><stop offset="1" stopColor="#dec4bd"/></linearGradient><linearGradient id="sg-gate" x2="1" y2="1"><stop stopColor="#ed4266"/><stop offset="1" stopColor="#c50023"/></linearGradient></defs>
    <ellipse cx="410" cy="285" rx="260" ry="28" fill="#a4787012"/>
    <g stroke="#c28f8b" strokeWidth="2" strokeDasharray="5 7"><path d="M200 120 350 195M630 120 470 195M180 260 350 230M650 260 470 230"/></g>
    {[{x:105,y:50},{x:565,y:50}].map(({x,y}) => <g key={x} transform={`translate(${x} ${y})`}><path d="m0 45 65-35 105 40-65 37Z" fill="url(#sg-roof)"/><path d="m0 45 105 42v70L0 112Z" fill="#e4d4ce"/><path d="m105 87 65-37v68l-65 39Z" fill="#c2a6a0"/><path d="m22 71 21 9v30l-21-9zm42 16 21 9v30l-21-9" fill="#fff9f4"/><path d="m122 94 27-15v45l-27 15Z" fill="#6e575b"/><path d="M18 29V0l18 7v15" fill="#b89c96"/></g>)}
    <g transform="translate(340 87)"><path d="m0 155 76-42 88 39-77 44Z" fill="#dfc1bb"/><path d="M28 145V52Q28 4 78 4h8q49 0 49 48v93l-28 15V54q0-25-25-25T57 54v106Z" fill="url(#sg-gate)"/><path d="M57 160V54q0-25 25-25" stroke="#f5bcc0" strokeWidth="3"/><path d="m66 86 13 13 26-31" stroke="#c50023" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></g>
    <g transform="translate(115 235)"><path d="m0 15 32-17 38 17-32 19Z" fill="#fffcf9"/><path d="m0 15 38 19v40L0 53Z" fill="#d2b7af"/><path d="m38 34 32-19v39L38 74Z" fill="#b78983"/><path d="m15 7 38 20v15" stroke="#f3dfd8" strokeWidth="7"/></g>
    <g transform="translate(570 237)"><rect x="0" y="0" width="79" height="43" rx="5" fill="#cb0338"/><path d="M79 12h23l22 22v21H79Z" fill="#e3d2cd"/><path d="M86 18h13l14 16H86Z" fill="#725e66"/><path d="M-7 45h133v10H-7Z" fill="#73505b"/><circle cx="19" cy="55" r="11" fill="#44353d"/><circle cx="101" cy="55" r="11" fill="#44353d"/><circle cx="19" cy="55" r="4" fill="#e9dad5"/><circle cx="101" cy="55" r="4" fill="#e9dad5"/></g>
  </svg>;
}
