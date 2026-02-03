import React, { useEffect, useState } from 'react';
import '../CSS/About.css';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        "JavaScript (ES6+)", "React.js", "Node.js", "Python", 
        "HTML5 & CSS3", "Bootstrap", "SQL", "Git/GitHub", 
        "RESTful APIs", "Unreal Engine"
    ];

    const softSkills = [
        "Problem Solving", "Team Collaboration", "Quick Learner", 
        "Adaptability", "Detail-Oriented"
    ];

    return (
        <div className={`about-container-fluid ${isVisible ? 'visible' : ''}`}>
            <div className="container custom-container">
                <div className="section-header text-center mb-5">
                    <h2 className="display-4 fw-bold gradient-text">About Me</h2>
                    <div className="header-line"></div>
                </div>

                <div className="row g-5 align-items-start">
                    {/* Profile Column */}
                    <div className="col-lg-4 col-md-12">
                        <div className="profile-card glass-panel" style={{animationDelay: '0.2s'}}>
                            <div className="profile-image-wrapper">
                                <img
                                    src={process.env.PUBLIC_URL + "/images/01.jpeg"}
                                    alt="Yu Wing Ng"
                                    className="profile-img"
                                />
                                <div className="profile-badge">
                                    <span className="location-emoji">📍</span> Canada
                                </div>
                            </div>
                            
                            <h3 className="profile-name mt-4">Yu Wing Ng</h3>
                            <p className="profile-title">Full Stack Developer</p>
                            
                            <div className="social-links mt-3">
                                <a className="social-btn" href="https://www.linkedin.com/in/yu-wing-ng-75a84a205/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                                <a className="social-btn" href="https://github.com/raymondng117?tab=repositories" target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-8 col-md-12">
                        <div className="about-content glass-panel" style={{animationDelay: '0.4s'}}>
                            <div className="bio-section mb-5">
                                <h3 className="subsection-title mb-4">Who I Am</h3>
                                <p className="mb-3 lead text-white-50">
                                    Hi there! I'm <span className="highlight-text">Yu Wing Ng</span> (Raymond), originally from the vibrant city of Hong Kong 🇭🇰. 
                                    I am a passionate explorer of knowledge with a unique background blending Sociology, Finance, and Media.
                                </p>
                                <p className="text-white-50">
                                    In 2023, I pivoted to technology, completing my studies in 
                                    <strong> Internet Application & Web Development</strong> at Algonquin College, Canada. 
                                    This journey ignited a genuine passion for coding—I find immense satisfaction in turning complex problems into elegant, tangible digital solutions.
                                </p>
                                <p className="text-white-50">
                                    I am currently looking for <strong className="highlight-text">Full-Stack Developer</strong> opportunities where I can 
                                    bring my diverse perspective, technical skills, and enthusiasm to a collaborative team.
                                </p>
                            </div>

                            <div className="skills-section mb-4">
                                <h3 className="subsection-title mb-3">Technical Arsenal</h3>
                                <div className="skills-grid">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="skill-badge" style={{animationDelay: `${0.1 * index}s`}}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="soft-skills-section">
                                <h3 className="subsection-title mb-3">Core Competencies</h3>
                                <div className="skills-grid">
                                    {softSkills.map((skill, index) => (
                                        <div key={index} className="skill-badge soft" style={{animationDelay: `${0.5 + (0.1 * index)}s`}}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
