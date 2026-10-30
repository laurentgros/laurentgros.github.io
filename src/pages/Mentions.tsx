import React from "react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero";

const Mentions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mentions légales – PLANET'EnR</title>
      </Helmet>
      <PageHero title="Mentions légales" />
      <section className="page-body">
        <div className="page-wrap">
          <p>
            <strong>Nom de la société :</strong> PLANET'EnR
          </p>
          <p>
            <strong>Numéro de Siret :</strong> 909 679 078 0016
          </p>
          <p>
            <strong>Noms des responsables :</strong> Laurent GROS et Anthony GROS
          </p>
          <p>
            <strong>Adresse de la société et du siège social :</strong> 16 rue du
            Lambert – 38730 VALENCOGNE
          </p>
          <p>
            <strong>Editeur de la publication :</strong> PLANET'EnR
          </p>
          <p>
            <strong>Directeur de la publication :</strong> PLANET'EnR
          </p>
          <p>
            <strong>Responsable de la publication :</strong> PLANET'EnR
          </p>
          <p>
            <strong>HEBERGEUR :</strong> OVH SAS – 2 rue Kellermann – BP 80157
            59053 ROUBAIX
          </p>
          <p>
            <strong>WEBMASTER :</strong> PLANET'EnR
          </p>
        </div>
      </section>
    </>
  );
};

export default Mentions;
