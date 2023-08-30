import React from 'react'
import '/home/harsh/Desktop/websites/harsh/src/index.css'

function DL() {
    var textSummary = require('/home/harsh/Desktop/websites/harsh/src/images/text-summary.png')
    var dogVision = require('/home/harsh/Desktop/websites/harsh/src/images/dog-classifier.png')
    return (
        <div>
            <div className="row project-cards">
                <div className='col-lg-6'>
                    <h1> Deep Learning</h1>
                    <hr></hr>
                    <p className='col-text'>
                        Experienced in working with various python frameworks as well as love to play and keep looking for latest trends and developments in the field . Looking for researh opportunitis and trying to keep building projects and to keep generating new ideas that can help solve and shape the future .
                        <li>Worked in NLP using pytorch</li>
                        <li>Image Classification using TensorFlow</li>
                    </p>
                    <h5 className='left-github-text'>"Click on the images to visit the Github Repositories"</h5>
                </div>
                <div className="pricing-col col-lg-6">
                    <div className="card border-0 bg-dark">
                        <div className="card-body">
                            <div className='carousel'>
                                <div id="carouselproject1" className="carousel slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselproject1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselproject1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <a to='https://huggingface.co/spaces/crockrocks/text-summarization'>
                                                <img src={textSummary} className="ml-image" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5>Text-Summarisation</h5>
                                                    <p>A NLP based model to summarise new articles and text.</p>
                                                    <p>Link to deployment on huggingface spaces</p>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="carousel-item">
                                            <a to='https://github.com/crockrocks/Dog_Breed_Classifier/tree/main'>
                                                <img src={dogVision} className="ml-image" alt="..." />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5>Dog Breed Classifier</h5>
                                                    <p>A transfer learning based dog breed classifier .</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselproject1" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselproject1" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DL