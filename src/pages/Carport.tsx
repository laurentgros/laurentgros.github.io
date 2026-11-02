import React from "react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero";

const Carport: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Carport/Pergola – PLANET'EnR</title>
      </Helmet>
      <PageHero title="Carport/Pergola" />
      <section className="page-body">
        <div className="page-wrap">
          <p>
            Un carport ou une pergola photovoltaïque protège vos voitures ou
            votre terrasse tout en produisant de l’électricité. Les structures
            de la gamme solaire MaviSun sont en aluminium thermolaquées et
            assemblées en France par TELCO. Elles s’adressent à la maison
            comme aux bâtiments tertiaires, et sont prévues pour durer : elles
            se démontent, se réparent et se recyclent.
          </p>
          <p>
            Plusieurs formes existent. Les pergolas et carports ELECTRA Design
            2 et Design 3 ont un toit plat, adossés à la façade ou posés en
            îlot. Le Design 3 se décline aussi en ombrière et en version à
            pieds déportés, pour laisser le passage libre. La gamme Horizon III
            ajoute une toiture en pente, en pergola adossée ou en carport îlot,
            y compris à deux pentes. Le nombre de modules se choisit selon la
            surface : la puissance va d’environ 500 W à plus de 10 kW.
          </p>
          <p>
            La teinte standard est l’anthracite texturé RAL 7016 ; d’autres
            coloris sont possibles. L’étanchéité, les chemins de câbles, un
            éclairage LED, des claustras et un support de borne de recharge
            peuvent compléter l’installation. La pose se fait sur dalle ou
            plots béton, en tenant compte de la neige et du vent du lieu.
          </p>
          <p>
            PLANET'EnR choisit le modèle selon l’usage — abri voiture, terrasse
            ou ombrière — et selon l’exposition du terrain.
          </p>
          <div className="carport-grid">
            <img
              src="/images/carport/pergola-terrasse.jpg"
              alt="Pergola photovoltaïque au-dessus d’une terrasse"
            />
            <img
              src="/images/carport/pergola-salon.jpg"
              alt="Pergola solaire au-dessus d’un salon de jardin"
            />
            <img
              src="/images/carport/carport-vehicule.png"
              alt="Carport photovoltaïque abritant un véhicule"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Carport;
