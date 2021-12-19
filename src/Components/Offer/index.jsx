import React, { Component } from 'react'
import { Wrap } from './style' 
import Photo1 from '../../assets/img/offermain.png'
import Photo2 from '../../assets/img/offer1.png'
import Photo3 from '../../assets/img/offer2.png'


export default class index extends Component {
    render() {
        return (
            <Wrap>
                <Wrap.Firstdiv style={{background:`url(${Photo1})`}}>
                    <Wrap.FirstP1>Modern Furnuture Collections</Wrap.FirstP1>
                    <Wrap.FirstP2>Starting from $500</Wrap.FirstP2>
                    <Wrap.FirstP3>Read More</Wrap.FirstP3>
                </Wrap.Firstdiv>
               <Wrap.LeftAll>
                    <Wrap.Lastdiv  style={{background:`url(${Photo2})`}}>
                        <Wrap.FirstP1>Geometric Bookcase</Wrap.FirstP1>
                        <Wrap.FirstP2>Up to 20% discount</Wrap.FirstP2>
                        <Wrap.FirstP3>Read More</Wrap.FirstP3>
                    </Wrap.Lastdiv>

                    <Wrap.Lastdiv  style={{background:`url(${Photo3})`}}>
                        <Wrap.FirstP1>Minimal Sofa collections </Wrap.FirstP1>
                        <Wrap.FirstP2>Sale upto 40% discount</Wrap.FirstP2>
                        <Wrap.FirstP3>Read More</Wrap.FirstP3>
                    </Wrap.Lastdiv>
                    
               </Wrap.LeftAll>
                
            </Wrap>
        )
    }
}
