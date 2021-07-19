import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './button';
import Lamp from './lamp';

const Box = styled.div`
    width:500px;
    height:500px;
    position:relative;
    border: solid 2px black;
    margin 0 auto;
`;


function Room() {
    
    const initialState = true
    const [IsLampOneOn, setIsLampOneOn] = useState(initialState)
    const [IsLampTwoOn, setIsLampTwoOn] = useState(initialState)

    const handleLightSwitchOne  = ()=> setIsLampOneOn(prev => !prev);
    const handleLightSwitchTwo  = ()=> setIsLampTwoOn(prev => !prev);


    return (
        <Box>
            <Lamp position="left" lampOn={IsLampOneOn} ></Lamp>
            <Lamp position="right" lampOn={IsLampTwoOn} ></Lamp>
            <Button
                name="one"
                callback={handleLightSwitchOne}
                switchOn={IsLampOneOn}
                position='left'
            />
            <Button
                name="two"
                callback={handleLightSwitchTwo}
                switchOn={IsLampTwoOn}
                position='right'
            />
        </Box>
    )
}

export default Room
