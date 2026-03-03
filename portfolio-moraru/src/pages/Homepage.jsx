import { getProjectsData } from "../data/projects";
import useReveal from "../hooks/useReveal";
import { useEffect, useRef, useState } from "react";

const BASE = import.meta.env.BASE_URL;

export default function Homepage({ language, text }) {
  const projectsData = getProjectsData(language);
  const heroGreeting = text.heroGreeting;
  const greetingPrefix = text.greetingPrefix;
  const about = text.about;
  const path = text.path;
  const showcase = text.showcase;
  const certificatesText = text.certificates;
  const contact = text.contact;
  const [heroRef, heroVisible] = useReveal();
  const [aboutRef, aboutVisible] = useReveal();
  const [projectsRef, projectsVisible] = useReveal();
  const [contactRef, contactVisible] = useReveal();
  const [showcaseTab, setShowcaseTab] = useState("projects");
  const [tabAnim, setTabAnim] = useState(true);
  const [pathRef, pathVisible] = useReveal();
  const [typedHeroText, setTypedHeroText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const hasStartedTyping = useRef(false);
  const lastGreetingRef = useRef(heroGreeting);
  const techStackCount = new Set(projectsData.flatMap((p) => p.tech)).size;
  const featuredProject =
    projectsData.find((p) => p.tech.some((t) => /react/i.test(t))) ||
    projectsData[0];
  const secondaryProjects = projectsData.filter(
    (p) => p.title !== featuredProject?.title,
  );

  useEffect(() => {
    if (lastGreetingRef.current !== heroGreeting) {
      hasStartedTyping.current = false;
      lastGreetingRef.current = heroGreeting;
    }
  }, [heroGreeting]);

  const changeTab = (next) => {
    if (next === showcaseTab) return;
    setTabAnim(false);
    setShowcaseTab(next);
    requestAnimationFrame(() => setTabAnim(true));
  };

  const setCardGlow = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  useEffect(() => {
    if (!heroVisible || hasStartedTyping.current) return;
    hasStartedTyping.current = true;
    setTypedHeroText("");
    setTypingDone(false);
    setShowWave(false);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedHeroText(heroGreeting);
      setTypingDone(true);
      setShowWave(true);
      return;
    }

    let charIndex = 0;
    let typingTimeoutId = 0;

    const getTypingDelay = (nextChar) => {
      if (nextChar === ",") return 190 + Math.random() * 90;
      if (nextChar === " ") return 80 + Math.random() * 40;
      return 42 + Math.random() * 82;
    };

    const typeNextChar = () => {
      charIndex += 1;
      setTypedHeroText(heroGreeting.slice(0, charIndex));

      if (charIndex >= heroGreeting.length) {
        setTypingDone(true);
        setShowWave(true);
        return;
      }

      const nextChar = heroGreeting.charAt(charIndex);
      typingTimeoutId = window.setTimeout(typeNextChar, getTypingDelay(nextChar));
    };

    const typingStartTimeoutId = window.setTimeout(() => {
      typeNextChar();
    }, 250);

    return () => {
      window.clearTimeout(typingStartTimeoutId);
      if (typingTimeoutId) window.clearTimeout(typingTimeoutId);
    };
  }, [heroGreeting, heroVisible]);

  const typedGreeting = typedHeroText.slice(0, greetingPrefix.length);
  const typedName = typedHeroText.slice(greetingPrefix.length);

  return (
    <>
      {/* HERO */}
      <header id="home" className="py-5 section-surface">
        <div
          ref={heroRef}
          className={`container py-4 reveal ${heroVisible ? "is-visible" : ""}`}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <p className="text-uppercase text-muted small mb-2">
                {text.role}
              </p>
              <h1
                className="display-5 fw-bold mb-3 hero-typing-title"
                aria-label={heroGreeting}
              >
                {typedGreeting}
                <span className={typedName ? "text-primary" : ""}>
                  {typedName}
                  {showWave && typedName && (
                    <span className="wave-emoji" aria-hidden="true">
                      {" "}
                      👋
                    </span>
                  )}
                </span>
                {!typingDone && (
                  <span className="typing-cursor" aria-hidden="true">
                    |
                  </span>
                )}
              </h1>
              <p className="lead text-muted">
                {text.heroLead}
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="#projects" className="btn btn-primary">
                  <i className="fa-solid fa-folder-open me-2"></i>
                  {text.ctaProjects}
                </a>
                <a
                  href={`${BASE}Moraru-Stefan-cv.pdf`}
                  className="btn btn-outline-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-file-arrow-down me-2"></i>
                  {text.ctaDownloadCv}
                </a>
              </div>
            </div>
            <div className="img-col col-12 col-lg-5 text-center">
              <div className="hero-photo-3d">
                <span className="hero-orbit" aria-hidden="true">
                  <span className="hero-planet"></span>
                </span>
                <img
                  className="stefan-img img-fluid"
                  src={`${BASE}cv-image.png`}
                  alt={text.portraitAlt}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ABOUT */}
      <section id="about" className="py-5">
        <div
          ref={aboutRef}
          className={`container reveal ${aboutVisible ? "is-visible" : ""}`}
        >
          <div className="about-3d-shell">
            <article className="about-3d-card">
              <div className="about-3d-content">
                <p className="about-kicker text-uppercase mb-2">{about.kicker}</p>
                <h2 className="h3 fw-bold mb-3">{about.title}</h2>
                <p className="text-muted mb-3">{about.description}</p>

                <div className="about-tech">
                  {about.tech.map((tech) => (
                    <span key={tech} className="about-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MY PATH */}
      <section id="path" className="py-5">
        <div
          ref={pathRef}
          className={`container reveal ${pathVisible ? "is-visible" : ""}`}
        >
          <div className="d-flex flex-column align-items-center text-center gap-2 mb-4">
            <div>
              <h2 className="h3 fw-bold mb-1">{path.title}</h2>
              <p className="text-muted mb-0">{path.subtitle}</p>
            </div>
          </div>

          <div className="path-timeline">
            {/* 2015 - 2020 */}
            <article className="path-item">
              <div className="path-dot" aria-hidden="true"></div>
              <div className="path-card">
                <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                  <span className="badge text-bg-light border">
                    {path.school.period}
                  </span>
                  <span className="text-muted small">{path.school.meta}</span>
                </div>

                <h3 className="h5 mb-1">{path.school.title}</h3>
                <p className="text-muted mb-2">{path.school.description}</p>

                <ul className="path-list">
                  {path.school.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>

            {/* 2021 - 2025 */}
            <article className="path-item">
              <div className="path-dot" aria-hidden="true"></div>
              <div className="path-card">
                <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                  <span className="badge text-bg-light border">
                    {path.work.period}
                  </span>
                  <span className="text-muted small">{path.work.meta}</span>
                </div>

                <h3 className="h5 mb-1">{path.work.title}</h3>
                <p className="text-muted mb-3">{path.work.description}</p>

                <h4 className="h6 text-uppercase text-muted mb-2">
                  {path.work.listTitle}
                </h4>
                <ul className="path-list">
                  {path.work.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {path.work.tags.map((s) => (
                    <span
                      key={s}
                      className="badge rounded-pill text-bg-light border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* 2025 - 2026 */}
            <article className="path-item">
              <div className="path-dot" aria-hidden="true"></div>
              <div className="path-card">
                <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                  <span className="badge text-bg-light border">
                    {path.booleanCourse.period}
                  </span>
                  <span className="text-muted small">{path.booleanCourse.meta}</span>
                </div>

                <h3 className="h5 mb-1">{path.booleanCourse.title}</h3>
                <p className="text-muted mb-2">{path.booleanCourse.description}</p>

                <ul className="path-list">
                  {path.booleanCourse.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="projects" className="py-5 border-top border-bottom section-surface">
        <div
          ref={projectsRef}
          className={`container reveal ${projectsVisible ? "is-visible" : ""}`}
        >
          <div className="d-flex flex-column align-items-center text-center gap-3 mb-4">
            <div>
              <h2 className="h3 fw-bold mb-1">{showcase.title}</h2>
              <p className="text-muted mb-0">{showcase.subtitle}</p>
              <div className="showcase-kpis mt-3 justify-content-center">
                <span className="showcase-kpi">
                  <strong>{projectsData.length}</strong>
                  {showcase.liveProjects}
                </span>
                <span className="showcase-kpi">
                  <strong>{techStackCount}</strong>
                  {showcase.technologies}
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="showcase-tabs d-flex flex-wrap gap-2 justify-content-center">
              <button
                type="button"
                className={`btn btn-sm ${
                  showcaseTab === "projects"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => changeTab("projects")}
              >
                {showcase.tabs.projects}
              </button>

              <button
                type="button"
                className={`btn btn-sm ${
                  showcaseTab === "certificates"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => changeTab("certificates")}
              >
                {showcase.tabs.certificates}
              </button>

              <button
                type="button"
                className={`btn btn-sm ${
                  showcaseTab === "stack"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => changeTab("stack")}
              >
                {showcase.tabs.stack}
              </button>
            </div>
          </div>

          {/* CONTENUTO TAB */}
          <div className="showcase-panel">
            {/* TAB: PROJECTS */}
            {showcaseTab === "projects" && (
              <div className={`reveal ${tabAnim ? "is-visible" : ""}`}>
                <div className="projects-layout">
                  {featuredProject && (
                    <article
                      className="project-card project-feature"
                      onMouseMove={setCardGlow}
                    >
                      <div className="project-feature-media-wrap">
                        <img
                          src={featuredProject.image}
                          className="project-thumb project-feature-media"
                          alt={`Screenshot - ${featuredProject.title}`}
                        />
                        <span className="project-feature-badge">{showcase.featured}</span>
                      </div>

                      <div className="project-feature-body">
                        <h3 className="h4 fw-bold mb-2">{featuredProject.title}</h3>
                        <p className="text-muted mb-3">
                          {featuredProject.description}
                        </p>

                        <div className="project-tags mb-4">
                          {featuredProject.tech.map((t) => (
                            <span key={t} className="project-tag">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="project-actions">
                          <a
                            href={featuredProject.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                            {showcase.liveDemo}
                          </a>
                          <a
                            href={featuredProject.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa-brands fa-github me-2"></i>
                            {showcase.code}
                          </a>
                        </div>
                      </div>
                    </article>
                  )}

                  <div className="projects-side-grid">
                    {secondaryProjects.map((p) => (
                      <article
                        key={p.title}
                        className="project-card project-mini"
                        onMouseMove={setCardGlow}
                      >
                        <img
                          src={p.image}
                          className="project-thumb project-mini-thumb"
                          alt={`Screenshot - ${p.title}`}
                        />
                        <div className="project-mini-body">
                          <h3 className="h5 card-title mb-2">{p.title}</h3>
                          <p className="text-muted small mb-3 project-mini-desc">
                            {p.description}
                          </p>

                          <div className="project-tags project-tags-mini mb-3">
                            {p.tech.slice(0, 4).map((t) => (
                              <span key={t} className="project-tag">
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="d-flex gap-2">
                            <a
                              href={p.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-primary btn-sm w-50"
                            >
                              {showcase.demo}
                            </a>
                            <a
                              href={p.codeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-outline-primary btn-sm w-50"
                            >
                              {showcase.code}
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: CERTIFICATES */}
            {showcaseTab === "certificates" && (
              <div className={`reveal ${tabAnim ? "is-visible" : ""}`}>
                <div className="row g-4">
                  {[
                    {
                      title: "Boolean • Full-Stack Web Developer",
                      year: "2026",
                      img: `${BASE}Boolean-img.png`,
                      file: `${BASE}Certificato-Boolean.pdf`,
                    },
                    // {
                    //   title: "Udemy • HTML e CSS",
                    //   year: "2024",
                    //   img: `${BASE}certificates/js-cert.jpg`,
                    //   file: `${BASE}certificates/js-cert.pdf`,
                    // },
                  ].map((c) => (
                    <div className="col-12 col-md-6 col-lg-4" key={c.title}>
                      <div className="cert-card2 rounded-4 border shadow-sm h-100 overflow-hidden">
                        {/* immagine certificato */}
                        <a
                          href={c.file}
                          target={c.file !== "#" ? "_blank" : undefined}
                          rel={c.file !== "#" ? "noreferrer" : undefined}
                          onClick={(e) => c.file === "#" && e.preventDefault()}
                          className="cert-media"
                          aria-label={`${certificatesText.openLabel} ${c.title}`}
                          title={`${certificatesText.openLabel} ${c.title}`}
                        >
                          <img src={c.img} alt={`${certificatesText.imageAlt}: ${c.title}`} />
                        </a>

                        {/* testo */}
                        <div className="p-4">
                          <div className="d-flex justify-content-between align-items-start gap-2">
                            <h3 className="h6 fw-bold mb-1">{c.title}</h3>
                            <span className="badge text-bg-light border">
                              {c.year}
                            </span>
                          </div>

                          <div className="d-flex gap-2 mt-3">
                            <a
                              className="btn btn-primary btn-sm"
                              href={c.file}
                              target={c.file !== "#" ? "_blank" : undefined}
                              rel={c.file !== "#" ? "noreferrer" : undefined}
                              onClick={(e) =>
                                c.file === "#" && e.preventDefault()
                              }
                            >
                              {certificatesText.openPdf}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: TECH STACK  */}
            {showcaseTab === "stack" && (
              <div className={`reveal ${tabAnim ? "is-visible" : ""}`}>
                <div className="stack-grid">
                  {[
                    { alt: "HTML5", src: `${BASE}HTML5.png` },
                    { alt: "CSS3", src: `${BASE}CSS3.png` },
                    { alt: "JavaScript", src: `${BASE}Javascript.webp` },
                    { alt: "React", src: `${BASE}react.png` },
                    { alt: "Bootstrap", src: `${BASE}Bootstrap.png` },
                    { alt: "Tailwind", src: `${BASE}tailwindcss.png` },
                    { alt: "Node.js", src: `${BASE}Node-js.png` },
                    { alt: "Express", src: `${BASE}express-log.png` },
                    { alt: "MySQL", src: `${BASE}mySQL.png` },
                    { alt: "Git", src: `${BASE}git.png` },
                  ].map((t) => (
                    <div className="stack-item" key={t.alt} title={t.alt}>
                      <img src={t.src} alt={t.alt} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* CONTACTS */}
      <section id="contact" className="py-5">
        <div
          ref={contactRef}
          className={`container reveal ${contactVisible ? "is-visible" : ""}`}
        >
          <div className="row g-4 align-items-stretch">
            {/* testo + link */}
            <div className="col-12 col-lg-5">
              <h2 className="h3 fw-bold mb-3">{contact.title}</h2>
              <p className="text-muted mb-4">{contact.lead}</p>

              <div className="d-flex flex-wrap gap-3">
                <a
                  className="btn btn-outline-light"
                  href="mailto:moraru495@gmail.com"
                >
                  <i className="fa-solid fa-envelope me-2"></i>Email
                </a>
                <a
                  className="btn btn-outline-light"
                  href="https://www.linkedin.com/in/stefan-moraru-6230641b8/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin me-2"></i>LinkedIn
                </a>
                <a
                  className="btn btn-outline-light"
                 href="https://github.com/moraru-stefan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github me-2"></i>GitHub
                </a>
              </div>
            </div>

            {/* form */}
            <div className="col-12 col-lg-7">
              <div className="contact-card p-4 p-md-5 rounded-4 border shadow-sm h-100">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();

                    const fd = new FormData(e.currentTarget);
                    const name = fd.get("name")?.toString().trim();
                    const email = fd.get("email")?.toString().trim();
                    const subject = fd.get("subject")?.toString().trim();
                    const message = fd.get("message")?.toString().trim();

                    const to = "moraru495@gmail.com";
                    const fullSubject = `[Portfolio] ${subject || contact.form.defaultSubject}`;
                    const body =
                      `${contact.form.mailName}: ${name}\n` +
                      `${contact.form.mailEmail}: ${email}\n\n` +
                      `${contact.form.mailMessage}:\n${message}\n`;

                    const mailto = `mailto:${to}?subject=${encodeURIComponent(
                      fullSubject,
                    )}&body=${encodeURIComponent(body)}`;

                    window.location.href = mailto;
                    e.currentTarget.reset();
                  }}
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label">{contact.form.name}</label>
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder={contact.form.namePlaceholder}
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label">{contact.form.email}</label>
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder={contact.form.emailPlaceholder}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">{contact.form.subject}</label>
                      <input
                        className="form-control"
                        name="subject"
                        type="text"
                        placeholder={contact.form.subjectPlaceholder}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">{contact.form.message}</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder={contact.form.messagePlaceholder}
                        required
                      />
                    </div>

                    <div className="col-12 d-flex flex-wrap gap-2 align-items-center">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa-solid fa-paper-plane me-2"></i>
                        {contact.send}
                      </button>
                      <span className="contact-hint text-muted small">
                        {contact.hint}
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
