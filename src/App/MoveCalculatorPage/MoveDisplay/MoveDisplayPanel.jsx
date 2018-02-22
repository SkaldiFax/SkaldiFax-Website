import React from 'react';

import './MoveDisplayPanel.scss';

export default class MoveDisplayPanel extends React.Component {
    render() {
        return (
            <div className="MoveDisplayPanel">
                <div className="MoveDisplayPanel-title">
                    {this.props.title}
                </div>
                {this.props.items.map(text =>
                    <div className="MoveDisplayPanel-item" key={text}>
                        {text}
                    </div>
                )}
            </div>
        );
    }
}
