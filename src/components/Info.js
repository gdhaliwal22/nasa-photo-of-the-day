import React from "react";
import styled from "styled-components";

const BlogText = styled.p`
    font-size: 1.2em;
    line-height: 1.5;
    margin: 40px;
    text-align: left;
`;

const Info = props => {
    return (
        <div className="blog">
            <BlogText>{props.info}</BlogText>
        </div>
    )
}

export default Info;