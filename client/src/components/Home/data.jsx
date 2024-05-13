import React from 'react'
import avatar from '../../assets/avatar.svg'

const Data = () => {
  return (
    <div className='homeData'>
        <div className="text">
        <h1 className='homeTitle'>Fatima Ahmadova</h1>

        <h3 className='homeSubtitle'>Front-end Developer</h3>
        <p className='homeDescription'>I'm Fatima, a Front-end developer from Kyiv. Originally from Azerbaijan, I am diligent and dedicated to my work. My creative designs combine modern aesthetics with user-friendly functionality. Thank you for your attention!</p>
        <a href="#contact" className='button buttonFlex'>
            Say Hello
            <i class="uil uil-location-arrow"></i>
        </a>
        </div>
        <img src={avatar} alt="" />
        
    </div>
  )
}

export default Data