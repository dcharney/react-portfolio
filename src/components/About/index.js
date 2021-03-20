import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import profPic from '../../assets/about/profile-pic.jfif';

function About() {

    return (
        <section>
            <Jumbotron className="vertical-center">
                <h1 className="">Delaney Charney</h1>
                <h2 className=""><span className="jumbo-1">Engineer. </span><span className="jumbo-2">Web Developer. </span><span className="jumbo-3">Coding Enthusiast.</span></h2>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <img src={profPic} alt="me"></img>
                    </Col>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat, arcu ac ullamcorper consequat, ex sapien efficitur tortor, ut ullamcorper magna felis fringilla velit. Nullam mi lectus, interdum sed eleifend sit amet, tincidunt id purus. Duis rutrum ex in fringilla aliquet. Donec egestas luctus elementum. Donec varius vulputate dolor, non porta ex. Maecenas et pulvinar enim. Integer velit velit, vestibulum eget leo eget, suscipit fermentum elit. Nulla sed mi vel mauris cursus viverra. Nam dignissim odio placerat posuere faucibus. Donec eleifend lacus elit, in tristique ligula sollicitudin at.
                        </p>
                        <p>
                            Curabitur ut pellentesque nisl. Morbi accumsan ac lacus non tempor. Quisque nibh felis, sollicitudin eu consectetur non, elementum vitae nulla. Nunc aliquam, dui nec consequat ullamcorper, enim mi sollicitudin purus, elementum tincidunt dui mi vel leo. Sed dictum ut enim in egestas. Mauris interdum lacinia lorem ac sodales. Quisque ornare rutrum nunc. Nam lacinia aliquam elit a lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper scelerisque tortor. Donec vel odio eu ex volutpat fermentum sed ac lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum sodales, leo egestas sagittis mollis, massa dolor ullamcorper magna, a aliquet diam nisi eu ipsum. Praesent arcu metus, feugiat egestas tellus at, faucibus posuere sem. Nullam malesuada ante felis. Phasellus tincidunt risus eu justo semper fringilla nec a leo.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;