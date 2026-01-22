import React from 'react'
import { useState } from "react";
import "./TechnologyTab.css";
import LeftCta from '../../components/LeftCta';

const smmData = [
  {
    id: "01",
    title: "Actionable Analytics",
    desc:"We build precise audiences, create lookalikes, and run retargeting that re-engages past visitors to maximise conversion rates and reduce wasted spend.",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/lead-management01.png.webp",
  },
  {
    id: "02",
    title: "Meta Ads Campaign Management",
    desc:"Complete Meta ads campaign planning, execution, monitoring, and optimisation for higher ROI.",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/10/data-3-2048x1545.webp",
  },
  {
    id: "03",
    title: "Facebook Ad Creative & Copywriting",
    desc:"High-converting creatives and persuasive copy designed to stop the scroll.",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/10/content-2-1536x1008.webp",
  },
  {
    id: "04",
    title: "Pixel & Conversion Tracking Setup",
    desc:"Accurate tracking implementation to measure and optimise conversions.",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/04/analytics-analysis.png.webp",
  },  
    {
    id: "05",
    title: "Facebook Ad Creative & Copywriting",
    desc:"High-converting creatives and persuasive copy designed to stop the scroll.",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/10/content-2-1536x1008.webp",
    }
];

const TechnologyTab = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="smp-tecno_tab_section">
      <div className="container">
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
              <div className="smm_content_card-para">
              <h3>{smmData[activeIndex].title}</h3>
              <p>{smmData[activeIndex].desc}</p>
              </div>
            </div>
          </div>

        </div>
        <div className="another-componet">
            <LeftCta />
        </div>
      </div>
    </div>

  )
}

export default TechnologyTab;