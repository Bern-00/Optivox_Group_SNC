import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Target,
  Eye,
  Heart,
  Globe,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Handshake,
  Sparkles,
} from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { useTheme } from '../context/ThemeContext'
import OptivoxLogo from '../components/OptivoxLogo'
import IntroLoader from '../components/IntroLoader'
import './About.css'

const values = [
  {
    icon: <Lightbulb size={28} />,
    title: 'Innovation',
    desc: 'We continuously evolve our approach to talent management, leveraging cutting-edge technology and methodologies.',
  },
  {
    icon: <Heart size={28} />,
    title: 'Integrity',
    desc: 'Transparency and honesty form the foundation of every relationship we build with clients and talent alike.',
  },
  {
    icon: <Sparkles size={28} />,
    title: 'Excellence',
    desc: 'We hold ourselves and our teams to the highest standards, delivering nothing less than exceptional results.',
  },
  {
    icon: <Handshake size={28} />,
    title: 'Partnership',
    desc: 'We believe in building long-term partnerships, not just transactions. Your success is our success.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Diversity',
    desc: 'We celebrate and leverage global diversity, creating inclusive teams that bring unique perspectives.',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Growth',
    desc: 'We invest in the continuous development of our talent, ensuring they grow alongside your business.',
  },
]

const team = [
  { name: 'Alexandre Dubois', role: 'Founder & CEO', initial: 'AD' },
  { name: 'Fatima Al-Rashid', role: 'VP of Operations', initial: 'FA' },
  { name: 'James Okonkwo', role: 'Head of IT Staffing', initial: 'JO' },
  { name: 'Mei Lin Chen', role: 'Director of AI Training', initial: 'MC' },
]

const milestones = [
  { year: '2019', title: 'Founded', desc: 'Optivox Group established with a vision to connect global talent.' },
  { year: '2020', title: 'First 100 Agents', desc: 'Reached our first milestone of 100 active professionals worldwide.' },
  { year: '2021', title: 'AI Training Division', desc: 'Launched specialized AI data training and RLHF services.' },
  { year: '2022', title: 'Global Expansion', desc: 'Expanded operations to 20+ countries across 4 continents.' },
  { year: '2023', title: '500+ Agents', desc: 'Grew our talent network to over 500 vetted professionals.' },
  { year: '2024', title: 'Industry Recognition', desc: 'Named among top emerging staffing companies globally.' },
]

export default function About() {
  const { theme } = useTheme()
  const [missionRef, missionInView] = useInView()
  const [valuesRef, valuesInView] = useInView()
  const [teamRef, teamInView] = useInView()
  const [timelineRef, timelineInView] = useInView()

  return (
    <div className="about-page">
      <IntroLoader />
      {/* Page Hero */}
      <section className="page-hero" id="about-hero">
        <div className="page-hero__bg">
          <div className="page-hero__gradient"></div>
        </div>
        <div className="container">
          <span className="section-label">About Us</span>
          <h1 className="page-hero__title">
            The People Behind <br />
            <span className="text-gold">the Talent</span>
          </h1>
          <p className="page-hero__subtitle">
            Founded on the belief that exceptional talent exists everywhere,
            we bridge the gap between global professionals and international
            enterprises seeking excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section about-mission" id="mission" ref={missionRef}>
        <div className="container">
          <div className={`mission-grid ${missionInView ? 'mission-grid--visible' : ''}`}>
            <div className="mission-card">
              <div className="mission-card__icon">
                <Target size={32} />
              </div>
              <h2 className="mission-card__title">Our Mission</h2>
              <p className="mission-card__text">
                To empower global enterprises by connecting them with
                exceptional talent, enabling seamless business operations
                across borders, and fostering professional growth for our
                agents worldwide.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card__icon">
                <Eye size={32} />
              </div>
              <h2 className="mission-card__title">Our Vision</h2>
              <p className="mission-card__text">
                To become the world's most trusted talent outsourcing
                partner, recognized for our commitment to quality, innovation,
                and the transformative power of connecting the right people
                with the right opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section about-story" id="our-story">
        <div className="container">
          <div className="story-layout">
            <div className="story-content">
              <span className="section-label">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Born from a Vision,<br />
                <span className="text-gold">Built with Purpose</span>
              </h2>
              <p className="story-text">
                Optivox Group was founded with a singular belief: that exceptional
                talent shouldn't be limited by geography. In an increasingly
                connected world, we saw an opportunity to bridge the gap between
                skilled professionals in emerging markets and international
                companies seeking quality, reliability, and scale.
              </p>
              <p className="story-text">
                From our earliest days with a small team of dedicated agents, we've
                grown into a global operation spanning 30+ countries. Our journey
                has been fueled by an unwavering commitment to quality, a deep
                understanding of our clients' needs, and genuine care for our
                talent community.
              </p>
              <p className="story-text">
                Today, we serve as the strategic talent partner for companies
                across IT, customer service, interpretation, and AI — and we're
                just getting started.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-visual__card">
                <img
                  src={theme === 'light' ? '/images/logo-light.png' : '/images/logo-dark.png'}
                  alt="Optivox Group Logo"
                  className="story-visual__logo"
                />
                <div className="story-visual__text">
                  <span className="text-gold">Connecting Talent.</span>
                  <br />Powering Future.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values" id="values" ref={valuesRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us Forward</h2>
            <p className="section-subtitle">
              Our core values shape every decision, every hire, and every client relationship.
            </p>
          </div>

          <div className={`values-grid ${valuesInView ? 'values-grid--visible' : ''}`}>
            {values.map((v, i) => (
              <div key={i} className="value-card card" id={`value-card-${i}`}>
                <div className="card-icon">{v.icon}</div>
                <h3 className="card-title">{v.title}</h3>
                <p className="card-description">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline" id="timeline" ref={timelineRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones That Define Us</h2>
          </div>

          <div className={`timeline ${timelineInView ? 'timeline--visible' : ''}`}>
            <div className="timeline__line"></div>
            {milestones.map((m, i) => (
              <div key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
                <div className="timeline__dot"></div>
                <div className="timeline__card">
                  <span className="timeline__year">{m.year}</span>
                  <h3 className="timeline__title">{m.title}</h3>
                  <p className="timeline__desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section about-team" id="team" ref={teamRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">
              Experienced leaders dedicated to connecting talent with global opportunities.
            </p>
          </div>

          <div className={`team-grid ${teamInView ? 'team-grid--visible' : ''}`}>
            {team.map((member, i) => (
              <div key={i} className="team-card" id={`team-member-${i}`}>
                <div className="team-card__avatar">
                  <span>{member.initial}</span>
                </div>
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta" id="about-cta-section">
        <div className="container">
          <div className="about-cta__box">
            {/* Spinning background watermark logo */}
            <div className="cta-vortex-bg">
              <OptivoxLogo variant="gold" spinning={true} holeFill="transparent" />
            </div>
            
            <h2 className="about-cta__title" style={{ position: 'relative', zIndex: 1 }}>Ready to Join Our Journey?</h2>
            <p className="about-cta__text" style={{ position: 'relative', zIndex: 1 }}>
              Whether you're a company seeking exceptional talent or a professional
              looking for international opportunities, we'd love to hear from you.
            </p>
            <div className="about-cta__actions" style={{ position: 'relative', zIndex: 1 }}>
              <Link to="/contact" className="btn btn-primary btn-large" id="about-contact-cta">
                Get in Touch <ArrowUpRight size={18} />
              </Link>
              <Link to="/careers" className="btn btn-secondary btn-large" id="about-careers-cta">
                View Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
