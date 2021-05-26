import React, { Component } from "react";
import "../styles/Project.css";

function Project(props) {
        return (
            <section id="projects">
                <a href={props.link}><img className="main-work-image" src={props.image} alt={props.name}/></a>
            </section>
        )
}

export default Project;