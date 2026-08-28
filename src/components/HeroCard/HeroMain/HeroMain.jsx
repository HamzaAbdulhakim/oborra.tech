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
{/* 
        <div className="hero-visual">
            <div className="hero-image"> 
          <img src="../src/assets/hamzaProfile.png" alt="" />
          </div>

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
              Peronal Portfolio
              </span>

            </div>

            <div className="glass-card__body">
              <div className="glass-cardline glass-cardline--short"></div>
              <div className="glass-cardline glass-cardline--medium"></div>
              <div className="glass-cardline glass-cardline--long"></div>
              <div className="glass-cardline glass-cardline--highlight">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#818cf8"
                  strokeWidth={2}
                ></svg>
                <span>Build successfully</span>
              </div>
            </div>
        </div>
          
        </div>
        */}  
        
      </div>
      
    </>
  );
}

export default HeroMain;
