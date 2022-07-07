import React from 'react'
import './aboutComponents.css'
import Propkeys from '../../resources/largepropertysale.jpg'
function AboutUs() {
  return (
        <section className = 'headingSection'>
        <div className="mainsection cent-container">
            <article className="img-container">
                <img src={Propkeys}  alt="A luxury home" className='main-img' />
            </article>
            <article className="about-content">
                <h2>Our story</h2>
                <div className="a-underline"></div>
                <br />
                <p>
                    Thousands of travelers are banking on your vacation
                    rental for their next vacation. Help us help them find
                    it. Getting started is easy! We’ll be with you every 
                    step of the way.
                </p>
                <br />
                <h3>
                    Vacation | Home | Rent 
                </h3>
            </article>
        </div>
        </section>
  )
}

export default AboutUs
