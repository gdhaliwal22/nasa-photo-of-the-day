import React from "react"




const Card = props => {

    return(
        <div className="Main">
            <h2>{props.title}</h2>
            <img src={props.photo} alt="" />
            <p>{props.info}</p>
            <h3>{props.time}</h3>

        </div>
    )
};


export default Card;