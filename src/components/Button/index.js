import React from "react";
import { Wrapper } from "./Button.styles";

const Button = ({ text, callBack }) => {
    return (
        <Wrapper type="button" onClick={callBack}>
            {text}
        </Wrapper>
    );
};

export default Button;
