import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'

export default class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-link">
                    <Link to="/">Home</Link>
                </div>
                <div className="Header-link">
                    <Link to="/move-calculator">Moves</Link>
                </div>
            </div>
        );
    }
}
