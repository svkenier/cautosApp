import React, { useState } from 'react'

const useForm = () => {

    let defaultInfo = {
     
      };

      const [userInfo, setUserInfo] = useState({})

    const handleChange = (e,nombre) => {
     
        console.log("event",e)

        setUserInfo({ ...userInfo, [nombre]: e });
       
      };

      // console.log("userInfo",userInfo)

      const handleBlur = (nombre) => {
        console.log(`El campo de ${nombre} ha perdido el enfoque`);
      };
      
    
     

    


    const handleSubmit = ()=>{}
    
  return {
    userInfo,
    handleChange,
    handleSubmit,
    handleBlur
    
  }
}

export default useForm