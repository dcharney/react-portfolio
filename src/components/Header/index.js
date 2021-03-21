import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';


function Header({ currentPage, setCurrentPage }) {
    const navLinks = ['About','Portfolio','Resume','Contact'];

    useEffect(() => { document.title = currentPage }, [currentPage]);

    return (
        <header>
            <Navbar variant="dark">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faBug} size="lg"
                        className="d-inline-block"
                    />{' '}
                    Delaney Charney</Navbar.Brand>
                <Nav className="mr-auto">
                    { navLinks.map( link => (
                        <Nav.Link className={`${currentPage === link && 'navActive'}`} key={link}>
                            <span onClick={() => setCurrentPage(link)} >{link}</span></Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;