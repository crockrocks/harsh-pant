import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import '../../../index.css'

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
            <h1 className='text-center'> ABOUT ME</h1>
            <h3 className='text'>
              <TypeAnimation
                cursor={true}
                sequence={[
                  'Developer ...  👨‍💻 ',
                  1000,
                  'AI/ML Enthusiast ... 🤖',
                  1000,
                  '',
                ]}
                wrapper='b'
                repeat={Infinity}
              />
            </h3>
            <p className='text'>Yo🤘 !!!  I'm Harsh Pant, a passionate undergraduate student delving into the captivating realms of Artificial Intelligence. Eager to learn and explore, I've ventured into the dynamic domains of both Web Development and AI.</p>
            <p className='text'>My insatiable curiosity and enthusiasm drive me to continuously expand my knowledge in the ever-evolving world of technology. I thrive on engaging conversations and value the opportunity to learn from diverse perspectives.</p>
            <p className='text'>The vast expanse of the tech world fuels my excitement, and I am committed to staying abreast of cutting-edge technologies. Join me on this exhilarating journey of discovery and innovation!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Me