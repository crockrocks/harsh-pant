import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from "react-icons/fa";
import Me from './Me'
import Techstack from './Techstack';
import Education from './Education';
import AboutNav from './AboutNav';

const scrollToTopStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "50%",
  padding: "10px",
  cursor: "pointer",
  boxShadow: "0px 2px 4px rgba(255, 255, 255, 1)",
  zIndex: "1000",
};

function About() {
  return (
    <div data-aos="zoom-in">
      <div>
        <ScrollToTop smooth component={<FaAngleUp />} style={scrollToTopStyle} />
      </div>
      <div id="About" className='About-me'>
        <Me />
        <Techstack />
        <Education />
        <AboutNav />
      </div>
    </div>
  )
}

export default About;