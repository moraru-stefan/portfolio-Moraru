import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useEffect, useState } from "react";
import { SITE_TEXT } from "./data/translations.js";


export default function App() {
  const year = new Date().getFullYear();
  const [language, setLanguage] = useState("it");
  const text = SITE_TEXT[language] || SITE_TEXT.it;

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    if (savedLanguage && SITE_TEXT[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    const root = document.documentElement;
    let rafId = 0;
    let currentProgress = 0;
    let targetProgress = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const readProgress = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      return Math.min(window.scrollY / maxScroll, 1);
    };

    const render = () => {
      currentProgress += (targetProgress - currentProgress) * 0.085;
      currentMouseX += (targetMouseX - currentMouseX) * 0.11;
      currentMouseY += (targetMouseY - currentMouseY) * 0.11;

      if (Math.abs(targetProgress - currentProgress) < 0.00035) {
        currentProgress = targetProgress;
      }
      if (Math.abs(targetMouseX - currentMouseX) < 0.00035) {
        currentMouseX = targetMouseX;
      }
      if (Math.abs(targetMouseY - currentMouseY) < 0.00035) {
        currentMouseY = targetMouseY;
      }

      const intensity = 1 - (1 - currentProgress) ** 1.7;
      root.style.setProperty("--scroll-progress", currentProgress.toFixed(4));
      root.style.setProperty("--fx-intensity", intensity.toFixed(4));
      root.style.setProperty("--mouse-x", currentMouseX.toFixed(4));
      root.style.setProperty("--mouse-y", currentMouseY.toFixed(4));

      if (
        currentProgress !== targetProgress ||
        currentMouseX !== targetMouseX ||
        currentMouseY !== targetMouseY
      ) {
        rafId = window.requestAnimationFrame(render);
      } else {
        rafId = 0;
      }
    };

    const requestRender = () => {
      targetProgress = readProgress();
      if (!rafId) rafId = window.requestAnimationFrame(render);
    };

    const updateMouseTarget = (clientX, clientY) => {
      const nx = clientX / window.innerWidth - 0.5;
      const ny = clientY / window.innerHeight - 0.5;
      targetMouseX = Math.max(-0.5, Math.min(0.5, nx));
      targetMouseY = Math.max(-0.5, Math.min(0.5, ny));
      requestRender();
    };

    requestRender();
    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      root.style.removeProperty("--scroll-progress");
      root.style.removeProperty("--fx-intensity");
      root.style.removeProperty("--mouse-x");
      root.style.removeProperty("--mouse-y");
    };

    function onPointerMove(e) {
      updateMouseTarget(e.clientX, e.clientY);
    }

    function onPointerLeave() {
      targetMouseX = 0;
      targetMouseY = 0;
      requestRender();
    }
  }, []);

  return (
    <>
      <div className="bg-space" aria-hidden="true">
        <div className="bg-nebula"></div>
        <div className="bg-stars bg-stars-far"></div>
        <div className="bg-stars bg-stars-mid"></div>
        <div className="bg-stars bg-stars-near"></div>
        <div className="bg-shooting"></div>
      </div>
      <Header
        language={language}
        onLanguageChange={setLanguage}
        text={text.header}
      />
      <main>
        <Homepage language={language} text={text.homepage} />
      </main>
      <BackToTop text={text.backToTop} />
      <Footer year={year} text={text.footer} />
    </>
  );
}
