import { useContext } from 'react'
import checkIcon from './assets/check-icon.png'
import { scrollToSection } from './Context'
function Section2(){
  const{scrollRef2} = useContext(scrollToSection)
  return(
    <div ref={scrollRef2} className="section-2-container">
      <span>Explore My<h2>Experience</h2></span>
      <div className='fullstackContainer'>
        <div className="frontendContainer">
          <p>Frontend Development</p>
          <div className="frontendSkills">
            <span><img src={checkIcon}></img> HTML</span>
            <span><img src={checkIcon}></img> CSS</span>
            <span><img src={checkIcon}></img> JavaScript</span>
            <span><img src={checkIcon}></img> React JS</span>
          </div>
        </div>
        <div className="backendContainer">
          <p>Backend Development</p>
          <div className="backendSkills">
            <span><img src={checkIcon}></img> MongoDB</span>
            <span><img src={checkIcon}></img> Node/Express JS</span>
            <span><img src={checkIcon}></img> Git/GitHub</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default Section2