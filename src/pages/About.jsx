import SectionTitle from "../components/SectionTitle";
import Biography from "../components/Biography";
import InfoCard from "../components/InfoCard";
import AcademicCard from "../components/AcademicCard";
import IslamicCard from "../components/IslamicCard";
import Reveal from "../components/Reveal";
import about from "../data/about";
import Button from "../components/Button";
import info from "../data/info";
import { slideRight } from "../animations/variants";
import profile from "../assets/hamzaProfile.png";
import HireMe from "../components/HireButton";
import CallToAction from "../components/CallToAction"
import "../styles/about.css";

function About() {
  return (
    <Reveal>
      <section id="about" className="about-section">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        <Reveal>
          <div className="about-container">
            <div className="about-image">
              <img src={profile} loading="lazy" alt={about.name} />
              <div className="philosophy">
                <Reveal variant={slideRight}>
                  <h4 className="title">My Philosophy</h4>
                </Reveal>
                <p className="subtitle">
                  I believe learning never ends. Every project is an opportunity
                  to improve, solve real-world problems, and build software that
                  benefits people.
                </p>
              </div>
              <CallToAction 
              action1={"View Project"}
              action2={"Download Resume"} />

            </div>

            <div className="card">
                <h2 className="title">My Biography</h2>
              <Reveal>
                <h3 className="about-intro">{about.intro}</h3>
              </Reveal>
              <Reveal>
                {" "}
                <Biography />{" "}
              </Reveal>
              <Reveal>
                <div className="info-grid">
                  {info.map((item) => (
                    <InfoCard key={item.id} item={item} />
                  ))}
                </div>
              </Reveal>
              
            </div>
          </div>
        </Reveal>
        <span className="education-grid" id="education">
          <IslamicCard />

          <AcademicCard />
        </span>

        <HireMe />
      </section>
    </Reveal>
  );
}

export default About;
