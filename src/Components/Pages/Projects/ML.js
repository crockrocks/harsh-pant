import React from 'react'
import '/home/harsh/Desktop/websites/harsh/src/index.css'

function ML() {
    var customerSegmentation = require('/home/harsh/Desktop/websites/harsh/src/images/customer_segmentation.png')
    var AirBNB = require('/home/harsh/Desktop/websites/harsh/src/images/air_bnb.png')
    var BullDozer = require('/home/harsh/Desktop/websites/harsh/src/images/bulldozer.png')
    return (
        <div className='row project-cards'>
            <div className='col-lg-6'>
                <h1> Machine Learning</h1>
                <hr></hr>
                <p className="col-text"> Experienced in working with various python libraries like :
                    <ul>
                        <li>Pandas : Efficient usage of the library for Exploratory Data Analysis and Feature Engineering .</li>
                        <li>Numpy : Know how to use it for Machine Learning tasks .</li>
                        <li>Matplotlib & Seaborn : Efficient usage for plotting the data and making it easy to understand . </li>
                        <li>Scikit-Learn : Know all the models and preprocessing functions and have used them in projects . </li>
                    </ul>
                </p>
                <h5 className='left-github-text'>"Click on the images to visit the Github Repositories"</h5>
            </div>
            <div className="pricing-col col-lg-6">
                <div className="card border-0 bg-dark">
                    <div className="card-body">
                        <div className='carousel'>
                            <div id="carouselproject2" className="carousel slide">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselproject2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselproject2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselproject2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <a href='https://github.com/crockrocks/Fastai'>
                                            <img src={customerSegmentation} className="ml-image" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>Customer Segmentation</h5>
                                                <p>Clustering Problem to help a business analyse it's customers .</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href='https://github.com/crockrocks/Random-Forest-Premier-Project'>
                                            <img src={AirBNB} className="ml-image" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>AirBNB recommendation </h5>
                                                <p>A model which predicts where a customer is going to book its next flight.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="carousel-item">
                                        <a href='https://github.com/crockrocks/regression_project/tree/main'>
                                            <img src={BullDozer} className="ml-image" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5>BullDozer Price Prediction </h5>
                                                <p>A model which predicts the price of bulldozer parts.</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselproject2" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselproject2" data-bs-slide="next">
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

export default ML