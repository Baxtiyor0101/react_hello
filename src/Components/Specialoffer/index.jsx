import { Wrap } from './style' ;
import Special from '../../assets/img/specialoffer/special1.png';
import Special2 from '../../assets/img/specialoffer/special2.png';
import React from 'react'

 const index = () => {
    return (
        <Wrap>
            < Wrap.Div1 style={{background:`url(${Special})`}}>
                 < Wrap.InnerDiv1>Living Room Furniture</Wrap.InnerDiv1>
                 < Wrap.InnerDiv2>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</Wrap.InnerDiv2>
                 < Wrap.InnerDiv4>SHOP NOW</Wrap.InnerDiv4>
                 <Wrap.Aylanalar>
                    <Wrap.Ell>10 <br /> days</Wrap.Ell>
                    <Wrap.Ell>10 <br /> days</Wrap.Ell>
                    <Wrap.Ell>10 <br /> days</Wrap.Ell>
                    <Wrap.Ell>10 <br /> days</Wrap.Ell>
                 </Wrap.Aylanalar>
            </Wrap.Div1>
            < Wrap.Div2 style={{background:`url(${Special2})`}}> 
                    < Wrap.InnerDiv1>Living Room Furniture</Wrap.InnerDiv1>
                    < Wrap.InnerDiv2>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</Wrap.InnerDiv2>
                    < Wrap.InnerDiv4>SHOP NOW</Wrap.InnerDiv4>
                    <Wrap.Aylanalar>
                        <Wrap.Ell>10 <br /> days</Wrap.Ell>
                        <Wrap.Ell>10 <br /> days</Wrap.Ell>
                        <Wrap.Ell>10 <br /> days</Wrap.Ell>
                        <Wrap.Ell>10 <br /> days</Wrap.Ell>
                    </Wrap.Aylanalar>
            </Wrap.Div2>
        </Wrap>
    )
}
export default index;