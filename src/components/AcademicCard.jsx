import academic from "../data/academic";
import '../styles/aboutCards.css'
function AcademicCard(){

return(

<div className="card">

<h3 className="title">

<i className="card-icon">🎓</i> Academic Journey

</h3>

{

academic.map(item=>

<div

key={item.id}

className="timeline-item"
className = "card"
>

<h4 className="title">

{item.level}

</h4>

<h5 className="subtitle">

{item.place}

</h5>

<p className="subtitle">

{item.description}

</p>

</div>

)

}

</div>

)

}

export default AcademicCard;