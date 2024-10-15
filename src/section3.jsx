import { useContext } from 'react'
import projectPic1 from'./assets/project1.jpg'
import projectPic2 from'./assets/project2.jpg'
import projectPic3 from'./assets/project3.jpg'
import projectPic4 from'./assets/project4.jpg'
import projectPic5 from'./assets/project5.jpg'
import projectPic6 from'./assets/project6.jpg'
import { scrollToSection } from './Context'

function Section3(){
  const{scrollRef3} = useContext(scrollToSection)
  return(
    <div ref={scrollRef3} className='section-3-container'>
      <span>Some of<h2>My Projects</h2></span>
      <div className='projectContainer'>
        <div className='tictactoeCon'>
          <img src={projectPic3}></img>
          <p>Tic-Tac-Toe</p>
          <span>For Basic Understanding</span>
          <a href='https://github.com/ShereyarAli/Tic-Tac-Toe' target="_blank">Github</a>
        </div>
        <div className='weatherCon'>
          <img src={projectPic2} ></img>
          <p>Weather App</p>
          <span>For Api Learning</span>
          <a href='https://github.com/ShereyarAli/Weather-App' target="_blank">Github</a>
        </div>
        <div className='guessGameCon'>
          <img src={projectPic1}></img>
          <p>Desktop Guessing Game</p>
          <span>Using Electron Framework</span>
          <a href='https://github.com/ShereyarAli/Word-Guessing-Game' target="_blank">Github</a>
        </div>
        <div className='expenseTrackerCon'>
          <img src={projectPic4}></img>
          <p>Expense Tracker</p>
          <span>Using React JS</span>
          <a href='https://github.com/ShereyarAli/Word-Guessing-Game' target="_blank">Link</a>
      </div>
      <div className='movieAppCon'>
          <img src={projectPic5}></img>
          <p>MovieZem</p>
          <span>Using React JS</span>
          <a href='https://moviezem.netlify.com' target="_blank">Link</a>
      </div>
      <div className='chatZemCon'>
          <img src={projectPic6}></img>
          <p>ChatZem</p>
          <span>Using MERN Stack</span>
          <a href='https://github.com/ShereyarAli/ChatZem' target="_blank">Link</a>
      </div>
    </div>
  </div>
  )
}
export default Section3;