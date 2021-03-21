import React from 'react';
import resumePdf from '../../assets/Resume/delaneyCharney.pdf';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './style.css';


function Resume() {
    return (
        <section id="resume">
            {/* <a href={resumePdf} download>
                <FontAwesomeIcon icon={ faDownload } size="lg" className="d-inline-block" />
            </a>  */}
            <iframe src={resumePdf} allow="fullscreen" frameBorder="0" height="100%" width="80%" title="Delaney Charney"></iframe>
        </section>
    );
}

export default Resume;