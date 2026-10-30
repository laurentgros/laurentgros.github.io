import React, { FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero";

const CONTACT_EMAIL = "relation@planet-enr.fr";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "");
    const email2 = String(data.get("email2") || "");
    if (email !== email2) {
      setStatus("error");
      setError("Les adresses e-mail ne correspondent pas.");
      return;
    }
    if (String(data.get("company") || "")) {
      setStatus("sent");
      setError("");
      form.reset();
      return;
    }

    const firstName = String(data.get("firstName") || "");
    const lastName = String(data.get("lastName") || "");
    const phone = String(data.get("phone") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          phone,
          _subject: `PLANET'EnR — ${subject}`,
          _replyto: email,
          _template: "table",
          _captcha: "false",
          message,
        }),
      });
      const payload = (await response.json().catch(() => ({}))) as {
        success?: boolean | string;
        message?: string;
      };
      const succeeded =
        response.ok &&
        payload.success !== false &&
        payload.success !== "false";
      if (!succeeded) {
        const activation =
          typeof payload.message === "string" &&
          payload.message.toLowerCase().includes("activation");
        throw new Error(
          activation
            ? `FormSubmit doit activer le domaine GitHub Pages. Ouvrez ${CONTACT_EMAIL}, cliquez le lien « Activate Form », puis renvoyez ce message.`
            : payload.message || `HTTP ${response.status}`
        );
      }
      setStatus("sent");
      form.reset();
    } catch (cause) {
      setStatus("error");
      const detail = cause instanceof Error ? cause.message : "";
      setError(
        detail.includes("Activate Form")
          ? detail
          : `L'envoi a échoué. Écrivez-nous directement à ${CONTACT_EMAIL}.`
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact – PLANET'EnR</title>
      </Helmet>
      <PageHero title="Contact" />
      <section className="page-body">
        <div className="page-wrap contact-grid">
          <form className="contact-form" onSubmit={(event) => void onSubmit(event)}>
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
            <div className="contact-honeypot" aria-hidden="true">
              <label>
                Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
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
            {status === "error" && error && <p>{error}</p>}
            {status === "sent" && (
              <p>
                Merci, votre message a bien été envoyé à {CONTACT_EMAIL}. Nous
                vous répondrons rapidement.
              </p>
            )}
            <button className="btn-planet" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Envoi…" : "Envoyer"}
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
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
