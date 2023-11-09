import React from 'react'
import { styled } from 'styled-components'
import {
       BsFillPlayCircleFill,
       BsFillPauseCircleFill, 
       BsShuffle,
       } from 'react-icons/bs'
    import {CgPlayTrackNext, CgPlayTrackPrev} from "react-icons/cg";
    import {FiRepeat} from "react-icons/fi"
    import { useStateProvider } from '../utils/StateProvider';


export default function PlayerControls() {
    const [{token, playerState}, dispatch] = useStateProvider()

  return <Container>
       <div className= "shuffle">
        <BsShuffle/>
       </div>

       <div className= "previous">
        <CgPlayTrackPrev/>
       </div>

       <div className= "state">
        {playerState ? <BsFillPlayCircleFill/> : <BsFillPauseCircleFill/>}
       </div>

       <div className= "next">
        <CgPlayTrackNext/>
       </div>

       <div className= "repeat">
        <FiRepeat/>
       </div>
  </Container>
  
}

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
svg{
    color: #b3b3b3;
    transition : 0.2s ease-in-out;
    &:hover{
        color: white;
    }
}
.state{
    svg{
        color: white;
    }
}
.previous,.next,.state{
    font-size: 2rem;
}

`
