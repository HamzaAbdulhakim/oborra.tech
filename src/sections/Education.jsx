import education from "../data/education";
import TimelineItem from "../components/TimelineItem";
import SectionTitle from "../components/SectionTitle";
import {FaGraduationCap} from 'react-icons/fa'
import Button from "../components/Button";
function Education(){
    return(
        <section id="education">
            <SectionTitle title='Education'
            subtitle= 'Here is my accadamic detail' />

            {
                education.map((item)=>(
                   <TimelineItem
                    key={item.id}
                    title={item.school}
                    subtitle={item.degree}
                    icon={ <FaGraduationCap /> }
                    year={item.year} />
                ))
            }
            <div> <a href="#education">Read more!</a></div>
        </section>
    )
}

export default Education;