import React from 'react'
import Button from './Button';
import metalogo from "../assets/images/meta-logo-white.png.webp";

const LeftCta = () => {
  return (
    <div className="leftctacard">
        <img src={metalogo} alt="" />
        <h2>We are Meta Business Partners</h2>
        <p>Work with certified professionals who deliver Meta-backed advertising solutions.</p>
        <Button  text="Get Meta Ads Proposal!" link="./"  target="_self" />
    </div>
  )
}

export default LeftCta;