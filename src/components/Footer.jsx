import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

import footerLinks from "../data/footerLinks";
import "../styles/footer.css"

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>Hamza Abdulhakim</h2>

            <p>
              Software Engineering Student at Haramaya University.
              Passionate about building modern web applications
              and solving real-world problems through technology.
            </p>

          </div>

          <div className="footer-links">

            <h3>Quick Links</h3>

            <ul>

              {footerLinks.map((link) => (

                <li key={link.id}>

                  <a href={link.href}>
                    {link.title}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          <div className="footer-social">

            <h3>Connect</h3>

            <div className="footer-icons">

              <a
                href="https://github.com/HamzaAbdulhakim"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>

             © {currentYear} Hamza Abdulhakim.
            All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;