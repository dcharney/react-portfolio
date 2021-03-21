import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [ currentPage, setCurrentPage ] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            case 'Contact':
                return <Contact />;
            default:
                return <About />;
        }
    }

    return (
        <>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <Header
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <main>
                { renderPage(currentPage) }
            </main>
            <Footer />
        </>
    );
}

export default App;