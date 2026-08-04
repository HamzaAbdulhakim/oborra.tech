import Reveal from "../components/Reveal";
import profile from "../assets/hamzaProfile.png";
import '../styles/profileHeader.css'

import { fadeUp, slideRight } from "../animations/variants";
import { FaFacebook,
    FaTelegram, FaTiktok
 } from "react-icons/fa";
function Header() {
  return (
    <Reveal>
      <div
      className="hero-section" >
  
    <div  className="hero-container"
    >
      <div className="profile-image-wrapper">
        <Reveal>
        <img
          src={profile}
          alt="Portrait of Hamza Abdulhakim"
          className="profile-image"
        />

        </Reveal>

        <span className="status-badge">
          🟢 Available for Opportunities
        </span>
      </div>

      <h2 className="profile-name">
        Hamza Abdulhakim
      </h2>

      <h4 className="profile-title">
        Software Engineering Student
      </h4>
<Reveal variant={slideRight}>
      <p className="profile-subtitle">
        Passionate about building modern applications, responsive web-tech,
        solving real-world problems, and continuously
        growing in both technology and Islamic knowledge.
      </p>
</Reveal>
      <div className="profile-location">
        📍 Harar, Ethiopia
      </div>

      <div className="social-link">
        <a href="https://www.facebook.com/hamza.abdulhakim"><FaFacebook /></a>
        <a href="https://t.me/ibnuAbdi120"><FaTelegram /></a>
        <a href="https://www.facebook.com/hamza.abdulhakim"><FaTiktok /></a>
      </div>
    </div>
</div>
    </Reveal>
  );
}

export default Header;