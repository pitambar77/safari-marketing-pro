import React, { useEffect, useRef, useState } from "react";
import "./FunnelSection.css";

const funnelData = [
  {
    title: "Drive website traffic",
    items: [
      "SEO Services",
      "Local SEO Services",
      "Ecommerce SEO Services",
      "Content Marketing Services",
    ],
  },
  {
    title: "Create and manage powerful ad campaigns",
    items: [
      "Google Advertising Services",
      "Meta Advertising Services",
      "TikTok Advertising Services",
      "YouTube Advertising Services",
    ],
  },
  {
    title: "Collect, analyse & deploy marketing data",
    items: [
      "Analytics Dashboard",
      "Website Call Tracking",
      "Lead Management",
    ],
  },
  {
    title: "Improve brand messaging & conversions",
    items: [
      "Website Design Services",
      "Landing Page Design Services",
      "Conversion Rate Optimisation (CRO) Services",
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
      { threshold: 0.25 }
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
