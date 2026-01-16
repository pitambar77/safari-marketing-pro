import chargepic from "../assets/images/lets-talk-img.png";
import ContactForm from "../components/ContactForm";
import profile1 from "../assets/images/profile1.webp";
import profile2 from "../assets/images/profile2.webp";
import profile3 from "../assets/images/profile3.webp";
import profile4 from "../assets/images/profile4.webp";
import profile5 from "../assets/images/profile5.webp";

const SmpDontCharge = () => {
  return (
    <div className="smp_dontcharge_sec" style={{ backgroundImage: `url(${chargepic})` }}>
        <div className="container">
            <div className="smpcoust-brad-pico">
                <ul className="smpcoust-profile">
                 <li><img src={profile1} alt="" className="w-100"/></li>
                 <li><img src={profile2} alt="" className="w-100"/></li>
                 <li><img src={profile3} alt="" className="w-100"/></li>
                 <li><img src={profile4} alt="" className="w-100"/></li>
                 <li><img src={profile5} alt="" className="w-100"/></li>
                </ul>
            </div>
            <div className="smp-inner-dont-charge">
                <div className="smp_ltgcl_sec_card_box">
                    <h2>We Don’t Charge To Educate Our Customers </h2>
                    <p>Customer Education accelerates growth throughout the customer journey. We are a friendly bunch and would love to hear from you. Fill out the form below and we will be in touch.</p>
                    <div className="smp_ltgcl_form_wrap">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmpDontCharge