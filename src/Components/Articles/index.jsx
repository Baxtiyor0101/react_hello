import React, { Component } from 'react'
import { Wrap } from './style' 


export default class index extends Component {
    render() {
        return (
            <Wrap>
                <Wrap.H1>Our Latest Articles</Wrap.H1>
                <Wrap.DivAll>
                <Wrap.DivAll1>
                    <Wrap.Divitem >
                        <Wrap.Furnuture>Furniture </Wrap.Furnuture> <p>23 September 2022</p>
                        <Wrap.Text>Begineer guide buying minimal sofa</Wrap.Text>
                        <p>Read more</p>
                    </Wrap.Divitem>
                    <Wrap.Divitem >
                        <Wrap.Furnuture>Furniture </Wrap.Furnuture> <p>23 September 2022</p>
                        <Wrap.Text>Begineer guide buying minimal sofa</Wrap.Text>
                        <p>Read more</p>
                    </Wrap.Divitem>
                </Wrap.DivAll1>
                <Wrap.DivAll2>
                    <Wrap.Divitem >
                        <Wrap.Furnuture>Furniture </Wrap.Furnuture> <p>23 September 2022</p>
                        <Wrap.Text>Begineer guide buying minimal sofa</Wrap.Text>
                        <p>Read more</p>
                    </Wrap.Divitem>
                    <Wrap.Divitem >
                        <Wrap.Furnuture>Furniture </Wrap.Furnuture> <p>23 September 2022</p>
                        <Wrap.Text>Begineer guide buying minimal sofa</Wrap.Text>
                        <p>Read more</p>
                    </Wrap.Divitem>
                </Wrap.DivAll2>
                </Wrap.DivAll>
                
            </Wrap>
        )
    }
}
