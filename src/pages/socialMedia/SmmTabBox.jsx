import { useState } from "react";
import "./SmmTabBox.css";
import sampleImg1 from "../../assets/images/social1.webp";
import sampleImg2 from "../../assets/images/social2.webp";
import sampleImg3 from "../../assets/images/social3.webp";
import sampleImg4 from "../../assets/images/social4.webp";

const smmData = [
  {
    id: "01",
    title: "Social Media Strategy & Planning",
    desc: `We don’t just post; we plan for conversion. We build a bespoke digital roadmap for your safari brand—defining target demographics, seasonal content themes, and posting cadences. Every strategic move is designed to turn "dreamers" into "bookers" while fueling long-term brand equity.`,
    image: sampleImg1,
  },
  {
    id: "02",
    title: "Content Creation & Storytelling",
    desc: "The wild is visual, and your feed should be too. From cinematic Reels and immersive carousels to evocative storytelling, we produce high-impact assets that showcase the pulse of the bush. We craft the narrative that allows travelers to see themselves in the back of your cruiser before they even pack their bags.",
    image: sampleImg2,
  },
  {
    id: "03",
    title: " Community Management & Engagement",
    desc: `A safari brand is built on trust and personal connection. We handle the "campfire conversations" by managing comments, direct messages, and interactions in real-time. By fostering an active, responsive community, we transform casual likes into meaningful inquiries and loyal brand advocates.`,
    image: sampleImg3,
  },
  {
    id: "04",
    title: "Paid Social Advertising (Meta Ads)",
    desc: "AWe put your lodge or tour in front of the right eyes at the right time. Our precision-targeted Meta campaigns reach high-intent travelers and retarget those who have already shown interest. We focus on high-yield ad spend that drives consistent traffic and high-quality lead generation.",
    image: sampleImg4,
  },
  {
    id: "05",
    title: "Performance Tracking & Optimization",
    desc: "Data is our compass. We track every click, lead, and conversion to ensure your investment is performing. By analyzing engagement patterns and lead quality, we continuously refine your content and ad strategy to maximize ROI and scale your bookings season after season.",
    image: sampleImg4,
  },
];

const SmmTabBox = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="smm_tab_section">
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
              <h3>{smmData[activeIndex].title}</h3>
              <p>{smmData[activeIndex].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmmTabBox;
