import React from 'react';
import Header from './Header/Header';
import Management from './Management/Management';
import Reservation from './Reservation/Reservation';

const Services = () => {
    return (
        <div>
            <Header></Header>
            <Management></Management>
            <Reservation></Reservation>
        </div>
    );
};

export default Services;