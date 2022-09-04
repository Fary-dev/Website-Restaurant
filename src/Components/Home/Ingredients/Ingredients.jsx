import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 3%;
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  gap: 10px;
  @media (width > 767px) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 50%;
  gap: 20px;
  img {
    max-width: 47%;
    object-fit: contain;
    border-radius: 5px;
  }
  @media (width < 767px) {
    flex-direction: column;
    width: 100%;
    img {
      max-width: 100%;
    }
  }
`;
const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  h1 {
    font-family: "Birthstone";
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    line-height: 3rem;
    word-wrap: wrap;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  h2 {
    position: relative;
    font-family: "Poppins", "Open Sans", Arial;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.text.underTitleColor};
    padding-bottom: 30px;
    &::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 2px;
      background: ${({ theme }) => theme.primaryColor};
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  p {
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    font-family: Arial, "Open Sans";
    color: ${({ theme }) => theme.text.detailsColor};
    text-align: center;
    line-height: 1.3rem;
    font-weight: 100;
    padding: 0;
  }
  @media (width < 768px) {
    width: 100%;
    max-width: 400px;
  }
`;
const Button = styled.a`
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: transparent;
  padding: 15px 25px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  margin-top: 25px;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

function Ingredients() {
  return (
    <Container>
      <LeftSide>
        <img
          src="https://max-themes.net/demos/recibo/upload/service-1.jpg"
          alt=""
        />
        <img
          src="https://max-themes.net/demos/recibo/upload/service-2.jpg"
          alt=""
        />
      </LeftSide>
      <RightSide>
        <h1>Perfect Ingredients</h1>
        <h2>THIS IS OUR SECRET</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing Dolores. Ad Lorem
          ipsum dolor, sit amet consectetur adipisicing elis. Quisquam, iure.
          Ducimus alias velit labours Mobis.
        </p>
        <Button>learn more</Button>
      </RightSide>
    </Container>
  );
}

export default Ingredients;
