import React from 'react';
import resumePdf from '../../assets/Resume/delaneyCharney.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


function Resume() {
    return (
        <section>
            Resume
            <a href={resumePdf} download>
                <FontAwesomeIcon icon={ faDownload } size="lg" className="d-inline-block" />
            </a> 
        </section>
    );
}

export default Resume;