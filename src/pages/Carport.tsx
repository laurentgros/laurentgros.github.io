import React from "react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero";

const Carport: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Carport – PLANET'EnR</title>
      </Helmet>
      <PageHero title="Carport" />
      <section className="page-body">
        <div className="page-wrap">
          <p>
            <strong>
              Combiner un abri pour vos véhicules et une installation
              photovoltaïque.
            </strong>
          </p>
          <div className="carport-grid">
            <img src="/images/carport/carport-1.jpg" alt="Carport photovoltaïque 1" />
            <img src="/images/carport/carport-2.jpg" alt="Carport photovoltaïque 2" />
            <img src="/images/carport/carport-3.jpg" alt="Carport photovoltaïque 3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Carport;
