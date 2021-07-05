import React from "react";
import styled from "styled-components";

const HeaderDate = styled.h2`
    font-size: 2em;
    background-color: papayawhip;
`;

const Time = props => {
    return (
        <div className="date">
            <HeaderDate>{props.time}</HeaderDate>
        </div>
    )
}

export default Time;