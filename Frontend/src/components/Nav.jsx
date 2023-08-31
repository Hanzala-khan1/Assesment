import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import './css/Nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>Mcqs</h2>
            </div>
            <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/Worksheet' ? 'active' : ''}>
                        <Link to="/Worksheet">Worksheet</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-menu-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
            </div>
        </nav>
    );
};

export default Navbar;