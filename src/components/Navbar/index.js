import React, { useState } from 'react';
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Perfil from "../../assets/perfil-2.jpeg";
import './style.css';

export default function Navbar() {

    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="navbar-container">
            <div id="navbar">
                <header>
                    <NavLink exact to="/" className="nav-link" onClick={() => setShowLinks(false)}><img src={Perfil} alt="perfil1.png" /></NavLink>
                    
                    <h1>Fábio Goularte</h1>
                    <h3>Full Stack Developer</h3>
                    <p>Apaixonado por front-end, estudante, programador.</p>
                </header>
                <nav className="media">
                    <a href="https://github.com/FabioGoularte" target="new">
                        <i><FontAwesomeIcon icon={faGithub}/></i>
                    </a>
                    <a href="https://www.instagram.com/biim_goulart/" target="new">
                        <i><FontAwesomeIcon icon={faInstagram}/></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fabio-goularte" target="new">
                        <i><FontAwesomeIcon icon={faLinkedinIn}/></i>
                    </a>
                </nav>

                <FontAwesomeIcon
                    icon={showLinks ? faTimes : faBars }
                    id="icon"
                    onClick={() => setShowLinks(!showLinks)}
                />

                <nav className="navlinks" id={showLinks ? "hidden" : "" }>
                    <NavLink exact to="/" className="nav-link" onClick={() => setShowLinks(false)}>Home</NavLink>
                    <NavLink to="/about" className="nav-link" onClick={() => setShowLinks(false)}>Sobre mim</NavLink>
                    <NavLink to="/experiences" className="nav-link" onClick={() => setShowLinks(false)}>Experiências</NavLink>
                    <NavLink to="/skills" className="nav-link" onClick={() => setShowLinks(false)}>{`Cursos e habilidades`}</NavLink>
                    <NavLink to="/contacts" className="nav-link" onClick={() => setShowLinks(false)}>Contatos</NavLink>
                </nav>
            </div>
        </div>
    );
}