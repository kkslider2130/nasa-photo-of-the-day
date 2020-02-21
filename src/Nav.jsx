import React from "react";
import HeaderDiv, { HeaderPara } from "../src/style/HeaderStyles";

function Header() {
  return (
    <>
      <HeaderDiv>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a3/NASA_Worm_logo.svg"
          alt="nasa logo"
        />
        <HeaderPara>Astronomy Picture of the Day</HeaderPara>
      </HeaderDiv>
    </>
  );
}

export default Header;
