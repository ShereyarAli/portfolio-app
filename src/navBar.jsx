import { useContext, useEffect, useRef, useState } from 'react';
import { scrollToSection } from './Context';
import menuIcon from './assets/menuIconBlack.png'

function NavBar(){
  const{scrollRef1,scrollRef2,scrollRef3,scrollRef4,handleClick} = useContext(scrollToSection)
  
  const[win,setWin] = useState(window.innerWidth);
  const[show, setShow] = useState(false)

  const menuHandling = () => {
    setShow(!show)
  }
  useEffect(()=>{
    const windowResize = window.addEventListener('resize',()=>{
      setWin(window.innerWidth)
    })
  
    return()=>{
      window.removeEventListener('resize',windowResize)
  
    }
  },[])
  if( !show && win <= 700 ){
    return(
      <div className='navContainer'>
        <h3>Shereyar Ali</h3>
        <img onClick={menuHandling} src={menuIcon} alt='menu'/>
      </div>
    )
  }
  if(show && win <= 700){
    return(
      <div className='navContainer'>
      <h3>Shereyar Ali</h3>
      <img loading='lazy' onClick={menuHandling} src={menuIcon} alt='menu'/>
    
      <ul className='menuNavBar'>
        <li onClick={()=>handleClick(scrollRef1)}>About</li>
       
        <li onClick={()=>handleClick(scrollRef2)}>Experience</li>
       
        <li onClick={()=>handleClick(scrollRef3)}>Projects</li>
       
        <li onClick={()=>handleClick(scrollRef4)}>Contact</li>
       
    </ul>
  </div>   
    )
  }
  else{
    return(
      <div className='navContainer'>
        <h3>Shereyar Ali</h3>
        <ul className='navBar'>
          <li onClick={()=>handleClick(scrollRef1)}>About</li>
          <li onClick={()=>handleClick(scrollRef2)}>Experience</li>
          <li onClick={()=>handleClick(scrollRef3)}>Projects</li>
          <li onClick={()=>handleClick(scrollRef4)}>Contact</li>
        </ul>   
      </div>
    );
  }
  
}

export default NavBar