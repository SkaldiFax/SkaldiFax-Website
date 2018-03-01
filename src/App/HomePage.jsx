import React from 'react';

import HomePageBanner from './HomePage/HomePageBanner.jsx';
import HomePageContent from './HomePage/HomePageContent.jsx';

import './HomePage.scss';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <HomePageBanner />
                <HomePageContent />
            </div>
        );
    }
}
