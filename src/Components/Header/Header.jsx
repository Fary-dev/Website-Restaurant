import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import HeaderItems from "./HeaderItems";

const BgHeader = styled.header`
  position: relative;
  width: 100%;
  height: min(800px, 100vw);
  background-image: url("https://max-themes.net/demos/recibo/upload/slider-2.jpg");
  background-position: center;
  background-size: cover;
`;
const Highlight = styled.span`
  position: absolute;
  right: 0;
  height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0);
`;
const Item = styled.div`
  position: absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  top: calc(100vw - 4vh);
  display: flex;
  height: auto;
  width: 100%;
  z-index: 1;
  @media (width> 800px) {
    top: 750px;
  }
`;

function Header() {
  return (
    <section>
      <BgHeader id="Header">
        <Highlight>
          <Navbar/>
        </Highlight>
      </BgHeader>
      <Item>

        <HeaderItems/>
      </Item>
    </section>
  );
}

export default Header;


