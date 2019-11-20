import React, {useState} from "react";
// using hooks
import ReactMapGL, {Marker} from "react-map-gl";
// import data up here
// ex: import * as location from "./meetup.json" or whatever
import MarkerIcon from "./icons8-marker-24.png";

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 38.889248,
        longitude: -77.050636,
        height: '50vh',
        width: '50vw',
        zoom: 10
    });
    

    return (
        <div>
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                // the token is in the .env.local file; this is included in .gitignore, so the token is hidden in the repo
                mapStyle="mapbox://styles/board-game-meetup/ck363rzy91i821cmuawnug3v4"
                onViewportChange={(viewport) => {setViewport(viewport)}}
            >
                {/* This is how you insert markers for a coordinate
                    <Marker 
                        key={meetup.id}
                        latitude={props.location[index of latitude in coordinates array]}
                        longitude={props.location[index of longitude in the coordinates array]}
                    >
                        <div>img/svg of marker here!</div>
                    </Marker> */}
                <img src={MarkerIcon}></img>
            </ReactMapGL>
        </div> 
    )
} 

// https://www.youtube.com/watch?v=JJatzkPcmoI