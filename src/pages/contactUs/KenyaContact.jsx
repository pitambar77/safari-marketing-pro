import React, { useState } from "react";
import "./TanzaniaContact.css";
import { ImLocation2 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

const KenyaContact = () => {
    const [formData, setFormData] = useState({
        help: [],
        industry: "",
        goals: [],
        company: "",
        website: "",
        budget: "",
        email: "",
        phone: "",
        comments: "",
    });

    const handleCheckbox = (e, field) => {
        const value = e.target.value;
        setFormData((prev) => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter((v) => v !== value)
                : [...prev[field], value],
        }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Form submitted successfully!");
    };

    return (
        <div className="contact-us-page">
            <div className="tanzania-contact">
                <div className="contact-wrapper">
                    <h1>
                        We're the agency you don't want working for your competitors.
                    </h1>

                    <p className="sub-text">
                        Contact us today and find out how we can help you grow your business.
                    </p>

                    <form onSubmit={handleSubmit}>
                        {/* HELP OPTIONS */}
                        <div className="form-group">
                            <h4>Share with us how we can help you!</h4>
                            {[
                                "Run Google marketing campaigns",
                                "Increase organic traffic to my website (SEO)",
                                "I need a website",
                                "I need help",
                                "Not sure, I'd like to speak to someone",
                            ].map((item, i) => (
                                <label key={i}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        onChange={(e) => handleCheckbox(e, "help")}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>

                        {/* INDUSTRY */}
                        <div className="form-group">
                            <h4>Great! What industry are you in?</h4>
                            <div className="tag-list">
                                {[
                                    "Healthcare",
                                    "Aesthetic",
                                    "Home",
                                    "Education",
                                    "Retail",
                                    "Finance",
                                    "IT",
                                    "Others",
                                ].map((item, i) => (
                                    <label key={i} className="tag-radio">
                                        <input
                                            type="radio"
                                            name="industry"
                                            value={item}
                                            onChange={handleChange}
                                        />
                                        <span>{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* GOALS */}
                        <div className="form-group">
                            <h4>What are your goals?</h4>
                            {[
                                "Generate more leads",
                                "Build brand awareness",
                                "Establish thought leadership",
                                "Lower cost-per-acquisition",
                                "Increase brand engagement",
                                "All of the above",
                            ].map((item, i) => (
                                <label key={i}>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        onChange={(e) => handleCheckbox(e, "goals")}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>

                        {/* INPUTS */}
                        <div className="form-group userdetails-box">
                            <label>What's your company's name? *</label>
                            <input
                                name="company"
                                onChange={handleChange}
                                placeholder="Your company name"
                                required
                            />
                        </div>

                        <div className="form-group userdetails-box">
                            <label>What's your company's website? *</label>
                            <input
                                name="website"
                                onChange={handleChange}
                                placeholder="Your company's website"
                                required
                            />
                        </div>

                        <div className="form-group userdetails-box">
                            <label>What's your marketing budget? *</label>
                            <select
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Please Select</option>
                                <option value="$500 - $1,000">$500 - $1,000</option>
                                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                                <option value="$3,000+">$3,000+</option>
                            </select>
                        </div>

                        <div className="form-group userdetails-box">
                            <label>And your business email? *</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="Your business email"
                                required
                            />
                        </div>

                        <div className="form-group userdetails-box">
                            <label>Last question! What's your phone number? *</label>
                            <input
                                name="phone"
                                onChange={handleChange}
                                placeholder="Your phone number"
                                required
                            />
                        </div>

                        <div className="form-group userdetails-box">
                            <label>Any other comments?</label>
                            <textarea
                                name="comments"
                                onChange={handleChange}
                                placeholder="Type here..."
                            />
                        </div>

                        <button type="submit" className="submit-btn">
                            Contact Us
                        </button>
                    </form>
                </div>
            </div>
            <div className="addres-details-cont">
                <div className="container">
                    <div className="addres-detail-box">
                        <div className="row addres-details-child">
                            <div className="col-md-7">
                                <div className="addres-details-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16253635.492299803!2d15.04743095235206!3d-5.970935116722164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184b51314869a111%3A0x885a17314bc1c430!2sTanzania!5e0!3m2!1sen!2sin!4v1769092843587!5m2!1sen!2sin"
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Tanzania Map"
                                    />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="addres-details-addres">
                                    <h3>Safari Marketing Pro</h3>
                                    <div className="details-addres-box">
                                        <div className="details-addres-ncxc">
                                            <h4>Address</h4>
                                            <p>Plot No- 26.1996/2231, Arundhati Resident, B2, Patrapada, 751019</p>
                                        </div>
                                        <div className="details-addres-ico">
                                            <ImLocation2 />
                                        </div>

                                    </div>
                                    <div className="details-addres-box">
                                        <div className="details-addres-ncxc">
                                            <h4>Phone</h4>
                                            <p>+91-6371-223-581</p>
                                        </div>
                                        <div className="details-addres-ico">
                                            <FaPhone />
                                        </div>

                                    </div>
                                    <div className="details-addres-box last-no">
                                        <div className="details-addres-ncxc">
                                            <h4>Opening  hours</h4>
                                            <p>Mondays – Fridays: 9am to 6pm <br />Excluding Public Holidays</p>
                                        </div>
                                        <div className="details-addres-ico">
                                            <FaRegClock />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KenyaContact;