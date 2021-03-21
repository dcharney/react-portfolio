import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import './style.css';

function Footer() {
    return (
        <footer>
            <div id="footer">
                <a href="https://www.linkedin.com/in/delaneycharney/">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="d-inline-block" />
                </a>
                <a href="https://github.com/dcharney">
                    <FontAwesomeIcon icon={faGithub} size="lg" className="d-inline-block" />
                </a>
                <a href="https://stackoverflow.com/users/story/14212872">
                    <FontAwesomeIcon icon={faStackOverflow} size="lg" className="d-inline-block" />
                </a>
            </div>
            
        </footer>
    )
};

export default Footer;