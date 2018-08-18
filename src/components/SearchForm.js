import React from 'react'
import icon from './search.png'

let AddTodoForm = ({ onSubmit }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onSubmit(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          <img src={icon} alt=""/>
        </button>
      </form>
    </div>
  )
}

export default AddTodoForm