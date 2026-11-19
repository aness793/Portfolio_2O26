import { useState } from 'react'
import './about.css'
import { useTranslation } from 'react-i18next'
// The English strings are the translation keys: they must match portfolio/i18n.js exactly.
// A row has a label plus either title/sub (bold line + muted line) or plain text.
const tabs = {
  Education: [
    { label: "Master's", title: "Telecommunication Systems", sub: "Université Djilali Bounaama, Khemis Miliana" },
    { label: "Bachelor's", title: "Electrical Engineering",sub: "Université Djilali Bounaama, Khemis Miliana" },
  { label: "Thesis", title: "Acccident detection and severity estimation using Deep Learning models", sub: "Graded 19.75/20" },
  ],
  Experience: [
    { label: "2022 to now", title: "Freelance developer", sub: "Full-stack development" },
    { label: "Dec 2025 - Mar 2026", title: "Algérie Télécom - Network Engineering Intern", sub: "Transmission department, Khemis Miliana" },
    { label: "Dec 2022- Jan 2023", title: "SPRK", sub: "Société des Produits Rouges" },
  ],
  Skills: [
    { label: "Frontend", text: " React, Next.js, Angular, TypeScript, JavaScript, Tailwind, Vite. " },
    { label: "Backend", text: " Python, FastAPI, Pydantic, Node.js, Express.js, REST APIs." },
    { label: "Machine learning", text: " PyTorch, computer vision, R3D-18, SlowFast R50, Video Swin Transformer, quantization and pruning." },
    { label: "Telecom", text: "MATLAB, Simulink, Cisco Packet Tracer, ATOLL, Python, Git, COFDM, LDPC channel coding, image, video and audio processing." },
  ],
  "Personal info": [
    { label: "Based in", text: "Khemis Miliana, Algeria" },
    { label: "Open to", text: "Web development and networking roles" },
    { label: "Relocation", text: "Yes, ready to move" },
    { label: "Interests", text: "Anything IT-related" },
  ],
}

const names = Object.keys(tabs)

export default function About() {
  const { t } = useTranslation()
  const [active, setActive] = useState(names[0])
  const activeIndex = names.indexOf(active)

  function onKeyDown(e) {
    let next
    if (e.key === 'ArrowRight') next = (activeIndex + 1) % names.length
    else if (e.key === 'ArrowLeft') next = (activeIndex - 1 + names.length) % names.length
    else return
    e.preventDefault()
    setActive(names[next])
    document.getElementById(`about-tab-${next}`)?.focus()
  }

  return (
    <section id="About" className="about-container">
      <h1>{t('About')}</h1>

      <div className="about-tabs" role="tablist" onKeyDown={onKeyDown}>
        {names.map((name, i) => (
          <button
            key={name}
            id={`about-tab-${i}`}
            role="tab"
            aria-selected={active === name}
            aria-controls="about-panel"
            tabIndex={active === name ? 0 : -1}
            onClick={() => setActive(name)}
          >
            {t(name)}
          </button>
        ))}
      </div>

      <div
        id="about-panel"
        className="about-panel"
        role="tabpanel"
        aria-labelledby={`about-tab-${activeIndex}`}
      >
        <dl className="about-rows">
          {tabs[active].map((row, i) => (
            <div className="about-row" key={`${row.label}-${i}`}>
              <dt>{t(row.label)}</dt>
              <dd>
                {row.text ? (
                  t(row.text)
                ) : (
                  <>
                    <b>{t(row.title)}</b>
                    {row.sub && <span>{t(row.sub)}</span>}
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}