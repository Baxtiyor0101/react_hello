import React, { Component } from 'react';
import { Wrap } from './style' 

export default class index extends Component {
    render() {
        return (
        <Wrap>
            <Wrap.Logo>
                <Wrap.LogoIcon /> FRANINKING
            </Wrap.Logo>
            <Wrap.Input type='text' placeholder='Search here'/>
                <Wrap.Selectbox>
                    <Wrap.Select>
                        <option value="1">Category</option>
                        <option value="2">Category</option>
                        <option value="3">Category</option>
                        <option value="4">Category</option>
                     </Wrap.Select>
                </Wrap.Selectbox>

            <Wrap.Searchbox>
                <Wrap.Search />
            </Wrap.Searchbox>

            <Wrap.Iconsbox>
                <Wrap.Basket />
                <Wrap.Bang />
                <Wrap.User />
            </Wrap.Iconsbox>


        </Wrap>
        )
    }
}