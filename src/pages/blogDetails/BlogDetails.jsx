import React from 'react'
import Bgvector from "../../assets/images/bg-vector-aboutus.svg";
import Button from "../../components/Button";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import AddBlog from "../../pages/googleAdd/AddBlog";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";

const BlogDetails = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const offset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    };


    return (
        <section className="blog-details-page">
            <div className="blog-detail-hero">
                <div className="container">
                    <div className="blog-content-para">
                        <h1>5 SEO Fixes to Get Your Clinic Found on Google</h1>
                        <ul className="blog-posing-date">
                            <li className="categories-blog">SEO</li>
                            <li>January 30, 2026</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="smp-about-brad" style={{ backgroundImage: `url(${Bgvector})` }}>
                <div className="container">
                    <div className="smp-blog-brad-pic">
                        <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/08/5-SEO-Fixes-for-Clinics-to-Rank-on-Google.png.webp" alt="" className="w-100" />
                    </div>
                </div>
            </div>
            <div className="blog-details-info">
                <div className="container">
                    <div className="row blog-details-tuses">
                        <div className="col-md-8">
                            <div className="blog-details-left">
                                <div className="blog-details-info-meta" id="blogdes1">
                                    <h2>Why your clinic is not ranking on Google</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <h3>1. Your website is not optimised for the right keywords</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, <a href="#">accompanied by English versions</a> from the 1914 translation by H. Rackham.</p>
                                    <ul className="blog-page-list">
                                        <li>Key information like Google reviews, address, and opening hours</li>
                                        <li>Your content doesn’t answer the real questions your patients are asking.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Your local SEO is poor or inconsistent.</li>
                                    </ul>
                                </div>
                                <div className="blog-details-info-meta" id="blogdes2">
                                    <h2>Why your clinic is not ranking on Google</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <h3>1. Your website is not optimised for the right keywords</h3>
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/08/Google-Maps-Pack-1.png" alt="" className="w-100" />
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, <a href="#">accompanied by English versions</a> from the 1914 translation by H. Rackham.</p>
                                    <ul className="blog-page-list">
                                        <li>Key information like Google reviews, address, and opening hours</li>
                                        <li>Your content doesn’t answer the real questions your patients are asking.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Your local SEO is poor or inconsistent.</li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <Button text="Read Written SMP Reviews" link="./" target="_self" />
                                </div>
                                <div className="blog-details-info-meta" id="blogdes3">
                                    <h2>Why your clinic is not ranking on Google</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="blog-detail-info-table">
                                        <Table striped hover>
                                            <thead>
                                                <tr>
                                                    <th>What They Do Differently</th>
                                                    <th>Why It Works</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Focus on transactional and navigational keywords</td>
                                                    <td>Attracts patients who are ready to enquire or book — not just casual browsers</td>
                                                </tr>
                                                <tr>
                                                    <td>Build E-E-A-T into every page (Experience, Expertise, Authoritativeness, Trustworthiness)</td>
                                                    <td>Boosts trust signals for both Google and patients — especially for health-related content</td>
                                                </tr>
                                                <tr>
                                                    <td>Prioritise local SEO for clinics and actively manage their Google Business Profile</td>
                                                    <td>Generates up to 35% of leads directly from Maps and local search</td>
                                                </tr>
                                                <tr>
                                                    <td>Monitor and refine their SEO strategy regularly</td>
                                                    <td>Keeps them ahead of competitors and search algorithm changes</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </div>
                                    <h3>1. Your website is not optimised for the right keywords</h3>
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/08/How-to-Check-Your-Google-Rankings.png.webp" alt="" className="w-100" />
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, <a href="#">accompanied by English versions</a> from the 1914 translation by H. Rackham.</p>
                                    <ul className="blog-page-list">
                                        <li>Key information like Google reviews, address, and opening hours</li>
                                        <li>Your content doesn’t answer the real questions your patients are asking.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Your local SEO is poor or inconsistent.</li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <Button text="Read Written SMP Reviews" link="./" target="_self" />
                                </div>
                                <div className="blog-details-info-meta" id="blogdes4">
                                    <h2>Why your clinic is not ranking on Google</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <h3>1. Your website is not optimised for the right keywords</h3>
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/08/Google-Maps-Pack-1.png" alt="" className="w-100" />
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, <a href="#">accompanied by English versions</a> from the 1914 translation by H. Rackham.</p>
                                    <ul className="blog-page-list">
                                        <li>Key information like Google reviews, address, and opening hours</li>
                                        <li>Your content doesn’t answer the real questions your patients are asking.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Your local SEO is poor or inconsistent.</li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                </div>
                                <div className="blog-details-info-meta" id="blogdes5">
                                    <h2>Why your clinic is not ranking on Google</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="blog-detail-info-table">
                                        <Table striped hover>
                                            <thead>
                                                <tr>
                                                    <th>What They Do Differently</th>
                                                    <th>Why It Works</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Focus on transactional and navigational keywords</td>
                                                    <td>Attracts patients who are ready to enquire or book — not just casual browsers</td>
                                                </tr>
                                                <tr>
                                                    <td>Build E-E-A-T into every page (Experience, Expertise, Authoritativeness, Trustworthiness)</td>
                                                    <td>Boosts trust signals for both Google and patients — especially for health-related content</td>
                                                </tr>
                                                <tr>
                                                    <td>Prioritise local SEO for clinics and actively manage their Google Business Profile</td>
                                                    <td>Generates up to 35% of leads directly from Maps and local search</td>
                                                </tr>
                                                <tr>
                                                    <td>Monitor and refine their SEO strategy regularly</td>
                                                    <td>Keeps them ahead of competitors and search algorithm changes</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </div>
                                    <h3>1. Your website is not optimised for the right keywords</h3>
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/08/How-to-Check-Your-Google-Rankings.png.webp" alt="" className="w-100" />
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, <a href="#">accompanied by English versions</a> from the 1914 translation by H. Rackham.</p>
                                    <ul className="blog-page-list">
                                        <li>Key information like Google reviews, address, and opening hours</li>
                                        <li>Your content doesn’t answer the real questions your patients are asking.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Your local SEO is poor or inconsistent.</li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <Button text="Read Written SMP Reviews" link="./" target="_self" />
                                </div>
                                <div className="blog-details-info-meta" id="blogdes6">
                                    <h2>Why your clinic is not ranking on Google</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <div className="blog-detail-info-table">
                                        <Table striped hover>
                                            <thead>
                                                <tr>
                                                    <th>What They Do Differently</th>
                                                    <th>Why It Works</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Focus on transactional and navigational keywords</td>
                                                    <td>Attracts patients who are ready to enquire or book — not just casual browsers</td>
                                                </tr>
                                                <tr>
                                                    <td>Build E-E-A-T into every page (Experience, Expertise, Authoritativeness, Trustworthiness)</td>
                                                    <td>Boosts trust signals for both Google and patients — especially for health-related content</td>
                                                </tr>
                                                <tr>
                                                    <td>Prioritise local SEO for clinics and actively manage their Google Business Profile</td>
                                                    <td>Generates up to 35% of leads directly from Maps and local search</td>
                                                </tr>
                                                <tr>
                                                    <td>Monitor and refine their SEO strategy regularly</td>
                                                    <td>Keeps them ahead of competitors and search algorithm changes</td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </div>
                                    <h3>1. Your website is not optimised for the right keywords</h3>
                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/08/How-to-Check-Your-Google-Rankings.png.webp" alt="" className="w-100" />
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, <a href="#">accompanied by English versions</a> from the 1914 translation by H. Rackham.</p>
                                    <ul className="blog-page-list">
                                        <li>Key information like Google reviews, address, and opening hours</li>
                                        <li>Your content doesn’t answer the real questions your patients are asking.</li>
                                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                                        <li>Your local SEO is poor or inconsistent.</li>
                                    </ul>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    <Button text="Read Written SMP Reviews" link="./" target="_self" />
                                </div>
                                <div className="auther-blog-box">
                                    <div className="blog-social">
                                        <h4>Share this article:</h4>
                                        <ul>
                                            <li className="blog-scocial-face"><a href="#"><FaFacebookF />Facebook</a></li>
                                            <li className="blog-scocial-xtwiter"><a href="#"><RiTwitterXFill />Twitter</a></li>
                                            <li className="blog-scocial-linked"><a href="#"><FaLinkedinIn />LinkedIn</a></li>
                                            <li className="blog-scocial-youtube"><a href="#"><RiYoutubeFill />Youtube</a></li>
                                        </ul>
                                    </div>
                                    <div className="blog-auther-man">
                                        <div className="row blog-auther-bal">
                                            <div className="col-md-2">
                                                <div className="auter-main-profile">
                                                    <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/hod-roychen-300x300.webp" alt="" className="w-100" />
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <div className="auter-description-profile">
                                                    <h2>Roy Chen</h2>
                                                    <h4>Author</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog-details-right">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Inside this article</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="blog-detal-acco-box">
                                                <ul className="blog-detal-jump-list">
                                                    <li onClick={() => scrollToSection("blogdes1")}>1.Why your clinic is not ranking</li>
                                                    <li onClick={() => scrollToSection("blogdes2")}>2.Why your clinic tablink2</li>
                                                    <li onClick={() => scrollToSection("blogdes3")}>3.What is on-page SEO?</li>
                                                    <li onClick={() => scrollToSection("blogdes4")}>4.Why your clinic is not ranking</li>
                                                    <li onClick={() => scrollToSection("blogdes5")}>5.Why your clinic tablink</li>
                                                    <li onClick={() => scrollToSection("blogdes6")}>6.What is on-page SEO?</li>
                                                    <li>7.Why your clinic is not ranking</li>
                                                    <li>8.Why your clinic tablink2</li>
                                                    <li>9.What is on-page SEO?</li>
                                                    <li>10.Why your clinic is not ranking</li>
                                                </ul>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="blog-right-btn">
                                    <Button text="Get Proposal" link="./" target="_self" />
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

export default BlogDetails;