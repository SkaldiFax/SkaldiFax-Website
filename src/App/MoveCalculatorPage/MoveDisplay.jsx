import React from 'react';

import MoveDisplayPanel from './MoveDisplay/MoveDisplayPanel.jsx';

import './MoveDisplay.scss';

const items = [
    'The move where he slaps things in front of him while he is in the air',
    'That one where he summons some sparkles above his hand in an upward direction',
    'When he goes all sparkle sparkle eyes and you get all stunned like'
];

export default class MoveDisplay extends React.Component {
    render() {
        return (
            <div className="MoveDisplay">
                <MoveDisplayPanel title={'Moves that do a kill'} items={items} />
                <MoveDisplayPanel title={'Moves that do a kill'} items={items} />
                <MoveDisplayPanel title={'Moves that do a kill'} items={items} />
            </div>
        );
    }
}
