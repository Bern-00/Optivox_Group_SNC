import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Globe2,
} from 'lucide-react'
import { LinkedInIcon, TwitterIcon, FacebookIcon } from '../components/SocialIcons'
import { useState } from 'react'
import IntroLoader from '../components/IntroLoader'
import { EMAILJS_SERVICE, EMAILJS_KEY, EMAILJS_CONTACT_TEMPLATE as EMAILJS_TEMPLATE } from '../lib/emailjs'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'IT Support & Systems',
    message: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        from_name:    formData.name,
        from_email:   formData.email,
        company:      formData.company,
        service:      formData.service,
        message:      formData.message,
      }, EMAILJS_KEY)
      setSubmitted(true)
    } catch {
      setError('Failed to send. Please try again or email us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <IntroLoader />
      {/* Page Hero */}
      <section className="page-hero" id="contact-hero">
        <div className="page-hero__bg">
          <div className="page-hero__gradient"></div>
        </div>
        <div className="container">
          <span className="section-label">Contact Us</span>
          <h1 className="page-hero__title">
            Let&apos;s Build Something <br />
            <span className="text-gold">Exceptional Together</span>
          </h1>
          <p className="page-hero__subtitle">
            Get in touch with our solutions architects to discuss your staffing, IT support,
            CSR, interpretation, or AI project requirements.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="section contact-main" id="contact-details">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Column */}
            <div className="contact-info">
              <span className="section-label" style={{ textAlign: 'left' }}>Get In Touch</span>
              <h2 className="contact-info__title">Operational Hubs</h2>
              <p className="contact-info__desc">
                Optivox Group operates standard 24/7 global support coverage. Reach out through our primary channels,
                or book a structured briefing session with our team.
              </p>

              <div className="contact-cards">
                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4>Email Inquiry</h4>
                    <p className="text-gold" style={{ fontWeight: 600 }}>
                      <a href="mailto:contact@optivoxgroup.com">contact@optivoxgroup.com</a>
                    </p>
                    <p className="text-secondary" style={{ fontSize: '0.85rem' }}>Response within 12 business hours.</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4>Call Center</h4>
                    <p className="text-gold" style={{ fontWeight: 600 }}>
                      <a href="tel:+1234567890">+1 (234) 567-890</a>
                    </p>
                    <p className="text-secondary" style={{ fontSize: '0.85rem' }}>Mon - Fri, 8:00 AM - 6:00 PM EST.</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-card__icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4>Global HQ</h4>
                    <p className="text-primary" style={{ fontWeight: 500 }}>
                      Optivox Group Inc.
                    </p>
                    <p className="text-secondary" style={{ fontSize: '0.85rem' }}>Remote & Hybrid Talent Centers Globally.</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-socials-box">
                <h4>Follow Our Progress</h4>
                <div className="contact-socials">
                  <a href="#" className="contact-social-link" aria-label="LinkedIn">
                    <LinkedInIcon size={20} />
                  </a>
                  <a href="#" className="contact-social-link" aria-label="Twitter">
                    <TwitterIcon size={20} />
                  </a>
                  <a href="#" className="contact-social-link" aria-label="Facebook">
                    <FacebookIcon size={20} />
                  </a>
                  <a href="#" className="contact-social-link" aria-label="Global Support">
                    <Globe2 size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="contact-form-container">
              <div className="contact-form-box">
                {submitted ? (
                  <div className="contact-success">
                    <div className="contact-success__icon">✉️</div>
                    <h3>Message Dispatched!</h3>
                    <p className="text-secondary">
                      Thank you for contacting Optivox Group. A solutions specialist will email you directly
                      to discuss the next steps.
                    </p>
                    <button
                      className="btn btn-secondary btn-large"
                      style={{ marginTop: '24px' }}
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form-element">
                    <h3 className="contact-form-title">Inquiry Brief</h3>

                    <div className="form-group">
                      <label htmlFor="client-name">Your Name</label>
                      <input
                        type="text"
                        id="client-name"
                        required
                        placeholder="Alexandre Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group-row">
                      <div className="form-group">
                        <label htmlFor="client-email">Business Email</label>
                        <input
                          type="email"
                          id="client-email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="client-company">Company Name</label>
                        <input
                          type="text"
                          id="client-company"
                          placeholder="Acme Corp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="client-service">Project Vertical</label>
                      <select
                        id="client-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option>IT Support & Systems</option>
                        <option>Customer Service & CSR</option>
                        <option>Interpretation Services</option>
                        <option>AI Training Projects</option>
                        <option>Custom Strategic Outsourcing</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="client-message">Project Requirements / Brief</label>
                      <textarea
                        id="client-message"
                        required
                        rows="5"
                        placeholder="Please outline the target scope, skills required, and projected timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {error && <p className="form-error">{error}</p>}
                    <button
                      type="submit"
                      className="btn btn-primary btn-large"
                      style={{ width: '100%' }}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : <><Send size={16} /> Submit Inquiry</>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
