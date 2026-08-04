import "../styles/timeline.css"; 
function TimelineItem({
    icon,
    title,
    subtitle,
    year,
    description
}){

    return(

        <div className="timeline-item">

            <div className="timeline-dot">

                {icon}

            </div>

            <div className="timeline-content">

                <h3>{title}</h3>

                <h4>{subtitle}</h4>

                <span>{year}</span>

                <p>{description}</p>

            </div>

        </div>

    )

}

export default TimelineItem;