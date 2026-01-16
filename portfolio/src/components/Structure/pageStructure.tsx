import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function PageStructure() {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
