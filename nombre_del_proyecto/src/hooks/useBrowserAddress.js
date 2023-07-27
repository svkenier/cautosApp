import React from 'react'
import { useState } from 'react'

const useBrowserAddress = (destinationAddress) => {
  const [address, setAddress] = useState(destinationAddress)


  return {
    address,
    setAddress
}
}

export default useBrowserAddress