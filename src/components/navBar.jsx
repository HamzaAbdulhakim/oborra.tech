import { useEffect, useState } from "react";
import navigation from "../data/navigation";
import "../styles/navbar.css";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import Sidebar from "./sideBar";
function Navbar({ isLightMode, setIsLightMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function handleScroll() {
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.id;
        }
      });

      setActiveSection(current);
    }

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <nav className="nav">
      <h2 id="logo"> Hamza Ab. </h2>

      <div className="nav-links">
        <ul>
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
              >
               <i> {item.icon}</i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-actions">
        <button
          className="theme-btn"
          aria-label="Toggle light and dark theme"
          onClick={() => setIsLightMode(!isLightMode)}
        >
          {isLightMode ? <FiMoon /> : <FiSun />}
        </button>

        <button
          className="menu-btn"
          aria-label="Open navigation menu"
          onClick={() => setIsOpen(true)}
        >
          {" "}
          <FaBars />
        </button>
      </div>
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        activeSection={activeSection}
      />
    </nav>
  );
}
export default Navbar;
