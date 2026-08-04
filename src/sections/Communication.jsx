import communication from '../data/communication';
import TimelineItem from '../components/TimelineItem';
import SectionTitle from "../components/SectionTitle"
import { FaAdn } from 'react-icons/fa';
import '../styles/communication.css'
function Communication(){

    return(
        <div className='communication'>

            <SectionTitle
            title={'Communication Skills'}
            subtitle={""} />
                {
                    communication.map((skill)=>(
                        <TimelineItem
                        key = {skill.id}
                        title={skill.name}
                        subtitle={skill.status}
                        icon={<FaAdn />}
                        year={" "} />
                    ))
                }
        </div>
    )
}

export default Communication