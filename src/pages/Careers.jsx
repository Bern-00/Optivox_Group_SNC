import { Link } from 'react-router-dom'
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Globe,
  Award,
  HeartHandshake,
  DollarSign,
  Coffee,
  BookOpen,
} from 'lucide-react'
import { useState } from 'react'
import { EMAILJS_SERVICE, EMAILJS_KEY, EMAILJS_CAREERS_TEMPLATE as EMAILJS_TEMPLATE } from '../lib/emailjs'
import OptivoxLogo from '../components/OptivoxLogo'
import './Careers.css'

const openPositions = [
  {
    title: 'Senior System Administrator (Remote)',
    category: 'IT Support & Systems',
    type: 'Full-time',
    location: 'Remote (Global)',
    desc: 'We are seeking an experienced Systems Administrator with 5+ years of experience managing Linux/Windows server infrastructure, cloud networks (AWS/GCP), and modern DevOps tools.',
    salary: '$2,500 - $3,500 / month',
  },
  {
    title: 'Customer Service Specialist (Bilingual - English/Spanish)',
    category: 'Customer Service & CSR',
    type: 'Full-time / Part-time',
    location: 'Remote (LATAM / Europe)',
    desc: 'Join our customer support team managing live chats, email ticketing, and phone communications for international retail clients. High empathy, fluent written/spoken Spanish and English required.',
    salary: '$1,200 - $1,800 / month',
  },
  {
    title: 'AI Training Specialist & Content Annotator',
    category: 'AI Training Projects',
    type: 'Project-based / Hourly',
    location: 'Remote (Global)',
    desc: 'Work on cutting-edge language modeling projects. Tasks include evaluation of AI chatbot responses, RLHF (Reinforcement Learning from Human Feedback), and annotation of technical/creative content.',
    salary: '$15 - $25 / hour',
  },
  {
    title: 'Certified Medical Interpreter (English / Arabic / French)',
    category: 'Interpretation Services',
    type: 'Part-time / On-call',
    location: 'Remote (Global)',
    desc: 'Provide high-quality remote video and audio interpretation for clinical encounters. Certification in medical interpretation (e.g., CCHI, NBCMI) is highly preferred.',
    salary: '$25 - $40 / hour',
  },
]

const benefits = [
  {
    icon: <Globe size={24} />,
    title: 'Work from Anywhere',
    desc: 'Our operations are 100% remote. Work from the comfort of your home or any location with stable high-speed internet.',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Competitive Compensation',
    desc: 'We value expert talent and offer premium compensation structures matching global market standards.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Skill Development',
    desc: 'Gain training in high-demand fields like system administration, AI annotation frameworks, and professional support.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Supportive Culture',
    desc: 'Enjoy a collaborative international community with local agent meetups, technical mentorship, and support.',
  },
]

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'IT Support & Systems',
    resumeUrl: '',
    coverLetter: '',
  })

  const categories = ['All', 'IT Support & Systems', 'Customer Service & CSR', 'Interpretation Services', 'AI Training Projects']

  const filteredPositions = selectedCategory === 'All'
    ? openPositions
    : openPositions.filter(p => p.category === selectedCategory)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
        from_name:    formData.name,
        from_email:   formData.email,
        role:         formData.role,
        resume_url:   formData.resumeUrl,
        cover_letter: formData.coverLetter,
      }, EMAILJS_KEY)
      setSubmitted(true)
    } catch {
      setError('Failed to send. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="careers-page">
      {/* Page Hero */}
      <section className="page-hero" id="careers-hero">
        <div className="page-hero__bg">
          <div className="page-hero__gradient"></div>
        </div>
        <div className="container">
          <span className="section-label">Careers at Optivox</span>
          <h1 className="page-hero__title">
            Join Our Global <br />
            <span className="text-gold">Agent Network</span>
          </h1>
          <p className="page-hero__subtitle">
            Are you a skilled professional looking for international projects? We connect top talent
            with premium companies worldwide. Discover your next opportunity.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section" id="benefits">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Join Us</span>
            <h2 className="section-title">Designed for Vetted Professionals</h2>
            <p className="section-subtitle">
              We empower our agents with modern tools, flexible structures, and rewarding projects.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card card">
                <div className="card-icon">{b.icon}</div>
                <h3 className="card-title">{b.title}</h3>
                <p className="card-description">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="section positions-section" id="jobs">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Open Roles</span>
            <h2 className="section-title">Current Opportunities</h2>
          </div>

          {/* Categories Filter */}
          <div className="careers-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'filter-btn--active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Positions List */}
          <div className="positions-list">
            {filteredPositions.map((pos, i) => (
              <div key={i} className="position-item" id={`job-${i}`}>
                <div className="position-item__header">
                  <div>
                    <h3 className="position-item__title">{pos.title}</h3>
                    <div className="position-item__meta">
                      <span className="position-meta-tag">
                        <Briefcase size={14} /> {pos.category}
                      </span>
                      <span className="position-meta-tag">
                        <MapPin size={14} /> {pos.location}
                      </span>
                      <span className="position-meta-tag">
                        <Clock size={14} /> {pos.type}
                      </span>
                    </div>
                  </div>
                  <div className="position-item__salary">{pos.salary}</div>
                </div>
                <p className="position-item__desc">{pos.desc}</p>
                <a href="#apply-form" className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                  Apply Now <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section apply-section" id="apply-form">
        <div className="container">
          <div className="apply-box">
            {/* Spinning background watermark logo */}
            <div className="cta-vortex-bg">
              <OptivoxLogo variant="gold" spinning={true} holeFill="transparent" />
            </div>

            <div className="apply-box__header" style={{ position: 'relative', zIndex: 1 }}>
              <span className="section-label">Apply Now</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>
                Start Your Application
              </h2>
              <p className="apply-subtitle text-secondary">
                Submit your details to join the Optivox talent pool. Our staffing agents will review your profile
                within 48 hours.
              </p>
            </div>

            {submitted ? (
              <div className="apply-success">
                <h3>🎉 Application Received!</h3>
                <p className="text-secondary" style={{ marginTop: '10px' }}>
                  Thank you for applying to Optivox Group. Our talent acquisition team will review your application
                  and reach out via email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="apply-form-element">
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="role">Preferred Domain</label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option>IT Support & Systems</option>
                      <option>Customer Service & CSR</option>
                      <option>Interpretation Services</option>
                      <option>AI Training Projects</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="resume">Resume/Portfolio Link</label>
                    <input
                      type="url"
                      id="resume"
                      required
                      placeholder="https://linkedin.com/in/username"
                      value={formData.resumeUrl}
                      onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="coverLetter">Why do you want to join Optivox?</label>
                  <textarea
                    id="coverLetter"
                    rows="5"
                    placeholder="Briefly describe your experience and skills..."
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  />
                </div>

                {error && <p className="form-error">{error}</p>}
                <button
                  type="submit"
                  className="btn btn-primary btn-large"
                  style={{ width: '100%' }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
