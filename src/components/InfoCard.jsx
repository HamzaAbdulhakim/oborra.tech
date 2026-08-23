import {motion} from "framer-motion";
import '../styles/infoCard.css'
function InfoCard({item}){

return(

<motion.div

className="info-card"

whileHover={{

y:-8,

scale:1.03

}}

>

<div className="card-icon">

{item.icon}

</div>

<h4 className="title">

{item.title}

</h4>

<p className="subtitle">

{item.value}

</p>

</motion.div>

)

}

export default InfoCard;