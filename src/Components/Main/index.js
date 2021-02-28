import React, { useState } from 'react'

import { Container } from './styles';




export default function Main() {
  const [item, setItem] = useState([]);

  

  const [ todos, setTodos ] = useState([])

  function handleExecutList() {
    setTodos([...todos, item])
  }

  function deleteItem(tech) {
    const removeTodo = [...todos].filter(todo => todo !== tech);
    // console.log(tech)

    setTodos(removeTodo)
    console.log(removeTodo)
   
  }


  return (
    <>
      <Container>
        <form action="">
          <input type="text" onChange={event => setItem(event.target.value)} placeholder="Insira um Item" />
          <button type="button" onClick={handleExecutList}>enviar</button>
        </form>

        <ul>
          {todos.map(todo =>
            <li key={todo}>
              <span>{todo}</span>
              <button type="button" onClick={() => deleteItem(todo)}>x</button>
            </li>)}
        </ul>
      </Container>
    </>
  )
}
