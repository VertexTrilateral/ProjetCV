import React from 'react';
import './Footer.css';
import git from './img/git.png';
import LinkedIn from './img/LinkedIn.png';
import FB from './img/fb.png';
import VertexTrilat from './img/VertexTrilat.jpg';


function Footer() {
    return (
        <footer className="Footer">
            <div>
                <a href="https://www.github.com/">
                    <img src={git} alt="Github Logo" className='logoSocial'/>
                </a>
                <a href="https://www.linkedin.com/">
                    <img src={LinkedIn} alt="LinkedIn Logo" className='logoSocial'/>
                </a>
                <a href="https://www.facebook.com/">
                    <img src={FB} alt="Facebook Logo" className='logoSocial' />
                    <br />
                </a>
                
                <p>2023 Vertex Trilatéral® (ERIK MARCOTTE - ÉTUDIANT #2211090) - Tout droits réservés</p>
                <img src={VertexTrilat} alt="Vertex Trilatéral Logo" className='logoTemp' />
                
            
            </div>
        </footer>
    );
};

export default Footer;
