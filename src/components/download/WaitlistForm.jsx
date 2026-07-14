import React, { useState } from 'react';
import { FORMSPREE_ENDPOINT } from '../../config/links';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });
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
        setFormData({ name: '', email: '', role: '' });
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
    <section className="waitlist-section section">
      <div className="container">
        <div className="waitlist-container anim-fade-in">
          <div className="waitlist-header text-center">
            <h2>Get Early Access</h2>
            <p className="text-secondary" style={{ marginTop: '16px', maxWidth: '600px', margin: '16px auto 32px' }}>
              RebarX is currently in closed beta. Join the waitlist to secure your spot and be the first to know when we launch to the public.
            </p>
          </div>
          
          <div className="waitlist-form-wrapper" style={{ width: '100%', maxWidth: '500px', margin: '0 auto', background: 'var(--surface)', padding: 'clamp(16px, 5vw, 32px)', borderRadius: '12px', border: '1px solid var(--border-primary)' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              {isSuccess && (
                <div className="form-success" style={{ background: 'rgba(34, 197, 94, 0.1)', color: 'var(--semantic-success)', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                  You're on the list! We'll be in touch soon with your early access invitation.
                </div>
              )}
              {submitError && (
                <div className="form-error" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--semantic-error)', padding: '16px', borderRadius: '8px', marginBottom: '24px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  {submitError}
                </div>
              )}
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-secondary)' }}>Name</label>
                <input 
                  type="text" 
                  name="name"
                  className="form-control" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Jane Doe"
                  style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '16px' }}
                />
                {errors.name && <span className="error-text" style={{ color: 'var(--semantic-error)', fontSize: '14px', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
              </div>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-secondary)' }}>Email</label>
                <input 
                  type="email" 
                  name="email"
                  className="form-control" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="jane@example.com"
                  style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '16px' }}
                />
                {errors.email && <span className="error-text" style={{ color: 'var(--semantic-error)', fontSize: '14px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
              </div>
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-secondary)' }}>Role (Optional)</label>
                <input 
                  type="text" 
                  name="role"
                  className="form-control" 
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  placeholder="Structural Engineer, Detailer, etc."
                  style={{ width: '100%', padding: '12px 16px', background: 'var(--bg-secondary)', border: '1px solid var(--border-secondary)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '16px' }}
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{ width: '100%', padding: '14px', background: 'var(--accent-blue)', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1, transition: 'background 0.2s' }}
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
