import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <div className="contact-container">

        {/* HERO */}
        <section className="contact-hero">
          <div>
            <p className="contact-eyebrow">GET IN TOUCH</p>

            <h1>
              Let's talk
              <br />
              about CashFlow.
            </h1>

            <p className="contact-subtitle">
              Have a question, suggestion, or simply want to share your
              feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="contact-number">
            <span>CONTACT</span>
            <strong>04</strong>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="contact-grid">

          {/* LEFT */}
          <div className="contact-info">

            <div className="contact-info-card dark-contact-card">
              <span className="contact-card-label">EMAIL</span>
              <h3>Let's connect</h3>
              <p>
                Reach out with questions, feedback, or ideas about the
                CashFlow project.
              </p>

              <a href="mailto:hello@cashflow.app">
                hello@cashflow.app ↗
              </a>
            </div>

            <div className="contact-info-card">
              <span className="contact-card-label">PROJECT</span>
              <h3>CashFlow</h3>
              <p>
                A full-stack personal finance dashboard built with modern
                web technologies.
              </p>
            </div>

            <div className="contact-info-card">
              <span className="contact-card-label">SUPPORT</span>
              <h3>We're listening.</h3>
              <p>
                Your feedback helps make the experience cleaner, simpler,
                and more useful.
              </p>
            </div>

          </div>

          {/* FORM */}
          <div className="contact-form-card">

            <div className="contact-form-heading">
              <div>
                <p className="contact-card-label">SEND A MESSAGE</p>
                <h2>Tell us what's on your mind.</h2>
              </div>

              <div className="contact-form-icon">↗</div>
            </div>

            {submitted && (
              <div className="contact-success">
                ✓ Thank you! Your message has been received.
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="contact-field">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message →
              </button>

            </form>
          </div>

        </section>

        {/* BOTTOM CTA */}
        <section className="contact-bottom">
          <div>
            <p className="contact-eyebrow">CASHFLOW</p>
            <h2>
              Manage your money
              <br />
              with more clarity.
            </h2>
          </div>

          <div className="contact-bottom-mark">
            C
          </div>
        </section>

      </div>
    </main>
  );
};

export default Contact;