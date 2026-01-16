import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

import "./CaseStudy.css";

import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    title: "Chilli Manis",
    image:"https://www.heroesofdigital.com/wp-content/uploads/2025/08/sterling-law.png.webp",
    link: "#",
    hidepara: "250% increase in monthly implant consultations",
  },
  {
    title: "Trinity Medical Centre",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/10/Ark-Surgical-Practice-2048x1205.jpg.webp",
    link: "#",
    hidepara: "250% increase in monthly implant consultations",
  },
  {
    title: "Sterling Law",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/12/newlife-dental.png.webp",
    link: "#",
    hidepara: "300% growth in qualified leads",
  },
];

const CaseStudy = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="case-study-slider">

      {/* Custom Buttons */}
      <div className="custom-nav">
        <button ref={prevRef} className="custom-prev">←</button>
        <button ref={nextRef} className="custom-next">→</button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // Attach the refs to navigation
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="case-card">
              <h3>{item.title}</h3>
              <div className="case-image">
                <img src={item.image} alt={item.title} />
                <div className="hide-casepara">
                  <p>{item.hidepara}</p>
                </div>
              </div>
              <a href={item.link} className="read-more">
                Read More <span>→</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CaseStudy;
