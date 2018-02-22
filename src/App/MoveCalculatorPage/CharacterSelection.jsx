import React from 'react';

import CharacterSelector from './CharacterSelection/CharacterSelector.jsx';

import './CharacterSelection.scss';

export default class CharacterSelection extends React.Component {
    render() {
        return (
            <div className="CharacterSelection">
                <CharacterSelector 
                    name="Mewtwo"
                    image="mewtwo.jpg"
                    description="This kitty cat is not one that you want to anger, oh no, for he is a psychic kitty cat with a tail long enough to give you a quite vigorous slap if he so wished. Recommended to wear gloves when encountering. Likes long walks on the beach."
                    percent={121}
                />
                <CharacterSelector 
                    name="Lucario"
                    image="lucario.jpg"
                    description="Gosh look at this boi, a doggo straight out of space. What is he doing here? Why is he all blue and glowy? These are questions that only he knows the answer to."
                    percent={42}
                />  
                <div class="versus">
                    VS
                </div>
            </div>
        );
    }
}
