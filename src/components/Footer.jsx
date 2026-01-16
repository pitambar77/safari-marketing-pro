import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import manorama from "../assets/images/footer-manorama-logo.png";
import star from "../assets/images/footer5-star-rating.png";

const Footer = () => {
  return (
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
                            <li><link to="#"><FaFacebookF /></link></li>
                            <li><link to="#"><FaInstagram /></link></li>
                            <li><link to="#"><IoLogoYoutube /></link></li>
                        </ul>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="smp-footer-card">
                        <h4>Reviews From One Of Most Trusted Partners</h4>
                        <div className="footer-review-box">
                            <div className="inner-foo-review">
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer