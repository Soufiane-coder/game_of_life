import React from 'react';
import './LandingPage.scss'
import LPHeader from '../../layout/landing-page/lp-header/lp-header.layout'
import Quote from '../../layout/landing-page/Quote/Quote';
import LPGlobalDescription from '../../layout/landing-page/lp-global-description/lp-global-description.layout';
import Footer from '../../layout/landing-page/Footer/Footer';

const LandingPage = () => {
    return (
        <div className="container">
            <LPHeader />
            <Quote />
            <LPGlobalDescription />
            <Footer />
        </div>
    )
}

export default LandingPage;