import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";

import { Suspense, lazy } from "react";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
import ThemeApplier from "../features/theme/themeApplier";
import PageStructure from "../components/Structure/pageStructure";

function Loader() {
  return <div style={{ padding: 24 }}>Loading...</div>;
}

const ProjectDetailPage = lazy(() => import("../pages/ProjectDetailPage"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ThemeApplier />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<PageStructure />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/:projectId"
              element={<ProjectDetailPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
