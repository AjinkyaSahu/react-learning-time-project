import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position :absolute;
    left: ${props => props.position ==='left' ? '20px':'380px'};
    top:20px;
    background-color:${props => props.lampOn ? 'orange':'lightgrey'};
    width:100px;
    height:100px;
    border-radius:50%;
    border: 1px solid black;
`;



function Lamp({lampOn,position}) {
    return (
        <Wrapper  lampOn={lampOn}  position={position} />  
    )
}

export default Lamp

