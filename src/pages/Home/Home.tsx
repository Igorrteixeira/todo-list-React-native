import React,{useState} from 'react'
import * as S from "./style"
import { AntDesign } from '@expo/vector-icons'; 
import {useDispatch,useSelector} from "react-redux"
import {RootState} from "../../store/store"
import { addTask } from '../../features/taskSlice'
import { Task } from '../../types/types'
import Card from '../../components/Card/Card'
import Sumary from '../../components/Sumary/Sumary';


const Home = () => {
  const [title,setTitle] = useState<string>("")
  const [done,SetDone] = useState<boolean>(false)
  const [itsDone,setItsDone] = useState<boolean>(false)
  const dispatch = useDispatch()
  const {task} = useSelector((state:RootState)=> state.task)

  const listTask = task.filter(item =>{
      if(itsDone){
        return item.done === true
      }else{
        return item
      }
  })

  const CreateTask = () => {
    const newTask:Task= {
      title,
      done
    }
    dispatch(addTask(newTask))   
  }
  
  return (
    <S.Container>
      <S.Logo>
        <S.ContTitle> 
          <S.Title style={{color:'#4EA8DE'}}>To</S.Title>
          <S.Title style={{color:'#5E60CE'}}>Do</S.Title>
          <AntDesign style={{margin:10}} name="exception1" size={24} color='#4EA8DE' />
        </S.ContTitle>

        <S.From>
          <S.Input
          placeholder='Digite um tarefa'
          onChangeText={setTitle}
          value={title}
          />
          <S.Button>
          <AntDesign name="pluscircleo" size={20} color="white"
          onPress={()=>CreateTask()}/>
          </S.Button>
          </S.From>
      </S.Logo>
      
      <S.Sumary>
      <Sumary
      text='Criadas'
      color='#4EA8DE'
      count={task.length}
      handleClick={()=>setItsDone(!itsDone)}
      />
      <Sumary
      text='Concluidas'
      color='#5E60CE'
      count={task.filter(item => item.done !== false ).length}
      handleClick={()=>setItsDone(!itsDone)}
      />
      </S.Sumary>   
      <Card task={listTask}/>
    </S.Container>
  )
}

export default Home