import React, { useEffect, useRef, useState } from "react";
import "./FunnelSection.css";

const funnelData = [
  {
    title: "Safari Web Design",
    items: [
     
      
      "Launch your safari website",
      "Testing and fixing website errors",
       "Understand your safari business goals",
      "Develop a world-class website structure",
      "Create value-added content and itineraries",
    ],
  },
  {
    title: "Organic Marketing (SEO)",
    items: [
      "Optimise your safari content",
      "Research intent safari keywords",
      "On-site SEO for your safari website",

      "Build backlinks to your safari website",
      "Analyse your leading safari competitors",
      "Analyse your safari site ranks and traffic",
    ],
  },
  {
    title: "Paid Marketing",
    items: [
      "Create safari ad copies",
      "Create safari landing pages",
      "Publish and manage safari campaigns",
      "Market trends and competitor research",
      "Keyword research and audience segmentation",
    ],
  },
  {
    title: "Sales ",
    items: [
      "Keep follow-ups in every possible way",
      "Attend to safari inquiries immediately",

      "Present safari itineraries to attract inquiries",
      "Add value about your destinations to close deals",
    ],
  },
];

const FunnelSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let index = 0;
        const timer = setInterval(() => {
          setVisibleIndex((prev) => {
            if (prev < funnelData.length - 1) return prev + 1;
            clearInterval(timer);
            return prev;
          });
          index++;
        }, 350);
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="funnel-section" ref={sectionRef}>
      {funnelData.map((box, index) => (
        <div
          key={index}
          className={`funnel-box ${index <= visibleIndex ? "show" : ""}`}
        >
          <div className="funnel-content">
            <div className="funnel-inner">
              <h3>{box.title}</h3>
              <ul>
                {box.items.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FunnelSection;
