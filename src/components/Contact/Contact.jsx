import React from 'react';
import './Contact.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgCS2 from './img/imgCS2.jpg';
import emailIcon from './img/emailIcon.png';
import phoneIcon from './img/phoneIcon.png';

const Contact = () => {
    return (
        <Container fluid className="contact">
            <Row>
                <Col>
                    <h1 className="contactTitle">Contactez-moi</h1>
                    <h2 className="contactSubtitle">Vous voulez me contacter, vous êtes sur la bonne page.</h2>
                </Col>
            </Row>
            <Row className="contactRow">
                <Col className="imgColContact">
                    <img className="imgCS2" src={imgCS2} alt="imgCS2"/>
                </Col>
                <Col className="textColContact">
                    <Row>
                        <Col>
                            <h2 className="contactSubtitle">Courriel</h2>
                            <input className="contactInput" type="text" placeholder="Courriel"/>
                        </Col>
                        <Col>
                            <h2 className="contactSubtitle">Nom</h2>
                            <input className="contactInput" type="text" placeholder="Nom"/>
                        </Col>
                        <Col>
                            <h2 className="contactSubtitle">Prénom</h2>
                            <input className="contactInput" type="text" placeholder="Prenom"/>
                        </Col>
                        <Col>
                            <h2 className="contactSubtitle">Message</h2>
                            <textarea className="contactInput" type="text" placeholder="Message"/>
                        </Col>
                    </Row>
                    <Row className="contactMeBtn">
                        <Link to="/contact">
                            <button className="contactMeBtn">Envoyer</button>
                        </Link>
                    </Row>
                    <p className="contactText">
                        Vous pouvez aussi me contacter par courriel à l'adresse suivante: <br />
                        <img className="emailIcon" src={emailIcon} alt="emailIcon"/>
                        <a className="email" href="mailto: billybobbilly@whatthehell.ca">billybobbilly@whatthehell.ca</a>
                        <br /> <br />
                        Ou par téléphone au: <br />
                        <img className="phoneIcon" src={phoneIcon} alt="phoneIcon"/>
                        <a className="phone" href="tel: 514-555-5555">514-555-5555</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;