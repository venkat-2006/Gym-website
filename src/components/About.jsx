import React from 'react'
import aboutimage from '../images/about.png'

const About = () => {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={aboutimage} alt="" />

        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US!</h1>
            <p>We are dedicated to helping you achieve your fitness goals with expert training, modern equipment, and a supportive community. Join us and transform your life!</p>
            <button>READ MORE</button>
        </div>
      
    </div>
  )
}

export default About
