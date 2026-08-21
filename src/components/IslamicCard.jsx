import islamicEducation from "../data/islamicEducation";
import '../styles/aboutCards.css'
function IslamicCard(){

return(

<div className="card">

<h3>

📖 Islamic Learning

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