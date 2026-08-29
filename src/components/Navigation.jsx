import { useState, useEffect } from 'react';
import "../styles/navigation.css";
import navigation from '../data/navigation';
function Navigation({isLightMode, setIsLightMode}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--open' : ''}`}>
      <div className="navigation-container">
        
        {/* Logo */}
        <a href="#" className="navigation-logo">
          <div className="nav-logo__img">
            <img src="src/assets/MyLogo.jpg" alt="Logo" />
          </div>
          <span className="nav-logo__text">Hamza Ab.</span>
        </a>

        {/* Desktop Links */}
        <ul className="navigation-links">
          {navigation.map(item =>(
            <li key={item.id}
            className="nav-links__item">
              <a href={item.id}>{item.label}</a>
            </li>
          ))}
          {/* <li className="nav-linksitem nav-linksitem--active">
            <a href="#work">Work</a>
          </li>
          <li className="nav-links__item"><a href="#about">About</a></li>
          <li className="nav-links__item"><a href="#services">Services</a></li>
          <li className="nav-links__item"><a href="#contact">Contact</a></li> */}
        </ul>

        {/* CTA */}
        <div className="navigation-action">
          <button className="navigation-cta" 
          onClick={()=>setIsLightMode(!isLightMode)} >Change theme</button>
        </div>

        {/* Hamburger */}
        <button 
          className="nav-hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="nav-hamburger__line"></span>
          <span className="nav-hamburger__line"></span>
          <span className="nav-hamburger__line"></span>
        </button>

      </div>

      {/* Mobile Drawer */}
      <div className="navigation-drawer" aria-hidden={!menuOpen}>
        <div className="nav-drawer__backdrop" onClick={() => setMenuOpen(false)}></div>
        <div className="nav-drawer__panel">
          {navigation.map(item=>(
            <a key={item.id} href={item.id}
            className="nav-drawer__link" onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          {/* <a href="#work" className="nav-drawer__link" onClick={() => setMenuOpen(false)}>Work</a> */}
          {/* <a href="#about" className="nav-drawer__link" onClick={() => setMenuOpen(false)}>About</a> */}
          {/* <a href="#services" className="nav-drawer__link" onClick={() => setMenuOpen(false)}>Services</a> */}
          {/* <a href="#contact" className="nav-drawer__link" onClick={() => setMenuOpen(false)}>Contact</a> */}
          <a href="#contact" className="navigation-cta nav-drawer__cta">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;