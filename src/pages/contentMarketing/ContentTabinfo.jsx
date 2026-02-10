import { useState } from "react";
import "../socialMedia/SmmTabBox.css";

import sampleImg1 from "../../assets/images/social1.webp";
import sampleImg2 from "../../assets/images/social2.webp";
import sampleImg3 from "../../assets/images/social3.webp";
import sampleImg4 from "../../assets/images/social4.webp";

const smmData = [
  {
    id: "01",
    title: "Understand Your Traveler",
    desc: "Before we write anything, we look at your traveler’s journey. We study what they search for, what excites them, and what makes them pause before booking. Every blog, every page, and every post speaks to real safari questions and real needs, not general audiences or guesses. Your content connects with the people most likely to book with you.",
    image: sampleImg1,
  },
  {
    id: "02",
    title: "Drive Traffic to your Page",
    desc: "Your future guests are already searching for safaris. We help your brand appear where those searches happen, using search-focused content built for how people plan trips. Your blogs and pages become places where travelers discover your experience before they discover your competitors.",
    image: sampleImg2,
  },
  {
    id: "03",
    title: "Communicate Your Safari Experience",
    desc: "Safaris are emotional and practical at the same time, and your content should reflect both. We show what makes your experiences special, why travelers can trust you with their time and money, how booking with you feels clear and reassuring, and what step to take next. ",
    image: sampleImg3,
  },
  {
    id: "04",
    title: "Refine Your Content for Better Results",
    desc: "Publishing is only the start. We watch how visitors read, click, and move through your pages, then improve your message and structure to make everything clearer and more persuasive. Your content keeps working over time, turning visits into real safari inquiries and bookings.",
    image: sampleImg4,
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
            className={`smm_tab_item ${activeIndex === index ? "active" : ""}`}
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
  );
};

export default ContentTabinfo;
