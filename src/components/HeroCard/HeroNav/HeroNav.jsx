import "./heroNav.css"

function HeroNav(){

    return(
        <nav className="hero-nav">
            <div className="hero-nav__logo">Hamza Abdulhakim</div>

            <ul className="hero-nav__links">
                <li className=""> <a href="#header">Hero</a></li>
                <li className=""> <a href="#projects">Work</a></li>
                <li className=""> <a href="#service">Service</a></li>
                <li className="" > <a href="#skill">Skills</a></li>
                
            </ul>

            <button className="hero-nav__cta">Let's Talk </button>
        </nav>
    )
}

export default HeroNav