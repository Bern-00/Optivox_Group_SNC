import { Link } from 'react-router-dom'
import {
  Laptop,
  ShoppingBag,
  Stethoscope,
  Briefcase,
  BrainCircuit,
  Globe,
  ArrowUpRight,
  ShieldAlert,
  Database,
  ArrowRight,
} from 'lucide-react'
import { useInView } from '../hooks/useInView'
import './Industries.css'

const industries = [
  {
    icon: <Laptop size={32} />,
    title: 'Technology & SaaS',
    desc: 'Power your tech platforms with expert System Administrators, multi-tier tech support, and developers who integrate seamlessly with your core engineering teams.',
    caseStudy: 'Reduced infrastructure downtime by 85% for a leading global cloud provider.',
  },
  {
    icon: <ShoppingBag size={32} />,
    title: 'E-Commerce & Retail',
    desc: 'Scale your online business operations with 24/7 customer service, multi-channel support (chat, email, call centers), and multilingual specialists.',
    caseStudy: 'Handled over 50,000+ holiday support tickets with a 98% CSAT rating.',
  },
  {
    icon: <BrainCircuit size={32} />,
    title: 'AI & Research Labs',
    desc: 'Supply high-quality human intelligence, prompt engineering feedback, content annotation, and RLHF to build smarter and safer AI models.',
    caseStudy: 'Vetted team of 150+ annotators delivered 1.2M+ high-accuracy annotations.',
  },
  {
    icon: <Stethoscope size={32} />,
    title: 'Healthcare & Biotech',
    desc: 'Bridge communication gaps with certified medical interpreters and maintain compliant customer support systems designed for sensitive patient data.',
    caseStudy: 'Compliant live-interpretation support across 30+ medical clinics.',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Professional & Legal Services',
    desc: 'On-demand court and business document translation, real-time simultaneous video interpreters, and specialized paralegal support.',
    caseStudy: 'Facilitated 400+ international arbitration proceedings with zero errors.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Logistics & Supply Chain',
    desc: 'Deliver round-the-clock coordination, multi-lingual dispatch coordination, and customer shipping support to ensure zero supply disruptions.',
    caseStudy: 'Enabled seamless 24/7 route tracking for an international carrier.',
  },
]

export default function Industries() {
  const [gridRef, gridInView] = useInView()

  return (
    <div className="industries-page">
      {/* Page Hero */}
      <section className="page-hero" id="industries-hero">
        <div className="page-hero__bg">
          <div className="page-hero__gradient"></div>
        </div>
        <div className="container">
          <span className="section-label">Industries We Serve</span>
          <h1 className="page-hero__title">
            Tailored Solutions for <br />
            <span className="text-gold">Every Sector</span>
          </h1>
          <p className="page-hero__subtitle">
            We understand that each industry has unique requirements. Our teams bring specialized
            domain expertise to elevate your operational efficiency.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section industries-grid-section" id="industries-grid" ref={gridRef}>
        <div className="container">
          <div className={`ind-grid ${gridInView ? 'ind-grid--visible' : ''}`}>
            {industries.map((ind, i) => (
              <div key={i} className="ind-card card" id={`ind-card-${i}`}>
                <div className="card-icon">{ind.icon}</div>
                <h3 className="card-title">{ind.title}</h3>
                <p className="card-description">{ind.desc}</p>
                <div className="ind-card__divider"></div>
                <div className="ind-card__case">
                  <span className="ind-card__case-label">Impact Metric:</span>
                  <p className="ind-card__case-text">{ind.caseStudy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="section compliance-section" id="compliance">
        <div className="container">
          <div className="compliance-box">
            <div className="compliance-box__content">
              <span className="section-label">Trust & Security</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
                Secure, Compliant & <br />
                <span className="text-gold">Globally Vetted</span>
              </h2>
              <p className="compliance-text">
                Security and data privacy are non-negotiable. Optivox Group maintains the highest
                industry compliance standards to ensure your corporate, customer, and intellectual
                data remains fully protected at all times.
              </p>
              <div className="compliance-badges">
                <div className="compliance-badge">
                  <ShieldAlert size={20} className="compliance-badge__icon" />
                  <span>ISO 27001 Ready</span>
                </div>
                <div className="compliance-badge">
                  <Database size={20} className="compliance-badge__icon" />
                  <span>GDPR Compliant Operations</span>
                </div>
              </div>
            </div>
            <div className="compliance-box__visual">
              <div className="compliance-orb">
                <div className="compliance-orb__glow"></div>
                <div className="compliance-orb__icon">🔒</div>
                <div className="compliance-orb__tag">DATA SHIELD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section industries-cta" id="ind-cta">
        <div className="container">
          <div className="about-cta__box">
            <h2 className="about-cta__title">Ready to Elevate Your Business Operations?</h2>
            <p className="about-cta__text">
              Speak with our industry strategists to assemble the perfect team tailored for your domain.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large" id="industries-contact-cta">
              Schedule Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
