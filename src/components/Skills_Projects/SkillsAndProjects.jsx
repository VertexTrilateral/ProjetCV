import React from "react";
import "./SkillsAndProjects.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Skills from "./img/Skills.jpg";

const SkillsAndProjects = () => {
    return (
        <Container fluid className="skillsProjects">
            <Row>
                <Col>
                    <h1 className="skillsProjectsTitle">Expérience et Projets</h1>
                </Col>
            </Row>
            <Row className="skillsRow">
                <Col className="imgCol">
                    <img className="Skills" src={Skills} alt="Skills"/>
                </Col>
                <Col className="textCol">
                    <p className="skillsProjectsText">
                    <h3>Voici une liste de mes compétences et de mes projets.</h3>
                    Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla.
                    Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla.
                    <br />
                    <br />
                    Aussi, j'ai travaillé de concert avec des collègues de travail pour développer des applications web et mobiles, dont voici quelques exemples: <br />
                    Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla.
                    Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla.
                    <br />
                    <br />
                    J'ai aussi travaillé sur des projets personnels, dont voici une liste non-exhaustive: <br />
                    Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla.
                    Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla.
                    <br />
                    <br />
                    Pour conclure, <br />
                    Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla.
                    Bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla, bla.
                    <br />
                    <br />
                    Vous pouvez me contacter pour plus d'informations, en cliquant sur le bouton ci-dessous.
                    </p>
                               
                    <Row className="skillsProjectsBtn">
                        <Link to="/contact">
                            <button className="skillsProjectsBtn">Contactez-moi</button>
                        </Link>
                    </Row>
                </Col> 
            </Row>
        </Container>
    );
}

export default SkillsAndProjects;