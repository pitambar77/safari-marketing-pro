import React from 'react'
import Button from "../../components/Button";
import AgencyBrand from '../googleAdd/AgencyBrand';
import OrganicTabinfo from "../organicMarketing/OrganicTabinfo";
import Smmpic1 from "../../assets/images/smm-service1.webp";
import Smmpic2 from "../../assets/images/smm-service2.webp";
import Seo1 from "../../assets/images/seo1.webp";
import Seo2 from "../../assets/images/seo2.webp";
import Seo3 from "../../assets/images/seo3.webp";
import Seo4 from "../../assets/images/seo4.webp";

import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ExCustomersSlider from "../../pages/googleAdd/ExCustomersSlider";
import Table from 'react-bootstrap/Table';
import { IoMdCheckmark } from "react-icons/io";
import AddBlog from "../../pages/googleAdd/AddBlog";
import SeoServices from './SeoServices';
import Accordion from "react-bootstrap/Accordion";

const OrganicMarketing = () => {
  return (
    <div className="organic-markting-page">
        
        <div className="google-add-hero"  style={{backgroundImage:"url('https://www.heroesofdigital.com/wp-content/uploads/2025/02/Minimal-Pattern-2-C.png')",}}>
            <div className="container">
                <div className="row add_hero">
                    <div className="col-md-7">
                        <div className="add-hero-ban-cont">
                            <h3>SEO Agency Singapore</h3>
                            <h1>SEO Services That Turn Traffic into <span>Paying Customers</span></h1>
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
        <div className="organic-details-tab-sec">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>How Our 8-Step SEO Process <span>Helps You Rank on Page 1</span> in Africa</h2>
                    <p>People click what they trust, and Google ranks what earns it. Backed by a proven approach trusted by 800+ companies, our Singapore SEO agency services deliver trust, traffic, and results that fuel long-term growth.</p>
                </div>
                <div className="tab-social-del">
                    <OrganicTabinfo />
                </div>
                  <div className="frame-btn-box">
                      <Button  text="Get Free SEO Proposal" link="./"  target="_self" />
                  </div>
            </div>
         </div>
         <div className="smm-services-sec">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>800+ businesses choose us to <span>consistently rank their website #1</span> on Google</h2>        
                    <p>As an online SEO agency, performance isn’t a promise — it’s our standard. Our SEO services combine strategic thinking, data-backed execution, and hands-on support to help you rank, grow, and stay ahead of your competition.</p>         
                </div>
                <div className="smm-main-serv">
                    <div className="row smm-ser-box">
                        <div className="col-md-6">
                            <div className="smm-service-card">
                                <div className="smm-service-card-pic">
                                     <img src={Smmpic1} alt="" className='w-100'/>
                                </div>
                                <div className="smm-service-card-para">
                                <h3>Financial Services Company</h3>
                                <p>Mega Furniture faced high competition and rising Google cost-per-click (CPC) rates. By combining Facebook Ads with SEM and retargeting, we improved funnel efficiency and maximised digital conversions.</p>
                                
                                 <div className="higt-sms-ser">
                                    <p><span>860%</span>increase in conversions</p>
                                    <p><span>240%</span>reduction in cost per action (CPA)</p>
                                 </div>
                                </div>                               
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="smm-service-card onemore-colo">
                                <div className="smm-service-card-pic">
                                     <img src={Smmpic2} alt="" className='w-100'/>
                                </div>
                                <div className="smm-service-card-para">
                                <h3>HC Orthopaedic Surgery</h3>
                                 <p>Mega Furniture faced high competition and rising Google cost-per-click (CPC) rates. By combining Facebook Ads with SEM and retargeting, we improved funnel efficiency and maximised digital conversions.</p>
                                
                                 <div className="higt-sms-ser">
                                    <p><span>860%</span>increase in conversions</p>
                                    <p><span>240%</span>reduction in cost per action (CPA)</p>
                                 </div>
                                </div>                               
                            </div>
                        </div>

                    </div>
                    
                </div>
                <div className="frame-btn-box">
                     <Button  text="Client Success Stories" link="./"  target="_self" />
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
        <div className="other-seo-service-sec">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>Other SEO Services Designed <br /><span>for Your Business Goals</span></h2>        
                    <p>No two businesses are alike — that’s why our strategies aren’t templated. As an experienced B2B SEO agency in Singapore and full-service online SEO agency, we offer targeted SEO services tailored to your growth stage, industry, and market.</p>         
                </div>
                <div className="other-service-slider">
                    <SeoServices />
                </div>

            </div>
        </div>
        <div className="smp-organic-diff-sec">
            <div className="container">
                 <div className="comon-heading-box">
                    <h2>The SMP of Digital <br /><span>Difference</span></h2>
                    <p>At SMP of Digital, we focus on what truly moves the needle: your bottom line. Our SEO services Singapore are designed to drive real business outcomes.</p>
                    <p>Recognised by 800+ local SMEs and SMCs as one of the best SEO agency Singapore options for ROI-focused growth, we combine AI tools, local expertise, and full-funnel strategies to help you scale sustainably.</p>
                  </div>
                  <div className="seo-diff-box">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-smp-dif-card">
                                <img src={Seo1} alt="SEO driven by ROI" className="w-100" />
                                <h3>SEO driven by ROI</h3>
                                <p>Our focus is driving real results. We target keywords that attract high-quality leads so your SEO spend translates into real revenue growth.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="seo-smp-dif-card">
                                <img src={Seo2} alt="Cutting-edge SEO tech" className="w-100" />
                                <h3>Cutting-edge SEO tech</h3>
                                <p>Our focus is driving real results. We target keywords that attract high-quality leads so your SEO spend translates into real revenue growth.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="seo-smp-dif-card">
                                <img src={Seo3} alt="Finger on the pulse" className="w-100" />
                                <h3>Finger on the pulse</h3>
                                <p>Our focus is driving real results. We target keywords that attract high-quality leads so your SEO spend translates into real revenue growth.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="seo-smp-dif-card">
                                <img src={Seo4} alt="24/7 reporting" className="w-100" />
                                <h3>24/7 reporting</h3>
                                <p>Our focus is driving real results. We target keywords that attract high-quality leads so your SEO spend translates into real revenue growth.</p>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="frame-btn-box">
                      <Button  text="Get Free SEO Proposal" link="./"  target="_self" />
                  </div>
            </div>
        </div>
        <div className="why-seo-smp-trust-se">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Why SMP of Digital is <br /><span>Africa's Trusted SEO Agency</span></h2>
                    <p>Since 2015, Heroes of Digital has helped 800+ businesses dominate search and drive real business growth. With 10 years of experience in SEO marketing Singapore, we go beyond rankings to deliver measurable outcomes through tailored, full-funnel strategies.</p>
                    <p>🏆 Named one of Singapore’s Fastest Growing Companies (Straits Times x Statista 2022)</p>
                    <p>🏆 Google Premier Partner | Meta Business Partner</p>
                    <p>🏆 Winner – Southeast Asia Google Premier Partner Awards (2023)</p>
                    <p>🏆 Featured on Clutch and Ahrefs as a top SEO agency</p>
                    <p>Trusted by 800+ brands, we are the SEO service Singapore businesses use to turn their traffic into revenue.</p>
                  </div>
                  <div className="bublle-btn-box">
                    <Button  text="Learn More About Us" link="./"  target="_self" />
                    <Button  text="Talk to Our Team" link="./"  target="_self" />
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

export default OrganicMarketing;