import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../CSS/Navbar.css'

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const location = useLocation();

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className="nav-bar-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top glass-nav">
                <div className="container-fluid">
                    {/* Brand */}
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <div className="logo-container me-3">
                            <img className="icon-logo" src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="logo" />
                        </div>
                        <span className="brand-text gradient-text">PORTFOLIO</span>
                    </Link>

                    {/* Toggle button for collapsed menu on smaller screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={!isNavCollapsed ? true : false}
                        aria-label="Toggle navigation"
                        onClick={handleNavCollapse}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                                <li className="nav-item" key={item}>
                                    <Link 
                                        to={`/${item.toLowerCase()}`} 
                                        className={`nav-link ${location.pathname.includes(item.toLowerCase()) ? 'active' : ''}`}
                                        onClick={() => setIsNavCollapsed(true)}
                                    >
                                        {item.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


