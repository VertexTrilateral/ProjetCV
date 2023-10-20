import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import imgCS from "./img/imgCS.jpg";


const Home = () => {
    return (
        <Container fluid className="home">
            <Row>
                <Col className="home_col">
                <h1 className="home_title">CVERIK</h1>
                <h2 className="home_subtitle">Bienvenue sur ce site créé avec REACT</h2>
                </Col>
            </Row>
            <Row className="homeRow">
                <Col className="imgCol" >
                    <img className="imgCS" src={imgCS} alt="imgCS"/>
                </Col>
                <Col className="textCol" >
                    <Row>
                        <Col>
                            <h2 className="home_subtitle">Programmeur/ Analyste en TI</h2>
                            <p>La programmation m'intéresse depuis toujours. Venez découvrir mon parcours et voir ce qui me permet de me démarquer</p>                
                        </Col>
                        <Col>
                            <h2 className="home_subtitle">Mes projets</h2>
                            <p>Vous pouvez voir mes projets personnels et professionnels, des heures de plaisir dans un contexte éprouvant,
                                menant parfois à des résultats surprenants, ou le résultat est que je deviens chaud parce que j'ai trop bu.
                            </p>           
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2 className="home_subtitle">Développement Web</h2>
                            <p>Je suis un développeur web full-stack. J'ai de l'expérience dans le développement d'applications web avec React.js, Node.js et MongoDB. 
                                Apparement!!!
                            </p>  
                        </Col>     
                        <Col>
                            <h2 className="home_subtitle">Programmation en C#</h2>
                            <p>Vraiment pas le meilleur, mais après je vais me débrouiller. Trouver, chercher. Ce n'est pas un problème pour moi.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;