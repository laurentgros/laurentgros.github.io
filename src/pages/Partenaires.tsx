import React from "react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero";

type Partner = { src: string; alt: string };

const PANELS: Partner[] = [
  { src: "/images/partners/dmegc.jpeg", alt: "DMEGC Solar" },
  { src: "/images/partners/sunpower.jpg", alt: "SunPower" },
  { src: "/images/partners/mylight.jpg", alt: "MyLight Systems" },
  { src: "/images/partners/soluxtec.png", alt: "Soluxtec" },
  { src: "/images/partners/canadian-solar.png", alt: "Canadian Solar" },
  { src: "/images/partners/qcells.png", alt: "Qcells" },
  { src: "/images/partners/trina.jpg", alt: "Trina Solar" },
  { src: "/images/partners/voltec.jpg", alt: "Voltec Solar" },
  { src: "/images/partners/dualsun.jpg", alt: "DualSun" },
  { src: "/images/partners/solaredge.png", alt: "SolarEdge" },
  { src: "/images/partners/maviwatt.png", alt: "Maviwatt" },
];

const BATTERIES: Partner[] = [
  { src: "/images/partners/byd.png", alt: "BYD" },
  { src: "/images/partners/huawei.png", alt: "Huawei" },
];

const HEAT_PUMPS: Partner[] = [
  { src: "/images/partners/mitsubishi.png", alt: "Mitsubishi" },
  { src: "/images/partners/atlantic.jpg", alt: "Atlantic Fujitsu" },
];

const CHARGERS: Partner[] = [
  { src: "/images/partners/wallbox.jpg", alt: "Wallbox" },
  { src: "/images/partners/tesla.png", alt: "Tesla" },
  { src: "/images/partners/schneider.png", alt: "Schneider Electric" },
  { src: "/images/partners/hager.png", alt: "Hager" },
];

const LogoGrid: React.FC<{ items: Partner[] }> = ({ items }) => (
  <div className="logo-grid">
    {items.map((item) => (
      <div className="logo-card" key={item.src}>
        <img src={item.src} alt={item.alt} />
      </div>
    ))}
  </div>
);

const Partenaires: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nos Partenaires – PLANET'EnR</title>
      </Helmet>
      <PageHero title="Nos Partenaires" />
      <section className="page-body">
        <div className="page-wrap">
          <p>
            PLANET'EnR met à votre disposition une multitude de matériel afin de
            répondre au mieux à la solution qui vous correspond.
          </p>
          <h2>PANNEAUX PHOTOVOLTAÏQUES</h2>
          <LogoGrid items={PANELS} />
          <h2>BATTERIES</h2>
          <LogoGrid items={BATTERIES} />
          <h2>POMPES À CHALEUR AIR-EAU (Remplacement de chaudières à fioul/gaz)</h2>
          <LogoGrid items={HEAT_PUMPS} />
          <h2>BORNES DE RECHARGE POUR VÉHICULES ÉLECTRIQUES ET HYBRIDES</h2>
          <LogoGrid items={CHARGERS} />
        </div>
      </section>
    </>
  );
};

export default Partenaires;
