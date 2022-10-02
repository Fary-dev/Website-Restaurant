import React from "react";
import styled, { CSSProperties } from "styled-components";

const ItemList = [
  {
    image: "",
    title: "Recent Articles",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur. Donec id elit non mi .",
  },
  {
    image:
      "https://max-themes.net/demos/recibo/upload/photodune-6672566-pizza-m-400x300.jpg",
    title: "DONEC LUCTUS IMPERDIET",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere...",
  },
  {
    image:
      "https://max-themes.net/demos/recibo/upload/photodune-8433926-italian-food-ingredients-m-400x300.jpg",
    title: "MAGNA PARS STUDIORUM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere...",
  },
  {
    image:
      "https://max-themes.net/demos/recibo/upload/photodune-1917819-grilled-steak-m-400x300.jpg",
    title: "SEDIAL EIUSMOD TEMPOR",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere...",
  },
];
const ItemContainer: CSSProperties = {
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "start",
};
function items(props: { image: string, title: string, description: string }) {
  return (
    <div style={ItemContainer}>
      {props.image === "" ? null : <img src={props.image} alt="pic" />}
      <div></div>
      {props.image === "" ? (
        <h2
          style={{
            fontFamily: "Marck Script",
          }}
        >
          {props.title}
        </h2>
      ) : (
        <h5>{props.title}</h5>
      )}
      <p>{props.description}</p>
      <a href="#dfs">{props.image === "" ? "READ ALL NEWS" : "READ MORE"}</a>
    </div>
  );
}
const Container = styled.div`
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1.5rem;
  margin: 0 3%;
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
  }
  h2 {
    font-size: 2.2rem;
    margin: 0;
  }
  h5 {
    letter-spacing: 0.05rem;
    margin: 0;
  }
  p {
    font-size: 0.8rem;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: black;
    font-size: 0.7rem;
    font-weight: bold;
    letter-spacing: 0.15rem;
    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }
  }
  @media (width < 767px) {
    justify-content: start;
    grid-template-columns: auto;
    grid-template-rows: 1fr;
    grid-gap: 2.5rem;
  }
`;
const VideoBanner = styled.video`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  object-fit: cover;
  @media screen and (width > 1170px) {
    max-height: 800px;
  }
`;
const Text = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vw / 1.85);
  @media screen and (width > 1170px) {
    max-height: 800px;
  }
  h2 {
    font-size: clamp(1rem, 5vw, 3rem);
    color: ${({ theme }) => theme.primaryColor};
    font-family: "Marck Script";
    line-height: 0.1rem;
  }
  h1 {
    font-size: clamp(1rem, 10vw, 7rem);
    color: #fff;
    font-family: "Marck Script";
    line-height: 0.1rem;
  }
`;
const Column = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function Video() {
  return (
    <>
      <Container>
        {ItemList.map((item, index) => (
          <div key={index}>{items(item)}</div>
        ))}
      </Container>
      <Text>
        <VideoBanner
          src="https://max-themes.net/demos/recibo/upload/pizza.mp4"
          playsInline
          autoPlay
          loop
          muted
        />
        <Column>
          <h2>Best food comes with</h2>
          <h1>Best Technique</h1>
        </Column>
      </Text>
    </>
  );
}
