import React from 'react';
import './Navbar.css';

const Navbar = () => {
return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    style={{ width: '32px', height: '32px', marginRight: '8px' }}
                />
                <a href="/"> React Rejuvenate </a>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="/" className="navbar-link">Home</a>
                </li>
                {/* <li className="navbar-item">
                    <a href="#about" className="navbar-link">Reducer</a>
                </li>
                <li className="navbar-item">
                    <a href="#services" className="navbar-link">Services</a>
                </li> */}
                <li className="navbar-item">
                    <a href="/rj-context" className="navbar-link">Context</a>
                </li> 
                <li className="navbar-item">
                    <a href="/rj-reducer" className="navbar-link">Reducer</a>
                </li>
                <li className="navbar-item">
                    <a href="/inprogress" className="navbar-link">More InProgress..</a>
                </li>
            </ul>
        </div>
    </nav>
);
};

export default Navbar;
