import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import Services from "./components/Services";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { useReveal } from "./lib/useReveal";
import { I18nProvider, useI18n } from "./lib/i18n";

function Inner() {
  useReveal();
  const { lang } = useI18n();
  // Re-run reveal when language changes (new DOM nodes)
  useEffect(() => {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.remove("in"));
    requestAnimationFrame(() => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      });
    });
  }, [lang]);

  // Snapshot mode: ?only=story|services|team|gallery|reviews|visit|footer
  const params = new URLSearchParams(window.location.search);
  const only = params.get("only");
  const SECTIONS: Record<string, JSX.Element> = {
    hero: <Hero />,
    story: <Story />,
    services: <Services />,
    team: <Team />,
    gallery: <Gallery />,
    reviews: <Reviews />,
    visit: <Visit />,
    footer: <Footer />,
  };
  if (only && SECTIONS[only]) {
    return (
      <div className="relative">
        <Nav />
        <main>
          {only === "footer" ? null : SECTIONS[only]}
        </main>
        {only === "footer" ? <Footer /> : null}
      </div>
    );
  }
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Services />
        <Team />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <LoadingScreen />
      <Inner />
    </I18nProvider>
  );
}
