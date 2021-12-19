import styled from "styled-components";
import { ReactComponent as Car } from '../../assets/icons/paymentcar.svg';
import { ReactComponent as Card } from '../../assets/icons/paymentcard.svg';
import { ReactComponent as Gift } from '../../assets/icons/paymentgift.svg';
import { ReactComponent as Fone } from '../../assets/icons/paymentfone.svg';


export const Wrap = styled.div`
margin-top:580px

`;

Wrap.DivAll = styled.div`
display:flex;
justify-content:space-around;
`;

Wrap.DivItem = styled.div`
display:flex;
 
`;
Wrap.Item1 = styled(Car)``;
Wrap.Item2 = styled(Card)``;
Wrap.Item3 = styled(Gift)``;
Wrap.Item4 = styled(Fone)``;