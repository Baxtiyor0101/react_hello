import React, { Component } from 'react';
import Navbar from '../Navbar';
import SubNav from '../SubNav';
import Section from '../Section';
import Body from '../Body';
import Payment from '../Payment';
import Offer from '../Offer';
import Trending from '../Trending';
import Specialoffer from '../Specialoffer';
import Partners from '../Partners';
import Articles from '../Articles';
import Footer from '../Footer';

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
                <Specialoffer />
                <Trending />
                <Partners />
                <Articles />
                <Footer />
            </div>
        )
    }
}