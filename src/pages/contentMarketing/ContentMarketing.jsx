
import Button from "../../components/Button";
import AgencyBrand from "../googleAdd/AgencyBrand";
import ContentTabinfo from "./ContentTabinfo";
import Contpico1 from "../../assets/images/video-service1.webp";
import Contpico2 from "../../assets/images/video-service2.webp";
import Contpico3 from "../../assets/images/video-service3.webp";
import Contpico4 from "../../assets/images/video-service4.webp";
import Contpico5 from "../../assets/images/video-service5.webp";
import Contpico6 from "../../assets/images/video-service6.webp";
import Accordion from 'react-bootstrap/Accordion';
import { GoDotFill } from "react-icons/go";
import VideoGallery from "./VideoGallery";
import ContentCustomerSlider from "./ContentCustomerSlider";


const ContentMarketing = () => {
  return (
    <div className="contain-marketing-page">
       
        <div className="google-add-hero"  style={{backgroundImage:"url('https://www.heroesofdigital.com/wp-content/uploads/2025/02/Minimal-Pattern-2-C.png')",}}>
            <div className="container">
                <div className="row add_hero">
                    <div className="col-md-7">
                        <div className="add-hero-ban-cont">
                            <h3>Content Marketing</h3>
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
         <div className="creative-content-tab-sec">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Performance-focused video creative that <span>makes you more money</span></h2>
                    <p>Like all of our services, our video production agency is geared towards making you more money, so we always remain focused on how every video we produce can generate ROI.</p>
                </div>
                <div className="smp-creative-con-box">
                    <ContentTabinfo />
                </div>

            </div>
         </div>
         <div className="video-production-sec">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>What our <span>video <br />production services</span> include?</h2>
                    <p>When it comes to Google Ads, we follow a proven process designed to get you the highest Return on Ad Spend (ROAS). Here’s how we do it.</p>
                </div>
                <div className="video-production-content">
                    <div className="content-viseo-box">                   
                        <div className="video-production-card">
                            <img src={Contpico1} alt="Scripting & Storyboarding That Sells" className="w-100"/>
                            <h3>Scripting & Storyboarding That Sells</h3>
                            <p>We don’t just film — we script every scene with conversions in mind. From the first hook to the final CTA, each shot is mapped out to highlight your offer, solve objections, and trigger action. No fluff — just persuasive, goal-driven storytelling.</p>
                        </div>                  
                        <div className="video-production-card">
                            <img src={Contpico2} alt="Full-Funnel Video Shoots (UGC, Reels, Explainers & More)" className="w-100"/>
                            <h3>Full-Funnel Video Shoots (UGC, Reels, Explainers & More)</h3>
                            <p>We don’t just film — we script every scene with conversions in mind. From the first hook to the final CTA, each shot is mapped out to highlight your offer, solve objections, and trigger action. No fluff — just persuasive, goal-driven storytelling.</p>
                        </div>
                        <div className="video-production-card">
                            <img src={Contpico3} alt="Editing, Optimisation & Multi-Platform Delivery" className="w-100"/>
                            <h3>Editing, Optimisation & Multi-Platform Delivery</h3>
                            <p>We don’t just film — we script every scene with conversions in mind. From the first hook to the final CTA, each shot is mapped out to highlight your offer, solve objections, and trigger action. No fluff — just persuasive, goal-driven storytelling.</p>
                        </div>
                        <div className="video-production-card">
                            <img src={Contpico4} alt="Performance Tracking with Advanced software" className="w-100"/>
                            <h3>Performance Tracking with Advanced software</h3>
                            <p>We don’t just film — we script every scene with conversions in mind. From the first hook to the final CTA, each shot is mapped out to highlight your offer, solve objections, and trigger action. No fluff — just persuasive, goal-driven storytelling.</p>
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
                            <p>Video is the most engaging form of content, but most businesses aren’t using it to its full potential. Our in-house team of creatives work with you to produce compelling narratives. From here, we’ll capture the footage and professionally edit your video, so the final product is captivating and delivers the message you originally set out to achieve.</p>
                        </div>               
                        <div className="content-pro-hed">
                            <img src={Contpico5} alt="Video production for websites" className="w-100"/>
                        </div>                 
                        <div className="content-pro-hed">
                            <img src={Contpico6} alt="Video production for websites" className="w-100"/>
                        </div>              
                        <div className="content-pro-hed">
                            <h2>Social media video production</h2>
                            <div className="content-tab-infomation">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> Maximise Your Social Media Advertising Budget </Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Data-Driven Social Media Video Production</Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header> Create Scroll-Stopping Social Media Videos </Accordion.Header>
                                        <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
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
                    <h2>The Right Video for Every <br /><span>Stage of Your Funnel</span></h2>
                    <p>When it comes to Google Ads, we follow a proven process designed to get you the highest Return on Ad Spend (ROAS). Here’s how we do it.</p>
                </div>
                <div className="frmae-workflow">
                 <div className="row frame-layout">
                    <div className="col-md-6">
                        <div className="frame-work-box">
                            <div className="frame-images-box" style={{ background: "#f5f5f5" }}>
                                <img alt="Top of Funnel (Awareness & Engagement)" src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/PPC-Audit@2x.webp" />
                            </div>
                            <div className="frame-detail-con">
                                <h3>Top of Funnel (Awareness & Engagement)</h3>
                                <p>These videos are designed to stop the scroll, spark interest, and introduce your brand or offer.</p>
                                <p className="bround-onelist"><GoDotFill /> <strong>Problem-First Intro Videos</strong></p>
                                <p>Open with a pain point your audience deeply relates to — then tease the solution. These are your strongest scroll-stoppers on TikTok, Meta, and YouTube Shorts.</p>
                                <p className="bround-onelist"><GoDotFill /> <strong>Big Promise or Shock-Value Hooks</strong></p>
                                <p>Lead with a bold statement, surprising stat, or emotionally charged claim that earns attention and curiosity. Works well for aggressive awareness campaigns.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="frame-work-box">
                            <div className="frame-images-box" style={{ background: "#f7c245" }}>
                                <img alt="Middle of Funnel (Consideration & Education)" src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Cads@2x.webp" />
                            </div>
                            <div className="frame-detail-con">
                                <h3>Middle of Funnel (Consideration & Education)t</h3>
                                <p>These videos are designed to stop the scroll, spark interest, and introduce your brand or offer.</p>
                                <p className="bround-onelist"><GoDotFill /> <strong>Problem-First Intro Videos</strong></p>
                                <p>Open with a pain point your audience deeply relates to — then tease the solution. These are your strongest scroll-stoppers on TikTok, Meta, and YouTube Shorts.</p>
                                <p className="bround-onelist"><GoDotFill /> <strong>Big Promise or Shock-Value Hooks</strong></p>
                                <p>Lead with a bold statement, surprising stat, or emotionally charged claim that earns attention and curiosity. Works well for aggressive awareness campaigns.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="frame-work-box">
                            <div className="frame-images-box" style={{ background: "#a7a3f4" }}>
                                <img alt="Bottom of Funnel (Conversion & Remarketing)" src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Landing-Page@2x-1.webp" />
                            </div>
                            <div className="frame-detail-con">
                                <h3>Bottom of Funnel (Conversion & Remarketing)</h3>
                                <p>These videos are designed to stop the scroll, spark interest, and introduce your brand or offer.</p>
                                <p className="bround-onelist"><GoDotFill /> <strong>Problem-First Intro Videos</strong></p>
                                <p>Open with a pain point your audience deeply relates to — then tease the solution. These are your strongest scroll-stoppers on TikTok, Meta, and YouTube Shorts.</p>
                                <p className="bround-onelist"><GoDotFill /> <strong>Big Promise or Shock-Value Hooks</strong></p>
                                <p>Lead with a bold statement, surprising stat, or emotionally charged claim that earns attention and curiosity. Works well for aggressive awareness campaigns.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="frame-work-box">
                            <div className="frame-images-box" style={{ background: "#63eac4" }}>
                                <img alt="Top of Funnel (Awareness & Engagement)" src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/E2E@2x.webp" />
                            </div>
                            <div className="frame-detail-con">
                                <h3>Top of Funnel (Awareness & Engagement)</h3>
                                <p>These videos are designed to stop the scroll, spark interest, and introduce your brand or offer.</p>
                                <p className="bround-onelist"><GoDotFill /> <strong>Problem-First Intro Videos</strong></p>
                                <p>Open with a pain point your audience deeply relates to — then tease the solution. These are your strongest scroll-stoppers on TikTok, Meta, and YouTube Shorts.</p>
                                <p className="bround-onelist"><GoDotFill /> <strong>Big Promise or Shock-Value Hooks</strong></p>
                                <p>Lead with a bold statement, surprising stat, or emotionally charged claim that earns attention and curiosity. Works well for aggressive awareness campaigns.</p>

                            </div>
                        </div>
                    </div>                   
                 </div>
                </div>


                <div className="frame-btn-box">
                  <Button  text="Get Proposal" link="./"  target="_self" />
                </div>

            </div>
        </div>
        <div className="recent-content-video-sec">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Examples of our <span>recent <br />video production work</span></h2>
                    <p>Like all of our services, our video production agency is geared towards making you more money, so we always remain focused on how every video we produce can generate ROI.</p>
                </div>
                <div className="content-viv-gallery">
                    <VideoGallery />
                </div>

            </div>
        </div>
        <div className="content-customer-review-sec">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>What businesses like yours say about our <br /><span>video production agency</span></h2>
                    <p>Like all of our services, our video production agency is geared towards making you more money, so we always remain focused on how every video we produce can generate ROI.</p>
                </div>
                <ContentCustomerSlider />
            </div>
        </div>
        <div className="smp-organic-diff-sec">
            <div className="container">
                 <div className="comon-heading-box">
                    <h2>Why We Are Different and<br /><span>Deliver Best Results</span></h2>
                    <p>At SMP of Digital, we focus on what truly moves the needle: your bottom line. Our SEO services Singapore are designed to drive real business outcomes.</p>                  
                  </div>
                  <div className="seo-diff-box">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="seo-smp-dif-card">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Frame-49-2.jpg.webp" alt="Measurable Results" className="w-100" />
                                <h3>Measurable Results</h3>
                                <p>Our focus is driving real results. We target keywords that attract high-quality leads so your SEO spend translates into real revenue growth.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="seo-smp-dif-card">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Frame-48.jpg.webp" alt="Strategic Partnership" className="w-100" />
                                <h3>Strategic Partnership</h3>
                                <p>Our focus is driving real results. We target keywords that attract high-quality leads so your SEO spend translates into real revenue growth.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="seo-smp-dif-card">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Frame-48.png.webp" alt="Machine Learning Technology" className="w-100" />
                                <h3>Machine Learning Technology</h3>
                                <p>Our focus is driving real results. We target keywords that attract high-quality leads so your SEO spend translates into real revenue growth.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="seo-smp-dif-card">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Group-47.png.webp" alt="Conversion Rate Optimisation" className="w-100" />
                                <h3>Conversion Rate Optimisation</h3>
                                <p>Our focus is driving real results. We target keywords that attract high-quality leads so your SEO spend translates into real revenue growth.</p>
                            </div>
                        </div>
                    </div>
                  </div>
                 
            </div>
        </div>


    </div>
  )
}

export default ContentMarketing;