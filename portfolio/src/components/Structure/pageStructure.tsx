import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./pageStructure.module.css";

export default function PageStructure() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header />
      <main
        id="main"
        className={!isHome ? styles.withHeaderOffset : undefined}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
