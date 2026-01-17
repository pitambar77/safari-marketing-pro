import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import manorama from "../assets/images/footer-manorama-logo.png";
import star from "../assets/images/footer5-star-rating.png";
import clutchlogo from "../assets/images/clutch-logo.svg";
import partner1 from "../assets/images/new-part-1.png";
import partner2 from "../assets/images/new-part-2.png";
import partner3 from "../assets/images/new-part-3.png";
import partner4 from "../assets/images/new-part-4.png";

const Footer = () => {
  return (
    <div className="smp-footer-parent">
    <div className="smp-footer-sec">
        <div className="container">
            <div className="row smp-footer">
                <div className="col-md-4">
                    <div className="smp-footer-card">
                        <h4>Useful Links</h4>
                        <ul className="smp-footer-list">
                            <li><Link to="#">Website Designing</Link></li>
                            <li><Link to="#">Organic Marketing</Link></li>
                            <li><Link to="#">Google Advertising</Link></li>
                            <li><Link to="#">Content Marketing</Link></li>
                            <li><Link to="#">Social Media Marketing</Link></li>
                             <li><Link to="#">Pricing</Link></li>
                            <li><Link to="#">Ebooks</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="smp-footer-card">
                        <h4>Contacts</h4>
                        <div className="contact-detail-cont">
                        <h5>Safari Marketing Pro</h5>
                        <p>Plot No- 26.1996/2231, Arundhati Resident, B2, Patrapada, 751019</p>
                        </div>

                        <div className="contact-detail-cont">
                        <h5>Call</h5>
                        <Link to="#">+91-6371-223-581</Link>
                        </div>

                        <div className="contact-detail-cont">
                        <h5>Email</h5>
                        <Link to="#">sales@manoramaseoservice.com</Link>
                        </div>

                        <div className="contact-detail-cont">
                        <h5>Love us as we love you!</h5>
                        <ul className="footer-social">
                            <li><Link to="#"><FaFacebookF /></Link></li>
                            <li><Link to="#"><FaInstagram /></Link></li>
                            <li><Link to="#"><IoLogoYoutube /></Link></li>
                        </ul>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="smp-footer-card">
                        <h4>Reviews From One Of Most Trusted Partners</h4>
                        <div className="footer-review-box">
                            <div className="inner-foo-review">
                                <div className="footer-clut-bord">
                                <div className="footer-headiew">
                                    <img src={manorama} alt="" />
                                    <Link to="#">Manorama Web Solutions Private Limited Reviews</Link>
                                </div>
                                <div className="footer-rating-box">
                                    <h3>4.9</h3>
                                    <div className="footer-rating-star">
                                        <img src={star} alt="" />
                                        <Link to="#">26 reviews</Link>
                                    </div>
                                </div>
                                <div className="footer-rating-point">
                                    <div className="footer-rat-point">                                      
                                        <div class="widget_rating__info">
                                            <a href="#">
                                            <p class="rating__info-name">Scheduling</p>
                                            <p class="rating__info-rating">4.9</p>
                                             </a>
                                        </div>
                                        <div class="widget_rating__info">
                                            <a href="#">
                                            <p class="rating__info-name">Quality</p>
                                            <p class="rating__info-rating">4.9</p>
                                             </a>
                                        </div>
                                        <div class="widget_rating__info">
                                            <a href="#">
                                            <p class="rating__info-name">Cost</p>
                                            <p class="rating__info-rating">4.8</p>
                                             </a>
                                        </div>
                                        <div class="widget_rating__info">
                                            <a href="#">
                                            <p class="rating__info-name">Would Refer</p>
                                            <p class="rating__info-rating">4.9</p>
                                             </a>
                                        </div>
                                                                     
                                    </div>
                                </div>
                                 <div className="clutch-btn-box">
                                            <a href="">Powered by <img src={clutchlogo} alt="" /></a>
                                        </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className="smp-footer-copwrite">
        <div className="container">
            <div className="row smp-footer-cop">
                <div className="col-md-5">
                    <div className="smp-footer-cop-box">
                        <ul>
                            <li>© 2026 Safari Marketing Pro</li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="smp-footer-partner">
                        <ul>
                            <li><img src={partner1} alt="" className="w-100"/></li>
                            <li><img src={partner2} alt="" className="w-100" /></li>
                            <li><img src={partner3} alt="" className="w-100" /></li>
                            <li><img src={partner4} alt="" className="w-100" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer