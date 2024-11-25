import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Nancy Mary R</b> and I am from Tamil Nadu, India.
            I'm a pre-final year college student pursuing <b>BTech in IT</b>. <br/><br/>
            I have done an internship in <b>Web development</b> at Motioncut.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow.<br/>
            
          </p>
        </div>

        

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Javascript' />
        <Skills skill='HTML'/>
        <Skills skill='CSS'/>
        <Skills skill='PHP' />
        <Skills skill='C' />
        <Skills skill='Python' />
        <Skills skill='Java' />
        
        
        
        
      </div>
    </>
  )
}

export default About