import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Footer from "./Footer";

import subster from "../img/0-subster.png";
import travelBuddy from "../img/0-travel-buddy.png";
import userDirectory from "../img/0-user-directory.png";
import fitnessTracker from "../img/0-fitness-tracker.png";
import weatherDashboard from "../img/weather.png";
import codeQuiz from "../img/0-code-quiz.png";


class Portfolio extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col size = "md-12">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <h1>Brooks Tiffany</h1>
                        <h2>Full Stack Developer | UX Professional</h2>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <AboutMe />
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <Project image={subster} alt="subster app"/>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <Project image={travelBuddy} alt="travel buddy app"/>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <Project image={userDirectory} alt="user directory app"/>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <Project image={fitnessTracker} alt="fitness tracker app"/>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <Project image={weatherDashboard} alt="weather dashboard app"/>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <Project image={codeQuiz} alt="code quiz app"/>
                    </Col>
                </Row>
                <Row>
                    <Col size = "md-12">
                        <Footer />
                    </Col>
                </Row>
            </Container>
        )
    
    }

}

export default Portfolio;