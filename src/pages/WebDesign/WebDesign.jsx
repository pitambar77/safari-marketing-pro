import React from 'react';
import Button from "../../components/Button";
import AgencyBrand from '../googleAdd/AgencyBrand';
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
import Table from 'react-bootstrap/Table';
import { IoMdCheckmark } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../googleAdd/AddBlog";
import Cta from '../../components/Cta';

const WebDesign = () => {
  return (
    <div className="webdesign-page">

        <div className="google-add-hero"  style={{backgroundImage:"url('https://www.heroesofdigital.com/wp-content/uploads/2025/02/Minimal-Pattern-2-C.png')",}}>
            <div className="container">
                <div className="row add_hero">
                    <div className="col-md-7">
                        <div className="add-hero-ban-cont">
                            <h3>Web Design</h3>
                            <h1>Get a website that serves as a <span>sales generating machine</span></h1>
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
         <div className="add_agency-sec">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Top SMEs and MNCs in Singapore choose us as their <span>Google Ads agency in Singapore</span></h2>
                </div>
                <div className="agency_brand">
                   <AgencyBrand />
                </div>
                <div className="googla-agec-logo">
                    <div className="row brad_googleadd">
                        <div className="col-md-2">
                            <div className="brad_googleadd_log">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/PremierBadge2025.png" alt="" className="w-100"/>
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="brad_googleadd-para">
                                <p>Get a Google Premier Partner team of certified Google Adwords / SEM specialists who have a minimum of 2 years experience managing various SEM campaigns locally. We help you create the perfect combination of strategy and implementation to ensure we achieve your goals.</p>
                                <h3>Managed by Certified Google Ads professionals</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <div className="smp-best-website-sec">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>Some websites we've created that <span>generate enquiries </span>like a machine</h2>
                </div>
                <div className="smp-best-website">
                    <WebsiteSamples />
                </div>
            </div>
         </div>         
         <div className="make-us-effective-sec">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>What makes an <br /> <span>effective website design</span></h2>
                </div>
                <div className="web-effective">
                    <div className="effective-rors">
                       
                            <div className="web-effective-para">
                                <h2>Designs that trigger emotions</h2>
                                <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                            </div>
                       
                            <div className="web-effective-pic">
                                <img src={Effective1} alt="Designs that trigger emotions" className="w-100"/>
                            </div>
                      
                            <div className="web-effective-pic">
                                <img src={Effective2} alt="Persuasive content" className="w-100"/>
                            </div>
                       
                            <div className="web-effective-para">
                                <h2>Persuasive content</h2>
                                <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                            </div>
                        
                            <div className="web-effective-para">
                                <h2>Convert more visitors into leads</h2>
                                <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                            </div>
                       
                            <div className="web-effective-pic">
                                <img src={Effective3} alt="Convert more visitors into leads" className="w-100"/>
                            </div>
                      
                            <div className="web-effective-pic">
                                <img src={Effective4} alt="Loads blazing fast" className="w-100"/>
                            </div>
                    
                            <div className="web-effective-para">
                                <h2>Loads blazing fast</h2>
                                <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                            </div>
                   
                            <div className="web-effective-para">
                                <h2>Looks beautiful on all devices</h2>
                                <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                            </div>
                       
                            <div className="web-effective-pic">
                                <img src={Effective5} alt="Looks beautiful on all devices" className="w-100"/>
                            </div>
                     
                            <div className="web-effective-pic">
                                <img src={Effective6} alt="Get found on Google" className="w-100"/>
                            </div>
                      
                            <div className="web-effective-para">
                                <h2>Get found on Google</h2>
                                <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
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

         
         <div className="framework-sec">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>The Proven Framework Behind Our <br /><span>High-ROI Google Ads</span></h2>
                    <p>When it comes to Google Ads, we follow a proven process designed to get you the highest Return on Ad Spend (ROAS). Here’s how we do it.</p>
                </div>
                <div className="frmae-workflow">
                  <FrameworkBox />
                  <div className="frame-btn-box">
                  <Button  text="Get Proposal" link="./"  target="_self" />
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
                                    <li><FaCheckCircle /> Dedicated account manager backed by a team of 100+ digital marketing pros</li>
                                    <li><FaCheckCircle />Automated reporting dashboard that shows all your key metrics in one place, anytime</li>
                                    <li><FaCheckCircle />AI-driven insights that connect campaigns to real business impact, online and offline</li>
                                    <li><FaCheckCircle />Holistic strategies focused on revenue—not just clicks, leads, or rankings</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="digital-card">
                                <h3>In-House Teams</h3>
                                <ul className="digital-card-list">
                                    <li><FaRegCheckCircle className="gigital-check-ico" />Understands metrics, but might not know how to turn that into growth</li>
                                    <li><FaRegCheckCircle className="gigital-check-ico" />Understands metrics, but might not know how to turn that into growth</li>
                                    <li><IoIosCloseCircleOutline /> One or two people juggling it all and struggling to keep up with rapid changes</li>
                                    <li><IoIosCloseCircleOutline /> Analytics tools, but often stretched thin trying to make sense of it all</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="digital-card">
                                <h3>Typical Marketing Agency</h3>
                                <ul className="digital-card-list">
                                    <li><IoIosCloseCircleOutline />Account manager, but limited in scope and resources</li>
                                    <li><IoIosCloseCircleOutline />Manual reports in Excel or Word—slow and prone to errors</li>
                                    <li><IoIosCloseCircleOutline />Surface-level analysis that rarely digs into true business outcomes</li>
                                    <li><IoIosCloseCircleOutline />remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</li>
                                </ul>
                            </div>
                        </div>

                    </div>                  
                </div>
                <div className="frame-btn-box">
                      <Button  text="Get a Proposal Today!" link="./"  target="_self" />
                </div>
            </div>
        </div>
        <div className="full-funell-sec">
            <div className="container">
                 <div className="comon-heading-box">
                    <h2>Get a <span>full-funnel digital marketing strategy</span> with our following services</h2>
                  </div>
                  <div className="funnel-main-details">
                    <div className="row funnel-details">
                        <div className="col-md-4">
                            <div className="funnel-details-card">
                                <h3>Create & manage powerful ad campaigns</h3>
                                 <ul className="funnel-details_list">
                                    <li><FaRegCheckCircle />SEM Management Services</li>
                                    <li><FaRegCheckCircle />Social Advertising Services</li>
                                    <li><FaRegCheckCircle />Programmatic Advertising Services</li>
                                    <li><FaRegCheckCircle />Geofencing Advertising Services</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="funnel-details-card">
                                <h3>Collect, analyse and deploy marketing data</h3>
                                 <ul className="funnel-details_list">
                                    <li><FaRegCheckCircle />SEM Management Services</li>
                                    <li><FaRegCheckCircle />Social Advertising Services</li>
                                    <li><FaRegCheckCircle />Programmatic Advertising Services</li>
                                    <li><FaRegCheckCircle />Geofencing Advertising Services</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="funnel-details-card">
                                <h3>Stronger Brand. Higher Conversions.</h3>
                                 <ul className="funnel-details_list">
                                    <li><FaRegCheckCircle />SEM Management Services</li>
                                    <li><FaRegCheckCircle />Social Advertising Services</li>
                                    <li><FaRegCheckCircle />Programmatic Advertising Services</li>
                                    <li><FaRegCheckCircle />Geofencing Advertising Services</li>
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
                                 <h2>Ready to turn <span>clicks into customers</span> ?</h2>
                                 <p>Are you getting the full potential of your digital campaigns? Partner with Heroes of Digital today!</p>
                                </div>
                                <h3>What you can expect from us:</h3>
                                <ul className="customers-exp-list">
                                    <li>More hot leads through targeted Google Ads </li>
                                    <li>Boost your return on ad spend with optimised campaigns</li>
                                    <li>Stay ahead of trends with data-backed strategies</li>
                                    <li>Measure the true impact of your ad campaigns on sales</li>
                                </ul>                                
                                <p>Get a free Google Ads proposal, including a bonus pricing plan.</p>
                                <Button  text="Get Proposal" link="./"  target="_self" />
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
                    <h2>What’s Included in Our <span>Google Ads Service Packages</span></h2>
                    <p>As a leading Google Ads marketing agency in Singapore, we offer scalable packages designed to grow with your business.</p>
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
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>
                        <tr>
                        <td>Complete google ads set up / restructure based on goals</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>
                        <tr>
                        <td>Full keyword research and campaign strategy</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
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
                        <td>Conversion tracking set up to track email form submissions & other key events</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>
                        <tr>
                        <td>Reporting Dashboard set up for realtime access to results</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>
                        <tr>
                        <td>Continuous optimisation towards campaign objectives</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>
                        <tr>
                        <td>Implementation of various bidding strategies to get lowest cost per click and maximum conversions</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>
                        <tr>
                        <td>Ongoing negative keyword insertion to reduce budget wastage and irrelevant clicks</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>
                        <tr>
                        <td>Offline tracking integration</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>
                        <tr>
                        <td>Tracking of user behaviour on website / landing page to optimise conversions if applicable</td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
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
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        <td><IoMdCheckmark /></td>
                        </tr>

                    </tbody>
                    </Table>                   
                  </div>
                   <div className="frame-btn-box">
                      <Button  text="Match Me to the Right Package" link="./"  target="_self" />
                  </div>

            </div>
        </div>
        <div className="add_faqs-sec">
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
         <div className="add-page-blog-sec">
            <div className="container">
                <div className="blog-heading">
                    <h2><span>Relevant Blog</span> Posts</h2>
                    <Button  text="View More" link="./"  target="_self" />
                </div>
                <div className="blog-slid-box">
                    <AddBlog />
                </div>
            </div>
        </div>


    </div>
  )
}

export default WebDesign;