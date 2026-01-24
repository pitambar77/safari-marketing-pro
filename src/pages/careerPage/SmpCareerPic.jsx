
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "../googleAdd/ExCustomersSlider.css"
import "swiper/css";
import "swiper/css/pagination";


const data = [
  {
    image:"https://safarimarketingpro.com/images/galddr-fig-2.jpg",
  },
  {
    image: "https://safarimarketingpro.com/images/galddr-fig-5.jpg",
  },
  {
    image: "https://safarimarketingpro.com/images/galddr-fig-10.jpg",
  },
   {
    image: "https://safarimarketingpro.com/images/galddr-fig-44.jpg",
  },
];

const SmpCareerPic = () => {
  return (
    <div className="smpcareerslider">
      <Swiper
        modules={[Autoplay, Pagination]}
        breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1},
            1024: { slidesPerView: 1 },
            1280: { slidesPerView: 1 },
          }}      
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,   
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="excostomer">
             <div className="smpcareer-main-pico">
                <img src={item.image} alt={item.title} className="w-100"/>
              </div>               
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmpCareerPic;
