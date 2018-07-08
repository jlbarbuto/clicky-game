import React from "react";
import "./Nav.css";

const Nav = props => (
    <div className="nav">
        <span className="homelink"><a href="/">Click Game</a></span>
        <span className="title"><h2>{props.message}</h2></span>
        <span className="score">Score: {props.currScore} | Top Score: {props.topScore}</span>
    </div>
);

export default Nav;