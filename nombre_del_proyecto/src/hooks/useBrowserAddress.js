
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


const useBrowserAddress = () => {
  const [address, setAddress] = useState({})
  const [stops, setStops] = useState([]);

  console.log("address use", address)
  
  
  const handleAddress = (destinationAddress) =>{
    setAddress(destinationAddress)
    setStops([...stops,destinationAddress])
    console.log('destino',stops); 
    
  }

  useEffect(() => {
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('stops', jsonValue);
      } catch (e) {
        console.log( "saving error")
      }
    };
    storeData(stops);
    }, [stops])
 

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('stops');
         if (jsonValue != null) {
            let result = JSON.parse(jsonValue)
            setStops(result )
            console.log("AQUI",result)
         } ;
        
      } catch (e) {
        console.log(" error reading value")
      }
    };

    getData()





 }, [])






  const handleDestination = () =>{
  }
  console.log("destinaion use", stops)


  
  return {
    address,
    stops,
    handleAddress,
    setAddress,
    setStops
}
}

export default useBrowserAddress