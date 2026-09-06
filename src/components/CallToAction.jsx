import "../styles/callToAction.css"
function CallToAction({ action2}) {
  return (
    <div className="call-to-action">
      <a href="#Projects" >
      <button  className="cta-btn cta-btn--primary">
        view Projects 
      
      </button>   

      </a> 
      <button className="cta-btn cta-btn--secondary">
      
        <span>{action2}</span>
      </button>
    </div>
  );
}
export default CallToAction