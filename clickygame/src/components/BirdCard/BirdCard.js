import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default BirdCard;