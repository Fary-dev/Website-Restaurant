import React, { useState, useEffect } from "react";
import styled from "styled-components";
import About from "./About/About";
import Navbar from "../Navbar/Navbar";
import HeaderItems from "./Header/HeaderItems";
import ChefRecommends from "./ChefRecommends/ChefRecommends";
import Ingredients from "./Ingredients/Ingredients";
import GeneralInformation from "./GeneralInformation/GeneralInformation";

import Video from "./Video/Video";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import CopyRight from "../CopyRight/CopyRight";

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
  z-index: 1;
`;
const Item = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: calc(100vw - 4vh);
  display: flex;
  height: auto;
  width: 100%;
  z-index: 1;
  gap: 70px;
  @media (width> 800px) {
    top: 750px;
  }
  @media (width< 768px) {
    top: calc(125vw - 5vh);
  }
`;
const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (width < 400px) {
    top: 40%;
  }
  @media (width < 350px) {
    top: 30%;
  }
  @media (width < 300px) {
    top: 20%;
  }
`;
const TextCenter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 0rem;
  span {
    color: ${({ theme }) => theme.text.spanTextColor};
    font-family: "Marck Script";
    font-size: clamp(0.5rem, 5.5vw, 4rem);
  }
  h1 {
    color: ${({ theme }) => theme.text.wightColor};
    font-family: "Marck Script";
    font-size: clamp(0.5rem, 10.5vw, 8rem);
  }
  h2 {
    color: ${({ theme }) => theme.text.another};
    font-family: "Poppins";
    font-size: clamp(0.5rem, 4.5vw, 4rem);
  }
`;
function Home() {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  return (
    <section>
      {screenSize.dynamicWidth < 768 ? <Navbar /> : null}
      <BgHeader id="header">
        <Highlight>
          {screenSize.dynamicWidth > 767 ? <Navbar /> : null}
        </Highlight>
        <Container>
          <TextCenter>
            <span>Taste Of Foodo</span>
            <h1>Started Since</h1>
            <h2>1987</h2>
          </TextCenter>
        </Container>
      </BgHeader>
      <Item>
        <HeaderItems />
        <About />
        <ChefRecommends />
        <Ingredients />
        <GeneralInformation />
        <Video />
        <Testimonial />
        <Contact />
        <CopyRight />
      </Item>
    </section>
  );
}

export default Home;
