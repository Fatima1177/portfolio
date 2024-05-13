import React from 'react'
import Data from './data'
import Social from './social'
import './style.scss'

const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className="homeContainer container grid">
            <div className="homeContent grid">
                <Social/>

                <div className="homeImg">
                    <Data/>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Home