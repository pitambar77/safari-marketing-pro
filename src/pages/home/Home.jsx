import React from 'react'
import Button from "../../components/Button";
import SmpHero from "../../assets/images/smphero.svg";
import AboutSmpVideo from '../aboutUs/AboutSmpVideo';
import Accordion from "react-bootstrap/Accordion";
import AddBlog from "../../pages/googleAdd/AddBlog";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import FunnelCompare from './FunnelCompare';
import FunnelSection from './FunnelSection';
import { FaFilterCircleDollar } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import TechnologyTab from './technologyTab';
import Smmpic1 from "../../assets/images/smm-service1.webp";
import Smmpic2 from "../../assets/images/smm-service2.webp";

const Home = () => {
  return (
    <div className="smp-home-page">

      <div className="google-add-hero">
        <div className="container">
          <div className="row add_hero">
            <div className="col-md-6">
              <div className="add-hero-ban-cont">
                <h3>Safari Marketing Pro</h3>
                <h1>Data-Driven Digital Marketing That Generates Revenue,<span>Not Just Leads.</span></h1>
                <p>Safari Marketing Pro of Digital is Singapore’s Premier Google Ads agency focused on performance-based strategies that increase conversions, leads, and revenue — not just clicks and impressions.</p>
                <div className="add-hero-btn-box">
                  <Button text="Get Free Proposal" link="./" target="_self" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="add-hero-brand">
                <img src={SmpHero} alt="Safari Marketing Pro" tittle="Safari Marketing Pro" className="w-100" />
              </div>
            </div>
          </div>
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
      <div className="main-tustaward-smp">
        <div className="container">
          <div className="row main-tustaw">
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/PremierBadge.png" alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/Facebook-Meta-Background-PNG.png" alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/statista.jpg.webp" alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/the-straits-times-statista.jpg.webp" alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/bea_sea_badge_720x720.png.webp" alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/PPA23_winner_badge_400x400_SEA_lead_generation_2x-1.webp" alt="" className="w-100" />
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
                <div className="smp-arwsa-card">
                  <img src="https://images.ctfassets.net/02qb7dc7cg75/3vBbBrzecNWyUJmZ4BFKof/53515a981e8bdd4c4ee69216e76176d3/PMAfinalists_effect_portrait.png" alt="" className="w-100" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="smp-arwsa-card">
                  <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/hero-award-1536x803.webp" alt="" className="w-100" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="smp-arwsa-card">
                  <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/HOD-x-Google-46-1536x1152.jpg.webp" alt="" className="w-100" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="smp-digtal-box">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>We don’t just "do digital marketing". <br /><span>We drive revenue.</span></h2>
          </div>
          <div className="smp-not-digi">
            <div className="row smp-not-box">
              <div className="col-md-6">
                <div className="smp-not-digi-para">
                  <p>Most agencies “do SEO” or “run Google Ads.” But in today’s competitive landscape, these digital marketing tactics alone won’t help you succeed. You need a digital marketing partner that builds a revenue-generating system.</p>
                  <p>That’s where we come in. By combining award-winning digital marketing strategies, technology, and consultancy, we’ve delivered powerful and tangible results since 2015.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="smp-not-digi-count">
                  <div className="digital-counter-smp">
                    <h3>$100M+</h3>
                    <p>That’s where we come in. By combining</p>
                  </div>
                  <div className="digital-counter-smp">
                    <h3>120,000+</h3>
                    <p>That’s where we come in. By combining</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="digital-revenue-tab">

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="digital-goal-tab-smp">
                <Col sm={12}>
                  <Nav className="smsp-digi-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Top Google Premier Partner</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">98% Client Retention Rate</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="three">5 Star Reviews</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">Transparent ROI Dashboards</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="digita-smp-rpara">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="digita-smp-rrop">
                              <p>As a Top Google Premier Partner with over 100 in-house specialists across performance marketing, SEO, design, content, and data analytics, our award-winning team brings enterprise-level firepower to mid-market brands.</p>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="digita-smp-pico">
                              <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/heroes01.jpg.webp" alt="" className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="digita-smp-rpara">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="digita-smp-rrop">
                              <p>As a Top Google Premier Partner with over 100 in-house specialists across performance marketing, SEO, design, content, and data analytics, our award-winning team brings enterprise-level firepower to mid-market brands.</p>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="digita-smp-pico">
                              <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/HOD-x-Google-31.jpg.webp" alt="" className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="three">
                      <div className="digita-smp-rpara">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="digita-smp-rrop">
                              <p>As a Top Google Premier Partner with over 100 in-house specialists across performance marketing, SEO, design, content, and data analytics, our award-winning team brings enterprise-level firepower to mid-market brands.</p>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="digita-smp-pico">
                              <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/heroes01.jpg.webp" alt="" className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <div className="digita-smp-rpara">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="digita-smp-rrop">
                              <p>As a Top Google Premier Partner with over 100 in-house specialists across performance marketing, SEO, design, content, and data analytics, our award-winning team brings enterprise-level firepower to mid-market brands.</p>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="digita-smp-pico">
                              <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/HOD-x-Google-25.jpg.webp" alt="" className="w-100" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

          </div>

        </div>
      </div>
      <div className="digita-revenue-bxo">
        <div className="container">
          <div className="comon-heading-box">
            <h2>Move From Marketing that Reports Clicks to <span>Marketing that Reports Revenue</span></h2>
            <p>Traditional marketing optimizes for channel metrics. Revenue marketing optimizes for business impact. Connected revenue marketing through RevenueCloudFX leads to 1.8X faster lead growth than industry average.</p>
          </div>
          <div className="smp-dif-revenue-slider">
            <FunnelCompare />
          </div>

        </div>
      </div>
      <div className="smp-leads-revenuse-box">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>A Full Suite Of Integrated Digital Marketing Services To Drive  <span>High Quality Leads & Revenue</span></h2>
            <p>Need better results from your digital marketing? SMP of Digital offers a wide range of digital marketing services that work together to attract, delight, and convert leads. Combined with our unique technology suite, we help clients get breakthrough results they’ve never achieved before.</p>
          </div>
          <FunnelSection />


        </div>
      </div>
      <div className="why-you-work-with-us">
        <div className="container">
          <div className="comon-heading-box">
            <h2>Why work with <span>Heroes of Digital?</span></h2>
          </div>
          <div className="why-you-work-with-child">
            <div className="row work-with-child">
              <div className="col-md-4">
                <div className="why-you-work-card">
                  <div className="why-you-work-ico">
                    <FaFilterCircleDollar />
                  </div>
                  <h3>Revenue-Driven Strategy</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="why-you-work-card">
                  <div className="why-you-work-ico">
                    <FaReact />
                  </div>
                  <h3>Holistic Digital Marketing</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="why-you-work-card">
                  <div className="why-you-work-ico">
                    <FaChalkboardTeacher />
                  </div>
                  <h3>Technology-Powered </h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="why-you-work-card">
                  <div className="why-you-work-ico">
                    <FaUserAstronaut />
                  </div>
                  <h3>Industry Specialists</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="why-you-work-card">
                  <div className="why-you-work-ico">
                    <MdBookmarkAdd />
                  </div>
                  <h3>Performance First</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="why-you-work-card">
                  <div className="why-you-work-ico">
                    <FaUserAstronaut />
                  </div>
                  <h3>Performance First</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="meet-smp-techno">
        <div className="container">
          <div className="comon-heading-box white-main-hed">
            <h2>Our technology for <span>data-driven, revenue-generating</span> digital marketing</h2>
          </div>
          <div className="meet-techo-sop">
            <div className="row">
              <div className="col-md-3">
                <div className="digital-counter-smp">
                  <h3>100%+</h3>
                  <p>Data points analysed to connect campaigns directly to revenue</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="digital-counter-smp">
                  <h3>$130M+</h3>
                  <p>Data points analysed to connect campaigns directly to revenue</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="digital-counter-smp">
                  <h3>20%+</h3>
                  <p>Data points analysed to connect campaigns directly to revenue</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="digital-counter-smp">
                  <h3>300M+</h3>
                  <p>Data points analysed to connect campaigns directly to revenue</p>
                </div>
              </div>

            </div>
          </div>
          <TechnologyTab />


        </div>
      </div>
      <div className="clients-satisfied-smp">
        <div className="container">
          <div className="comon-heading-box">
            <h2>Generating high quality leads and revenue for <span>800+ satisfied clients</span> since 2010</h2>
            <p>With With $130M+ in trackable revenue generated for our clients since 2010, Heroes of Digital is more than a digital marketing agency. We’re your growth partner—equipped with the strategies, industry expertise, and technology to turn marketing into a profit center for your business. </p>
          </div>
          <div className="clients-satisfied">
            <div className="row">
              <div className="col-md-8">
                <div className="clients-satisfied-left">

                  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="clients-satisfied-site-list">
                      <Col sm={12}>
                        <Nav variant="pills">
                          <Nav.Item>
                            <Nav.Link eventKey="first">Healthcare</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="second">Medical Aesthetics</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="three">Home Improvement</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="four">Med Spa </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="five">Legal</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="six">B2B</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="seven">Others</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </Col>
                      <Col sm={12}>
                        <Tab.Content>
                          <Tab.Pane eventKey="first">
                            <div className="clients-satisfied-brands">
                              <ul>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Capital-Heart-Centre-CHC.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Atlas-Podiatry.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/International-Centre-for-Cardiothoracic-Surgery-ICTS.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Oxford-Ortho.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/ENT-Surgeons-Medical-Centre-2.jpg.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/chongheelim.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Henry-Chan-Ortho.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Skin-lab-logo.png.webp" alt="" className="w-100"/></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <div className="clients-satisfied-brands">
                              <ul>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/chongheelim.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Henry-Chan-Ortho.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Skin-lab-logo.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Capital-Heart-Centre-CHC.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Atlas-Podiatry.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/International-Centre-for-Cardiothoracic-Surgery-ICTS.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Oxford-Ortho.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/ENT-Surgeons-Medical-Centre-2.jpg.webp" alt="" className="w-100"/></li>                          
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="three">
                            <div className="clients-satisfied-brands">
                              <ul>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Capital-Heart-Centre-CHC.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Atlas-Podiatry.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/International-Centre-for-Cardiothoracic-Surgery-ICTS.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Oxford-Ortho.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/ENT-Surgeons-Medical-Centre-2.jpg.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/chongheelim.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Henry-Chan-Ortho.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Skin-lab-logo.png.webp" alt="" className="w-100"/></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="four">
                            <div className="clients-satisfied-brands">
                              <ul>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/chongheelim.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Henry-Chan-Ortho.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Skin-lab-logo.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Capital-Heart-Centre-CHC.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Atlas-Podiatry.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/International-Centre-for-Cardiothoracic-Surgery-ICTS.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Oxford-Ortho.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/ENT-Surgeons-Medical-Centre-2.jpg.webp" alt="" className="w-100"/></li>                          
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="five">
                            <div className="clients-satisfied-brands">
                              <ul>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Capital-Heart-Centre-CHC.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Atlas-Podiatry.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/International-Centre-for-Cardiothoracic-Surgery-ICTS.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Oxford-Ortho.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/ENT-Surgeons-Medical-Centre-2.jpg.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/chongheelim.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Henry-Chan-Ortho.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Skin-lab-logo.png.webp" alt="" className="w-100"/></li>
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="six">
                            <div className="clients-satisfied-brands">
                              <ul>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/chongheelim.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Henry-Chan-Ortho.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Skin-lab-logo.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Capital-Heart-Centre-CHC.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Atlas-Podiatry.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/International-Centre-for-Cardiothoracic-Surgery-ICTS.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Oxford-Ortho.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/ENT-Surgeons-Medical-Centre-2.jpg.webp" alt="" className="w-100"/></li>                          
                              </ul>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="seven">
                            <div className="clients-satisfied-brands">
                              <ul>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Capital-Heart-Centre-CHC.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Atlas-Podiatry.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/International-Centre-for-Cardiothoracic-Surgery-ICTS.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/Oxford-Ortho.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/ENT-Surgeons-Medical-Centre-2.jpg.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/chongheelim.png.webp" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/06/Henry-Chan-Ortho.png" alt="" className="w-100"/></li>
                                <li><img src="https://www.heroesofdigital.com/wp-content/uploads/2025/04/Skin-lab-logo.png.webp" alt="" className="w-100"/></li>
                              </ul>
                            </div>
                          </Tab.Pane>

                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>

                </div>
              </div>
              <div className="col-md-4">
                <div className="clients-satisfied-cta">
                  <h2>Achieve your business goals with HOD</h2>
                  <Button text="Get A Free Proposal" link="./" target="_self" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="smm-services-sec">
            <div className="container">
                <div className="comon-heading-box white-main-hed">
                    <h2>What Clients Say About Our <br /><span>Meta Ads Agency</span> Services</h2>                 
                </div>
                <div className="smm-main-serv">
                    <div className="row smm-ser-box">
                        <div className="col-md-6">
                            <div className="smm-service-card">
                                <div className="smm-service-card-pic">
                                     <img src={Smmpic1} alt="" className='w-100'/>
                                </div>
                                <div className="smm-service-card-para">
                                <h3>Mega Furniture: Turning Traffic Into Sales</h3>
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
                                <h3>Chilli Manis: Catering That Clicks</h3>
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

      <div className="add_faqs-sec smphome-faqs">
        <div className="container">
          <div className="comon-heading-box">
            <h2>What makes us <span>your growth partner,</span>  and not just another digital marketing vendor?</h2>
            <p>The difference is in the approach we take – an effective methodology that has been tried and tested.</p>
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

    </div>
  )
}

export default Home;