import React from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../nav";

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <img src="/images/logo.png" alt="PLANET'EnR" />
      <p>© {new Date().getFullYear()} PLANET'EnR</p>
      <nav className="footer-nav" aria-label="Pied de page">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === "/"}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
