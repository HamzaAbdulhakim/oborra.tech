import Reveal from "../components/Reveal";
import profile from "../assets/hamzaProfile.png";
import "../styles/profileHeader.css";

import { slideRight } from "../animations/variants";
import {
    FaFacebook,
    FaTelegram,
    FaTiktok
} from "react-icons/fa";

function Header() {
    return (
        <Reveal>
            <section className="hero-section">
                <div className="hero-container">

                    {/* Profile image */}
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

                    {/* Name */}
                    <h2 className="profile-name">
                        Hamza Abdulhakim
                    </h2>

                    {/* Title */}
                    <h4 className="profile-title">
                        Software Engineering Student
                    </h4>

                    {/* Description */}
                    <Reveal variant={slideRight}>
                        <p className="profile-subtitle">
                            Passionate about building modern applications,
                            responsive web-tech, solving real-world problems,
                            and continuously growing in both technology and
                            Islamic knowledge.
                        </p>
                    </Reveal>

                    {/* Location */}
                    <div className="profile-location">
                        <span aria-hidden="true">📍</span>
                        <span>Harar, Ethiopia</span>
                    </div>

                    {/* Social links */}
                    <div className="social-link">

                        <a
                            href="https://www.facebook.com/hamza.abdulhakim"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>

                        <a
                            href="https://t.me/ibnuAbdi120"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram"
                        >
                            <FaTelegram />
                        </a>

                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                        >
                            <FaTiktok />
                        </a>

                    </div>

                </div>
            </section>
        </Reveal>
    );
}

export default Header;