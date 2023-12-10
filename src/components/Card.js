import React from "react";

export default function Card(props) {
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div>
            <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src={props.card.coverImg} alt="img" className="card-image"></img>
                <div className="card-stats">    
                        <img src='../images/Star.png' className="card-star" alt=""></img>
                    <span>{props.card.stats.rating}</span>
                    <span className="grey">({props.card.stats.reviewCount}) • </span>
                    <span className="grey">{props.card.location}</span>
                </div>
                <p>{props.card.title}</p>
                <p><span className="bold">From ${props.card.price}</span> / person</p>
            </div>
        </div>
    )
}