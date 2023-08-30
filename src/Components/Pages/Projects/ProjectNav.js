import React from 'react'
import { Link } from 'react-router-dom'

function ProjectNav() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className='carousel'>
        <div id="carouselabout" className='row'>
          <div className='col-lg-6'>
            <Link to='/About'>
              <button className="carousel-control-prev " type="button" data-bs-target="#carouselabout" data-bs-slide="prev" onClick={scrollToTop}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="show"><h1>About</h1></span>
              </button>
            </Link>
          </div>
          <div className='col-lg-6'>
            <Link to='/'>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselabout" data-bs-slide="next" onClick={scrollToTop}>
                <span className="show"><h1>Home</h1></span>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectNav