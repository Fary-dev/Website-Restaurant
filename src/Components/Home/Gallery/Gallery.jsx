import React from "react";
import styled from "styled-components";

const Container = styled.div`
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
    color: #000;
    margin: 30px 0 10px 0;
    &::before,
    &::after {
      position: absolute;
      top: 50%;
      width: 80px;
      height: 4px;
      content: "";
      left: -125px;
      border-bottom: 1px solid #000;
      border-top: 1px solid #000;
      margin: 0 20px;
    }
    &::after {
      left: 100%;
    }
  }
`;
const Grid = styled.div`
  width: 100%;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto, 1fr);
  gap: 20px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  @media (min-width: 768px) {
    max-width: ${({ theme }) => theme.screenSize.maxWidth};
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    .p0 {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
  }
`;

function Gallery() {
  const Photos = [
    "https://max-themes.net/demos/recibo/upload/photodune-7791145-cheese-variety-m-400x400.jpg",
    "https://max-themes.net/demos/recibo/upload/shutterstock_288860159-400x400.jpg",
    "https://max-themes.net/demos/recibo/upload/shutterstock_208221007-400x400.jpg",
    "https://max-themes.net/demos/recibo/upload/shutterstock_185678159-400x400.jpg",
    "https://max-themes.net/demos/recibo/upload/shutterstock_181815842-400x400.jpg",
    "https://max-themes.net/demos/recibo/upload/shutterstock_156764888-400x400.jpg",
    "https://max-themes.net/demos/recibo/upload/photodune-1421017-restaurant-set-m-400x400.jpg",
  ];

  return (
    <Container>
      <h1>Gallery</h1>
      <Grid>
        {Photos.map((photo, index) => (
          <img
            className={"p" + index}
            src={photo}
            key={index}
            alt={photo + index}
          ></img>
        ))}
      </Grid>
    </Container>
  );
}

export default Gallery;
