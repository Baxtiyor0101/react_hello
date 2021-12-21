import { Wrap } from './style' ;
import React from 'react'

 const index = () => {
    return (
        <Wrap>
            <Wrap.Collection>
                ALL COLLECTIONS
            </Wrap.Collection>

            <Wrap.Menubox>
                <Wrap.Menuitem>HOME</Wrap.Menuitem>
                <Wrap.Menuitem>SHOP</Wrap.Menuitem>
                <Wrap.Menuitem>BLOG</Wrap.Menuitem>
                <Wrap.Menuitem>ABOUT</Wrap.Menuitem>
                <Wrap.Menuitem> CONTACT US</Wrap.Menuitem>
            </Wrap.Menubox>
            <Wrap.Categorybox>
            </Wrap.Categorybox>

        </Wrap>
    )
}
export default index