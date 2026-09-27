import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* ==================== HERO ==================== */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>

            <h1>Negar</h1>

            <h2>Front-End Developer</h2>

            <p className="hero-description">
              من وب‌سایت‌های ساده، زیبا و کاربرپسند طراحی و توسعه می‌دهم.
              همیشه در حال یادگیری و ساخت پروژه‌های جدید هستم.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View My Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section className="about" id="about">
          <p className="section-label">ABOUT ME</p>

          <h2>About Me</h2>

          <p className="about-text">
            من یک Front-End Developer هستم و به طراحی و توسعه رابط‌های کاربری
            علاقه دارم. با HTML، CSS، JavaScript و React کار می‌کنم و در حال
            یادگیری و ساخت پروژه‌های جدید برای پیشرفت در مسیر فرانت‌اند هستم.
          </p>
        </section>

        {/* ==================== SKILLS ==================== */}
        <section className="skills" id="skills">
          <p className="section-label">MY SKILLS</p>

          <h2>Technologies I Use</h2>

          <div className="skills-container">
            <div className="skill-card">
              <h3>HTML</h3>
              <p>Semantic & Accessible Structure</p>
            </div>

            <div className="skill-card">
              <h3>CSS</h3>
              <p>Responsive & Modern Styling</p>
            </div>

            <div className="skill-card">
              <h3>JavaScript</h3>
              <p>Interactive Web Experiences</p>
            </div>

            <div className="skill-card">
              <h3>React</h3>
              <p>Building Modern User Interfaces</p>
            </div>

            <div className="skill-card">
              <h3>Git</h3>
              <p>Version Control</p>
            </div>

            <div className="skill-card">
              <h3>TypeScript</h3>
              <p>Currently Learning</p>
            </div>
          </div>
        </section>

        {/* ==================== PROJECTS ==================== */}
        <section className="projects" id="projects">
          <div className="projects-header">
            <p className="section-label">MY WORK</p>

            <h2>Featured Projects</h2>

            <p className="projects-intro">
              مجموعه‌ای از پروژه‌هایی که برای تمرین و تقویت مهارت‌های
              Front-End خودم ساخته‌ام.
            </p>
          </div>

          <div className="projects-container">

            {/* Weather Dashboard */}
            <article className="project-card">
              <div className="project-image">
                <span>Weather Dashboard</span>
              </div>

              <div className="project-content">
                <p className="project-type">React • API • CSS</p>

                <h3>Weather Dashboard</h3>

                <p>
                  داشبورد آب‌وهوا با قابلیت جستجوی شهر، نمایش پیش‌بینی
                  و تغییر واحد دما.
                </p>

                <div className="project-links">
                  <a href="#" className="project-button primary-project">
                    Live Demo
                  </a>

                  <a href="#" className="project-button secondary-project">
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Todo List */}
            <article className="project-card">
              <div className="project-image">
                <span>Todo List</span>
              </div>

              <div className="project-content">
                <p className="project-type">HTML • CSS • JavaScript</p>

                <h3>Todo List</h3>

                <p>
                  یک اپلیکیشن مدیریت کارها برای اضافه کردن، مدیریت و انجام
                  وظایف روزانه با استفاده از JavaScript.
                </p>

                <div className="project-links">
                  <a href="#" className="project-button primary-project">
                    Live Demo
                  </a>

                  <a href="#" className="project-button secondary-project">
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Quiz App */}
            <article className="project-card">
              <div className="project-image">
                <span>Quiz App</span>
              </div>

              <div className="project-content">
                <p className="project-type">HTML • CSS • JavaScript</p>

                <h3>Quiz App</h3>

                <p>
                  یک اپلیکیشن آزمون تعاملی برای تمرین JavaScript و مدیریت
                  داده‌ها و رویدادهای کاربر.
                </p>

                <div className="project-links">
                  <a href="#" className="project-button primary-project">
                    Live Demo
                  </a>

                  <a href="#" className="project-button secondary-project">
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Calculator */}
            <article className="project-card">
              <div className="project-image">
                <span>Calculator</span>
              </div>

              <div className="project-content">
                <p className="project-type">HTML • CSS • JavaScript</p>

                <h3>Calculator</h3>

                <p>
                  ماشین حساب تعاملی ساخته شده با JavaScript برای تمرین
                  منطق برنامه‌نویسی و کار با DOM.
                </p>

                <div className="project-links">
                  <a href="#" className="project-button primary-project">
                    Live Demo
                  </a>

                  <a href="#" className="project-button secondary-project">
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Login Page */}
            <article className="project-card">
              <div className="project-image">
                <span>Login Page</span>
              </div>

              <div className="project-content">
                <p className="project-type">HTML • CSS • JavaScript</p>

                <h3>Login Page</h3>

                <p>
                  یک صفحه ورود ساده و ریسپانسیو با تمرکز روی طراحی تمیز
                  و تجربه کاربری.
                </p>

                <div className="project-links">
                  <a href="#" className="project-button primary-project">
                    Live Demo
                  </a>

                  <a href="#" className="project-button secondary-project">
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* React Personal Website */}
            <article className="project-card">
              <div className="project-image">
                <span>React Website</span>
              </div>

              <div className="project-content">
                <p className="project-type">React • CSS</p>

                <h3>React Personal Website</h3>

                <p>
                  یک وب‌سایت شخصی ساخته شده با React برای تمرین
                  component-based development.
                </p>

                <div className="project-links">
                  <a href="#" className="project-button primary-project">
                    Live Demo
                  </a>

                  <a href="#" className="project-button secondary-project">
                    GitHub
                  </a>
                </div>
              </div>
            </article>

          </div>
        </section>

        {/* ==================== RESUME ==================== */}
<section className="resume" id="resume">
  <div className="resume-header">
    <p className="section-label">MY RESUME</p>

    <h2>Resume</h2>

    <p className="resume-intro">
      مسیر یادگیری و مهارت‌هایی که تا امروز در زمینه Front-End
      به دست آورده‌ام.
    </p>
  </div>

  <div className="resume-container">

    {/* Skills */}
    <div className="resume-card">
      <div className="resume-icon">01</div>

      <div>
        <h3>Front-End Development</h3>

        <p>
          یادگیری و کار با HTML، CSS، JavaScript و React
          و ساخت پروژه‌های مختلف برای تقویت مهارت‌های
          توسعه رابط کاربری.
        </p>
      </div>
    </div>

    {/* Projects */}
    <div className="resume-card">
      <div className="resume-icon">02</div>

      <div>
        <h3>Hands-on Projects</h3>

        <p>
          ساخت پروژه‌هایی مانند Weather Dashboard، Todo List،
          Quiz App، Calculator، Login Page و React Personal Website
          برای تمرین و افزایش تجربه عملی.
        </p>
      </div>
    </div>

    {/* Learning */}
    <div className="resume-card">
      <div className="resume-icon">03</div>

      <div>
        <h3>Continuous Learning</h3>

        <p>
          در حال یادگیری و توسعه مهارت‌های خود در زمینه
          Front-End و آشنایی بیشتر با تکنولوژی‌های جدید
          برای ورود به بازار کار.
        </p>
      </div>
    </div>

  </div>

  <div className="resume-download">
    <a href="#" className="primary-button">
      Download Resume
    </a>
  </div>
</section>

{/* ==================== CONTACT ==================== */}
<section className="contact" id="contact">
  <div className="contact-header">
    <p className="section-label">GET IN TOUCH</p>

    <h2>Let's Work Together</h2>

    <p className="contact-intro">
      اگر برای همکاری، فرصت کارآموزی یا پروژه‌ای در زمینه
      Front-End با من در ارتباط هستید، خوشحال می‌شوم با من تماس بگیرید.
    </p>
  </div>

  <div className="contact-container">

    <a href="mailto:your-email@example.com" className="contact-card">
      <span className="contact-icon">✉</span>

      <div>
        <h3>Email</h3>
        <p>your-email@example.com</p>
      </div>
    </a>

    <a
      href="https://github.com/my-negar"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">⌘</span>

      <div>
        <h3>GitHub</h3>
        <p>github.com/my-negar</p>
      </div>
    </a>

    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">in</span>

      <div>
        <h3>LinkedIn</h3>
        <p>Let's connect</p>
      </div>
    </a>

  </div>
</section>

{/* ==================== FOOTER ==================== */}
<footer className="footer">
  <div className="footer-content">
    <a href="#home" className="footer-logo">
      NEGAR
    </a>

    <p>
      Front-End Developer passionate about creating modern
      and user-friendly web experiences.
    </p>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Negar. All rights reserved.</p>
  </div>
</footer>
      </main>
    </>
  );
}

export default App;