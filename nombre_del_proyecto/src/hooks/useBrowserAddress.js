import React from 'react'
import { useState } from 'react'

const useBrowserAddress = () => {
  const [address, setAddress] = useState("Avenida Guajira, Zona Industrial Norte, Maracaibo 4001, Zulia")


  return {
    address,
    setAddress
}
}

export default useBrowserAddress