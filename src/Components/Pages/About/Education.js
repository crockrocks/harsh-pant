import React from 'react'
import '../../../index.css'

function Education() {
  var hamoye = require("../../../images/hamoyehq_logo.jpeg")
  var resolute = require("../../../images/resolute.jpeg")
  var deepmind = require("../../../images/deepmindz.jpeg")
  return (
    <div className='Education'>
      <div className='Ed-title'>
        <h1 className='text-center'> Experience </h1>
        <hr className='line'></hr>
      </div>
      <div className='row timeline'>
        <div className='col-lg-6'>
          <h1>Education</h1>
          <hr className='line'></hr>
          <ul>
            <li className='ed-content'>
              <h3>Gautam Buddha University</h3>
              <h4>B.Tech AI (2021-2025) </h4>
              <p>Ongoing | CGPA : 8.6</p>
            </li>
            <li className='ed-content'>
              <h3>Dev Samaj Modern School</h3>
              <h4>Schooling </h4>
              <p>Completed | CBSE Board | 90% </p>
            </li>
          </ul>
        </div>
        <div className='col-lg-6'>
          <h1>Internships</h1>
          <hr className='line'></hr>
          <ul>
            <li className='ed-content'>
              <h3><img src={hamoye} className="company-img" alt="..." />Hamoye</h3>
              <h4>MLOps Intern (Nov 2022 - Feb 2023)</h4>
              <p>(Status | Completed)</p>
              <p>Learned about basics of MLOps , CICD , Kubernetes , Docker  and how to use microscoft azure , to develop fully functional machine learning models and deploy them on cloud .</p>
            </li>
            <li className='ed-content'>
              <h3><img src={resolute} className="company-img" alt="..." />Resolute AI</h3>
              <h4>Computer Vision Intern (Nov 2023 - Jan 2024)</h4>
              <p>(Status | Completed)</p>
              <p>Worked on object detection tasks utilising state of the art frameworks such as Yolov5 to develop and deploy state of the art deep learning models in real time environment . Learned the workflow for object detection tasks and including data annotation , utilising Yolov5 , testing and deployment .</p>
            </li>
            <li className='ed-content'>
              <h3><img src={deepmind} className="company-img" alt="..." />Deepmindz Innovations</h3>
              <h4>Machine Learning Intern(Jan 2024 -  Present)</h4>
              <p>(Status | Ongoing)</p>
              <p> Working on state of the art and latest technologies such as stable diffusion and generative AI for tasks such as video inpainting , video generation , voice synchronisation using GANs (wav2lip) and various other state of the art machine learning and deep learning technologies . </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education