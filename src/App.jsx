import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './App/Shared/Header.jsx';
import Footer from './App/Shared/Footer.jsx';
import HomePage from './App/HomePage.jsx';
import MoveCalculatorPage from './App/MoveCalculatorPage.jsx';

import './App.scss';

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/move-calculator" component={MoveCalculatorPage} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
