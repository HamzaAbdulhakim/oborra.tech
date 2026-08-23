import islamicEducation from "../data/islamicEducation";
import '../styles/aboutCards.css'
function IslamicCard(){

return(

<div className="cards">

<h3 className="title">

<i className="card-icon">📖</i> Islamic Learning

</h3>

<ul>

{

islamicEducation.map(item=>

<li

key={item.id}

>

{item.title}

</li>

)

}

</ul>

<button>

See More

</button>

</div>

)

}

export default IslamicCard;