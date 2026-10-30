import React, { FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero";

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "");
    const email2 = String(data.get("email2") || "");
    if (email !== email2) {
      setError("Les adresses e-mail ne correspondent pas.");
      return;
    }
    const firstName = String(data.get("firstName") || "");
    const lastName = String(data.get("lastName") || "");
    const phone = String(data.get("phone") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");
    const body = [
      `Nom : ${firstName} ${lastName}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:relation@planet-enr.fr?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setError("");
    setSent(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact – PLANET'EnR</title>
      </Helmet>
      <PageHero title="Contact" />
      <section className="page-body">
        <div className="page-wrap contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            <p>Vos informations personnelles *</p>
            <div className="row">
              <div className="col-md-6">
                <input
                  className="form-control"
                  name="firstName"
                  placeholder="Prénom"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  name="lastName"
                  placeholder="Nom"
                  required
                />
              </div>
            </div>
            <p>Email *</p>
            <div className="row">
              <div className="col-md-6">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  type="email"
                  name="email2"
                  placeholder="Confirmez l'e-mail"
                  required
                />
              </div>
            </div>
            <label className="form-label">Téléphone *</label>
            <input className="form-control" name="phone" required />
            <label className="form-label">Sujet *</label>
            <input className="form-control" name="subject" required />
            <label className="form-label">Message *</label>
            <textarea
              className="form-control"
              name="message"
              rows={6}
              placeholder="Expliquez-nous votre projet."
              required
            />
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="consent" required />
              <label className="form-check-label" htmlFor="consent">
                Je consens à ce que PLANET'EnR stocke mes informations envoyées
                afin qu'il puisse répondre à ma demande.
              </label>
            </div>
            {error && <p>{error}</p>}
            {sent && (
              <p>
                Votre logiciel de messagerie va s'ouvrir pour envoyer le message
                à relation@planet-enr.fr.
              </p>
            )}
            <button className="btn-planet" type="submit">
              Envoyer
            </button>
          </form>
          <aside className="contact-side">
            <h2>Formulaire de contact</h2>
            <p>
              Contacter PLANET'EnR pour plus d'informations ou pour prendre
              rendez-vous.
            </p>
            <div className="contact-line">
              <img src="/images/icons/tel.png" alt="" />
              <a href="tel:+33688602524">06 88 60 25 24</a>
            </div>
            <div className="contact-line">
              <img src="/images/icons/tel.png" alt="" />
              <a href="tel:+33665775075">06 65 77 50 75</a>
            </div>
            <div className="contact-line">
              <img src="/images/icons/email.png" alt="" />
              <a href="mailto:relation@planet-enr.fr">relation@planet-enr.fr</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
