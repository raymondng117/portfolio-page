import React from 'react';
import '../CSS/About.css';

const About = () => {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='d-flex col-md-4 col-12 flex-column justify-content-start text-center align-items-center p-3 profile-contact-column'>
                        <img
                            src={process.env.PUBLIC_URL + "/images/01.jpeg"}
                            alt="About Me"
                            className="img-thumbnail rounded-circle about-thumbnail"
                        />
                    <div className='mt-3 d-flex justify-content-center'>
                        <a className="icon" href="https://www.linkedin.com/in/yu-wing-ng-75a84a205/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>

                        <a className="icon" href="https://github.com/raymondng117?tab=repositories">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className='d-flex col-md-8 col-12 p-3 flex-column about-content-column'>
                    <div>
                        <h1 className='display-4 fw-bolder'>About me . . .</h1>
                        <p className='about-p'>
                            I'm based in Hong Kong <img width="48" height="48" src="https://img.icons8.com/color/48/hongkong-flag.png" alt="hongkong-flag" />and recently graduated from Algonquin College WDIA programme. I'm passionate about creating full-stack websites. <img width="24" height="24" src="" alt="working-with-a-laptop" />
                        </p>
                        <p className='about-p'>
                            I'm currently looking for an intern or full-time <strong>web developer position</strong>. I'm eager to contribute my skills and be a valuable team member. If you'd like to get in touch, feel free to reach out!
                        </p>
                    </div>

                    <div className='d-flex flex-sm-row flex-column align-items-center justify-content-center'>
                        <div className='d-flex align-items-center justify-content-md-between flex-column my-1 col-sm-5 col-12'>
                            <button className="btn btn-outline-secondary btn-about rounded-pill col-12">
                                <div className='d-flex align-items-center justify-content-center text-center'>
                                    <img className="d-block me-1" width="24" height="24" src="https://img.icons8.com/color/48/working-with-a-laptop.png" alt="controller" />
                                    <p className="d-block m-0">Programming</p>
                                </div>
                            </button>

                            <button className="btn btn-outline-secondary btn-about rounded-pill col-12">
                                <div className='d-flex align-items-center justify-content-center text-center'>
                                    <img className="d-block" width="24" height="24" src="https://img.icons8.com/color/48/fire-heart--v1.png" alt="controller" />
                                    <p className="d-block m-0">Enthusiasm</p>
                                </div>
                            </button>
                            <button className="btn btn-outline-secondary btn-about rounded-pill col-12">
                                <div className='d-flex align-items-center justify-content-center text-center'>
                                    <img className="d-block" width="24" height="24" src="https://img.icons8.com/dusk/64/saving-book.png" alt="saving-book"/>
                                    <p className="d-block m-0">Concentration</p>
                                </div>
                            </button>

                            <button className="btn btn-outline-secondary btn-about rounded-pill col-12">
                                <div className='d-flex align-items-center justify-content-center text-center'>
                                    <img className="d-block" width="24" height="24" src="https://img.icons8.com/color/48/growing-money--v2.png" alt="controller" />
                                    <p className="d-block m-0"> Investment</p>
                                </div>
                            </button>
                        </div>

                        <div className='d-flex align-items-center justify-content-md-between flex-column my-1 col-sm-5 col-12'>
                            <button className="btn btn-outline-secondary btn-about rounded-pill col-12">
                                <div className='d-flex align-items-center justify-content-center text-center'>
                                    <img className="d-block me-1" width="24" height="24" src="https://img.icons8.com/color/48/who-skin-type-1.png" alt="controller" />
                                    <p className="d-block m-0">INFP</p>
                                </div>
                            </button>

                            <button className="btn btn-outline-secondary btn-about rounded-pill col-12">
                                <div className='d-flex align-items-center justify-content-center text-center'>
                                    <img className="d-block" width="24" height="24" src="https://img.icons8.com/color/48/airplane-take-off--v1.png" alt="controller" />
                                    <p className="d-block m-0"> Travel</p>
                                </div>
                            </button>

                            <button className="btn btn-outline-secondary btn-about rounded-pill col-12">
                                <div className='d-flex align-items-center justify-content-center text-center'>
                                    <img className="d-block me-1" width="24" height="24" src="https://img.icons8.com/color/48/controller.png" alt="controller" />
                                    <p className="d-block m-0"> Game player</p>
                                </div>
                            </button>

                            <button className="btn btn-outline-secondary btn-about rounded-pill col-12">
                                <div className='d-flex align-items-center justify-content-center text-center'>
                                    <img className="d-block me-1" width="24" height="24" src="https://img.icons8.com/color/48/football2--v1.png" alt="controller" />
                                    <p className="d-block m-0"> Football</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;
