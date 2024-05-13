import React from 'react'
import './style.scss'
import avatar3 from '../../assets/avatar3.svg'
import Info from './info'
//import cv from '../../assets/'

const About = () => {
  return (
    <div className="aboutSection" id="about">
        <h2 className='sectionTitle'>About me</h2>
        <span className='sectionSubtitle'>My introduction</span>

        <div className="aboutContainer container grid">
            <img src={avatar3} alt="" className='aboutImg' />

            <div className="aboutData">
                <Info/>

                <p className="aboutDescription">My goal is to create exceptional user experiences that are memorable and inspiring. Web development is a dynamic field that requires continuous learning. I am constantly developing my skills to keep up with the latest Front-end development trends and technologies.</p>

                <a href='' className='button buttonFlex'>
                    Download CV 
                    <i class="uil uil-clipboard-notes"></i>
                </a>
            </div>

        </div>
    </div>
  )
}

export default About