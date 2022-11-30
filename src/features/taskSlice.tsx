import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Task } from "../types/types";

type InitialState = {
  task: Task[]
}

const initialState: InitialState = {
  task: []

};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {

    addTask: (state, { payload }: PayloadAction<Task>) => {
      state.task = [...state.task, payload]
      const storage = async (value: Task[]) => {
        await AsyncStorage.setItem('@task', JSON.stringify(value))
      }
      storage(state.task)
    },
    taskLocalStore: (state, { payload }: PayloadAction<Task[]>) => {
      if (state.task.length < 1) {
        state.task = payload
      }

    },
    removeTask: (state, { payload }: PayloadAction<Task>) => {
      state.task = state.task.filter(item => item.title !== payload.title)
      const storage = async (value: Task[]) => {
        await AsyncStorage.setItem('@task', JSON.stringify(value))
      }
      storage(state.task)
    },

    taskDone: (state, { payload }: PayloadAction<Task>) => {
      state.task.map(item => {
        if (item.title === payload.title) {
          item.done = !item.done
        }
      })
      const storage = async (value: Task[]) => {
        await AsyncStorage.setItem('@task', JSON.stringify(value))
      }
      storage(state.task)
    },
  },
});
export const { addTask, taskLocalStore, removeTask, taskDone } = taskSlice.actions;

export default taskSlice.reducer;
