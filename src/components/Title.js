import React from "react";
import styled from "styled-components";

const BigTitle = styled.h1`
color: red;
font-size: 3em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid red;
border-radius: 3px;
`;

const Title = props => {
    return (
        <div className="title">
            <BigTitle>{props.title}</BigTitle>
        </div>
    )
}

export default Title;