
import { useState } from 'react'
import './landing.css'
export default function Landing() {
  const [showCv, setShowCv] = useState(false)
    return (
      <>
    <div className="landing">
          {showCv &&
          <div className="download-cvs" onClick={()=> setShowCv(false)}>
              <div className="cvs" onClick={(e) => {
                setShowCv(true)
                e.stopPropagation()
              }}
                >
              <div className="leave-cvs">
                  <span >
                    <svg onClick={(e) => {
                    setShowCv(false)
                    e.stopPropagation()
                  }}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
                </span>
              </div>
              <div className="cvs-content">
                  <span>
                    {/* <img draggable='false' src="download.png" alt="" /> */}
                    <p>Machine Learning</p>
                    <a href="Resume_Aness_Rahmani_ML_Engineer.pdf" download='Aness_Rahmani_ML' >
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 448 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>

                    </a>
                </span>
                  <span>
                    {/* <img draggable='false' src="download.png" alt="" /> */}
                    <p>Full-stack Development </p>
                    <a href="Resume_Aness_Rahmani_FullStack_Developer.pdf" download='Aness_Rahmani_Fullstack' >
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 448 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>

                    </a>
                </span>
                  <span>
                    {/* <img draggable='false' src="download.png" alt="" /> */}
                    <p>Backend Development</p>
                    <a href="Resume_Aness_Rahmani_Backend_Developer.pdf" download='Aness_Rahmani_Backend' >
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 448 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>

                    </a>
                </span>
                <span>
                    {/* <div>
                      <img draggable='false' src="download.png" alt="" />
                    </div> */}
                    <p>Frontend Development</p>
                    <a href="Resume_Aness_Rahmani_Frontend_Developer.pdf" download='Aness_Rahmani_Frontend' >
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 448 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                    </a>
                </span>
                <span>
                    {/* <img draggable='false' src="download.png" alt="" /> */}
                    <p>Data Specialist</p>
                    <a href="Resume_Aness_Rahmani_AI_Data_Specialist.pdf" download='Aness_Rahmani_Data_specialist' >
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 448 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                    </a>
                  </span>            
              </div>
            </div>
      </div>}
          <h1>ML Engineer & Full-Stack Developer</h1>
          <p className='landing-info'>
            I like building the whole thing: model, backend, interface, not just one layer of it. IT is my passion. Always learning, new tools, new layers, new ways to break and fix things.
          </p>
      <div className="landing-buttons">
            <a href="#projects">
            {/* <a> */}
              Projects
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            {/* </a> */}
              </a>

            { !showCv && <button onClick={()=> setShowCv(true)}  >Download CV
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
                    </button>

            }
          </div>
          {/* <div className="landing-stats">
            <div>
              <span>3</span>
              <p>models trained</p>
              </div>
            <div>
              <span>89.30%</span>
              <p>accuracy</p>
              </div>
            <div>
              <span>5+</span>
              <p>Full-stack projects</p>
              </div>
            <div>
              <span>1</span>
              <p>published research paper</p>
              </div>

          </div> */}
      </div>
        </>
  )
}
