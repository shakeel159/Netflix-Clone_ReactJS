import React from "react";


function Card({img, title, description}){
    return(
        <div className="Box">
            <div className="Card">
                <img src={img}></img>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;