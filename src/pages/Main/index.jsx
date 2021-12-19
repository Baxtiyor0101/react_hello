import React, { Component } from 'react';
import Navbar from '../Navbar';
import SubNav from '../SubNav';
import Section from '../Section';
import Body from '../Body';
import Payment from '../Payment';
import Offer from '../Offer';
import Trending from '../Trending';
import Trending from '../Specialoffer';

export default class index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SubNav />
                <Section />
                <Body />
                <Payment />
                <Offer />
                <Trending />
            </div>
        )
    }
}
