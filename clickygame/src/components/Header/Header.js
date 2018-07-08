import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <span className="homelink"><a href="/">Start Over</a></span>
        <span className="title">
            <h1>{props.directions}</h1>
            <h5>Click on a flightless bird to earn points, but don't click them more than once!</h5>
        </span>
        <span className="score">Score: {props.currScore} | Top Score: {props.topScore}</span>
    </div>
);

export default Header;