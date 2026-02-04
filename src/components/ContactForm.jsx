import { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formspree.io/f/meezyrao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) return alert("Erreur d'envoi, réessaie.");

    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Message envoyé !");
  };

  return (
    <section className="contact" id="contact">
      <h2>Me contacter</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="subject"
          placeholder="Sujet de votre message"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Votre message..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />

        <button type="submit" className="submit-btn">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
