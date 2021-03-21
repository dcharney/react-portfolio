import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Header() {
    
    const [categories] = useState([
        { name: "About Me", description: "Everything you could want to know about me!" },
        { name: "Portfolio", description: "Some samples of my work." },
        { name: "Resume", description: "You can download my resume here." },
        { name: "Contact", description: "Want to collaborate? Want to hire me?" }
    ]);
    const [ currentCategory, setCurrentCategory ] = useState(categories[0]);

    function categorySelected(name) {
        console.log(`${name}`);
    }

    return (
        <header>
            <Navbar variant="dark">
                <Navbar.Brand href="/">
                    <FontAwesomeIcon icon={faBug} size="lg"
                        className="d-inline-block"
                    />{' '}
                    Delaney Charney</Navbar.Brand>
                <Nav className="mr-auto">
                    { categories.map((category) => (
                        <Nav.Link className={`${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => { setCurrentCategory(category) }} >{category.name}</span></Nav.Link>
                    ))}
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;