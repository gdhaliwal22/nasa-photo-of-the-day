import React, {useEffect, useState} from "react";
import axios from "axios";
import PodCard from "./PodCard";

const PodList = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [photo, setPhoto] = useState();
    const [blog, setBlog] = useState();

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2003-03-22')
        .then(res => {
            setTitle(res.data.title);
            setDate(res.data.date);
            setPhoto(res.data.url);
            setBlog(res.data.explanation);
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })
    },[])

    return(
        <div className="container">
            <PodCard 
            title= {title} 
            picture = {photo} 
            day = {date} 
            info = {blog}
            />
        </div>
    )
}

export default PodList