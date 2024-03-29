import React from 'react'

const TodoForm = ({handleSubmit,todo,setTodo,editId}) => {
  return (
    <div>
      <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter Task" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'>{editId ? "Edit":"Go"}</button>
      </form>
    </div>
  )
}

export default TodoForm
