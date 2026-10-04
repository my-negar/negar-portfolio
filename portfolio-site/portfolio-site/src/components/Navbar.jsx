import { useState } from 'react';

function Navbar() {
  // استیت برای باز و بسته شدن منوی همبرگری
  const [isOpen, setIsOpen] = useState(false);

  // تابع باز/بسته کردن منو
  const toggleMenu = () => setIsOpen(!isOpen);

  // تابع بستن منو بعد از کلیک روی هر لینک
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* لوگو */}
      <a href="#home" className="navbar-logo">
        NEGAR<span>.</span>
      </a>

      {/* لینک‌های ناوبری */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>HOME</a>
        <a href="#about" onClick={closeMenu}>ABOUT</a>
        <a href="#skills" onClick={closeMenu}>SKILLS</a>
        <a href="#projects" onClick={closeMenu}>PROJECTS</a>
        <a href="#resume" onClick={closeMenu}>RESUME</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>
      </div>

      {/* دکمه ارتباط */}
      <a href="#contact" className="navbar-button">Let's Talk</a>

      {/* دکمه همبرگری موبایل */}
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