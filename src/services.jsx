import "./services.css"

export default function Services() {
  return (
    <div id="services" className="services-container" >
          <h1> <hr /> Services <hr /> </h1>
          <div className="service-container">
          <div className="service">
            <div className="service-left">
              <h4 className="service-title"> Frontend Developement</h4>
              
            </div>
            <div className="service-right">
            <span>Angular</span>
            <span>React</span>
            <span>Next js</span>
            </div>
          </div>
          <div className="service">
            <div className="service-left">
                            <h4 className="service-title">Backend Developement</h4>

         
            </div>
            <div className="service-right">
                <span>Express</span>
                <span>FastAPI</span>
                <span>Hapi</span>
            </div>
              </div>
          <div className="service">
            <div className="service-left">
                            <h4 className="service-title">Fullstack Developement</h4>

         
            </div>
            <div className="service-right">
                <span>PERN</span>
                <span>MERN</span>
                <span>MEAN</span>
            </div>
              </div>
          <div className="service">
            <div className="service-left">
                            <h4 className="service-title">ML Training</h4>

         
            </div>
            <div className="service-right">
                <span>PyTorch</span>
                <span>Computer-Vision</span>
                <span>Model-Benchmarking</span>

            </div>
              </div>
          </div>
      </div>
  )
}
