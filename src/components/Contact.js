import React, { useState } from 'react';
import './Contact.css';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

function Contact({ theme }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Using Formspree - Replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xnngjyde', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _replyto: form.email // This makes sure you can reply directly to the sender
        })
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully! I will get back to you soon.');
        setForm({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Failed to send message. Please try again or use the email icon below.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Failed to send message. Please try again or use the email icon below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-heading">Contact</h2>
          <p className="contact-subheading">Let’s build something amazing together 🚀</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name" 
              name="name" 
              className="contact-input" 
              value={form.name}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              className="contact-input" 
              value={form.email}
              onChange={handleChange}
              required 
              disabled={isSubmitting}
            />
            <textarea 
              placeholder="Message" 
              name="message" 
              className="contact-input contact-textarea" 
              value={form.message}
              onChange={handleChange}
              required 
              rows="4"
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              className="contact-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {/* Status Message */}
          {submitMessage && (
            <div className={`submit-status ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}
        </div>
        <div className="contact-right">
          <div className="contact-method">
            <FiMail size={28} className="contact-icon" />
            <span className="contact-label">Email</span>
            <a href="mailto:tahsintanni009@gmail.com" className="contact-link">tahsintanni009@gmail.com</a>
          </div>
          <div className="contact-method">
            <FiLinkedin size={28} className="contact-icon" />
            <span className="contact-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/tahsin-tanni-120156215/" target="_blank" rel="noopener noreferrer" className="contact-link">/in/tahsintanni</a>
          </div>
          <div className="contact-method">
            <FiGithub size={28} className="contact-icon" />
            <span className="contact-label">GitHub</span>
            <a href="https://github.com/TahsinTanni" target="_blank" rel="noopener noreferrer" className="contact-link">/TahsinTanni</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;