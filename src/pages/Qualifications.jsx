import SectionTitle from "../components/SectionTitle";
import Skills from "../sections/skills";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import '../styles/blog.css'
import Communication from "../sections/Communication";
import Reveal from "../components/Reveal";
import { fadeUp, slideLeft, 
    zoomIn, staggerContainer, slideRight
 } from "../animations/variants";

function Qualifications(){
    return(
    <Reveal>
        <div className="qualification">
            <SectionTitle title='Qualifications'
            subtitle='Skills, education, Experience' />

<Reveal>
            <div  className="qualifications-grid"  >
                <Reveal variant={slideRight}>
                <div className="card"><Skills /></div>
                </Reveal>

                <Reveal variant={slideLeft}>
                <div className="card"><Education /></div>
                </Reveal>

                <Reveal variant={slideRight}>
                <div className="card"> <Experience /></div> 
                </Reveal>

                <Reveal variant={slideLeft}>
<div className="card"> <Communication /> </div>
</Reveal>
                

                            </div>
        
        
</Reveal>
      
</div>
        </Reveal>
    )
}

export default Qualifications