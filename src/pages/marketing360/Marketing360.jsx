import React from "react";
import Button from "../../components/Button";
import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../../pages/googleAdd/AddBlog";
import Marketing360Videos from "./Marketing360Videos";
import { IoIosStar } from "react-icons/io";
import ratingpic1 from "../../assets/images/google-rating360.png";
import ratingpic2 from "../../assets/images/clutch-360review.png";
import ratingpic3 from "../../assets/images/tripadvi-360.png";
import { FiCheck } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Marketing360Form from "./Marketing360Form";
import formpic from "../../assets/images/contactexperience-desktop-new.png";
import formpic2 from "../../assets/images/3cGroup.png";
import formpic3 from "../../assets/images/3cmapGroup.png";

import formwebpic from "../../assets/images/Group-webcol.webp";
import { IoLogoWebComponent } from "react-icons/io5";

import aproch1 from "../../assets/images/digital-approach-1.svg";
import aproch2 from "../../assets/images/digital-approach-2.svg";
import aproch3 from "../../assets/images/digital-approach-3.svg";
import planttree from "../../assets/images/digital-process-tree1.png";

import { FaLeaf } from "react-icons/fa";

const Marketing360 = () => {
  return (
    <section className="full-service-page-sec">
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
                <h3>360 Marketing</h3>
                <h1>
                  Our 360° Safari <span> Marketing Ecosystem </span>
                </h1>
                <p>
                  Safari marketing doesn’t fail because your experiences aren’t
                  exceptional. It fails because the system behind them is
                  fragmented.
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
      <div className="full-service-welcom">
        <div className="container">
          <div className="full-service-child-smp">
            <div className="row">
              <div className="col-md-5">
                <div class="comon-heading-box makke-full-ser">
                  <h2>
                    You Know the <span>Safari Growth You Want </span>, But Not
                    How to Get There
                  </h2>
                  <p>
                    With SMP’s 360° Marketing Ecosystem, we connect your
                    website, organic visibility, paid campaigns, sales process,
                    and on-ground operations into one system. Every step is
                    designed to turn safari traffic into qualified inquiries and
                    confirmed bookings.
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div class="full-digrre-main-video">
                  <Marketing360Videos />
                </div>
              </div>
              <div className="col-md-12">
                <div className="botto-marketing-para">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-marketing-revie-rating">
        <div className="container">
          <div className="marketing-rating-box">
            <div className="row">
              <div className="col-md-4">
                <div className="rating-box-marketing">
                  <img src={ratingpic1} alt="" className="w-100" />
                  <ul className="rating-star">
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                  </ul>
                  <h4>150+ Reviews</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="rating-box-marketing">
                  <img src={ratingpic2} alt="" className="w-100" />
                  <ul className="rating-star">
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                  </ul>
                  <h4>150+ Reviews</h4>
                </div>
              </div>
              <div className="col-md-4">
                <div className="rating-box-marketing">
                  <img src={ratingpic3} alt="" className="w-100" />
                  <ul className="rating-star">
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                    <li>
                      <IoIosStar />
                    </li>
                  </ul>
                  <h4>150+ Reviews</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uncover-market-box">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Why You Need to <span> Start With Strategy </span>
            </h2>
            <p>
              Before choosing tools, platforms, or channels, you need clarity. A
              strong strategy ensures every marketing action serves a clear
              business goal.
            </p>
            {/* <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p> */}
          </div>
          <div className="market-strategy-box-full">
            <div className="row">
              <div className="col-md-6">
                <div className="market-strategy-box-left">
                  <h3>
                    <FiCheck />A Concrete Digital Marketing Strategy Allows You
                    To:
                  </h3>
                  <ul className="strategy-box-left-list">
                    <li>
                      <FiCheck />
                      Identify your ideal safari traveler and booking intent
                    </li>
                    <li>
                      <FiCheck />
                      Decide which channels deserve focus and which don’t
                    </li>
                    <li>
                      <FiCheck />
                      Align your website, marketing, and sales teams around one
                      goal
                    </li>
                    <li>
                      <FiCheck />
                      Use your budget efficiently instead of spreading it thin
                    </li>
                    <li>
                      <FiCheck />
                      Build systems that scale as your safari business grows
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="market-strategy-box-right">
                  <h3>
                    <RxCross2 /> Without a Well-Defined, Effective Online
                    Marketing Strategy:
                  </h3>
                  <ul className="strategy-box-left-list corsss">
                    <li>
                      <RxCross2 />
                      Marketing efforts feel scattered and inconsistent
                    </li>
                    <li>
                      <RxCross2 />
                      Traffic increases, but inquiries remain low
                    </li>
                    <li>
                      <RxCross2 />
                      Paid ads burn budget without real returns
                    </li>
                    <li>
                      <RxCross2 />
                      Sales teams struggle to convert unqualified leads
                    </li>
                    <li>
                      <RxCross2 />
                      Growth becomes unpredictable and difficult to sustain
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="full-marketing-form-box">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="row dmon-fold-bhbsh">
                <div className="col-md-4">
                  <div className="full-marketing-form-left">
                    <img src={formpic} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="full-marketing-form-right">
                    <Marketing360Form />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="weguide-3cmarkting-box">
        <div className="container">
          <div className="wesmp-guide-for3c">
            <div className="row dododkpolo">
              {/* <div className="col-md-4">
                <div className="weguide-3cmarkting-pico">
                  <img src={formpic2} alt="" className="w-100" />
                </div>
              </div> */}
              {/* <div className="col-md-8">
                <div className="weguide-3cmarkting-para">
                  <div class="comon-heading-box makke-full-ser">
                    <h2>
                      You Know What You Want, But{" "}
                      <span>You’re Not Sure How There</span>
                    </h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="wesmp-guide-bootom-guide-para">
              <h3>
                Accelerate Your Safari Growth with Our Effective 360° Marketing
                Strategy
              </h3>
              <p>
                Our effective 360° marketing approach connects your website,
                organic visibility, paid campaigns, sales systems, and on-ground
                operations into one seamless system. Every action is designed to
                attract qualified travellers, nurture inquiries, and convert
                them into confirmed bookings.
              </p>

              <div className="main-3cvideo-middle">
                <Marketing360Videos />
              </div>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="strategy-approach-3cbox">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Safari Marketing Pro’s 360° Marketing{" "}
              <span>Strategy Approach</span>
            </h2>
            <p>
              We help safari businesses turn online traffic into real bookings
              by connecting every part of your marketing, sales, and operations.
              Our approach focuses on three essential steps:
            </p>
            {/* <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p> */}
          </div>
          <div className="strategy-approach-main">
            <div className="row">
              <div className="col-md-4">
                <div className="strategy-approach-card">
                  <img src={formpic3} alt="" className="w-100" />
                  <h3>Website Checkup & Insights</h3>
                  <p>
                    Discover how your website performs and identify key areas to
                    capture more high-value safari leads.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="strategy-approach-card">
                  <img src={formpic3} alt="" className="w-100" />
                  <h3>Goal Alignment & Targeting</h3>
                  <p>
                    Clarify your growth objectives, pinpoint your ideal
                    travellers, and ensure every campaign aligns with your
                    business priorities.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="strategy-approach-card">
                  <img src={formpic3} alt="" className="w-100" />
                  <h3>Tailored 360° Strategy</h3>
                  <p>
                    Build a custom plan that combines SEO, paid campaigns, sales
                    systems, and operational insights to drive measurable
                    results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="strategy-agency-box-smp">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Our 360° Marketing Strategy Considers Your Unique Selling Point in
              <span> the Safari Industry </span>
            </h2>

            <p>
              At SMP, we don’t believe in one-size-fits-all solutions. Our 360°
              marketing strategy highlights your safari business’s unique
              strengths while connecting every aspect of your online presence,
              sales, and operations to generate more inquiries and bookings.
            </p>
          </div>
          <div className="smp-strategy-agency-parent">
            <div className="row strategy-agen-maop">
              <div className="col-md-4">
                <div className="strategy-agency-card">
                  <div className="strategy-agency-tittle">
                    <IoLogoWebComponent />
                    <h4>Safari Web Design Audit That Drives Growth</h4>
                  </div>
                  <p>
                    We analyze your website from top to bottom to ensure it
                    captures your brand essence, appeals to your ideal
                    travellers, and converts visitors into inquiries. Our audits
                    focus on UX, content value, booking funnels, and mobile
                    performance so your site not only attracts traffic but also
                    turns it into tangible bookings.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="strategy-agency-card">
                  <div className="strategy-agency-tittle">
                    <IoLogoWebComponent />
                    <h4>Organic Marketing Strategy</h4>
                  </div>
                  <p>
                    Our SEO and content strategies are tailored to the African
                    safari market. We research keywords that real travellers are
                    searching for, optimize your website content, and build
                    authority through backlinks. The result is long-term
                    visibility that positions your safari business as the go-to
                    choice for high-value travellers.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="strategy-agency-card">
                  <div className="strategy-agency-tittle">
                    <IoLogoWebComponent />
                    <h4>Paid Marketing Plan</h4>
                  </div>
                  <p>
                    We create and manage targeted campaigns across Google,
                    social media, and other platforms, focusing on travellers
                    ready to plan and book. Our approach combines audience
                    segmentation, compelling ad creatives, and optimized landing
                    pages, ensuring every ad dollar drives inquiries that
                    convert.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="strategy-agency-card">
                  <div className="strategy-agency-tittle">
                    <IoLogoWebComponent />
                    <h4>Sales Strategy That Drives Conversions</h4>
                  </div>
                  <p>
                    We map your sales process from inquiry to booking and
                    implement systems that keep your team responsive and
                    organized. By prioritizing high-value leads, personalizing
                    follow-ups, and adding value about your safari experiences,
                    we help you increase conversion rates and close more
                    bookings efficiently.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="strategy-agency-card">
                  <div className="strategy-agency-tittle">
                    <IoLogoWebComponent />
                    <h4>Reviews & Customer Experience Guide</h4>
                  </div>
                  <p>
                    We help you collect reviews, showcase your guests’
                    experiences, and guide your team to deliver exceptional
                    safari experiences. Positive social proof and engaging
                    stories from your travellers strengthen your brand and
                    influence future bookings, making every customer interaction
                    a part of your growth strategy.
                  </p>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="strategy-agency-card">
                  <div className="strategy-agency-tittle">
                    <IoLogoWebComponent />
                    <h4>SEO Website Strategy</h4>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div> */}
            </div>
            <div className="frame-btn-box">
              <Button
                text="Strengthen Your Strategy"
                link="./"
                target="_self"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="website-include-mar">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              What’s Included in Your <span> Web Marketing Strategy </span>
            </h2>
            <p>
              Our web marketing strategy is designed to attract qualified safari
              travellers, convert inquiries, and grow bookings. Every step is
              tailored to your business and built around proven methods that
              work for safari operators, lodges, and tour companies.
            </p>
          </div>
          <div className="webside-incl-details">
            <div className="row webbbs-smp">
              <div className="col-md-6">
                <div className="website-plan-marke-box">
                  <div className="website-plan-mark-child childone">
                    <div className="strategy-agency-tittle childone-heding">
                      <IoLogoWebComponent />
                      <h4>Scorecard Results and Recommendation</h4>
                    </div>
                    <div className="website-plan-mark-details">
                      <ul className="strategy-box-left-list">
                        <li>
                          <FiCheck />
                          Identify where your website is underperforming
                        </li>
                        <li>
                          <FiCheck />
                          Highlight untapped channels to expand your reach
                        </li>
                        <li>
                          <FiCheck />
                          Provide actionable recommendations for improvement
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="website-plan-mark-child childtwo">
                    <div className="strategy-agency-tittle childtwo-heding">
                      <IoLogoWebComponent />
                      <h4>Solutions and Plan</h4>
                    </div>
                    <div className="website-plan-mark-details">
                      <ul className="strategy-box-left-list">
                        <li>
                          <FiCheck />
                          Design strategies that improve audience targeting
                        </li>
                        <li>
                          <FiCheck />
                          Define campaigns that generate quality leads
                        </li>
                        <li>
                          <FiCheck />
                          Recommend content and messaging that engages potential
                          customers
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="website-plan-mark-child childthree">
                    <div className="strategy-agency-tittle childthree-heding">
                      <IoLogoWebComponent />
                      <h4>Worksheet and Investment</h4>
                    </div>
                    <div className="website-plan-mark-details">
                      <ul className="strategy-box-left-list">
                        <li>
                          <FiCheck />
                          Show expected outcomes from each marketing activity
                        </li>
                        <li>
                          <FiCheck />
                          Outline budget and resource allocation
                        </li>
                        <li>
                          <FiCheck />
                          Track performance to refine and optimize campaigns
                          continuously
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="website-plan-marke-pic">
                  <img src={formwebpic} alt="" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="strategyfirm-box">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              A Safari Digital Strategy Firm <span> That Delivers </span>
            </h2>
            <p>
              At SMP, we specialize in creating digital marketing strategies
              tailored specifically for safari operators, lodges, and tour
              companies. From website optimization to paid campaigns, organic
              marketing, and sales systems, we connect every piece of your
              business to drive qualified leads and confirmed bookings.
            </p>
          </div>
        </div>
      </div>
      <div className="threccase-study-box">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Case <span>Study</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen
            </p>
          </div>
          <div className="threccasefirm-para-box">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div className="hree-case-partbox">
            <div className="row casemarkbox">
              <div className="col-md-4">
                <div className="threccase-card-box">
                  <div className="threccase-card-pic">
                    <img
                      src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/digital-case-image1.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="fist-case-tittle">
                    <h2>Total Leads</h2>
                  </div>
                  <div className="fist-case-number">
                    <h2>+89,422</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="threccase-card-box">
                  <div className="threccase-card-pic">
                    <img
                      src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/digital-case-image2.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="fist-case-tittle middle-color">
                    <h2>Organic Traffic</h2>
                  </div>
                  <div className="fist-case-number">
                    <h2>+57.4%</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="threccase-card-box">
                  <div className="threccase-card-pic">
                    <img
                      src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/digital-case-image1.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="fist-case-tittle">
                    <h2>Ppc Conversion Rate</h2>
                  </div>
                  <div className="fist-case-number">
                    <h2>+13.5%</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="threccasefirm-para-box">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
          <div className="form-client-rev-3cbox">
            <h3>From the Client:</h3>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum."
            </p>
          </div>
          <div className="frame-btn-box">
            <Button
              text="Choose A Proven Growth Strategy"
              link="./"
              target="_self"
            />
          </div>
        </div>
      </div>
      <div className="development-six-point">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              5 Key Areas of Focus for 360° Marketing{" "}
              <span> Strategy Development </span>
            </h2>
            <p>
              Our 360° marketing strategy targets the critical areas that turn
              safari traffic into real bookings. By addressing every touchpoint,
              we ensure your marketing, sales, and operations work together
              seamlessly.
            </p>
          </div>
          <div class="steps-wrap full online-local-steps custom-yellowlast">
            <div class="candidatestep-wrap blue">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>1</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading blue">
                  Safari Website Design & Optimization
                </h4>
                <p>
                  Ensure your website captures attention, communicates your
                  unique safari experiences, and converts visitors into
                  inquiries.
                </p>
              </div>
            </div>
            <div class="candidatestep-wrap teal">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>2</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading teal">
                  Organic Marketing Strategy (SEO & Content)
                </h4>
                <p>
                  Build long-term visibility with content and SEO tailored to
                  safari travellers, driving qualified traffic that’s ready to
                  book.
                </p>
              </div>
            </div>
            <div class="candidatestep-wrap bluegreen">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>3</h3>
                </div>
              </div>
              <div class="step-content-wrap ">
                <h4 class="sub-heading bluegreen">Paid Marketing Campaigns</h4>
                <p>
                  Reach high-intent travellers through targeted ads, optimized
                  landing pages, and campaigns designed for maximum ROI.
                </p>
              </div>
            </div>
            <div class="candidatestep-wrap thrivegreen">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>4</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading thrivegreen">
                  Sales Strategy & Lead Management
                </h4>
                <p>
                  Streamline your inquiry follow-ups, nurture high-value leads,
                  and implement systems that increase conversion rates.
                </p>
              </div>
            </div>
            <div class="candidatestep-wrap green">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>5</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading green">
                  Reviews & Customer Experience Management
                </h4>
                <p>
                  Leverage guest feedback, showcase experiences, and guide your
                  team to deliver exceptional safaris that drive repeat bookings
                  and referrals.
                </p>
              </div>
            </div>
            {/* <div class="candidatestep-wrap orange">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>6</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading orange">Success Measurement</h4>
                <p>
                  Evaluates your campaign performance based on factors such as
                  customer lifetime value (CLV), lead volume and website traffic
                </p>
              </div>
            </div> */}
          </div>
          {/* <div className="threccasefirm-para-box">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div> */}
          <div className="frame-btn-box">
            <Button text="Let Us Become Your Guide" link="./" target="_self" />
          </div>
        </div>
      </div>
      <div className="3ceffective-results-box">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              SMP Growth Formula Delivers{" "}
              <span>the Most Effective Results</span>
            </h2>
            <p>Drive Gains at Both Ends of Your Sales Funnel</p>
          </div>
          <div className="middle-box-3cpara">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="theceffective-results-pic">
            <img
              src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/Frame-6357992.png"
              alt=""
              className="w-100"
            />
          </div>
          <div class="steps-wrap full online-local-steps custom-yellowlast">
            <div class="candidatestep-wrap blue">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>1</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading blue">Strategize</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions{" "}
                </p>
              </div>
            </div>
            <div class="candidatestep-wrap teal">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>2</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading teal">Attract</h4>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
                <p>
                  Assesses your brand engagement, social media marketing
                  strategy, email marketing strategy and content strategy SEO
                  performance, etc.
                </p>
              </div>
            </div>
            <div class="candidatestep-wrap bluegreen">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>3</h3>
                </div>
              </div>
              <div class="step-content-wrap ">
                <h4 class="sub-heading bluegreen">Convert</h4>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>
            <div class="candidatestep-wrap thrivegreen">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>4</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading thrivegreen">Close</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
              </div>
            </div>
            <div class="candidatestep-wrap green">
              <div class="step-img-wrap">
                <div class="stepbg">
                  <span>Step</span>
                  <h3>5</h3>
                </div>
              </div>
              <div class="step-content-wrap">
                <h4 class="sub-heading green">Delight</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decide-which-approach-3cbox">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              We Help You Decide Which <span> 360 Marketing Service </span> Is
              Right for You
            </h2>
            <p>
              Not every safari business needs the same solution. Your market,
              destinations, budget, and growth stage determine the right mix.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p>
          </div>
          <div className="deside-aproch-sub-box">
            <div className="row deside-aproch-sub">
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch1} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>Website Audit Services</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch2} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>SEO Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch3} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>SEO Keyword Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch1} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>SEO Content Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch2} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>PPC Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch3} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>SEM Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch1} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>Amazon Marketing Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch2} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>Social Media Strategy Services</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch3} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>Link Building Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch1} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>Reputation Management Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch2} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>eCommerce Marketing Plan</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="deside-aproch-card">
                  <div className="deside-aproch-tittle">
                    <div className="deside-aproch-pic">
                      <img src={aproch3} alt="" className="w-100" />
                    </div>
                    <div className="deside-aproch-tit">
                      <h3>Franchise Marketing Strategy</h3>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smp-planting-side-box">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              SMP 360° Marketing <span> Strategy Process </span>
            </h2>
            <p>
              We follow a proven, practical three-phase process designed
              specifically for safari businesses to increase visibility, attract
              qualified travellers, and convert inquiries into bookings.
            </p>
            {/* <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p> */}
          </div>
          <div className="planing-treee-child">
            <div className="row plaing-smsp-box">
              <div className="col-md-6">
                <div className="smp-plant-left">
                  <img src={planttree} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="smp-plant-para">
                  <button>Phase 1: Root Fixes</button>
                  <p>
                    <strong>Assess Your Website</strong>
                  </p>
                  <p>
                    We start by taking a deep look at your current website to
                    see how it performs and connects with safari travellers.
                    This tells us what is working, what isn’t, and what needs to
                    be improved so your site becomes a stronger driver of
                    inquiries and bookings.
                  </p>
                  <ul className="smp-plant-list">
                    <li>
                      <FaLeaf />
                      Review site usability, structure, and navigation
                    </li>
                    <li>
                      <FaLeaf />
                      Identify technical or performance issues
                    </li>
                    <li>
                      <FaLeaf />
                      Analyse current content and messaging
                    </li>
                    <li>
                      <FaLeaf />
                      Check how well your site converts traffic
                    </li>
                  </ul>
                  {/* <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum"
                  </p> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="smp-plant-left">
                  <img src={planttree} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="smp-plant-para">
                  <button>Phase 2: Trunk Growth</button>
                  <p>
                    <strong>Define Your Marketing Goals</strong>
                  </p>
                  <p>
                    Once we understand your website strengths and gaps, we work
                    with you to define clear goals. This aligns every marketing
                    effort to outcomes that matter most to your safari business,
                    like more qualified leads, more bookings, and increased
                    brand presence.
                  </p>
                  <ul className="smp-plant-list">
                    <li>
                      <FaLeaf />
                      Clarify business objectives and priorities
                    </li>
                    <li>
                      <FaLeaf />
                      Define target safari traveller profiles
                    </li>
                    <li>
                      <FaLeaf />
                      Set measurable KPIs for growth
                    </li>
                    <li>
                      <FaLeaf />
                      Align marketing with sales and operations
                    </li>
                  </ul>
                  {/* <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum"
                  </p> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="smp-plant-left">
                  <img src={planttree} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="smp-plant-para">
                  <button>Phase 3: Branch Care</button>
                  <p>
                    <strong>Choose the Right Strategy</strong>
                  </p>
                  <p>
                    With insights from your website and clearly defined goals,
                    we build a custom 360° marketing plan focused on long-term
                    results. This plan integrates all the channels and systems
                    you need to attract and convert high-value safari
                    travellers.
                  </p>
                  <ul className="smp-plant-list">
                    <li>
                      <FaLeaf />
                      Full-funnel SEO and organic strategy
                    </li>
                    <li>
                      <FaLeaf />
                      Targeted paid campaigns where they perform best
                    </li>
                    <li>
                      <FaLeaf />
                      Structured sales process mapping and automation
                    </li>
                    <li>
                      <FaLeaf />
                      Feedback loops from performance data to optimize
                      continuously
                    </li>
                  </ul>
                  {/* <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum"
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smp-businessplan-pio">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Why Choose SMP for your <span> Safari Marketing </span>
            </h2>
            <p>
              Safari marketing is not the same as marketing any other travel
              product. It requires deep industry understanding, strong systems,
              and execution that connects online promises with real experiences
              on the ground.
            </p>
            <p>Here is why safari companies choose to work with us.</p>
          </div>
          <div className="webside-incl-details">
            <div className="row webbbs-smp">
              <div className="col-md-6">
                <div className="website-plan-mark-child childone">
                  <div className="strategy-agency-tittle childone-heding">
                    <IoLogoWebComponent />
                    <h4>We Specialize in Safari Businesses</h4>
                  </div>
                  <div className="website-plan-marksmp">
                    <p>
                      We focus exclusively on safari and experiential travel
                      brands. That means we understand safari buying behavior,
                      long decision cycles, seasonal demand, and what truly
                      drives trust and conversions for safari travelers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="website-plan-mark-child childthree">
                  <div className="strategy-agency-tittle childthree-heding">
                    <IoLogoWebComponent />
                    <h4>Strategy Comes Before Tactics</h4>
                  </div>
                  <div className="website-plan-marksmp">
                    <p>
                      We do not start with websites, ads, or SEO. We start by
                      understanding your business goals, markets, and
                      operational realities, then build a strategy that supports
                      long term growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="website-plan-mark-child childthree">
                  <div className="strategy-agency-tittle childthree-heding">
                    <IoLogoWebComponent />
                    <h4>We Build Systems, Not Isolated Services</h4>
                  </div>
                  <div className="website-plan-marksmp">
                    <p>
                      Every service we offer is designed to work together. Your
                      website, marketing, sales, and operations are connected
                      into one ecosystem that supports sustainable bookings, not
                      short term wins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="website-plan-mark-child childone">
                  <div className="strategy-agency-tittle childone-heding">
                    <IoLogoWebComponent />
                    <h4>Data Informed, Experience Driven</h4>
                  </div>
                  <div className="website-plan-marksmp">
                    <p>
                      We combine data, analytics, and performance tracking with
                      real safari market experience.
                    </p>
                    <p>Decisions are guided by insight, not assumptions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="website-plan-mark-child childone">
                  <div className="strategy-agency-tittle childone-heding">
                    <IoLogoWebComponent />
                    <h4>Designed for Growth and Scale</h4>
                  </div>
                  <div className="website-plan-marksmp">
                    <p>
                      Whether you are building your foundation or expanding into
                      new markets, our approach is built to grow with you.
                    </p>
                    {/* <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </p> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="website-plan-mark-child childthree">
                  <div className="strategy-agency-tittle childthree-heding">
                    <IoLogoWebComponent />
                    <h4>Holistic Strategy Approach</h4>
                  </div>
                  <div className="website-plan-marksmp">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged
                    </p>
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="frame-btn-box">
            <Button
              text="Get Your Roadmap to Success"
              link="./"
              target="_self"
            />
          </div>
        </div>
      </div>
      <div className="add_faqs-sec">
        <div className="container">
          <div className="comon-heading-box">
            <h2>Frequently Asked Questions About Our 360° Safari Marketing </h2>
            {/* <p>Frequently asked questions about Google Ads services</p> */}
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
                        What is 360° Safari Marketing?
                      </Accordion.Header>
                      <Accordion.Body>
                        360° Safari Marketing is our connected approach that
                        aligns your strategy, website, organic visibility, paid
                        marketing, sales systems, and on-ground operations into
                        one unified growth system.
                      </Accordion.Body>
                      <Accordion.Body>
                        Instead of running isolated tactics, every part of your
                        marketing works together to generate qualified inquiries
                        and sustainable bookings.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Do I need all services at once?
                      </Accordion.Header>
                      <Accordion.Body>
                        No. Not every safari business needs the full ecosystem
                        immediately. We start by auditing your website, then
                        recommend the combination of services that best fits
                        your goals, market, and growth stage.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How long does it take to see results?
                      </Accordion.Header>
                      <Accordion.Body>
                        Timelines vary depending on the services chosen.
                      </Accordion.Body>
                      <Accordion.Body>
                        Paid marketing and website improvements can generate
                        inquiries within weeks, while organic marketing builds
                        momentum over several months. Our focus is on both short
                        term wins and long term growth.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Who is this service best suited for?
                      </Accordion.Header>
                      <Accordion.Body>
                        Our 360° Safari Marketing services are ideal for safari
                        operators, safari lodges, tour companies, and
                        experiential travel brands that want consistent,
                        qualified inquiries and a scalable growth system rather
                        than one off marketing efforts.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        Can you work with our existing website and systems?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. We can improve, optimize, or integrate with your
                        existing website, CRM, sales processes, and operational
                        workflows.
                      </Accordion.Body>
                      <Accordion.Body>
                        A full rebuild is only recommended when it supports your
                        strategy and goals.
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
                        What markets do you work with?
                      </Accordion.Header>
                      <Accordion.Body>
                        We work with safari businesses targeting international
                        and regional markets, including Europe, North America,
                        and emerging travel markets.
                      </Accordion.Body>
                      <Accordion.Body>
                        Strategies are customized based on where your travelers
                        are coming from.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How do we get started?
                      </Accordion.Header>
                      <Accordion.Body>
                        It begins with a strategy conversation.
                      </Accordion.Body>
                      <Accordion.Body>
                        We assess your current systems, goals, and challenges,
                        then recommend the right approach for your safari
                        business.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How is this different from hiring separate agencies?
                      </Accordion.Header>
                      <Accordion.Body>
                        Most agencies focus on one service in isolation.
                      </Accordion.Body>
                      <Accordion.Body>
                        We design and manage an integrated system where each
                        part supports the other, reducing wasted budget and
                        increasing overall sales and marketing performance.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        Will you help our sales team as well?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. Converting inquiries is critical to success.
                      </Accordion.Body>
                      <Accordion.Body>
                        We support sales processes by improving inquiry
                        handling, follow ups, itinerary presentation, and
                        alignment between marketing and sales.
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
    </section>
  );
};

export default Marketing360;
