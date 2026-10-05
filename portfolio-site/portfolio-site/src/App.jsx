import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/*  HERO  */}
        <section className="hero" id="home">
          <div className="hero-container">

            <div className="hero-content">
              <p className="hero-small-text">Hello, I'm</p>

              <h1 className="h1">
                Negar<span>.</span>
              </h1>

              <h2>Front-End Developer</h2>

              <p className="hero-description">
                طراح و توسعه دهنده وب‌سایت های مدرن، واکنش گرا و کاربرپسند. درحال حاضر مشغول یادگیری، خلق پروژه‌ها و به دنبال فرصت‌های شغلی جدید در زمینه توسعه فرانت‌اند هستم
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
                  href="https://www.linkedin.com/in/negar-rasoulinezhad-84709a3a5?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <a href="mailto:rasolinejadnegar@gmail.com">
                  Email
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="hero-image-glow"></div>

              <div className="hero-image">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Negar" />
              </div>
            </div>

          </div>
        </section>

        {/*  ABOUT  */}
        <section className="about" id="about">
          <div className="about-container">

            <div className="about-image">
              <div className="about-image-glow"></div>
              <br></br><br></br>
              <img
                src={`${import.meta.env.BASE_URL}about.jpg`}
                alt="Negar"
              />
            </div>
            <div className="about-content"><br></br>
              <h3 className="section-label">ABOUT ME</h3>

              <h2 className="h2">Who I Am</h2><br></br>

              <p> من یک Front-end Developer هستم.<br></br>
                به طراحی و توسعه رابط های کاربری مدرن و کاربرپسند علاقه دارم،<br></br>
                در مسیر یادگیری پروژه‌های مختلفی با HTML, CSS, JavaScript, React
                ساخته‌ام و همیشه درحال یادگیری تکنولوژی‌های جدید و بهتر کردن مهارت‌هایم هستم.  <br></br>
                هدف من این است که با ساخت پروژه‌های واقعی، تجربه بیشتری به دست بیاورم و مسیر حرفه ای خودم را در حوزه Front-End ادامه بدهم.
              </p>

              <a href="#contact" className="primary-button">
                Let's Talk
              </a>
            </div>
          </div>
        </section>

        {/*  SKILLS  */}
        <section className="skills" id="skills">
          <div className="section-heading">
            <p className="section-label">MY SKILLS</p>
            <h2 className="h2">Technologies I Use</h2>

            <p>
              تکنولوژی‌هایی که در مسیر یادگیری و ساخت پروژه‌ها
              با آن‌ها کار کرده‌ام
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

        {/*  PROJECTS  */}
        <section className="projects" id="projects">
          <div className="section-heading">
            <h3 className="section-label">MY WORK</h3>
            <h2 className="h2">Featured Projects</h2>

            <h6 className="h5">  مجموعه ای از پروژه‌هایی که برای تمرین و تقویت مهارت‌هایم در این مسیر ساخته‌ام </h6>
          </div>
          <div className="projects-container">

            {/* React Website */}
            <article className="project-card">
              <div className="project-preview">
                <span>React</span>
              </div>

              <div className="project-content">
                <h4 className="project-tech">
                  React • CSS
                </h4>

                <h3>React Personal Website</h3>

                <p>
                  یک وب‌سایت شخصی ساخته شده با React برای تمرین
                  .component-based development
                </p>

                <div className="project-links">
                  <a href="#" className="project-live">
                    Live Demo
                  </a>

                  <a href="https://github.com/my-negar/negar-portfolio/tree/main/portfolio-site"
                    target="_blank"
                    rel="noreferrer"
                    className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>


            {/* Weather */}
            <article className="project-card">
              <div className="project-preview">
                <span>Weather</span>
              </div>

              <div className="project-content">
                <h4 className="project-tech">
                  React • API • CSS
                </h4>

                <h3>Weather Dashboard</h3>

                <p>
                  داشبورد آب‌وهوا با قابلیت جستجوی شهر، نمایش
                  پیش‌بینی و تغییر واحد دما.
                </p>

                <div className="project-links">
                  <a href="https://meteo-lab.ir"
                    target="_blank"
                    rel="noreferrer"
                    className="project-live">
                    Live Demo
                  </a>

                  <a href="https://github.com/my-negar/negar-portfolio/tree/main/weather"
                    target="_blank"
                    rel="noreferrer"
                    className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>


            {/* Todo */}
            <article className="project-card">
              <div className="project-preview">
                <span>Todo List</span>
              </div>

              <div className="project-content">
                <h4 className="project-tech">
                  HTML • CSS • JavaScript
                </h4>

                <h3>Todo List</h3>

                <p>
                  اپلیکیشن مدیریت کارها برای اضافه کردن و مدیریت
                  وظایف روزانه با JavaScript.
                </p>

                <div className="project-links">
                  <a href="https://my-negar.github.io/negar-portfolio/todolist/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-live">
                    Live Demo
                  </a>

                  <a href="https://github.com/my-negar/negar-portfolio/tree/main/todolist"
                    target="_blank"
                    rel="noreferrer"
                    className="project-github">
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
                <h4 className="project-tech">
                  HTML • CSS • JavaScript
                </h4>

                <h3>Quiz App</h3>

                <p>
                  این پروژه‌ مشابه اپلیکیشن پرسش و پاسخ Quiz of king هست و از JavaScript برای مدیریت سوال استفاده شده.
                </p>

                <div className="project-links">
                  <a href="https://my-negar.github.io/negar-portfolio/Quizify/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-live">
                    Live Demo
                  </a>

                  <a href="https://github.com/my-negar/negar-portfolio/tree/main/Quizify"
                    target="_blank"
                    rel="noreferrer"
                    className="project-github">
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
                <h4 className="project-tech">
                  HTML • CSS • JavaScript
                </h4>

                <h3>Calculator</h3>

                <p>
                  ماشین حساب تعاملی ساخته شده با JavaScript برای
                  تمرین منطق برنامه‌نویسی.
                </p>

                <div className="project-links">
                  <a href="https://my-negar.github.io/negar-portfolio/calculator-new/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-live">
                    Live Demo
                  </a>

                  <a href="https://github.com/my-negar/negar-portfolio/tree/main/calculator-new"
                    target="_blank"
                    rel="noreferrer"
                    className="project-github">
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
                <h4 className="project-tech">
                  HTML • CSS
                </h4>

                <h3>Login Page</h3>

                <p>
                  یک صفحه ورود ساده و ریسپانسیو با تمرکز روی
                  طراحی تمیز و تجربه کاربری.
                </p>

                <div className="project-links">
                  <a href="https://my-negar.github.io/negar-portfolio/login/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-live">
                    Live Demo
                  </a>

                  <a href="https://github.com/my-negar/negar-portfolio/tree/main/login"
                    target="_blank"
                    rel="noreferrer"
                    className="project-github">
                    GitHub
                  </a>
                </div>
              </div>
            </article>


          </div>
        </section>


        {/*  RESUME  */}
        <section className="resume" id="resume">
          <div className="section-heading">
            <h4 className="section-label">MY RESUME</h4>
            <h2 className="h2">My Journey</h2>
          </div>

          <div className="resume-container">

            <div className="resume-item">
              <span>01</span>

              <div>
                <h3>Front-End Development</h3>

                <p>
                  ساخت و یادگیری پروژه‌های مختلف با استفاده از HTML, CSS, JavaScript, React برای تقویت مهارت‌های فرانت‌اند
                </p>
              </div>
            </div>


            <div className="resume-item">
              <span>02</span>

              <div>
                <h3>Hands-on Projects</h3>

                <p> ساخت پروژه‌هایی مانند: Weather Dashboard،Todo List، Quiz، Calculator و Login Page, Dark/light mood
                </p>
              </div>
            </div>


            <div className="resume-item">
              <span>03</span>

              <div>
                <h3>Continuous Learning</h3>

                <p>
                  به‌صورت مستمر در حال تقویت مهارت‌هایم در JavaScript، React، TypeScript و توسعه مدرن Front-End هستم.

                </p>
              </div>
            </div>

          </div>

          <div className="resume-button">
            <a href="https://my-negar.github.io/negar-portfolio/resume/"
              target="_blank"
              rel="noreferrer"
              className="primary-button">
              Download Resume
            </a>
          </div>
        </section>


        {/*  CONTACT  */}
        <section className="contact" id="contact">
          <div className="section-heading">
            <p className="section-label">GET IN TOUCH</p>

            <h2 className="h2">Let's Connect</h2>

            <p>
              برای فرصت‌های کاری، کارآموزی یا همکاری می‌توانید
              از طریق راه‌های ارتباطی زیر با من در تماس باشید
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
                <p>rasolinejadnegar@gmail.com</p>
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
              href="https://www.linkedin.com/in/negar-rasoulinezhad-84709a3a5?utm_source=share_via&utm_content=profile&utm_medium=member_android"
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


      {/*  FOOTER  */}
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