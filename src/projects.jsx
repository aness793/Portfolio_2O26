import "./projects.css"

export default function Projects() {
  return (
    <div  id="projects" className="projects-container">
          <div className="featured-project">
            <h1> <hr /> Featured Project <hr /> </h1>
        <div className="featured-project-container">
          <div className="featured-project-image">
            <img src="platform.png" alt="" />
          </div>
          <div className="featured-project-info">
            <h4>Accisense, traffic accident detection and severity estimation using Deep Learning models</h4>
            <p>AccSiense is an innovative accident detection system designed to enhance road safety and provide timely assistance in emergencies. Our platform utilizes advanced sensors and machine learning algorithms to detect accidents in real-time, allowing for rapid response and potentially saving lives.</p>
            <span className="featured-project-links">
              <a href="https://accsense-frontend.vercel.app/" target="_blank">Platform
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"/></svg>
            </a>
              <a href="https://github.com/aness793/accsense-frontend" target="_blank">Github
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"/></svg>
            </a>
              <a href="https://www.researchgate.net/publication/409261025_Unified_Dual-Head_Video_Swin_Transformer_for_Simultaneous_Road_Accident_Detection_and_Severity_Estimation_from_Surveillance_Video" target="_blank">Article
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"/></svg>
            </a>
            </span>
          </div>
        </div>
                    <h1> <hr /> Other Projects <hr /> </h1>
        <div className="other-projects-container">
          <a href="https://github.com/aness793/Blue-ID"target="_blank">
            <div className="project">
            <div className="project-image">
              <img src="blue.png" alt="" />
          </div>
            <div className="project-left">
              <h4 className="other-project-title">Blue ID
            </h4>
            
            
              <div>
          </div>
            </div>

          </div>
          </a>

          <a href="https://github.com/aness793/harbor_log" target="_blank">
            <div className="project">
            <div className="project-image">
              <img src="harbor.png" alt="" />
          </div>
            <div className="project-left">
              <h4 className="other-project-title">Harbor Log
            </h4>
            
            
              <div>
          </div>
            </div>

          </div>
          </a>

          <a href="https://github.com/aness793/coffee-shop" target="_blank">
            <div className="project">
            <div className="project-image">
              <img src="cafeteria.png" alt="" />
          </div>
            <div className="project-left">
              <h4 className="other-project-title">Coffee shop
            </h4>
            
            
              <div>
          </div>
            </div>

          </div>
          </a>
          
          </div>
      </div>

    </div>

  )
}
