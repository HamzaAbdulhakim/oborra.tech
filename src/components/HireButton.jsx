import { useState } from "react";

import { FiPhone } from "react-icons/fi";

function HireMe() {
  const [isViewed, setIsViewed] = useState(false);
  return (
    <div className="hire-me">
      <div className={!isViewed ? "remove" : "active-btn"}>
        <a href="#contact" className="navigation-cta nav-drawer__cta"
onClick={()=>setIsViewed(false)}>Let's Talk</a>
      </div>

      <div className=" card-icon">
        <button className="card-action" onClick={() => setIsViewed(!isViewed)}>
          {" "}
          .
        </button>
      </div>
    </div>
  );
}

export default HireMe;
