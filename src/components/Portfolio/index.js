import React from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.css';

function Portfolio() {
    const projects = [
        {
            image: 'photo-hut',
            name: 'Photo Hut',
            description: 'A social media site for professionals to share, collaborate, and promote their work.',
            technologies: 'react, javascript',
            deployedUrl: 'https://ucf-photo-hut.herokuapp.com/',
            github: 'https://github.com/dcharney/Photo-Hut'
        },
        {
            image: 'plan-your-date-night',
            name: 'Plan Your Date Night',
            description: 'A website to take the guesswork out of planning a meal and cocktail pairing to impress your date.',
            deployedUrl: 'https://dcharney.github.io/plan-your-date-night/',
            github: 'https://github.com/dcharney/plan-your-date-night'
        },
        {
            image: 'budget-tracker',
            name: 'Budget Tracker',
            description: 'A PWA to easily track your income and spending.',
            deployedUrl: "https://dcharney-budget-tracker.herokuapp.com/",
            github: 'https://github.com/dcharney/budget-tracker'
        },
        {
            image: 'note-taker',
            name: 'Note Taker',
            description: 'An app to write and save notes for organizing and tracking tasks.',
            deployedUrl: 'https://dcharney-note-taker.herokuapp.com/',
            github: 'https://github.com/dcharney/note-taker'
        },
        {
            image: 'weather-dashboard',
            name: 'Weather Dashboard',
            description: 'A website that will display the current and future weather conditions for a city of the users choice.',
            deployedUrl: 'https://dcharney.github.io/weather-dashboard/',
            github: 'https://github.com/dcharney/weather-dashboard'
        },
        {
            image: 'food-festival',
            name: 'Food Festival',
            description: 'An improved Food Festival app for offline usage and speed by turning it into a PWA.',
            deployedUrl: 'https://dcharney.github.io/food-festival/',
            github: 'https://github.com/dcharney/food-festival'
        }
    ]

    return (
        <section id="portfolio">
            <h1>Portfolio</h1>
            <CardColumns>
                    { projects.map((project) => (
                        <Card key={project.name} className="bg-dark text-white">
                            <Card.Header>{project.name}</Card.Header>
                            <Card.Img src={require(`../../assets/Portfolio/${project.image}.png`).default} alt={project.name} />
                            <Card.ImgOverlay>
                                <a href={project.github}>
                                    <FontAwesomeIcon icon={faGithub} size="2x" className="d-inline-block" />
                                </a>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <a href={project.deployedUrl}>
                                    <FontAwesomeIcon icon={faLink} size="2x" className="d-inline-block" />
                                </a>
                            </Card.ImgOverlay>
                        </Card>
                    ))}
            </CardColumns>
        </section>
    );
}

export default Portfolio;