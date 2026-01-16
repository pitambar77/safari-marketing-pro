const data = [
  {
    title: "Thorough SEM Audit & Strategy Development",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/06/PPC-Audit@2x.webp",
    heading: "Thorough SEM Audit & Strategy Development",
    para: "We take a deep dive into your market, competitors, and past campaign data to uncover untapped growth opportunities. By identifying the search terms, targeting gaps, and trends others miss, we build a strategy that works to your budget while maximising every dollar you spend. From day one, your campaigns start with a clear edge.",
    bgcolorone: "#f5f5f5",
  },
  {
    title: "Campaign & Ads Creation",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Cads@2x.webp",
    heading: "Campaign & Ads Creation",
    para: "We take a deep dive into your market, competitors, and past campaign data to uncover untapped growth opportunities. By identifying the search terms, targeting gaps, and trends others miss, we build a strategy that works to your budget while maximising every dollar you spend. From day one, your campaigns start with a clear edge.",
    bgcolorone: "#f7c245",
  },
  {
    title: "Landing Page Optimisation",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/06/BMGAI@2x.webp",
    heading: "Landing Page Optimisation",
    para: "We take a deep dive into your market, competitors, and past campaign data to uncover untapped growth opportunities. By identifying the search terms, targeting gaps, and trends others miss, we build a strategy that works to your budget while maximising every dollar you spend. From day one, your campaigns start with a clear edge.",
    bgcolorone: "#a7a3f4",
  },
 {
    title: "Bid Management & Google Ads Optimisation",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/06/E2E@2x.webp",
    heading: "Bid Management & Google Ads Optimisation",
    para: "We take a deep dive into your market, competitors, and past campaign data to uncover untapped growth opportunities. By identifying the search terms, targeting gaps, and trends others miss, we build a strategy that works to your budget while maximising every dollar you spend. From day one, your campaigns start with a clear edge.",
    bgcolorone: "#63eac4",
  },
  {
    title: "First Party Data & Full Conversion Tracking",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Landing-Page@2x-1.webp",
    heading: "First Party Data & Full Conversion Tracking",
    para: "We take a deep dive into your market, competitors, and past campaign data to uncover untapped growth opportunities. By identifying the search terms, targeting gaps, and trends others miss, we build a strategy that works to your budget while maximising every dollar you spend. From day one, your campaigns start with a clear edge.",
    bgcolorone: "#eeb9e1",
  },
   {
    title: "A/B Testing",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/08/AB.webp",
    heading: "A/B Testing",
    para: "We take a deep dive into your market, competitors, and past campaign data to uncover untapped growth opportunities. By identifying the search terms, targeting gaps, and trends others miss, we build a strategy that works to your budget while maximising every dollar you spend. From day one, your campaigns start with a clear edge.",
    bgcolorone: "#f5f5f5",
  },
];

const FrameworkBox = () => {
  return (
    <div className="frame-work-main">
      <div className="row frame-layout">
        {data.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="frame-work-box">
              <div style={{background:`${item.bgcolorone}`}} className="frame-images-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="frame-detail-con">
                <h3>{item.heading}</h3>
                <p>{item.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkBox;
