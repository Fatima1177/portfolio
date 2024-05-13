import React from 'react'
import Frontend from './frontend'

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='sectionTitle'>Skills</h2>
        <span className='sectionSubtitle'>My technical level</span>

        <div className="skillsContainer container grid">
            <Frontend/>

        </div>

    </section>
  )
}

export default Skills