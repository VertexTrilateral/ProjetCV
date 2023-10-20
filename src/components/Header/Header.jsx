import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";
import * as html2pdf from "html2pdf.js";

const Header = () => {
    const location = useLocation();
    const generatePDF = () => {
        const content = document.getElementById("CV");
        const pdf = html2pdf().from(content).set({
            margin: 10,
            filename: "CV_ErikMarcotte.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 4 },
            jsPDF: { unit: "inches", format: "letter", orientation: "portrait" },
        });
        pdf.outputPdf().then((pdfBytes) => {
            pdf.save();
        });
    };
        

    return (
        <Container fluid className="Header">
            <h1 className="Htitle">PROJET CV - ERIK MARCOTTE_2211090</h1>
            <Row>
                <Col className="header_col">
                    <Link to="/" className={`HeadTitles ${location.pathname === '/' ? 'disabled' : ''}`}>
                        <button className="HOME">ACCEUIL</button>
                    </Link>
                    <Link to="/about" className="HeadTitles">
                        <button className="ABOUTME">À PROPOS DE MOI</button>
                    </Link>
                    <Link to="/contact" className="HeadTitles">
                        <button className="CONTACT">CONTACT</button>
                    </Link>
                    <Link to="/skillsandprojects" className="HeadTitles">
                        <button className="SKILLSANDPROJECTS">EXPÉRIENCE ET PROJETS</button>
                    </Link>
                    <Link to="/education" className="HeadTitles">
                        <button className="EDUCATION">ÉDUCATION</button>
                    </Link>
                </Col>
            </Row>
            <button className="CV" onClick={generatePDF}>Sauvegarder PDF</button>
        </Container>
    );
};

export default Header;
