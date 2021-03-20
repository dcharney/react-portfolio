import React from 'react';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

function Portfolio() {
    const projects = [
        {
            name: 'Photo Hut',
            description: 'A social media site for professionals to share, collaborate, and promote their work.',
            technologies: 'react, javascript',
            deployedUrl: 'https://ucf-photo-hut.herokuapp.com/',
            github: 'https://github.com/dcharney/Photo-Hut'
        },
        {
            name: 'Plan Your Date Night',
            description: 'A website to take the guesswork out of planning a meal and cocktail pairing to impress your date.',
            deployedUrl: 'https://dcharney.github.io/plan-your-date-night/',
            github: 'https://github.com/dcharney/plan-your-date-night'
        },
        {
            name: 'Budget Tracker',
            description: 'A PWA to easily track your income and spending.',
            deployedUrl: "https://dcharney-budget-tracker.herokuapp.com/",
            github: 'https://github.com/dcharney/budget-tracker'
        },
        {
            name: 'Note Taker',
            description: 'An app to write and save notes for organizing and tracking tasks.',
            deployedUrl: 'https://dcharney-note-taker.herokuapp.com/',
            github: 'https://github.com/dcharney/note-taker'
        },
        {
            name: 'Weather Dashboard',
            description: 'A website that will display the current and future weather conditions for a city of the users choice.',
            deployedUrl: 'https://dcharney.github.io/weather-dashboard/',
            github: 'https://github.com/dcharney/weather-dashboard'
        }
    ]

    return (
        <section>
            <h1>Portfolio</h1>
            <CardColumns>
                    { projects.map((project) => (
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
            </CardColumns>
        </section>
    );
}

export default Portfolio;