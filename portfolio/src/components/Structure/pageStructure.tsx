// This component defines the overall page structure including header, footer, and main content area.

// It imports necessary modules and components.
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// It defines and exports the PageStructure component.
export default function PageStructure() {
  // It uses the useLocation hook to determine the current path.
  const location = useLocation();
  // It checks if the current path is the homepage.
  const isHome = location.pathname === "/";

  // It returns the JSX structure for the page.
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main
        id="main"
        style={{
          flex: 1,
          paddingTop: isHome ? 0 : "85px",
        }}
      >
        {" "}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
