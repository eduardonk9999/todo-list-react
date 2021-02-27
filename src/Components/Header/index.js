import React from 'react'

import { Container } from './styles';
import Logo from '../../assets/images/Logo.png';

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt="TODOLIST"/>
    </Container>
  )
}
