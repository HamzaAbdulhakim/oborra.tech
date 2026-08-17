import SectionTitle from "../components/SectionTitle";
import Biography from "../components/Biography";
import InfoCard from "../components/InfoCard";
import AcademicCard from "../components/AcademicCard";
import IslamicCard from "../components/IslamicCard";
import Reveal from "../components/Reveal";
import about from "../data/about";
import Button from "../components/Button";
import info from "../data/info";
import { slideRight } from "../animations/variants";
import profile from "../assets/hamzaProfile.png";

import "../styles/about.css";

function About(){

return(
<Reveal>
<section
id="about"
className="about-section">

<SectionTitle

title="About Me"

subtitle="Get to know me better"

/>
<Reveal >
<div className="about-container">
<div className="about-image">
<img

src={profile}
loading="lazy"
alt={about.name}

/>

</div>

<div className="about-content">
<Reveal >
<h3>

{about.intro}

</h3>
</Reveal>
<Reveal> <Biography /> </Reveal>
<Reveal>
<div className="info-grid">

{

info.map(item=>

<InfoCard

key={item.id}

item={item}

/>

)

}

</div>
</Reveal>

<Reveal>
<div className="philosophy">
<Reveal variant={slideRight}>
<h4>

My Philosophy

</h4>
</Reveal>

<Reveal variant={slideRight}>
<p>

I believe learning never ends.
Every project is an opportunity to improve,
solve real-world problems,
and build software that benefits people.

</p>
</Reveal>
</div>
</Reveal>
<div className="about-buttons">

<Button>

Download CV

</Button>

<a href="#projects">

<Button>View Projects</Button>

</a>

</div>

</div>

</div>
</Reveal>
<div className="education-grid" id="education">

<IslamicCard/>

<AcademicCard/>

</div>

</section>
</Reveal>

)

}

export default About;