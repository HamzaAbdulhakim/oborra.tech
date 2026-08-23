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

          <div className="footer-brand card">

            <h2 className="title">Hamza Abdulhakim</h2>

            <p className="subtitle">
              Software Engineering Student at Haramaya University.
              Passionate about building modern web applications
              and solving real-world problems through technology.
            </p>

          </div>

          <div className="footer-links card">

            <h3 className="title">Quick Links</h3>

            <ul>

              {footerLinks.map((link) => (

                <li key={link.id}>

                  <a href={link.href} className="subtitle">
                    {link.title}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          <div className="footer-social card">

            <h3>Connect</h3>

            <div className="footer-icons ">

              <a
                href="https://github.com/HamzaAbdulhakim"
                target="_blank"
                rel="noreferrer"
              >
                <i className="card-icon"> <FaGithub /></i>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
               <i className="card-icon"> <FaLinkedin /></i>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
               <i className="card-icon"> <FaTelegramPlane /></i>
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