import React from 'react'
import { useState } from 'react'
import './style.scss'

const Header = () => {
    const [Toggle, showMenu]= useState(false)
    const [activeNav, setActiveNav] = useState('#home')

  return (
    <header className='header'>
        <nav className=" nav container">
            <a href="index.html" className='navLogo'>Portfolio</a>
            <div className={Toggle ? "navMenu showMenu" : "navMenu"}>
                <ul className="navList grid">
                    <li className="navItems">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'navLink activeLink' : "navLink"}>
                            <i class="uil uil-home navIcon "></i>
                            Home
                        </a>
                    </li>
                    <li className="navItems">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'navLink activeLink' : "navLink"}>
                            <i className='uil uil-user navIcon'></i>
                            About
                        </a>
                    </li>
                    <li className="navItems">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'navLink activeLink' : "navLink"}>
                            <i className='uil uil-file-alt navIcon'></i>
                            Skills
                        </a>
                    </li>
                    
                    <li className="navItems">
                        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'navLink activeLink' : "navLink"}>
                            <i className='uil uil-scenery navIcon'></i>
                            Portfolio
                        </a>
                    </li>

                    <li className="navItems">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'navLink activeLink' : "navLink"}>
                            <i class="uil uil-envelope navIcon"></i>
                            Contact
                        </a>
                    </li>

                    
                </ul>
                    <i className='uil uil-times navClose' onClick={()=>showMenu(!Toggle)}></i>
            </div>
            <div className="navToggle" onClick={()=>showMenu(!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>

        </nav>
    </header>
  )
}

export default Header