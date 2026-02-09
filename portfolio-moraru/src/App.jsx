import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import BackToTop from "./components/BackToTop.jsx";


export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
     <div className="bg-orbs" aria-hidden="true"></div>
      <Header />
      <main>
      <Homepage/>
      </main>
      <BackToTop />
      <Footer year={year} />
    </>
  );
}
