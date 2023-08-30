import React from 'react'
import '/home/harsh/Desktop/websites/harsh/src/Components/Styles.css'

function Techstack() {
  return (
    <div>
      <div className='Techstack'>
        <h1 className='text-center'>
          Tech-Stack
        </h1>
        <hr className='line'></hr>
      </div>
      <div className='logo'>
        <i class="fa-brands fa-python logos"><p className='logotext'>Python</p></i>
        <i class="fa-brands fa-react logos"><p className='logotext'>React</p></i>
        <i class="fa-brands fa-js logos"><p className='logotext'>JavaScript</p></i>
        <i class="fa-brands fa-html5 logos"><p className='logotext'>HTML5</p></i>
        <i class="fa-brands fa-css3-alt logos"><p className='logotext'>CSS3</p></i>
        <i class="fa-brands fa-bootstrap logos"><p className='logotext'>Bootstrap</p></i>
        <i class="fa-solid fa-chart-line logos"><p className='logotext'>Data </p><p className='logotext'>Analysis</p></i>
        <i class="fa-solid fa-laptop-code logos"><p className='logotext'>Machine </p><p className='logotext'>Learning</p></i>
        <i class="fa-solid fa-diagram-project logos"><p className='logotext'>Deep</p><p className='logotext'>Learning</p></i>
      </div>
    </div>
  )
}

export default Techstack