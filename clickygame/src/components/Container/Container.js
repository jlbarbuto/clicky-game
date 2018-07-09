import React from "react";
import "./Container.css";

const Container = props => 
  <div className="container container-fluid text-center">
    {props.children}
    <a className="btn" href="/">Start Over</a>
  </div>;

export default Container;