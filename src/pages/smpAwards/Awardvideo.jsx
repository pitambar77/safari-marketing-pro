import React, { useState } from "react";
import "../aboutUs/AboutSmpVideo.css";
import thumbnail from "../../assets/images/assqq.webp"; 

const Awardvideo = () => {
    const [open, setOpen] = useState(false);  
  return (
      <>
          {/* Thumbnail with Play Button */}
          <div
            className="smp-video-thumb"
            style={{ backgroundImage: `url(${thumbnail})` }}
          >
            <button
              className="smp-play-btn"
              onClick={() => setOpen(true)}
            >
              ▶
            </button>
          </div>
    
          {/* Modal */}
          {open && (
            <div
              className="smp-modal-overlay"
              onClick={() => setOpen(false)}
            >
              <div
                className="smp-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="smp-close"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>
    
                <iframe
                  src="https://www.youtube.com/embed/V12f3YAttXY?si=4U68pFul7cd8zptB&amp;start=1"
                  title="About SMP Video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </>
        
  )
}

export default Awardvideo;