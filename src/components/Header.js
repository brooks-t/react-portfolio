import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {

    render() {
        return (
            <nav className="d-flex justify-content-between align-items-center" id="nav-bar">
                <a href="#about-me-content">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact-me-content">Contact Me</a>
                <a href="./assets/img/brooks-resume_05-11-2021.pdf" target="_blank">Resume</a>
            </nav>
        )
    }
}

export default Header;