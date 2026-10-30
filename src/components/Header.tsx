import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../nav";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" aria-label="PLANET'EnR">
          <img className="brand-logo" src="/images/logo.png" alt="PLANET'EnR" />
        </NavLink>
        <nav className="site-nav" aria-label="Navigation principale">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-nav">
          <button
            className="mobile-nav-close"
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
