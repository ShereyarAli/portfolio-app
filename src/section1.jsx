
import experienceIcon from './assets/experience-icon.png'
import educationIcon from './assets/education-icon.png'
import { scrollToSection } from './Context'
import { useContext } from 'react'

function Section1(){
  const{scrollRef1} = useContext(scrollToSection) 
  return(
    <div ref={scrollRef1} className="section-1-container">
     <span>Get to Know<h2>About Me</h2></span> 
      <div className="aboutContainer">
        <div className="expContainer">
          <img src={experienceIcon}></img>
          <span className='expText'>Experience</span>
          <span className='expInfo'>1+ years</span>
          <span className='expInfo'>Web Developer</span>
        </div>
        <div className="educationContainer">
          <img src={educationIcon}></img>
          <span className='eduText'>Eduction</span>
          <span className='eduInfo'>B.Sc. Bachelors Degree</span>
          <span className='eduInfo'>Ongoing</span>
        </div>
      </div>
      <p className='aboutInfo'>I am a highly motivated software developer pursuing a BS in Software Engineering.I am passionate about creating innovative solutions and gain real world experience. I am dedicated to continuous learning and i am eager to contribute to impactful projects.</p>
    </div>
  )
}

export default Section1