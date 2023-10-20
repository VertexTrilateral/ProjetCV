import React from "react";
import "./About_Me.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Moi from "./img/Moi.jpg";


const About_Me = () => {
    return (
        <Container fluid className="aboutMe">
            <Row>
                <Col>
                <h1 className="aboutMeTitle">À Propos</h1>
                <h2 className="aboutMeSubtitle">Un peu plus sur moi, mais, pas beaucoup</h2>
                </Col>
            </Row>
            <Row className="aboutMeRow">
                <Col className="imgCol">
                <img className="Moi" src={Moi} alt="Me"/>
                </Col>            
                <Col className="textCol">
                    <p className="aboutMeText">
                    Je suis un étudiant en développement 'Full Stack' avec une solide expérience de plus de 17 ans dans le secteur financier,  
                    principalement en assurance-vie et en fonds d'investissement. <br />
                    _____________________________________________________________________________________________________________________________________________<br /> <br />
                 
                    Passionné par la résolution de problèmes et la création d'expériences utilisateur engageantes, 
                    je suis toujours prêt à apprendre et à évoluer. <br />
                    _____________________________________________________________________________________________________________________________________________<br /> <br />
                    - J'ai obtenu mon AEC en Programmation et Analyse Informatique au Collège LaSalle. <br />
                    - Mon DEC en 'Creative Arts' au CEGEP Champlain (Champlain Regional College - St-Lambert Campus). <br />
                    - Je détiens aussi un DEP en Mécanique Automobile effectué au Centre de Compétence Rive-Sud (CFCRS). <br /> <br />
                    Je suis un joueur d'équipe qui cherche constamment à se perfectionner et à grandir dans le domaine.
                    </p>
                    <Row className="aboutBtn">               
                        <Link to="/contact">
                            <button className="aboutMeBtn">Contactez-moi</button>
                        </Link>              
                    </Row>
                </Col>
            </Row>           
        </Container>
    );  
}

export default About_Me;