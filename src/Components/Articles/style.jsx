import styled from "styled-components";
import Photo1 from '../../assets/img/articles/Card1.png';



// import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export const Wrap = styled.div`
margin-top:450px;
color:#fff;
`

Wrap.H1 = styled.h1`
font-weight: bold;
font-size: 36px;
line-height: 45px;
text-transform: uppercase;
color: #555555;
text-align:center;
`;

Wrap.DivAll = styled.div`
margin-left:80px;
`
Wrap.DivAll1 = styled.div`
display: flex;
justify-content: space-around;
`
Wrap.DivAll2 = styled.div`
display: flex;
justify-content: space-around;
`

Wrap.Divitem = styled.div`
width: 569.75px;
height: 455.28px;
background-image: url(${Photo1});
border-radius: 8px;
background-repeat: no-repeat;
padding:30px;
`
Wrap.Furnuture = styled.div`
width: 99.6px;
height: 23.96px;
background: #F8FAFB;
border-radius: 3px; 
text-align:center;
color: #7AC751;
`
Wrap.Text=styled.div`
width: 490.1px;
height: 75.88px;
font-weight: bold;
font-size: 39px;
line-height: 120%;
letter-spacing: 0.005em;
`