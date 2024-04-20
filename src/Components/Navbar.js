import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../CSS/Navbar.css'

const Navbar = () => {
    const [navbarShowing, setNavBarShowing] = useState(false);

    const handleMouseOutFromNav = () => {
            setNavBarShowing (false);
    }

    const handleMouseEnterNav = () => {
        setNavBarShowing (true);
    }
 
    return (
        <div className="nav-bar-container" onMouseEnter={handleMouseEnterNav}>
            {navbarShowing && <nav className="navbar navbar-expand-lg navbar-light sticky-top"  onMouseOut={handleMouseOutFromNav} onMouseOver={handleMouseEnterNav} >
                <div className="container-fluid" >
                    {/* Brand */}
                    <Link className="navbar-brand " to="/">
                        <img className="icon-logo me-3" src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="logo" />
                    </Link>

                    {/* Toggle button for collapsed menu on smaller screens */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Links */}
                    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">
                                    HOME
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-link">
                                    PROJECTS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/resume" className="nav-link">
                                    RESUME
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>}
        </div>
    );
};

export default Navbar;


