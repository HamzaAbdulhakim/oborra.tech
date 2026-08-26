import "../styles/callToAction.css"
function CallToAction({action1, action2}) {
  return (
    <div className="call-to-action">
      <button className="cta-btn cta-btn--primary">
        <span>{action1 }</span>
        <svg className="cta-btnicon cta-btnicon--arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      
      <button className="cta-btn cta-btn--secondary">
        <svg className="cta-btnicon cta-btnicon--download" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
        </svg>
        <span>{action2}</span>
      </button>
    </div>
  );
}
export default CallToAction