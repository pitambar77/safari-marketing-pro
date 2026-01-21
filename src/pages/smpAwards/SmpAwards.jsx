import React from 'react';
import Button from "../../components/Button";
import AgencyBrand from '../googleAdd/AgencyBrand';
import AddBlog from "../../pages/googleAdd/AddBlog";
import Accordion from "react-bootstrap/Accordion";
import Awardvideo from "../../pages/smpAwards/Awardvideo";

const SmpAwards = () => {
  return (
    <div className="smp-awards-page">
        
        <div className="google-add-hero"  style={{backgroundImage:"url('https://www.heroesofdigital.com/wp-content/uploads/2025/02/Minimal-Pattern-2-C.png')",}}>
            <div className="container">
                <div className="row add_hero">
                    <div className="col-md-7">
                        <div className="add-hero-ban-cont">
                            <h3>Safari Marketing Pro Awards</h3>
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
        <div className="smp-arards-box">
            <div className="container">
                 <div className="comon-heading-box">
                    <h2>Excellence Defined: <span>Google's Highest Recognised Premier Partner</span> for Breakthrough Results</h2>                
                </div>
                <div className="awrd-main-smp-box">
                    <div className="row awrd-main-mab">
                        <div className="col-md-7">
                            <div className="smp-arwsa-card">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/winner_sea_breakthrough-excellence-award_yellow_1080x1080.jpg.webp" alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="smp-arwsa-videocard">
                               <Awardvideo />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smp-arwsa-card">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/HOD-x-Google-46-1536x1152.jpg.webp" alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smp-arwsa-card">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/HOD-x-Google-46-1536x1152.jpg.webp" alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="smp-arwsa-card">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/HOD-x-Google-46-1536x1152.jpg.webp" alt="" className="w-100" />
                            </div>
                        </div>

                    </div>
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

export default SmpAwards;