import React from "react";
import "./MainFeature.css";

import feature_background from "../SVGs/MainFeatureBackgrounds/stacked-peaks-haikei.svg";
import feature_background2 from "../SVGs/MainFeatureBackgrounds/stacked-peaks-haikei4.svg";
import feature_background3 from "../SVGs/MainFeatureBackgrounds/stacked-peaks-haikei.svg";
import feature_background4 from "../SVGs/MainFeatureBackgrounds/stacked-peaks-haikei.svg";
import feature_background5 from "../SVGs/MainFeatureBackgrounds/stacked-peaks-haikei.svg";
import feature_background6 from "../SVGs/MainFeatureBackgrounds/stacked-peaks-haikei.svg";

// import { ReactComponent as FeatureIcon } from "../SVGs/multilayersecurity.svg";

import multi_layer_security from "../SVGs/MainFeatureIcons/multi_layer_security.svg";
import highly_scalable_engine from "../SVGs/MainFeatureIcons/highly_scalable_engine.svg";
import account_alias from "../SVGs/MainFeatureIcons/account_alias.svg";
import atom_swap from "../SVGs/MainFeatureIcons/atom_swap.svg";
import developer_api from "../SVGs/MainFeatureIcons/developer_api.svg";
import vanity_address from "../SVGs/MainFeatureIcons/vanity_address.svg";

function MainFeature(props) {
  let mainClass = "mainfeatures " + props.flexDirection +" "+props.divColor;
  let featureClass = "features "+  props.textColor + " "+props.borderColor;
  let featureHeadingClass = "feature_heading "+props.textColor;
  let featureCaptionClass = "feature_caption "+props.textColor;
  let featureButtonClass = "feature_button "+props.buttonColor;


  let featureImg = getFeatureImage(props.featureIcon);
  let backgroundImg = getBackgroundImage(props.featureBackground);

  console.log("Image is : " + props.featureIcon);

  return (
    <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
      className={mainClass}
    >
      <div className={featureClass}>
        <p className={featureHeadingClass}>{props.featureHeading}</p>
        <p className={featureCaptionClass}>{props.featureDescription}</p>
        <button className={featureButtonClass}>Explore</button>
      </div>
      <img
        className="feature_illustation"
        src={featureImg}
        alt="Image could not be loaded"
      />
    </div>
  );
}

function getFeatureImage(icon) {
  switch (icon) {
    case "highly_scalable_engine":
      return highly_scalable_engine;
      break;
    case "multi_layer_security":
      return multi_layer_security;
      break;
    case "account_alias":
      return account_alias;
      break;
    case "vanity_address":
      return vanity_address;
      break;
    case "atom_swap":
      return atom_swap;
      break;
    case "developer_api":
      return developer_api;
      break;
  }
}

function getBackgroundImage(img) {

  switch (img) {
    case "feature_background":
      return feature_background;
      break;
    case "feature_background2":
      return feature_background2;
      break;
    case "feature_background3":
      return feature_background3;
      break;
    case "feature_background4":
      return feature_background4;
      break;
    case "feature_background5":
      return feature_background5;
      break;
    case "feature_background6":
      return feature_background6;
      break;
  }
}

export default MainFeature;
