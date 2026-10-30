import React, { FormEvent, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageHero from "../components/PageHero";

const CONTACT_EMAIL = "relation@planet-enr.fr";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const REQUIRED = "Ce champ est obligatoire.";
const INVALID_EMAIL = "Veuillez saisir une adresse e-mail valide.";
const EMAIL_MISMATCH = "Les adresses e-mail ne correspondent pas.";

type FieldName =
  | "firstName"
  | "lastName"
  | "email"
  | "email2"
  | "phone"
  | "subject"
  | "message"
  | "consent";

type FieldErrors = Partial<Record<FieldName, string>>;

const emailOk = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const Contact: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const clearField = (name: FieldName) => {
    setFieldErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const validate = (data: FormData): FieldErrors => {
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const email2 = String(data.get("email2") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const consent = data.get("consent") === "on";
    const next: FieldErrors = {};

    if (!firstName) next.firstName = REQUIRED;
    if (!lastName) next.lastName = REQUIRED;
    if (!email) next.email = REQUIRED;
    else if (!emailOk(email)) next.email = INVALID_EMAIL;
    if (!email2) next.email2 = REQUIRED;
    else if (!emailOk(email2)) next.email2 = INVALID_EMAIL;
    else if (email && email !== email2) next.email2 = EMAIL_MISMATCH;
    if (!phone) next.phone = REQUIRED;
    if (!subject) next.subject = REQUIRED;
    if (!message) next.message = REQUIRED;
    if (!consent) next.consent = REQUIRED;
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setStatus("idle");
      setError("");
      return;
    }
    if (String(data.get("company") || "")) {
      setStatus("sent");
      setError("");
      setFieldErrors({});
      form.reset();
      return;
    }

    const firstName = String(data.get("firstName") || "");
    const lastName = String(data.get("lastName") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");

    setStatus("sending");
    setError("");
    setFieldErrors({});

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

  const invalid = (name: FieldName): string =>
    fieldErrors[name] ? "form-control is-invalid" : "form-control";

  return (
    <>
      <Helmet>
        <title>Contact – PLANET'EnR</title>
      </Helmet>
      <PageHero title="Contact" />
      <section className="page-body">
        <div className="page-wrap contact-grid">
          <form
            className="contact-form"
            noValidate
            onSubmit={(event) => void onSubmit(event)}
          >
            <p>Vos informations personnelles *</p>
            <div className="row">
              <div className="col-md-6">
                <input
                  className={invalid("firstName")}
                  name="firstName"
                  placeholder="Prénom"
                  aria-invalid={Boolean(fieldErrors.firstName)}
                  onChange={() => clearField("firstName")}
                />
                {fieldErrors.firstName && (
                  <p className="contact-field-error">{fieldErrors.firstName}</p>
                )}
              </div>
              <div className="col-md-6">
                <input
                  className={invalid("lastName")}
                  name="lastName"
                  placeholder="Nom"
                  aria-invalid={Boolean(fieldErrors.lastName)}
                  onChange={() => clearField("lastName")}
                />
                {fieldErrors.lastName && (
                  <p className="contact-field-error">{fieldErrors.lastName}</p>
                )}
              </div>
            </div>
            <p>Email *</p>
            <div className="row">
              <div className="col-md-6">
                <input
                  className={invalid("email")}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  aria-invalid={Boolean(fieldErrors.email)}
                  onChange={() => clearField("email")}
                />
                {fieldErrors.email && (
                  <p className="contact-field-error">{fieldErrors.email}</p>
                )}
              </div>
              <div className="col-md-6">
                <input
                  className={invalid("email2")}
                  type="email"
                  name="email2"
                  placeholder="Confirmez l'e-mail"
                  aria-invalid={Boolean(fieldErrors.email2)}
                  onChange={() => clearField("email2")}
                />
                {fieldErrors.email2 && (
                  <p className="contact-field-error">{fieldErrors.email2}</p>
                )}
              </div>
            </div>
            <div className="contact-honeypot" aria-hidden="true">
              <label>
                Company
                <input type="text" name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <label className="form-label">Téléphone *</label>
            <input
              className={invalid("phone")}
              name="phone"
              aria-invalid={Boolean(fieldErrors.phone)}
              onChange={() => clearField("phone")}
            />
            {fieldErrors.phone && (
              <p className="contact-field-error">{fieldErrors.phone}</p>
            )}
            <label className="form-label">Sujet *</label>
            <input
              className={invalid("subject")}
              name="subject"
              aria-invalid={Boolean(fieldErrors.subject)}
              onChange={() => clearField("subject")}
            />
            {fieldErrors.subject && (
              <p className="contact-field-error">{fieldErrors.subject}</p>
            )}
            <label className="form-label">Message *</label>
            <textarea
              className={invalid("message")}
              name="message"
              rows={6}
              placeholder="Expliquez-nous votre projet."
              aria-invalid={Boolean(fieldErrors.message)}
              onChange={() => clearField("message")}
            />
            {fieldErrors.message && (
              <p className="contact-field-error">{fieldErrors.message}</p>
            )}
            <div className="form-check mb-3">
              <input
                className={`form-check-input${fieldErrors.consent ? " is-invalid" : ""}`}
                type="checkbox"
                id="consent"
                name="consent"
                aria-invalid={Boolean(fieldErrors.consent)}
                onChange={() => clearField("consent")}
              />
              <label className="form-check-label" htmlFor="consent">
                Je consens à ce que PLANET'EnR stocke mes informations envoyées
                afin qu'il puisse répondre à ma demande.
              </label>
              {fieldErrors.consent && (
                <p className="contact-field-error">{fieldErrors.consent}</p>
              )}
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
