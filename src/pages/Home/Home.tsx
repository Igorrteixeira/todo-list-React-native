import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormatDateBr } from '../../services/formatDate';
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { addTask, taskLocalStore } from '../../features/taskSlice'
import { Task } from '../../types/types'
import Card from '../../components/Card/Card'
import Sumary from '../../components/Sumary/Sumary';
import { Text, View } from "react-native"
import * as S from "./style"
import { StatusBar } from 'expo-status-bar';


const Home = () => {
  const [title, setTitle] = useState<string>('')
  const [done, SetDone] = useState<boolean>(false)
  const [itsDone, setItsDone] = useState<string>('maids')
  const dispatch = useDispatch()
  const { task } = useSelector((state: RootState) => state.task)


  useEffect(() => {
    const getStorage = async () => {
      const response = await AsyncStorage.getItem('@task')
      if (response) {
        const rr = JSON.parse(response as string)
        dispatch(taskLocalStore(rr))
      }
    }
    getStorage()
  }, [1])

  const ndate = String(new Date())

  const CreateTask = () => {
    const newTask: Task = {
      title,
      done,
      date: FormatDateBr(ndate)
    }
    dispatch(addTask(newTask))
    setTitle("")
  }

  return (
    <S.Container >
      <StatusBar backgroundColor='#4EA8DE' />
      <S.Logo>
        <S.ContTitle>
          <S.Title style={{ color: '#4EA8DE' }}>to</S.Title>
          <S.Title style={{ color: '#5E60CE' }}>do</S.Title>
          <AntDesign style={{ margin: 10 }} name="exception1" size={24} color='#4EA8DE' />
        </S.ContTitle>
        <S.From>
          <S.Input
            placeholder='Digite uma nova tarefa...'
            placeholderTextColor={'#727070'}
            onChangeText={setTitle}
            value={title}
          />
          <S.Button>
            <AntDesign name="pluscircleo" size={20} color="white"
              onPress={() => CreateTask()} />
          </S.Button>
        </S.From>
      </S.Logo>
      <S.Sumary>
        <Sumary
          text='Criadas'
          color='#4EA8DE'
          count={task.length}
          handleClick={() => setItsDone('maids')}
        />
        <Sumary
          text='Concluidas'
          color='#5E60CE'
          count={task.filter(item => item.done !== false).length}
          handleClick={() => setItsDone('completed')}
        />
      </S.Sumary>
      {task.length < 1 ?
        <S.NotTask>
          <AntDesign style={{margin:10,}} name="profile" size={34} color="#808080" />
          <Text style={{ color: "#808080",fontWeight:'bold' }}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={{ color: "#808080" }}> Crie tarefas e organize seus itens a fazer</Text>
        </S.NotTask> :
        <Card task={task} itsDone={itsDone} />}
    </S.Container>
  )
}

export default Home