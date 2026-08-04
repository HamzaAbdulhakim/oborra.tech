import "../styles/sidebar.css";
import { FaTimes } from "react-icons/fa";
import navigation from "../data/navigation";
function Sidebar({ isOpen, setIsOpen, activeSection }) {

    return (

        <>
        {
isOpen &&

<div

className="overlay"

onClick={()=>setIsOpen(false)}

/>
}

           <aside 
           className = { isOpen ? "sidebar open": "sidebar"}>

                <button
                    className="close-btn"
                     aria-label="Close navigation menu"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaTimes />
                </button>
                
    



    {navigation.map((item) => (

            <a key={item.id}

                href={`#${item.id}`}

                onClick={()=>setIsOpen(false)}

                className={
                    activeSection === item.id
                        ? "active"
                        : ""
                }

            >
                {item.label}
            </a>

    ))}

            </aside>

        </>

    );
}

export default Sidebar;