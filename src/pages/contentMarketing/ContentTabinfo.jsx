import { useState } from "react";
import "../socialMedia/SmmTabBox.css";

import sampleImg1 from "../../assets/images/social1.webp"; 
import sampleImg2 from "../../assets/images/social2.webp"; 
import sampleImg3 from "../../assets/images/social3.webp"; 
import sampleImg4 from "../../assets/images/social4.webp"; 


const smmData = [
  {
    id: "01",
    title: "Designed for Clicks, Built for Conversions",
    desc:"We build precise audiences, create lookalikes, and run retargeting that re-engages past visitors to maximise conversion rates and reduce wasted spend.",
    image: sampleImg1,
  },
  {
    id: "02",
    title: "Tested Fast, Optimised Relentlessly	",
    desc:"Complete Meta ads campaign planning, execution, monitoring, and optimisation for higher ROI.",
    image: sampleImg2,
  },
  {
    id: "03",
    title: "Tailored for Each Funnel Stage",
    desc:"High-converting creatives and persuasive copy designed to stop the scroll.",
    image: sampleImg3,
  },
  {
    id: "04",
    title: "Powered by Data, Enhanced with AI Intelligence",
    desc:"Accurate tracking implementation to measure and optimise conversions.",
    image: sampleImg4,
  },  
   {
    id: "05",
    title: "Powered by Data, Enhanced with AI Technology",
    desc:"Accurate tracking implementation to measure and optimise conversions.",
    image: sampleImg2,
  },  
];

const ContentTabinfo = () => {
      const [activeIndex, setActiveIndex] = useState(0);

  return (
        <div className="smm_tab_wrapper">

          {/* LEFT SIDE TABS */}
          <div className="smm_tab_list">
            {smmData.map((item, index) => (
              <div
                key={item.id}
                className={`smm_tab_item ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="smm_tab_number">{item.id}</span>
                <h4>{item.title}</h4>
                <span className="smm_tab_arrow">→</span>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="smm_tab_content">
            <div className="smm_content_card">
              <img
                src={smmData[activeIndex].image}
                alt={smmData[activeIndex].title}
              />
              <h3>{smmData[activeIndex].title}</h3>
              <p>{smmData[activeIndex].desc}</p>
            </div>
          </div>

        </div>
  )
}

export default ContentTabinfo;