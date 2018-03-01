import React from 'react';
import Route from 'react-router-dom';

import CharacterSelection from './MoveCalculatorPage/CharacterSelection.jsx';
import MoveDisplay from './MoveCalculatorPage/MoveDisplay.jsx';

import './MoveCalculatorPage.scss';

export default class MoveCalculatorPage extends React.Component {
    render() {
        return (
            <div className="MoveCalculatorPage">
                <div className="MoveCalculatorPage-content">
                    <div className="MoveCalculatorPage-title">
                        Move Calculator
                    </div>
                    <CharacterSelection />
                    <MoveDisplay />
                </div>
            </div>
        );
    }
}
