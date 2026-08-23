function SectionTitle({ title, subtitle}){
    return(
        <div className=" card-header">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
        </div>
    )
}

export default SectionTitle