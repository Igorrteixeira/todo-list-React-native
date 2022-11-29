import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { removeTask,taskDone } from '../../features/taskSlice'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import React from 'react'
import { styles as S } from './styled'
import { Task } from '../../types/types'
import {useDispatch} from 'react-redux'

type Props = {
  task:Task[]
}

const Card = (props:Props) => {
  const dispatch = useDispatch()

  return (
      <FlatList style={{marginLeft:25,}} data={props.task} renderItem={({item})=>(

        <View style={S.container}>
        {!item.done ?
        <Entypo name="circle" size={24} color="#1E6F9F"
        onPress={()=>dispatch(taskDone(item))}
        /> :
        <AntDesign name="checkcircle" size={24} color="#5E60CE"
        onPress={()=>dispatch(taskDone(item))}
        />
        }
        <Text
         onPress={()=>dispatch(taskDone(item))}
         style={item.done?[S.title,{textDecorationLine:'line-through'}]: S.title} >{item.title}</Text>
        
        <AntDesign name="delete" size={20} color="#808080"
        onPress={()=>dispatch(removeTask(item))}  />
        </View>
     )}/>    
  )
}

export default Card