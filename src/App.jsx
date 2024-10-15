import NavBar from "./navBar"
import Hero from "./hero"
import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import Footer from "./footer"
import { useContext, useState } from "react"
import { scrollToSection } from "./Context"

function App() {
const[show,setShow] = useState(false);
function toTop(){
  scrollTo(0,0)
}
  return (
    <>
      <button className="toTopBtn" onClick={toTop}>&uarr;</button>
      <NavBar/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </>
  )
}

export default App
