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

    // se siamo a fine pagina, attiva contatti
    const bottom =
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 2;

    if (bottom) {
      setActive("contact");
      return;
    }

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
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a
          className={`nav-link ${active === "home" ? "active" : ""}`}
          href="#home"
          onClick={() => setIsOpen(false)}
        >
          <i className="fa-solid fa-code me-2"></i>
          Moraru Stefan
        </a>

        {/* Bottone hamburger */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark fs-3"></i>
          ) : (
            <i className="fa-solid fa-bars fs-3"></i>
          )}
        </button>

        {/* Menu di navigazione */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="nav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-semibold">
            <li className="nav-item">
              <a
                className={`nav-link ${active === "about" ? "active" : ""}`}
                href="#about"
                onClick={() => setIsOpen(false)}
              >
                Chi sono
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={() => setIsOpen(false)}
              >
                Progetti
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${active === "contact" ? "active" : ""}`}
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contatti
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
