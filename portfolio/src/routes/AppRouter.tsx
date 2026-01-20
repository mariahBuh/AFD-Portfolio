// This file sets up the main application router using React Router v6.

// import necessary modules and components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";

// import lazy and Suspense for code splitting
import { Suspense, lazy } from "react";

// lazy load other page components
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
// import ThemeApplier to manage theme settings
import ThemeApplier from "../features/theme/themeApplier";
// import PageStructure for consistent page layout
import PageStructure from "../components/Structure/pageStructure";

// Loader component to show while lazy-loaded components are being fetched
function Loader() {
  return <div style={{ padding: 24 }}>Loading...</div>;
}

// lazy load ProjectDetailPage component
const ProjectDetailPage = lazy(() => import("../pages/ProjectDetailPage"));

// define and export the AppRouter component
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
