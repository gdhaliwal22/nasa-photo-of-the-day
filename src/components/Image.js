import React from "react";
import styled from "styled-components";

const FullScreenImage = styled.img`
    width: 75vw;
    height: 50vh;
`;

const Image = props => {
    return (
        <div className="image">
            <FullScreenImage src={props.photo} />
        </div>
    )
}

export default Image;