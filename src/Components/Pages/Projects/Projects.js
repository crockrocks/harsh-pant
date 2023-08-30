import React from 'react'
import ML from './ML'
import DL from './DL'
import '/home/harsh/Desktop/websites/harsh/src/Styles.css'
import Webd from './Webd'
import ScrollToTop from "react-scroll-to-top";
import { FaAngleUp } from "react-icons/fa";
import ProjectNav from './ProjectNav'

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

function Projects() {
  return (
    <div data-aos="zoom-in">
      <div>
        <ScrollToTop smooth component={<FaAngleUp />} style={scrollToTopStyle} />
      </div>
      <div className='projects' data-aos="fade-up">
        <h1 className='text-center'>PROJECTS</h1>
        <ML />
        <DL />
        <Webd />
        <ProjectNav />
      </div>
    </div>
  )
}

export default Projects