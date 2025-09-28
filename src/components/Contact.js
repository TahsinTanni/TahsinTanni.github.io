import React, { useState } from 'react';
import './Contact.css';

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
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          className="gradient-btn"
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
      
      <div className="contact-links">
        {/* Email - Opens email client for manual composition */}
        <a 
          href="mailto:tahsintanni009@gmail.com?subject=Hello%20from%20your%20website&body=Hi%20Tahsin,%0A%0A" 
          className="contact-icon" 
          title="Compose Email Manually"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/tahsin-tanni-120156215/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-icon" 
          title="LinkedIn Profile"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#8A79FF" strokeWidth="2"/>
            <path d="M8 11v5M8 8v.01M12 11v5m0-5a2 2 0 1 1 4 0v5" stroke="#6C63FF" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </a>
        
        {/* GitHub */}
        <a 
          href="https://github.com/TahsinTanni" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-icon" 
          title="GitHub Profile"
        >
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path 
              fill="#6C63FF"
              d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Contact;