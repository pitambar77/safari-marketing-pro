import React from 'react'
import Crmpic from "../../assets/images/smp-crm.png";
import Smpcrm1 from "../../assets/images/smp-crm1.png";
import Smpcrm2 from "../../assets/images/smp-crm2.webp";
import Smpcrm3 from "../../assets/images/smp-crm3.gif";
import Smpcrm4 from "../../assets/images/smp-crm4.gif";
import Smpcrm5 from "../../assets/images/smp-crm5.png";
import Smpcrm6 from "../../assets/images/smp-crm6.png";
import Smpcrm7 from "../../assets/images/smp-crm7.png";
import Smpcrm8 from "../../assets/images/smp-crm8.jpg";

import Smpcrown1 from "../../assets/images/smp-crown1.png";
import Smpcrown2 from "../../assets/images/smp-crown2.png";
import Smpcrown3 from "../../assets/images/smp-crown3.png";
import Smpcrown4 from "../../assets/images/smp-crown4.png";
import Smpcrown5 from "../../assets/images/smp-crown5.svg";
import Smpcrown6 from "../../assets/images/smp-crown6.png";
import Smpcrown7 from "../../assets/images/smp-crown7.png";

import CrmVideo from './CrmVideo';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdSms } from "react-icons/md";
import { RiColorFilterAiLine } from "react-icons/ri";
import { FcSalesPerformance } from "react-icons/fc";
import { VscGraph } from "react-icons/vsc";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";

const Crm = () => {
  return (
    <div className="smp-crm-page">
        <div className="crm-hero">
            <div className="container">
                <div className="crm-banner-cont">
                    <h1><span>Generate & convert more leads </span>with seamless marketing automation</h1>
                    <p>CRM Marketing Automation is a multichannel software solution with features designed to ease the marketing process and generate sales-ready leads.</p>                   
                    <CrmVideo />                   
                </div>
                <div className="crm-pick">
                    <img src={Crmpic} alt="SMP CRM" className="w-100"/>
                    <ul className="crm-bann-tiitl">
                        <li>Generate</li>
                        <li>Nurture</li>
                        <li>Convert</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="sales-pipelines">
            <div className="container">
                <div className="comon-heading-box">
                    <h2>Keep your sales pipelines filled <span>using strategic automation</span> on Google</h2>                          
                </div>
                <div className="pipeline-box">
                    <div className="row pipline-step">
                        <div className="col-md-7">
                            <div className="crm-pipeline-set-box stepone">
                                <div className="crm-pipleline-con-step">
                                    <button>Stage 1</button>
                                    <h3>Attract and convert prospects</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                    <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                </div>
                                <div className="crm-pipleline-pico-step">
                                    <img src={Smpcrm1} alt="" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="crm-pipeline-set-box steptwo">
                                <div className="crm-pipleline-con-step">
                                    <button>Stage 2</button>
                                    <h3>Nurture with multichannel automation</h3>
                                    <p>Offer the most relevant, and personalized content right where your leads are.</p>
                                    <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                </div>
                                <div className="crm-pipleline-pico-step">
                                    <img src={Smpcrm2} alt="" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="crm-pipeline-set-box stethree">
                                <div className="crm-pipleline-con-step">
                                    <button>Stage 3</button>
                                    <h3>Score leads based on intent</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                    <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                </div>
                                <div className="crm-pipleline-pico-step">
                                    <img src={Smpcrm3} alt="" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="crm-pipeline-set-box stepfour">
                                <div className="crm-pipleline-con-step">
                                    <button>Stage 4</button>
                                    <h3>Assign only sales-ready leads to the sales team</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                    <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                </div>
                                <div className="crm-pipleline-pico-step">
                                    <img src={Smpcrm4} alt="" className="w-100"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="crm-pipeline-set-box stepfive">
                                <div className="row">
                                    <div className="col-md-6">
                                         <div className="crm-pipleline-con-step">
                                            <button>Stage 5</button>
                                            <h3>Identify which campaigns bring maximum ROI</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                            <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                             <div className="crm-pipleline-pico-step">
                                                <img src={Smpcrm5} alt="" className="w-100"/>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="btob-automation-sec">
                    <div className="container">
                        <div className="comon-heading-box">
                            <h2>Grow your business with <br /> <span>marketing automation</span></h2>
                        </div>
                        <div className="web-effective">
                            <div className="effective-rors">
                               
                                    <div className="web-effective-para">
                                        <h2>Generate leads with strategic and personalized campaigns</h2>
                                        <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                                    </div>                             
                                    <div className="web-effective-pic">
                                        <img src={Smpcrm6} alt="Designs that trigger emotions" className="w-100"/>
                                    </div>  

                                    <div className="web-effective-pic">
                                        <img src={Smpcrm7} alt="Persuasive content" className="w-100"/>
                                    </div>                            
                                    <div className="web-effective-para">
                                        <h2>Nurture leads using multichannel marketing automation</h2>
                                        <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                                    </div> 

                                    <div className="web-effective-para">
                                        <h2>Convert leads effortlessly to increase ROI</h2>
                                        <p>Your website needs to be designed with your customers and your goals in mind. We excel at using design to trigger the right emotions to convert traffic into real customers. With us, your website becomes a lead-generating machine – a powerful part of your digital marketing strategy.</p>
                                    </div>                              
                                    <div className="web-effective-pic">
                                        <img src={Smpcrm8} alt="Convert more visitors into leads" className="w-100"/>
                                    </div>   
                            </div>
                        </div>
        
                    </div>
        </div>
        <div className="zoho-marketing-box">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>Why Zoho Marketing Automation?</h2>
                </div>
                <div className="zoho-marketing-inner">
                    <div className="row zoho-roas">
                        <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                    <SlCalender />
                                </div>
                                <h3>Complete marketing planner</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                    <MdSms />
                                </div>
                                <h3>Personalized experience</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                         <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                    <RiColorFilterAiLine />
                                </div>
                                <h3>Ecommerce solution</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                         <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                   <FcSalesPerformance />
                                </div>
                                <h3>Sales aligned with marketing</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                   <VscGraph />
                                </div>
                                <h3>GDPR-compliant</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="zohomarketing-card">
                                <div className="zoho-why-icon">
                                   <FaPersonWalkingArrowLoopLeft />
                                </div>
                                <h3>Closed loop reporting</h3>
                                <p>Organize all your marketing efforts using a single calendar. Get more done with efficient planning and identify campaigns that perform with better monitoring features.</p>
                                <a href="#">Learn more <IoIosArrowDroprightCircle /></a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div className="smp-crowned">
            <div className="container">
                 <div className="comon-heading-box">
                    <h2>We’re crowned as Leaders globally</h2>
                    <div className="smp-croud-box">
                        <ul className="smp-croud-list">
                            <li><img src={Smpcrown1} alt="" /></li>
                            <li><img src={Smpcrown2} alt="" /></li>
                            <li><img src={Smpcrown3} alt="" /></li>
                            <li><img src={Smpcrown4} alt="" /></li>                           
                            <li><img src={Smpcrown6} alt="" /></li>
                            <li><img src={Smpcrown5} alt="" /></li>
                            <li><img src={Smpcrown7} alt="" /></li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Crm;