import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

function AboutNav() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            document.querySelector('.carousel-control-prev').click();
        } else if (event.key === 'ArrowRight') {
            document.querySelector('.carousel-control-next').click();
        }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
}, []);
  return (
    <div>
      <div className='carousel'>
        <div id="carouselabout" className='row'>
          <div className='col-lg-6'>
            <Link to='/'>
              <button className="carousel-control-prev " type="button" data-bs-target="#carouselabout" data-bs-slide="prev" onClick={scrollToTop}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="show"><h1>Home</h1></span>
              </button>
            </Link>
          </div>
          <div className='col-lg-6'>
            <Link to='/Projects'>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselabout" data-bs-slide="next" onClick={scrollToTop}>
                <span className="show"><h1>Projects</h1></span>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutNav