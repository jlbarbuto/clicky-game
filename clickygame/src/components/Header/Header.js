import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <row>
            <h1>Clicky Game!</h1>
            <h5>Click on an image to earn points, but don't click on any more than once!</h5>
        </row>
    </div>
);

export default Header;