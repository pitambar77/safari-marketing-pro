import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-wrapper">
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Company Name</label>
            <input type="text"/>

              <div className="form-row cont-phone">
          <div className="form-group small">
            <select>
              <option>Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
          </div>
          <div className="form-group small">
            <input type="tel" placeholder="Phone No."/>
          </div>
        </div>
          </div>

          <div className="form-group">
            <label>Further Comments</label>
            <textarea rows="4" className="textarea-cont-box"></textarea>
          </div>
        </div>

      

        {/* reCAPTCHA placeholder */}
        <div className="captcha-box">
          <div className="checkbox"></div>
          <span>I'm not a robot</span>
          <div className="captcha-logo">
            reCAPTCHA<br />
            <small>Privacy - Terms</small>
          </div>
        </div>

        <p className="form-note">
          By submitting this form, you agree to us for your business marketing
          requirements. We will use your data to send you free marketing tips,
          news and our latest services. You can get everything 24/7. We are
          available...
        </p>

        <button type="submit" className="submit-btn">
          Contact Us Today
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
