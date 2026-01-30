import React from 'react'
import Button from "../../components/Button";
import Marketing360Videos from './Marketing360Videos';
import { IoIosStar } from "react-icons/io";
import ratingpic1 from "../../assets/images/google-rating360.png";
import ratingpic2 from "../../assets/images/clutch-360review.png";
import ratingpic3 from "../../assets/images/tripadvi-360.png";
import { FiCheck } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Marketing360Form from './Marketing360Form';
import formpic from "../../assets/images/contactexperience-desktop-new.png";
import formpic2 from "../../assets/images/3cGroup.png";
import formpic3 from "../../assets/images/3cmapGroup.png";
import { IoLogoWebComponent } from "react-icons/io5";


const Marketing360 = () => {
    return (
        <section className="full-service-page-sec">
            <div className="google-add-hero" style={{ backgroundImage: "url('https://www.heroesofdigital.com/wp-content/uploads/2025/02/Minimal-Pattern-2-C.png')", }}>
                <div className="container">
                    <div className="row add_hero">
                        <div className="col-md-7">
                            <div className="add-hero-ban-cont">
                                <h3>360 Marketing</h3>
                                <h1>We Want To Turn Your <span>Lookers Into Bookers.</span></h1>
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
            <div className="full-service-welcom">
                <div className="container">
                    <div className="full-service-child-smp">
                        <div className="row">
                            <div className="col-md-5">
                                <div class="comon-heading-box makke-full-ser">
                                    <h2>You Know What You Want, But <span>You’re Not Sure How There</span></h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions</p>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div class="full-digrre-main-video">
                                    <Marketing360Videos />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="botto-marketing-para">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                    </ul>
                                    <h4>150+ Reviews</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="rating-box-marketing">
                                    <img src={ratingpic2} alt="" className="w-100" />
                                    <ul className="rating-star">
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                    </ul>
                                    <h4>150+ Reviews</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="rating-box-marketing">
                                    <img src={ratingpic3} alt="" className="w-100" />
                                    <ul className="rating-star">
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
                                        <li><IoIosStar /></li>
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
                        <h2>Why You Need to Start <span>With Strategy</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="market-strategy-box-full">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="market-strategy-box-left">
                                    <h3><FiCheck />A Concrete Digital Marketing Strategy Allows You To:</h3>
                                    <ul className="strategy-box-left-list">
                                        <li><FiCheck />Determine marketing gaps</li>
                                        <li><FiCheck />Expand your reach</li>
                                        <li><FiCheck />Improve audience targeting</li>
                                        <li><FiCheck />Save time, money and resources</li>
                                        <li><FiCheck />Increase traffic, leads and conversions</li>
                                        <li><FiCheck />Generate better, faster revenue</li>
                                        <li><FiCheck />Discover more opportunities to build brand awareness</li>
                                        <li><FiCheck />Take appropriate actions</li>
                                        <li><FiCheck />Measure campaign performance and brand success</li>
                                        <li><FiCheck />Build a brand reputation</li>
                                        <li><FiCheck />Scale business</li>
                                        <li><FiCheck />Compete with industry giants</li>
                                        <li><FiCheck />Accomplish business goals</li>
                                        <li><FiCheck />Manage your financial resources</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="market-strategy-box-right">
                                    <h3><RxCross2 /> Without A Well-Defined, Effective Online Marketing Strategy</h3>
                                    <ul className="strategy-box-left-list corsss">
                                        <li><RxCross2 />Define clear goals</li>
                                        <li><RxCross2 />Identify and fix digital marketing mistakes</li>
                                        <li><RxCross2 />Grow your sales pipeline</li>
                                        <li><RxCross2 />Leverage available marketing channels</li>
                                        <li><RxCross2 />Outperform your competitors</li>
                                        <li><RxCross2 />Allocate and spend your digital marketing budget wisely</li>
                                        <li><RxCross2 />Build your customer base</li>
                                        <li><RxCross2 />Establish brand confidence</li>
                                        <li><RxCross2 />Increase traffic flows and conversions</li>
                                        <li><RxCross2 />Grow your industry expertise</li>
                                        <li><RxCross2 />Provide excellent customer service</li>
                                        <li><RxCross2 />Engage with prospects across platforms</li>
                                        <li><RxCross2 />Take advantage of marketing trends and sales</li>
                                        <li><RxCross2 />Grow your industry expertise</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="full-marketing-form-box">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                            <div className="col-md-4">
                                <div className="weguide-3cmarkting-pico">
                                    <img src={formpic2} alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="weguide-3cmarkting-para">
                                    <div class="comon-heading-box makke-full-ser">
                                        <h2>You Know What You Want, But <span>You’re Not Sure How There</span></h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wesmp-guide-bootom-guide-para">
                            <h3>Accelerate Your Online Growth With an Effective Internet Marketing Strategy</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </p>
                            <div className="main-3cvideo-middle">
                                <Marketing360Videos />
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="strategy-approach-3cbox">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Safari Marketing Pro’s <span>Strategy Approach</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <div className="strategy-approach-main">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="strategy-approach-card">
                                    <img src={formpic3} alt="" className="w-100" />
                                    <h3>No Defined Goal</h3>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="strategy-approach-card">
                                    <img src={formpic3} alt="" className="w-100" />
                                    <h3>Efforts Not Getting to Goal</h3>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="strategy-approach-card">
                                    <img src={formpic3} alt="" className="w-100" />
                                    <h3>Too Many Goals. Resources.</h3>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="strategy-agency-box-smp">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Our Marketing Strategy Agency Considers <span>Your Unique Industry</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="smp-strategy-agency-parent">
                        <div className="row strategy-agen-maop">
                            <div className="col-md-4">
                                <div className="strategy-agency-card">
                                    <div className="strategy-agency-tittle">
                                        <IoLogoWebComponent />
                                        <h4>Web Audit Practices That Drive Growth</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="strategy-agency-card">
                                    <div className="strategy-agency-tittle">
                                        <IoLogoWebComponent />
                                        <h4>eCommerce Marketing Strategy</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="strategy-agency-card">
                                    <div className="strategy-agency-tittle">
                                        <IoLogoWebComponent />
                                        <h4>Online Marketplace Advertising Plan</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="strategy-agency-card">
                                    <div className="strategy-agency-tittle">
                                        <IoLogoWebComponent />
                                        <h4>Marketing Flexibility</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="strategy-agency-card">
                                    <div className="strategy-agency-tittle">
                                        <IoLogoWebComponent />
                                        <h4>Advertising Strategy</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="strategy-agency-card">
                                    <div className="strategy-agency-tittle">
                                        <IoLogoWebComponent />
                                        <h4>SEO Website Strategy</h4>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>

                        </div>
                        <div className="frame-btn-box">
                            <Button text="Strengthen Your Strategy" link="./" target="_self" />
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Marketing360;