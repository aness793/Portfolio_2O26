import './projects.css'
import { useTranslation } from 'react-i18next'

function ExternalIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"/></svg>
  )
}

// Fill in `stack` for Harbor Log. The line is hidden when it is missing.
const otherProjects = [
  {
    name: 'Aness Shop',
    href: 'https://shop-pi-ten-72.vercel.app/',
    img: 'ecom.png',
    desc: 'Online shop with cash on delivery across all 69 wilayas.',
    stack: 'Next.js, Supabase',
  },
  {
    name: 'Harbor Log',
    href: 'https://github.com/aness793/harbor_log',
    img: 'harbor.png',
    desc: 'Fish catch log with photo, species, location, weight and condition. Import and export in CSV and JSON.',
  },
]

export default function Projects() {
  const { t } = useTranslation()

  return (
    <div id="projects" className="projects-container">
      <section className="projects-block">
        <h2>{t('Featured Project')}</h2>
        <div className="featured">
          <div className="featured-image">
            <img src="platform.png" alt="AcciSense platform screenshot" loading="lazy" />
          </div>
          <div className="featured-info">
            <h3>AcciSense</h3>
            <p>
              {t('A platform that detects road accidents in video and estimates how severe they are. Three video models (R3D-18, SlowFast, Video Swin) classify each clip as no accident, minor, moderate or major.')}
            </p>
            <div className="project-links">
              <a href="https://accsense-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
                {t('Platform')} <ExternalIcon />
              </a>
              <a href="https://github.com/aness793/accsense-frontend" target="_blank" rel="noopener noreferrer">
                {t('Github')} <ExternalIcon />
              </a>
              <a
                href="https://www.researchgate.net/publication/409261025_Unified_Dual-Head_Video_Swin_Transformer_for_Simultaneous_Road_Accident_Detection_and_Severity_Estimation_from_Surveillance_Video"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('Article')} <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-block">
        <h2>{t('Other Projects')}</h2>
        <div className="other-grid">
          {otherProjects.map((p) => (
            <a className="project-card" href={p.href} target="_blank" rel="noopener noreferrer" key={p.name}>
              <img src={p.img} alt={`${p.name} screenshot`} loading="lazy" />
              <div className="project-card-body">
                <h3>
                  {p.name} <ExternalIcon />
                </h3>
                <p>{t(p.desc)}</p>
                {p.stack && <span className="stack">{p.stack}</span>}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}