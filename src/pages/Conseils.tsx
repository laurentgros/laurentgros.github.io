import React from "react";
import { Accordion } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero";

const Conseils: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nos conseils – PLANET'EnR</title>
      </Helmet>
      <PageHero title="Nos conseils" />
      <section className="page-body">
        <div className="page-wrap">
          <p>
            Notre rôle est également de vous conseiller sur les différentes
            solutions et technologies disponibles à ce jour. Une nouvelle
            installation énergétique est un investissement à long terme, nous
            vous aidons à faire les bons choix pour le futur.
          </p>
          <Accordion className="planet-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>AIDES</Accordion.Header>
              <Accordion.Body>
                <p>
                  Différentes aides sont disponibles suivant le type de travaux
                  effectué.
                </p>
                <p>
                  Pour l'installation d'une pompe à chaleur, 3 types d'aides
                  sont disponibles :
                </p>
                <ul>
                  <li>CEE : ces aides sont accordées par les fournisseurs d'énergies.</li>
                  <li>
                    MaPrimeRenov : cette aide de l'État remplace l'ancien crédit
                    d'impôt.
                  </li>
                  <li>Taux de TVA réduit à 5,5%</li>
                </ul>
                <p>
                  Pour l'installation de panneaux solaires photovoltaïque, les
                  aides sont les suivantes :
                </p>
                <ul>
                  <li>Prime à l'autoconsommation : suppression le 1er juin 2026</li>
                  <li>Taux de TVA réduit 5,5% sous certaines conditions</li>
                  <li>
                    Vous pouvez aussi opter pour une solution de stockage
                    virtuel. Votre surplus est ainsi stocké dans une batterie
                    virtuelle illimitée en taille et dans le temps. Vous pouvez
                    ainsi stocker votre surplus de production d'été pour le
                    consommer en hiver. Nous contacter pour plus d'information.
                  </li>
                </ul>
                <p>Pour l'installation d'une borne de recharge :</p>
                <ul>
                  <li>Crédit d'impôt : suppression le 1er janvier 2026</li>
                </ul>
                <p>
                  PLANET'EnR vous accompagne dans ces démarches plus ou moins
                  fastidieuses. Ensemble, nous regardons les conditions
                  d'éligibilité et les montants d'aides disponibles.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>ACCOMPAGNEMENT</Accordion.Header>
              <Accordion.Body>
                <p>
                  De notre première rencontre à la mise en service de votre
                  installation, nous vous accompagnons tout au long de votre
                  projet.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>CONSEILS</Accordion.Header>
              <Accordion.Body>
                <p>
                  La signature d'un devis doit être mûrement réfléchie. Nous
                  répondons à vos questions et nous vous apportons les éléments
                  nécessaires à votre réflexion.
                </p>
                <p>
                  <strong>ATTENTION :</strong>
                </p>
                <p>
                  Attention aux démarches téléphoniques et aux visites de
                  commerciaux insistants. Dans tous les cas, ne jamais signer
                  quoi que ce soit lors de la visite d'un commercial. Prenez le
                  temps de réfléchir et faites vous conseiller par votre agence
                  locale de l'énergie.
                </p>
                <ul>
                  <li>
                    Chambéry : l'ASDER (
                    <a href="https://www.asder.asso.fr/" target="_blank" rel="noreferrer">
                      https://www.asder.asso.fr/
                    </a>
                    )
                  </li>
                  <li>
                    Grenoble : l'AGEDEN (
                    <a href="https://www.ageden38.org/" target="_blank" rel="noreferrer">
                      https://www.ageden38.org/
                    </a>
                    )
                  </li>
                  <li>
                    Lyon : L'ALEC (
                    <a href="https://www.alec-lyon.org/" target="_blank" rel="noreferrer">
                      https://www.alec-lyon.org/
                    </a>
                    )
                  </li>
                  <li>
                    Le service info-énergie Rhône-Alpes :{" "}
                    <a href="https://www.infoenergie38.org/" target="_blank" rel="noreferrer">
                      https://www.infoenergie38.org/
                    </a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>ANALYSES</Accordion.Header>
              <Accordion.Body>
                <p>
                  En fonction de vos besoins, nous apportons une analyse
                  technique et économique à vos projets.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>SATISFACTION</Accordion.Header>
              <Accordion.Body>
                <p>Votre satisfaction est au cœur de nos préoccupations.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Conseils;
