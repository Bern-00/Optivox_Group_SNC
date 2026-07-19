import { Link } from 'react-router-dom'
import { ArrowUpRight, Home } from 'lucide-react'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__bg">
        <div className="notfound__glow"></div>
      </div>
      <div className="notfound__content">
        <span className="section-label">Error 404</span>
        <h1 className="notfound__title">
          Page <span className="text-gold">Not Found</span>
        </h1>
        <p className="notfound__subtitle">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="btn btn-primary btn-large">
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-large">
            <ArrowUpRight size={18} /> Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
