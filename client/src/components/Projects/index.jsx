import React from 'react'
import Works from './works'
import './style.scss'

const Projects = () => {
  return (
    <section className='project section' id='portfolio'>
        <h2 className='sectionTitle'>Portfolio</h2>
        <span className='sectionSubtitle'>Most recent works</span>
        <Works/>

    </section>
  )
}

export default Projects
