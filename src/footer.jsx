
import { useContext } from 'react';
import emailIcon from'./assets/email-icon.png'
import { scrollToSection } from './Context';
function Footer(){
  const{scrollRef1,scrollRef2,scrollRef3,scrollRef4,handleClick} = useContext(scrollToSection)
  return(
    <div ref={scrollRef4} className='contactContainer'>
      <div className='contactSubContainer1'>
      <span>Get in Touch<h2>Contact Me</h2></span>
      <div className='contactInfo'>
          <img src={emailIcon}></img>
          <p>shereyar603.aa@gmail.com</p>
      </div>
      </div>
      <div className='contactSubContainer2'>
        <ul className='footerBar'>
          <li onClick={()=>handleClick(scrollRef1)}>About</li>
          <li onClick={()=>handleClick(scrollRef2)}>Experience</li>
          <li onClick={()=>handleClick(scrollRef3)}>Projects</li>
          <li onClick={()=>handleClick(scrollRef4)}>Contact</li>
        </ul>
        <p>Copyright &copy; Shereyar Ali. All Rights Reserved</p>   
      </div>
      
    </div>
  )
}
export default Footer;