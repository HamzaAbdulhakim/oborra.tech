import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links card">

      <a
        href="https://github.com/HamzaAbdulhakim"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="card-icon"> <FaGithub /></i>
      </a>

      <a
        href="#"
        target="_blank"
         rel="noopener noreferrer"
      >
       <i className="card-icon"> <FaLinkedin /></i>
      </a>

      <a
        href="https://t.me/ibnuAbdi120"
        target="_blank"
         rel="noopener noreferrer"
      >
        <i className="card-icon"> <FaTelegram /></i>
      </a>

    </div>
  );
}

export default SocialLinks;