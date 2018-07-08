import React from "react";
import "./BirdCard.css";

const BirdCard = props => (
    <div className="card" key={props.id} onClick={() => props.handleBirdClick(props.id, props.clicked)}>
        <div className="img-container">
            <img id={props.name} alt={props.name} src={props.image} />
        </div>
    </div>
);

export default BirdCard;