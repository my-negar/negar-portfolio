function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        NEGAR<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="navbar-button">
        Let's Talk
      </a>
    </nav>
  );
}

export default Navbar;