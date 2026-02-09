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
  const [pathRef, pathVisible] = useReveal();

  const changeTab = (next) => {
    if (next === showcaseTab) return;
    setTabAnim(false);
    setShowcaseTab(next);
    requestAnimationFrame(() => setTabAnim(true));
  };

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
                  href={`${BASE}Moraru-Stefan-cv.pdf`}
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
        </div>
      </section>

      {/* MY PATH */}
      <section id="path" className="py-5">
        <div
          ref={pathRef}
          className={`container reveal ${pathVisible ? "is-visible" : ""}`}
        >
          <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-4">
            <div>
              <h2 className="h3 fw-bold mb-1">Il mio percorso</h2>
              <p className="text-muted mb-0">
                Formazione ed esperienza: il mio percorso fino allo sviluppo
                web.
              </p>
            </div>
          </div>

          <div className="path-timeline">
            {/* 2015 - 2020 */}
            <article className="path-item">
              <div className="path-dot" aria-hidden="true"></div>
              <div className="path-card">
                <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                  <span className="badge text-bg-light border">
                    2015 • 2020
                  </span>
                  <span className="text-muted small">Lecco, Lombardia</span>
                </div>

                <h3 className="h5 mb-1">
                  Istituto Superiore Statale “P.A. Fiocchi”
                </h3>
                <p className="text-muted mb-2">
                  Diploma Istituto Tecnico e Professionale
                </p>

                <ul className="path-list">
                  <li>Diploma conseguito</li>
                  <li>Base tecnica e metodo di studio</li>
                </ul>
              </div>
            </article>

            {/* 2021 - 2025 */}
            <article className="path-item">
              <div className="path-dot" aria-hidden="true"></div>
              <div className="path-card">
                <div className="d-flex flex-wrap justify-content-between gap-2 mb-2">
                  <span className="badge text-bg-light border">
                    2021 • 2025
                  </span>
                  <span className="text-muted small">
                    Minuterie3M • Full-time • In sede
                  </span>
                </div>

                <h3 className="h5 mb-1">
                  Tecnico di Produzione / Tecnico Operativo
                </h3>
                <p className="text-muted mb-3">
                  Durante tre anni e mezzo nel settore metalmeccanico ho gestito
                  attività operative e di manutenzione, usando terminali e
                  software gestionali di reparto, lavorando in team e
                  contribuendo agli obiettivi produttivi.
                </p>

                <h4 className="h6 text-uppercase text-muted mb-2">
                  Competenze sviluppate
                </h4>
                <ul className="path-list">
                  <li>Lavoro in team e collaborazione</li>
                  <li>Gestione scadenze e rispetto tempi di consegna</li>
                  <li>Problem solving operativo e attenzione alla qualità</li>
                  <li>Adattabilità e lavoro sotto pressione</li>
                </ul>

                <div className="d-flex flex-wrap gap-2 mt-3">
                  {[
                    "Teamwork",
                    "Gestione del tempo",
                    "Problem solving",
                    "Attenzione ai dettagli",
                    "Adattabilità",
                  ].map((s) => (
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
                    2025 • 2026
                  </span>
                  <span className="text-muted small">Boolean</span>
                </div>

                <h3 className="h5 mb-1">Corso Full-Stack Web Developer</h3>
                <p className="text-muted mb-2">
                  Percorso intensivo completato nel 2026, orientato a progetti
                  pratici.
                </p>

                <ul className="path-list">
                  <li>Front-end: HTML, CSS, JavaScript, React</li>
                  <li>Back-end: Node.js, Express, MySQL</li>
                  <li>Progetti reali + lavoro in team</li>
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
          <div className="d-flex flex-wrap align-items-end justify-content-between gap-2 mb-4">
            <div>
              <h2 className="h3 fw-bold mb-1">I miei lavori</h2>
              <p className="text-muted mb-0">
                Progetti, certificati e tech stack.
              </p>
            </div>

            {/* Tabs */}
            <div className="showcase-tabs d-flex flex-wrap gap-2">
              <button
                type="button"
                className={`btn btn-sm ${
                  showcaseTab === "projects"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => changeTab("projects")}
              >
                Progetti
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
                Certificati
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
                Tecnologie
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
                          e.currentTarget.style.setProperty(
                            "--mx",
                            `${e.clientX - r.left}px`,
                          );
                          e.currentTarget.style.setProperty(
                            "--my",
                            `${e.clientY - r.top}px`,
                          );
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
                              <span
                                key={t}
                                className="badge text-bg-light border"
                              >
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
                      <div className="cert-card2 rounded-4 border shadow-sm h-100 overflow-hidden">
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
          <div className="row g-4 align-items-stretch">
            {/* testo + link */}
            <div className="col-12 col-lg-5">
              <h2 className="h3 fw-bold mb-3">Contatti</h2>
              <p className="text-muted mb-4">
                Vuoi collaborare o hai domande? Compila il form oppure scrivimi
                via email.
              </p>

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
                    const fullSubject = `[Portfolio] ${subject || "Nuovo messaggio"}`;
                    const body =
                      `Nome: ${name}\n` +
                      `Email: ${email}\n\n` +
                      `Messaggio:\n${message}\n`;

                    const mailto = `mailto:${to}?subject=${encodeURIComponent(
                      fullSubject,
                    )}&body=${encodeURIComponent(body)}`;

                    window.location.href = mailto;
                    e.currentTarget.reset();
                  }}
                >
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label">Nome</label>
                      <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Il tuo nome"
                        required
                      />
                    </div>

                    <div className="col-12 col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="nome@email.com"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Oggetto</label>
                      <input
                        className="form-control"
                        name="subject"
                        type="text"
                        placeholder="Es. Collaborazione / Info"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Messaggio</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Scrivimi qui..."
                        required
                      />
                    </div>

                    <div className="col-12 d-flex flex-wrap gap-2 align-items-center">
                      <button className="btn btn-primary" type="submit">
                        <i className="fa-solid fa-paper-plane me-2"></i>Invia
                      </button>
                      <span className="contact-hint text-muted small">
                        *Dopo l'invio si aprirà la tua email per confermare e
                        spedire il messaggio.
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
