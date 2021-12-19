import React, { Component } from 'react'
import {Wrap} from './style';
import  Photo1 from '../../../assets/img/trending/birinchi.png';

export default class Trenditem extends Component {
    render() {
        return (
            <Wrap>
                <img src={Photo1} alt="" />
                <Wrap.Itemp>Chair</Wrap.Itemp>
                <Wrap.Itemp2>Minimal LCD chair</Wrap.Itemp2>
                
                <Wrap.PaymentDiv>
                    <Wrap.Itemp31>$180 </Wrap.Itemp31>
                    <Wrap.Itemp32>$250 </Wrap.Itemp32>
                    <Wrap.Itemp33># # # # #</Wrap.Itemp33>
                </Wrap.PaymentDiv>
            </Wrap>
        )
    }
}
