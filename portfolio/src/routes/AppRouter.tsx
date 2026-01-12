import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Homepage";

// Lazy-loaded routes (Task 1.3)
import { Suspense, lazy } from "react";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));

function Loader() {
  return <div style={{ padding: 24 }}>Loading...</div>;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
