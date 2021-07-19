import React from 'react'
import styled from 'styled-components'

const Wrapper2 = styled.button`
    position :absolute;
    left: ${props => props.position ==='left' ? '20px':'380px'};
    top:320px;
    width:100px;
    height:50px;
    border-radius:10px;
    border: 1px solid black;
    cursor : pointer;

`;



function Button({callback,position,switchOn}) {
    return (
        <Wrapper2  onClick={callback}  position={position}>
            {switchOn ? "On" : "Off"}
        </Wrapper2>    
    )
}

export default Button

