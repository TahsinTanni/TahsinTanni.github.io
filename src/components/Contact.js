import React, { useState } from 'react';
import './Contact.css';

function Contact({ theme }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    alert('Message submitted! (Check console for data)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container fade-in">
      <h2 className="section-title">Contact</h2>
      <form className={`contact-form glass-card ${theme}`} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="gradient-btn">Send Message</button>
      </form>
      <div className="contact-links">
        <a href="mailto:tahsintanni@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon" title="Email">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/tahsintanni/" target="_blank" rel="noopener noreferrer" className="contact-icon" title="LinkedIn">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="#8A79FF" strokeWidth="2"/><path d="M8 11v5M8 8v.01M12 11v5m0-5a2 2 0 1 1 4 0v5" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round"/></svg>
        </a>
      </div>
    </div>
  );
}

export default Contact;