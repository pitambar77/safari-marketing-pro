import "./WebsiteSamples.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* ================= DATA ================= */
const websiteSamples = {
  Tanzania: [
    { id: 1, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Aesthetic2.webp" },
    { id: 2, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Aesthetic3.webp" },
    { id: 3, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Aesthetic1.webp" },
    { id: 4, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education1.webp" },
    { id: 5, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education2.webp" },
  ],
  Kenya: [
    { id: 1, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/abel-soh-website.jpg.webp" },
    { id: 2, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/hc-chang-website.jpg.webp" },
    { id: 3, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/dr-smile-website.jpg.webp" },
    { id: 4, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education1.webp" },
    { id: 5, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education2.webp" },
    
  ],
  Uganda: [
     { id: 1, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Home1.webp" },
     { id: 2, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Home3.webp" },
     { id: 3, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education1.webp" },
     { id: 4, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Home2-1.webp" },
     { id: 5, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/hc-chang-website.jpg.webp" },

  ],
  Rwanda: [
    { id: 1, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education3.webp" },
    { id: 2, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education2.webp" },
    { id: 3, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education3.webp" },
    { id: 4, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/FNB3.webp" },
    { id: 5, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/FNB1.webp" },
  ],
  Zambia: [
     { id: 1, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/FNB3.webp" },
     { id: 2, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/FNB1.webp" },
     { id: 3, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education1.webp" },
     { id: 4, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Home2-1.webp" },
     { id: 5, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/abel-soh-website.jpg.webp" },
  ],
  Zimbabwe: [
    { id: 1, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/dr-smile-website.jpg.webp" },
    { id: 2, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education1.webp" },
    { id: 3, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education3.webp" },
    { id: 4, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/FNB3.webp" },
    { id: 5, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/FNB1.webp" },
  ],
  SouthAfrica: [
     { id: 1, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Home1.webp" },
     { id: 2, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Home3.webp" },
     { id: 3, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Aesthetic1.webp" },
     { id: 4, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education1.webp" },
     { id: 5, img: "https://www.heroesofdigital.com/wp-content/uploads/2025/03/Education2.webp" },
  ],
};

/* ================= CATEGORIES ================= */
const categories = Object.keys(websiteSamples);

/* ================= COMPONENT ================= */
const WebsiteSamples = () => {
  const [activeTab, setActiveTab] = useState("Tanzania");

  return (
    <div className="samples-section">

      {/* Tabs */}
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeTab === cat ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {websiteSamples[activeTab].map((item) => (
          <SwiperSlide key={item.id}>
            <div className="sample-card">
              <img src={item.img} alt={activeTab} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default WebsiteSamples;
