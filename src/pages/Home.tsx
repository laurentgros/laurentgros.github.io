import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SLIDES = [
  "/images/hero/solar-roof.jpg",
  "/images/hero/heat-pump.jpg",
  "/images/hero/heat-pumps.jpg",
  "/images/hero/technician.jpg",
];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>PLANET'EnR – L'énergie durable</title>
      </Helmet>
      <section className="hero">
        {SLIDES.map((src, slideIndex) => (
          <div
            key={src}
            className={`hero-slide${slideIndex === index ? " active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-overlay" />
        <div className="hero-content left">
          <h1 className="hero-title">
            PLANET'EnR REALISE VOS PROJETS ENERGETIQUES
          </h1>
          <p className="hero-subtitle">
            Installateur de panneaux photovoltaïques, bornes de recharge pour
            véhicules électriques, pompes à chaleur, climatisations et
            chauffage.
          </p>
          <Link className="btn-planet" to="/contact">
            Contactez-nous
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
