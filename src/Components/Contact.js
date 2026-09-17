import React from "react";
import '../CSS/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div id="contactform">
                <h1 className="fs-3 mb-4 fw-bolder">Let's Connect!</h1>
                <div className="contact-info">
                    <a className="contact-info-item" href="mailto:ngyuwing117@gmail.com">
                        <span className="contact-icon">✉️</span>
                        <span>ngyuwing117@gmail.com</span>
                    </a>
                    <a className="contact-info-item" href="tel:+85266849298">
                        <span className="contact-icon">📞</span>
                        <span>+852 6684 9298</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
