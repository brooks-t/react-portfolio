import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Footer from "./Footer";

import subster from "../img/0-subster.png";
import travelBuddy from "../img/0-travel-buddy.png";
import userDirectory from "../img/0-user-directory.png";
import fitnessTracker from "../img/0-fitness-tracker.png";
import weatherDashboard from "../img/weather.png";
import codeQuiz from "../img/0-code-quiz.png";

import "../styles/Portfolio.css";

class Portfolio extends Component {

    render() {
        return (
            <Container  fluid="-fluid">
                <Row>
                    <Col size = "md-12">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <Hero />
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <AboutMe />
                    </Col>
                </Row>
                <div className="shaded">
                    <Row>
                        <Col size = "md-12">
                            <h2 id="my-projects-title">My Projects</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col size = "md-12">
                            <Project 
                                image={subster}
                                alt="subster app"
                                link="https://subster.herokuapp.com/"
                            />
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col size = "md-12">
                        <Project 
                            image={travelBuddy}
                            alt="travel buddy app"
                            link="https://brooks-t.github.io/travel-buddy/"
                        />
                    </Col>
                </Row>
                <div className="shaded">
                    <Row>
                        <Col size = "md-12">
                            <Project 
                                image={userDirectory}
                                alt="user directory app"
                                link="https://employee-directory-brooks.herokuapp.com/"
                            />
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col size = "md-12">
                        <Project
                            image={fitnessTracker}
                            alt="fitness tracker app"
                            link="https://bt-fitness-tracker.herokuapp.com/"
                        />
                    </Col>
                </Row>
                <div className="shaded">
                    <Row>
                        <Col size = "md-12">
                            <Project 
                                image={weatherDashboard}
                                alt="weather dashboard app"
                                link="https://brooks-t.github.io/weather-dashboard/"
                            />
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col size = "md-12">
                        <Project 
                            image={codeQuiz}
                            alt="code quiz app"
                            link="https://brooks-t.github.io/code-quiz/"
                            />
                    </Col>
                </Row>
                <div id="footer-color">
                    <Row>
                        <Col size="md-12">
                        <h2 id="contact-me-title">Contact Me</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col size = "md-12">
                            <Footer />
                        </Col>
                    </Row>
                </div>
                
            </Container>
        )
    
    }

}

export default Portfolio;