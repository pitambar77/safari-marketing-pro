import React from 'react'
import Button from "../../components/Button";
import AgencyBrand from '../googleAdd/AgencyBrand';
import Smmpic1 from "../../assets/images/smm-service1.webp";
import Smmpic2 from "../../assets/images/smm-service2.webp";
import logo from "../../assets/images/smp-logo.png";
import SmpCustomersReview from './SmpCustomersReview';

const SmpReviews = () => {
    return (
        <div className="smp-review-page">

            <div className="google-add-hero" style={{ backgroundImage: "url('https://www.heroesofdigital.com/wp-content/uploads/2025/02/Minimal-Pattern-2-C.png')", }}>
                <div className="container">
                    <div className="row add_hero">
                        <div className="col-md-7">
                            <div className="add-hero-ban-cont">
                                <h3>our clients are saying</h3>
                                <h1>Don’t just take our word for it. <span>See what our clients are saying.</span></h1>
                                <p>Safari Marketing Pro of Digital is Singapore’s Premier Google Ads agency focused on performance-based strategies that increase conversions, leads, and revenue — not just clicks and impressions.</p>
                                <div className="add-hero-btn-box">
                                    <Button text="Get Free Proposal" link="./" target="_self" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="add-hero-brand">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/07/right-img-banner-google-ads.png.webp" alt="Safari Marketing Pro" tittle="Safari Marketing Pro" className="w-100" />
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
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/PremierBadge2025.png" alt="" className="w-100" />
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
            <div className="smm-services-sec new-revies-case">
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
                                        <img src={Smmpic1} alt="" className='w-100' />
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
                                        <img src={Smmpic2} alt="" className='w-100' />
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
                        <Button text="Client Success Stories" link="./" target="_self" />
                    </div>

                </div>
            </div>
            <div className="costomer-review-rating">
                <div className="container">
                    <div className="smp-rankings-box">
                        <div className="row smp-ranking">
                            <div className="col-md-2">
                                <div className="randing-smp-logo">
                                    <img src={logo} alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="randing-smp-middle">
                                    <h3>We’ve Driven Over</h3>
                                    <h2>1,312,500 page</h2>
                                    <p> <span>#1 Rankings</span> on Google for our clients</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="randing-smp-right">
                                    <img src="https://www.webfx.com/wp-content/themes/fx/assets/img/ctas/page-1-rankings-cta/award-v2.svg" alt="" className="w-100" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="comon-heading-box">
                        <h2>Hear from 1,100+ Happy <span>SMP customers</span></h2>
                        <p>As an online SEO agency, performance isn’t a promise — it’s our standard. Our SEO services combine strategic thinking, data-backed execution, and hands-on support to help you rank, grow, and stay ahead of your competition.</p>
                    </div>
                    <div className="smp-reviw-all">
                        <SmpCustomersReview />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SmpReviews;