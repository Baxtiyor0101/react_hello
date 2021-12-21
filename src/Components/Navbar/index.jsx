import { Wrap } from "./style";
import React from "react";
const index = () => {
  return (
    <Wrap>
      <Wrap.Logo>
        {" "}
        <Wrap.LogoIcon /> FRANINKING
      </Wrap.Logo>
      <div style={{ width: "582px" }}>
        <Wrap.Input style={{}} type="text" placeholder="Search here" />
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
      </div>
      <Wrap.Iconsbox>
        <Wrap.Basket />
        <Wrap.Bang />
        <Wrap.User />
      </Wrap.Iconsbox>
    </Wrap>
  );
};
export default index;
