import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "./SeoServices.css";

const services = [
  {
    title: "Safari Content Marketing ",
    desc:  "High-quality content is key to attracting, educating, and converting safari travelers. We craft storytelling that resonates with adventure seekers and luxury travelers alike.",
    list: [
      "Destination Guides and Itineraries",
      "Blog and Storytelling",
      "Multimedia Content",
      "Content Calendar Planning ",
      "Authority Partnerships"
    ],
  },
  {
    title: "Safari Local and International Visibility",
    desc: "Safari travelers come from all over the world. We ensure your brand is found by the right audiences at the right time, whether locally or globally.",
    list: [
      "Geo-Targeted SEO",
      "Multilingual SEO",
      "International Link Building",
      
    ],
  },
  {
    title: "Safari Technical and Performance SEO",
    desc: "A safari website must be fast, secure, and easy to navigate for travelers worldwide. Technical SEO ensures your site performs optimally.",
    list: [
      "Site Speed and Performance",
      "Mobile Optimization",
      "Structured Data and Schema Markup",
      "Website Architecture and Crawlability",
      "SEO Health Monitoring and Fixes",
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
