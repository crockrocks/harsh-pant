import React from 'react'
import '../../../index.css'

function webd() {
    var portfolio = require('../../../images/portfolio.png')
    var kanban = require('../../../images/Kanban.png')
    var simonGame = require('../../../images/simon-game.png')
    return (
        <div className='row web-d'>
            <div className='col-lg-6'>
                <h1> Front End Web-Development</h1>
                <hr></hr>
                <p className="col-text"> Experienced in building websites using :
                        <li>
                            HTML , CSS
                        </li>
                        <li>
                            CSS frameworks such as Bootstrap and Tailwind .
                        </li>
                        <li>
                            Javascript , to provide basic functionalities .
                        </li>
                        <li>
                            Node.JS and Express.JS for backend services .
                        </li>
                        <li>
                            React.JS
                        </li>
                </p>
                <h5 className='left-github-text'>"Click on the images to visit the websites and repositories"</h5>
            </div>
            <div className="pricing-col col-lg-6">
                <div className="card border-0 bg-dark">
                    <div className="card-body">
                        <div className='carousel'>
                            <div id="carouselproject3" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselproject3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselproject3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselproject3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a href='https://github.com/crockrocks/Fastai'>
                                            <img src={portfolio} className="ml-image" alt="..." />
                                            <div className="carousel">
                                                <h5>Portfolio</h5>
                                                <p>----------------------------</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href='https://kanban-website-one.vercel.app/'>
                                            <img src={kanban} className="ml-image" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>kanban based application . </h5>
                                                <p>Built using Javascript , Node.JS and Express.JS</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href='https://simon-game-challenge-starting-files-one.vercel.app/'>
                                            <img src={simonGame} className="ml-image" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Simon Game</h5>
                                                <p>A model which predicts the price of bulldozer parts.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselproject3" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselproject3" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default webd