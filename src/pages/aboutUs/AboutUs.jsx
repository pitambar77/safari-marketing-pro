import React from 'react'
import Bgvector from "../../assets/images/bg-vector-aboutus.svg";
import Button from "../../components/Button";
import logo from "../../assets/images/smp-logo.png";
import AboutSmpVideo from "../../pages/aboutUs/AboutSmpVideo";

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
       <div className="results-drive-box">
         <div className="container">
            <div className="comon-heading-box">
                    <h2>We’re a <span>Results-Driven </span> Digital <br />Marketing Agency.</h2> 
                    <div className="frame-btn-box">
                  <Button  text="Read Written SMP Reviews" link="./"  target="_self" />
                  </div>           
            </div>
         </div>
         <div className="smp-results-drive-pic">
                <ul className="smp-results-list">
                    <li><img src="https://www.webfx.com/wp-content/uploads/2025/10/about-header-1.webp" alt="" className="w-100"/></li>
                    <li><img src="https://www.webfx.com/wp-content/uploads/2025/10/about-header-2.webp" alt="" className="w-100"/></li>
                    <li><img src="https://www.webfx.com/wp-content/uploads/2025/10/about-header-3.webp" alt="" className="w-100"/></li>
                    <li><img src="https://www.webfx.com/wp-content/uploads/2025/10/about-header-4.webp" alt="" className="w-100"/></li>
                    <li><img src="https://www.webfx.com/wp-content/uploads/2025/10/about-header-5.webp" alt="" className="w-100"/></li>
                </ul>
            </div>

       </div>
       <div className="smp-leader-comany-sec">
        <div className="container">
             <div className="comon-heading-box">
                    <h2>We’re a Leader in Tech-Enabled <span>Digital Marketing Solutions</span></h2>                            
            </div>
            <div className="smp-custom-trategies">
                <div className="row custom-trategies">
                    <div className="col-md-6">
                        <div className="custom-trategies-left">
                            <h3>Custom Strategies. Real Results.</h3>
                            <p>We create tailored marketing plans built around your goals — with a sharp focus on what matters most: leads, revenue, and real business growth.</p>

                            <h3>Full-Service, Tech-Enabled Marketing</h3>
                            <p>Our strategies combine SEO, PPC, content, and more to maximize results. Backed by RevenueCloudFX, you’ll get transparent reporting and smarter decisions</p>

                            <h3>Built for Your Business</h3>
                            <p>Forget one-size-fits-all. We deliver fully custom strategies powered by real people, real tech, and a shared passion</p>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="custom-trategies-right">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="custom-trategies-card">
                                        <div className="custom-trategies-vok">
                                            <h3>$10B</h3>
                                            <p>revenue generated</p>
                                        </div>
                                        <img src="https://www.webfx.com/wp-content/uploads/2025/10/chart-uptrend.svg" alt="" />
                                    </div>
                                </div>
                                 <div className="col-md-6">
                                    <div className="custom-trategies-card one-box">
                                        <div className="custom-trategies-vok">
                                            <h3>24M+</h3>
                                            <p>leads delivered</p>
                                        </div>
                                        <img src="https://www.webfx.com/wp-content/uploads/2025/10/funnel-2.svg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="custom-trategies-card two-box">
                                        <div className="custom-trategies-vok">
                                            <h3>40+</h3>
                                            <p>earned media wins</p>
                                        </div>
                                        <img src="https://www.webfx.com/wp-content/uploads/2025/10/award-2.svg" alt="" />
                                    </div>
                                </div>
                                 <div className="col-md-6">
                                    <div className="custom-trategies-card three-box">
                                        <div className="custom-trategies-vok">
                                            <h3>#1</h3>
                                            <p>ROI platform</p>
                                        </div>
                                        <img src="https://www.webfx.com/wp-content/uploads/2025/10/trophy-2.svg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="last-brading-abbox">
                                        <h3>In-house technology</h3>
                                        <ul className="last-brading-log">
                                            <li><img src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/colored-flex-boxes/rcfx-light-mode.png" alt="" className="w-100"/></li>
                                            <li><img src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/colored-flex-boxes/nutshell-logo.png" alt="" className="w-100"/></li>
                                            <li><img src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/colored-flex-boxes/seo-com-logo.png" alt="" className="w-100"/></li>
                                            <li><img src="https://www.webfx.com/wp-content/themes/fx/assets/img/blocks/general/colored-flex-boxes/teamai-logo.png" alt="" className="w-100"/></li>        
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="smp-rankings-box">
               <div className="row smp-ranking">
                <div className="col-md-2">
                    <div className="randing-smp-logo">
                        <img src={logo} alt="" className="w-100"/>
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
                        <img src="https://www.webfx.com/wp-content/themes/fx/assets/img/ctas/page-1-rankings-cta/award-v2.svg" alt="" className="w-100"/>
                    </div>
                </div>

               </div>
            </div>
            <div className="main-brad-smp-video">
                <AboutSmpVideo />
            </div>


        </div>
       </div>
        <div className="growing-businesses-smp">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>We Drive Results That <br /><span>Grow Businesses</span> Digital</h2>   
                 </div>
                 <div className="growing-smp-con">
                    <div className="row growing-paol">
                        <div className="col-md-8">
                                <div className="growing-para-box">
                                    <p>At SMP, we help companies grow online with data-driven, AI-powered marketing strategies that deliver measurable results.</p>
                                    <p>With $10B+ in client revenue generated in the last five years, we don’t just drive impact — we scale it. From visibility to leads to conversions, every strategy is tailored to your goals.</p>
                                    <p>What sets us apart? Our blend of in-house experts and proprietary tools — combining human insight with advanced tech to power smarter, faster campaigns. With 1,100+ testimonials, our results speak for themselves.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                        </div>
                        <div className="col-md-4">
                                <div className="growing-pic-box">
                                  <img src="https://www.webfx.com/wp-content/uploads/2025/09/card-simple.webp" alt="" className="w-100"/>
                                </div>
                        </div>
                    </div>
                 </div>

            </div>
        </div>
        <div className="smp-more-service">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>More than just a <span>place to work</span></h2>                            
                </div>
                <div className="top-service-smp-box">
                    <div className="row top-tab-ser">
                            <div className="col-md-6">
                                <div className="smp-top-service-card">
                                    <div className="smp-top-service-para">
                                        <h3>#1 Best Place to Work</h3>
                                         <p>in PA 9 years in a row</p>
                                    </div>
                                    <img src="https://www.webfx.com/wp-content/uploads/2025/10/track-record.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="smp-top-service-card">
                                    <div className="smp-top-service-para">
                                        <h3>8,500+ lives impacted</h3>
                                         <p>Through #FXBuilds</p>
                                    </div>
                                    <img src="https://www.webfx.com/wp-content/uploads/2025/10/tools.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="smp-top-service-card">
                                    <div className="smp-top-service-para">
                                        <h3>Team perks</h3>
                                         <p>Kayaks, yoga, and an in-house barista — it’s more than just a workplace.</p>
                                    </div>
                                    <img src="https://www.webfx.com/wp-content/uploads/2025/10/lotus.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="smp-top-service-card">
                                    <div className="smp-top-service-para">
                                        <h3>Powered by Positivity</h3>
                                         <p>We lead with positivity — tackling challenges with creativity and energizing every project.</p>
                                    </div>
                                    <img src="https://www.webfx.com/wp-content/uploads/2025/10/emotion-2.svg" alt="" />
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