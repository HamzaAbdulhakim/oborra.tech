import Logo from "../../../assets/MyLogo.jpg";
import "./heroMain.css";

function HeroMain() {
  return (
    <>
      <div className="hero-main card">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge__dot"></span>
            Full Stack Engineer
          </div>

          <h1 className="hero-headline">
            Building digital <br />
            experiences that <br />
            <span className="hero-headline__gradient"> matters</span>
          </h1>

          <p className="hero-subtext">
            I'm a full-stack developer crafting pixel-perfect interfaces and
            robust backends for startups and established brands alike.
          </p>
          <div className="hero-action">
            <a href="#projects" className="hero-btn hero-btn--primary">
              <span>View My Work</span>
            </a>
            <a href="#about" className="hero-btn hero-btn--secondary">
              <span>About me</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">

          <div className="hero-glass-card">
            <div className="glass-card__header">
              <div className="glass-card-dot">
                <span class="glass-carddot glass-carddot--red"></span>
                <span class="glass-carddot glass-carddot--yellow"></span>
                <span class="glass-carddot glass-carddot--green"></span>
              </div>
              <span
                style={{
                  color: "#71717a",
                  fontSize: "0.75rem",
                  marginLeft: "auto",
                }}
              >
              
              </span>

            </div>

            <div className="glass-card__body">
               <img src= {Logo} alt="" />
              <div className="glass-card__line glass-cardline--highlight">         
              </div>
            </div>
        </div>
          
        </div>
                
      </div>
      
    </>
  );
}

export default HeroMain;
