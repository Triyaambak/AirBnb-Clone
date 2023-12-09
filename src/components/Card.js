import React from "react";

export default function Card() {
    return (
        <div>
            <div className="card">
                <img src={require('../images/body1.png')} alt="" className="card-image"></img>
                <div className="card-stats">    
                        <img src={require('../images/Star.png')} className="card-star" alt=""></img>
                    <span>5.0</span>
                    <span className="grey">(6) • </span>
                    <span className="grey">USA</span>
                </div>
                <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
            </div>
        </div>
    )
}