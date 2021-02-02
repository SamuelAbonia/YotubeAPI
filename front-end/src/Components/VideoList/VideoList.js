import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card } from './Card'

import React, {
    useEffect,
    useState,
} from "react";
import { useParams } from 'react-router-dom';


export const VideoList = () => {
    const params = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try{
                const response = await fetch(`http://localhost:8000/API/videos/?query=${params.query}`, {
                    method: "GET",
                })
                const result = response.json()
                result.then(
                    data => setVideos(data))
                    .catch(error => console.log(error))
            }catch(e){
                console.log(e)
            }
        }
        fetchData()
    }, [params.query])

    return (
        <div>
            <p class="result" style={{ "text-align": "left" }}>Search results for "{params.query}"</p>
            <div>
                {videos.map(video => (
                    <Card key = {video.id} video = {video}></Card>
                ))}
            </div>
        </div>
    )
}
