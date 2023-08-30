import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import '/home/harsh/Desktop/websites/harsh/src/Styles.css'

function Me() {
  var profilepic = require("../../../images/profile.png")
  return (
    <div>
      <div className='row'>
        <div className='img col-lg-6'>
          <img src={profilepic} className="profile-img" alt="..." />
        </div>
        <div className='about col-lg-6'>
          <div className='aboutme'>
            <h1 className='text-center'> ABOUT</h1>
            <h3 className='text'>
              <TypeAnimation
                cursor={true}
                sequence={[
                  'Front-End Developer .',
                  1000,
                  'AI/ML Engineeer .',
                  1000,
                  '',
                ]}
                wrapper='b'
                repeat={Infinity}
              />
            </h3>
            <p className='text'> Hello ! I am Harsh Pant , an undergraduate student studying Artificial Intelligence . I am always curious and enthusiatic towards learning new technology . I have explored domains of Web - Development and Artificial Intelligence .</p>
            <p className='text'> I love to talk and learn from new people . The world of tech is huge and I want to keep learning new technologies in this world of tech . </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me