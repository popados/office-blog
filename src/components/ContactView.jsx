"use client";

import { useState, useRef } from "react";

const DETAILS = [
  { icon: "bi bi-envelope-fill", label: "Email",         value: "hello@officeessentials.com" },
  { icon: "bi bi-geo-alt-fill",  label: "Location",      value: "Austin, Texas, USA" },
  { icon: "bi bi-clock-fill",    label: "Response Time", value: "Within 1 business day" },
];

export default function ContactView() {
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      formRef.current?.reset();
    }, 3000);
  }

  return (
    <div className="contact-view">
      <div className="page-header">
        <h1>Get in Touch</h1>
        <h2>Have a question, product suggestion, or partnership inquiry? We'd love to hear from you.</h2>
      </div>

      <div className="page-content">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Reach out through the form or use the details below. We typically respond within one business day.</p>
            {DETAILS.map(d => (
              <div key={d.label} className="contact-detail">
                <div className="contact-detail-icon"><i className={d.icon}></i></div>
                <div className="contact-detail-text">
                  <strong>{d.label}</strong>
                  <span>{d.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form">
            <h2>Send a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">Name</label>
                  <input type="text" id="c-name" name="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email</label>
                  <input type="email" id="c-email" name="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c-subject">Subject</label>
                <input type="text" id="c-subject" name="subject" placeholder="What's this about?" />
              </div>
              <div className="form-group">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" placeholder="Tell us more..." />
              </div>
              <button
                type="submit"
                className="submit-btn"
                style={sent ? { background: "#059669" } : {}}
              >
                {sent ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
