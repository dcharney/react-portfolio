import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Media from 'react-bootstrap/Media';
import profPic from '../../assets/About/profile-pic.jfif';
import './style.css';

function About() {

    return (
        <section>
            <Jumbotron className="vertical-center">
                <h1 className="">Delaney Charney</h1>
                <h2 className=""><span className="jumbo-1">Engineer. </span><span className="jumbo-2">Web Developer. </span><span className="jumbo-3">Coding Enthusiast.</span></h2>
            </Jumbotron>
            <Media>
                <img

                    className="align-self-center mr-3"
                    src={profPic}
                    alt="Me!"
                />
                <Media.Body>
                    <h5>About Me</h5>
                    <p>
                        Technically minded and a creative thinker interested in pushing the envelope of engineering. Works well in high stress environments where required to problem solve with limited time and resources. 
                    </p>

                    <p>
                        Strong communication skills developed through managing high risk technical projects and facilitating cross discipline communication. Experience writing, executing, and witnessing tests for FAT, SAT, and other commissioning activities. Familiar with American and European design standards.
                    </p>
                </Media.Body>
            </Media>
        </section>
    );
}

export default About;