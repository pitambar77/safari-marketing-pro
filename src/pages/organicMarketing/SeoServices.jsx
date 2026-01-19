import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./SeoServices.css";

const services = [
  {
    title: "E-commerce SEO Services",
    desc:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    list: [
      "Technical SEO for product-rich",
      "Structured implementation",
      "SEO-optimised titles",
      "Ongoing optimisation ",
    ],
  },
  {
    title: "Local SEO Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    list: [
      "Google Business Profile",
      "Location-based keyword",
      "Local citations & directories",
      "Review generation strategy",
    ],
  },
  {
    title: "Content SEO Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    list: [
      "Content strategy by intent",
      "SEO blog writing",
      "Service page copywriting",
      "Internal linking optimisation",
    ],
  },
  {
    title: "Technical SEO Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    list: [
      "Site speed optimisation",
      "Mobile SEO fixes",
      "Core Web Vitals",
      "Indexing & crawl fixes",
    ],
  },
  {
    title: " International SEO Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    list: [
      "Site speed optimisation",
      "Mobile SEO fixes",
      "Core Web Vitals",
      "Indexing & crawl fixes",
    ],
  },

   {
    title: "B2B SEO Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    list: [
      "Site speed optimisation",
      "Mobile SEO fixes",
      "Core Web Vitals",
      "Indexing & crawl fixes",
    ],
  },
   {
    title: "Local SEO Services",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    list: [
      "Site speed optimisation",
      "Mobile SEO fixes",
      "Core Web Vitals",
      "Indexing & crawl fixes",
    ],
  },


];

const SeoServices = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="seo-services">
      {/* Custom Buttons */}
      <button className="custom-nav prev" ref={prevRef}>
       ←
      </button>
      <button className="custom-nav next" ref={nextRef}>
       →
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="seo-slider"
      >
        {services.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="seo-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul>
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SeoServices;
