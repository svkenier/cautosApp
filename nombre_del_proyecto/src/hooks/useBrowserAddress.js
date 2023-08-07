
import { useState,useContext } from 'react'
import { StopsContext } from '../context/StopsContext.jsx';




const useBrowserAddress = () => {

  const {setStops,stops} = useContext(StopsContext)
  const [address, setAddress] = useState({})
  
  const currentTime = new Date().getTime();


  
  const addStop = (destinationAddress) =>{
    setAddress(destinationAddress)
    setStops([...stops,{...destinationAddress ,title:"parada",id:currentTime}])
     
    
  }

  return {
    address,
    addStop,
    setAddress,
  
    
}
}

export default useBrowserAddress