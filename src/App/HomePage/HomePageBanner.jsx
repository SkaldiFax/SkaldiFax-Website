import React from 'react';
import { Link } from 'react-router-dom';

import './HomePageBanner.scss';

export default class HomePageBanner extends React.Component {
    render() {
        return (
            <div className="HomePageBanner">
                <div className="HomePageBanner-title">
                    <div className="HomePageBanner-title-small">
                        Welcome to the land of
                    </div>
                    <div className="HomePageBanner-title-large">
                        SkaldiFax
                    </div>
                </div>
                <div className="HomePageBanner-title-backing">
                    <div className="HomePageBanner-title-backing-small">
                        Welcome to the land of
                    </div>
                    <div className="HomePageBanner-title-backing-large">
                        SkaldiFax
                    </div>
                </div>
            </div>
        );
    }
}
