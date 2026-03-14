import React from "react";
import Bgvector from "../../assets/images/bg-vector-aboutus.svg";
const CaseStudy = () => {
  return (
    <>
      <section className="casestud">
        <div className="container">
          <div className="bannersec">
            <h1>Ark Surgical Practice</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              laudantium doloremque eaque rerum odit aliquid dolorem quasi nobis
              cum nemo esse fugiat, ex neque quam nihil, sapiente, dolores
              tempore nam! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Magnam laudantium doloremque eaque rerum odit aliquid
              dolorem quasi nobis cum nemo esse fugiat, ex neque quam nihil,
              sapiente, dolores tempore nam!
            </p>
          </div>
        </div>
        <div
          className="smp-about-brad"
          style={{ backgroundImage: `url(${Bgvector})` }}
        >
          <div className="ghjgh">
            <div className="case-stdy-ban">
              <img
                src="https://www.heroesofdigital.com/wp-content/uploads/2025/10/Ark-Surgical-Practice.jpg.webp"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="challenge-container">
            {/* LEFT CONTENT */}
            <div className="challenge-left">
              <h2 className="section-title">The Challenge:</h2>

              <p >
                With numerous specialist clinics in the competitive Singapore
                market, Ark Surgical Practice struggled to differentiate itself
                and attract new patients. They needed a strategic marketing
                approach to increase brand awareness, generate qualified leads,
                and drive clinic growth.
              </p>

              <h2 className="section-title">The Solution:</h2>

              <h3 className="sub-title">Performance Marketing Strategy:</h3>

              <p >
                Ark Surgical Practice partnered with a performance marketing
                agency to launch a comprehensive campaign leveraging Google
                Search Engine Marketing (SEM) and social media assets.
              </p>

              <ul className="solution-list">
                <li>
                  <span className="bold">Google SEM Paid Ads:</span>
                  Targeted paid advertising campaigns focused on keywords
                  related to colonoscopy, hemorrhoids/piles, colorectal cancer,
                  and anal fistula treatments which were identified together
                  with the doctor as potentially leading to more complex
                  procedures.
                </li>

                <li>
                  <span className="bold">Social Media Content Marketing:</span>
                  Engaging video and photo content was created for Dr. Chong.
                  These assets addressed common colorectal-related lifestyle
                  topics and debunked myths while providing educational
                  information for patients.
                </li>
              </ul>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="challenge-right">
              <h4 className="help-title">How did we help:</h4>

              <div className="help-buttons">
                <button className="help-btn">
                  Google Ads <span>→</span>
                </button>

                <button className="help-btn">
                  SEO <span>→</span>
                </button>

                <button className="help-btn">
                  Social Media Marketing <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
