import React, { Component } from 'react';
import { Wrap } from './style' ;


export default class  index extends Component {
    render() {
        return (
           <div>
               <Wrap>
               <Wrap.Text1>
                   TOP COLLECTIONS 2022
               </Wrap.Text1>
               <Wrap.Text2>
                   We Serve Your <br /> Dreem Furnuture
               </Wrap.Text2>
               <Wrap.Text3>
                   Get 50% off all Product
               </Wrap.Text3>
               <Wrap.Button>
                   SHOP NOW
               </Wrap.Button>
               <Wrap.Imgmain />
               <Wrap.Img1box>
                   <Wrap.Img1 /> 
                  
               </Wrap.Img1box>
           </Wrap>
           </div>
           
        )
    }
}
