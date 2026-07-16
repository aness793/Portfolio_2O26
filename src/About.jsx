import './about.css'
export default function About() {
  return (
    <div id='About' className='about-container' >
          <h1> <hr /> About <hr /> </h1>
          <div className="cards-container">
              <div className="about-card">
              <h4>
                  Education
              </h4>
                  <p>
                      Bachelor's degree in Electrical Engineering, followed by a Master's degree in Telecommunication Systems from Université Djilali Bounaama, Khemis Miliana.

Graduated with a thesis project (AcciSense) scoring 19.5/20, with the jury noting it as one of the strongest they had seen.
                      
              </p>
          </div>
          <div className="about-card">
              <h4>
                  Career
              </h4>
              <p>
                  
                    Started with an internship at SPRK (Société des Produits Rouges), then a second internship at Algérie Télécom's transmission department in Khemis Miliana.

Freelancing since 2019 , as a developer, and also doing data annotation, transcription, and translation work.

Recently shifted focus toward backend engineering: FastAPI, PostgreSQL, Redis, and Celery, building production-style systems like SecureAuth API.
              </p>
          </div>
          <div className="about-card">
              <h4>
                  Achievements
              </h4>
              <p>
                  
                    19.5/20 on Master's thesis (AcciSense), praised by the jury as one of the best projects presented.

Thesis reworked into an IEEE-format paper, published on ResearchGate.

87.3% detection accuracy benchmarking three deep learning architectures (R3D-18, SlowFast R50, Video Swin Transformer).
              </p>
          </div>
          <div className="about-card">
              <h4>
                  Currently 
              </h4>
              <p>
                  
                    Deep in a backend sprint , FastAPI, PostgreSQL, SQLAlchemy, Redis, and Celery , building out SecureAuth API and other backend systems.

Actively job hunting for backend/full-stack roles, with an eye on eventually working abroad.
              </p>
          </div>
          </div>
    </div>
  )
}
