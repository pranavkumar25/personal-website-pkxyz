import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Cursor } from "./components/Cursor";
import { ScrollProgress } from "./components/ScrollProgress";
import { CaseDetail } from "./components/CaseDetail";
import { HomePage } from "./pages/Home";
import type { Project, Route } from "./lib/data";

const WorkPage = lazy(() => import("./pages/Work").then((m) => ({ default: m.WorkPage })));
const AboutPage = lazy(() => import("./pages/About").then((m) => ({ default: m.AboutPage })));
const WritingPage = lazy(() =>
  import("./pages/Writing").then((m) => ({ default: m.WritingPage }))
);
const ContactPage = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.ContactPage }))
);

export function App() {
  const [route, setRoute] = useState<Route>("home");
  const [project, setProject] = useState<Project | null>(null);

  const go = useCallback((r: Route) => {
    setRoute(r);
    setProject(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const openProject = useCallback((p: Project) => setProject(p), []);
  const closeProject = useCallback(() => setProject(null), []);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (
      hash === "work" ||
      hash === "about" ||
      hash === "writing" ||
      hash === "contact" ||
      hash === "home"
    ) {
      setRoute(hash);
    }
  }, []);

  useEffect(() => {
    const next = route === "home" ? "" : `#/${route}`;
    if (window.location.hash !== next) {
      window.history.replaceState(null, "", `${window.location.pathname}${next}`);
    }
  }, [route]);

  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Nav route={route} go={go} />
      <span className="rail rail-l">Pranav Kumar · Independent · 2026 · Index v3</span>
      <span className="rail rail-r">Set in Ovo and LT Superior. Two typefaces, used carefully.</span>
      <main key={route}>
        {route === "home" && <HomePage go={go} openProject={openProject} />}
        {route !== "home" && (
          <Suspense fallback={<PageFallback />}>
            {route === "work" && <WorkPage openProject={openProject} />}
            {route === "about" && <AboutPage />}
            {route === "writing" && <WritingPage />}
            {route === "contact" && <ContactPage />}
          </Suspense>
        )}
      </main>
      <Footer go={go} />
      <CaseDetail project={project} onClose={closeProject} />
    </>
  );
}

function PageFallback() {
  return (
    <div className="shell pt-[160px] pb-[160px] min-h-[60vh] flex items-center">
      <span className="meta">Loading</span>
    </div>
  );
}
