import React, { useState } from 'react';
import './ContactContent.css';

const ContactContent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  return (
    <div className="contact-content container">
      <div className="contact-info anim-slide-up">
        <h2>Get in Touch</h2>
        <p>Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.</p>
        
        <div className="info-block">
          <h4>📍 Headquarters</h4>
          <p>100 Innovation Drive<br/>San Francisco, CA 94105</p>
        </div>
        <div className="info-block">
          <h4>✉️ Email Us</h4>
          <p><a href="mailto:support@auverion.com">support@auverion.com</a></p>
          <p><a href="mailto:press@auverion.com">press@auverion.com</a></p>
        </div>
        <div className="info-block">
          <h4>📞 Call Us</h4>
          <p>+1 (800) 123-4567<br/>Mon-Fri, 9am to 6pm PST</p>
        </div>
      </div>

      <div className="contact-form-container anim-fade-in" style={{ animationDelay: '200ms' }}>
        <form className="contact-form" onSubmit={handleSubmit}>
          {isSuccess && (
            <div className="form-success">
              Thanks for reaching out! We'll get back to you shortly.
            </div>
          )}
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
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
