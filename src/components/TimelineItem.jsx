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

            <div className="">

                <i className="card-icon">{icon}</i>

            </div>

            <div className="timeline-content">

                <h3 className="title">{title}</h3>

                <h4 className="subtitle">{subtitle}</h4>

                <span>{year}</span>

                <p>{description}</p>

            </div>

        </div>

    )

}

export default TimelineItem;