import React, { Component } from "react";

class AboutMe extends Component {

    render() {
        return (
            <section id="work-content">
            <div class="main-work">
                <a href="https://subster.herokuapp.com/" target="_blank"><img className="main-work-image" src="assets/img/subster.png" alt="placeholder image"/></a>
                <div className="main-work-image-text">
                    <h3>Subster</h3>
                    <p>Handlebars | Node.js | MySQL</p>
                    <br/>
                    <p><a href="https://github.com/brooks-t/subscription-manager" target="_blank">GitHub</a></p>
                </div>
            </div>
        </section>
        )
    }
}

export default AboutMe;