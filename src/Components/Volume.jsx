import React from 'react'
import styled from "styled-components";
import {useStateProvider} from '../utils/StateProvider';

export default function Volume() {
  const [{token}] = useStateProvider()

   const setVolume = e => {

   }

  return (
    <Container>
      <input type="range" min={0} max={100} onMouseUp={(e=>setVolume(e))} />
    </Container>
  )
}

const Container = styled.div`
display : flex;
justify-content: flex-end;
align-items: 
`
