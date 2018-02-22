import React from 'react';

import './CharacterSelector.scss';

export default class CharacterSelector extends React.Component {
    render() {
        return (
            <div className="CharacterSelector">
                <div className="display">
                    <img className="background" src={this.props.image} />
                    <div className="text">
                        {this.props.name}
                    </div>
                </div>
                <div className="information">
                    <div className="text">
                        {this.props.description}
                    </div>
                    <div className="percent">
                        <div className="number">
                            {this.props.percent}
                        </div>
                        <div className="symbol">
                            %
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
