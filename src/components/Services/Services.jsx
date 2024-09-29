import React from 'react';
import Header from './Header/Header';
import Management from './Management/Management';
import Reservation from './Reservation/Reservation';
import Package from './Package/Package';

const Services = () => {
    return (
        <div>
            <Header></Header>
            <Management></Management>
            <Reservation></Reservation>
            <Package></Package>
        </div>
    );
};

export default Services;