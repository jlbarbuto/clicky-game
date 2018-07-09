import React from "react";
import "./Header.css";

const Header = props => (
    <div className="jumbotron">
        <h1 className="display-4">{props.directions}</h1>
        <h3>Click on a flightless bird to earn points, but don't click them more than once!</h3>
        <p>Score: {props.currScore} | Top Score: {props.topScore}</p>
    </div>
);

export default Header;