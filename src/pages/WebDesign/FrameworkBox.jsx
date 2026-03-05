const data = [
  {
    title: "Understanding Your Safari Business & Goals",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/PPC-Audit@2x.webp",
    heading: "Understanding Your Safari Business & Goals",
    para: ` Every safari operation is unique—your routes, destinations, style of travel, and target markets all matter. We begin by understanding your business goals, the type of travellers you want to attract, and how you currently generate inquiries. This helps us shape a website that reflects your brand and supports your growth, not a generic template.
`,
    bgcolorone: "#f5f5f5",
  },
  {
    title: "Creating a Clear Website Structure",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Cads@2x.webp",
    heading: "Creating a Clear Website Structure",
    para: "Once your goals are defined, we plan the structure of your website. Together, we map out safari itineraries, destination pages, enquiry flow, and trust-building elements. At this stage, we also guide you on what we need from you, such as images, logos, branding assets, and safari details—making the process simple and well-organized.",
    bgcolorone: "#f7c245",
  },
  {
    title: "Designing Layouts That Sell the Safari Experience",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/BMGAI@2x.webp",
    heading: "Designing Layouts That Sell the Safari Experience",
    para: "Our design and development team then creates layouts that bring your safari experience to life. You’ll see how your destinations, lodges, and itineraries are presented visually, with clear paths that guide visitors toward enquiries. Every layout is designed with real safari booking behaviour and long-term business growth in mind.",
    bgcolorone: "#a7a3f4",
  },
  {
    title: "Adding High-Value Destination & Safari Content",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/E2E@2x.webp",
    heading: "Adding High-Value Destination & Safari Content",
    para: "Content plays a key role in building trust and visibility. We help structure and refine destination pages, safari descriptions, and experience-led content that adds real value for travellers. This not only improves engagement but also strengthens SEO and supports marketing campaigns.",
    bgcolorone: "#63eac4",
  },
  {
    title: "Development, Testing & Quality Assurance",
    image:
      "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Landing-Page@2x-1.webp",
    heading: "Development, Testing & Quality Assurance",
    para: "Once the design is approved, our developers build your website with performance, speed, and responsiveness in mind. Before launch, we carry out thorough testing across devices and browsers to ensure everything works smoothly—from enquiry forms to mobile usability—so no potential inquiry is lost.",
    bgcolorone: "#eeb9e1",
  },
  {
    title: "Launch & Marketing-Ready Delivery",
    image: "https://www.heroesofdigital.com/wp-content/uploads/2025/08/AB.webp",
    heading: "Launch & Marketing-Ready Delivery",
    para: "Your website is launched only after it meets our quality standards. The final result is a professional, fast, and marketing-ready safari website designed to support Google Ads, SEO, and future growth—so your online presence works as hard as you do.",
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
              <div
                style={{ background: `${item.bgcolorone}` }}
                className="frame-images-box"
              >
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
