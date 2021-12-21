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

 

import React from 'react'

 const index = () => {
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
export default index;