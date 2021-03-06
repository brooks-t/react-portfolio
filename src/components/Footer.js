import React, { Component } from "react";
import "../styles/Footer.css";

class Header extends Component {

    render() {
        return (
            <section id="contact-me-content">
                <div className="d-flex justify-content-between">
                    <a href="#">540.223.8561</a>
                    <a href="mailto:brooks.t.tiffany@gmail.com">brooks.t.tiffany@gmail.com</a>
                    <a href="https://github.com/brooks-t">GitHub</a>
                    <a href="https://www.linkedin.com/in/brookstiffany/">LinkedIn</a>
                </div> 
            </section>
        )
    }
}

export default Header;