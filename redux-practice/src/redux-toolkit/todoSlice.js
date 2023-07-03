import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    name: "Learn Redux Toolkit"
  }
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },

    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer