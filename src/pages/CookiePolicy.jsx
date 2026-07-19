import './Legal.css'

export default function CookiePolicy() {
  return (
    <div className="legal-page">
      <div className="container">
        <span className="section-label">Legal</span>
        <h1 className="section-title" style={{ textAlign: 'left' }}>
          Cookie <span className="text-gold">Policy</span>
        </h1>
        <p className="legal-page__updated">Last updated: —</p>
        <div className="legal-page__placeholder">
          <p>
            <strong>Content pending.</strong> This page is a placeholder awaiting the final
            cookie policy text from Optivox Group and/or legal counsel — covering the theme
            preference (localStorage), any analytics/chat cookies once enabled, and consent
            requirements for the target markets.
          </p>
        </div>
      </div>
    </div>
  )
}
