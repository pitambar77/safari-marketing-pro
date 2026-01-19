import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useRef } from "react";

import "../googleAdd/CaseStudy.css";

import "swiper/css";
import "swiper/css/navigation";

const data = [
  {
    profile:"https://www.heroesofdigital.com/wp-content/uploads/2025/05/dr-justin-boey.jpg.webp",
    name: "Dr Justin Boey",
    degination:"Medical Director",
    company:"https://www.heroesofdigital.com/wp-content/uploads/2025/03/rasel-logo.jpg.webp",
    para:"Awesome experience working with the team at Heroes of Digital! They are always very responsive and continuously gives us suggestions to improve our online presence in the F&B industry. A great help as they managed our SEO and SEM really well and we do not have to worry. Definitely will recommend them!",
    percentage: "22%",
    smallpara: "Increase in Organic Traffic",
  },
  {
    profile:"https://www.heroesofdigital.com/wp-content/uploads/2025/05/dr-justin-boey.jpg.webp",
    name: "Dr Justin Boey",
    degination:"Medical Director",
    company:"https://www.heroesofdigital.com/wp-content/uploads/2025/03/sozo-logo.jpg.webp",
    para:"Awesome experience working with the team at Heroes of Digital! They are always very responsive and continuously gives us suggestions to improve our online presence in the F&B industry. A great help as they managed our SEO and SEM really well and we do not have to worry. Definitely will recommend them!",
    percentage: "22%",
    smallpara: "Increase in Organic Traffic",
  },
   {
    profile:"https://www.heroesofdigital.com/wp-content/uploads/2025/05/dr-justin-boey.jpg.webp",
    name: "Dr Justin Boey",
    degination:"Medical Director",
    company:"https://www.heroesofdigital.com/wp-content/uploads/2025/03/sozo-logo.jpg.webp",
    para:"Awesome experience working with the team at Heroes of Digital! They are always very responsive and continuously gives us suggestions to improve our online presence in the F&B industry. A great help as they managed our SEO and SEM really well and we do not have to worry. Definitely will recommend them!",
    percentage: "22%",
    smallpara: "Increase in Organic Traffic",
  },
   {
    profile:"https://www.heroesofdigital.com/wp-content/uploads/2025/05/dr-justin-boey.jpg.webp",
    name: "Dr Justin Boey",
    degination:"Medical Director",
    company:"https://www.heroesofdigital.com/wp-content/uploads/2025/03/sozo-logo.jpg.webp",
    para:"Awesome experience working with the team at Heroes of Digital! They are always very responsive and continuously gives us suggestions to improve our online presence in the F&B industry. A great help as they managed our SEO and SEM really well and we do not have to worry. Definitely will recommend them!",
    percentage: "22%",
    smallpara: "Increase in Organic Traffic",
  },
   {
    profile:"https://www.heroesofdigital.com/wp-content/uploads/2025/05/dr-justin-boey.jpg.webp",
    name: "Dr Justin Boey",
    degination:"Medical Director",
    company:"https://www.heroesofdigital.com/wp-content/uploads/2025/03/sozo-logo.jpg.webp",
    para:"Awesome experience working with the team at Heroes of Digital! They are always very responsive and continuously gives us suggestions to improve our online presence in the F&B industry. A great help as they managed our SEO and SEM really well and we do not have to worry. Definitely will recommend them!",
    percentage: "22%",
    smallpara: "Increase in Organic Traffic",
  },
];

const ContentCustomerSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
     <div className="case-study-slider">
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
                <div className="con-customer-card">
                    <div className="top-customer">
                        <div className="top-customer-left">
                            <img src={item.profile} alt="" />
                            <div className="top-customer-atoer">
                                <h3>{item.name}</h3>
                                <p>{item.degination}</p>
                            </div>
                        </div>
                        <div className="top-customer-right">
                            <img src={item.company} alt="" />
                        </div>
                    </div>
                    <div className="middle-customer">
                        <p>{item.para}</p>
                    </div>
                    <div className="bottom-customer">                                              
                            <h4>{item.percentage}</h4>                                
                            <div className="custmober-bot-rev">
                                    <p>{item.smallpara}</p> 
                            </div>                                                     
                       </div>
                    </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  )
}

export default ContentCustomerSlider;