
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "./ExCustomersSlider.css"
import "swiper/css";
import "swiper/css/pagination";


const data = [
  {
    title: "Chilli Manis",
    image:"https://www.heroesofdigital.com/wp-content/uploads/2025/06/Google-Shopping.webp",
    para:"SMP of Digital really boosted our SEM campaign and maximised reach to our target audience.This resulted in a dramatic 3 fold increase in our online sales channel.",
    brandpic:"https://www.heroesofdigital.com/wp-content/uploads/2025/06/bods-1-e1595466317393.webp",
    costomer: "Mervin Sim",
    designation: "General Manager",
  },
  {
    title: "Trinity Medical Centre",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Google-Shopping.webp",
    para:"SMP of Digital really boosted our SEM campaign and maximised reach to our target audience.This resulted in a dramatic 3 fold increase in our online sales channel.",
    brandpic:"https://www.heroesofdigital.com/wp-content/uploads/2025/06/bods-1-e1595466317393.webp",
    costomer: "Mervin Sim",
    designation: "General Manager",
  },
  {
    title: "Sterling Law",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Google-Shopping.webp",
    para:"SMP of Digital really boosted our SEM campaign and maximised reach to our target audience.This resulted in a dramatic 3 fold increase in our online sales channel.",
    brandpic:"https://www.heroesofdigital.com/wp-content/uploads/2025/06/bods-1-e1595466317393.webp",
    costomer: "Mervin Sim",
    designation: "General Manager",
  },
];

const ExCustomersSlider = () => {
  return (
    <div className="customersslider">
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
             <div className="excostomer-main-pico">
                <img src={item.image} alt={item.title} className="w-100"/>
              </div>               
              <p className="main-descripnation">{item.para}</p>
              <div className="excostomer-name">
                <div className="row">
                  <div className="col-md-5">
                    <div className="excostomer-brand">
                      <img src={item.brandpic} alt={item.title} className="w-100"/>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="excostomer-brand-name">
                      <h3>{item.costomer}</h3>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExCustomersSlider;
