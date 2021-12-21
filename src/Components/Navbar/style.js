import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Basket } from "../../assets/icons/basket.svg";
import { ReactComponent as Bang } from "../../assets/icons/bang.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";

export const Wrap = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

Wrap.Logo = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
  display: flex;
  align-items: center;
`;

Wrap.LogoIcon = styled(Logo)`
  width: 31px;
  height: 38px;
  padding: 5px;
`;

Wrap.Input = styled.input`
  width: 582px;
  height: 46px;
  border: 2px solid #7ac751;
  box-sizing: border-box;
  border-radius: 8px;
`;

Wrap.Selectbox = styled.div`
  border: 1px solid red;
`;
Wrap.Select = styled.select`
  width: 90px;
  height: 17px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  border: none;
`;
Wrap.Searchbox = styled.div`
  width: 55px;
  height: 43px;
  display: flex;
  align-items: center;
  background: #7ac751;
  border-radius: 0px 7px 6px 0px;
`;
Wrap.Search = styled(Search)`
  text-align: center;
`;

Wrap.Iconsbox = styled.div``;
Wrap.Basket = styled(Basket)`
  width: 24px;
  height: 24px;
  padding-right: 20px;
`;

Wrap.Bang = styled(Bang)`
  width: 24px;
  padding-right: 20px;

  height: 24px;
`;

Wrap.User = styled(User)`
  width: 24px;
  height: 24px;
`;
