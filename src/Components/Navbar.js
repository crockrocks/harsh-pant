import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ backgroundColor: 'black', position: 'relative', zIndex: '100' }}>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">Harsh</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/About' className="nav-link" >About</Link>
              </li>
              <li className="nav-item">
                <Link to='/Projects' className="nav-link">Projects</Link>
              </li>
            </ul>
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="https://www.linkedin.com/in/harsh-pant-a28378230/"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-2"
                  href="https://github.com/crockrocks"
                  rel="nofollow"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar