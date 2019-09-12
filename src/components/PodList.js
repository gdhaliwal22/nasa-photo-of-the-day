import React, { useState, useEffect }from "react";
import axios from "axios";
import PodCard from "./PodCard";



const CreateData = () => {

const [title, setTitle] = useState();
const [url, setPhoto] = useState();
const [explanation, setExplanation] = useState();
const [date, setDate] = useState();


useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(response => {
        setTitle(response.data.title);
        setPhoto(response.data.url);
        setExplanation(response.data.explanation);
        setDate(response.data.date);
        console.log(response)
    });
},[]);

return(
    <PodCard
    title = {title}
    photo = {url}
    time = {date}
    info = {explanation}
    />
)
}

export default CreateData