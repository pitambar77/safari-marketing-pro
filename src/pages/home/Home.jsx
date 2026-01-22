import React from 'react'
import Button from "../../components/Button";
import SmpHero from "../../assets/images/smphero.svg";
import AboutSmpVideo from '../aboutUs/AboutSmpVideo';
import Awardvideo from '../smpAwards/Awardvideo';

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
                                <Button  text="Get Free Proposal" link="./"  target="_self" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="add-hero-brand">
                            <img src={SmpHero} alt="Safari Marketing Pro" tittle="Safari Marketing Pro" className="w-100"/>
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
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/03/PremierBadge.png" alt="" className="w-100"/>
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/Facebook-Meta-Background-PNG.png" alt="" className="w-100"/>
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/statista.jpg.webp" alt="" className="w-100"/>
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/the-straits-times-statista.jpg.webp" alt="" className="w-100"/>
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/bea_sea_badge_720x720.png.webp" alt="" className="w-100"/>
              </div>
            </div>
            <div className="col-md-2">
              <div className="main-tustaward-card">
                <img src="https://www.heroesofdigital.com/wp-content/uploads/2025/02/PPA23_winner_badge_400x400_SEA_lead_generation_2x-1.webp" alt="" className="w-100"/>
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
                            <div className="smp-arwsa-videocard">
                               <Awardvideo />
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

    </div>
  )
}

export default Home;