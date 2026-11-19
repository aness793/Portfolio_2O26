import './contact.css'
import { useTranslation } from 'react-i18next'
// The English strings are the translation keys: they must match portfolio/i18n.js exactly.

// One source of truth, so the visible text and the mailto link can never differ again.
const EMAIL = 'd.rahmanianess@gmail.com'

const links = [
  { label: 'GitHub', href: 'https://github.com/aness793' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aness-rahmani-1bb2a424b/' },
  // Replace YOUR_USERNAME with your Telegram username (Settings > Username).
  { label: 'Telegram', href: 'https://t.me/YOUR_USERNAME' },
  { label: 'WhatsApp', href: 'https://wa.me/213669231386' },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="contact-container">
      <div className="contact-main">
        <p className="contact-lead">{t('Scrolled this far? Say hi.')}</p>

        <a className="contact-email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>

        <ul className="contact-links">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label} <span aria-hidden="true">&#8599;</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-bar">
        <span>{t('Khemis Miliana, Algeria')}</span>
        <span>&copy; {new Date().getFullYear()} Aness Rahmani</span>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {t('Back to top')} <span aria-hidden="true">&#8593;</span>
        </button>
      </div>
    </footer>
  )
}