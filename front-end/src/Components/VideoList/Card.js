import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const CardStyle = {
    "text-align": "left",
    "margin":0,
    "margin-left":10,
    "padding":0,
    "float":"left",
    "maxHeight" : "180px",
    "overflow": "hidden",
    "text-overflow": "ellipsis",

}

export const Card = (props) => {

    const video = props.video;



    return (
        <div class="container" styles={{padding:2,  "word-wrap": "break-word"}}>
            <div class="card mb-3" style={{"maxHeight" : "180px", border:"none"}}>
                <div class="row" >
                    <div class="col-3" style={{"align-content" : "center"}}>
                        <img src={video.img} height="180" width="300" alt="..." style={{"marginTop" : 0}}></img>
                    </div>
                    <div class="col-8">
                        <div class="card-body" style={CardStyle}>
                            <h5 class="card-title" style={{"margin": 0}}>{video.title}</h5>
                            <p class="card-text channelTitle" style={{"margin": 0}}><small class="text-muted" >{video.channelTitle}</small></p>
                            <p class="card-text viewCount" style={{"margin": 2}}>{video.viewCount + " Views"}</p>
                            <p class="card-text description" style={{"overflow": "hidden", "text-overflow": "ellipsis", "maxHeight":"45px"}} ><small class="text-muted">{video.description}</small></p>
                            <p class="card-text publishedAt"><small class="text-muted">{video.publishedAt}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div >
    )
}
