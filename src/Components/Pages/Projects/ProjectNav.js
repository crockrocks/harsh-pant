import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

function ProjectNav() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') {
            document.querySelector('.project-about').click();
        } else if (event.key === 'ArrowRight') {
            document.querySelector('.project-home').click();
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
        <div id="carouselproject" className='row'>
          <div className='col-lg-6'>
            <Link to='/About'>
              <button className="carousel-control-prev project-about" type="button" data-bs-target="#carouselproject" data-bs-slide="prev" onClick={scrollToTop}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="show"><h1>About</h1></span>
              </button>
            </Link>
          </div>
          <div className='col-lg-6'>
            <Link to='/'>
              <button className="carousel-control-next project-home" type="button" data-bs-target="#carouselproject" data-bs-slide="next" onClick={scrollToTop}>
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