import projectsData from "../data/projects";
import useReveal from "../hooks/useReveal";
import { useState } from "react";

const BASE = import.meta.env.BASE_URL;

export default function Homepage() {
  const [heroRef, heroVisible] = useReveal();
  const [aboutRef, aboutVisible] = useReveal();
  const [projectsRef, projectsVisible] = useReveal();
  const [contactRef, contactVisible] = useReveal();
  const [showcaseTab, setShowcaseTab] = useState("projects"); 
  const [tabAnim, setTabAnim] = useState(true);

  const changeTab = (next) => {
    if (next === showcaseTab) return;
    setTabAnim(false);
    setShowcaseTab(next);
    requestAnimationFrame(() => setTabAnim(true));
  };

  return (
    <>
      {/* HERO */}
      <header id="home" className="py-5 bg-light">
        <div
          ref={heroRef}
          className={`container py-4 reveal ${heroVisible ? "is-visible" : ""}`}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <p className="text-uppercase text-muted small mb-2">
                Junior Full‑Stack Web Developer
              </p>
              <h1 className="display-5 fw-bold mb-3">
                Ciao, sono{" "}
                <span className="text-primary">Moraru Stefan</span>{" "}
              </h1>
              <p className="lead text-muted">
                Creo interfacce web moderne, responsive e intuitive, con grande
                attenzione all’esperienza utente.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="#projects" className="btn btn-primary">
                  <i className="fa-solid fa-folder-open me-2"></i>
                  Guarda i progetti
                </a>
                <a
                  href={`${BASE}CV-Stefan-Moraru.pdf`}
                  className="btn btn-outline-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-file-arrow-down me-2"></i>
                  Scarica CV
                </a>
              </div>
            </div>
            <div className="img-col col-12 col-lg-5 text-center">
              <img
                className="stefan-img img-fluid rounded-4 shadow-sm"
                src={`${BASE}cv-image.png`}
                alt="Ritratto del developer"
              />
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
          <h2 className="h3 fw-bold mb-3">Chi sono</h2>
          <p className="text-muted">
            Sono uno sviluppatore web junior con competenze full‑stack e un
            forte orientamento al front-end. Ho completato un corso intensivo di
            oltre 600 ore come Full‑Stack Web Developer con Boolean, durante il
            quale ho realizzato diversi progetti concreti. Lavoro con React,
            HTML, CSS e JavaScript per il front-end, e Node.js, Express e MySQL
            per il back-end.
          </p>
          <div className="mt-4">
            <h3 className="h6 text-uppercase text-muted mb-3">Competenze</h3>
            <div className="d-flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Bootstrap",
                "Tailwind",
                "Node.js",
                "Express",
                "React",
                "MySQL",
                "Git/GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="badge rounded-pill text-bg-light border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
<section id="projects" className="py-5 bg-light border-top border-bottom">
  <div
    ref={projectsRef}
    className={`container reveal ${projectsVisible ? "is-visible" : ""}`}
  >
    <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-4">
      <div>
        <h2 className="h3 fw-bold mb-1">Portfolio Showcase</h2>
        <p className="text-muted mb-0">
          Progetti, certificati e tech stack.
        </p>
      </div>

      {/* Tabs */}
      <div className="showcase-tabs d-flex flex-wrap gap-2">
        <button
          type="button"
          className={`btn btn-sm ${
            showcaseTab === "projects" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => changeTab("projects")}
        >
          Projects
        </button>

        <button
          type="button"
          className={`btn btn-sm ${
            showcaseTab === "certificates" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => changeTab("certificates")}
        >
          Certificates
        </button>

        <button
          type="button"
          className={`btn btn-sm ${
            showcaseTab === "stack" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => changeTab("stack")}
        >
          Tech Stack
        </button>
      </div>
    </div>

    {/* CONTENUTO TAB */}
    <div className="showcase-panel">
      {/* TAB: PROJECTS */}
      {showcaseTab === "projects" && (
        <div className={`reveal ${tabAnim ? "is-visible" : ""}`}>
          <div className="row g-4">
            {projectsData.map((p, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4">
                <div
                  className="card h-100 border-0 project-card"
                  onMouseMove={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                >
                  <img
                    src={p.image}
                    className="card-img-top project-thumb"
                    alt={`Screenshot ${p.title}`}
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="h5 card-title">{p.title}</h3>
                    <p className="card-text text-muted small flex-grow-1">
                      {p.description}
                    </p>

                    <div className="mb-3 d-flex flex-wrap gap-1">
                      {p.tech.map((t) => (
                        <span key={t} className="badge text-bg-light border">
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
                        <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                        Demo
                      </a>
                      <a
                        href={p.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary btn-sm w-50"
                      >
                        <i className="fa-brands fa-github me-2"></i>
                        Codice
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="cert-card2 rounded-4 border bg-white shadow-sm h-100 overflow-hidden">
            {/* immagine certificato */}
            <a
              href={c.file}
              target={c.file !== "#" ? "_blank" : undefined}
              rel={c.file !== "#" ? "noreferrer" : undefined}
              onClick={(e) => c.file === "#" && e.preventDefault()}
              className="cert-media"
              aria-label={`Apri ${c.title}`}
              title={`Apri ${c.title}`}
            >
              <img src={c.img} alt={`Certificato: ${c.title}`} />
            </a>

            {/* testo */}
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-start gap-2">
                <h3 className="h6 fw-bold mb-1">{c.title}</h3>
                <span className="badge text-bg-light border">{c.year}</span>
              </div>

              <div className="d-flex gap-2 mt-3">
                <a
                  className="btn btn-primary btn-sm"
                  href={c.file}
                  target={c.file !== "#" ? "_blank" : undefined}
                  rel={c.file !== "#" ? "noreferrer" : undefined}
                  onClick={(e) => c.file === "#" && e.preventDefault()}
                >
                  Apri PDF
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
              { alt: "Express", src: `${BASE}Express.png` },
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
          <h2 className="h3 fw-bold mb-3">Contatti</h2>
          <p className="mb-4">Vuoi collaborare o hai domande? Scrivimi pure.</p>
          <div className="d-flex flex-wrap gap-3">
            <a
              className="btn btn-outline-dark"
              href="mailto:moraru495@gmail.com"
            >
              <i className="fa-solid fa-envelope me-2"></i>Email
            </a>
            <a
              className="btn btn-outline-dark"
              href="https://www.linkedin.com/in/stefan-moraru-6230641b8/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin me-2"></i>LinkedIn
            </a>
            <a
              className="btn btn-outline-dark"
              href="https://github.com/Steopa2001"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github me-2"></i>GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
