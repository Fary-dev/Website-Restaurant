import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 650px;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1531234799389-dcb7651eb0a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  &::before {
    backdrop-filter: blur(2px);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const Container = styled.div`
  position: Absolute;
  height: 100%;
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 0.7rem;
  padding: 0 3%;
  h1 {
    display: inline-block;
    position: relative;
    font-size: clamp(1rem, 11vw, 3rem);
    font-family: "Marck Script";

    @media (width > 767px) {
      &::before,
      &::after {
        position: absolute;
        top: 50%;
        width: 80px;
        height: 4px;
        content: "";
        left: -125px;
        border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
        border-top: 1px solid ${({ theme }) => theme.primaryColor};
        margin: 0 20px;
      }
      &::after {
        left: 100%;
      }
    }
  }
`;

function ChefRecommends() {
  const SlidesList = [
    {
      photo:
        "https://max-themes.net/demos/recibo/upload/shutterstock_208221007-400x300.jpg",
      title: "AUSTRALIAN RIBEYE",
      details: "Chips, Beef, Salad",
      price: 35,
    },
    {
      photo:
        "https://max-themes.net/demos/recibo/upload/shutterstock_130255091-400x300.jpg",
      title: "RAINBOW MACAROON",
      details: "Macaroon, Berries, Cream",
      price: 10,
    },
    {
      photo:
        "https://max-themes.net/demos/recibo/upload/shutterstock_288860141-400x300.jpg",
      title: "TRIO SAUSAGES",
      details: "Sausages, Chips, Tomato",
      price: 8,
    },
    {
      photo:
        "https://max-themes.net/demos/recibo/upload/shutterstock_156764888-400x300.jpg",
      title: "TIRAMISU",
      details: "Espresso Coffee, Eggs, Cocoa",
      price: 3.9,
    },
    {
      photo:
        "https://max-themes.net/demos/recibo/upload/shutterstock_246091045-400x300.jpg",
      title: "OAT CEREAL",
      details: "Oat, Banana, Cereal",
      price: 2,
    },
    {
      photo:
        "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
      title: "JOHNNY WAFFLES",
      details: "Raspberries, Blueberry, Waffle, Vanilla",
      price: 3,
    },
    {
      photo:
        "https://max-themes.net/demos/recibo/upload/shutterstock_181815842-400x300.jpg",
      title: "MIXED FRUITS",
      details: "Raspberries, Blueberry, Honey",
      price: 6.6,
    },
    {
      photo:
        "https://max-themes.net/demos/recibo/upload/shutterstock_219271261-400x300.jpg",
      title: "CUPCAKE WITH BERRIES",
      details: "Raspberries, Blueberry, Honey",
      price: 5,
    },
  ];
  return (
    <Banner>
      <Container>
        <h1>Chef Recommends</h1>
        <Slider slides={SlidesList} />
      </Container>
    </Banner>
  );
}

export default ChefRecommends;
