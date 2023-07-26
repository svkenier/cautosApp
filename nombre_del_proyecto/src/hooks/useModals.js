import React from 'react'
import { useState } from 'react';

const useModals = () => {

    const [openModalRegister, setOpenModalRegister] = useState(false);
   
 

    const handleModalRegister = () =>{
        setOpenModalRegister(true)
    }

    const closeAllModals = () =>{
        setOpenModalRegister(false)
    }
 
  return {
    openModalRegister,
    handleModalRegister,
    closeAllModals
  }
}



export default useModals