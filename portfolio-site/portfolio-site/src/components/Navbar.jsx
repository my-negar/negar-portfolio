import { useState } from 'react';

function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false);

 
  const toggleMenu = () => setIsOpen(!isOpen);

 
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      
      <a href="#home" className="navbar-logo">
        NEGAR<span>.</span>
      </a>

     
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>HOME</a>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#skills" onClick={closeMenu}>SKILLS</a>
        <a href="#projects" onClick={closeMenu}>PROJECTS</a>
        <a href="#resume" onClick={closeMenu}>RESUME</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
      </div>

     
      <a href="#contact" className="navbar-button">Let's Talk</a>

     
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;