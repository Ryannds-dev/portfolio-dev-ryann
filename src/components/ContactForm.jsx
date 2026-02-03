import { useState } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Soumission du formulaire :", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>Me contacter</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Sujet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Sujet de votre message"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          <span>Envoyer</span>
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
