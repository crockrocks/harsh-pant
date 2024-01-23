import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../../../index.css';

function Content() {
  var avatar = require("../../../images/avatar.png")
  return (
    <div className='main'>
      <div className='content'>
        <div className='content_head'>
          <h3 className='text-center'>Hello 👋</h3>
          <h3 className='text-center'>My name is...</h3>
          <h1 className='text-center'>Harsh Pant.</h1>
          <h3 className><img src={avatar} className="avatar-img" alt="..." />Use <i class="fa-solid fa-caret-left"></i> <i class="fa-solid fa-caret-right"> </i>  to navigate .</h3>
        </div>
        <div className='content'>
          <p className='text-center'>
            <TypeAnimation
              cursor={true}
              sequence={[
                'AI/ML enthusiast !! 🤖',
                1000,
                'Developer . 👨‍💻',
                1000,
                '',
              ]}
              wrapper='b'
              repeat={Infinity}
            />
          </p>
          <div className='icons'>
            <p className='text-center-grey'>Contact Me <i class="fa-solid fa-caret-right"></i>
              <a
                className='px-2 mail'
                href='mailto:harshpant3703@gmail.com'
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </p>
          </div>
          <div className='icons'>
            <p className='text-center-grey'>Links <i class="fa-solid fa-caret-right"></i>
            <a
              className='px-2 github'
              href='https://github.com/crockrocks'
              rel='nofollow'
              target='_blank'
            >
              <i className='fa-brands fa-github'></i>
            </a>
            <a
              className='px-2'
              href='https://www.linkedin.com/in/harsh-pant-a28378230/'
              rel='nofollow'
              target='_blank'
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
