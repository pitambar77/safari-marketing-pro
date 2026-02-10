import React from "react";
import Button from "../../components/Button";
import AgencyBrand from "../googleAdd/AgencyBrand";
import Effective1 from "../../assets/images/effective1.webp";
import Effective2 from "../../assets/images/effective2.webp";
import Effective3 from "../../assets/images/effective3.webp";
import Effective4 from "../../assets/images/effective4.webp";
import Effective5 from "../../assets/images/effective5.webp";
import Effective6 from "../../assets/images/effective6.webp";
import WebsiteSamples from "../WebDesign/WebsiteSamples";
import FrameworkBox from "../googleAdd/FrameworkBox";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ExCustomersSlider from "../googleAdd/ExCustomersSlider";
import Table from "react-bootstrap/Table";
import { IoMdCheckmark } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../googleAdd/AddBlog";
import Cta from "../../components/Cta";
import social from "../../assets/images/social-media-pic.webp";

const WebDesign = () => {
  return (
    <div className="webdesign-page">
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
                <h3>Web Design</h3>
                <h1>
                  Get a website that serves as a{" "}
                  <span>sales generating machine</span>
                </h1>
                <p>
                  Safari Marketing Pro of Digital is Singapore’s Premier Google
                  Ads agency focused on performance-based strategies that
                  increase conversions, leads, and revenue — not just clicks and
                  impressions.
                </p>
                <div className="add-hero-btn-box">
                  <Button
                    text="Get a free Website Review
"
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
              Trusted by 5000+ African Tour and Travel Operators.{" "}
              <span>Attach Logos of safari and tour companies</span>
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
                    Why Every Safari Operator Needs Safari Marketing Pro to
                    Build a World-Class Safari Website
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="google_gark_para">
                <h3>
                  In less than 0.05 seconds, travellers form an opinion about
                  your safari brand. Before they email you, WhatsApp you, or ask
                  for a quote, they judge your credibility through your website.
                </h3>
                <p>
                  For safari operators, this moment is critical. A poorly
                  structured or outdated website silently pushes potential
                  guests away, no matter how good your safaris actually are.
                </p>
                <p>
                  Safari Marketing Pro helps you craft a trust-driven,
                  conversion-focused safari website that works as a real
                  business asset, not just an online brochure.
                </p>
              </div>
            </div>
          </div>
          <div className="social-main-pic">
            <img src={social} alt="Social media marketing" className="w-100" />
          </div>
        </div>
      </div>

      <div className="smp-best-website-sec">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>
              Safari Websites we’ve worked on: Designed to Turn Leads into
              Bookings.
            </h2>
          </div>
          <div className="smp-best-website">
            <WebsiteSamples />
          </div>
        </div>
      </div>
      <div className="make-us-effective-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              What Defines a High-Converting <br />{" "}
              <span> Safari Website?</span>
            </h2>
          </div>
          <div className="web-effective">
            <div className="effective-rors">
              <div className="web-effective-para">
                <h2>Trust That Converts Browsers into Bookings</h2>
                <p>
                  When travellers land on your website, they decide within
                  seconds whether they can trust you. A clean, professional,
                  well-structured site positions your safari company as
                  experienced, reliable, and safe to book with—removing
                  hesitation and building confidence before the first inquiry is
                  sent.
                </p>
              </div>

              <div className="web-effective-pic">
                <img
                  src={Effective1}
                  alt="Designs that trigger emotions"
                  className="w-100"
                />
              </div>

              <div className="web-effective-pic">
                <img
                  src={Effective2}
                  alt="Persuasive content"
                  className="w-100"
                />
              </div>

              <div className="web-effective-para">
                <h2>More Qualified Inquiries — Not Just Traffic</h2>
                <p>
                  Your website shouldn’t just look good; it should work for you.
                </p>
                <p>
                  From clear calls-to-action and easy enquiry forms to
                  well-designed itinerary pages, every element is built to guide
                  serious travellers toward contacting you—bringing better
                  leads, not time-wasters.
                </p>
              </div>

              <div className="web-effective-para">
                <h2>Let Travellers Feel the Safari Before They Arrive</h2>
                <p>
                  Safari is emotional. Your website should be too. Through
                  strong visuals, thoughtful layouts, and clear storytelling,
                  visitors can see themselves in the experience—from the
                  landscapes to the moments—making them more likely to choose
                  you over competitors.
                </p>
              </div>

              <div className="web-effective-pic">
                <img
                  src={Effective3}
                  alt="Convert more visitors into leads"
                  className="w-100"
                />
              </div>

              <div className="web-effective-pic">
                <img
                  src={Effective4}
                  alt="Loads blazing fast"
                  className="w-100"
                />
              </div>

              <div className="web-effective-para">
                <h2>Seamless Experience on Any Device</h2>
                <p>
                  Most safari research starts on mobile. Your website must load
                  fast, look premium, and function perfectly across mobile,
                  tablet, and desktop, ensuring no lost inquiries due to poor
                  design or usability—anytime, anywhere.
                </p>
              </div>

              <div className="web-effective-para">
                <h2>Built to Support Marketing & Growth</h2>
                <p>
                  A fast, SEO-ready website strengthens Google Ads, social
                  media, and organic search performance.
                </p>
                <p>
                  Instead of fighting bigger brands, your website helps you
                  compete smartly, appear professional, and stand confidently
                  alongside established safari operators.
                </p>
              </div>

              <div className="web-effective-pic">
                <img
                  src={Effective5}
                  alt="Looks beautiful on all devices"
                  className="w-100"
                />
              </div>

              {/* <div className="web-effective-pic">
                <img
                  src={Effective6}
                  alt="Get found on Google"
                  className="w-100"
                />
              </div>

              <div className="web-effective-para">
                <h2>Get found on Google</h2>
                <p>
                  Your website needs to be designed with your customers and your
                  goals in mind. We excel at using design to trigger the right
                  emotions to convert traffic into real customers. With us, your
                  website becomes a lead-generating machine – a powerful part of
                  your digital marketing strategy.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="main-cta-box">
        <div className="container">
          <Cta />
        </div>
      </div>

      <div className="framework-sec">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>
              Every step, one goal: turning interested travellers into <br />
              <span>qualified safari inquiries.</span>
            </h2>
            <p>
              A step-by-step process tailored for African safari operators—built
              around your destinations, itineraries, and growth goals.
            </p>
          </div>
          <div className="frmae-workflow">
            <FrameworkBox />
            <div className="frame-btn-box">
              <Button text="Get Proposal" link="./" target="_self" />
            </div>
          </div>
        </div>
      </div>
      <div className="digital-vs-rest-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Safari Marketing Pro bridges the gap between beautiful design and
              real safari bookings—something most teams and agencies struggle to
              deliver.
            </h2>
          </div>
          <div className="digital-card-main">
            <div className="row digital-child-card">
              <div className="col-md-4">
                <div className="digital-card add-colorbg">
                  <h3>Safari Marketing Pro</h3>
                  <ul className="digital-card-list">
                    <li>
                      <FaCheckCircle /> Unified safari website design and
                      digital marketing built specifically for African safari
                      operators
                    </li>
                    <li>
                      <FaCheckCircle />
                      Websites designed to generate qualified safari inquiries,
                      not just look good
                    </li>
                    <li>
                      <FaCheckCircle />
                      Dedicated account manager who understands your
                      destinations, itineraries, and target markets
                    </li>
                    <li>
                      <FaCheckCircle />
                      Deep experience working with safari brands, tour
                      operators, lodges, and camps
                    </li>
                    <li>
                      <FaCheckCircle />
                      Design decisions driven by traveler trust, booking
                      behavior, and long sales cycles
                    </li>
                    <li>
                      <FaCheckCircle />
                      Integrated use of technology to support SEO, Google Ads,
                      inquiry tracking, and performance
                    </li>
                    <li>
                      <FaCheckCircle />
                      Built to scale as your safari business grows into new
                      destinations and global markets
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="digital-card">
                  <h3>In-House Web Design</h3>
                  <ul className="digital-card-list">
                    <li>
                      <FaRegCheckCircle className="gigital-check-ico" />
                      Small internal team focused mainly on website maintenance
                    </li>
                    <li>
                      <FaRegCheckCircle className="gigital-check-ico" />
                      Websites often serve as informational brochures rather
                      than sales tools
                    </li>
                    <li>
                      <IoIosCloseCircleOutline /> Internal teams know the
                      business well but lack external market insights
                    </li>
                    <li>
                      <IoIosCloseCircleOutline /> Limited exposure to
                      international safari traveler behavior
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Design choices often constrained by time and internal
                      capacity
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Limited tools and resources for advanced optimization and
                      testing
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Scaling depends on team size and availability
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="digital-card">
                  <h3>Typical Web Design Agency</h3>
                  <ul className="digital-card-list">
                    <li>
                      <IoIosCloseCircleOutline />
                      Website design is offered as a standalone service, often
                      disconnected from marketing
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Strong visual focus, but limited emphasis on inquiry
                      generation
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Account management quality varies and may lack
                      safari-specific understanding
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Experience spans multiple industries, often without safari
                      or travel expertise
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Design choices may prioritize aesthetics over conversion
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Basic project tools used, but limited data-driven
                      optimization
                    </li>
                    <li>
                      <IoIosCloseCircleOutline />
                      Scaling often requires additional vendors or services
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
      {/* <div className="full-funell-sec">
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
      </div> */}
      <div className="customers-expect-sec">
        <div className="container">
          <div className="customers-expect-box">
            <div className="row customers-exp">
              <div className="col-md-8">
                <div className="customers-exp-data">
                  <div className="comon-heading-box google_gark_left">
                    <h2>Does your website say “hello” to your customers?</h2>
                    <p>
                      Is your website truly supporting your safari business—or
                      just existing online? Partner with Safari Marketing Pro to
                      build a luxury, performance-driven website designed to
                      build trust, showcase your experience, and generate real
                      safari inquiries.
                    </p>
                  </div>
                  <h3>What you can expect from our website design services:</h3>
                  <ul className="customers-exp-list">
                    <li>
                      A professionally designed safari website tailored for
                      African tour operators and lodges
                    </li>
                    <li>
                      Clear, intuitive website structure that guides travellers
                      from discovery to inquiry
                    </li>
                    <li>
                      Well-organised itinerary, destination, and experience
                      pages that answer real traveller questions
                    </li>
                    <li>
                      Trust-focused design elements that position your brand as
                      reliable and safe to book with
                    </li>
                    <li>
                      A fast, mobile-optimised, SEO-ready website built to
                      support future marketing and growth
                    </li>
                  </ul>
                  {/* <p>
                    Get a free Google Ads proposal, including a bonus pricing
                    plan.
                  </p> */}
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
      <div className="service-packages-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              What’s Included in Our <span>Google Ads Service Packages</span>
            </h2>
            <p>
              As a leading Google Ads marketing agency in Singapore, we offer
              scalable packages designed to grow with your business.
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
                  <th>Tier 4</th>
                  <th>Tier 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Budget</td>
                  <td>$1000 to $2,499 per month</td>
                  <td>$2,500 to $19,999 per month</td>
                  <td>$20,000 to $29,999 per month</td>
                  <td>$30,000 to $79,999 per month</td>
                  <td>$80,000 per month and above</td>
                </tr>
                <tr>
                  <td>Client retains admin access to the account</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>
                    Complete google ads set up / restructure based on goals
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>Full keyword research and campaign strategy</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>Google Analytics 4 Set up</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                </tr>
                <tr>
                  <td>
                    Conversion tracking set up to track email form submissions &
                    other key events
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>
                    Reporting Dashboard set up for realtime access to results
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>Continuous optimisation towards campaign objectives</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>
                    Implementation of various bidding strategies to get lowest
                    cost per click and maximum conversions
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>
                    Ongoing negative keyword insertion to reduce budget wastage
                    and irrelevant clicks
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>Offline tracking integration</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>
                    Tracking of user behaviour on website / landing page to
                    optimise conversions if applicable
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                </tr>
                <tr>
                  <td>Call tracking and recording for service monitoring</td>
                  <td>Optional if needed</td>
                  <td>Optional if needed</td>
                  <td>Optional if needed</td>
                  <td>Optional if needed</td>
                  <td>Optional if needed</td>
                </tr>
                <tr>
                  <td>Campaign reviews and reporting</td>
                  <td>Monthly</td>
                  <td>Monthly</td>
                  <td>Monthly</td>
                  <td>Monthly</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Dedicated account manager</td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
                  <td>
                    <IoMdCheckmark />
                  </td>
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
      <div className="add_faqs-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>FAQs</h2>
            <p>Website Design – Frequently Asked Questions</p>
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
                        Why is my safari website important for bookings?
                      </Accordion.Header>
                      <Accordion.Body>
                        Your website is your main sales tool. It’s where
                        travellers decide whether to trust you, enquire, and
                        book. A well-designed safari website guides visitors
                        clearly from inspiration to inquiry, increasing your
                        conversion rate.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How long does it take to design a safari website?
                      </Accordion.Header>
                      <Accordion.Body>
                        Most safari websites take 3–6 weeks, depending on the
                        number of pages, content, and special features like
                        itineraries, booking forms, and galleries.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Will my website be mobile-friendly?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. All our safari websites are fully responsive,
                        meaning they work perfectly on mobile, tablet, and
                        desktop, where most travellers start their safari
                        research.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Can you redesign my existing website?
                      </Accordion.Header>
                      <Accordion.Body>
                        Absolutely. We can improve your current site’s layout,
                        speed, content flow, and conversion elements without
                        losing your brand identity or SEO value.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Will my website be optimized for SEO?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. We build safari websites with SEO best practices:
                        fast loading, clean structure, keyword-friendly pages,
                        and content designed to rank and convert.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Can you integrate enquiry and booking systems?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. We create smart enquiry forms, WhatsApp
                        integrations, CRM connections, and booking funnels to
                        make it easy for travellers to contact and book with
                        you.
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
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        What do you need from me to start?
                      </Accordion.Header>
                      <Accordion.Body>
                        We’ll need your logo, images, safari packages, brand
                        tone, and business goals. If you don’t have content, we
                        help structure and write it for conversion.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Will I be able to update the website myself?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. We use easy-to-manage systems so you can edit text,
                        images, and itineraries without technical skills.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        How do you make the website convert better?
                      </Accordion.Header>
                      <Accordion.Body>
                        We focus on clear calls-to-action, trust elements like
                        reviews and partnerships, smart layout flow, fast
                        performance, and strong copywriting for safari
                        travellers.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Do you offer ongoing support after launch?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. We offer maintenance, SEO, content updates, and
                        conversion tracking to keep your website performing long
                        after it goes live.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        How much will it cost to design my safari website?
                      </Accordion.Header>
                      <Accordion.Body>
                        We offer tailored packages based on your goals and
                        features. Our packages typically start at $2,000 for
                        Budget, $3,000 for Mid-Luxury, and $5,000 for Luxury. We
                        also customize for larger, more unique builds — even
                        $25,000+ — depending on functionality, design depth,
                        integrations, and the uniqueness of your safari brand.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Do you use generic templates or customised layouts?
                      </Accordion.Header>
                      <Accordion.Body>
                        We use fully customised layouts tailored specifically to
                        your safari brand. We design your website around your
                        identity, target audience, and booking journey — not
                        recycled templates. This ensures your site looks unique,
                        feels premium, and is built to convert visitors into
                        enquiries and bookings.
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

export default WebDesign;
