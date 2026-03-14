import React from "react";
import Button from "../../components/Button";
import Smpcrm1 from "../../assets/images/smp-crm1.png";
import Smpcrm2 from "../../assets/images/smp-crm2.webp";
import Smpcrm3 from "../../assets/images/smp-crm3.gif";
import Smpcrm4 from "../../assets/images/smp-crm4.gif";
import Smpcrm5 from "../../assets/images/smp-crm5.png";
import Smpcrm6 from "../../assets/images/smp-crm6.png";
import Smpcrm7 from "../../assets/images/smp-crm7.png";
import Smpcrm8 from "../../assets/images/smp-crm8.jpg";

import Smpcrown1 from "../../assets/images/smp-crown1.png";
import Smpcrown2 from "../../assets/images/smp-crown2.png";
import Smpcrown3 from "../../assets/images/smp-crown3.png";
import Smpcrown4 from "../../assets/images/smp-crown4.png";
import Smpcrown5 from "../../assets/images/smp-crown5.svg";
import Smpcrown6 from "../../assets/images/smp-crown6.png";
import Smpcrown7 from "../../assets/images/smp-crown7.png";
import Trust1 from "../../assets/images/tr1.png";
import Trust2 from "../../assets/images/tr2.png";
import Trust3 from "../../assets/images/tr3.png";
import Crminti from "../../assets/images/crm-framework.webp";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GiSundial } from "react-icons/gi";
import Crmlad from "../../assets/images/udgds.png";
import Arowp from "../../assets/images/line-arrow-spiral.webp";

import CrmVideo from "./CrmVideo";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdSms } from "react-icons/md";
import { RiColorFilterAiLine } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { VscGraph } from "react-icons/vsc";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import ZohoCrmTab from "./ZohoCrmTab";
import ZohoCrm360 from "./ZohoCrm360";
import Accordion from "react-bootstrap/Accordion";

const Crm = () => {
  return (
    <div className="smp-crm-page">
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
                <h3>Customer Relationship Management (CRM)</h3>
                <h1>
                  Turn leads into bookings with a{" "}
                  <span> CRM built for safari sales </span>
                </h1>
                <p>
                  Whether you’re capturing leads from your website, Google Ads,
                  or social media, Zoho CRM keeps everything organized in one
                  place so no opportunity slips through the cracks.
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

      <div className="trusted-crm-box">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Trusted by 300K+ <span> Businesses Worldwide </span>
            </h2>
            <p>
              Join safari operators, lodges, and tour companies across Africa
              and beyond who rely on Zoho CRM to streamline their sales, improve
              lead conversion, and grow bookings consistently.
            </p>
          </div>
          <ul className="trusted-crm-brand-list">
            <li>
              <img src={Trust1} alt="" className="w-100" />
            </li>
            <li>
              <img src={Trust2} alt="" className="w-100" />
            </li>
            <li>
              <img src={Trust3} alt="" className="w-100" />
            </li>
            <li>
              <img src={Trust1} alt="" className="w-100" />
            </li>
            <li>
              <img src={Trust2} alt="" className="w-100" />
            </li>
            <li>
              <img src={Trust3} alt="" className="w-100" />
            </li>
          </ul>
        </div>
      </div>
      <div className="win-together-crm">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Teams That Work Together,
              <br />
              <span>Min Together</span>
            </h2>
            <p>
              Turn your safari leads into bookings faster with Zoho CRM,
              expertly set up and optimized by SMP. Your marketing, sales, and
              operations teams can collaborate seamlessly, automate follow-ups,
              and use AI-powered insights to prioritize high-value leads, so
              your team closes more travellers and wins together.
            </p>
          </div>
          <div className="zoho-smp-tab">
            <ZohoCrmTab />
          </div>
        </div>
      </div>
      <div className="crm-integrations-box">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Leverage the Power of <span> Our Integrations </span>
            </h2>
            <p>
              Zoho CRM connects your website, Google Ads, social media, and
              other marketing channels, so leads automatically flow into your
              CRM. By uniting all your tools, your teams can act faster,
              communicate better, and close more bookings without missing a
              single opportunity.
            </p>
          </div>
          <div className="crm-intigrt-pioc">
            <img src={Crminti} alt="" className="w-100" />
          </div>
        </div>
      </div>
      <div className="full-view-crm">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Everything Your Safari Business Needs with a{" "}
              <span> Clear 360° View </span>
            </h2>
            <p>
              Take control of your safari sales with Zoho CRM, implemented and
              optimized by SMP. Bring marketing, sales, and operations together
              in one organized system where leads are tracked, prioritized, and
              acted on in real time using AI-powered insights. Streamline your
              workflows, close more bookings, and grow your business with
              clarity and confidence.
            </p>
          </div>
          <div className="full-view-smp-zohocrm">
            <ZohoCrm360 />
          </div>
        </div>
      </div>
      <div className="grow-with-smsp-zoho">
        <div className="container">
          <div className="grow-with-smsp-zoho-ineer">
            <div className="smsp-zoho-ineer-top">
              <h1>
                Grow With <br />
                <span>Zoho</span>
              </h1>
              <img src={Arowp} alt="" />
            </div>
            <div className="grow-with-smsp">
              <div className="grow-with-smsp-chid1">
                <h1>27%</h1>
                <h3>Increased productivity</h3>
                <p>Do more in less time</p>
                <div className="icon-fgwo-smp">
                  <MdOutlineAutoGraph />
                </div>
              </div>
              <div className="grow-with-smsp-chid2">
                <h1>50%</h1>
                <h3>Faster implementation</h3>
                <p>Do more in less time</p>
                <div className="icon-fgwo-smp">
                  <GiSundial />
                </div>
              </div>
              <div className="grow-with-smsp-chid3">
                <h1>50%</h1>
                <h3>Faster implementation</h3>
                <p>Do more in less time</p>
                <div className="pic-fgwo-smp">
                  <img src={Crmlad} alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="crm-hero">
        <div className="container">
          <div className="crm-banner-cont">
            <h1>Ready to See It in Action?</h1>
            <p>
              SMP’s CRM Marketing Automation, powered by Zoho CRM, is built
              specifically for safari brands that want to streamline marketing,
              nurture enquiries automatically, and generate consistent
              sales-ready bookings.
            </p>
            <CrmVideo />
          </div>
          <div className="crm-pick">
            <img
              src="https://www.zohowebstatic.com/sites/zweb/images/crm/canvas-screen-crm-home-india.svg"
              alt="SMP CRM"
              className="w-100"
            />
          </div>
        </div>
      </div>
      <div className="sales-pipelines">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Keep Your Safari Sales Pipeline Full with{" "}
              <span> Smart Automation Powered by Zoho CRM </span>
            </h2>
          </div>
          <div className="pipeline-box">
            <div className="row pipline-step">
              <div className="col-md-7">
                <div className="crm-pipeline-set-box stepone">
                  <div className="crm-pipleline-con-step">
                    <button>Stage 1</button>
                    <h3>Attract and capture high-quality safari enquiries</h3>
                    <p>
                      Turn website visitors and campaign traffic into structured
                      leads inside Zoho CRM. Capture enquiries from forms,
                      social media, and paid campaigns, ensuring no potential
                      booking slips through the cracks.
                    </p>
                    <a href="#">
                      Learn more <IoIosArrowDroprightCircle />
                    </a>
                  </div>
                  <div className="crm-pipleline-pico-step">
                    <img src={Smpcrm1} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="crm-pipeline-set-box steptwo">
                  <div className="crm-pipleline-con-step">
                    <button>Stage 2</button>
                    <h3>
                      Nurture prospects with multichannel automation through
                      Zoho CRM
                    </h3>
                    <p>
                      Engage every enquiry with timely email sequences, WhatsApp
                      follow ups, and targeted content. Stay top of mind while
                      guiding prospects from inspiration to serious
                      consideration.
                    </p>
                    <a href="#">
                      Learn more <IoIosArrowDroprightCircle />
                    </a>
                  </div>
                  <div className="crm-pipleline-pico-step">
                    <img src={Smpcrm2} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="crm-pipeline-set-box stethree">
                  <div className="crm-pipleline-con-step">
                    <button>Stage 3</button>
                    <h3>
                      Score and segment leads based on booking intent and
                      engagement
                    </h3>
                    <p>
                      Automatically track interactions such as email opens,
                      clicks, itinerary requests, and repeat visits. Prioritise
                      high intent travellers so your team focuses on enquiries
                      most likely to convert.
                    </p>
                    <a href="#">
                      Learn more <IoIosArrowDroprightCircle />
                    </a>
                  </div>
                  <div className="crm-pipleline-pico-step">
                    <img src={Smpcrm3} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="crm-pipeline-set-box stepfour">
                  <div className="crm-pipleline-con-step">
                    <button>Stage 4</button>
                    <h3>
                      Route sales-ready enquiries directly to your reservations
                      team
                    </h3>
                    <p>
                      Send qualified leads straight to the right consultant with
                      full visibility of their engagement history. Your team
                      steps in at the right moment with context and confidence.
                    </p>
                    <a href="#">
                      Learn more <IoIosArrowDroprightCircle />
                    </a>
                  </div>
                  <div className="crm-pipleline-pico-step">
                    <img src={Smpcrm4} alt="" className="w-100" />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="crm-pipeline-set-box stepfive">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="crm-pipleline-con-step">
                        <button>Stage 5</button>
                        <h3>
                          Track campaign performance and identify what drives
                          the highest ROI
                        </h3>
                        <p>
                          Measure which channels, campaigns, and touchpoints
                          generate bookings. Use real data to refine your
                          marketing strategy and scale what works for your
                          safari brand.
                        </p>
                        <a href="#">
                          Learn more <IoIosArrowDroprightCircle />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="crm-pipleline-pico-step">
                        <img src={Smpcrm5} alt="" className="w-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btob-automation-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>
              Grow Your Business with <span> Marketing Automation </span>
            </h2>
          </div>
          <div className="web-effective">
            <div className="effective-rors">
              <div className="web-effective-para">
                <h2>Generate Consistent, Qualified Enquiries</h2>
                <p>
                  Attract the right audience and automatically capture their
                  details into your CRM. Marketing automation ensures every
                  enquiry is recorded, organised, and ready for follow up.
                </p>
              </div>
              <div className="web-effective-pic">
                <img
                  src={Smpcrm6}
                  alt="Designs that trigger emotions"
                  className="w-100"
                />
              </div>

              <div className="web-effective-pic">
                <img src={Smpcrm7} alt="Persuasive content" className="w-100" />
              </div>
              <div className="web-effective-para">
                <h2>Nurture Leads Without Manual Effort</h2>
                <p>
                  Guide prospects through their booking journey with pre built
                  email sequences, reminders, and personalised messaging. Stay
                  connected at every stage without overwhelming your team.
                </p>
              </div>

              <div className="web-effective-para">
                <h2>Increase Conversions with Smarter Insights</h2>
                <p>
                  Track engagement, identify high intent travellers, and focus
                  your sales efforts where they matter most. Data driven
                  decisions help you close more bookings and maximise ROI.
                </p>
              </div>
              <div className="web-effective-pic">
                <img
                  src={Smpcrm8}
                  alt="Convert more visitors into leads"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="zoho-marketing-box">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>Why Integrate Zoho CRM With Your Safari Business</h2>
          </div>
          <div className="zoho-marketing-inner">
            <div className="row zoho-roas">
              <div className="col-md-4">
                <div className="zohomarketing-card">
                  <div className="zoho-why-icon">
                    <SlCalender />
                  </div>
                  <h3>Capture Every Safari Enquiry Automatically</h3>
                  <p>
                    We connect your website, landing pages, ads, and social
                    campaigns directly to Zoho CRM so every enquiry flows into
                    one central system. No lost emails. No missed WhatsApps.
                    Just organised leads ready for follow up.
                  </p>
                  <a href="#">
                    Learn more <IoIosArrowDroprightCircle />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="zohomarketing-card">
                  <div className="zoho-why-icon">
                    <MdSms />
                  </div>
                  <h3>Clear Pipeline Visibility From Enquiry to Booking</h3>
                  <p>
                    We structure your sales pipeline around your actual safari
                    booking process. You can instantly see where each enquiry
                    sits, which deals are hot, and what needs action so your
                    team stays proactive instead of reactive.
                  </p>
                  <a href="#">
                    Learn more <IoIosArrowDroprightCircle />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="zohomarketing-card">
                  <div className="zoho-why-icon">
                    <RiColorFilterAiLine />
                  </div>
                  <h3>Smart Automation That Reduces Manual Work</h3>
                  <p>
                    We set up workflows that automatically assign leads, send
                    reminders, trigger follow ups, and update stages. Your team
                    spends less time on admin and more time closing bookings.
                  </p>
                  <a href="#">
                    Learn more <IoIosArrowDroprightCircle />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="zohomarketing-card">
                  <div className="zoho-why-icon">
                    <FcSalesPerformance />
                  </div>
                  <h3>Lead Scoring That Prioritises High Intent Travellers</h3>
                  <p>
                    Using engagement tracking and predictive insights, we help
                    you identify serious buyers versus early stage researchers.
                    Your consultants focus their energy where it matters most.
                  </p>
                  <a href="#">
                    Learn more <IoIosArrowDroprightCircle />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="zohomarketing-card">
                  <div className="zoho-why-icon">
                    <VscGraph />
                  </div>
                  <h3>Marketing and Sales Working in One System</h3>
                  <p>
                    We align your campaigns with your CRM so you can see which
                    marketing efforts generate real bookings. No guesswork. Just
                    clear visibility on what drives revenue.
                  </p>
                  <a href="#">
                    Learn more <IoIosArrowDroprightCircle />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="zohomarketing-card">
                  <div className="zoho-why-icon">
                    <FaPersonWalkingArrowLoopLeft />
                  </div>
                  <h3>
                    Reporting That Shows What Is Actually Growing Your Business
                  </h3>
                  <p>
                    We build dashboards that show performance across campaigns,
                    consultants, and pipelines. You get simple, clear data that
                    helps you scale what works and fix what does not.
                  </p>
                  <a href="#">
                    Learn more <IoIosArrowDroprightCircle />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smp-crowned">
        <div className="container">
          <div className="comon-heading-box">
            <h2>We’re crowned as Leaders globally</h2>
            <div className="smp-croud-box">
              <ul className="smp-croud-list">
                <li>
                  <img src={Smpcrown1} alt="" />
                </li>
                <li>
                  <img src={Smpcrown2} alt="" />
                </li>
                <li>
                  <img src={Smpcrown3} alt="" />
                </li>
                <li>
                  <img src={Smpcrown4} alt="" />
                </li>
                <li>
                  <img src={Smpcrown6} alt="" />
                </li>
                <li>
                  <img src={Smpcrown5} alt="" />
                </li>
                <li>
                  <img src={Smpcrown7} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="smp-crm_faqs-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>FAQs</h2>
            <p>Frequently asked questions about Google Ads services</p>
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
                      <Accordion.Header>What is Zoho CRM?</Accordion.Header>
                      <Accordion.Body>
                        Zoho CRM is a platform for managing leads, contacts,
                        deals, and customer communication efficiently.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How does Zoho CRM help safari operators?
                      </Accordion.Header>
                      <Accordion.Body>
                        It centralizes all inquiries, automates follow-ups, and
                        helps convert interest into confirmed bookings.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Can I integrate my website, ads, and social media?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, all leads from your digital channels can flow
                        directly into Zoho CRM.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Do you provide training?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, SMP provides full onboarding so your team can use
                        Zoho CRM to its full potential.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Will this improve my sales process?
                      </Accordion.Header>
                      <Accordion.Body>
                        Absolutely. With structured pipelines, automation, and
                        analytics, your team can respond faster, prioritize
                        leads, and close more bookings.
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
                        How long does it take to set up Zoho CRM?
                      </Accordion.Header>
                      <Accordion.Body>
                        Setup time depends on your sales workflows, but SMP
                        ensures a smooth, guided implementation tailored to your
                        safari business.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Can Zoho CRM track multiple safari destinations and
                        lodges?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, Zoho CRM can manage multiple properties,
                        itineraries, and teams within one centralized system.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Is Zoho CRM suitable for small safari operators?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, the platform is scalable, so both small and large
                        safari businesses can benefit from automated lead
                        management and tracking.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Can I customize Zoho CRM for my unique sales process?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, SMP helps tailor pipelines, stages, and workflows
                        to match your safari sales journey exactly.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Does Zoho CRM provide insights on team performance?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, dashboards and reports let you track leads,
                        follow-ups, conversion rates, and team productivity in
                        real time.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crm;
