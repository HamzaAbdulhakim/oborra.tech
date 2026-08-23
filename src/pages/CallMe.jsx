import { useState } from "react";

import { FiPhone, FiMail } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import "../styles/callMe.css"
function CallMe(){
    const [isViewed, setIsViewed] = useState(false)
    return(
        <div className="callMe">

            <div className={!isViewed ? "remove": "call-content"} >
                <a
                href="tel: +251901779899"> <i  > <FiPhone /> </i>Direct-call</a>
                <a href="https://telegram.com/ibnuAbdi"> <i  ><FaTelegram /></i> DM in telegram</a>
                <a href="mailto:abdulhakimhamza919@gmail.com"> <i  > <FiMail /></i> Send Email</a>

            </div>

            <div className=" card-icon">
                <button 
                className="card-action"
                onClick={()=>setIsViewed(!isViewed)}> <FiPhone /></button>
            </div>
        </div>
    )
}

export default CallMe