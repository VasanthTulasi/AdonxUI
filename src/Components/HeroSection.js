import React from "react";
import "./HeroSection.css";
import { ReactComponent as HeroIllustration } from "../SVGs/heroillustrationfigma.svg";
import { ReactComponent as BitCoinIcon } from "../SVGs/bitcoin.svg";
import { ReactComponent as EthereumIcon } from "../SVGs/ethereum.svg";
import { ReactComponent as RippleIcon } from "../SVGs/ripple.svg";
import { ReactComponent as TetherIcon } from "../SVGs/tether.svg";
import { ReactComponent as LiteCoinIcon } from "../SVGs/litecoin.svg";


function HeroSection() {
  return (
    <div>
      <div class="floatingicons">
        {/* <img src={floatingIcon} />
        <img src={floatingIcon} />
        <img src={floatingIcon} />
        <img src={floatingIcon} /> */}
        <div><LiteCoinIcon class="iconsize"/></div>
        <div><EthereumIcon class="iconsize"/></div>
        <div><TetherIcon class="iconsize"/></div>
        <div><RippleIcon class="iconsize"/></div>
        <div><BitCoinIcon class="iconsize"/></div>
      </div>
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
          {/* <img
            className="illustrationimage"
            src={illustration}
            alt="Image Could Not Be Loaded"
          /> */}
          <HeroIllustration className="illustrationimage"></HeroIllustration>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
