import './Legal.css'

export default function Terms() {
  return (
    <div className="legal-page">
      <div className="container">
        <span className="section-label">Legal</span>
        <h1 className="section-title" style={{ textAlign: 'left' }}>
          Terms of <span className="text-gold">Service</span>
        </h1>
        <p className="legal-page__updated">Last updated: —</p>
        <div className="legal-page__placeholder">
          <p>
            <strong>Content pending.</strong> This page is a placeholder awaiting the final
            terms of service text from Optivox Group and/or legal counsel — covering site usage
            rules, staffing/talent placement terms, liability limitations, and applicable
            jurisdiction.
          </p>
        </div>
      </div>
    </div>
  )
}
