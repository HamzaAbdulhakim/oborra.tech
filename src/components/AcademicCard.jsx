import academic from "../data/academic";
import '../styles/aboutCards.css'
function AcademicCard(){

return(

<div className="card">

<h3>

🎓 Academic Journey

</h3>

{

academic.map(item=>

<div

key={item.id}

className="timeline-item"

>

<h4>

{item.level}

</h4>

<h5>

{item.place}

</h5>

<p>

{item.description}

</p>

</div>

)

}

</div>

)

}

export default AcademicCard;