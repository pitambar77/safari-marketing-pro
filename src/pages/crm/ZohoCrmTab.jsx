import "../WebDesign/WebsiteSamples.css";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

/* ================= DATA ================= */
const ZohoCrmSamples = {
  Teamspaces: [
    { id: 1, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/crm-for-everyone-home-video.mp4" },
    { id: 2, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/zia-module-creation.mp4" },
    { id: 3, type: "image", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/image-to-canvas.svg" },
    { id: 4, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/crm-for-everyone-home-video.mp4" },
  ],

  ZiaModuleCreation: [
    { id: 1, type: "image", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/image-to-canvas.svg" },
    { id: 2, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/crm-for-everyone-home-video.mp4" },
    { id: 3, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/crm-for-everyone-home-video.mp4" },
    { id: 4, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/zia-module-creation.mp4" },
  ],

  ZiaCustomDesign: [
    { id: 1, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/crm-for-everyone-home-video.mp4" },
    { id: 2, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/crm-for-everyone-home-video.mp4" },
    { id: 3, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/crm-for-everyone-home-video.mp4" },
    { id: 4, type: "video", src: "https://www.zohowebstatic.com/sites/zweb/images/crm/zia-module-creation.mp4" },
  ],
};

const categories = Object.keys(ZohoCrmSamples);

const ZohoCrmTab = () => {
  const [activeTab, setActiveTab] = useState("Teamspaces");
  const swiperRef = useRef(null);

  return (
    <div className="crm-sample-zoho">

      {/* Tabs */}
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab ${activeTab === cat ? "active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>

      {/* Custom Navigation */}
      <div className="custom-nav">
        <button className="nav-btn prev"  onClick={() => swiperRef.current?.slidePrev()} >  ←  </button>

        <button className="nav-btn next" onClick={() => swiperRef.current?.slideNext()} > → </button>
      </div>

      {/* Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="crm-swiper"
      >
        {ZohoCrmSamples[activeTab].map((item) => (
          <SwiperSlide key={item.id}>
            <div className="sample-card">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="sample-media w-100"
                />
              ) : (
                <img
                  src={item.src}
                  alt={activeTab}
                  className="sample-media"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default ZohoCrmTab;
