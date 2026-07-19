import './Legal.css'

export default function Privacy() {
  return (
    <div className="legal-page">
      <div className="container">
        <span className="section-label">Legal</span>
        <h1 className="section-title" style={{ textAlign: 'left' }}>
          Privacy <span className="text-gold">Policy</span>
        </h1>
        <p className="legal-page__updated">Last updated: —</p>
        <div className="legal-page__placeholder">
          <p>
            <strong>Content pending.</strong> This page is a placeholder awaiting the final
            privacy policy text from Optivox Group and/or legal counsel — covering what data is
            collected (contact forms, job applications), how it is used, third-party services
            involved (EmailJS, analytics), retention, and user rights.
          </p>
        </div>
      </div>
    </div>
  )
}
