import React from "react";
import "./Education.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Edu from "./img/Edu.jpg";


const Education = () => {
    return (
        <Container fluid className="education">
            <Row>
                <Col>
                <h1 className="educationTitle">Éducation</h1>
                <h2 className="educationSubtitle">Un peu plus sur mon parcours académique</h2>
                </Col>
            </Row>
            <Row className="educationRow">
                <Col className="imgCol">
                <img className="Edu" src={Edu} alt="Edu"/>
                </Col>            
                <Col className="textCol">
                    <p className="educationText">
                    Décembre 2023 - J'ai obtenu mon AEC en Programmation et Analyse Informatique au Collège LaSalle. <br />
                    _____________________________________________________________________________________________________________________________________________<br /> <br />
                    Mai 2001 - Obtention de mon DEC en 'Creative Arts' au CEGEP Champlain (Champlain Regional College - St-Lambert Campus). <br />
                    _____________________________________________________________________________________________________________________________________________<br /> <br />
                    Décembre 2005 - Obtention de mon DEP en Mécanique Automobile effectué au Centre de Compétence Rive-Sud (CFCRS). <br /> <br />
                    </p>
                    <Row className="educationBtn">               
                        <Link to="/contact">
                            <button className="educationBtn">Contactez-moi</button>
                        </Link>              
                    </Row>
                </Col>
            </Row>           
        </Container>
    );  
}

export default Education;