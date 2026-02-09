import React from 'react'
import Button from "../../components/Button";
import BrandAdvocates from './BrandAdvocates';
import AboutSmpVideo from '../aboutUs/AboutSmpVideo';
import { FaBusinessTime } from "react-icons/fa6";
import plant from "../../assets/images/smpgrowth-bg.svg";
import arrow from "../../assets/images/arrow-down-growth.svg";
import { FaCirclePlus } from "react-icons/fa6";
import chhose1 from "../../assets/images/choose-img_1.svg";
import chhose2 from "../../assets/images/choose-img_2.svg";
import chhose3 from "../../assets/images/choose-img_3.svg";
import chhose4 from "../../assets/images/choose-img_4.svg";
import { ImQuotesLeft } from "react-icons/im";

import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../googleAdd/AddBlog";

const SalesTraining = () => {
    return (
        <section className="sales-training-sec">
            <div className="sale-hero-box">
                <div className="container">
                    <div className="sale-hero-tittle">
                        <h1>SMP Growth Formula</h1>
                        <p>The 5 Steps to Securing Digital Marketing Success</p>
                    </div>
                    <div className="sales-training-steps">
                        <div className="main-sale-fivestep">
                            <div className="salesstep-card strategize"><h2>Strategize</h2></div>
                            <div className="salesstep-card attract"><h2>Attract</h2></div>
                            <div className="salesstep-card convert"><h2>Convert</h2></div>
                            <div className="salesstep-card close"><h2>Close</h2></div>
                            <div className="salesstep-card delight"><h2>Delight</h2></div>
                        </div>
                    </div>
                    <div className="frame-btn-box">
                        <Button text="Achieve Your Goals Today" link="./" target="_self" />
                    </div>

                </div>
            </div>
            <div className="heightswith-smp-sales">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Catapult Your Brand to New Heights <span>With a Focused Business Growth Plan</span></h2>
                        <p>Get Optimum Results With a Streamlined Sales and Marketing Process</p>
                    </div>
                    <div className="hei-salerer-boxsmp">
                        <div className="row booklopp">
                            <div className="col-md-3">
                                <div className="heig-smsp-sales-card">
                                    <h3>Strategize</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <ul>
                                        <li><span>1</span>Business Analysis</li>
                                        <li><span>2</span>Marketing Strategy</li>
                                        <li><span>3</span>Creating a Vision</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="heig-smsp-sales-card">
                                    <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/wp-content/themes/thrive-agency/images/growth-formula-5.gif" alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="heig-smsp-sales-card">
                                    <h3>Delight</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <ul>
                                        <li><span>1</span>Business Analysis</li>
                                        <li><span>2</span>Marketing Strategy</li>
                                        <li><span>3</span>Creating a Vision</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-heigh-par">
                        <div className="row bookloppolko">
                            <div className="col-md-4">
                                <div className="heig-smsp-sales-card">
                                    <h3>Attract</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <ul>
                                        <li><span>1</span>Business Analysis</li>
                                        <li><span>2</span>Marketing Strategy</li>
                                        <li><span>3</span>Creating a Vision</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="heig-smsp-sales-card">
                                    <h3>Convert</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <ul>
                                        <li><span>1</span>Business Analysis</li>
                                        <li><span>2</span>Marketing Strategy</li>
                                        <li><span>3</span>Creating a Vision</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="heig-smsp-sales-card">
                                    <h3>Close</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <ul>
                                        <li><span>1</span>Business Analysis</li>
                                        <li><span>2</span>Marketing Strategy</li>
                                        <li><span>3</span>Creating a Vision</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="frame-btn-box">
                        <Button text="Maximize Your Marketing Outcomes" link="./" target="_self" />
                    </div>
                </div>
            </div>
            <div className="smp-audience-slae-box">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Let Us Help You Outperform Your Competitors <span>and Catch Your Audience’s Attention</span></h2>
                        <p>Leverage Your Best Assets and Gain a Greater Competitive Edge</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    </div>
                </div>
            </div>
            <div className="smp-sales-visitors">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>We Turn Visitors Into Customers <span>and Customers Into Brand Advocates</span></h2>
                    </div>
                    <BrandAdvocates />

                </div>
            </div>
            <div className="home-page-video">
                <div className="container">
                    <div className="smp-video-content">
                        <p>Unlike other agencies that chase clicks or leads, we build integrated digital marketing campaigns powered by our technology — designed to consistently convert traffic into</p>
                        <h3>quality leads, sales, and profit.</h3>
                    </div>
                    <div className="home-vid-box">
                        <AboutSmpVideo />
                    </div>
                </div>
            </div>
            <div className="determine-sales-paoints">
                <div className="container">
                    <div className="sales-paoints-detailor">
                        <div className="row paoints-detailor">
                            <div className="col-md-5">
                                <div className="determine-sales-card">
                                    <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/performance-target-img-1.png" alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="determine-sales-paracard">
                                    <h3>Determine Your Objectives</h3>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="determine-sales-card">
                                    <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/performance-target-img-2-1.png" alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="determine-sales-paracard">
                                    <h3>Find the Right Tools</h3>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="determine-sales-card">
                                    <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/performance-target-img-3-1.png" alt="" className="w-100" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="determine-sales-paracard">
                                    <h3>Reach Your Goals</h3>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="smp-sale-ne-formula">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>How We Build Your Business’s <span>Growth Formula</span></h2>
                        <p>Set Smart, Realistic Goals and Deploy Effective Strategies</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                    </div>
                    <div className="smp-sale-nebrad">
                        <div className="row sale-nebrad">
                            <div className="col-md-4">
                                <div className="ne-formula-card">
                                    <FaBusinessTime />
                                    <h3>Brand and Business</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ne-formula-card">
                                    <FaBusinessTime />
                                    <h3>Content and Engagement</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ne-formula-card">
                                    <FaBusinessTime />
                                    <h3>Internal Team or Partners</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ne-formula-card">
                                    <FaBusinessTime />
                                    <h3>Technology and Software</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ne-formula-card">
                                    <FaBusinessTime />
                                    <h3>Lead Sources</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="ne-formula-card">
                                    <FaBusinessTime />
                                    <h3>Success Measurement</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frame-btn-box">
                        <Button text="Maximize Your Marketing Outcomes" link="./" target="_self" />
                    </div>

                </div>
            </div>
            <div className="smp-sales-care-value">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Safari Marketing Pro <span>Core Values</span></h2>
                        <p>Set Smart, Realistic Goals and Deploy Effective Strategies</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                    </div>
                    <div className="smp-corevalue-tree" style={{ backgroundImage: `url(${plant})`, }}>
                        <div className="smp-corevalue-para">
                            <div className="smp-corevalue-left-para">
                                <div class="left-side left-side-1">
                                    <div class="growth-content">
                                        <h6 class="title">Gratitude</h6>
                                        <p> We lead with an attitude of thankfulness and humility and find ways to express our gratitude to those around us every day. We embrace giving back, impacting the world for a greater good.</p>
                                    </div>
                                    <div class="circle-box left-box-1">G</div>
                                </div>
                                <div class="left-side left-side-2">
                                    <div class="growth-content">
                                        <h6 class="title">Ownership</h6>
                                        <p> We take personal responsibility for our actions and commit to responsible stewardship over company and client resources. We apologize when we make mistakes and work to make things right. We can do hard things.</p>
                                    </div>
                                    <div class="circle-box left-box-2">O</div>
                                </div>
                                <div class="left-side left-side-3">
                                    <div class="growth-content">
                                        <h6 class="title">Think Bigger</h6>
                                        <p> We strive for continuous improvement and believe that better never stops! We don’t take the easy way out. We embrace change, adapt and overcome.</p>
                                    </div>
                                    <div class="circle-box left-box-3">T</div>
                                </div>

                            </div>
                            <div className="smp-corevalue-right-para">
                                <div class="right-side right-side-1">
                                    <div class="circle-box right-box-1">R</div>
                                    <div class="growth-content">
                                        <h6 class="title">Respect</h6>
                                        <p>We operate with positive assumptions and give the benefit of the doubt, choosing to see the best in ourselves and others. We will respect others at all times and refrain from gossip or reacting with anger.</p>
                                    </div>

                                </div>
                                <div class="right-side right-side-2">
                                    <div class="circle-box right-box-2">W</div>
                                    <div class="growth-content">
                                        <h6 class="title">Work Ethic</h6>
                                        <p>We give our best effort and have high-performance expectations. We are organized, proactive and work with a sense of urgency. We emphasize a work-life balance where we work hard during business hours but prioritize our time off for our own well-being.</p>
                                    </div>

                                </div>
                                <div class="right-side right-side-3">
                                    <div class="circle-box right-box-3">H</div>
                                    <div class="growth-content">
                                        <h6 class="title">Honesty</h6>
                                        <p>We seek to build trust and mutual respect by acting with integrity and doing the right thing no matter how difficult.</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="misiion-pointer-box">
                        <img src={arrow} alt="" />
                        <h3>Mission</h3>
                        <h4>Relationships</h4>
                        <div className="icicic-box">
                            <FaCirclePlus />
                        </div>
                        <h4>Results</h4>
                    </div>

                </div>
            </div>
            <div className="why-smsp-sale-sbox">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>Why Choose <span>SMP</span></h2>
                        <p>Set Smart, Realistic Goals and Deploy Effective Strategies</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                    </div>

                    <div className="chhoseobp">
                        <div className="row nookoueyeg">
                            <div className="col-md-3">
                                <div className="vvklo">
                                    <img src={chhose1} alt="" />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="vvklo-praa">
                                    <h2>Agile and Knowledgeable Specialists</h2>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                                </div>
                            </div>
                        </div>
                        <div className="row nookoueyeg">
                            <div className="col-md-3">
                                <div className="vvklo">
                                    <img src={chhose2} alt="" />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="vvklo-praa">
                                    <h2>Robust Business Partnership</h2>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                                </div>
                            </div>
                        </div>
                        <div className="row nookoueyeg">
                            <div className="col-md-3">
                                <div className="vvklo">
                                    <img src={chhose3} alt="" />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="vvklo-praa">
                                    <h2>Proven Expertise</h2>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                                </div>
                            </div>
                        </div>
                        <div className="row nookoueyeg">
                            <div className="col-md-3">
                                <div className="vvklo">
                                    <img src={chhose4} alt="" />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="vvklo-praa">
                                    <h2>White-Glove Web Marketing Solutions</h2>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="smp-driven-real-se">
                <div className="container">
                    <div class="comon-heading-box">
                        <h2>How Our Growth Formula Has <span>Driven Real Results</span></h2>
                        <p>Set Smart, Realistic Goals and Deploy Effective Strategies</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
                    </div>
                    <div className="smp-driven-real-bboks">
                        <div className="row jvsaafdydvfs">
                            <div className="col-md-4">
                                <div className="smp-driven-rea-pra">
                                    <div className="piocooccco-lko">
                                        <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/growth-blog-img.png" alt="" className="w-100" />
                                    </div>
                                    <div className="ultiple-Location-para">
                                        <h2>Multiple-Location</h2>
                                        <div className="bbsass-hhool">
                                            <h4>+295.7%</h4>
                                            <h6>Top 5 Keyword Rankings</h6>
                                        </div>
                                        <div className="bbsass-hhool">
                                            <h4>+295.7%</h4>
                                            <h6>Top 5 Keyword Rankings</h6>
                                        </div>
                                        <div className="vsafssagasg_shgvas">
                                            <h3><ImQuotesLeft /> From The Client</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="smp-driven-rea-pra">
                                    <div className="piocooccco-lko">
                                        <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/growth-blog-imgs.png" alt="" className="w-100" />
                                    </div>
                                    <div className="ultiple-Location-para">
                                        <h2>Multiple-Location</h2>
                                        <div className="bbsass-hhool">
                                            <h4>+295.7%</h4>
                                            <h6>Top 5 Keyword Rankings</h6>
                                        </div>
                                        <div className="bbsass-hhool">
                                            <h4>+295.7%</h4>
                                            <h6>Top 5 Keyword Rankings</h6>
                                        </div>
                                        <div className="vsafssagasg_shgvas">
                                            <h3><ImQuotesLeft /> From The Client</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="smp-driven-rea-pra">
                                    <div className="piocooccco-lko">
                                        <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-bdf9387/thriveagency.com/files/growth-blog-image-3.png" alt="" className="w-100" />
                                    </div>
                                    <div className="ultiple-Location-para">
                                        <h2>Multiple-Location</h2>
                                        <div className="bbsass-hhool">
                                            <h4>+295.7%</h4>
                                            <h6>Top 5 Keyword Rankings</h6>
                                        </div>
                                        <div className="bbsass-hhool">
                                            <h4>+295.7%</h4>
                                            <h6>Top 5 Keyword Rankings</h6>
                                        </div>
                                        <div className="vsafssagasg_shgvas">
                                            <h3><ImQuotesLeft /> From The Client</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="smm-faq-sec">
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

        </section>
    )
}

export default SalesTraining;