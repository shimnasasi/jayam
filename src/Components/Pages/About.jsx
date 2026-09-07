import React from 'react'
import AboutBanner from '../Layout/AboutBanner'
import AboutStory from '../Layout/AboutStory'
import MissionVision from '../Layout/MissionVision'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import AboutValues from '../Layout/AboutValues'
import WhyJayam from '../Layout/WhyJayam'
import AboutStats from '../Layout/AboutStats'
import AboutContact from '../Layout/AboutContact'


const About = () => {
    return (
        <div>
            <Navbar />
            <AboutBanner />
            <AboutStory />
            <MissionVision />
            <AboutValues/>
            <WhyJayam />
            <AboutStats/>
            <AboutContact/>
          
            <Footer/>

        </div>
    )
}

export default About