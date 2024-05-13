import React from 'react'
import './style.scss'

const Contact = () => {
  return (
    <section className='contact section' id='contact'>
        <h2 className='sectionTitle'>Get in touch</h2>
        <span className='sectionSubtitle'>Contact me</span>

        <div className="contactContainer container grid">
            <div className="contactContent">
                <h3 className='contactTitle'>Talk to me</h3>

                <div className="contactInfo">

                    <div className="contactCard">
                        <i className='bx bx-mail-send contactCardIcon'></i>
                        <h3 className='contactCardTitle'>Email</h3>
                        <span className='contactCardData'>fatima.ahmadova17@gmail.com</span>
                        <a href="mailto:fatima.ahmadova17@gmail.com" className='contactButton'>Whrite me {''}
                            <i className='bx bx-right-arrow-alt contactButtonIcon'></i>
                        </a>
                    </div>

                    <div className="contactCard">
                        <i className='bx bxl-whatsapp contactCardIcon'></i>
                        <h3 className='contactCardTitle'>Whatsapp</h3>
                        <span className='contactCardData'>+380 637 910 501</span>
                        <a href="https://api.whatsapp.com/send?phone=0637910501text=Hello" className='contactButton'>Whrite me {''}
                            <i className='bx bx-right-arrow-alt contactButtonIcon'></i>
                        </a>
                    </div>

                </div>

            </div>

            <div className="contactContent">
                <h3 className='contactTitle'>Write me your project</h3>

                <form className='contactForm'>
                    <div className="contactFormDiv">
                        <label className='contactFormTag'>Name</label>
                        <input type="text" name='name' className='contactFormInput' placeholder='Write your name'/>
                    </div>

                    <div className="contactFormDiv">
                        <label className='contactFormTag'>Email</label>
                        <input type="email" name='name' className='contactFormInput' placeholder='Write your email'/>
                    </div>


                    <div className="contactFormDiv">
                        <label className='contactFormTag'>Project</label>
                        <textarea name="project" className='contactFormInput contactFormArea' cols="30" rows="10" placeholder='Write your project'></textarea>
                    </div>

                    <button href="#contact" className='button buttonFlex'>
                        Send Message
                        <i class="uil uil-location-arrow"></i>
                    </button>




                </form>



            </div>

        </div>

    </section>
    
  )
}

export default Contact
