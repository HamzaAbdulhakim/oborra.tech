import SectionTitle from "../components/SectionTitle";
import experience from "../data/experience";
import TimelineItem from "../components/TimelineItem";
import { FaBriefcase } from "react-icons/fa";
function Experience(){
    return(
        <section id="experience">
            <SectionTitle title={'My experience'}
            subtitle={'What did I do still?'} />

            {
                experience.map((job)=>(
                    <TimelineItem 
                    key={job.id}
                    title={job.title}
                    subtitle={job.campany}
                    year={job.year}
                    icon={ <FaBriefcase /> }
                    />
                ))
            }
        </section>
    )
}

export default Experience