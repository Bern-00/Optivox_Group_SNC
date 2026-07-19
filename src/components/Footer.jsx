import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon } from './SocialIcons'
import { useTheme } from '../context/useTheme'
import { SOCIAL_LINKS } from '../config/site'
import './Footer.css'

const socialIcons = [
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon },
  { key: 'twitter', label: 'Twitter', Icon: TwitterIcon },
  { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
  { key: 'instagram', label: 'Instagram', Icon: InstagramIcon },
]

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
]

const services = [
  'IT Support & SysAdmin',
  'Customer Service / CSR',
  'Interpretation Services',
  'AI Training Projects',
  'Technical Staffing',
  'Remote Workforce',
]

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer className="footer" id="footer">
      <div className="footer__glow"></div>
      <div className="container">
        {/* CTA Banner */}
        <div className="footer__cta-banner">
          <div className="footer__cta-content">
            <h2 className="footer__cta-title">Ready to Power Your Future?</h2>
            <p className="footer__cta-text">
              Let us connect you with exceptional talent to drive your business forward.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-large" id="footer-cta">
            Start a Conversation <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Footer Grid */}
        <div className="footer__grid">
          {/* Brand Column */}
          <div className="footer__brand">
            <img
              src={theme === 'light' ? '/images/logo-light.png' : '/images/logo-dark.png'}
              alt="Optivox Group"
              className="footer__logo"
            />
            <p className="footer__tagline">Connecting Talent. Powering Future.</p>
            <p className="footer__description">
              Premier international talent outsourcing and staffing solutions,
              connecting skilled professionals with global opportunities.
            </p>
            <div className="footer__socials">
              {socialIcons.map(({ key, label, Icon }) => SOCIAL_LINKS[key] && (
                <a
                  key={key}
                  href={SOCIAL_LINKS[key]}
                  className="footer__social-link"
                  aria-label={label}
                  id={`social-${key}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h3 className="footer__column-title">Quick Links</h3>
            <ul className="footer__column-list">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__column-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__column">
            <h3 className="footer__column-title">Our Services</h3>
            <ul className="footer__column-list">
              {services.map((service) => (
                <li key={service}>
                  <span className="footer__column-link">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__column">
            <h3 className="footer__column-title">Get In Touch</h3>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <Mail size={16} className="footer__contact-icon" />
                <a href="mailto:contact@optivoxgroup.com">contact@optivoxgroup.com</a>
              </li>
              <li className="footer__contact-item">
                <Phone size={16} className="footer__contact-icon" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="footer__contact-item">
                <MapPin size={16} className="footer__contact-icon" />
                <span>Global Operations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Optivox Group. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy" className="footer__bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="footer__bottom-link">Terms of Service</Link>
            <Link to="/cookie-policy" className="footer__bottom-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
