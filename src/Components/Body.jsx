import React from 'react'
import styled from 'styled-components'
import {AiFillClockCircle} from "react-icons/ai";
import { useEffect } from 'react';
import { useStateProvider } from '../utils/StateProvider';



export default function Body() {
  const [{userInfo}] = useStateProvider();

  return (
    <Container>
       <div>Body</div>
    </Container>
  )
}

const Container = styled.div `
`
