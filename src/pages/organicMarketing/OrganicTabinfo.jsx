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
    title: "Comprehensive SEO Audit & Analysis",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: sampleImg1,
    list: [
      "Website health check",
      "SEO error detection",
      "Actionable recommendations",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "02",
    title: "Strategic Keyword Research",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: sampleImg2,
    list: [
      "High-intent keywords",
      "Competitor keyword gaps",
      "Search volume analysis",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "03",
    title: "On-Page SEO Optimisation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: sampleImg3,
    list: [
      "Meta tag optimisation",
      "Content optimisation",
      "Internal linking",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "04",
    title: "Technical SEO Implementation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: sampleImg4,
    list: [
      "Site speed optimisation",
      "Mobile SEO fixes",
      "Indexing & crawl fixes",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "05",
    title: "Content Strategy & Creation",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: sampleImg3,
    list: [
      "Content calendar",
      "SEO blog writing",
      "Landing page content",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "06",
    title: "Off-Page SEO & Authority Building",
    desc:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: sampleImg1,
    list: [
      "High-quality backlinks",
      "Brand mentions",
      "Authority building",
    ],
    buttonText: "Get Started",
    buttonLink: "/organic-marketing",  
  },
  {
    id: "07",
    title: "Competitor Analysis",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    image: sampleImg2,
    list: [
      "Competitor SEO audit",
      "Gap analysis",
      "Growth opportunities",
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
