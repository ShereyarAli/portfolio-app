import heroPic from "./assets/sherey.jpg"
import gitPic from "./assets/github.png"
import { useContext } from "react";
import { scrollToSection } from "./Context";


function Hero(){
  const {scrollRef4, handleClick} = useContext(scrollToSection)
 
  return(
    <div className="heroContainer">
      <img className="heroPic" src={heroPic} alt="Pic"></img>
      <div className="heroInfo">
        <span className="spanFirst">Hello, I'm</span>
        <span className="spanSecond">Shereyar Ali</span>
        <span className="spanThird">Web Developer</span>
        <div className="heroButtons">
          <a href="../assets/cv.pdf" download='CV.pdf' className="cvBtn" >Download CV </a>
          <button onClick={()=>handleClick(scrollRef4)} className="contactBtn" >Contact Info</button>
        </div>
        <a href="https://github.com/ShereyarAli" target="_blank" className="gitBtn"><img src={gitPic}></img></a>
      </div>
    </div>
  )
 }

 export default Hero;