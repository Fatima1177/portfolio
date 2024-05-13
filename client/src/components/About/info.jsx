import React from 'react'

const Info = () => {
  return (
    <div className="aboutInfo grid">
        <div className="aboutBox">
            <i class="uil uil-award-alt aboutIcon"></i>
            <h3 className="aboutTitle">Experience</h3>
            <span className='aboutSubtitle'>0 Years Working</span>
        </div>

        <div className="aboutBox">
            <i class="uil uil-bag aboutIcon"></i>
            <h3 className="aboutTitle">Completed</h3>
            <span className='aboutSubtitle'> 5+ Projects</span>
        </div>

        <div className="aboutBox">
            <i class="uil uil-comment-question aboutIcon"></i>
            <h3 className="aboutTitle">Support </h3>
            <span className='aboutSubtitle'>Online 24/7 </span>
        </div>

    </div>
  )
}

export default Info