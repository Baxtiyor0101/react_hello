import React, { Component } from 'react'
import { Wrap } from './style' ;
import Trenditem from './TrenItems';


export default class index extends Component {
    render() {
        return (
            <Wrap>
                <Wrap.H1>TRENDING</Wrap.H1>
                <Wrap.TextDiv>
                    <Wrap.Text1>Top Products</Wrap.Text1>
                    <Wrap.Text2>New Arrivals</Wrap.Text2>
                    <Wrap.Text3>Best Sellers</Wrap.Text3>
                </Wrap.TextDiv>
                <Wrap.Div1>
                    <Trenditem />
                    <Trenditem />
                    <Trenditem />
                    <Trenditem />
                </Wrap.Div1>
                <Wrap.Div2>
                    <Trenditem />
                    <Trenditem />
                    <Trenditem />
                    <Trenditem />
                </Wrap.Div2>
            </Wrap>
        )
    }
}
