import React from "react";
import Button from "../../components/Button";
import AgencyBrand from "../googleAdd/AgencyBrand";
import FrameworkBox from "../googleAdd/FrameworkBox";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ExCustomersSlider from "../googleAdd/ExCustomersSlider";
import Table from "react-bootstrap/Table";
import { IoMdCheckmark } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../googleAdd/AddBlog";
import social from "../../assets/images/social-media-pic.webp";
import Smmpic1 from "../../assets/images/smm-service1.webp";
import Smmpic2 from "../../assets/images/smm-service2.webp";

import SmmMedia1 from "../../assets/images/smm-media1.webp";
import SmmMedia2 from "../../assets/images/smm-media2.webp";
import SmmMedia3 from "../../assets/images/smm-media3.webp";
import SmmMedia4 from "../../assets/images/smm-media4.webp";
import SmmMedia5 from "../../assets/images/smm-media5.webp";
import Cta from "../../components/Cta";
import SmmTabBox from "./SmmTabBox";
import LeftCta from "../../components/LeftCta";

const SocialMedia = () => {
  const data = [
    {
      title: "Strategic Planning and Audience Targeting",
      image:
        "https://www.heroesofdigital.com/wp-content/uploads/2025/06/PPC-Audit@2x.webp",
      heading: "Strategic Planning and Audience Targeting",
      para: ` We begin by researching your unique African safari business needs to identify your ideal buyer personas. We set clear, measurable goals to ensure your brand stands out in the digital landscape, planning a strategy that aligns perfectly with your vision to reach the right travelers.
`,
      bgcolorone: "#f5f5f5",
    },
    {
      title: "Intent-Oriented Content Creation",
      image:
        "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Cads@2x.webp",
      heading: "Intent-Oriented Content Creation",
      para: "We curate high-quality visuals and copy designed to provide solutions to your target audience. From immersive reels for reach to educational carousels for engagement, every piece of content is part of a structured calendar intended to intrigue users and maintain your safari brand positioning.",
      bgcolorone: "#f7c245",
    },
    {
      title: "Cost-Effective Ad Management",
      image:
        "https://www.heroesofdigital.com/wp-content/uploads/2025/06/BMGAI@2x.webp",
      heading: "Cost-Effective Ad Management",
      para: "We run highly targeted ads to reach new travelers without draining your budget. By unlocking the full power of platforms like Facebook and Instagram, we ensure your safari packages and itineraries are seen by an unlimited number of prospects across your target locations.",
      bgcolorone: "#a7a3f4",
    },
    {
      title: "Journey Mapping & Retargeting",
      image:
        "https://www.heroesofdigital.com/wp-content/uploads/2025/06/E2E@2x.webp",
      heading: "Journey Mapping & Retargeting",
      para: "We map the customer journey to guide potential customers from discovery to booking. Through strategic remarketing, we re-engage visitors who have shown interest in your brand, effectively turning social media engagement into inquiries and sealing the deal.",
      bgcolorone: "#63eac4",
    },
    {
      title: "Data-Driven Analysis and Optimization",
      image:
        "https://www.heroesofdigital.com/wp-content/uploads/2025/06/Landing-Page@2x-1.webp",
      heading: "Data-Driven Analysis and Optimization",
      para: "We constantly analyze results to ensure your content aligns with your marketing goals. By monitoring metrics and A/B testing different creatives, we optimize campaigns in real time to generate revenue and maximize the profitability of your social media efforts.",
      bgcolorone: "#eeb9e1",
    },
    {
      title: "Conversion Support",
      image:
        "https://www.heroesofdigital.com/wp-content/uploads/2025/08/AB.webp",
      heading: "Conversion Support",
      para: "Your website is launched only after it meets our quality standards. The final result is a professional, fast, and marketing-ready safari website designed to support Google Ads, SEO, and future growth—so your online presence works as hard as you do.",
      bgcolorone: "#f5f5f5",
    },
  ];

  return (
    <div className="social-media-page">
      <div
        className="google-add-hero"
        style={{
          backgroundImage:
            "url('https://www.heroesofdigital.com/wp-content/uploads/2025/02/Minimal-Pattern-2-C.png')",
        }}
      >
        <div className="container">
          <div className="row add_hero">
            <div className="col-md-7">
              <div className="add-hero-ban-cont">
                <h3>Social Media Marketing</h3>
                <h1>
                  Discover the Full Potential of Social Media for{" "}
                  <span> Your Safari Brand</span>
                </h1>
                <p>
                  We help safari and tour operators turn social media into a
                  trust-building engine. Through strategic storytelling,
                  consistent content, community engagement, and targeted paid
                  campaigns, we move travelers from inspiration to inquiry and
                  from attention to long-term brand growth.
                </p>
                <div className="add-hero-btn-box">
                  <Button
                    text="Schedule a Social Media Consultation"
                    link="./"
                    target="_self"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="add-hero-brand">
                <img
                  src="https://www.heroesofdigital.com/wp-content/uploads/2025/07/right-img-banner-google-ads.png.webp"
                  alt="Safari Marketing Pro"
                  tittle="Safari Marketing Pro"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add_agency-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              500+ brands trust us with their <br />
              <span>Social Media Strategy</span>
            </h2>
          </div>
          <div className="agency_brand">
            <AgencyBrand />
          </div>
          <div className="googla-agec-logo">
            <div className="row brad_googleadd">
              <div className="col-md-2">
                <div className="brad_googleadd_log">
                  <img
                    src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/PremierBadge2025.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-md-10">
                <div className="brad_googleadd-para">
                  <p>
                    Get a Google Premier Partner team of certified Google
                    Adwords / SEM specialists who have a minimum of 2 years
                    experience managing various SEM campaigns locally. We help
                    you create the perfect combination of strategy and
                    implementation to ensure we achieve your goals.
                  </p>
                  <h3>Managed by Certified Google Ads professionals</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-media-marketing">
        <div className="container">
          <div className="row google_gark">
            <div className="col-md-6">
              <div className="comon-heading-box google_gark_left">
                <h2>
                  <span>
                    What is Social Media Marketing, and how can your safari
                    brand benefit from it?
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="google_gark_para">
                <h3>
                  Social Media Marketing (SMM) is the use of social media
                  platforms like Instagram, Facebook, and YouTube to promote
                  your safari brand, connect with travellers, and generate more
                  inquiries and bookings.
                </h3>
                <p>
                  It includes planning what to post, creating photos and videos,
                  engaging with followers, and running paid ads to guide
                  travellers from discovery to contact and booking.
                </p>
                <p>Think of social media as your virtual safari showroom.</p>
                <p>
                  Travelers browse your experiences, watch your stories, imagine
                  themselves on your tours, and build confidence in your brand
                  before deciding who to contact. The right strategy turns likes
                  and views into real safari guests.
                </p>
              </div>
            </div>
          </div>
          <div className="social-main-pic">
            <img src={social} alt="Social media marketing" className="w-100" />
          </div>
        </div>
      </div>
      <div className="smm-services-sec">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>
              Explore Authentic Success Stories From Safari Operators{" "}
              <span> Growing With SMP</span> .
            </h2>
          </div>
          <div className="smm-main-serv">
            <div className="row smm-ser-box">
              <div className="col-md-6">
                <div className="smm-service-card">
                  <div className="smm-service-card-pic">
                    <img src={Smmpic1} alt="" className="w-100" />
                  </div>
                  <div className="smm-service-card-para">
                    <h3>Mega Furniture: Turning Traffic Into Sales</h3>
                    <p>
                      Mega Furniture faced high competition and rising Google
                      cost-per-click (CPC) rates. By combining Facebook Ads with
                      SEM and retargeting, we improved funnel efficiency and
                      maximised digital conversions.
                    </p>

                    <div className="higt-sms-ser">
                      <p>
                        <span>860%</span>increase in conversions
                      </p>
                      <p>
                        <span>240%</span>reduction in cost per action (CPA)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="smm-service-card onemore-colo">
                  <div className="smm-service-card-pic">
                    <img src={Smmpic2} alt="" className="w-100" />
                  </div>
                  <div className="smm-service-card-para">
                    <h3>Chilli Manis: Catering That Clicks</h3>
                    <p>
                      Mega Furniture faced high competition and rising Google
                      cost-per-click (CPC) rates. By combining Facebook Ads with
                      SEM and retargeting, we improved funnel efficiency and
                      maximised digital conversions.
                    </p>

                    <div className="higt-sms-ser">
                      <p>
                        <span>860%</span>increase in conversions
                      </p>
                      <p>
                        <span>240%</span>reduction in cost per action (CPA)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-btn-box">
            <Button text="Client Success Stories" link="./" target="_self" />
          </div>
        </div>
      </div>
      <div className="make-us-effective-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              A Proven Social Media Marketing System to Scale Your{" "}
              <span>Safari Brand </span>
              and Drive Direct Inquiries
            </h2>
          </div>
          <div className="web-effective">
            <div className="effective-rors">
              <div className="web-effective-para">
                <h2>Meta Ads Targeting Ready-to-Book Travelers</h2>
                <p>
                  We build advanced Meta Campaign structures that reach
                  high-intent explorers. By targeting specific interests like
                  luxury travel and wildlife photography, we ensure your brand
                  roams free across the digital landscape. Our goal is to
                  capture audiences where they spend their time, leaving a
                  lasting impression that drives direct inquiries and bookings.
                </p>
              </div>
              <div className="web-effective-pic">
                <img
                  src={SmmMedia1}
                  alt="Designs that trigger emotions"
                  className="w-100"
                />
              </div>

              <div className="web-effective-pic">
                <img
                  src={SmmMedia2}
                  alt="Persuasive content"
                  className="w-100"
                />
              </div>
              <div className="web-effective-para">
                <h2>Meta Remarketing: The Digital Trail</h2>
                <p>
                  The journey from dreaming to booking a safari is a long
                  expedition. We use the Meta Pixel and API conversions to track
                  the digital trail of guests who have visited your website or
                  interacted with your Instagram. By serving them social proof
                  ads featuring guest testimonials and camp life, we remind
                  potential customers why your safari experiences are the
                  premier choice
                </p>
              </div>

              <div className="web-effective-para">
                <h2>Intent-Oriented Creatives and Content</h2>
                <p>
                  We curate content that provides solutions to your target
                  audience and intrigues users to engage. Our mobile-first
                  strategy focuses on:
                </p>
                <ul>
                  <li>
                    Immersive Reels: High-energy wildlife encounters and camp
                    tours designed for maximum reach in the digital savannah.
                  </li>
                  <li>
                    Educational Carousels: Detailed slides that answer common
                    traveler queries to boost engagement and authority.
                  </li>
                  <li>
                    Story Ads and Highlights: Organizing essential information
                    and interactive elements to drive direct inquiries for your
                    next departure.
                  </li>
                  <li>
                    Brand Storytelling: Sharing the authentic essence of your
                    safari experience to build a consistent brand identity that
                    stands out.
                  </li>
                </ul>
              </div>
              <div className="web-effective-pic">
                <img
                  src={SmmMedia3}
                  alt="Convert more visitors into leads"
                  className="w-100"
                />
              </div>

              <div className="web-effective-pic">
                <img
                  src={SmmMedia4}
                  alt="Loads blazing fast"
                  className="w-100"
                />
              </div>
              <div className="web-effective-para">
                <h2>Marketing Technology and Account Optimization</h2>
                <p>
                  We remove the guesswork by integrating advanced tracking tools
                  with your Meta Business Suite. Our data-driven approach
                  includes:
                </p>
                <ul>
                  <li>
                    Profile Optimization: Ensuring your profile images and
                    contact links are optimized to maximize first impressions
                    and capture leads.
                  </li>
                  <li>
                    Lead Expedition: Using Meta Lead Forms and optimized booking
                    pages to capture traveler details instantly, ensuring no
                    lead goes cold in the bush.
                  </li>
                  <li>
                    Analysis and Results: Monitoring every post to analyze
                    engagement and shifting budgets in real-time to the ads that
                    generate high-value inquiries and direct revenue.
                  </li>
                </ul>
              </div>

              {/* <div className="web-effective-para">
                <h2>Marketing Technology and Account Optimization</h2>
                <p>
                  We remove the guesswork by integrating advanced tracking tools
                  with your Meta Business Suite. Our data-driven approach
                  includes:
                </p>
                <ul>
                  <li>
                    Profile Optimization: Ensuring your profile images and
                    contact links are optimized to maximize first impressions
                    and capture leads.
                  </li>
                  <li>
                    Lead Expedition: Using Meta Lead Forms and optimized booking
                    pages to capture traveler details instantly, ensuring no
                    lead goes cold in the bush.
                  </li>
                  <li>
                    Analysis and Results: Monitoring every post to analyze
                    engagement and shifting budgets in real-time to the ads that
                    generate high-value inquiries and direct revenue.
                  </li>
                </ul>
              </div>
              <div className="web-effective-pic">
                <img
                  src={SmmMedia5}
                  alt="Looks beautiful on all devices"
                  className="w-100"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="google_garketing-sec smm-facebook-code">
        <div className="container">
          <div className="row google_gark">
            <div className="col-md-6">
              <div className="comon-heading-box google_gark_left">
                <h2>
                  Facebook Advertising Solutions That{" "}
                  <span>Drive Real Business Growth</span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="google_gark_para">
                <p>
                  At Heroes of Digital, we help Singapore businesses — from
                  start-ups to established enterprises — grow with Meta Ads
                  campaigns designed for leads, sales, and ROI.{" "}
                </p>
                <p>
                  As a trusted Meta advertising agency in Singapore, we follow a
                  proven framework:
                </p>
                <ul className="customers-exp-list">
                  <li>More hot leads through targeted Google Ads </li>
                  <li>
                    Boost your return on ad spend with optimised campaigns
                  </li>
                  <li>Stay ahead of trends with data-backed strategies</li>
                  <li>Measure the true impact of your ad campaigns on sales</li>
                </ul>
                <p>
                  This ensures your social media ad spend scales with your
                  business. When comparing the best Facebook marketing agencies
                  in Singapore, choose one that ties every click to measurable
                  revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-cta-box">
        <div className="container">
          <Cta />
        </div>
      </div>
      <div className="smm-details-tab-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Tailored Social Media Solutions for <span>Safari Brands</span>
            </h2>
            <p>
              As one of the leading Facebook ads agencies in Singapore, we
              provide end-to-end Meta Ads services:
            </p>
          </div>
          <div className="tab-social-del">
            <SmmTabBox />
          </div>
        </div>
      </div>

      <div className="framework-sec smm-frame-box">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>
              Our Proven Social Media Strategy for{" "}
              <span> African Safari Operators </span>
            </h2>
            <p>
              When it comes to Google Ads, we follow a proven process designed
              to get you the highest Return on Ad Spend (ROAS). Here’s how we do
              it.
            </p>
          </div>
          <div className="frmae-workflow">
            {/* <FrameworkBox /> */}
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
            <div className="frame-btn-box">
              <Button text="Get Proposal" link="./" target="_self" />
            </div>
          </div>
        </div>
      </div>
      <div className="digital-vs-rest-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>Safari Marketing Pro of Digital vs The Rest</h2>
          </div>
          <div className="digital-card-main">
            <div className="row digital-child-card">
              <div className="col-md-4">
                <div className="digital-card add-colorbg">
                  <h3>SMP of Digital</h3>
                  <ul className="digital-card-list">
                    <li>
                      <FaCheckCircle /> Dedicated account manager backed by a
                      team of 100+ digital marketing pros
                    </li>
                    <li>
                      <FaCheckCircle />
                      Automated reporting dashboard that shows all your key
                      metrics in one place, anytime
                    </li>
                    <li>
                      <FaCheckCircle />
                      AI-driven insights that connect campaigns to real business
                      impact, online and offline
                    </li>
                    <li>
                      <FaCheckCircle />
                      Holistic strategies focused on revenue—not just clicks,
                      leads, or rankings
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="digital-card">
                  <h3>In-House Teams</h3>
                  <ul className="digital-card-list">
                    <li>
                      <FaRegCheckCircle className="gigital-check-ico" />
                      Understands metrics, but might not know how to turn that
                      into growth
                    </li>
                    <li>
                      <FaRegCheckCircle className="gigital-check-ico" />
                      Understands metrics, but might not know how to turn that
                      into growth
                    </li>
                    <li>
                      <IoIosCloseCircleOutline /> One or two people juggling it
                      all and struggling to keep up with rapid changes
                    </li>
                    <li>
                      <IoIosCloseCircleOutline /> Analytics tools, but often
                      stretched thin trying to make sense of it all
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="digital-card">
                  <h3>Typical Marketing Agency</h3>
                  <ul className="digital-card-list">
                    <li>
                      <IoIosCloseCircleOutline />
                      Account manager, but limited in scope and resources
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Manual reports in Excel or Word—slow and prone to errors
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Surface-level analysis that rarely digs into true business
                      outcomes
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-btn-box">
            <Button text="Get a Proposal Today!" link="./" target="_self" />
          </div>
        </div>
      </div>

      <div className="ctatwo-box">
        <div className="container">
          <LeftCta />
        </div>
      </div>

      <div className="service-packages-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>Our Social Media Marketing Packages</h2>
            <p>
              As Africa’s leading safari marketing agency, we offer social media
              marketing packages that grow with your safari business, boosting
              visibility, inquiries, and bookings while positioning your brand
              as a trusted provider of unforgettable safari experiences.
            </p>
          </div>
          <div className="service-packages">
            <Table striped hover>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Tier 1</th>
                  <th>Tier 2</th>
                  <th>Tier 3</th>
                  {/* <th>Tier 4</th>
                  <th>Tier 5</th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Budget</td>
                  <td>1000$</td>
                  <td>2000$</td>
                  <td>Above 2000$</td>
                  {/* <td>$30,000 to $79,999 per month</td>
                  <td>$80,000 per month and above</td> */}
                </tr>
                <tr>
                  <td>Social media account setup & optimisation</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  {/* <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td> */}
                </tr>
                <tr>
                  <td>Content calendar & posting schedule</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  {/* <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td> */}
                </tr>
                <tr>
                  <td>Paid ads management (Facebook & Instagram)</td>
                  <td>-</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  {/* <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td> */}
                </tr>
                {/* <tr>
                  <td>Monthly performance reporting</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                </tr> */}
                <tr>
                  <td>Monthly performance reporting</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  {/* <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td> */}
                </tr>
                <tr>
                  <td>Community engagement & monitoring</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  {/* <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td> */}
                </tr>
                <tr>
                  <td>Strategy review & optimisation</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  {/* <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td> */}
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="frame-btn-box">
            <Button
              text="Match Me to the Right Package"
              link="./"
              target="_self"
            />
          </div>
        </div>
      </div>
      <div className="full-funell-sec smm-new-panel">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Get a <span>full-funnel digital marketing strategy</span> with our
              following services
            </h2>
          </div>
          <div className="funnel-main-details">
            <div className="row funnel-details">
              <div className="col-md-4">
                <div className="funnel-details-card">
                  <h3>Create & manage powerful ad campaigns</h3>
                  <ul className="funnel-details_list">
                    <li>
                      <FaRegCheckCircle />
                      SEM Management Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Social Advertising Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Programmatic Advertising Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Geofencing Advertising Services
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="funnel-details-card">
                  <h3>Collect, analyse and deploy marketing data</h3>
                  <ul className="funnel-details_list">
                    <li>
                      <FaRegCheckCircle />
                      SEM Management Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Social Advertising Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Programmatic Advertising Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Geofencing Advertising Services
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="funnel-details-card">
                  <h3>Stronger Brand. Higher Conversions.</h3>
                  <ul className="funnel-details_list">
                    <li>
                      <FaRegCheckCircle />
                      SEM Management Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Social Advertising Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Programmatic Advertising Services
                    </li>
                    <li>
                      <FaRegCheckCircle />
                      Geofencing Advertising Services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="customers-expect-sec">
        <div className="container">
          <div className="customers-expect-box">
            <div className="row customers-exp">
              <div className="col-md-8">
                <div className="customers-exp-data">
                  <div className="comon-heading-box google_gark_left">
                    <h2>
                      Ready to turn <span>clicks into customers</span> ?
                    </h2>
                    <p>
                      Are you getting the full potential of your digital
                      campaigns? Partner with Heroes of Digital today!
                    </p>
                  </div>
                  <h3>What you can expect from us:</h3>
                  <ul className="customers-exp-list">
                    <li>More hot leads through targeted Google Ads </li>
                    <li>
                      Boost your return on ad spend with optimised campaigns
                    </li>
                    <li>Stay ahead of trends with data-backed strategies</li>
                    <li>
                      Measure the true impact of your ad campaigns on sales
                    </li>
                  </ul>
                  <p>
                    Get a free Google Ads proposal, including a bonus pricing
                    plan.
                  </p>
                  <Button text="Get Proposal" link="./" target="_self" />
                </div>
              </div>
              <div className="col-md-4">
                <ExCustomersSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smm-faq-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>FAQs</h2>
            <p>FAQs About Social Media Marketing & Meta Ads</p>
          </div>
          <div className="addfaq_main">
            <div className="row orroraddfaq">
              <div className="col-md-6">
                <div className="add-faq-details">
                  <Accordion
                    defaultActiveKey="0"
                    flush
                    className="faq-accordion"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        What is social media marketing?
                      </Accordion.Header>
                      <Accordion.Body>
                        Social media marketing is promoting your safari brand on
                        platforms like Facebook, Instagram, TikTok, and LinkedIn
                        to reach travelers, engage audiences, and drive
                        bookings.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>What are Meta Ads?</Accordion.Header>
                      <Accordion.Body>
                        Meta Ads are paid advertisements on Facebook and
                        Instagram that target specific audiences based on
                        interests, location, and behavior, helping your safari
                        business reach the right travelers at the right time.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Why use Meta Ads for safari businesses?
                      </Accordion.Header>
                      <Accordion.Body>
                        Meta Ads allow you to showcase your safaris to people
                        actively searching for travel experiences, increasing
                        inquiries, website traffic, and direct bookings.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        How long before I see results from social media
                        marketing and Meta Ads?
                      </Accordion.Header>
                      <Accordion.Body>
                        Organic engagement may show within weeks, while results
                        from Meta Ads, like clicks, inquiries, and bookings, can
                        be seen in days to a few weeks, depending on campaign
                        size and targeting.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Do I need to post daily on social media?
                      </Accordion.Header>
                      <Accordion.Body>
                        Consistency is key. What matters most is having the
                        right strategy and sticking to a regular posting
                        schedule. We also run A/B tests to track how posts and
                        ads perform and make adjustments for optimal results.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
              <div className="col-md-6">
                <div className="add-faq-details">
                  <Accordion
                    defaultActiveKey="0"
                    flush
                    className="faq-accordion"
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        How do Meta Ads work with my safari business website?
                      </Accordion.Header>
                      <Accordion.Body>
                        Meta Ads direct potential travelers to your website or
                        inquiry forms, turning social engagement into qualified
                        leads and confirmed bookings.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Can social media marketing and Meta Ads increase
                        bookings directly?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. When combined strategically, organic content and
                        Meta Ads generate visibility, engagement, and leads that
                        convert into actual bookings.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How much do social media marketing and Meta Ads cost?
                      </Accordion.Header>
                      <Accordion.Body>
                        Costs vary by package, ad spend, and platform. Packages
                        are scalable, so your investment grows as your safari
                        business grows.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        How do I measure success?
                      </Accordion.Header>
                      <Accordion.Body>
                        We track engagement, reach, website clicks, Meta Ad
                        performance, inquiries, and bookings to ensure your
                        marketing drives real revenue, not just likes and
                        follows.
                      </Accordion.Body>
                    </Accordion.Item>
                  
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="add-page-blog-sec">
        <div className="container">
          <div className="blog-heading">
            <h2>
              <span>Relevant Blog</span> Posts
            </h2>
            <Button text="View More" link="./" target="_self" />
          </div>
          <div className="blog-slid-box">
            <AddBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
