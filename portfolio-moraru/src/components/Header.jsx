import { useEffect, useState } from "react";
import { LANGUAGE_OPTIONS } from "../data/translations.js";

export default function Header({ language, onLanguageChange, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const currentLanguage =
    LANGUAGE_OPTIONS.find((option) => option.code === language) ||
    LANGUAGE_OPTIONS[0];

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

  useEffect(() => {
    const closeLanguageMenu = (event) => {
      if (!event.target.closest(".lang-menu")) {
        setIsLangMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsLangMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeLanguageMenu);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", closeLanguageMenu);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleLanguageSelect = (nextLanguage) => {
    onLanguageChange(nextLanguage);
    setIsLangMenuOpen(false);
  };

  const renderLanguageMenu = (wrapperClassName) => (
    <div className={`lang-menu ${wrapperClassName}`}>
      <button
        type="button"
        className={`lang-menu-toggle ${isLangMenuOpen ? "open" : ""}`}
        onClick={() => setIsLangMenuOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={isLangMenuOpen}
        aria-label={text.languageSwitcherAriaLabel}
        title={currentLanguage.label}
      >
        <span className="lang-menu-flag" aria-hidden="true">
          {currentLanguage.flag}
        </span>
        <span className="lang-menu-code">{currentLanguage.short}</span>
        <i className="fa-solid fa-chevron-down lang-menu-caret" aria-hidden="true"></i>
      </button>

      {isLangMenuOpen && (
        <div className="lang-menu-list" role="menu" aria-label={text.languageSwitcherAriaLabel}>
          {LANGUAGE_OPTIONS.map((option) => (
            <button
              key={option.code}
              type="button"
              role="menuitemradio"
              aria-checked={language === option.code}
              className={`lang-menu-item ${language === option.code ? "active" : ""}`}
              onClick={() => handleLanguageSelect(option.code)}
            >
              <span className="lang-menu-flag" aria-hidden="true">
                {option.flag}
              </span>
              <span className="lang-menu-name">{option.label}</span>
              {language === option.code && (
                <i className="fa-solid fa-check lang-menu-check" aria-hidden="true"></i>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );

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
            <span className="nav-brand-sub">{text.brandRole}</span>
          </span>
        </a>

        {renderLanguageMenu("lang-switch-desktop")}

        <button
          className={`navbar-toggler border-0 nav-toggle ${isOpen ? "open" : ""}`}
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label={text.toggleNavigationLabel}
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </button>

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
                {text.nav.about}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-pill ${active === "projects" ? "active" : ""}`}
                href="#projects"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-solid fa-layer-group"></i>
                {text.nav.projects}
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link nav-pill ${active === "contact" ? "active" : ""}`}
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                <i className="fa-regular fa-envelope"></i>
                {text.nav.contact}
              </a>
            </li>
            <li className="nav-item nav-lang-item">
              <span className="nav-lang-label">{text.languageLabel}</span>
              {renderLanguageMenu("lang-switch-mobile")}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
