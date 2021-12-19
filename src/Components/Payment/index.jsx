import React, { Component } from 'react'
import { Wrap } from './style' ;


export default class index extends Component {
    render() {
        return (
            <div>
                <Wrap> 
                   <Wrap.DivAll>
                        <Wrap.DivItem>
                        <Wrap.Item1 /> 
                            <h2>Free shipping</h2>
                        </Wrap.DivItem>
                        <Wrap.DivItem>
                            <Wrap.Item2 /> 
                            <h2>Free shipping</h2>
                        </Wrap.DivItem>
                        <Wrap.DivItem>
                            <Wrap.Item3 /> 
                            <h2>Free shipping</h2>
                        </Wrap.DivItem>
                        <Wrap.DivItem>
                            <Wrap.Item4 /> 
                            <h2>Free shipping</h2>
                        </Wrap.DivItem>
                   </Wrap.DivAll>
                </Wrap>

            </div>
        )
    }
}
