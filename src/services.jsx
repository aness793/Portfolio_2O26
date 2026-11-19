import "./services.css"
import { useLang } from "./LanguageContext"

export default function Services() {
  const { t } = useLang()

  const services = [
    { title: t.services.frontend, tags: ["Angular", "React", "Next js"] },
    { title: t.services.backend, tags: ["Express", "FastAPI", "Hapi"] },
    { title: t.services.fullstack, tags: ["PERN", "MERN", "MEAN"] },
    { title: t.services.ml, tags: t.services.mlTags },
  ]

  return (
    <div id="services" className="services-container">
      <h1> <hr /> {t.services.title} <hr /> </h1>
      <div className="service-container">
        {services.map((s) => (
          <div className="service" key={s.title}>
            <div className="service-left">
              <h4 className="service-title">{s.title}</h4>
            </div>
            <div className="service-right">
              {s.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
