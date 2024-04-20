const Contact = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">

                <div className="col-md-8 mt-5 text-center justify-content-end">
                    <div className="display-6 fw-bold mb-5">
                        If you're ever interested in getting in touch, please don't hesitate to reach out!
                    </div>

                    <div className="d-flex align-content-center  justify-content-center">
                        <div>
                            <img width="48" height="48" src="https://img.icons8.com/emoji/48/backhand-index-pointing-right-light-skin-tone.png" alt="backhand-index-pointing-right-light-skin-tone" className="me-5 animated-left-right-hand d-none d-sm-block" />
                        </div>

                        <div>
                            <a href="mailto:ngyuwing117@gmail.com" className="email display-6 text-decoration-none">ngyuwing117@gmail.com</a>
                        </div>
                    </div>

                    <div className='mt-5 d-flex justify-content-center'>
                        <a className="icon" href="https://www.linkedin.com/in/yu-wing-ng-75a84a205/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                        </a>

                        <a className="icon" href="https://www.facebook.com/ng.yuwing">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="bi bi-facebook"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                        </a>
                    </div>

                </div>

                <div className="col-md-3 ms-2 mt-5 d-md-block d-none ">
                    <img className='img-fluid home-img-1' src={process.env.PUBLIC_URL + "/images/home char.png"} alt="" />
                </div>


            </div>

        </div>
    );
}

export default Contact;