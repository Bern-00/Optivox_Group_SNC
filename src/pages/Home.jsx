import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Monitor,
  Headphones,
  Languages,
  Brain,
  Globe,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  CheckCircle,
  ChevronRight,
  Star,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import IntroLoader from '../components/IntroLoader'
import InteractiveLogoAperture from '../components/InteractiveLogoAperture'
import './Home.css'

/* Positions fixes pour les particules Hero — evite le re-render aleatoire */
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 17 + 5) % 100}%`,
  top: `${(i * 23 + 10) % 100}%`,
  delay: `${(i * 0.4) % 5}s`,
  duration: `${3 + (i * 0.35) % 4}s`,
}))

/* Animated counter */
function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView()

  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const services = [
  {
    icon: <Monitor size={28} />,
    title: 'IT Support & SysAdmin',
    description: 'Expert system administrators and IT support specialists ready to maintain, optimize, and secure your infrastructure 24/7.',
    link: '/services',
  },
  {
    icon: <Headphones size={28} />,
    title: 'Customer Service',
    description: 'Professional CSR agents delivering exceptional customer experiences across all channels — voice, chat, email, and social.',
    link: '/services',
  },
  {
    icon: <Languages size={28} />,
    title: 'Interpretation',
    description: 'Certified multilingual interpreters bridging communication gaps for global businesses in real-time and scheduled sessions.',
    link: '/services',
  },
  {
    icon: <Brain size={28} />,
    title: 'AI Training',
    description: 'Skilled annotators and trainers powering the next generation of AI models with high-quality data labeling and RLHF.',
    link: '/services',
  },
]

const stats = [
  { value: 500, suffix: '+', label: 'Active Agents' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 30, suffix: '+', label: 'Countries Served' },
  { value: 24, suffix: '/7', label: 'Support Coverage' },
]

const whyUs = [
  {
    icon: <Globe size={24} />,
    title: 'Global Talent Pool',
    desc: 'Access to top-tier professionals across 30+ countries, vetted and ready to deliver.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Rapid Deployment',
    desc: 'Teams assembled and operational within 48 hours of contract signature.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Quality Guaranteed',
    desc: 'Rigorous screening processes and ongoing quality assurance monitoring.',
  },
  {
    icon: <Clock size={24} />,
    title: '24/7 Operations',
    desc: 'Round-the-clock coverage across time zones for uninterrupted service.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Scalable Solutions',
    desc: 'Flexible team sizes that scale with your business needs, up or down.',
  },
  {
    icon: <Award size={24} />,
    title: 'Certified Experts',
    desc: 'Industry-certified professionals with proven track records of excellence.',
  },
]

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, TechVantage Inc.',
    text: 'Optivox transformed our IT operations. Their sys admins integrated seamlessly and our downtime dropped by 85%. Truly exceptional service.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'VP Operations, GlobalReach',
    text: 'The CSR team from Optivox exceeded every KPI we set. Customer satisfaction scores are at an all-time high. Outstanding partner.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Director, AI Solutions Lab',
    text: 'Their AI training specialists delivered incredible data quality. Our model accuracy improved significantly. Highly recommended.',
    rating: 5,
  },
]

const trustedLogos = [
  'TechVantage', 'GlobalReach', 'NexGen AI', 'CloudScale', 'DataPrime', 'InnovateCo',
]

export default function Home() {
  const [heroRef, heroInView] = useInView()
  const [servicesRef, servicesInView] = useInView()
  const [whyRef, whyInView] = useInView()
  const [testimonialRef, testimonialInView] = useInView()
  const [processRef, processInView] = useInView()

  return (
    <div className="home">
      <IntroLoader />
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        {/* Background Effects */}
        <div className="hero__bg">
          <div className="hero__gradient-orb hero__gradient-orb--1"></div>
          <div className="hero__gradient-orb hero__gradient-orb--2"></div>
          <div className="hero__grid-overlay"></div>
          <div className="hero__particles">
            {PARTICLES.map((p, i) => (
              <div
                key={i}
                className="hero__particle"
                style={{
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container hero__container" ref={heroRef}>
          <div className={`hero__content ${heroInView ? 'hero__content--visible' : ''}`}>
            <span className="hero__badge">
              <span className="hero__badge-dot"></span>
              Trusted by 30+ International Companies
            </span>

            <h1 className="hero__title">
              <span className="hero__title-line">Connecting</span>
              <span className="hero__title-line">
                <span className="text-gold">Talent.</span>
              </span>
              <span className="hero__title-line">
                Powering <span className="text-gold">Future.</span>
              </span>
            </h1>

            <p className="hero__subtitle">
              Premier international talent outsourcing and staffing solutions.
              We connect exceptional professionals with global enterprises,
              delivering excellence in IT, Customer Service, Interpretation, and AI.
            </p>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn-primary btn-large" id="hero-cta-primary">
                Start Your Project <ArrowUpRight size={18} />
              </Link>
              <Link to="/services" className="btn btn-secondary btn-large" id="hero-cta-secondary">
                Explore Services
              </Link>
            </div>

            {/* Trusted By */}
            <div className="hero__trusted">
              <span className="hero__trusted-label">Trusted by leading companies</span>
              <div className="hero__trusted-logos">
                {trustedLogos.map((name) => (
                  <div key={name} className="hero__trusted-logo">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`hero__visual ${heroInView ? 'hero__visual--visible' : ''}`}>
            <InteractiveLogoAperture />
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="stats-section" id="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-value">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section services-section" id="services-preview" ref={servicesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive talent solutions tailored to power your business operations globally.
            </p>
          </div>

          <div className={`services-grid ${servicesInView ? 'services-grid--visible' : ''}`}>
            {services.map((service, i) => (
              <Link to={service.link} key={i} className="service-card card" id={`service-card-${i}`}>
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                <span className="service-card__link">
                  Learn More <ChevronRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-section" id="why-us" ref={whyRef}>
        <div className="why-section__bg"></div>
        <div className="container">
          <div className="why-section__layout">
            <div className={`why-section__left ${whyInView ? 'why-section__left--visible' : ''}`}>
              <span className="section-label">Why Optivox</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Your Strategic Partner for
                <span className="text-gold"> Global Talent</span>
              </h2>
              <p className="why-section__text">
                We don&apos;t just fill positions — we build dedicated teams of
                exceptional professionals who become an extension of your
                organization. Our rigorous vetting process ensures only the
                top 5% of candidates join our network.
              </p>
              <div className="why-section__highlights">
                <div className="why-section__highlight">
                  <CheckCircle size={20} className="why-section__check" />
                  <span>Top 5% talent, rigorously vetted</span>
                </div>
                <div className="why-section__highlight">
                  <CheckCircle size={20} className="why-section__check" />
                  <span>Dedicated account management</span>
                </div>
                <div className="why-section__highlight">
                  <CheckCircle size={20} className="why-section__check" />
                  <span>Flexible engagement models</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary" id="why-cta">
                Discover Our Story <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className={`why-section__right ${whyInView ? 'why-section__right--visible' : ''}`}>
              <div className="why-grid">
                {whyUs.map((item, i) => (
                  <div key={i} className="why-card" id={`why-card-${i}`}>
                    <div className="why-card__icon">{item.icon}</div>
                    <h4 className="why-card__title">{item.title}</h4>
                    <p className="why-card__desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section" id="testimonials" ref={testimonialRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Client Stories</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Hear from the businesses we've helped transform through exceptional talent.
            </p>
          </div>

          <div className={`testimonials-grid ${testimonialInView ? 'testimonials-grid--visible' : ''}`}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" id={`testimonial-${i}`}>
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="section process-section" id="process" ref={processRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Simple. Fast. Effective.</h2>
            <p className="section-subtitle">
              From first contact to deployed team — our streamlined process gets you up and running quickly.
            </p>
          </div>

          <div className={`process-steps ${processInView ? 'process-steps--visible' : ''}`}>
            {[
              { num: '01', title: 'Consultation', desc: 'We understand your needs, goals, and technical requirements.' },
              { num: '02', title: 'Talent Matching', desc: 'We select and vet the best candidates from our global network.' },
              { num: '03', title: 'Onboarding', desc: 'Seamless integration with your team, tools, and workflows.' },
              { num: '04', title: 'Delivery', desc: 'Ongoing performance management and quality assurance.' },
            ].map((step, i) => (
              <div key={i} className="process-step" id={`process-step-${i}`}>
                <div className="process-step__num">{step.num}</div>
                <div className="process-step__connector"></div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
