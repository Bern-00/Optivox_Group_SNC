import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Monitor,
  Headphones,
  Languages,
  Brain,
  Server,
  Shield,
  Clock,
  Settings,
  MessageSquare,
  PhoneCall,
  Mail,
  BarChart,
  BookOpen,
  Globe2,
  Video,
  Mic,
  Database,
  Tag,
  FileCheck,
  Bot,
  CheckCircle,
} from 'lucide-react'
import { useInView } from '../hooks/useInView'
import OptivoxLogo from '../components/OptivoxLogo'
import './Services.css'

const services = [
  {
    id: 'it-support',
    icon: <Monitor size={32} />,
    title: 'IT Support & System Administration',
    tagline: 'Keep your infrastructure running flawlessly',
    description: 'Our certified IT professionals provide comprehensive support across your entire technology stack. From first-line helpdesk to advanced system administration, we ensure your infrastructure is secure, optimized, and always available.',
    features: [
      { icon: <Server size={20} />, text: 'Server Management & Monitoring' },
      { icon: <Shield size={20} />, text: 'Cybersecurity & Threat Response' },
      { icon: <Clock size={20} />, text: '24/7 Helpdesk Support' },
      { icon: <Settings size={20} />, text: 'Cloud & Network Administration' },
    ],
    color: 'var(--color-it)',
  },
  {
    id: 'customer-service',
    icon: <Headphones size={32} />,
    title: 'Customer Service & CSR',
    tagline: 'Exceptional experiences, every interaction',
    description: 'Our trained customer service representatives become an extension of your brand. We deliver empathetic, efficient, and professional customer support across voice, chat, email, and social media channels.',
    features: [
      { icon: <PhoneCall size={20} />, text: 'Inbound & Outbound Calls' },
      { icon: <MessageSquare size={20} />, text: 'Live Chat & Messaging' },
      { icon: <Mail size={20} />, text: 'Email Support & Ticketing' },
      { icon: <BarChart size={20} />, text: 'KPI-Driven Performance' },
    ],
    color: 'var(--color-csr)',
  },
  {
    id: 'interpretation',
    icon: <Languages size={32} />,
    title: 'Interpretation Services',
    tagline: 'Breaking language barriers worldwide',
    description: 'Our network of certified interpreters covers 50+ languages, providing real-time interpretation for business meetings, conferences, legal proceedings, and healthcare settings. We bridge communication gaps so you can operate globally with confidence.',
    features: [
      { icon: <Mic size={20} />, text: 'Simultaneous Interpretation' },
      { icon: <Video size={20} />, text: 'Video Remote Interpretation' },
      { icon: <Globe2 size={20} />, text: '50+ Languages Available' },
      { icon: <BookOpen size={20} />, text: 'Industry-Specialized Interpreters' },
    ],
    color: 'var(--color-interp)',
  },
  {
    id: 'ai-training',
    icon: <Brain size={32} />,
    title: 'AI Training & Data Projects',
    tagline: 'Powering the next generation of AI',
    description: 'Our specialized teams provide high-quality data annotation, labeling, and human feedback for training AI/ML models. From RLHF to prompt engineering to multimodal annotation, we deliver the human intelligence that makes AI smarter.',
    features: [
      { icon: <Tag size={20} />, text: 'Data Labeling & Annotation' },
      { icon: <Bot size={20} />, text: 'RLHF & Model Evaluation' },
      { icon: <Database size={20} />, text: 'Dataset Curation & QA' },
      { icon: <FileCheck size={20} />, text: 'Content Moderation' },
    ],
    color: 'var(--color-ai)',
  },
]

export default function Services() {
  const [gridRef, gridInView] = useInView()

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero" id="services-hero">
        <div className="page-hero__bg">
          <div className="page-hero__gradient"></div>
        </div>
        <div className="container">
          <span className="section-label">Our Services</span>
          <h1 className="page-hero__title">
            Comprehensive <br />
            <span className="text-gold">Talent Solutions</span>
          </h1>
          <p className="page-hero__subtitle">
            From IT infrastructure to AI training, our specialized teams
            deliver excellence across every service vertical.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section services-details" id="service-details" ref={gridRef}>
        <div className="container">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`service-detail ${i % 2 !== 0 ? 'service-detail--reverse' : ''} ${gridInView ? 'service-detail--visible' : ''}`}
              id={service.id}
              style={{ '--accent-color': service.color }}
            >
              <div className="service-detail__content">
                <div className="service-detail__icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h2 className="service-detail__title">{service.title}</h2>
                <p className="service-detail__tagline">{service.tagline}</p>
                <p className="service-detail__desc">{service.description}</p>

                <div className="service-detail__features">
                  {service.features.map((f, j) => (
                    <div key={j} className="service-detail__feature">
                      <span className="service-detail__feature-icon" style={{ color: service.color }}>
                        {f.icon}
                      </span>
                      <span>{f.text}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="btn btn-primary" id={`${service.id}-cta`}>
                  Request This Service <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="service-detail__visual">
                <div className="service-detail__visual-card" style={{ borderColor: `${service.color}33` }}>
                  <div className="service-detail__visual-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <div className="service-detail__visual-checks">
                    {service.features.map((f, j) => (
                      <div key={j} className="service-detail__visual-check">
                        <CheckCircle size={16} style={{ color: service.color }} />
                        <span>{f.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section services-cta" id="services-cta-section">
        <div className="container">
          <div className="about-cta__box">
            {/* Spinning background watermark logo */}
            <div className="cta-vortex-bg">
              <OptivoxLogo variant="gold" spinning={true} holeFill="transparent" />
            </div>

            <h2 className="about-cta__title" style={{ position: 'relative', zIndex: 1 }}>Need a Custom Solution?</h2>
            <p className="about-cta__text" style={{ position: 'relative', zIndex: 1 }}>
              Every business is unique. Let us create a tailored talent solution
              that fits your specific requirements and goals.
            </p>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Link to="/contact" className="btn btn-primary btn-large" id="services-contact-cta">
                Talk to Our Experts <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
