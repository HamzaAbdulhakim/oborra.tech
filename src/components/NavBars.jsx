import { useEffect, useState } from "react";
import navigation from "../data/navigation";
import { FaBars } from "react-icons/fa";
import Sidebar from "./sideBar";
import "../styles/navbar.css";
import Logo from "../assets/MyLogo.jpg";
function NavBars({ isLightMode, setIsLightMode }) {
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

    
       {/* Logo */}
 <a href="#" className="navigation-logo">
   <div className="nav-logo__img">
     <img src={Logo} alt="Logo" />
   </div>
   <span className="nav-logo__text">Hamza Ab.</span>
 </a>

      <div className="nav-links">
        <ul>
          {navigation.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
              >
               <i className=""> {item.icon}</i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

 {/* CTA */}

 
      <div className=" nav-actions">
        <button
          className="theme-btn "
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
export default NavBars;
