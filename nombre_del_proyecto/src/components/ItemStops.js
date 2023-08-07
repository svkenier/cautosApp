import React from 'react'
import { Text,View, Pressable } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import useDeleteStop from '../hooks/useDeleteStop';


const itemStops = ({item,index}) => {
    const {handleDelete} = useDeleteStop() 
   const {title,id} = item

  return (
      <View style={{width:"100%",flexDirection:"column"}}>
        <View style={{flexDirection:"row",width:"100%",padding:10,alignItems:"center"}}>
        <View style={{width:"90%",flexDirection:"row",gap:15}}>
        <MaterialIcons name="location-pin" size={30} color="black" />
        <Text>{title + index}</Text>
        </View>
        <Pressable onPress={()=>handleDelete(id)}>
        <MaterialIcons name="delete" size={30} color="black" />
        </Pressable>
    </View>
    </View>
  )
}

export default itemStops