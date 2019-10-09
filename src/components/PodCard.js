import React from "react";




const PodCard = props => {
    return(
        <div className="main">
            <h1>{props.title}</h1>
            <img src={props.picture} />
            <p>{props.day}</p>
            <p>{props.info}</p>
        </div>
    )
}

export default PodCard;