import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "../pages/Homepage";

// Lazy-loaded routes (Task 1.3)
import { Suspense, lazy } from "react";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
import ThemeApplier from "../features/theme/themeApplier";
import PageStructure from "../components/pageStructure";

function Loader() {
  return <div style={{ padding: 24 }}>Loading...</div>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ThemeApplier />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PageStructure />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
