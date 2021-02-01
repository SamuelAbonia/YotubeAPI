import  makrwatchLogo  from "./img/makrwatchlogo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useHistory } from "react-router-dom";
import React,  {useState} from "react";


export const Search = () => {
    const [query,setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value)
    }
    var history = useHistory();

    const handleClick = () => {
        history.push(`/videos/${query}`)
    }
    return (
        <div>
            <div class = "image-container" style={{'margin-top': 100}} >
                <img src={makrwatchLogo} class="img-fluid" alt="Makrwatch logo" style={{ filter: "opacity(75%)"}}></img>
            </div>
            <div class="input-group input-group-lg" style = {{'margin-top': 100}}>
                <input type="text" class="form-control" placeholder="Search topic on the videos you want to find"  onChange ={(event)=> handleChange(event)} aria-describedby="inputGroup-sizing-lg"></input>
                <button type="button" class="btn" style = {{background:"#24a4ac"}} onClick={()=> handleClick()}>
                    <i class="bi bi-search lg" style = {{color: "white"}}></i>
                </button>
                    
                
            </div>
        </div>
    )
}
