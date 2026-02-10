import React from "react";
import Button from "../../components/Button";
import AgencyBrand from "./AgencyBrand";
import CaseStudy from "../../pages/googleAdd/CaseStudy";
import TabContentAdd from "../../pages/googleAdd/TabContentAdd";
import FrameworkBox from "../../pages/googleAdd/FrameworkBox";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ExCustomersSlider from "../../pages/googleAdd/ExCustomersSlider";
import Table from "react-bootstrap/Table";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../../pages/googleAdd/AddBlog";

const GoogleAdd = () => {
  return (
    <div className="google-add">
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
                <h3>Google Ads </h3>
                <h1>
                  Your Trusted Partner for{" "}
                  <span> Google Ads That Attract </span>
                  Ready-to-Book Safari Travelers
                </h1>
                <p>
                  We help African safari and tour operators show up at the exact
                  moment travellers are searching for safaris, destinations, and
                  itineraries. Our Google Ads strategies are built around buyer
                  interest, not just visibility, so your brand reaches
                  travellers who are already planning and ready to inquire. We
                  create safari-focused Google Ads that protect your budget,
                  improve lead quality, and turn clicks into real booking
                  opportunities.
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
              Powering Growth for 500+ Safari & Tour Brands in Africa and{" "}
              <span> Beyond through Google Ads </span>
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
      <div className="success-stories-sec">
        <div className="container">
          <div className="row sus-stories">
            <div className="col-md-5">
              <div className="suc-stories-para">
                <h2>Don’t Just Take Our Word For It</h2>
                <div className="suc-stories-btn">
                  <Button
                    text="Client Success Stories"
                    link="./"
                    target="_self"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <CaseStudy />
            </div>
          </div>
        </div>
      </div>
      <div className="google_garketing-sec">
        <div className="container">
          <div className="row google_gark">
            <div className="col-md-6">
              <div className="comon-heading-box google_gark_left">
                <h2>
                  Discover the full power of Google Ads for your{" "}
                  <span>Safari Brand</span>
                </h2>
              </div>
            </div>
            <div className="col-md-6">
              <div className="google_gark_para">
                <p>
                  Think of Google Ads like placing your safari camp right on the
                  main road tourists already use when planning their trip.
                  Instead of waiting for someone to discover you, your brand
                  appears exactly when they are actively searching for safaris,
                  destinations, and operators. Rather than shouting into the
                  crowd, Google Ads lets you speak to people who are already
                  listening.
                </p>
                <p>
                  For safari businesses, timing is everything. Travellers
                  research for weeks or months before booking. Google Ads
                  ensures your brand shows up at the right moment in that
                  journey, when interest is high, and decisions are being made.
                </p>
                <h3>The Right Google Ads Setup for Your Safari Business</h3>
                <p>
                  Google Ads is powerful, but only when structured correctly.
                </p>
                <p>
                  We tailor every campaign to the specific goals, destinations,
                  budgets, and tourists you want to attract. We take time to
                  understand your market, analyze competition, map traveller
                  behaviour, and structure campaigns that bring the right
                  visitors to the right pages on your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google-tab-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              We use smart, performance-driven techniques built to{" "}
              <span>
                {" "}
                improve visibility, control ad spend, and increase lead quality
                through:{" "}
              </span>
            </h2>
          </div>
          <div className="tabcon_tentadd">
            <TabContentAdd />
          </div>
          <div className="conversions-box">
            <h2>500,000+ Conversions and Counting</h2>
            <p>
              <strong>
                Half a million conversions don&rsquo;t happen by accident.
              </strong>
              &nbsp;They&rsquo;re the result of years of refining ad strategies,
              testing every variable, and applying insights across industries.
              Each conversion represents a customer who took action &mdash;
              booking a service, making a purchase, or signing up for more. By
              focusing on what moves the needle for each business, we&rsquo;ve
              built a system that keeps delivering.&nbsp;
              <strong>And we&rsquo;re ready to do it for you.</strong>
            </p>
            <Button
              text="Increase My Conversion Today!"
              link="./"
              target="_self"
            />
          </div>
        </div>
      </div>
      <div className="framework-sec">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>
              What Powers Our Highly-Converting{" "}
              <span> Google Ads Strategy </span>
            </h2>
            <p>
              When it comes to Google Ads, we follow a proven process designed
              to get you the highest Return on Ad Spend (ROAS). Here’s how we do
              it.
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
      <div className="full-funell-sec">
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
      <div className="service-packages-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              What’s Included in Our <span>Google Ads Management</span>
            </h2>
            <p>Attach Google Ads package options</p>
          </div>
          <div className="service-packages">
            <Table striped hover>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Tier 1 - Starter</th>
                  <th>Tier 2 – Growth</th>
                  <th>Tier 3 – Professional</th>
                  <th>Tier 4 – Advanced</th>
                  <th>Tier 5 – Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly Ad Budget</td>
                  <td>$1,000 – $4,999 </td>
                  <td>$5,000 – $14,999</td>
                  <td>$15,000 – $29,999</td>
                  <td>$30,000 – $74,999</td>
                  <td>$75,000+</td>
                </tr>
                <tr>
                  <td>Client retains admin access </td>
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
                  <td>Campaign setup / restructure by goals</td>
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
                  <td>Full keyword research & strategy</td>
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
                  <td>Conversion tracking (forms, calls, actions)</td>
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
                  <td>GA4 setup (if needed)</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                  <td>If needed</td>
                </tr>

                <tr>
                  <td>Real-time reporting dashboard</td>
                  <td>
                    <RxCross2 />
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
                  <td>Continuous optimisation</td>
                  <td>
                    <RxCross2 />
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
                  <td>Advanced bidding strategies</td>
                  <td>
                    <RxCross2 />
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
                  <td>Negative keyword management</td>
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
                  <td>Offline conversion tracking</td>
                  <td>
                    <RxCross2 />
                  </td>
                  <td>
                    <RxCross2 />
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
                  <td>User behaviour tracking on pages</td>
                  <td>
                    <RxCross2 />
                  </td>
                  <td>
                    <RxCross2 />
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
                  <td>Call tracking & recording</td>
                  <td>Optional </td>
                  <td>Optional </td>
                  <td>Optional </td>
                  <td>Optional </td>
                  <td>Optional </td>
                </tr>
                <tr>
                  <td>Campaign reviews & reporting</td>
                  <td>Monthly</td>
                  <td>Monthly</td>
                  <td>Monthly</td>
                  <td>Monthly</td>
                  <td>Monthly</td>
                </tr>
                <tr>
                  <td>Dedicated account manager</td>
                  <td>
                    <RxCross2 />
                  </td>
                  <td>
                    <RxCross2 />
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
            <p>Frequently asked questions about Google Ads</p>
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
                      <Accordion.Header>What is Google Ads?</Accordion.Header>
                      <Accordion.Body>
                        Google Ads is Google’s advertising platform that shows
                        your safari business when travellers search for safaris,
                        destinations, and tour operators.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How does Google Ads help safari operators?
                      </Accordion.Header>
                      <Accordion.Body>
                        It puts your brand in front of travellers who are
                        already planning a safari and ready to inquire, not just
                        browsing.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How much does Google Ads cost?
                      </Accordion.Header>
                      <Accordion.Body>
                        You control your budget. Costs depend on competition and
                        destinations, and we optimise spend for quality leads,
                        not wasted clicks.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        How fast can I get results?
                      </Accordion.Header>
                      <Accordion.Body>
                        Ads can go live quickly, but consistent, quality
                        inquiries usually improve over the first few weeks of
                        optimisation.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Where do my ads appear?
                      </Accordion.Header>
                      <Accordion.Body>
                        On Google Search, YouTube, and across Google’s Display
                        Network, where travellers research and compare trips.
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
                      <Accordion.Header>Do I need a website?</Accordion.Header>
                      <Accordion.Body>
                        A website or landing page is recommended so travellers
                        can learn about your safaris and send inquiries.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>What are keywords?</Accordion.Header>
                      <Accordion.Body>
                        They are the phrases travellers use when searching, like
                        “Mount Kilimanjaro hiking packages” or “Maasai Mara day
                        trip safari drive.”
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Is there a disadvantage for Google Ads?
                      </Accordion.Header>
                      <Accordion.Body>
                        Results stop when you stop running ads, and poorly
                        managed campaigns can waste budget. Without proper bid
                        strategies, targeting, and optimisation, your Cost Per
                        Acquisition (CPA) can climb quickly.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Why aren’t my ads showing?
                      </Accordion.Header>
                      <Accordion.Body>
                        This can happen because of low budgets, poor setup, low
                        relevance, or targeting that is too strict.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        What is Quality Score?
                      </Accordion.Header>
                      <Accordion.Body>
                        It measures how relevant your ads and pages are, which affects visibility and cost per lead.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        How do you measure success?
                      </Accordion.Header>
                      <Accordion.Body>
                       By inquiries, cost per lead, lead quality, and booking potential, not just clicks.
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
export default GoogleAdd;
