"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <span className="section-eyebrow">
          GET IN TOUCH
        </span>

        <h1>
          We would love
          <em> to hear from you.</em>
        </h1>

        <p>
          Questions about an order, a product,
          or Velloura? Send us a message.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-details">
          <span className="section-eyebrow">
            CONTACT
          </span>

          <h2>
            Let's talk.
          </h2>

          <div className="contact-item">
            <span>Email admin</span>
            <a href="mailto:hello@velloura.com">
              behruztalantov5@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span>Hours</span>
            <p>
              Monday — Friday
              <br />
              09:00 — 18:00
            </p>
          </div>

          <div className="contact-item">
            <span>Social</span>
            <p>Instagram / Telegram</p>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <label>
            Name

            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </label>

          <label>
            Subject

            <input
              type="text"
              name="subject"
              placeholder="How can we help?"
              required
            />
          </label>

          <label>
            Message

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
            />
          </label>

          <button type="submit">
            {sent
              ? "Message sent ✓"
              : "Send message →"}
          </button>
        </form>
      </section>
    </main>
  );
}