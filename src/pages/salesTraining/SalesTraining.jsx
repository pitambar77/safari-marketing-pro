import React from "react";
import Button from "../../components/Button";
import BrandAdvocates from "./BrandAdvocates";
import AboutSmpVideo from "../aboutUs/AboutSmpVideo";
import { FaBusinessTime } from "react-icons/fa6";
import plant from "../../assets/images/smpgrowth-bg.svg";
import arrow from "../../assets/images/arrow-down-growth.svg";
import { FaCirclePlus } from "react-icons/fa6";
import chhose1 from "../../assets/images/choose-img_1.svg";
import chhose2 from "../../assets/images/choose-img_2.svg";
import chhose3 from "../../assets/images/choose-img_3.svg";
import chhose4 from "../../assets/images/choose-img_4.svg";
import { ImQuotesLeft } from "react-icons/im";

import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../googleAdd/AddBlog";

const SalesTraining = () => {
  return (
    <section className="sales-training-sec">
      <div className="sale-hero-box">
        <div className="container">
          <div className="sale-hero-tittle">
            <h1>SMP Growth Formula</h1>
            <p>From Discovery to Booking in 3 Simple Steps</p>
          </div>
          <div className="sales-training-steps">
            <div className="main-sale-fivestep">
              <div className="salesstep-card strategize">
                <h2>Connect</h2>
              </div>
              <div className="salesstep-card attract">
                <h2>Communicate</h2>
              </div>
              <div className="salesstep-card convert">
                <h2>Convert</h2>
              </div>
              {/* <div className="salesstep-card close"><h2>Close</h2></div>
                            <div className="salesstep-card delight"><h2>Delight</h2></div> */}
            </div>
          </div>
          <div className="frame-btn-box">
            <Button text="Achieve Your Goals Today" link="./" target="_self" />
          </div>
        </div>
      </div>
      <div className="heightswith-smp-sales">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Accelerate Your Safari Brand With a{" "}
              <span> Focused Growth Formula </span>
            </h2>
            <p>
              Get Optimum Results With a Streamlined Sales and Marketing Process
            </p>
            <p>
              We use a simple, proven system built for safari operators that
              turns interest into real bookings. We call it the Safari Growth
              Formula.
            </p>
          </div>
          <div className="hei-salerer-boxsmp">
            <div className="row booklopp">
              <div className="col-md-3">
                <div className="heig-smsp-sales-card">
                  <h3>Connect</h3>
                  <h4 className="">
                    Lead Handling That Makes a Great First Impression
                  </h4>
                  <p>
                    The first interaction a traveller has with your company sets
                    the tone for the entire journey. A fast, organized, and
                    personalized response ensures potential clients feel valued
                    and confident from the very beginning. To achieve this, we
                    focus on addressing the common challenges your team faces:
                  </p>
                  <ul>
                    <li>
                      <span>1</span>Slow responses that make travellers feel
                      overlooked
                    </li>
                    <li>
                      <span>2</span>Leads getting lost or untracked in the
                      process
                    </li>
                    <li>
                      <span>3</span>Missing key details that reveal traveller
                      preferences
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="heig-smsp-sales-card">
                  <img
                    src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/wp-content/themes/thrive-agency/images/growth-formula-5.gif"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="heig-smsp-sales-card">
                  <h3>Communicate</h3>
                  <h4>Strategic Conversations That Build Trust</h4>
                  <p>
                    Booking a safari is an emotional decision. Travellers seek
                    clarity, confidence, and connection. Clear, strategic
                    communication builds trust, highlights your expertise, and
                    ensures clients feel understood every step of the way. To
                    make every conversation count, we tackle key communication
                    hurdles:
                  </p>
                  <ul>
                    <li>
                      <span>1</span>Follow-ups that feel late or inconsistent
                    </li>
                    <li>
                      <span>2</span>Messaging that doesn’t address what
                      travellers care about
                    </li>
                    <li>
                      <span>3</span>Hesitation or uncertainty when answering
                      objections
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-heigh-par">
            <div className="row bookloppolko">
              <div className="col-md-4">
                <div className="heig-smsp-sales-card">
                  <h3>Convert</h3>
                  <h4>CRM-Driven Sales That Turn Interest Into Bookings</h4>
                  <p>
                    Many safari companies lose sales not because travellers
                    aren’t interested, but because there is no structured system
                    to convert enquiries. Using CRM tools effectively helps
                    track leads, automate follow-ups, and close more bookings.
                    To maximize every lead, we solve the main conversion gaps:
                  </p>
                  <ul>
                    <li>
                      <span>1</span>Opportunities slipping through due to
                      unstructured nurturing
                    </li>
                    <li>
                      <span>2</span>Proposals that arrive too slowly or lack
                      clarity
                    </li>
                    <li>
                      <span>3</span>No clear way to track performance or improve
                      conversions
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="heig-smsp-sales-card">
                  <h3>Convert</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <ul>
                    <li>
                      <span>1</span>Business Analysis
                    </li>
                    <li>
                      <span>2</span>Marketing Strategy
                    </li>
                    <li>
                      <span>3</span>Creating a Vision
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="heig-smsp-sales-card">
                  <h3>Close</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </p>
                  <ul>
                    <li>
                      <span>1</span>Business Analysis
                    </li>
                    <li>
                      <span>2</span>Marketing Strategy
                    </li>
                    <li>
                      <span>3</span>Creating a Vision
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-btn-box">
            <Button
              text="Maximize Your Marketing Outcomes"
              link="./"
              target="_self"
            />
          </div>
        </div>
      </div>
      <div className="smp-audience-slae-box">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Outperform Competitors and Capture Your{" "}
              <span> Audience’s Attention </span>
            </h2>
            <p>Harness Your Strengths and Stay Ahead of the Competition</p>
            <p>
              In today’s competitive safari market, standing out is about more
              than just great itineraries. It’s about connecting with
              travellers, building trust, and turning interest into bookings.
              The SMP Sales Growth Formula gives your team the strategies and
              tools to engage effectively, communicate with confidence, and grow
              your safari business sustainably.
            </p>
            {/* <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </p> */}
          </div>
        </div>
      </div>
      <div className="smp-sales-visitors">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Turning Enquiries Into Bookings and Bookings Into{" "}
              <span> Brand Advocates </span>
            </h2>
          </div>
          <BrandAdvocates />
        </div>
      </div>
      <div className="home-page-video">
        <div className="container">
          <div className="smp-video-content">
            <p>
              Unlike agencies that focus on clicks or surface-level metrics, we
              build fully integrated safari marketing systems designed to drive
              real bookings. Combining targeted traffic strategies with
              structured sales processes and CRM integration, our campaigns
              consistently turn high-intent travellers into qualified enquiries,
              confirmed safari bookings, and measurable revenue growth.
            </p>
          </div>
          <div className="home-vid-box">
            <AboutSmpVideo />
          </div>
        </div>
      </div>
      <div className="determine-sales-paoints">
        <div className="container">
          <div className="sales-paoints-detailor">
            <div className="row paoints-detailor">
              <div className="col-md-5">
                <div className="determine-sales-card">
                  <img
                    src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/performance-target-img-1.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="determine-sales-paracard">
                  <h3>Determine Your Objectives</h3>
                  <p>
                    Growth begins with clarity. We define your revenue targets,
                    ideal booking volume, conversion benchmarks, and sales
                    performance goals. By understanding where you are and where
                    you want to be, we align your sales strategy with measurable
                    outcomes that support the Safari Growth Formula.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="determine-sales-card">
                  <img
                    src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/performance-target-img-2-1.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="determine-sales-paracard">
                  <h3>Find the Right Tools</h3>
                  <p>
                    Once your objectives are clear, we implement the systems
                    that support them. This includes selecting and optimizing
                    CRM platforms, structuring your sales pipeline, refining
                    follow-up sequences, and equipping your team with the right
                    scripts and communication frameworks. The right tools ensure
                    your Connect, Communicate, and Convert stages operate
                    seamlessly.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="determine-sales-card">
                  <img
                    src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/performance-target-img-3-1.png"
                    alt=""
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="determine-sales-paracard">
                  <h3>Reach Your Goals</h3>
                  <p>
                    With clear objectives and the right systems in place,
                    execution becomes consistent and measurable. We train your
                    team, track performance data, optimize conversion points,
                    and refine processes continuously. The result is improved
                    response times, stronger traveller confidence, and higher
                    enquiry-to-booking conversion rates that drive sustainable
                    revenue growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smp-sale-ne-formula">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              How We Build Your Business’s <span> Growth Formula </span>
            </h2>
            <p>
              Every safari business is different. We assess your brand, sales
              process, and lead flow to identify gaps and build a clear,
              structured Growth Formula tailored to your goals.
            </p>
          </div>
          <div className="smp-sale-nebrad">
            <div className="row sale-nebrad">
              <div className="col-md-4">
                <div className="ne-formula-card">
                  <FaBusinessTime />
                  <h3>Brand and Business Positioning</h3>
                  <p>
                    We clarify your ideal traveller, unique selling points,
                    pricing position, and competitive edge so your marketing and
                    sales messaging are focused and compelling.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ne-formula-card">
                  <FaBusinessTime />
                  <h3>Lead Sources and Marketing Channels</h3>
                  <p>
                    We analyse where your enquiries come from and optimise the
                    channels that bring qualified travellers to improve lead
                    quality and consistency.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ne-formula-card">
                  <FaBusinessTime />
                  <h3>Lead Handling and Sales Process</h3>
                  <p>
                    We review your enquiry journey from first contact to
                    booking, remove bottlenecks, and implement a structured
                    process that improves response speed and professionalism.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ne-formula-card">
                  <FaBusinessTime />
                  <h3>Communication and Conversion Strategy</h3>
                  <p>
                    We refine your messaging, follow-ups, and proposal structure
                    to build trust, handle objections effectively, and move
                    travellers confidently toward booking.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ne-formula-card">
                  <FaBusinessTime />
                  <h3>Systems, CRM, and Performance Tracking</h3>
                  <p>
                    We implement or optimise CRM systems to track leads,
                    automate follow-ups, and measure conversion performance for
                    continuous improvement.
                  </p>
                </div>
              </div>
              {/* <div className="col-md-4">
                <div className="ne-formula-card">
                  <FaBusinessTime />
                  <h3>Success Measurement</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.{" "}
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="frame-btn-box">
            <Button
              text="Book a Growth Strategy Call"
              link="./"
              target="_self"
            />
          </div>
        </div>
      </div>
      <div className="smp-sales-care-value">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Safari Marketing Pro <span>Core Values</span>
            </h2>
            <p>Set Smart, Realistic Goals and Deploy Effective Strategies</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing
            </p>
          </div>
          <div
            className="smp-corevalue-tree"
            style={{ backgroundImage: `url(${plant})` }}
          >
            <div className="smp-corevalue-para">
              <div className="smp-corevalue-left-para">
                <div class="left-side left-side-1">
                  <div class="growth-content">
                    <h6 class="title"> Goal-Driven Sales</h6>
                    <p>
                      {" "}
                      We focus on measurable results. Every strategy, campaign,
                      and training session is aligned with clear revenue goals,
                      stronger conversion rates, and sustainable business
                      expansion.
                    </p>
                  </div>
                  <div class="circle-box left-box-1">G</div>
                </div>
                <div class="left-side left-side-2">
                  <div class="growth-content">
                    <h6 class="title">Ownership and Accountability</h6>
                    <p>
                      {" "}
                      We take responsibility for the strategies we implement and
                      the systems we build. We operate as a growth partner, not
                      just a service provider.
                    </p>
                  </div>
                  <div class="circle-box left-box-2">O</div>
                </div>
                <div class="left-side left-side-3">
                  <div class="growth-content">
                    <h6 class="title">Tested Systems</h6>
                    <p>
                      {" "}
                      Our frameworks are built from industry experience and
                      proven processes. We refine, measure, and optimize
                      continuously to ensure consistent performance.
                    </p>
                  </div>
                  <div class="circle-box left-box-3">T</div>
                </div>
              </div>
              <div className="smp-corevalue-right-para">
                <div class="right-side right-side-1">
                  <div class="circle-box right-box-1">R</div>
                  <div class="growth-content">
                    <h6 class="title">Results Over Hype</h6>
                    <p>
                      We prioritize data, performance, and real outcomes over
                      trends and empty promises. Our work is guided by what
                      converts, not what simply looks good.
                    </p>
                  </div>
                </div>
                <div class="right-side right-side-2">
                  <div class="circle-box right-box-2">W</div>
                  <div class="growth-content">
                    <h6 class="title">Winning Communication</h6>
                    <p>
                      We believe strong communication drives trust and bookings.
                      From messaging to follow-ups, we help safari brands
                      communicate with clarity, confidence, and authority.
                    </p>
                  </div>
                </div>
                <div class="right-side right-side-3">
                  <div class="circle-box right-box-3">H</div>
                  <div class="growth-content">
                    <h6 class="title">Human-Centered Approach</h6>
                    <p>
                      Safaris are emotional purchases. We keep the human element
                      at the center of marketing and sales, ensuring every
                      interaction builds connection and confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="misiion-pointer-box">
            <img src={arrow} alt="" />
            <h3>Mission</h3>
            <h4>Relationships</h4>
            <div className="icicic-box">
              <FaCirclePlus />
            </div>
            <h4>Results</h4>
          </div>
        </div>
      </div>
      <div className="why-smsp-sale-sbox">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Why Choose <span>SMP</span>?
            </h2>
            <p>We Understand Safari Sales</p>
            <p>
              Unlike generic marketing agencies, we specialize in the safari
              industry and understand how travellers research, compare, and
              choose their experiences.
            </p>
          </div>

          <div className="chhoseobp">
            <div className="row nookoueyeg">
              <div className="col-md-3">
                <div className="vvklo">
                  <img src={chhose1} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="vvklo-praa">
                  <h2>Proven Systems, Not Guesswork</h2>
                  <p>
                    Our strategies are based on real data, tested frameworks,
                    and years of working with tour operators.
                  </p>
                </div>
              </div>
            </div>
            <div className="row nookoueyeg">
              <div className="col-md-3">
                <div className="vvklo">
                  <img src={chhose2} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="vvklo-praa">
                  <h2>End-to-End Growth Support</h2>
                  <p>
                    We don’t just generate leads, we help you convert them into
                    bookings through training, systems, and process improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className="row nookoueyeg">
              <div className="col-md-3">
                <div className="vvklo">
                  <img src={chhose3} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="vvklo-praa">
                  <h2>Practical & Results-Focused</h2>
                  <p>
                    Everything we implement is designed to be simple,
                    actionable, and measurable.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="row nookoueyeg">
              <div className="col-md-3">
                <div className="vvklo">
                  <img src={chhose4} alt="" />
                </div>
              </div>
              <div className="col-md-9">
                <div className="vvklo-praa">
                  <h2>White-Glove Web Marketing Solutions</h2>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="smp-driven-real-se">
        <div className="container">
          <div class="comon-heading-box">
            <h2>
              Proven Results: How Our Growth Formula{" "}
              <span> Transforms Safari Businesses </span>
            </h2>
            {/* <p>Set Smart, Realistic Goals and Deploy Effective Strategies</p> */}
            <p>
              The SMP Sales Growth Formula isn’t just theory, it’s a tested
              approach that delivers measurable results. By combining strategic
              lead handling, clear communication, and CRM-driven conversion
              processes, we help safari operators increase bookings, strengthen
              client relationships, and outperform competitors. These are the
              real impacts our formula has achieved for businesses like yours.
            </p>
          </div>
          <div className="smp-driven-real-bboks">
            <div className="row jvsaafdydvfs">
              <div className="col-md-4">
                <div className="smp-driven-rea-pra">
                  <div className="piocooccco-lko">
                    <img
                      src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/growth-blog-img.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="ultiple-Location-para">
                    <h2>Multiple-Location</h2>
                    <div className="bbsass-hhool">
                      <h4>+295.7%</h4>
                      <h6>Top 5 Keyword Rankings</h6>
                    </div>
                    <div className="bbsass-hhool">
                      <h4>+295.7%</h4>
                      <h6>Top 5 Keyword Rankings</h6>
                    </div>
                    <div className="vsafssagasg_shgvas">
                      <h3>
                        <ImQuotesLeft /> From The Client
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="smp-driven-rea-pra">
                  <div className="piocooccco-lko">
                    <img
                      src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/growth-blog-imgs.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="ultiple-Location-para">
                    <h2>Multiple-Location</h2>
                    <div className="bbsass-hhool">
                      <h4>+295.7%</h4>
                      <h6>Top 5 Keyword Rankings</h6>
                    </div>
                    <div className="bbsass-hhool">
                      <h4>+295.7%</h4>
                      <h6>Top 5 Keyword Rankings</h6>
                    </div>
                    <div className="vsafssagasg_shgvas">
                      <h3>
                        <ImQuotesLeft /> From The Client
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="smp-driven-rea-pra">
                  <div className="piocooccco-lko">
                    <img
                      src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/growth-blog-image-3.png"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="ultiple-Location-para">
                    <h2>Multiple-Location</h2>
                    <div className="bbsass-hhool">
                      <h4>+295.7%</h4>
                      <h6>Top 5 Keyword Rankings</h6>
                    </div>
                    <div className="bbsass-hhool">
                      <h4>+295.7%</h4>
                      <h6>Top 5 Keyword Rankings</h6>
                    </div>
                    <div className="vsafssagasg_shgvas">
                      <h3>
                        <ImQuotesLeft /> From The Client
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="smm-faq-sec">
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
                      <Accordion.Header>
                        Who is this training for?
                      </Accordion.Header>
                      <Accordion.Body>
                        Safari tour operators, sales teams, reservations staff,
                        and management teams looking to improve enquiry
                        conversion and sales structure.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Do we need a CRM to start?
                      </Accordion.Header>
                      <Accordion.Body>
                        No. We can help you choose and set up the right CRM
                        based on your business size and needs.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        How long does implementation take?
                      </Accordion.Header>
                      <Accordion.Body>
                        Most companies start seeing improvements within the
                        first few weeks after training and system setup.
                      </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="3">
                      <Accordion.Header>
                        How much do Google Ads cost?
                      </Accordion.Header>
                      <Accordion.Body>
                        You control your cost with daily or monthly budgets.
                        Actual cost‑per‑click (CPC) depends on keyword
                        competition, bidding strategy (e.g., Manual CPC,
                        Maximise Conversions), and Quality Score. At Heroes of
                        Digital, we optimise bids, targeting, and ad quality to
                        lower CPC while increasing conversions.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        How to measure and track Google Ads performance?
                      </Accordion.Header>
                      <Accordion.Body>
                        At Heroes of Digital, we use Conversion Tracking and
                        Google Analytics (GA4) to monitor the full customer
                        journey — from click to purchase or enquiry. Key metrics
                        include CTR, Conversion Rate (CVR), Cost Per Acquisition
                        (CPA), and Return on Ad Spend (ROAS). This ensures we
                        optimise campaigns for leads and revenue, not just
                        clicks.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Can I use Google Ads in an e-commerce store?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. Google Shopping campaigns showcase your products
                        with images, prices, and ratings directly in Google
                        Search. They often deliver higher CTR and purchase
                        intent compared to standard text ads, especially for
                        online retail.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        How is a Google Ads campaign set up?
                      </Accordion.Header>
                      <Accordion.Body>
                        We start with campaign strategy and keyword research,
                        define targeting, and choose bidding methods. Then we
                        create compelling ad copy and visuals, set up ad
                        extensions, configure Conversion Tracking, before
                        launching the campaign. Post‑launch, we continuously
                        optimise based A/B test results and performance data.
                      </Accordion.Body>
                    </Accordion.Item> */}
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
                        Will this work for small safari companies?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. Our Growth Formula is designed to work for both
                        small operators and large safari brands.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        What results can we expect?
                      </Accordion.Header>
                      <Accordion.Body>
                        Clients typically experience faster response times,
                        better lead organization, improved follow-ups, and
                        higher booking conversion rates.
                      </Accordion.Body>
                    </Accordion.Item>

                    {/* <Accordion.Item eventKey="2">
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
                        Is Google Ads faster than SEO?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, Google Ads can deliver clicks and leads within
                        hours of launch, while Search Engine Optimisation (SEO)
                        typically takes weeks or months to build rankings.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>
                        How long does it take to see results from Google Ads?
                      </Accordion.Header>
                      <Accordion.Body>
                        Clicks and impressions can start within hours, but
                        optimising for strong ROI and consistent conversions
                        usually takes 2–4 weeks of testing and refinement.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        Do I need a landing page for my Google Ads?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes, Google Ads can deliver clicks and leads within
                        hours of launch, while Search Engine Optimisation (SEO)
                        typically takes weeks or months to build rankings.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        Is Google Ads important?
                      </Accordion.Header>
                      <Accordion.Body>
                        Yes. It’s one of the fastest, most measurable ways to
                        generate targeted leads and sales. It also complements
                        SEO by capturing search demand while your organic
                        rankings grow.
                      </Accordion.Body>
                    </Accordion.Item> */}
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

export default SalesTraining;
