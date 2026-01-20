import React, { useState } from "react";
import "./CrmVideo.css";

const CrmVideo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Video Button */}
      <button className="crm-video-btn" onClick={() => setOpen(true)}>
        <span className="crm-play-icon">▶</span>
        Watch a Video
      </button>

      {/* Modal */}
      {open && (
        <div className="crm-video-overlay" onClick={() => setOpen(false)}>
          <div
            className="crm-video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="crm-close-btn"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            <iframe
              src="https://www.youtube.com/embed/uc_YlYHY9nk?autoplay=1"
              title="CRM Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default CrmVideo;
