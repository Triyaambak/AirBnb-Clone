import React from "react";

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <img src={props.img} alt="" className="card-image"></img>
                <div className="card-stats">    
                        <img src={require('../images/Star.png')} className="card-star" alt=""></img>
                    <span>{props.rating}</span>
                    <span className="grey">({props.reviewCount}) • </span>
                    <span className="grey">{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}