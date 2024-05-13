import React from 'react'
import { useState } from 'react'
import './style.scss'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index)=>{
        setToggleState(index)
    }

    
  return (
    <section className='qualification section'>
        <h2 className='sectionTitle'>Qualification</h2>
        <span className='sectionSubtitle'>My personel jorney</span>

        <div className="qualificationContainer container">
            <div className="qualificationTabs">
                <div className={toggleState === 1 ? "qualificationButton qualificationActive buttonFlex" : "qualificationButton buttonFlex"}>
                    <i className='uil uil-graduation-cap qualificationIcon'></i> {""}
                    Education
                </div>

                <div className={toggleState === 2 ? "qualificationButton qualificationActive buttonFlex" : "qualificationButton buttonFlex"}>
                    <i className='uil uil-briefcase-alt qualificationIcon'></i> {""}
                    Experience
                </div>
            </div>

            <div className="qualificationSection">
                <div className={toggleState === 1 ? "qualificationContent qualificationContentActive" : "qualificationContent "}>
                    <div className="qualificationData">
                        <div>
                            <h3 className="qualificationTitle">Financial business</h3>
                            <span className="qualificationSubtitle">Kyiv - Institute</span>
                            <div className="qualificationCalendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2026
                            </div>
                        </div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                    </div>
                        </div>



                    <div className="qualificationData">
                        <div></div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span  className="qualificationLine"></span>
                        </div>


                        <div>
                            <h3 className="qualificationTitle">Front-end Developer</h3>
                            <span className="qualificationSubtitle">Baku - IT INNOVATIONS ACADEMY</span>
                            <div className="qualificationCalendar">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - 2024
                            </div>
                        </div>

                        
                    </div>




                    {/*<div className="qualificationData">
                        <div>
                            <h3 className="qualificationTitle">Web Design</h3>
                            <span className="qualificationSubtitle">Spain - Institute</span>
                            <div className="qualificationCalendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                    </div>*/}


                    {/*<div className="qualificationData">
                        <div></div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span  className="qualificationLine"></span>
                        </div>


                        <div>
                            <h3 className="qualificationTitle">Art Director</h3>
                            <span className="qualificationSubtitle">Spain - Institute</span>
                            <div className="qualificationCalendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        
                    </div>  */}



                    



                </div>



                <div className={toggleState === 2 ? "qualificationContent qualificationContentActive" : "qualificationContent "}>
                    <div className="qualificationData">
                        <div>
                            <h3 className="qualificationTitle">Web Design</h3>
                            <span className="qualificationSubtitle">Spain - Institute</span>
                            <div className="qualificationCalendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                    </div>



                    <div className="qualificationData">
                        <div></div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span  className="qualificationLine"></span>
                        </div>


                        <div>
                            <h3 className="qualificationTitle">Art Director</h3>
                            <span className="qualificationSubtitle">Spain - Institute</span>
                            <div className="qualificationCalendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>
                    </div>




                    <div className="qualificationData">
                        <div>
                            <h3 className="qualificationTitle">Web Design</h3>
                            <span className="qualificationSubtitle">Spain - Institute</span>
                            <div className="qualificationCalendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualificationRounder"></span>
                            <span className="qualificationLine"></span>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification