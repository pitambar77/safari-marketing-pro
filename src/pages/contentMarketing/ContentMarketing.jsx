import React from "react";
import Button from "../../components/Button";
import AgencyBrand from "../googleAdd/AgencyBrand";
import ContentTabinfo from "./ContentTabinfo";
import Contpico1 from "../../assets/images/video-service1.webp";
import Contpico2 from "../../assets/images/video-service2.webp";
import Contpico3 from "../../assets/images/video-service3.webp";
import Contpico4 from "../../assets/images/video-service4.webp";
import Contpico5 from "../../assets/images/video-service5.webp";
import Contpico6 from "../../assets/images/video-service6.webp";
import Accordion from "react-bootstrap/Accordion";
import { GoDotFill } from "react-icons/go";
import VideoGallery from "./VideoGallery";
import ContentCustomerSlider from "./ContentCustomerSlider";

const ContentMarketing = () => {
  return (
    <div className="contain-marketing-page">
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
                <h3>Content Marketing</h3>
                <h1>
                  Convert Your Audience With{" "}
                  <span> Tailored Content Marketing </span>
                </h1>
                <p>
                  When someone considers a safari, it’s not just a trip; it’s a
                  dream, sometimes a once-in-a-lifetime experience. Before they
                  reach out, they’re asking themselves: “Can I trust these
                  people to make my dream real?”
                </p>
                <div className="add-hero-btn-box">
                  <Button text="Get Free Proposal" link="./" target="_self" />
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
              Safari Brands That Trust Us <br />{" "}
              <span> With Their Content </span>
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
      <div className="creative-content-tab-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>How We Craft Content That Converts</h2>
            <p>We do not just write words. We:</p>
          </div>
          <div className="smp-creative-con-box">
            <ContentTabinfo />
          </div>
        </div>
      </div>
      <div className="video-production-sec">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>
              What <span> We Create </span> for You
            </h2>
            <p>
              As part of our Content Marketing strategy, we build a structured
              ecosystem that supports visibility, engagement, and conversions
              across every stage of the traveller journey:
            </p>
          </div>
          <div className="video-production-content">
            <div className="content-viseo-box">
              <div className="video-production-card">
                <img
                  src={Contpico1}
                  alt="Scripting & Storyboarding That Sells"
                  className="w-100"
                />
                <h3>SEO-Driven Blog Strategy</h3>
                <p>
                  We create search-intent aligned blog content that captures
                  travellers in the research phase, drives qualified organic
                  traffic, and feeds your long-term visibility on search
                  engines.
                </p>
              </div>
              <div className="video-production-card">
                <img
                  src={Contpico2}
                  alt="Full-Funnel Video Shoots (UGC, Reels, Explainers & More)"
                  className="w-100"
                />
                <h3>Conversion-Led Landing Page Content</h3>
                <p>
                  We refine and develop website pages and campaign landing pages
                  that guide visitors toward enquiries, combining persuasive
                  copy, clear structure, and strong calls to action.
                </p>
              </div>
              <div className="video-production-card">
                <img
                  src={Contpico3}
                  alt="Editing, Optimisation & Multi-Platform Delivery"
                  className="w-100"
                />
                <h3>Strategic Content Frameworks for Social</h3>
                <p>
                  We design storytelling frameworks that ensure your content is
                  purposeful, aligned with your safari brand voice, and
                  connected to broader marketing goals rather than random
                  posting.
                </p>
              </div>
              <div className="video-production-card">
                <img
                  src={Contpico4}
                  alt="Performance Tracking with Advanced software"
                  className="w-100"
                />
                <h3>Authority & Pillar Content Development</h3>
                <p>
                  We produce in-depth guides and cornerstone content that
                  positions your safari brand as an industry authority,
                  strengthening trust while supporting your overall SEO
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-production-sec">
        <div className="container">
          <div className="content-prod-box">
            <div className="content-pro-hed">
              <h2>Video production for websites</h2>
              <p>
                Video is the most engaging form of content, but most businesses
                aren’t using it to its full potential. Our in-house team of
                creatives work with you to produce compelling narratives. From
                here, we’ll capture the footage and professionally edit your
                video, so the final product is captivating and delivers the
                message you originally set out to achieve.
              </p>
            </div>
            <div className="content-pro-hed">
              <img
                src={Contpico5}
                alt="Video production for websites"
                className="w-100"
              />
            </div>
            <div className="content-pro-hed">
              <img
                src={Contpico6}
                alt="Video production for websites"
                className="w-100"
              />
            </div>
            <div className="content-pro-hed">
              <h2>Social media video production</h2>
              <div className="content-tab-infomation">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Content Audits & Optimisation
                    </Accordion.Header>
                    <Accordion.Body>
                      We analyse your existing blogs, destination pages, and
                      itineraries to identify gaps, improve rankings, refresh
                      outdated information, and optimise underperforming content
                      to increase enquiries.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Internal Linking & Content Architecture
                    </Accordion.Header>
                    <Accordion.Body>
                      We structure and connect your content strategically so
                      blogs, itineraries, and landing pages support each other,
                      improving SEO strength while guiding travellers smoothly
                      through the booking journey.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Content Performance Reporting & Insights
                    </Accordion.Header>
                    <Accordion.Body>
                      We provide clear reporting on traffic growth, keyword
                      movement, engagement, and enquiry contribution, helping
                      you understand what content drives revenue and where to
                      scale further.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="framework-sec">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>
              The Right Content for Every Stage of Your{" "}
              <span> Safari Booking Funnel </span>
            </h2>
            <p>
              When it comes to Google Ads, we follow a proven process designed
              to get you the highest Return on Ad Spend (ROAS). Here’s how we do
              it.
            </p>
          </div>
          <div className="frmae-workflow">
            <div className="row frame-layout">
              <div className="col-md-6">
                <div className="frame-work-box">
                  <div
                    className="frame-images-box"
                    style={{ background: "#f5f5f5" }}
                  >
                    <img
                      alt="Top of Funnel (Awareness & Engagement)"
                      src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/PPC-Audit@2x.webp"
                    />
                  </div>
                  <div className="frame-detail-con">
                    <h3>Top of Funnel (Inspiration & Discovery)</h3>
                    <p>
                      This is where potential guests are dreaming, researching
                      destinations, and exploring safari possibilities.
                    </p>
                    <p>
                      <GoDotFill /> SEO blogs like “Best Time to Visit the
                      Serengeti” or “What to Pack for an African Safari”
                    </p>
                    <p>
                      <GoDotFill /> Destination guides featuring parks,
                      wildlife, and seasonal highlights
                    </p>
                    <p>
                      <GoDotFill /> Wildlife education content (Great Migration,
                      Big Five, gorilla trekking)
                    </p>
                    <p>
                      <GoDotFill />
                      Inspirational social content showcasing experiences,
                      landscapes, and moments in the wild
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="frame-work-box">
                  <div
                    className="frame-images-box"
                    style={{ background: "#f7c245" }}
                  >
                    <img
                      alt="Middle of Funnel (Consideration & Education)"
                      src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Cads@2x.webp"
                    />
                  </div>
                  <div className="frame-detail-con">
                    <h3>Middle of Funnel (Planning & Comparison)</h3>
                    <p>
                      At this stage, travellers are narrowing down destinations,
                      lodges, and operators.
                    </p>
                    <p>
                      <GoDotFill /> Detailed safari itinerary pages with clear
                      inclusions and highlights
                    </p>
                    <p>
                      <GoDotFill /> Camp and lodge comparisons
                    </p>
                    <p>
                      <GoDotFill /> Sample pricing guides and package breakdowns
                    </p>
                    <p>
                      <GoDotFill />
                      Testimonials, reviews, and real guest stories
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="frame-work-box">
                  <div
                    className="frame-images-box"
                    style={{ background: "#a7a3f4" }}
                  >
                    <img
                      alt="Bottom of Funnel (Conversion & Remarketing)"
                      src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Landing-Page@2x-1.webp"
                    />
                  </div>
                  <div className="frame-detail-con">
                    <h3>Bottom of Funnel (Enquiry & Booking)</h3>
                    <p>
                      Here, guests are almost ready to commit and need clarity
                      and reassurance.
                    </p>
                    <p>
                      <GoDotFill /> High-converting landing pages for specific
                      safari packages
                    </p>
                    <p>
                      <GoDotFill /> Clear pricing transparency and what’s
                      included
                    </p>
                    <p>
                      <GoDotFill /> FAQs addressing safety, visas, payments, and
                      logistics
                    </p>
                    <p>
                      <GoDotFill />
                      Strong enquiry-driven calls to action with simple contact
                      options
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="frame-work-box">
                  <div
                    className="frame-images-box"
                    style={{ background: "#63eac4" }}
                  >
                    <img
                      alt="Top of Funnel (Awareness & Engagement)"
                      src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/E2E@2x.webp"
                    />
                  </div>
                  <div className="frame-detail-con">
                    <h3>Top of Funnel (Awareness & Engagement)</h3>
                    <p>
                      These videos are designed to stop the scroll, spark
                      interest, and introduce your brand or offer.
                    </p>
                    <p>
                      <GoDotFill /> SEO blogs like “Best Time to Visit the
                      Serengeti” or “What to Pack for an African Safari”
                    </p>
                    <p>
                      <GoDotFill /> Destination guides featuring parks,
                      wildlife, and seasonal highlights
                    </p>
                    <p>
                      <GoDotFill /> Wildlife education content (Great Migration,
                      Big Five, gorilla trekking)
                    </p>
                    <p>
                      <GoDotFill />
                      Inspirational social content showcasing experiences,
                      landscapes, and moments in the wild
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="frame-btn-box">
            <Button text="Get Proposal" link="./" target="_self" />
          </div>
        </div>
      </div>
      <div className="recent-content-video-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Recent <span> Content Marketing Campaigns </span> Driving Safari
              Bookings
            </h2>
            <p>
              Here’s a look at how we’ve helped safari operators turn strategic
              content into stronger visibility, qualified enquiries, and
              measurable growth across their digital platforms.
            </p>
          </div>
          <div className="content-viv-gallery">
            <VideoGallery />
          </div>
        </div>
      </div>
      <div className="content-customer-review-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              What Safari Brands Like Yours Say About Our{" "}
              <span> Content Marketing Services </span>
            </h2>
            <p>
              Don’t just take our word for it, hear directly from safari
              operators who have transformed their visibility, enquiries, and
              bookings through our strategic content marketing approach.
            </p>
          </div>
          <ContentCustomerSlider />
        </div>
      </div>
      <div className="smp-organic-diff-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Why Choose Us for <span> Content Marketing </span>?
            </h2>
            <p>
              Our content marketing is not about posting more. It is about
              building a strategic system that drives visibility, authority, and
              consistent safari enquiries.
            </p>
          </div>
          <div className="seo-diff-box">
            <div className="row">
              <div className="col-md-6">
                <div className="seo-smp-dif-card">
                  <img
                    src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Frame-49-2.jpg.webp"
                    alt="Measurable Results"
                    className="w-100"
                  />
                  <h3>Measurable Content Performance</h3>
                  <p>
                    We track organic traffic growth, keyword rankings, time on
                    page, engagement rates, and most importantly how content
                    contributes to qualified safari enquiries and bookings.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="seo-smp-dif-card">
                  <img
                    src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Frame-48.jpg.webp"
                    alt="Strategic Partnership"
                    className="w-100"
                  />
                  <h3>Search Intent–Led Strategy</h3>
                  <p>
                    Every blog, landing page, and website update is guided by
                    real traveller search behaviour, ensuring your brand shows
                    up at the right stage of the safari decision journey.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="seo-smp-dif-card">
                  <img
                    src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Frame-48.png.webp"
                    alt="Machine Learning Technology"
                    className="w-100"
                  />
                  <h3>Safari-Specific Content Expertise</h3>
                  <p>
                    We understand the safari buying cycle, from dream phase to
                    booking, and create destination guides, wildlife content,
                    and itinerary pages that resonate with high-value
                    travellers.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="seo-smp-dif-card">
                  <img
                    src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Group-47.png.webp"
                    alt="Conversion Rate Optimisation"
                    className="w-100"
                  />
                  <h3>Conversion-Focused Content Optimisation</h3>
                  <p>
                    We refine headlines, structure, internal linking, and calls
                    to action so your content does more than inform. It guides
                    visitors toward making an inquiry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMarketing;
