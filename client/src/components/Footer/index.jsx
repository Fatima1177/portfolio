import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="footerContainer container">
            <h1 className='footerTitle'>Fatya</h1>

            <ul className='footerList'>
                <li className='footerLi'>
                    <a href="#about" className='FooterLink'>About</a>
                </li>


                <li className='footerLi'>
                    <a href="#portfolio" className='FooterLink'>Projecs</a>
                </li>


                <li className='footerLi'>
                    <a href="#services" className='FooterLink'>Services</a>
                </li>
            </ul>

            <div className="footerSocial">
                <a href="https://www.instagram.com/faatxxmv/" className='footerSocialLink' target="_blank">
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://www.linkedin.com/in/fatima-ahmadova-b0774b302/" className='footerSocialLink' target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/Fatima1177" className='footerSocialLink' target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className='footerCopy'>&#169; AhmadovaFatima All rights reserved</span>

        </div>

      </footer>
    </div>
  )
}

export default Footer
