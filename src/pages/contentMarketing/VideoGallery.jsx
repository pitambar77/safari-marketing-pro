import { useState } from "react";
import "./VideoGallery.css";

const videos = [
  {
    title: "SkinLab The Medical Spa",
    subtitle: "SkinLab (Top 3 Treatments)",
    thumbnail: "https://www.heroesofdigital.com/wp-content/uploads/2025/05/skinlab.jpg",
    videoUrl: "https://www.youtube.com/embed/uc_YlYHY9nk?start=3",
  },
  {
    title: "Moyem Medical Aesthetics",
    subtitle: "Client Success Story",
    thumbnail: "https://www.heroesofdigital.com/wp-content/uploads/2025/05/moyem-medical-aesthetics01.jpg",
    videoUrl: "https://www.youtube.com/embed/NhEqaeHnlP8?si=amnUqU_E4U6Il2Vm",
  },
  {
    title: "Luxury Skin Clinic",
    subtitle: "Brand Film",
    thumbnail: "https://www.heroesofdigital.com/wp-content/uploads/2025/05/TrichoLab.jpg",
    videoUrl: "https://www.youtube.com/embed/WjLgDl7U9ZA?si=ZmOcYlZQxHqHhV2Y",
  },
   {
    title: "Luxury Skin Clinic",
    subtitle: "Brand Film",
    thumbnail: "https://www.heroesofdigital.com/wp-content/uploads/2025/05/hc-ortho01.jpg",
    videoUrl: "https://www.youtube.com/embed/uc_YlYHY9nk?start=3",
  },
    {
    title: "Luxury Skin Clinic",
    subtitle: "Brand Film",
    thumbnail: "https://www.heroesofdigital.com/wp-content/uploads/2025/05/Achieve-Spine01.jpg",
    videoUrl: "https://www.youtube.com/embed/NhEqaeHnlP8?si=amnUqU_E4U6Il2Vm",
  },
  {
    title: "Luxury Skin Clinic",
    subtitle: "Brand Film",
    thumbnail: "https://www.heroesofdigital.com/wp-content/uploads/2025/06/TM_2-scaled.jpg",
    videoUrl: "https://www.youtube.com/embed/WjLgDl7U9ZA?si=ZmOcYlZQxHqHhV2Y",
  },

];

const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <div className="video-grid">
        {videos.map((item, index) => (
          <div
            className="video-card"
            key={index}
            style={{ backgroundImage: `url(${item.thumbnail})` }}
            onClick={() => setActiveVideo(item.videoUrl)}
          >
            <div className="video-overlay">
              <div className="video-info">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
              <span className="play-btn">▶</span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={activeVideo}
              title="Video Player"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={() => setActiveVideo(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGallery;
