import React from 'react';
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

import CrmVideo from './CrmVideo';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdSms } from "react-icons/md";
import { RiColorFilterAiLine } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { VscGraph } from "react-icons/vsc";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import ZohoCrmTab from './ZohoCrmTab';
import ZohoCrm360 from './ZohoCrm360';
import Accordion from "react-bootstrap/Accordion";

const Crm = () => {
  return (
    <div className="smp-crm-page">
        
        <div className="google-add-hero"  style={{backgroundImage:"url('https://www.heroesofdigital.com/wp-content/uploads/2025/02/Minimal-Pattern-2-C.png')",}}>
            <div className="container">
                <div className="row add_hero">
                    <div className="col-md-7">
                        <div className="add-hero-ban-cont">
                            <h3>Customer Relationship Management (CRM)</h3>
                            <h1>Connect With Your Audience Through <span>professional video production</span></h1>
                            <p>Safari Marketing Pro of Digital is Singapore’s Premier Google Ads agency focused on performance-based strategies that increase conversions, leads, and revenue — not just clicks and impressions.</p>
                            <div className="add-hero-btn-box">
                                <Button  text="Get Free Proposal" link="./"  target="_self" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="add-hero-brand">
                            <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/07/right-img-banner-google-ads.png.webp" alt="Safari Marketing Pro" tittle="Safari Marketing Pro" className="w-100"/>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        
        <div className="trusted-crm-box">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Trusted by 300K+ <span>businesses worldwide</span></h2>                          
                </div>
                <ul className="trusted-crm-brand-list">
                    <li><img src={Trust1} alt="" className="w-100"/></li>
                    <li><img src={Trust2} alt="" className="w-100"/></li>
                    <li><img src={Trust3} alt="" className="w-100"/></li>
                    <li><img src={Trust1} alt="" className="w-100"/></li>
                    <li><img src={Trust2} alt="" className="w-100"/></li>
                    <li><img src={Trust3} alt="" className="w-100"/></li>
                </ul>

            </div>
        </div>
        <div className="win-together-crm">
            <div className="container">
                 <div className="comon-heading-box">
                    <h2>Teams that work together,<br /><span>win together</span></h2> 
                    <p>Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team — all with some AI assistance, of course. Start winning more, together.</p>                         
                </div>
                <div className="zoho-smp-tab">
                    <ZohoCrmTab />
                </div>
            </div>
        </div>
        <div className="crm-integrations-box">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Leverage the Power <span>of Our Integrations</span></h2> 
                    <p>Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team — all with some AI assistance, of course. Start winning more, together.</p>                         
                </div>
                <div className="crm-intigrt-pioc">
                    <img src={Crminti} alt="" className="w-100"/>
                </div>
            </div>
        </div>
        <div className="full-view-crm">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Everything your business needs,<br /><span>with a neat 360° view.</span></h2> 
                    <p>Multiple teams come together with sales to close deals. With Zoho CRM for Everyone, you can build unique, collaborative spaces for each team — all with some AI assistance, of course. Start winning more, together.</p>                         
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
                        <h1>Grow With <br /><span>Zoho</span></h1>
                        <img src={Arowp } alt="" />
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
                                <img src={Crmlad} alt="" className="w-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="crm-hero">
            <div className="container">
                <div className="crm-banner-cont">
                    <h1>Take us for a spin!</h1>
                    <p>CRM Marketing Automation is a multichannel software solution with features designed to ease the marketing process and generate sales-ready leads.</p>                   
                    <CrmVideo />                   
                </div>
                <div className="crm-pick">
                    <img src="https://www.zohowebstatic.com/sites/zweb/images/crm/canvas-screen-crm-home-india.svg" alt="SMP CRM" className="w-100"/>
                </div>
            </div>
        </div>
        <div className="sales-pipelines">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Keep your sales pipelines filled <span>using strategic automation</span> on Google</h2>                          
                </div>
                <div className="pipeline-box">
                    <div className="row pipline-step">
                        <div className="col-md-7">
                            <div className="crm-pipeline-set-box stepone">
                                <div className="crm-pipleline-con-step">
                                    <button>Stage 1</button>
                                    <h3>Attract and convert prospects</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                    <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                </div>
                                <div className="crm-pipleline-pico-step">
                                    <img src={Smpcrm1} alt="" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="crm-pipeline-set-box steptwo">
                                <div className="crm-pipleline-con-step">
                                    <button>Stage 2</button>
                                    <h3>Nurture with multichannel automation</h3>
                                    <p>Offer the most relevant, and personalized content right where your leads are.</p>
                                    <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                </div>
                                <div className="crm-pipleline-pico-step">
                                    <img src={Smpcrm2} alt="" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="crm-pipeline-set-box stethree">
                                <div className="crm-pipleline-con-step">
                                    <button>Stage 3</button>
                                    <h3>Score leads based on intent</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                    <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                </div>
                                <div className="crm-pipleline-pico-step">
                                    <img src={Smpcrm3} alt="" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="crm-pipeline-set-box stepfour">
                                <div className="crm-pipleline-con-step">
                                    <button>Stage 4</button>
                                    <h3>Assign only sales-ready leads to the sales team</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                    <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                </div>
                                <div className="crm-pipleline-pico-step">
                                    <img src={Smpcrm4} alt="" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="crm-pipeline-set-box stepfive">
                                <div className="row">
                                    <div className="col-md-6">
                                         <div className="crm-pipleline-con-step">
                                            <button>Stage 5</button>
                                            <h3>Identify which campaigns bring maximum ROI</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                            <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                             <div className="crm-pipleline-pico-step">
                                                <img src={Smpcrm5} alt="" className="w-100"/>
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
                            <h2>Grow your business with <br /> <span>marketing automation</span></h2>
                        </div>
                        <div className="web-effective">
                            <div className="effective-rors">
                               
                                    <div className="web-effective-para">
                                        <h2>Generate leads with strategic and personalized campaigns</h2>
                                        <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                                    </div>                             
                                    <div className="web-effective-pic">
                                        <img src={Smpcrm6} alt="Designs that trigger emotions" className="w-100"/>
                                    </div>  

                                    <div className="web-effective-pic">
                                        <img src={Smpcrm7} alt="Persuasive content" className="w-100"/>
                                    </div>                            
                                    <div className="web-effective-para">
                                        <h2>Nurture leads using multichannel marketing automation</h2>
                                        <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                                    </div> 

                                    <div className="web-effective-para">
                                        <h2>Convert leads effortlessly to increase ROI</h2>
                                        <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                                    </div>                              
                                    <div className="web-effective-pic">
                                        <img src={Smpcrm8} alt="Convert more visitors into leads" className="w-100"/>
                                    </div>   
                            </div>
                        </div>
        
                    </div>
        </div>
        <div className="zoho-marketing-box">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>Why Zoho Marketing Automation?</h2>
                </div>
                <div className="zoho-marketing-inner">
                    <div className="row zoho-roas">
                        <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                    <SlCalender />
                                </div>
                                <h3>Complete marketing planner</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                    <MdSms />
                                </div>
                                <h3>Personalized experience</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                         <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                    <RiColorFilterAiLine />
                                </div>
                                <h3>Ecommerce solution</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                         <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                   <FcSalesPerformance />
                                </div>
                                <h3>Sales aligned with marketing</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                   <VscGraph />
                                </div>
                                <h3>GDPR-compliant</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                   <FaPersonWalkingArrowLoopLeft />
                                </div>
                                <h3>Closed loop reporting</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
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
                            <li><img src={Smpcrown1} alt="" /></li>
                            <li><img src={Smpcrown2} alt="" /></li>
                            <li><img src={Smpcrown3} alt="" /></li>
                            <li><img src={Smpcrown4} alt="" /></li>                           
                            <li><img src={Smpcrown6} alt="" /></li>
                            <li><img src={Smpcrown5} alt="" /></li>
                            <li><img src={Smpcrown7} alt="" /></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>

         <div className="smp-crm_faqs-sec">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>FAQs</h2>
                    <p>Frequently asked questions  about Google Ads services</p>
                </div>
                <div className="addfaq_main">
                    <div className="row orroraddfaq">
                        <div className="col-md-6">
                            <div className="add-faq-details">
                                <Accordion defaultActiveKey="0" flush className="faq-accordion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What are Google Ads?</Accordion.Header>
                                        <Accordion.Body>
                                        Google Ads is Google’s Pay‑Per‑Click (PPC) advertising platform where you pay each time someone clicks your ad. Your ads can appear in Google Search results, on YouTube, Gmail, and across the Google Display Network (GDN).
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What types of Google Ads can Heroes of Digital run?</Accordion.Header>
                                        <Accordion.Body>
                                        We manage Search Ads (text ads in Google Search results), Display Ads (image ads on websites in the GDN), YouTube Video Ads, Google Shopping campaigns for e‑commerce, and Remarketing campaigns that re‑engage past visitors. We choose the right campaign types based on your objectives, audience, and Return on Ad Spend (ROAS) targets.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>How does Google Ads work?</Accordion.Header>
                                        <Accordion.Body>
                                       You select keywords, audience targeting, and bidding strategies. When users search for those keywords or match your targeting, Google runs an ad auction to decide whose ads appear. You pay based on your bid and performance metrics like Quality Score, which combines ad relevance, Click‑Through Rate (CTR), and landing page experience.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>How much do Google Ads cost?</Accordion.Header>
                                        <Accordion.Body>
                                        You control your cost with daily or monthly budgets. Actual cost‑per‑click (CPC) depends on keyword competition, bidding strategy (e.g., Manual CPC, Maximise Conversions), and Quality Score. At Heroes of Digital, we optimise bids, targeting, and ad quality to lower CPC while increasing conversions.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>How to measure and track Google Ads performance?</Accordion.Header>
                                        <Accordion.Body>
                                       At Heroes of Digital, we use Conversion Tracking and Google Analytics (GA4) to monitor the full customer journey — from click to purchase or enquiry. Key metrics include CTR, Conversion Rate (CVR), Cost Per Acquisition (CPA), and Return on Ad Spend (ROAS). This ensures we optimise campaigns for leads and revenue, not just clicks.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Can I use Google Ads in an e-commerce store?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes. Google Shopping campaigns showcase your products with images, prices, and ratings directly in Google Search. They often deliver higher CTR and purchase intent compared to standard text ads, especially for online retail.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>How is a Google Ads campaign set up?</Accordion.Header>
                                        <Accordion.Body>
                                        We start with campaign strategy and keyword research, define targeting, and choose bidding methods. Then we create compelling ad copy and visuals, set up ad extensions, configure Conversion Tracking, before launching the campaign. Post‑launch, we continuously optimise based A/B test results and performance data.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    </Accordion>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="add-faq-details">
                                <Accordion defaultActiveKey="0" flush className="faq-accordion">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>How can I benefit from Google Ads?</Accordion.Header>
                                        <Accordion.Body>
                                        It drives targeted, high‑intent traffic to your site, helping you generate leads and sales quickly. Advanced targeting — like location, device, audience segments, and remarketing — ensures your ads reach the right people at the right time, improving Return on Ad Spend (ROAS).
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Is Google Ads suitable for small businesses?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes, it’s highly scalable. You can start with a modest budget, use location targeting to focus on nearby customers, and expand as you see profitable results.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Is there a disadvantage for Google Ads?</Accordion.Header>
                                        <Accordion.Body>
                                        Results stop when you stop running ads, and poorly managed campaigns can waste budget. Without proper bid strategies, targeting, and optimisation, your Cost Per Acquisition (CPA) can climb quickly.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Is Google Ads faster than SEO?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes, Google Ads can deliver clicks and leads within hours of launch, while Search Engine Optimisation (SEO) typically takes weeks or months to build rankings.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>How long does it take to see results from Google Ads?</Accordion.Header>
                                        <Accordion.Body>
                                        Clicks and impressions can start within hours, but optimising for strong ROI and consistent conversions usually takes 2–4 weeks of testing and refinement.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Do I need a landing page for my Google Ads?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes, Google Ads can deliver clicks and leads within hours of launch, while Search Engine Optimisation (SEO) typically takes weeks or months to build rankings.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Is Google Ads important?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes. It’s one of the fastest, most measurable ways to generate targeted leads and sales. It also complements SEO by capturing search demand while your organic rankings grow.
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
    
  )
}

export default Crm;