import styled from "styled-components";
import { ReactComponent as Rasm1 } from '../../assets/img/rasm1.svg';
import { ReactComponent as Rasm3 } from '../../assets/img/rasm4.svg';


export const Wrap = styled.div`
position: absolute;
width: 899px;
height: 439px;
left: 300px;
top: 180px;

background: linear-gradient(103.4deg, rgba(241, 250, 255, 0.88) 0.89%, #F1FAFF 101.61%);
backdrop-filter: blur(155px);
border-radius: 1px;
`;

Wrap.Text1 = styled.p`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.05em;
color: #7AC751;
`;

Wrap.Text2 = styled.p`
font-family: Rubik;
font-style: normal;
font-weight: 800;
font-size: 40px;
line-height: 47px;
color: #2F2F2F;
`;

Wrap.Text3 = styled.p`
font-family: Mulish;
font-style: normal;
font-weight: 600;
font-size: 27px;
line-height: 26px;
color: rgba(81, 81, 81, 0.71);
`;

Wrap.Button = styled.button`
width: 129px;
height: 40px;
background: #7AC751;
border-radius: 5px;
`;

Wrap.Imgmain = styled(Rasm1)`
position: absolute;
left:300px;
top:50px;
width: 374px;
height: 374px;
`;

Wrap.Img1box = styled.div`
position: absolute;
width: 98px;
height: 91.47px;
right:68px;
top: 79px;

background: red;
display:flex;
align-items:center
border: 2px solid #FFFFFF;
box-sizing: border-box;
// z-index:2;
border-radius: 8px;
`;

Wrap.Img1 = styled(Rasm3)`
 
 `;
 