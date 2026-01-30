import React, { useState } from "react";

const Marketing360Form = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        website: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        hearAbout: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="container">
            <div className="row c360marketing-form">

                {/* First Name */}
                <div className="col-md-6">
                    <div className="c360marketing-field">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name*"
                            className="form-control"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Last Name */}
                <div className="col-md-6">
                    <div className="c360marketing-field">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name*"
                            className="form-control"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Company */}
                <div className="col-md-6">
                    <div className="c360marketing-field">
                        <input
                            type="text"
                            name="company"
                            placeholder="Company / Organization*"
                            className="form-control"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Website */}
                <div className="col-md-6">
                    <div className="c360marketing-field">
                        <input
                            type="url"
                            name="website"
                            placeholder="Website*"
                            className="form-control"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                    <div className="c360marketing-field">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address*"
                            className="form-control"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Phone */}
                <div className="col-md-6">
                    <div className="c360marketing-field">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number*"
                            className="form-control"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Services */}
                <div className="col-md-12">
                    <div className="c360marketing-field">
                        <select
                            name="service"
                            className="form-control custom-select"
                            required
                            onChange={handleChange}
                        >
                            <option value="">Services*</option>
                            <option value="SEO">SEO</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                            <option value="Google Ads">Google Ads</option>
                            <option value="Content Marketing">Content Marketing</option>
                            <option value="360 Marketing">360 Marketing</option>
                        </select>
                    </div>
                </div>

                {/* Budget */}
                <div className="col-md-12">
                    <div className="c360marketing-field">
                        <select
                            name="budget"
                            className="form-control custom-select"
                            required
                            onChange={handleChange}
                        >
                            <option value="">Monthly Marketing Budget*</option>
                            <option value="$500 - $1,000">$500 - $1,000</option>
                            <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                            <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                            <option value="$5,000+">$5,000+</option>
                        </select>
                    </div>
                </div>

                {/* Hear About */}
                <div className="col-md-12">
                    <div className="c360marketing-field">
                        <input
                            type="text"
                            name="hearAbout"
                            placeholder="How Did You Hear About Us?*"
                            className="form-control"
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="col-md-12">
                    <div className="c360marketing-field">
                        <textarea
                            name="message"
                            placeholder="Tell us about your business*"
                            className="form-control large-textarea"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>

                {/* Submit */}
                <div className="col-md-12 text-center mt-4">
                    <button type="submit" className="marking3cbtn">
                        Send My Free Proposal
                    </button>
                </div>

                <div className="copily-360markk text-center mt-3">
                    <p>
                        In a hurry? Give us a call now at <a href="tel:+916371223581">+91-6371-223-581</a>
                    </p>
                    <p>
                        By submitting your phone number, you agree to receiving texts from us.
                    </p>
                </div>

            </div>

        </form>
    );
};

export default Marketing360Form;
