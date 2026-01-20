import React from 'react'
import Bgvector from "../../assets/images/bg-vector-aboutus.svg";
import AgencyBrand from '../googleAdd/AgencyBrand';

const AboutUs = () => {
  return (
    <div className="smp-about-us-page">       
        <div className="about-hero-box">
            <div className="container">
            <div className="row about-top">
                <div className="col-md-7">
                    <div className="about-hero-tittle">
                        <h1>We exist to help ambitious SMEs grow</h1>
                    </div>
                </div>
            </div>
            <div className="row about-bottom">
               <div className="col-md-4">
                <div className="about-main-subtittle">
                    <h3>Why SMP of Digital was born</h3>
                </div>
               </div>
                <div className="col-md-8">
                <div className="about-main-para">
                    <p>In 2015, we saw a fundamental problem in the digital marketing industry - digital marketing agencies that lacked proper digital marketing expertise, tried to hard-sell services to unknowing SMEs, and over promised on results. The end result is unhappy clients wasting a lot of money and resources.</p>
                </div>
               </div>
            </div>
        </div>
        </div>
        <div className="smp-about-brad" style={{ backgroundImage: `url(${Bgvector})` }}>
            <div className="container">
                <div className="smp-about-brad-pic">
                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/05/image-4-1.png.webp" alt="" className="w-100" />
                </div>
            </div>
        </div>
        <div className="we-aim-about-box">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>We aim to be the <span>most ROI-focused </span> agency growth partner for SMEs</h2>
                    <p>We believe that data is the foundation of all success</p>                 
                </div>
                <div className="our-miss-about-box">
                    <div className="row smsp-miss">
                        <div className="col-md-6">
                            <div className="our-miss-about-pic">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/roy-img.png.webp" alt="" className="w-100"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="our-miss-about-con fist-child-box">
                                <h5>Our mission is to save companies from wasteful, ineffective digital marketing</h5>
                                <p>By adopting a data-driven approach with an integrated digital marketing strategy combined with machine-learning technology, we help you get maximum results from your budget.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-miss-about-box second-bg">
                    <div className="row smsp-miss">                      
                        <div className="col-md-6">
                            <div className="our-miss-about-con second-child-box">
                                <h5>Our mission is to save companies from wasteful, ineffective digital marketing</h5>
                                <p>By adopting a data-driven approach with an integrated digital marketing strategy combined with machine-learning technology, we help you get maximum results from your budget.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="our-miss-about-pic">
                                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/shane-img.png.webp" alt="" className="w-100"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="about-trust-agency">
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
    </div>
  )
}

export default AboutUs;