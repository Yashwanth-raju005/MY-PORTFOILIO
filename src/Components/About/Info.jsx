/* eslint-disable no-unused-vars */
import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Fresher </span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt'></i>
            <h3 className="about__title">Designed</h3>
            <span className="about__subtitle">10+ WebSites</span>
        </div>

        <div className="about__box">
            <i className='bx bx-support'></i>
            <h3 className="about__title">Freelance</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>  
    </div>
  )
}

export default Info