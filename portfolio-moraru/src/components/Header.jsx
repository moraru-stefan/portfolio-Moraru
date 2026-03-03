import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const [active, setActive] = useState("home");

 useEffect(() => {
  const ids = ["home", "about", "projects", "contact"];

  const handler = () => {
    const y = window.scrollY + 120;

    let current = "home";

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) current = id;
    }

    setActive(current);
  };

  handler();
  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
}, []);


  return (
    <nav className="navbar navbar-expand-lg sticky-top main-nav">
      <div className="container nav-shell">
        <a
          className="nav-brand"
          href="#home"
          onClick={() => setIsOpen(false)}
        >
          <span className="nav-brand-mark" aria-hidden="true">
            <i className="fa-solid fa-code"></i>
          </span>
          <span className="nav-brand-text">
            <span className="nav-brand-title">Moraru Stefan</span>
            <span className="nav-brand-sub">Full-Stack Developer</span>
          </span>
        </a>

        {/* Bottone hamburger */}
        <button
          className={`navbar-toggler border-0 nav-toggle ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

        {/* Menu di navigazione */}
        <div
          className={`collapse navbar-collapse nav-collapse ${isOpen ? "show" : ""}`}
          id="nav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu">
            <li className="nav-item">
              <a
                className={`nav-link nav-pill ${active === "about" ? "active" : ""}`}
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-regular fa-user"></i>
                Chi sono
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-pill ${active === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-layer-group"></i>
                Progetti
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-pill ${active === "contact" ? "active" : ""}`}
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-regular fa-envelope"></i>
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
