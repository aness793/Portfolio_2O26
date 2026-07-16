import { useEffect, useState } from "react";
import "./projects.css"
const stats = [
    ["Detection Accuracy", "89.30%"],
    ["Severity Acccuracy", '63.10%'],
    ["Macro F1", "63.10%"],
        ['accident Recall', "98.70%"]
    ]
export default function ProjectsCopy() {
    // Track the starting index of the two elements to display
  const [index, setIndex] = useState(0);
    
  useEffect(() => {
    // Prevent interval if stats array is empty or has fewer than 2 items
    if (!stats || stats.length <= 2) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        // Move forward by 2 elements. Loop back to 0 if we exceed array length.
        return (prevIndex + 2) % stats.length;
      });
    }, 2000); // 4000 milliseconds = 4 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Handle cases where stats might be empty or undefined
  if (!stats || stats.length === 0) return <p>No data available</p>;

  // Slice the array to get exactly two elements starting from the current index
  // Note: if array length is odd, the last iteration might only show 1 item
  const currentPair = stats.slice(index, index + 2);

  return (
    <div id="projects" className="projects-container">
          <div className="featured-project">
              <h1>
                 <hr /> Featured Project <hr />
        </h1>
      </div>
      <div className="featured-project">
        
        
        <div className="featured-project-container">
          <div className="featured-project-img">
                        <img src="platform_dark.png" alt="" />
                        {/* <img src="platform.png" alt="" /> */}
                      
                  </div>
                  <div className="left-project">
                      <div className="featured-project-name">
                      <h2>AcciSense</h2>
                  </div>
                  <div className="featured-project-description">
                          A Platform that demonstrates Three Deep Learning Models i trained for Traffic Accident detection and Severity estimation
                        

                      </div>
  <div  className="featured-project-metrics">
   {currentPair[0] && (
        <div className="FPM1">
          <span className="FPML">{currentPair[0][0]}: </span>
          <span>{currentPair[0][1]}</span>
        </div>
      )}

      {/* Element 2 Styling */}
      {currentPair[1] && (
        <div className="FPM2">
          <span className="FPML">{currentPair[1][0]}: </span>
          <span>{currentPair[1][1]}</span>
        </div>
      )}
  </div>

                              <div className="left-project-tags">
                                       <span>PyTorch</span>   <span>Video Swin Transformer </span>  <span>SlowFast</span>   <span>R3D-18  </span>
  <span>React</span>   <span>FastAPI</span>   <span>Supabase</span>   <span>MQTT</span>   <span>WebSocket</span>
 
</div>

                              <div className="left-project-links">
                                      <a href="https://github.com/aness793/accsense-frontend" target='_blank' >GitHub ↗ </a>
                                      <a href="https://accsense-frontend.vercel.app/">Live Demo ↗</a>
                                      <a href="">Read Paper ↗</a>
                                         
  </div>
                  </div>
                      
              </div>
        </div>
    </div>
  )
}
