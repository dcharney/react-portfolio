import React from 'react';
import resumePdf from '../../assets/Resume/delaneyCharney.pdf';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload } from '@fortawesome/free-solid-svg-icons';


function Resume() {
    return (
        <section className="resume">
            {/* <a href={resumePdf} download>
                <FontAwesomeIcon icon={ faDownload } size="lg" className="d-inline-block" />
            </a>  */}
            {/* <Document file={resumePdf} >
                <Page pageNumber={1} />
            </Document> */}
            <iframe src={resumePdf} allowfullscreen="" frameborder="0" height="100%" width="80%" title="Displaying My Resume" scrolling="auto"></iframe>
        </section>
    );
}

export default Resume;