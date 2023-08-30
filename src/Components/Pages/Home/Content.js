import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Content() {


  return (
    <div className='main'>
      <div className='content'>
        <div className='content_head'>
          <h3 className='text-center'>Hello</h3>
          <h3 className='text-center'> My name is...</h3>
          <h1 className='text-center'>Harsh Pant .</h1>
        </div>
        <div className='content'>
          <p className='text-center'>
            <TypeAnimation
              cursor={true}
              sequence={[
                '<p> An AI/ML enthusiast !!</p>',
                1000,
                '<p> A developer . </p>',
                1000,
                '',
              ]}
              wrapper='b'
              repeat={Infinity}
            /></p>
          <p className='text-center'>Welcome to my world</p>
          <div className='icons'>
            <a
              className='px-2 github'
              href="https://github.com/crockrocks"
              rel="nofollow"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className='px-2'
              href="https://www.linkedin.com/in/harsh-pant-a28378230/"
              rel="nofollow"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content