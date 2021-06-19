import React from 'react';
import {ReactComponent as AdonxLogo} from '../SVGs/adonxLogo.svg';
import './NavBar.css';


export default function NavBar() {


    return (
      <div className="navbar">
        {/* <!-- Hamburger Menu --> */}
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        {/* <!-- Adonx Logo --> */}
        <div className="logo">
          <AdonxLogo className="svglogo"/>
        </div>

        {/* <!-- Menu Items --> */}
        <ul className="navlinks">
          <li className="navlink">FEATURES</li>
          <li className="navlink">TOKEN</li>
          <li className="navlink">SALES</li>
          <li className="navlink">ROADMAP</li>
          <li className="navlink">WHITEPAPER</li>
          <li className="navlink">TEAM</li>
          <li className="navlink">SOCIAL</li>
          <li className="navlink">FAQS</li>
        </ul>

        {/* <!-- Login and Sign Up Buttons --> */}
        <div className="log-in-and-sign-up">
          <div className="log-in">Log in</div>
          <div className="register">Sign Up</div>
        </div>
      </div>

    );
}
