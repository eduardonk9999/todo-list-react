import React, { useState, useEffect } from 'react';
import { List } from './styles';



export default function ListIten(prop) {


  const todos = ['Comprar Pão', 'Comprar Batata']

  const [todo, setTodos] = useState();

  useEffect(() => {
    console.log(prop)
  })


  function handleDelet() {
    console.log(prop);
  }

  return (
    <List>
      {todos.map(todo =>
        <li key={todo}>
         
        </li>
      )}
    </List>
  )
}
