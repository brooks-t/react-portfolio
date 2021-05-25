import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

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
            </Container>
        )
    
    }

}

export default Portfolio;