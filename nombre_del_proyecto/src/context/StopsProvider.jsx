import React from 'react'
import { useState } from "react";
import { StopsContext } from './StopsContext';


export const StopsProvider = ({children}) => {
  const [stops, setStops] = useState([]);
  


  return (
    <StopsContext.Provider value={{stops,setStops}}>
        {children}
    </StopsContext.Provider>
  )
}
