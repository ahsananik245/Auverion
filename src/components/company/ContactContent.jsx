import React, { useState } from 'react';
import './ContactContent.css';
import { FORMSPREE_ENDPOINT } from '../../config/links';

const ContactContent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(e.target),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitError("Something went wrong sending that. Please try again, or email us directly.");
      }
    } catch (err) {
      setSubmitError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-content container">
      <div className="contact-info anim-slide-up">
        <h2>Get in Touch</h2>
        <p>Have a question about RebarX, pricing, or anything else? Send us a message and we'll get back to you.</p>
        
        <div className="info-block">
          <h4>✉️ Support</h4>
          <p><a href="mailto:support@auverion.com">support@auverion.com</a></p>
        </div>
        <div className="info-block">
          <h4>✉️ Press &amp; Media</h4>
          <p><a href="mailto:press@auverion.com">press@auverion.com</a></p>
        </div>
      </div>

      <div className="contact-form-container anim-fade-in" style={{ animationDelay: '200ms' }}>
        <form className="contact-form" onSubmit={handleSubmit}>
          {isSuccess && (
            <div className="form-success">
              Thanks for reaching out! We'll get back to you shortly.
            </div>
          )}
          {submitError && (
            <div className="form-error">
              {submitError}
            </div>
          )}
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name"
              className="form-control" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Jane Doe"
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              className="form-control" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="jane@example.com"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              name="message"
              className="form-control" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="How can we help you?"
            ></textarea>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactContent;
