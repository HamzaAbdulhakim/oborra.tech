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

<div>

{item.icon}

</div>

<h4>

{item.title}

</h4>

<p>

{item.value}

</p>

</motion.div>

)

}

export default InfoCard;