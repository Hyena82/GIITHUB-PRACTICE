import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './todoSlice'
import generateId from '../utilities'

const ReduxToolkit = () => {
  const todoList = useSelector((state) => state.todo)
  const dispatch = useDispatch()
  const [nameValue, setNameValue] = useState('')

  const handleChange = (e) => {
    setNameValue(e.target.value)
  }

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: generateId(),
      name: nameValue
    }))
  }

  const handleRemoveTodo = (id) => {
    console.log("click");
    dispatch(removeTodo(id))
  }


  return (
    <div className="App">
      <div className="box p-4">
        <div className='d-flex'>
          <input type="text" className='form-control' value={nameValue} onChange={handleChange} />
          <button type='button' className="ms-3 btn btn-success" onClick={handleAddTodo}>ADD</button>
        </div>


        <h3 className='mt-3'>{Date.now()}</h3>

        <ul class="list-group mt-3">
          {
            todoList.map((item) =>
              <li class="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  {item.name}

                  <svg onClick={() => handleRemoveTodo(item.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                </div>

              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default ReduxToolkit