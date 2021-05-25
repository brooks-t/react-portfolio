import React, { Component } from "react";
import subster from "../img/0-subster.png";

function Project(props) {
        return (
            <section id="work-content">
            <div className="main-work">
                <a href="https://subster.herokuapp.com/"><img className="main-work-image" src={props.image} alt={props.name}/></a>
            </div>
        </section>
        )
}

export default Project;