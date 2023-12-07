import React from "react";

export default function Card() {
    return (
        <div>
            <div className="card">
                <img src={require('../images/body1.png')} alt=""></img>
                <div className="card-stats">
                    <div className="card-body-ln1">
                        <img src={require('../images/Star.png')} alt=""></img>
                        <p>5.0 (6).USA</p>
                    </div>
                    <div className="card-body-ln2">
                        <p>Life lessons with Katie Zaferes</p>
                    </div>
                    <div className="card-body-ln3">
                        <p>From $136 / person </p>
                    </div>
                </div>
            </div>
        </div>
    )
}