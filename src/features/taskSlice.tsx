import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from "../types/types";

type InitialState = {
  task:Task[]
}

const initialState:InitialState= {
  task: []

};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {

    addTask :  (state, { payload }: PayloadAction<Task>)=> {
      state.task = [...state.task,payload]
      // const storeData = async () => {
      //     await AsyncStorage.setItem('task',JSON.stringify(state.task) )
      // }
      // storeData()
    },

    removeTask : (state, { payload }: PayloadAction<Task>) => {
      state.task = state.task.filter(item => item.title !== payload.title)
    },

    taskDone : (state, { payload }: PayloadAction<Task>) => {
       state.task.map(item =>{
          if(item.title === payload.title){
            item.done = !item.done
          }
       })
    },

   

  },
});
export const { addTask,removeTask,taskDone } = taskSlice.actions;

export default taskSlice.reducer;
