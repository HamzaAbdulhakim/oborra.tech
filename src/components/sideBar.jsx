import "../styles/sidebars.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import navigation from "../data/navigation";

import { FaTablet } from "react-icons/fa";
function Sidebar({ isOpen, setIsOpen, activeSection }) {
  return (
    <>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}

      {isOpen ? (
        <aside className="sidebar open card">
          <div className="sidebar-btn ">
            <div>
              <h5> Hamza Ab.</h5>
            </div>
            <div>
              <button
                className="close-btn"
                aria-label="Close navigation menu"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes />
              </button>
            </div>
          </div>

          <div className="side-links">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={()=>setIsOpen(!isOpen)}
              >
              <i > {item.icon}</i> {  item.label}
              </a>
            ))}
          </div>
          <div className="tasks">
            <i className="coffee">☕</i>
            <i className="code">👨‍💻</i>
            <i className="result"><FaTablet /></i>
            </div>                  </aside>
      ) : (
        " "
      )}
    </>
  );
}

export default Sidebar;
