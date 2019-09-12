import React from "react"


import Info from "../components/Info";
import Time from "../components/Time";
import Title from "../components/Title";
import Image from "../components/Image";

const Card = props => {

    return(
        <div className="Main">
            <Title title={props.title} />
            <Image photo={props.photo} />
            <Info info={props.info} />
            <Time time={props.time} />

        </div>
    )
};


export default Card;