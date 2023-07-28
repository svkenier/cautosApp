import React from 'react'
import { useState } from 'react'


const useBrowserAddress = () => {
  const [address, setAddress] = useState("")


  const handleAddress = (destinationAddress) =>{
    setAddress(destinationAddress)
  }
  return {
    address,
    handleAddress
}
}

export default useBrowserAddress