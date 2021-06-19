import React from 'react';
import './HeroSection.css';
import illustration from "../Images/tradingillustration.jpg";

function HeroSection() {
    return (
        <div className="herocontent"> 
        {/* <!-- Hero Heading and Caption --> */}
        <div className="herotext">
          <p className="headline-text">A new exchange era</p>
          <p id="caption" className="caption-text">
            A simple, fast, innovative, state of the art, secured yet powerful
            crypto exchange
          </p>
        </div>

        {/* <!-- Hero Illustration --> */}
        <div className="heroillustration">
          <img
            className="illustrationimage"
            src={illustration}
            alt="Image Could Not Be Loaded"
          />
        </div>
      </div>
    )
}

export default HeroSection;
