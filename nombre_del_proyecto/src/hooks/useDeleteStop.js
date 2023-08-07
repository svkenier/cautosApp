import React from 'react'
import { useContext } from 'react'
import { StopsContext } from '../context/StopsContext.jsx';
const useDeleteStop = () => {

const {stops,setStops} = useContext(StopsContext)


const handleDelete = (id) =>{

 setStops(stops.filter((item)=> id != item.id))

}

  return {
    handleDelete
  }
}

export default useDeleteStop