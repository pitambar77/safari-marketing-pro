const data = [
  {
    title: "Campaign Strategy and Management",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/PPC-Audit@2x.webp",
    heading: "Campaign Strategy and Management" ,
    para: ` Safari-focused Search campaign setup and optimisation  Destination and experience-based keyword targeting`,
    bgcolorone: "#f5f5f5",
    list:[
      "Safari-focused Search campaign setup and optimisation",
      "Destination and experience-based keyword targeting",
      "Competitor and brand protection campaigns",
      "Seasonal and budget-smart bid management"
    ]
  },
  {
    title: "High-Intent SEM",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Cads@2x.webp",
    heading: "High-Intent SEM",
    para: "Once your goals are defined, we plan the structure of your website. Together, we map out safari itineraries, destination pages, enquiry flow, and trust-building elements. At this stage, we also guide you on what we need from you, such as images, logos, branding assets, and safari details—making the process simple and well-organized.",
    bgcolorone: "#f7c245",
    list:[
      "Buyer-driven keyword research for safari travel",
      "Conversion-focused ad copy",
      "Smart bidding to control cost per inquiry",
      "Continuous testing and refinement"
    ]
  },
  {
    title: "Display and Remarketing",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/BMGAI@2x.webp",
    heading: "Display and Remarketing",
    para: "Our design and development team then creates layouts that bring your safari experience to life. You’ll see how your destinations, lodges, and itineraries are presented visually, with clear paths that guide visitors toward enquiries. Every layout is designed with real safari booking behaviour and long-term business growth in mind.",
    bgcolorone: "#a7a3f4",
    list:[
      "Responsive display ads across Google’s network",
      "Visitor remarketing for long research journeys",
      "Funnel-based messaging by travel stage",
     
    ]
  },
  {
    title: "Market and Geo Targeting",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/E2E@2x.webp",
    heading: "Market and Geo Targeting",
    para: "Content plays a key role in building trust and visibility. We help structure and refine destination pages, safari descriptions, and experience-led content that adds real value for travellers. This not only improves engagement but also strengthens SEO and supports marketing campaigns.",
    bgcolorone: "#63eac4",
    list:[
      "Country and city-level traveller targeting",
      "International market segmentation",
      "Testing new source markets for safari demand",
     
    ]
  },
  {
    title: "Tracking and Lead Intelligence",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Landing-Page@2x-1.webp",
    heading: "Tracking and Lead Intelligence",
    para: "Once the design is approved, our developers build your website with performance, speed, and responsiveness in mind. Before launch, we carry out thorough testing across devices and browsers to ensure everything works smoothly—from enquiry forms to mobile usability—so no potential inquiry is lost.",
    bgcolorone: "#eeb9e1",
    list:[
      "Conversion tracking (forms, calls, email, WhatsApp)",
      "Google Analytics 4 integration",
      "Cost-per-lead and ROI dashboards",
      
    ]
  },
  {
    title: "Conversion Support",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/08/AB.webp",
    heading: "Conversion Support",
    para: "Your website is launched only after it meets our quality standards. The final result is a professional, fast, and marketing-ready safari website designed to support Google Ads, SEO, and future growth—so your online presence works as hard as you do.",
    bgcolorone: "#f5f5f5",
    list:[
      "Safari landing page strategy",
      "Inquiry form optimisation",
      "Message testing to improve lead quality",
      
    ]
  },
];

const FrameworkBox = () => {
  return (
    <div className="frame-work-main">
      <div className="row frame-layout">
        {data.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="frame-work-box">
              <div
                style={{ background: `${item.bgcolorone}` }}
                className="frame-images-box"
              >
                <img src={item.image} alt={item.title} />
              </div>
              <div className="frame-detail-con">
                <h3>{item.heading}</h3>
                {/* <p>{item.para}</p> */}
              </div>
              {/* ✅ Render list if available */}
                {item.list && item.list.length > 0 && (
                  <ul className="frame-list">
                    {item.list.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkBox;
