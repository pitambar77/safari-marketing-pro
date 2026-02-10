import { useState } from "react";
import "../socialMedia/SmmTabBox.css";
import sampleImg1 from "../../assets/images/social1.webp";
import sampleImg2 from "../../assets/images/social2.webp";
import sampleImg3 from "../../assets/images/social3.webp";
import sampleImg4 from "../../assets/images/social4.webp";
import Button from "../../components/Button";

const smmData = [
  {
    id: "01",
    title: "Strategic Market & Audience Research",
    desc:"We analyse your safari niche, target travellers, destinations, and competitors to understand what your ideal guests are truly searching for.",
    image: sampleImg1,
    list: [
      "Traveller personas & behaviour",
      "Destination demand analysis",
      "Competitor positioning review",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "02",
    title: "Safari Keyword & Intent Mapping",
    desc: "We map high-intent safari keywords to each stage of the buyer journey — from inspiration to booking.",
    image: sampleImg2,
    list: [
      "Informational vs booking intent",
      "Destination & experience keywords",
      "Enquiry-focused search terms",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "03",
    title: "Content Planning for Buyer Journeys",
    desc: "We structure content around how travellers plan safaris, guiding them from discovery to decision.",
    image: sampleImg3,
    list: [
      "Awareness → consideration → booking",
      "Funnel-based content mapping",
      "Topic clusters for authority",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "04",
    title: "SEO-Driven Content Creation",
    desc: "We create optimised blogs, landing pages, and website content designed to rank and convert.",
    image: sampleImg4,
    list: [
      "Blog & landing page writing",
      "SEO formatting & internal linking",
      "Conversion-focused copy",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "05",
    title: "Website & Blog Optimisation",
    desc: "We refine your site structure, pages, speed, UX, and on-page SEO.",
    image: sampleImg3,
    list: [
      "Page speed & technical fixes",
      "On-page SEO improvements",
      "UX & navigation refinement",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "06",
    title: "Authority & Trust Building",
    desc:  "We strengthen your safari brand through backlinks, digital PR, and safari expertise signals.",
    image: sampleImg1,
    list: [
      "Backlink acquisition",
      "Brand mentions & citations",
      "Expertise & trust signals",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "07",
    title: "Performance Tracking & Refinement",
    desc: "We track your safari website rankings, traffic, and lead quality, and continuously improve.",
    image: sampleImg2,
    list: [
      "Keyword ranking reports",
      "Traffic & behaviour analysis",
      "Strategy optimisation",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
];

const OrganicTabinfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = smmData[activeIndex];

  return (
    <div className="organictab-details-sec">
      <div className="container">
        <div className="smm_tab_wrapper">

          {/* LEFT TABS */}
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

          {/* RIGHT CONTENT */}
          <div className="smm_tab_content">
            <div className="smm_content_card">
              <img src={activeData.image} alt={activeData.title} />

              <h3>{activeData.title}</h3>
              <p>{activeData.desc}</p>

              {/* LIST CONTENT */}
              <ul className="smm_feature_list">
                {activeData.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* BUTTON */}
              <Button
                text={activeData.buttonText}
                link="./"
                target="_self"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrganicTabinfo;
