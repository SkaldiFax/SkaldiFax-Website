import React from 'react';

import Header from './App/Shared/Header.jsx';
import HomePage from './App/HomePage.jsx';
import MoveCalculatorPage from './App/MoveCalculatorPage.jsx';

import './App.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <MoveCalculatorPage />
            </div>
        );
    }
}
