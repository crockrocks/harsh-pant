import React from 'react'
import '/home/harsh/Desktop/websites/harsh/src/Components/Styles.css'

function Education() {
  return (
    <div className='Education'>
      <div className='Ed-title'>
        <h1 className='text-center'> Education </h1>
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
              <p>Status | Ongoing</p>
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
              <h3>Hamoye</h3>
              <h4>DevOps Engineering (Nov 2022 - Feb 2023)</h4>
              <p>(Status | Completed)</p>
              <p>Learned about basics of DevOps , CICD , Kubernetes , Docker  and how to use microscoft azure .</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education