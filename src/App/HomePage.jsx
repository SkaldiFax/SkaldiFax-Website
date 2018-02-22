import React from 'react';

import './HomePage.scss';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <div className="HomePage-title">
                    Welcome to the land of SkaldiFax!
                </div>
                <img className="HomePage-image" src="fax.jpg" />
            </div>
        );
    }
}
