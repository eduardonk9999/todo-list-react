import React, { useState } from 'react'

import { Container } from './styles';
import ListIten from '../List/index';



export default function Main() {
  return (
    <>
      <Container>
        <form action="">
          <input type="text" placeholder="Insira um Item" />
          <button type="button">enviar</button>
        </form>

        <ListIten  />
      </Container>
    </>
  )
}
