function Navbar() {
  return(
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        NEGAR<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#resume">RESUME</a>
        <a href="#contact">CONTACT</a>
      </div>

      <a href="#contact" className="navbar-button">Let's Talk</a>
    </nav>
  );
}
export default Navbar;