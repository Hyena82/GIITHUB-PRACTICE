import { createStore } from 'redux';

// Define your initial state
const initialState = {
  todoList: [
    {
      id: "1",
      name: 'Learn Redux'
    }
  ]
};

// Define your reducer function
const reducer = (state = initialState, action) => {
  // Handle different actions to update the state
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1
      }

    case "ADDTODO":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload
        ]
      }

    case "REMOVETODO":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload)
      }

    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
