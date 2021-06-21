import React from "react";
import "./About.css";

import iconone from "../SVGs/CommunityIcons/iconone.svg";
import icontwo from "../SVGs/CommunityIcons/icontwo.svg";
import iconthree from "../SVGs/CommunityIcons/iconthree.svg";
import iconfour from "../SVGs/CommunityIcons/iconfour.svg";
import iconfive from "../SVGs/CommunityIcons/iconfive.svg";

export default function About() {
  return (
    <div id="about" className="about">
      <p className="about_text">Join Our Community for Regular Updates</p>
      <div className="community_icons">
          <div ><img className="icon" src={iconone}/></div>
          <div ><img className="icon" src={icontwo}/></div>
          <div ><img className="icon" src={iconthree}/></div>
          <div ><img className="icon" src={iconfour}/></div>
          <div ><img className="icon" src={iconfive}/></div>
      </div>
      <div className="other_links">
          <div className="link">Policies</div>
          <div className="link">Information</div>
          <div className="link">About</div>
      </div>
    </div>
  );
}
