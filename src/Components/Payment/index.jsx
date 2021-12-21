import { Wrap } from './style' ;
import React from 'react'

 const index = () => {
    return (
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
    )
}
export default index;