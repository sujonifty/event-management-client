import React from 'react';
import Banner from './Banner/Banner';
import Welcome from './Welcome/Welcome';
import Service from './Service/Service';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <Service></Service>
        </div>
    );
};

export default HomePage;