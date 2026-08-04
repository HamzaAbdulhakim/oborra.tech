import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">

      <a
        href="https://github.com/HamzaAbdulhakim"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="#"
        target="_blank"
         rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://t.me/ibnuAbdi120"
        target="_blank"
         rel="noopener noreferrer"
      >
        <FaTelegram />
      </a>

    </div>
  );
}

export default SocialLinks;