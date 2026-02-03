import React from 'react';
import '../CSS/Home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='content-container home-page'>
            {/* Main Content */}
            <div className='home-page-bg d-flex justify-content-center align-items-center'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-10 text-center hero-content'>
                            
                            <h1 className="display-3 fw-bold mb-3 hero-title">
                                Hi, I'm <span className="gradient-text">Raymond Ng</span>
                            </h1>
                            
                            <h2 className="display-6 fw-normal mb-4 hero-subtitle">
                                Full-Stack Web Developer
                            </h2>
                            
                            <p className="lead hero-text mb-5 mx-auto">
                                Building accessible, pixel-perfect, and performant web experiences.
                                Passionate about turning complex problems into simple, beautiful solutions.
                            </p>

                            <div className="d-flex justify-content-center gap-3 hero-buttons">
                                <button className="btn-modern primary" onClick={() => navigate('/projects')}>
                                    View Projects
                                </button>
                                <button className="btn-modern secondary" onClick={() => navigate('/contact')}>
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navigation Arrow Removed */}
        </div>
    );
}

export default Home;
