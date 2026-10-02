import "./assistant-cover.css";

export default function AssistantCover() {
  return <div className="assistant-cover-scene" aria-hidden="true"><div className="assistant-cover-orbit"/><div className="assistant-cover-platform"/><div className="assistant-cover-head"><div className="assistant-cover-antenna"/><div className="assistant-cover-face"><i/><i/><span/></div></div><div className="assistant-cover-message assistant-cover-question">How can I help?<span>✦</span></div><div className="assistant-cover-message assistant-cover-answer"><span>≡</span><div>Answers with context<small>Ask · Explore · Get support</small></div></div><span className="assistant-cover-spark">✦</span></div>;
}
