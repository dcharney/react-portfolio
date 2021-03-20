import React from 'react';
import Header from './components/Header';
// import About from './components/About';
import Portfolio from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
            <Header></Header>
            <main>
                <Portfolio></Portfolio>
            </main>
        </div>
    );
}

export default App;