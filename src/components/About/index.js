import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Media from 'react-bootstrap/Media';
import profPic from '../../assets/about/profile-pic.jfif';

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
                    <h5>Media Heading</h5>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>

                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </Media.Body>
            </Media>
        </section>
    );
}

export default About;