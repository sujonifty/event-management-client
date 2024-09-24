import React from 'react';
import Banner from './Banner/Banner';
import Welcome from './Welcome/Welcome';
import Service from './Service/Service';
import UpComingEvent from './UpComingEvent/UpComingEvent';
import Plan from './Plan/Plan';
import Contact from './Contact/Contact';
import OurTeam from './ourTeam/OurTeam';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Service></Service>
            <UpComingEvent></UpComingEvent>
            <Plan></Plan>
            <OurTeam></OurTeam>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;