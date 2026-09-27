import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* ==================== HERO ==================== */}
        <section className="hero" id="home">
          <div className="hero-container">

            <div className="hero-content">
              <p className="hero-small-text">Hello, I'm</p>

              <h1>
                Negar<span>.</span>
              </h1>

              <h2>Front-End Developer</h2>

              <p className="hero-description">
                من به طراحی و توسعه رابط‌های کاربری مدرن، زیبا و
                کاربرپسند علاقه دارم. با HTML، CSS، JavaScript و React
                پروژه‌های مختلفی ساخته‌ام و همیشه در حال یادگیری و
                پیشرفت در مسیر فرانت‌اند هستم.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-button">
                  View My Projects
                </a>

                <a href="#resume" className="secondary-button">
                  Download Resume
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/my-negar"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a href="mailto:your-email@example.com">
                  Email
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="hero-image-glow"></div>

              <div className="hero-image">
                <img
                  src="/profile.jpg"
                  alt="Negar"
                />
              </div>
            </div>

          </div>
        </section>


     {/* ==================== ABOUT ==================== */}
<section className="about" id="about">
  <div className="about-container">

    <div className="about-image">
      <div className="about-image-glow"></div>

      <img
        src="/about.jpg"
        alt="Negar"
      />
    </div>

    <div className="about-content">
      <p className="section-label">ABOUT ME</p>

      <h2>Who I Am</h2>

      <p>
        من یک Front-End Developer هستم که به طراحی و توسعه
        رابط‌های کاربری مدرن و کاربرپسند علاقه دارم.
      </p>

      <p>
        در مسیر یادگیری خودم با HTML، CSS، JavaScript و React
        پروژه‌های مختلفی ساخته‌ام و همیشه در حال یادگیری
        تکنولوژی‌های جدید و بهتر کردن مهارت‌هایم هستم.
      </p>

      <p>
        هدف من این است که با ساخت پروژه‌های واقعی، تجربه
        بیشتری به دست بیاورم و مسیر حرفه‌ای خودم را در
        حوزه Front-End ادامه بدهم.
      </p>

      <a href="#contact" className="primary-button">
        Let's Talk
      </a>
    </div>

  </div>
</section>


        {/* ==================== SKILLS ==================== */}
        <section className="skills" id="skills">
          <div className="section-heading">
            <p className="section-label">MY SKILLS</p>
            <h2>Technologies I Use</h2>

            <p>
              تکنولوژی‌هایی که در مسیر یادگیری و ساخت پروژه‌ها
              با آن‌ها کار کرده‌ام.
            </p>
          </div>

          <div className="skills-container">

            <div className="skill-card">
              <div className="skill-icon html-icon">
                <span>&lt;/&gt;</span>
              </div>

              <h3>HTML</h3>
              <p>Semantic Structure</p>
            </div>


            <div className="skill-card">
              <div className="skill-icon css-icon">
                <span>#</span>
              </div>

              <h3>CSS</h3>
              <p>Modern Styling</p>
            </div>


            <div className="skill-card">
              <div className="skill-icon js-icon">
                <span>JS</span>
              </div>

              <h3>JavaScript</h3>
              <p>Interactive Web</p>
            </div>


            <div className="skill-card">
              <div className="skill-icon react-icon">
                <span>⚛</span>
              </div>

              <h3>React</h3>
              <p>UI Development</p>
            </div>


            <div className="skill-card">
              <div className="skill-icon git-icon">
                <span>⌘</span>
              </div>

              <h3>Git</h3>
              <p>Version Control</p>
            </div>


            <div className="skill-card">
              <div className="skill-icon ts-icon">
                <span>TS</span>
              </div>

              <h3>TypeScript</h3>
              <p>Currently Learning</p>
            </div>

          </div>
        </section>


        {/* ==================== PROJECTS ==================== */}
        <section className="projects" id="projects">
          <div className="section-heading">
            <p className="section-label">MY WORK</p>

            <h2>Featured Projects</h2>

            <p>
              مجموعه‌ای از پروژه‌هایی که برای تمرین و تقویت
              مهارت‌های Front-End ساخته‌ام.
            </p>
          </div>


          <div className="projects-container">

            {/* Weather */}
            <article className="project-card">
              <div className="project-preview">
                <span>Weather</span>
              </div>

              <div className="project-content">
                <p className="project-tech">
                  React • API • CSS
                </p>

                <h3>Weather Dashboard</h3>

                <p>
                  داشبورد آب‌وهوا با قابلیت جستجوی شهر، نمایش
                  پیش‌بینی و تغییر واحد دما.
                </p>

                <div className="project-links">
                  <a href="#" className="project-live">
                    Live Demo
                  </a>

                  <a href="#" className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>


            {/* Todo */}
            <article className="project-card">
              <div className="project-preview">
                <span>Todo</span>
              </div>

              <div className="project-content">
                <p className="project-tech">
                  HTML • CSS • JavaScript
                </p>

                <h3>Todo List</h3>

                <p>
                  اپلیکیشن مدیریت کارها برای اضافه کردن و مدیریت
                  وظایف روزانه با JavaScript.
                </p>

                <div className="project-links">
                  <a href="#" className="project-live">
                    Live Demo
                  </a>

                  <a href="#" className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>


            {/* Quiz */}
            <article className="project-card">
              <div className="project-preview">
                <span>Quiz</span>
              </div>

              <div className="project-content">
                <p className="project-tech">
                  HTML • CSS • JavaScript
                </p>

                <h3>Quiz App</h3>

                <p>
                  اپلیکیشن آزمون تعاملی برای تمرین JavaScript،
                  مدیریت داده‌ها و رویدادهای کاربر.
                </p>

                <div className="project-links">
                  <a href="#" className="project-live">
                    Live Demo
                  </a>

                  <a href="#" className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>


            {/* Calculator */}
            <article className="project-card">
              <div className="project-preview">
                <span>Calculator</span>
              </div>

              <div className="project-content">
                <p className="project-tech">
                  HTML • CSS • JavaScript
                </p>

                <h3>Calculator</h3>

                <p>
                  ماشین حساب تعاملی ساخته شده با JavaScript
                  برای تمرین منطق برنامه‌نویسی.
                </p>

                <div className="project-links">
                  <a href="#" className="project-live">
                    Live Demo
                  </a>

                  <a href="#" className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>


            {/* Login */}
            <article className="project-card">
              <div className="project-preview">
                <span>Login</span>
              </div>

              <div className="project-content">
                <p className="project-tech">
                  HTML • CSS
                </p>

                <h3>Login Page</h3>

                <p>
                  یک صفحه ورود ساده و ریسپانسیو با تمرکز روی
                  طراحی تمیز و تجربه کاربری.
                </p>

                <div className="project-links">
                  <a href="#" className="project-live">
                    Live Demo
                  </a>

                  <a href="#" className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>


            {/* React Website */}
            <article className="project-card">
              <div className="project-preview">
                <span>React</span>
              </div>

              <div className="project-content">
                <p className="project-tech">
                  React • CSS
                </p>

                <h3>React Personal Website</h3>

                <p>
                  یک وب‌سایت شخصی ساخته شده با React برای تمرین
                  component-based development.
                </p>

                <div className="project-links">
                  <a href="#" className="project-live">
                    Live Demo
                  </a>

                  <a href="#" className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>

          </div>
        </section>


        {/* ==================== RESUME ==================== */}
        <section className="resume" id="resume">
          <div className="section-heading">
            <p className="section-label">MY RESUME</p>
            <h2>My Journey</h2>
          </div>

          <div className="resume-container">

            <div className="resume-item">
              <span>01</span>

              <div>
                <h3>Front-End Development</h3>

                <p>
                  یادگیری HTML، CSS، JavaScript و React و ساخت
                  پروژه‌های مختلف برای تقویت مهارت‌های فرانت‌اند.
                </p>
              </div>
            </div>


            <div className="resume-item">
              <span>02</span>

              <div>
                <h3>Hands-on Projects</h3>

                <p>
                  ساخت پروژه‌هایی مانند Weather Dashboard،
                  Todo List، Quiz، Calculator و Login Page.
                </p>
              </div>
            </div>


            <div className="resume-item">
              <span>03</span>

              <div>
                <h3>Continuous Learning</h3>

                <p>
                  ادامه یادگیری و توسعه مهارت‌ها برای ورود به
                  بازار کار Front-End.
                </p>
              </div>
            </div>

          </div>

          <div className="resume-button">
            <a href="#" className="primary-button">
              Download Resume
            </a>
          </div>
        </section>


        {/* ==================== CONTACT ==================== */}
        <section className="contact" id="contact">
          <div className="section-heading">
            <p className="section-label">GET IN TOUCH</p>

            <h2>Let's Connect</h2>

            <p>
              برای فرصت‌های کاری، کارآموزی یا همکاری می‌توانید
              از طریق راه‌های ارتباطی زیر با من در تماس باشید.
            </p>
          </div>

          <div className="contact-container">

            <a
              href="mailto:your-email@example.com"
              className="contact-card"
            >
              <span>✉</span>

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
              <span>⌘</span>

              <div>
                <h3>GitHub</h3>
                <p>my-negar</p>
              </div>
            </a>


            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>in</span>

              <div>
                <h3>LinkedIn</h3>
                <p>Let's connect</p>
              </div>
            </a>

          </div>
        </section>

      </main>


      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer-logo">
          NEGAR<span>.</span>
        </div>

        <p>
          Front-End Developer passionate about creating modern
          web experiences.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          © 2026 Negar. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;