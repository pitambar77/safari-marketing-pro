import React from 'react'
import Button from "../../components/Button";
import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../../pages/googleAdd/AddBlog";
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

import formwebpic from "../../assets/images/Group-webcol.webp";
import { IoLogoWebComponent } from "react-icons/io5";

import aproch1 from "../../assets/images/digital-approach-1.svg";
import aproch2 from "../../assets/images/digital-approach-2.svg";
import aproch3 from "../../assets/images/digital-approach-3.svg";
import planttree from "../../assets/images/digital-process-tree1.png";

import { FaLeaf } from "react-icons/fa";

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
            <div className="website-include-mar">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>What’s Included in Your Web <span>Marketing Strategy?</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                    </div>
                    <div className="webside-incl-details">
                        <div className="row webbbs-smp">
                            <div className="col-md-6">
                                <div className="website-plan-marke-box">
                                    <div className="website-plan-mark-child childone">
                                        <div className="strategy-agency-tittle childone-heding">
                                            <IoLogoWebComponent />
                                            <h4>Section 1: Scorecard Results and Recommendation</h4>
                                        </div>
                                        <div className="website-plan-mark-details">
                                            <ul className="strategy-box-left-list">
                                                <li><FiCheck />Determine marketing gaps</li>
                                                <li><FiCheck />Expand your reach</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="website-plan-mark-child childtwo">
                                        <div className="strategy-agency-tittle childtwo-heding">
                                            <IoLogoWebComponent />
                                            <h4>Section 2: Solutions and Plan</h4>
                                        </div>
                                        <div className="website-plan-mark-details">
                                            <ul className="strategy-box-left-list">
                                                <li><FiCheck />Determine marketing gaps</li>
                                                <li><FiCheck />Improve audience targeting</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="website-plan-mark-child childthree">
                                        <div className="strategy-agency-tittle childthree-heding">
                                            <IoLogoWebComponent />
                                            <h4>Section 3: Worksheet and Investment</h4>
                                        </div>
                                        <div className="website-plan-mark-details">
                                            <ul className="strategy-box-left-list">
                                                <li><FiCheck />Determine marketing gaps</li>
                                                <li><FiCheck />Expand your reach</li>
                                                <li><FiCheck />Improve audience targeting</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="website-plan-marke-pic">
                                    <img src={formwebpic} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="strategyfirm-box">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>A Digital Strategy Firm <span>That Delivers</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="strategyfirm-para-box">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>

                </div>
            </div>
            <div className="threccase-study-box">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Case <span>Study</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                    </div>
                    <div className="threccasefirm-para-box">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                    <div className="hree-case-partbox">
                        <div className="row casemarkbox">
                            <div className="col-md-4">
                                <div className="threccase-card-box">
                                    <div className="threccase-card-pic">
                                        <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/digital-case-image1.png" alt="" className="w-100" />
                                    </div>
                                    <div className="fist-case-tittle">
                                        <h2>Total Leads</h2>
                                    </div>
                                    <div className="fist-case-number">
                                        <h2>+89,422</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="threccase-card-box">
                                    <div className="threccase-card-pic">
                                        <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/digital-case-image2.png" alt="" className="w-100" />
                                    </div>
                                    <div className="fist-case-tittle middle-color">
                                        <h2>Organic Traffic</h2>
                                    </div>
                                    <div className="fist-case-number">
                                        <h2>+57.4%</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="threccase-card-box">
                                    <div className="threccase-card-pic">
                                        <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/digital-case-image1.png" alt="" className="w-100" />
                                    </div>
                                    <div className="fist-case-tittle">
                                        <h2>Ppc Conversion Rate</h2>
                                    </div>
                                    <div className="fist-case-number">
                                        <h2>+13.5%</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="threccasefirm-para-box">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                    <div className="form-client-rev-3cbox">
                        <h3>From the Client:</h3>
                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
                    </div>
                    <div className="frame-btn-box">
                        <Button text="Choose A Proven Growth Strategy" link="./" target="_self" />
                    </div>

                </div>
            </div>
            <div className="development-six-point">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>6 Key Areas of Focus for Digital <span>Marketing Strategy Development</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>
                    </div>
                    <div class="steps-wrap full online-local-steps custom-yellowlast">
                        <div class="candidatestep-wrap blue">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>1</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading blue">Brand and Business</h4>
                                <p>Evaluates the level of your digital presence, including competitive position, online reputation and customer relationship management (CRM)</p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap teal">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>2</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading teal">Content and Engagement</h4>
                                <p>Assesses your brand engagement, social media marketing strategy, email marketing strategy and content strategy SEO performance, etc.</p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap bluegreen">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>3</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap ">
                                <h4 class="sub-heading bluegreen">Internal Team or Partners</h4>
                                <p>Determines your capacity to generate online marketing ideas and perform necessary web optimization processes.</p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap thrivegreen">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>4</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading thrivegreen">Technology and Software Integration</h4>
                                <p>Identifies your organization’s major challenges in tracking campaign performance metrics.</p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap green">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>5</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading green">Lead Sources</h4>
                                <p>Determines your key traffic sources and the availability of essential marketing channels.</p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap orange">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>6</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading orange">Success Measurement</h4>
                                <p>Evaluates your campaign performance based on factors such as customer lifetime value (CLV), lead volume and website traffic</p>
                            </div>
                        </div>
                    </div>
                    <div className="threccasefirm-para-box">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                    <div className="frame-btn-box">
                        <Button text="Let Us Become Your Guide" link="./" target="_self" />
                    </div>
                </div>
            </div>
            <div className="3ceffective-results-box">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Thrive’s Growth Formula Delivers <span>the Most Effective Results</span></h2>
                        <p>Drive Gains at Both Ends of Your Sales Funnel</p>
                    </div>
                    <div className="middle-box-3cpara">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="theceffective-results-pic">
                        <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/Frame-6357992.png" alt="" className="w-100" />
                    </div>
                    <div class="steps-wrap full online-local-steps custom-yellowlast">
                        <div class="candidatestep-wrap blue">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>1</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading blue">Strategize</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions </p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap teal">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>2</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading teal">Attract</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                <p>Assesses your brand engagement, social media marketing strategy, email marketing strategy and content strategy SEO performance, etc.</p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap bluegreen">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>3</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap ">
                                <h4 class="sub-heading bluegreen">Convert</h4>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap thrivegreen">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>4</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading thrivegreen">Close</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                            </div>
                        </div>
                        <div class="candidatestep-wrap green">
                            <div class="step-img-wrap">
                                <div class="stepbg">
                                    <span>Step</span>
                                    <h3>5</h3>
                                </div>
                            </div>
                            <div class="step-content-wrap">
                                <h4 class="sub-heading green">Delight</h4>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="decide-which-approach-3cbox">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>We Help You Decide Which <span>Approach Is Right for You</span></h2>
                        <p>We Zero In on the Digital Marketing Services That Fit Your Business</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <div className="deside-aproch-sub-box">
                        <div className="row deside-aproch-sub">
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch1} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>Website Audit Services</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch2} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>SEO Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch3} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>SEO Keyword Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch1} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>SEO Content Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch2} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>PPC Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch3} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>SEM Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch1} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>Amazon Marketing Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch2} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>Social Media Strategy Services</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch3} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>Link Building Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch1} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>Reputation Management Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch2} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>eCommerce Marketing Plan</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="deside-aproch-card">
                                    <div className="deside-aproch-tittle">
                                        <div className="deside-aproch-pic">
                                            <img src={aproch3} alt="" className="w-100" />
                                        </div>
                                        <div className="deside-aproch-tit">
                                            <h3>Franchise Marketing Strategy</h3>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div className="smp-planting-side-box">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Safari Marketing Pro <span>Marketing Strategy Process</span></h2>
                        <p>We Zero In on the Digital Marketing Services That Fit Your Business</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <div className="planing-treee-child">
                        <div className="row plaing-smsp-box">
                            <div className="col-md-6">
                                <div className="smp-plant-left">
                                    <img src={planttree} alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="smp-plant-para">
                                    <button>Phase 1: Root Fixes</button>
                                    <p><strong>Information Gathering, Assessments and Interviews</strong></p>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                    <ul className="smp-plant-list">
                                        <li><FaLeaf />Site speed</li>
                                        <li><FaLeaf />Server settings</li>
                                        <li><FaLeaf />Google Business Profile or Google My Business (GMB) listings</li>
                                        <li><FaLeaf />404 error pages</li>
                                        <li><FaLeaf />Backlink profile and spam score</li>
                                        <li><FaLeaf />Trust signals</li>
                                    </ul>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="smp-plant-left">
                                    <img src={planttree} alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="smp-plant-para">
                                    <button>Phase 2: Trunk Growth</button>
                                    <p><strong>Information Gathering, Assessments and Interviews</strong></p>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                    <ul className="smp-plant-list">
                                        <li><FaLeaf />Site speed</li>
                                        <li><FaLeaf />Server settings</li>
                                        <li><FaLeaf />Google Business Profile or Google My Business (GMB) listings</li>
                                        <li><FaLeaf />404 error pages</li>
                                        <li><FaLeaf />Backlink profile and spam score</li>
                                        <li><FaLeaf />Trust signals</li>
                                    </ul>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="smp-plant-left">
                                    <img src={planttree} alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="smp-plant-para">
                                    <button>Phase 3: Branch Care</button>
                                    <p><strong>Information Gathering, Assessments and Interviews</strong></p>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                    <ul className="smp-plant-list">
                                        <li><FaLeaf />Site speed</li>
                                        <li><FaLeaf />Server settings</li>
                                        <li><FaLeaf />Google Business Profile or Google My Business (GMB) listings</li>
                                        <li><FaLeaf />404 error pages</li>
                                        <li><FaLeaf />Backlink profile and spam score</li>
                                        <li><FaLeaf />Trust signals</li>
                                    </ul>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="middle-box-3cpara">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>

                </div>
            </div>
            <div className="smp-businessplan-pio">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Why Choose Safari Marketing Pro <span>for Your Digital Marketing Business Plan</span></h2>
                        <p>Leverage Our Industry Expertise and Knowledge</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                    <div className="webside-incl-details">
                        <div className="row webbbs-smp">
                            <div className="col-md-6">
                                <div className="website-plan-mark-child childone">
                                    <div className="strategy-agency-tittle childone-heding">
                                        <IoLogoWebComponent />
                                        <h4>Multidisciplinary Team</h4>
                                    </div>
                                    <div className="website-plan-marksmp">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="website-plan-mark-child childthree">
                                    <div className="strategy-agency-tittle childthree-heding">
                                        <IoLogoWebComponent />
                                        <h4>No Commitment Necessary</h4>
                                    </div>
                                    <div className="website-plan-marksmp">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="website-plan-mark-child childthree">
                                    <div className="strategy-agency-tittle childthree-heding">
                                        <IoLogoWebComponent />
                                        <h4>Established Reputation</h4>
                                    </div>
                                    <div className="website-plan-marksmp">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="website-plan-mark-child childone">
                                    <div className="strategy-agency-tittle childone-heding">
                                        <IoLogoWebComponent />
                                        <h4>Unified Plan Across Delivery Teams</h4>
                                    </div>
                                    <div className="website-plan-marksmp">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="website-plan-mark-child childone">
                                    <div className="strategy-agency-tittle childone-heding">
                                        <IoLogoWebComponent />
                                        <h4>Custom Marketing Strategy Packages</h4>
                                    </div>
                                    <div className="website-plan-marksmp">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="website-plan-mark-child childthree">
                                    <div className="strategy-agency-tittle childthree-heding">
                                        <IoLogoWebComponent />
                                        <h4>Holistic Strategy Approach</h4>
                                    </div>
                                    <div className="website-plan-marksmp">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="frame-btn-box">
                        <Button text="Get Your Roadmap to Success" link="./" target="_self" />
                    </div>

                </div>
            </div>
            <div className="add_faqs-sec">
                <div className="container">
                    <div className="comon-heading-box">
                        <h2>Digital Strategy Development FAQs</h2>
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
                        <Button text="View More" link="./" target="_self" />
                    </div>
                    <div className="blog-slid-box">
                        <AddBlog />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Marketing360;