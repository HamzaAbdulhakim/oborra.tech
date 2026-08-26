import { useState } from "react";

import { FiPhone } from "react-icons/fi";

function HireMe(){
    const [isViewed, setIsViewed] = useState(false)
    return(
        <div className="hire-me">

            <div className={!isViewed ? "remove": "active-btn"} >
                <span>Hire me!</span>

            </div>

            <div className=" card-icon">
                <button 
                className="card-action"
                onClick={()=>setIsViewed(!isViewed)}> .</button>
            </div>
        </div>
    )
}

export default HireMe