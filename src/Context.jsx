import React, { createContext,useRef } from 'react'

export const scrollToSection = createContext()
export const Context = ({children}) => {
  const scrollRef1 = useRef(null)
  const scrollRef2 = useRef(null)
  const scrollRef3 = useRef(null)
  const scrollRef4 = useRef(null)
  
  function handleClick(num){
    num.current?.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <scrollToSection.Provider value={{scrollRef1,scrollRef2,scrollRef3,scrollRef4,handleClick}}>
      {children}
    </scrollToSection.Provider>
  )
}
