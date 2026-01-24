import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./SmpCareerRivew.css";

const reviews = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "Ash",
    flag: "🇿🇦",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "Chris",
    flag: "🇺🇸",
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    name: "Daniel",
    flag: "🇮🇳",
    image: "https://i.pravatar.cc/100?img=45",
  },
];

const SmpCareerRivew = () => {
  const swiperRef = useRef(null);

  return (
    <div className="smp-review-section">
      {/* Custom Navigation */}
      <button className="smp-nav smp-prev" onClick={() => swiperRef.current.slidePrev()}> ← </button>

      <button className="smp-nav smp-next" onClick={() => swiperRef.current.slideNext()}> → </button>

      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1, // Mobile
          },
          768: {
            slidesPerView: 2, // Tablet
          },
          1024: {
            slidesPerView: 2, // Desktop
          },
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="smp-review-card">
              <p className="review-text">“{item.text}”</p>

              <div className="review-footer">
                <div className="review-author">
                  <strong>{item.name}</strong>
                  <span>{item.flag}</span>
                </div>

                <div className="review-avatar">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmpCareerRivew;
