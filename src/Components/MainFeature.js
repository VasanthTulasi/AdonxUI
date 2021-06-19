import React from 'react';
import "./MainFeature.css";
import {ReactComponent as FeatureIcon} from '../SVGs/highlyScalableEngine.svg';

function MainFeature(props) {
    // let classes = "mainfeatures "+ props.flexDirection;
    let classes = "mainfeatures";


    return (
            <div className={classes}>
        <div className="features">
          <p className="feature_heading">Highly Scalable Matching Engine</p>
          <p className="feature_caption">
            A Highly Scalable order matching engine, which can withstand and
            process millons of orders per minute.
          </p>
          <button className="feature_button">Get Started</button>
        </div>
        <FeatureIcon className="feature_illustation"/>
      </div>
    )
}

export default MainFeature
