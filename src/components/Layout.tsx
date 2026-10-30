import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className={`site-shell${isHome ? " home-shell" : ""}`}>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
