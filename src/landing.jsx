import { useEffect, useState } from 'react'
import './landing.css'
import { useTranslation } from 'react-i18next'

// Set this to your new portrait once you have it, e.g. '/aness.png' (file in /public).
// While it is null the hero is text-only, so nothing breaks.
const HERO_PHOTO = `${import.meta.env.BASE_URL}aness.jpg`

function DownloadIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
  )
}

// CV labels are intentionally NOT translated: each one names the language of the file.
const cvs = [
  {
    label: 'Full-Stack Developer - English',
    href: 'Resume_Aness_Rahmani_Frontend_Developer.pdf',
    download: 'Aness_Rahmani_Dev_En.pdf',
  },
  {
    label: 'Telecom & Networking - English',
    href: 'aness_rahmani_telecom_en.pdf',
    download: 'Aness_Rahmani_Telecom_En.pdf',
  },
  {
    label: 'Développeur Full-Stack - Français',
    href: 'aness_Rahmani_Dev_fr.pdf',
    download: 'Aness_Rahmani_Dev_Fr.pdf',
  },
  {
    label: 'Télécoms et Réseaux - Français',
    href: 'aness_rahmani_telecom_fr.pdf',
    download: 'Aness_Rahmani_Telecom_Fr.pdf',
  },
]

export default function Landing() {
  const [showCv, setShowCv] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (!showCv) return
    const onKey = (e) => e.key === 'Escape' && setShowCv(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showCv])

  return (
    <section className={`landing${HERO_PHOTO ? ' has-photo' : ''}`}>
      <div className="landing-text">
        <h1>
          <span className="title-lead">{t('Full-Stack Developer')}</span>
          <span className="title-sub">{t('Telecommunication & Networking')}</span>
        </h1>

        <p className="landing-info">
          {t('Real projects below. Fewer bugs than my first commit.')}
        </p>

        <div className="landing-buttons">
          <a className="btn-primary" href="#projects">
            {t('Projects')} <ArrowIcon />
          </a>
          <button type="button" className="btn-link" onClick={() => setShowCv(true)}>
            {t('Download CV')} <DownloadIcon />
          </button>
        </div>
      </div>

      {HERO_PHOTO && (
        <div className="landing-photo">
          <img src={HERO_PHOTO} alt="Aness Rahmani" width="800" height="1000" fetchPriority="high" />
        </div>
      )}

      {showCv && (
        <div className="cv-overlay" onClick={() => setShowCv(false)}>
          <div
            className="cv-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={t('Download CV')}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="cv-close"
              aria-label={t('Close')}
              onClick={() => setShowCv(false)}
            >
              &times;
            </button>
            <ul>
              {cvs.map((cv) => (
                <li key={cv.href}>
                  <a href={cv.href} download={cv.download}>
                    <span>{cv.label}</span>
                    <DownloadIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}